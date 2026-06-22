import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { fileURLToPath } from 'url';
import util from 'util';

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

  // Extract the array string
  const arrayStartIdx = servicesText.indexOf('export const services: Service[] = [');
  if (arrayStartIdx === -1) throw new Error('Could not find array start');
  const bracketStart = servicesText.indexOf('[', arrayStartIdx);
  
  // Find the end of the array
  // This is a simple assumption that the array ends at the end of the file.
  // We can just grab from bracketStart to the end, but there might be a trailing semicolon.
  let arrayStr = servicesText.substring(bracketStart);
  arrayStr = arrayStr.replace(/;\s*$/, '');

  // We need to evaluate this string. Since it's a JS object array, `eval` might fail if there are syntax errors
  // but it should be valid TS which is mostly valid JS (except type assertions, but we don't have them).
  let servicesArray;
  try {
    servicesArray = eval(`(${arrayStr})`);
  } catch (err) {
    console.error('Failed to eval services array. It might be corrupted.', err);
    // Let's try to repair it. 
    throw err;
  }

  for (const service of servicesArray) {
    const relPath = slugToFileMap[service.slug];
    if (!relPath) continue;

    const fullPath = path.join(baseContentDir, relPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`Skipping ${service.slug}, file not found: ${fullPath}`);
      continue;
    }

    const mdContent = fs.readFileSync(fullPath, 'utf-8');
    
    // Parse markdown to HTML
    let html = await marked.parse(mdContent);
    html = html.replace(/<h1[^>]*>.*?<\/h1>/i, '');
    
    // Inject fullBodyHtml
    service.fullBodyHtml = html.trim();
    // Do NOT delete longContent, faqs, or other properties because we need them for SEO
    delete service.contentSections; // Only delete this if it exists, since we changed strategy
    console.log(`Processed ${service.slug}`);
  }

  // Stringify the array back
  const newArrayStr = util.inspect(servicesArray, {
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    showHidden: false,
    compact: false
  });

  // Reconstruct the file
  const newFileContent = servicesText.substring(0, arrayStartIdx) + 'export const services: Service[] = ' + newArrayStr + ';\n';
  fs.writeFileSync(servicesFile, newFileContent);
  console.log('Successfully updated services.ts cleanly using eval and util.inspect');
}

run().catch(console.error);
