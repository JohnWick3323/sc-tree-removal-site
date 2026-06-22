import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

// The markdown files to service slugs mapping
const fileToSlug = {
  // Emergency Tree Removal
  "Emergency Storm Response.md": "emergency-storm-response",
  "Emergency Tree Removal.md": "emergency-tree-removal",
  "Fallen Tree Removal.md": "fallen-tree-removal",
  "Tree on Car Removal.md": "tree-on-car-removal",
  "Tree on House Removal.md": "tree-on-house-removal",
  // Tree Removal
  "Crane-Assisted Tree Removal.md": "crane-assisted-tree-removal",
  "Dead Tree Removal.md": "dead-tree-removal",
  "Hazardous Tree Removal.md": "hazardous-tree-removal",
  "Tree Cutting & Felling.md": "tree-cutting-felling",
  "Tree Removal.md": "residential-tree-removal" // 'residential-tree-removal' slug used for 'Tree Removal'
};

const servicesFile = path.join(process.cwd(), 'src/data/services.ts');
let servicesContent = fs.readFileSync(servicesFile, 'utf8');

const directories = [
  path.join(process.cwd(), 'Services Content/Emergency Tree Removal'),
  path.join(process.cwd(), 'Services Content/Tree Removal')
];

for (const dir of directories) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    
    const slug = fileToSlug[file];
    if (!slug) {
      console.log(`No slug mapped for ${file}`);
      continue;
    }

    const mdPath = path.join(dir, file);
    const mdContent = fs.readFileSync(mdPath, 'utf8');
    
    // Parse markdown to HTML
    let html = marked(mdContent);
    
    // Remove the first <h1> tag and its contents
    html = html.replace(/<h1[^>]*>.*?<\/h1>/i, '');
    
    // Also remove any remaining heading for the title if it was parsed differently, like <h1 id="...">
    html = html.replace(/<h1[^>]*>.*?<\/h1>/si, '');
    
    // Escape backticks and dollar signs for TS template literal
    const escapedHtml = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    
    // Check if the service already has fullBodyHtml
    const slugRegex = new RegExp(`slug:\\s*['"]${slug}['"]`, 'g');
    const match = slugRegex.exec(servicesContent);
    if (match) {
      // Find the start of the object
      const objectStartIndex = servicesContent.lastIndexOf('{', match.index);
      // Find hasContent: false/true inside this object
      const objectEndIndex = servicesContent.indexOf('faqs:', match.index); // faqs is always at the end
      if (objectEndIndex !== -1) {
        const objectContent = servicesContent.substring(objectStartIndex, objectEndIndex);
        
        // Let's replace hasContent: false with hasContent: true
        if (objectContent.includes('hasContent: false')) {
          servicesContent = servicesContent.replace(
            objectContent,
            objectContent.replace('hasContent: false', 'hasContent: true')
          );
        }

        // If fullBodyHtml is already there, we might need to replace it.
        // It's safer to use regex replacement on the whole services.ts for each slug if we just append it before faqs
        
        // Wait, for Residential Tree Removal, fullBodyHtml is already added but has an h1.
        // Let's remove the existing fullBodyHtml block if it exists
        const fullBodyHtmlRegex = new RegExp(`slug:\\s*['"]${slug}['"][\\s\\S]*?fullBodyHtml:\\s*\`[\\s\\S]*?\`,\\s*faqs:`);
        
        if (fullBodyHtmlRegex.test(servicesContent)) {
          console.log(`Replacing existing fullBodyHtml for ${slug}`);
          servicesContent = servicesContent.replace(
            new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?)(fullBodyHtml:\\s*\`[\\s\\S]*?\`,\\s*)(faqs:)`),
            `$1fullBodyHtml: \`\n${escapedHtml.trim()}\n  \`,\n  $3`
          );
        } else {
          console.log(`Adding fullBodyHtml for ${slug}`);
          servicesContent = servicesContent.replace(
            new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?hasContent:\\s*true,\\s*)(faqs:)`),
            `$1fullBodyHtml: \`\n${escapedHtml.trim()}\n  \`,\n  $2`
          );
        }
      }
    }
  }
}

fs.writeFileSync(servicesFile, servicesContent);
console.log("Done updating services.ts");
