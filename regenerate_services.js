import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const servicesFile = path.join(process.cwd(), 'src/data/services.ts');

const fileToSlug = {
  // Tree Removal Category
  "Tree Removal.md": "tree-removal",
  "Crane-Assisted Tree Removal.md": "crane-assisted-tree-removal",
  "Dead Tree Removal.md": "dead-tree-removal",
  "Hazardous Tree Removal.md": "hazardous-tree-removal",
  "Tree Cutting & Felling.md": "tree-cutting-felling",
  // Emergency Category
  "Emergency Tree Removal.md": "emergency-tree-removal",
  "Emergency Storm Response.md": "emergency-storm-response",
  "Fallen Tree Removal.md": "fallen-tree-removal",
  "Tree on Car Removal.md": "tree-on-car-removal",
  "Tree on House Removal.md": "tree-on-house-removal",
};

const serviceDefinitions = [
  // Tree Removal
  { slug: 'tree-removal', name: 'Tree Removal', category: 'tree-removal', isPillar: true, parentPillar: null, clusterOrder: 1 },
  { slug: 'crane-assisted-tree-removal', name: 'Crane-Assisted Tree Removal', category: 'tree-removal', isPillar: false, parentPillar: 'tree-removal', clusterOrder: 2 },
  { slug: 'dead-tree-removal', name: 'Dead Tree Removal', category: 'tree-removal', isPillar: false, parentPillar: 'tree-removal', clusterOrder: 3 },
  { slug: 'hazardous-tree-removal', name: 'Hazardous Tree Removal', category: 'tree-removal', isPillar: false, parentPillar: 'tree-removal', clusterOrder: 4 },
  { slug: 'tree-cutting-felling', name: 'Tree Cutting & Felling', category: 'tree-removal', isPillar: false, parentPillar: 'tree-removal', clusterOrder: 5 },
  
  // Emergency Tree Removal
  { slug: 'emergency-tree-removal', name: 'Emergency Tree Removal', category: 'emergency', isPillar: true, parentPillar: null, clusterOrder: 1 },
  { slug: 'emergency-storm-response', name: 'Emergency Storm Response', category: 'emergency', isPillar: false, parentPillar: 'emergency-tree-removal', clusterOrder: 2 },
  { slug: 'fallen-tree-removal', name: 'Fallen Tree Removal', category: 'emergency', isPillar: false, parentPillar: 'emergency-tree-removal', clusterOrder: 3 },
  { slug: 'tree-on-house-removal', name: 'Tree on House Removal', category: 'emergency', isPillar: false, parentPillar: 'emergency-tree-removal', clusterOrder: 4 },
  { slug: 'tree-on-car-removal', name: 'Tree on Car Removal', category: 'emergency', isPillar: false, parentPillar: 'emergency-tree-removal', clusterOrder: 5 },

  // Land Clearing
  { slug: 'land-clearing', name: 'Land & Lot Clearing', category: 'land-clearing', isPillar: true, parentPillar: null, clusterOrder: 1 },
  { slug: 'underbrush-clearing', name: 'Underbrush Clearing', category: 'land-clearing', isPillar: false, parentPillar: 'land-clearing', clusterOrder: 2 },
  { slug: 'stump-grinding', name: 'Stump Grinding', category: 'land-clearing', isPillar: false, parentPillar: 'land-clearing', clusterOrder: 3 },
  { slug: 'commercial-forestry', name: 'Commercial Forestry', category: 'land-clearing', isPillar: false, parentPillar: 'land-clearing', clusterOrder: 4 },
];

const generateServiceData = (def) => {
  return {
    ...def,
    description: "Professional " + def.name + " services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert " + def.name + " in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina " + def.name + " Experts",
    features: [
      'Fully licensed and insured',
      'Arborist-supervised operations',
      'Zero-impact property protection',
      'Advanced equipment and techniques',
      'Complete debris removal'
    ],
    process: [
      'Comprehensive site and hazard assessment',
      'Establishing a safe work perimeter',
      'Executing the service safely and efficiently',
      'Full site cleanup and debris processing',
      'Final walkthrough with the homeowner'
    ],
    faqs: [
      {
        question: "How much does " + def.name.toLowerCase() + " cost in South Carolina?",
        answer: 'Costs vary based on the complexity, size, and location of the project. We offer free, transparent estimates with no hidden fees.'
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Yes, we are fully licensed and carry comprehensive liability and workers compensation insurance to protect your property.'
      }
    ],
    commonIssues: ['Storm damage', 'Hazardous conditions', 'Property encroachment', 'Safety concerns'],
    longContent: {
      intro: def.name + " requires professional expertise to ensure safety and prevent property damage.",
      methodology: 'We use industry-leading techniques and equipment tailored to each specific job.',
      localAdvice: 'South Carolina homeowners should always choose local experts who understand regional soil and climate conditions.',
      seasonalConsiderations: 'Our services are available year-round, with priority emergency response during storm seasons.',
      homeownerProblems: 'We solve complex tree and land issues quickly, safely, and cost-effectively.'
    },
    hasContent: false,
    fullBodyHtml: ''
  };
};

