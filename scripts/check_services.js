import fs from 'fs';
const text = fs.readFileSync('src/data/services.ts', 'utf8');
const arrayStr = text.substring(text.indexOf('export const services: Service[] = ') + 35).replace(/;\s*$/, '');
const services = eval(`(${arrayStr})`);

const emergencyPillar = services.find(s => s.isPillar && s.category === 'emergency');
console.log('Emergency Pillar:', emergencyPillar ? emergencyPillar.slug : 'None');

const stumpGrinding = services.find(s => s.slug === 'stump-grinding');
console.log('Stump Grinding Category:', stumpGrinding ? stumpGrinding.category : 'None');
