import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const servicesFile = path.join(__dirname, '../src/data/services.ts');

let text = fs.readFileSync(servicesFile, 'utf-8');

// The regex finds `hasContent: true,` followed by ANYTHING, until it hits `image: '/images/`
// and replaces all of that with just `hasContent: true,`
const regex = /hasContent:\s*true,[\s\S]*?(?=\s*image:\s*'\/images\/)/g;

const matches = text.match(regex);
console.log(`Found ${matches ? matches.length : 0} blocks to clean up.`);

text = text.replace(regex, 'hasContent: true,');

// Also check for `fullBodyHtml:` just in case
if (text.includes('fullBodyHtml:')) {
  console.log('WARNING: Still found fullBodyHtml in text');
}

fs.writeFileSync(servicesFile, text);
console.log('Cleaned services.ts');
