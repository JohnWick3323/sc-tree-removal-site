import { makeHandler } from '@keystatic/astro/api';
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

const keystaticHandler = makeHandler({
  config,
  clientId: requiredEnv.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: requiredEnv.KEYSTATIC_GITHUB_CLIENT_SECRET,
  secret: requiredEnv.KEYSTATIC_SECRET,
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
    return await keystaticHandler(context);
  } catch (error) {
    console.error('Keystatic API failed', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      env: getEnvStatus(),
    });

    throw error;
  }
};

export const ALL = all;
export const prerender = false;
