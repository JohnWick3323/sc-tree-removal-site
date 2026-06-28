import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const services = [
  ['tree-removal', 'Tree Removal', 'Services Content/Tree Removal/Tree Removal.md'],
  ['crane-assisted-tree-removal', 'Crane-Assisted Tree Removal', 'Services Content/Tree Removal/Crane-Assisted Tree Removal.md'],
  ['dead-tree-removal', 'Dead Tree Removal', 'Services Content/Tree Removal/Dead Tree Removal.md'],
  ['hazardous-tree-removal', 'Hazardous Tree Removal', 'Services Content/Tree Removal/Hazardous Tree Removal.md'],
  ['tree-cutting-felling', 'Tree Cutting & Felling', 'Services Content/Tree Removal/Tree Cutting & Felling.md'],
  ['emergency-tree-removal', 'Emergency Tree Removal', 'Services Content/Emergency Tree Removal/Emergency Tree Removal.md'],
  ['emergency-storm-response', 'Emergency Storm Response', 'Services Content/Emergency Tree Removal/Emergency Storm Response.md'],
  ['fallen-tree-removal', 'Fallen Tree Removal', 'Services Content/Emergency Tree Removal/Fallen Tree Removal.md'],
  ['tree-on-house-removal', 'Tree on House Removal', 'Services Content/Emergency Tree Removal/Tree on House Removal.md'],
  ['tree-on-car-removal', 'Tree on Car Removal', 'Services Content/Emergency Tree Removal/Tree on Car Removal.md'],
  ['land-clearing', 'Land & Lot Clearing', 'Services Content/Land Clearing/Land & Lot Clearing.md'],
  ['brush-clearing', 'Brush Clearing', 'Services Content/Land Clearing/Brush Clearing.md'],
  ['debris-removal', 'Debris Removal', 'Services Content/Land Clearing/Debris Removal.md'],
  ['forestry-mulching', 'Forestry Mulching', 'Services Content/Land Clearing/Forestry Mulching.md'],
];

const targetDir = path.join(root, 'src/content/services');
fs.mkdirSync(targetDir, { recursive: true });

for (const [slug, title, sourcePath] of services) {
  const source = path.join(root, sourcePath);
  const body = fs.readFileSync(source, 'utf8').replace(/^---[\s\S]*?---\s*/, '').trim();
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `metaTitle: ${JSON.stringify(`${title} in South Carolina | South Carolina Tree Removal Experts`)}`,
    `metaDescription: ${JSON.stringify(`Expert ${title.toLowerCase()} in South Carolina from licensed, insured tree service professionals. Free estimates across the state.`)}`,
    'faqs: []',
    '---',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(targetDir, `${slug}.md`), `${frontmatter}${body}\n`);
}

for (const legacyFile of [
  'underbrush-clearing.md',
  'stump-grinding.md',
  'commercial-forestry.md',
  'land-lot-clearing.md',
]) {
  const fullPath = path.join(targetDir, legacyFile);
  if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
}

console.log(`Synced ${services.length} canonical service files.`);
