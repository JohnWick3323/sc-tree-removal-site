import { makeHandler } from '@keystatic/astro/api';
import { env } from 'cloudflare:workers';
import config from 'virtual:keystatic-config';

const getSecret = (key) => {
  const value = env[key];
  return typeof value === 'string' && value.length > 0 ? value : undefined;
};

export const all = makeHandler({
  config,
  clientId: getSecret('KEYSTATIC_GITHUB_CLIENT_ID'),
  clientSecret: getSecret('KEYSTATIC_GITHUB_CLIENT_SECRET'),
  secret: getSecret('KEYSTATIC_SECRET'),
});

export const ALL = all;
export const prerender = false;
