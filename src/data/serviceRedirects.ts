export const legacyServiceRedirects: Record<string, string> = {
  'residential-tree-removal': 'tree-removal',
  'land-clearing-grading': 'land-clearing',
  'underbrush-clearing': 'brush-clearing',
  'commercial-forestry': 'forestry-mulching',
  'stump-grinding': 'land-clearing',
  'land-lot-clearing': 'land-clearing',
  'commercial-tree-services': 'forestry-mulching',
};

export const getLegacyServiceTarget = (slug: string | undefined) => {
  if (!slug) return undefined;
  return legacyServiceRedirects[slug];
};
