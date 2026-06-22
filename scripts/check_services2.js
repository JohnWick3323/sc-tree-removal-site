import fs from 'fs';
const text = fs.readFileSync('src/data/services.ts', 'utf8');
const arrayStr = text.substring(text.indexOf('export const services: Service[] = ') + 35).replace(/;\s*$/, '');
const services = eval(`(${arrayStr})`);

const em = services.filter(s => s.category === 'emergency');
console.log(em.map(s => `${s.slug} (isPillar: ${s.isPillar})`).join('\n'));
