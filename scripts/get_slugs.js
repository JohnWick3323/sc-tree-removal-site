import fs from 'fs';
const text = fs.readFileSync('src/data/services.ts', 'utf8');
const regex = /slug:\s*'([^']+)'/g;
let match;
const slugs = [];
while ((match = regex.exec(text)) !== null) {
  slugs.push(match[1]);
}
console.log(slugs.join('\n'));