const main = () => {
  const services = serviceDefinitions.map(generateServiceData);

  // Process markdown files
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
      if (!slug) continue;

      const service = services.find(s => s.slug === slug);
      if (!service) continue;

      const mdPath = path.join(dir, file);
      let mdContent = fs.readFileSync(mdPath, 'utf8');
      
      // CLEANING THE MARKDOWN GARBAGE
      // Remove PAGE lines
      mdContent = mdContent.replace(/^#\s*\*\*PAGE.*$/gmi, '');
      // Remove Section lines
      mdContent = mdContent.replace(/^##\s*\*\*Section \d+ of \d+.*$/gmi, '');
      // Remove META DATA
      mdContent = mdContent.replace(/^\*\*\\?\[?META DATA\\?\]?\*\*$/gmi, '');
      mdContent = mdContent.replace(/^\[?META DATA\]?$/gmi, '');
      mdContent = mdContent.replace(/^\*\*Meta Title:\*\*.*$/gmi, '');
      mdContent = mdContent.replace(/^\*\*Meta Description:\*\*.*$/gmi, '');
      mdContent = mdContent.replace(/^\*\*URL Slug:\*\*.*$/gmi, '');
      // Remove H1 line completely
      mdContent = mdContent.replace(/^\*\*H1:.*$/gmi, '');
      // Convert H2 and H3 to markdown headings
      mdContent = mdContent.replace(/^\*\*H2:\s*(.*?)\*\*$/gmi, '## $1');
      mdContent = mdContent.replace(/^\*\*H3:\s*(.*?)\*\*$/gmi, '### $1');
      // Remove LOCAL PROOF section headers
      mdContent = mdContent.replace(/^##\s*\*\*Section \d+ of \d+\s*—\s*LOCAL PROOF\*\*$/gmi, '');
      mdContent = mdContent.replace(/^##\s*\*\*Section \d+ of \d+\s*—.*$/gmi, '');
      // Remove empty headings like `# `
      mdContent = mdContent.replace(/^#\s*$/gmi, '');
      // Remove horizontal rules
      mdContent = mdContent.replace(/^---$/gmi, '');
      // Clean up multiple empty lines
      mdContent = mdContent.replace(/\n{3,}/g, '\n\n');

      let html = marked(mdContent);
      html = html.replace(/<h1[^>]*>.*?<\/h1>/si, '');
      
      service.fullBodyHtml = html.trim();
      service.hasContent = true;
    }
  }

  let fileContent = "export interface Service {\n" +
  "  slug: string;\n" +
  "  name: string;\n" +
  "  category: 'tree-removal' | 'emergency' | 'land-clearing';\n" +
  "  isPillar: boolean;\n" +
  "  parentPillar: string | null;\n" +
  "  clusterOrder: number;\n" +
  "  description: string;\n" +
  "  metaDescription: string;\n" +
  "  heroHeading: string;\n" +
  "  features: string[];\n" +
  "  process: string[];\n" +
  "  faqs: { question: string; answer: string }[];\n" +
  "  commonIssues: string[];\n" +
  "  longContent: {\n" +
  "    intro: string;\n" +
  "    methodology: string;\n" +
  "    localAdvice: string;\n" +
  "    seasonalConsiderations: string;\n" +
  "    homeownerProblems: string;\n" +
  "  };\n" +
  "  image?: string;\n" +
  "  fullBodyHtml?: string;\n" +
  "  hasContent?: boolean;\n" +
  "}\n\n" +
  "export const services: Service[] = [\n";

  for (let i = 0; i < services.length; i++) {
    const s = services[i];
    fileContent += "  {\n";
    fileContent += "    slug: '" + s.slug + "',\n";
    fileContent += "    name: '" + s.name + "',\n";
    fileContent += "    category: '" + s.category + "',\n";
    fileContent += "    isPillar: " + s.isPillar + ",\n";
    fileContent += "    parentPillar: " + (s.parentPillar ? "'" + s.parentPillar + "'" : "null") + ",\n";
    fileContent += "    clusterOrder: " + s.clusterOrder + ",\n";
    fileContent += "    description: " + JSON.stringify(s.description) + ",\n";
    fileContent += "    metaDescription: " + JSON.stringify(s.metaDescription) + ",\n";
    fileContent += "    heroHeading: " + JSON.stringify(s.heroHeading) + ",\n";
    fileContent += "    features: " + JSON.stringify(s.features, null, 6) + ",\n";
    fileContent += "    process: " + JSON.stringify(s.process, null, 6) + ",\n";
    fileContent += "    faqs: " + JSON.stringify(s.faqs, null, 6) + ",\n";
    fileContent += "    commonIssues: " + JSON.stringify(s.commonIssues, null, 6) + ",\n";
    fileContent += "    longContent: " + JSON.stringify(s.longContent, null, 6) + ",\n";
    fileContent += "    image: '/images/services/" + s.slug + ".webp',\n";
    fileContent += "    hasContent: " + s.hasContent + ",";

    if (s.hasContent) {
      // Stringify the HTML to escape it properly for TS source code
      fileContent += "\n    fullBodyHtml: " + JSON.stringify(s.fullBodyHtml);
    }

    fileContent += "\n  }";
    if (i < services.length - 1) {
      fileContent += ",";
    }
    fileContent += "\n";
  }

  fileContent += "];\n";

  fs.writeFileSync(servicesFile, fileContent, 'utf8');
  console.log("Successfully rebuilt services.ts with cleaned markdown.");
};

main();
