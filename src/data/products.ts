import { Product } from '@/types';
import { catalogProducts } from '@/data/catalog-products';
import { commercialKitchenProducts, commercialKitchenCategory } from '@/data/commercial-kitchen';

const existingProducts: Product[] = [
  {
    slug: 'odm-custom-water-purifier',
    name: 'ODM Custom Water Purifier Solutions',
    category: 'ODM Services',
    summary: 'Full-service ODM customization — we design, engineer, and manufacture water purifiers tailored to your brand specifications, target market, and budget.',
    description: `## ODM Custom Water Purifier Solutions

Bring your water purifier vision to life with our end-to-end ODM service.
From initial concept sketches to mass production, our R&D team works
closely with you to create a product that stands out in your market.

### What We Offer

- **Custom Industrial Design**: Unique housing designs that differentiate your brand
- **Tailored Filtration**: RO, UF, UV, alkaline, mineral — configure stages for your water conditions
- **Controls and Interfaces**: Discuss display, filter-life reminders, and controls for the agreed platform
- **Documentation Review**: Confirm product-specific documents for your destination market
- **Packaging Design**: Retail-ready packaging with your branding and language

### Our ODM Process

1. **Consultation** — Share your requirements, target market, and budget
2. **Design** — Our engineers create 3D renders and technical specifications
3. **Samples** — Agree the sample scope and schedule for evaluation
4. **Refinement** — Review samples against the agreed specification
5. **Production** — Confirm the manufacturing and inspection plan
6. **Delivery** — Agree packaging, shipping terms, and destination requirements

### Why Choose Lemon for ODM?

- Water purification development since 2012
- RO systems and PVDF ultrafiltration membrane expertise
- Household and commercial equipment development
- Laboratory, environmental, water-hammer, and finished-unit testing capabilities
- Project-specific scope, quantities, and delivery planning`,
    images: ['/images/products/odm-water-purifier-bom.jpg'],
    imageAvailable: true,
    specifications: [
      { label: 'Service Type', value: 'Full ODM (Design → Manufacturing → Packaging)' },
      { label: 'Customization Scope', value: 'Housing, filtration configuration, controls, branding, packaging' },
      { label: 'Sample Schedule', value: 'Agreed after scope review' },
      { label: 'MOQ', value: 'Confirmed for the selected configuration' },
      { label: 'Documentation', value: 'Reviewed per model and destination market' },
      { label: 'Delivery', value: 'Terms and schedule agreed per project' },
    ],
    certifications: [],
    minOrder: 'Confirm with sales',
    supplyAbility: 'Custom project-based',
    deliveryTime: 'Agreed per project',
    featured: true,
  },
  {
    slug: 'ro-membrane-elements',
    name: 'PAC + RO Split Replacement Filter Set',
    model: '902-0493 / 902-0492',
    category: 'Components',
    summary: 'A two-cartridge replacement set combining a PAC carbon-composite pre-filter with an RO membrane cartridge for split-filter water purifier platforms.',
    description: `## PAC + RO Split Replacement Filter Set

This two-cartridge configuration combines pre-treatment and precision reverse-osmosis filtration in a compact split-filter format.

### Filter Configuration
- **PAC Cartridge (902-0493)**: Carbon-composite pre-filter for particulate and adsorption treatment
- **RO Cartridge (902-0492)**: Reverse-osmosis membrane cartridge for fine dissolved-solids reduction

### Replacement Schedule
- PAC cartridge: replace every 4-6 months
- RO cartridge: replace every 12-24 months

### OEM & ODM Options
- Private-label cartridge printing and packaging
- Housing color and connector customization
- Filter-stage configuration for target-market water conditions`,
    images: ['/images/products/pac-ro-split-filter-water.jpg'],
    imageAvailable: true,
    specifications: [
      { label: 'PAC Product Code', value: '902-0493' },
      { label: 'RO Product Code', value: '902-0492' },
      { label: 'PAC Service Life', value: '4-6 months' },
      { label: 'RO Service Life', value: '12-24 months' },
      { label: 'Packing', value: '25 pcs per carton, per type' },
      { label: 'Configuration', value: 'Split PAC + RO cartridges' },
    ],
    certifications: [],
    serviceOptions: ['OEM', 'ODM'],
    minOrder: '5 cartons',
    supplyAbility: 'Confirm with sales',
    deliveryTime: 'Confirm with sales',
    featured: false,
  },
  {
    slug: 'replacement-filter-cartridges',
    name: 'LM-R3500 Four-Stage Replacement Filter Set',
    model: '902-0269 / 0270 / 0271 / 0273',
    category: 'Components',
    summary: 'A complete PP, C1, RO 500G and C2 quick-change cartridge set for the LM-R3500 water purifier, with staged replacement intervals for consistent performance.',
    description: `## LM-R3500 Four-Stage Replacement Filter Set

This matched quick-change cartridge set is designed for the LM-R3500 (Zhichun) 500G reverse-osmosis water purifier.

### Four-Stage Configuration
- **PP Cartridge (902-0269)**: Sediment pre-filtration; replace every 4-6 months
- **C1 Cartridge (902-0270)**: Pre-carbon filtration; replace every 4-6 months
- **RO 500G Cartridge (902-0273)**: Reverse-osmosis membrane stage; replace every 12-24 months
- **C2 Cartridge (902-0271)**: Post-carbon polishing stage; replace every 9-12 months

### OEM & ODM Options
- Private-label cartridge printing
- Branded retail packaging and multi-stage bundles
- Connector and filter-media customization for approved projects`,
    images: ['/images/products/lm-r3500-four-stage-filter-water.jpg'],
    imageAvailable: true,
    specifications: [
      { label: 'Compatible System', value: 'LM-R3500 (Zhichun), 500G' },
      { label: 'PP / C1 Codes', value: '902-0269 / 902-0270' },
      { label: 'RO / C2 Codes', value: '902-0273 / 902-0271' },
      { label: 'Filter Stages', value: 'PP + C1 + RO 500G + C2' },
      { label: 'Service Life', value: '4-24 months by cartridge' },
      { label: 'Packing', value: '25 pcs per carton, per type' },
    ],
    certifications: [],
    serviceOptions: ['OEM', 'ODM'],
    minOrder: '5 cartons',
    supplyAbility: 'Confirm with sales',
    deliveryTime: 'Confirm with sales',
    featured: false,
  },
];

export const products: Product[] = [...catalogProducts, ...existingProducts, ...commercialKitchenProducts];

export const productCategories = [
  'All Products',
  commercialKitchenCategory,
  'ODM Services',
  'RO Systems',
  'UF Systems',
  'Components',
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === 'All Products') return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(currentSlug: string, limit: number = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
