import fs from 'node:fs';

const wranglerJsonPath = './dist/_worker.js/wrangler.json';

if (fs.existsSync(wranglerJsonPath)) {
  const content = fs.readFileSync(wranglerJsonPath, 'utf8');
  const config = JSON.parse(content);

  // Remove problematic fields causing Wrangler deploy errors on Pages
  delete config.assets;
  delete config.kv_namespaces;

  // Remove warnings
  const warnings = [
    'definedEnvironments', 'ai_search_namespaces', 'ai_search', 'agent_memory',
    'secrets_store_secrets', 'artifacts', 'unsafe_hello_world', 'flagship',
    'worker_loaders', 'ratelimits', 'vpc_services', 'vpc_networks', 'python_modules', 'previews'
  ];
  warnings.forEach(w => delete config[w]);

  if (config.dev) {
    delete config.dev.enable_containers;
    delete config.dev.generate_types;
  }

  fs.writeFileSync(wranglerJsonPath, JSON.stringify(config, null, 2));
  console.log('✅ Successfully patched dist/_worker.js/wrangler.json for Cloudflare Pages deployment.');
}
