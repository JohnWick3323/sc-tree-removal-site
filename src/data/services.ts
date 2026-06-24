export interface Service {
  slug: string;
  name: string;
  category: 'tree-removal' | 'emergency' | 'land-clearing';
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

export const services: Service[] = [
  {
    slug: 'tree-removal',
    name: 'Tree Removal',
    category: 'tree-removal',
    isPillar: true,
    parentPillar: null,
    clusterOrder: 1,
    description: "Professional Tree Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Tree Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Tree Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/tree-removal.webp',

  },
  {
    slug: 'crane-assisted-tree-removal',
    name: 'Crane-Assisted Tree Removal',
    category: 'tree-removal',
    isPillar: false,
    parentPillar: 'tree-removal',
    clusterOrder: 2,
    description: "Professional Crane-Assisted Tree Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Crane-Assisted Tree Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Crane-Assisted Tree Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/crane-assisted-tree-removal.webp',

  },
  {
    slug: 'dead-tree-removal',
    name: 'Dead Tree Removal',
    category: 'tree-removal',
    isPillar: false,
    parentPillar: 'tree-removal',
    clusterOrder: 3,
    description: "Professional Dead Tree Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Dead Tree Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Dead Tree Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/dead-tree-removal.webp',

  },
  {
    slug: 'hazardous-tree-removal',
    name: 'Hazardous Tree Removal',
    category: 'tree-removal',
    isPillar: false,
    parentPillar: 'tree-removal',
    clusterOrder: 4,
    description: "Professional Hazardous Tree Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Hazardous Tree Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Hazardous Tree Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/hazardous-tree-removal.webp',

  },
  {
    slug: 'tree-cutting-felling',
    name: 'Tree Cutting & Felling',
    category: 'tree-removal',
    isPillar: false,
    parentPillar: 'tree-removal',
    clusterOrder: 5,
    description: "Professional Tree Cutting & Felling services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Tree Cutting & Felling in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Tree Cutting & Felling Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/tree-cutting-felling.webp',

  },
  {
    slug: 'emergency-tree-removal',
    name: 'Emergency Tree Removal',
    category: 'emergency',
    isPillar: true,
    parentPillar: null,
    clusterOrder: 1,
    description: "Professional Emergency Tree Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Emergency Tree Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Emergency Tree Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/emergency-tree-removal.webp',

  },
  {
    slug: 'emergency-storm-response',
    name: 'Emergency Storm Response',
    category: 'emergency',
    isPillar: false,
    parentPillar: 'emergency-tree-removal',
    clusterOrder: 2,
    description: "Professional Emergency Storm Response services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Emergency Storm Response in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Emergency Storm Response Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/emergency-storm-response.webp',

  },
  {
    slug: 'fallen-tree-removal',
    name: 'Fallen Tree Removal',
    category: 'emergency',
    isPillar: false,
    parentPillar: 'emergency-tree-removal',
    clusterOrder: 3,
    description: "Professional Fallen Tree Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Fallen Tree Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Fallen Tree Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/fallen-tree-removal.webp',

  },
  {
    slug: 'tree-on-house-removal',
    name: 'Tree on House Removal',
    category: 'emergency',
    isPillar: false,
    parentPillar: 'emergency-tree-removal',
    clusterOrder: 4,
    description: "Professional Tree on House Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Tree on House Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Tree on House Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/tree-on-house-removal.webp',

  },
  {
    slug: 'tree-on-car-removal',
    name: 'Tree on Car Removal',
    category: 'emergency',
    isPillar: false,
    parentPillar: 'emergency-tree-removal',
    clusterOrder: 5,
    description: "Professional Tree on Car Removal services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Tree on Car Removal in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Tree on Car Removal Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/tree-on-car-removal.webp',

  },
  {
    slug: 'land-clearing',
    name: 'Land & Lot Clearing',
    category: 'land-clearing',
    isPillar: true,
    parentPillar: null,
    clusterOrder: 1,
    description: "Professional Land & Lot Clearing services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Land & Lot Clearing in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Land & Lot Clearing Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/land-clearing.webp',

  },
  {
    slug: 'underbrush-clearing',
    name: 'Underbrush Clearing',
    category: 'land-clearing',
    isPillar: false,
    parentPillar: 'land-clearing',
    clusterOrder: 2,
    description: "Professional Underbrush Clearing services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Underbrush Clearing in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Underbrush Clearing Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/underbrush-clearing.webp',

  },
  {
    slug: 'stump-grinding',
    name: 'Stump Grinding',
    category: 'land-clearing',
    isPillar: false,
    parentPillar: 'land-clearing',
    clusterOrder: 3,
    description: "Professional Stump Grinding services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Stump Grinding in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Stump Grinding Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/stump-grinding.webp',

  },
  {
    slug: 'commercial-forestry',
    name: 'Commercial Forestry',
    category: 'land-clearing',
    isPillar: false,
    parentPillar: 'land-clearing',
    clusterOrder: 4,
    description: "Professional Commercial Forestry services in South Carolina. Safe, efficient, and fully insured.",
    metaDescription: "Expert Commercial Forestry in South Carolina. Licensed arborists providing top-quality tree care and removal.",
    heroHeading: "South Carolina Commercial Forestry Experts",
    features: [
      "Fully licensed and insured",
      "Arborist-supervised operations",
      "Zero-impact property protection",
      "Advanced equipment and techniques",
      "Complete debris removal"
],
    process: [
      "Comprehensive site and hazard assessment",
      "Establishing a safe work perimeter",
      "Executing the service safely and efficiently",
      "Full site cleanup and debris processing",
      "Final walkthrough with the homeowner"
],
    
    commonIssues: [
      "Storm damage",
      "Hazardous conditions",
      "Property encroachment",
      "Safety concerns"
],
    
    image: '/images/services/commercial-forestry.webp',

  }
];
