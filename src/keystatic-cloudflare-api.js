import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { env } from 'cloudflare:workers';
import config from 'virtual:keystatic-config';

const getSecret = (key) => {
  const value = env[key];
  return typeof value === 'string' && value.length > 0 ? value : undefined;
};

const requiredEnv = {
  KEYSTATIC_GITHUB_CLIENT_ID: getSecret('KEYSTATIC_GITHUB_CLIENT_ID'),
  KEYSTATIC_GITHUB_CLIENT_SECRET: getSecret('KEYSTATIC_GITHUB_CLIENT_SECRET'),
  KEYSTATIC_SECRET: getSecret('KEYSTATIC_SECRET'),
};

const keystaticHandler = makeGenericAPIRouteHandler({
  config,
  clientId: requiredEnv.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: requiredEnv.KEYSTATIC_GITHUB_CLIENT_SECRET,
  secret: requiredEnv.KEYSTATIC_SECRET,
}, {
  slugEnvName: 'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG',
});

const getEnvStatus = () => ({
  KEYSTATIC_GITHUB_CLIENT_ID: requiredEnv.KEYSTATIC_GITHUB_CLIENT_ID ? 'present' : 'missing',
  KEYSTATIC_GITHUB_CLIENT_SECRET: requiredEnv.KEYSTATIC_GITHUB_CLIENT_SECRET ? 'present' : 'missing',
  KEYSTATIC_SECRET: !requiredEnv.KEYSTATIC_SECRET
    ? 'missing'
    : requiredEnv.KEYSTATIC_SECRET.length >= 32
      ? 'present'
      : 'too_short',
});

export const all = async (context) => {
  const url = new URL(context.request.url);

  if (url.pathname === '/api/keystatic/health') {
    return Response.json({
      ok: Object.values(getEnvStatus()).every((status) => status === 'present'),
      env: getEnvStatus(),
      storage: config.storage?.kind ?? 'unknown',
      repo: config.storage?.repo ?? null,
    });
  }

  try {
    const { body, headers, status } = await keystaticHandler(context.request);

    return new Response(body, {
      status,
      headers,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : undefined;

    console.error('Keystatic API failed', {
      message,
      stack,
      env: getEnvStatus(),
    });

    if (url.searchParams.get('debug') === '1') {
      return Response.json(
        {
          ok: false,
          path: url.pathname,
          message,
          stack,
          env: getEnvStatus(),
        },
        { status: 500 },
      );
    }

    throw error;
  }
};

export const ALL = all;
export const prerender = false;
