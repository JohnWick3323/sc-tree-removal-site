import fs from 'fs';
const lines = fs.readFileSync('src/pages/services/[service].astro', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.length > 200) console.log(i + 1, l.length, l.substring(0, 50));
});
