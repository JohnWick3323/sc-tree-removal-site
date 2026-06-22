import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseContentDir = path.join(__dirname, '../Services Content');
const servicesFile = path.join(__dirname, '../src/data/services.ts');

const slugToFileMap = {
  'tree-removal': 'Tree Removal/Tree Removal.md',
  'dead-tree-removal': 'Tree Removal/Dead Tree Removal.md',
  'hazardous-tree-removal': 'Tree Removal/Hazardous Tree Removal.md',
  'crane-assisted-tree-removal': 'Tree Removal/Crane-Assisted Tree Removal.md',
  'tree-cutting-and-felling': 'Tree Removal/Tree Cutting & Felling.md',
  'emergency-tree-removal': 'Emergency Tree Removal/Emergency Tree Removal.md',
  'emergency-storm-response': 'Emergency Tree Removal/Emergency Storm Response.md',
  'fallen-tree-removal': 'Emergency Tree Removal/Fallen Tree Removal.md',
  'tree-on-house-removal': 'Emergency Tree Removal/Tree on House Removal.md',
  'tree-on-car-removal': 'Emergency Tree Removal/Tree on Car Removal.md',
  'land-clearing': 'Land Clearing/Land & Lot Clearing.md',
  'forestry-mulching': 'Land Clearing/Forestry Mulching.md',
  'brush-clearing': 'Land Clearing/Brush Clearing.md',
  'debris-removal': 'Land Clearing/Debris Removal.md'
};

async function run() {
  let servicesText = fs.readFileSync(servicesFile, 'utf-8');

  for (const [slug, relPath] of Object.entries(slugToFileMap)) {
    const fullPath = path.join(baseContentDir, relPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`Skipping ${slug}, file not found: ${fullPath}`);
      continue;
    }

    const mdContent = fs.readFileSync(fullPath, 'utf-8');
    
    // Parse markdown to HTML
    let html = await marked.parse(mdContent);
    
    // Remove the first H1 tag since we use heroHeading
    html = html.replace(/<h1[^>]*>.*?<\/h1>/i, '');
    
    // Convert backticks, etc so we can inject as a template string
    // actually, it's safer to JSON.stringify it to avoid template string breaking
    const stringifiedHtml = JSON.stringify(html.trim());

    // Inject into services.ts
    // We will look for: slug: 'slug-name', and inject fullBodyHtml property
    // We need to find the block for this slug. 
    // It's safer to find `slug: '${slug}'` and append `fullBodyHtml` right after `hasContent: true,`
    const slugRegex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?hasContent:\\s*true,)`);
    if (slugRegex.test(servicesText)) {
      if (servicesText.includes(`fullBodyHtml`) && new RegExp(`slug:\\s*'${slug}',[\\s\\S]*?fullBodyHtml:`).test(servicesText)) {
        // Replace existing fullBodyHtml
        // A bit tricky with regex, instead let's just add it if not exists.
        console.log(`fullBodyHtml already exists for ${slug}? We should update it, but for now let's just do a simple replacement if it doesn't.`);
      }
      
      // We can also just replace `longContent: { ... },` entirely? No, other services might use it.
      // Let's just insert fullBodyHtml: ${stringifiedHtml}, right after hasContent: true,
      servicesText = servicesText.replace(slugRegex, `$1\n    fullBodyHtml: ${stringifiedHtml},`);
      console.log(`Injected HTML for ${slug}`);
    } else {
      console.log(`Could not find block for ${slug}`);
    }
  }

  fs.writeFileSync(servicesFile, servicesText);
  console.log('Successfully updated services.ts');
}

run().catch(console.error);
