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
  'crane-assisted-removal': 'Tree Removal/Crane-Assisted Tree Removal.md',
  'tree-cutting-felling': 'Tree Removal/Tree Cutting & Felling.md',
  'emergency-tree-removal': 'Emergency Tree Removal/Emergency Tree Removal.md'
};

async function run() {
  let servicesText = fs.readFileSync(servicesFile, 'utf-8');

  const arrayStartIdx = servicesText.indexOf('export const services: Service[] = [');
  if (arrayStartIdx === -1) throw new Error('Could not find array start');
  const bracketStart = servicesText.indexOf('[', arrayStartIdx);
  
  let arrayStr = servicesText.substring(bracketStart);
  arrayStr = arrayStr.replace(/;\s*$/, '');

  let servicesArray = eval(`(${arrayStr})`);

  // Fix Emergency Pillar issue
  const emergencyPillar = servicesArray.find(s => s.slug === 'emergency-storm-response');
  if (emergencyPillar && emergencyPillar.isPillar) {
    emergencyPillar.isPillar = false;
    emergencyPillar.parentPillar = 'emergency-tree-removal';
    
    // Add emergency-tree-removal if it doesn't exist
    if (!servicesArray.find(s => s.slug === 'emergency-tree-removal')) {
      servicesArray.splice(servicesArray.indexOf(emergencyPillar), 0, {
        slug: 'emergency-tree-removal',
        name: 'Emergency Tree Removal',
        category: 'emergency',
        isPillar: true,
        clusterOrder: 0,
        hasContent: true,
        image: emergencyPillar.image,
        description: '24/7 emergency tree removal services across South Carolina.',
        metaDescription: '24/7 Emergency tree removal in South Carolina. Fast response for fallen trees on houses, cars, and driveways.',
        heroHeading: 'Emergency Tree Removal in SC',
        features: ['24/7 Response', 'Storm Damage Specialists'],
        faqs: []
      });
      console.log('Added emergency-tree-removal to services.ts');
    }
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
    
    let html = await marked.parse(mdContent);
    html = html.replace(/<h1[^>]*>.*?<\/h1>/i, '');
    
    service.fullBodyHtml = html.trim();
    delete service.contentSections;
    console.log(`Processed ${service.slug}`);
  }

  const newArrayStr = util.inspect(servicesArray, {
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    showHidden: false,
    compact: false
  });

  const newFileContent = servicesText.substring(0, arrayStartIdx) + 'export const services: Service[] = ' + newArrayStr + ';\n';
  fs.writeFileSync(servicesFile, newFileContent);
  console.log('Successfully injected missing files into services.ts');
}

run().catch(console.error);
