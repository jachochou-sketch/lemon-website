import { Product } from '@/types';
import { catalogProducts } from '@/data/catalog-products';

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
- **Smart Features**: IoT connectivity, TDS monitoring, filter life tracking, app integration
- **Certification Support**: CE, ISO 9001, and target-market compliance assistance
- **Packaging Design**: Retail-ready packaging with your branding and language

### Our ODM Process

1. **Consultation** — Share your requirements, target market, and budget
2. **Design** — Our engineers create 3D renders and technical specifications
3. **Prototype** — We build functional prototypes for your evaluation (3-4 weeks)
4. **Refinement** — Iterate based on your feedback until perfect
5. **Production** — Mass production with 100% QC inspection
6. **Delivery** — FOB or DDP shipping to your destination

### Why Choose Lemon for ODM?

- 14+ years of water purification R&D expertise
- 15+ in-house engineers for rapid design iterations
- Flexible MOQ starting from 300 units
- 10,000 m² facility with advanced production lines
- End-to-end support from concept to container`,
    images: [
      '/images/products/odm-1.jpg',
      '/images/products/odm-2.jpg',
      '/images/products/odm-3.jpg',
    ],
    specifications: [
      { label: 'Service Type', value: 'Full ODM (Design → Manufacturing → Packaging)' },
      { label: 'Customization Scope', value: 'ID design, filtration stages, smart features, branding' },
      { label: 'Prototype Timeline', value: '3-4 weeks' },
      { label: 'MOQ', value: '300 units (flexible for new brands)' },
      { label: 'Certification Support', value: 'CE, ISO 9001, RoHS, NSF guidance' },
      { label: 'Delivery', value: 'FOB / DDP worldwide' },
    ],
    certifications: ['ISO 9001:2015', 'CE', 'RoHS'],
    minOrder: '300 units (flexible)',
    supplyAbility: 'Custom project-based',
    deliveryTime: '45-60 days',
    featured: true,
  },
  {
    slug: 'ro-membrane-elements',
    name: 'RO Membrane Elements (Filmtec-Grade)',
    category: 'Components',
    summary: 'High-rejection reverse osmosis membrane elements for residential and commercial systems. Available in 50-400 GPD with TDS rejection rate ≥ 97%.',
    description: `## RO Membrane Elements

We manufacture high-quality reverse osmosis membrane elements equivalent to
Filmtec/DOW standards. Our automated rolling and testing lines ensure consistent
performance across every batch.

### Available Specifications
- **50 GPD**: Standard residential use
- **75 GPD**: Popular mid-range option
- **100 GPD**: Higher flow for family use
- **200-400 GPD**: Commercial/light industrial

### Quality Control
- 100% vacuum testing before shipment
- TDS rejection tested on every batch (≥ 97%)
- Dry and wet packaging options
- Shelf life: 24 months (dry), 12 months (wet)`,
    images: [
      '/images/products/ro-membrane-1.jpg',
      '/images/products/ro-membrane-2.jpg',
    ],
    specifications: [
      { label: 'Flow Rates', value: '50 / 75 / 100 / 200 / 400 GPD' },
      { label: 'TDS Rejection', value: '≥ 97% (NaCl, 250ppm, 60PSI)' },
      { label: 'Membrane Type', value: 'Thin Film Composite (TFC) polyamide' },
      { label: 'Dimensions', value: '1812 / 2012 / 3012 / 3013 sizes' },
      { label: 'Operating pH', value: '2-11' },
      { label: 'MOQ', value: '1,000 pcs per specification' },
    ],
    certifications: ['ISO 9001:2015', 'CE', 'NSF/ANSI 58'],
    minOrder: '1,000 units',
    supplyAbility: '100,000 units/month',
    deliveryTime: '45-60 days',
    featured: false,
  },
  {
    slug: 'replacement-filter-cartridges',
    name: 'Replacement Filter Cartridges (PP, CTO, UF)',
    category: 'Components',
    summary: 'Full range of replacement filter cartridges: PP sediment, CTO carbon block, UF hollow fiber, and post-carbon inline filters for all major purifier brands.',
    description: `## Replacement Filter Cartridges

A complete range of replacement filter cartridges compatible with most water purifier
brands. We offer both standard and custom specifications with private labeling.

### Product Range
- **PP Sediment Filters**: 1μm / 5μm / 10μm, standard 10" size
- **CTO Carbon Block**: Coconut shell carbon, 5μm & 10μm ratings
- **GAC Cartridges**: Granular activated carbon for taste & odor
- **UF Hollow Fiber**: 0.01μm for ultrafiltration systems
- **Post-Carbon Inline**: Quick-connect fittings, various sizes
- **Alkaline / Mineral Balls**: PH balancing and remineralization

### OEM Options
- Custom dimensions and connector types
- Private label packaging
- Multi-pack retail bundles`,
    images: [
      '/images/products/filters-1.jpg',
      '/images/products/filters-2.jpg',
    ],
    specifications: [
      { label: 'Types', value: 'PP, CTO, GAC, UF, Post-Carbon, Alkaline' },
      { label: 'PP Ratings', value: '1μm, 5μm, 10μm' },
      { label: 'Carbon Material', value: 'Coconut shell activated carbon' },
      { label: 'Standard Size', value: '10" x 2.5" (custom available)' },
      { label: 'Lifespan', value: '3-12 months depending on water quality' },
      { label: 'MOQ', value: '2,000 pcs per type' },
    ],
    certifications: ['ISO 9001:2015', 'CE', 'RoHS', 'NSF/ANSI 42'],
    minOrder: '2,000 units',
    supplyAbility: '500,000 units/month',
    deliveryTime: '45-60 days',
    featured: false,
  },
];

export const products: Product[] = [...catalogProducts, ...existingProducts];

export const productCategories = [
  'All Products',
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
