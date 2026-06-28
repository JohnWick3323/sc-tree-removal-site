export type ServiceCategory = 'tree-removal' | 'emergency' | 'land-clearing';

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  isPillar: boolean;
  parentPillar: string | null;
  clusterOrder: number;
  description: string;
  metaDescription: string;
  heroHeading: string;
  features: string[];
  process: string[];
  image?: string;
}

const DEFAULT_FEATURES = [
  'Fully licensed and insured',
  'Arborist-supervised operations',
  'Zero-impact property protection',
  'Advanced equipment and techniques',
  'Complete debris removal',
];

const DEFAULT_PROCESS = [
  'Comprehensive site and hazard assessment',
  'Establishing a safe work perimeter',
  'Executing the service safely and efficiently',
  'Full site cleanup and debris processing',
  'Final walkthrough with the homeowner',
];

const service = (
  slug: string,
  name: string,
  category: ServiceCategory,
  isPillar: boolean,
  parentPillar: string | null,
  clusterOrder: number,
  image: string
): Service => ({
  slug,
  name,
  category,
  isPillar,
  parentPillar,
  clusterOrder,
  description: `Professional ${name} services in South Carolina. Safe, efficient, and fully insured.`,
  metaDescription: `Expert ${name.toLowerCase()} in South Carolina from licensed, insured tree service professionals. Free estimates across the state.`,
  heroHeading: `South Carolina ${name} Experts`,
  features: DEFAULT_FEATURES,
  process: DEFAULT_PROCESS,
  image,
});

export const services: Service[] = [
  service('tree-removal', 'Tree Removal', 'tree-removal', true, null, 1, '/images/services/residential-tree-removal.webp'),
  service('crane-assisted-tree-removal', 'Crane-Assisted Tree Removal', 'tree-removal', false, 'tree-removal', 2, '/images/services/residential-tree-removal.webp'),
  service('dead-tree-removal', 'Dead Tree Removal', 'tree-removal', false, 'tree-removal', 3, '/images/services/residential-tree-removal.webp'),
  service('hazardous-tree-removal', 'Hazardous Tree Removal', 'tree-removal', false, 'tree-removal', 4, '/images/services/residential-tree-removal.webp'),
  service('tree-cutting-felling', 'Tree Cutting & Felling', 'tree-removal', false, 'tree-removal', 5, '/images/services/residential-tree-removal.webp'),

  service('emergency-tree-removal', 'Emergency Tree Removal', 'emergency', true, null, 1, '/images/services/emergency-storm-response.webp'),
  service('emergency-storm-response', 'Emergency Storm Response', 'emergency', false, 'emergency-tree-removal', 2, '/images/services/emergency-storm-response.webp'),
  service('fallen-tree-removal', 'Fallen Tree Removal', 'emergency', false, 'emergency-tree-removal', 3, '/images/services/emergency-storm-response.webp'),
  service('tree-on-house-removal', 'Tree on House Removal', 'emergency', false, 'emergency-tree-removal', 4, '/images/services/emergency-storm-response.webp'),
  service('tree-on-car-removal', 'Tree on Car Removal', 'emergency', false, 'emergency-tree-removal', 5, '/images/services/emergency-storm-response.webp'),

  service('land-clearing', 'Land & Lot Clearing', 'land-clearing', true, null, 1, '/images/services/land-clearing-grading.webp'),
  service('brush-clearing', 'Brush Clearing', 'land-clearing', false, 'land-clearing', 2, '/images/services/land-clearing-grading.webp'),
  service('debris-removal', 'Debris Removal', 'land-clearing', false, 'land-clearing', 3, '/images/services/land-clearing-grading.webp'),
  service('forestry-mulching', 'Forestry Mulching', 'land-clearing', false, 'land-clearing', 4, '/images/services/commercial-forestry.webp'),
];

export const servicesBySlug = new Map(services.map((item) => [item.slug, item]));
