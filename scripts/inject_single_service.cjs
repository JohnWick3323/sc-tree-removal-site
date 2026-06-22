const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error("Usage: node inject_single_service.cjs <slug> <markdown-file-path>");
  process.exit(1);
}

const slug = args[0];
const mdPath = path.resolve(args[1]);
const servicesPath = path.join(__dirname, '../src/data/services.ts');

const mdContent = fs.readFileSync(mdPath, 'utf8');
const htmlContent = marked.parse(mdContent);
let servicesFile = fs.readFileSync(servicesPath, 'utf8');

// The `services.ts` file exports an array of objects.
// We need to find the object for this slug.
const slugRegex = new RegExp(`slug:\\s*['"]${slug}['"]`);
const match = slugRegex.exec(servicesFile);

if (!match) {
  console.error(`Service with slug '${slug}' not found in services.ts`);
  process.exit(1);
}

const startIndex = match.index;
// Find the end of this object (we can look for the next slug: or the end of the file)
let nextSlugMatch = servicesFile.substring(startIndex + 10).search(/slug:\s*['"]/);
let endIndex = nextSlugMatch === -1 ? servicesFile.length : startIndex + 10 + nextSlugMatch;

let objectContent = servicesFile.substring(startIndex, endIndex);

// Now, inside `objectContent`, we want to replace `fullBodyHtml: ...` if it exists.
// Or if we inserted multiple, we remove all of them.
// fullBodyHtml property starts with `fullBodyHtml:` and ends with `,` or `\n  }` at the end of the object.
// A simpler way: we'll use a regex that matches `fullBodyHtml:\s*` up to the last character before `\n  },` or `\n  slug:` 
// Wait, we know that objectContent is just the string for this object.

// Let's strip out ANY line that starts with `fullBodyHtml: ` or is a continuation of it.
// Since fullBodyHtml is a huge string, it's easiest to just use a state machine or regex.
objectContent = objectContent.replace(/fullBodyHtml:\s*[`'"][\s\S]*?(?=,\n\s*[a-zA-Z0-9_]+:|\n\s*\},|\n\s*\])/g, '');
// Wait, the previous string was concatenated with `+` ? Let's just remove `fullBodyHtml: <anything>` up to the next property or end of object.
// We can use a regex: /fullBodyHtml:[\s\S]*?(?=\n\s*[a-zA-Z0-9_]+:|\n\s*\},|\n\s*\])/g
objectContent = objectContent.replace(/fullBodyHtml:[\s\S]*?(?=\n\s*[a-zA-Z0-9_]+:|\n\s*\},\n)/g, '');

// Also clean up double commas or empty lines we might have caused
// Now add the new fullBodyHtml property at the end of the object.
// The object ends with `  },`
const escapedHtml = htmlContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const newProperty = `fullBodyHtml: \`${escapedHtml}\``;

if (objectContent.endsWith('},\n')) {
   objectContent = objectContent.substring(0, objectContent.lastIndexOf('}')) + `  ${newProperty}\n  },\n`;
} else if (objectContent.endsWith('}')) {
   objectContent = objectContent.substring(0, objectContent.lastIndexOf('}')) + `  ${newProperty}\n  }`;
} else {
   // Just append before the last comma if there is one
   objectContent = objectContent + `\n  ${newProperty},\n`;
}

servicesFile = servicesFile.substring(0, startIndex) + objectContent + servicesFile.substring(endIndex);

fs.writeFileSync(servicesPath, servicesFile);
console.log(`Successfully injected HTML for ${slug} into services.ts`);
