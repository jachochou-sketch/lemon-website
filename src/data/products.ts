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
    slug: 'ro-water-purifier-countertop',
    name: 'Countertop RO Water Purifier',
    category: 'RO Systems',
    summary: 'Sleek countertop reverse osmosis purifier with 5-stage filtration, instant heating, and smart TDS monitoring. Ideal for home and office use.',
    description: `## Countertop RO Water Purifier

Our best-selling countertop RO system combines advanced reverse osmosis filtration
with modern design and smart features. No installation required — simply plug in,
fill the tank, and enjoy pure water instantly.

### Key Features
- **5-Stage Filtration**: PP + CTO + RO Membrane + Post Carbon + UF
- **RO Membrane**: 75 GPD high-rejection Filmtec-grade membrane
- **Instant Heating**: 4 temperature settings (25°C, 45°C, 85°C, 100°C)
- **Smart Display**: Real-time TDS monitoring, filter life indicator, child lock
- **Tank Capacity**: 5L raw water + 1.5L pure water

### ODM/OEM Customization Options
- Branding: Custom logo, color, panel design
- Features: Add UV sterilization, alkaline filter, mineral cartridge
- Packaging: Custom retail box, user manual in your language`,
    images: [
      '/images/products/countertop-ro-1.jpg',
      '/images/products/countertop-ro-2.jpg',
    ],
    specifications: [
      { label: 'Filtration Stages', value: 'PP + CTO + RO + Post Carbon + UF (5 stages)' },
      { label: 'RO Membrane', value: '75 GPD, Filmtec-grade, 0.0001μm' },
      { label: 'Pure Water Capacity', value: '15 L/hour' },
      { label: 'Tank Capacity', value: '5L raw + 1.5L pure' },
      { label: 'Heating Power', value: '2200W' },
      { label: 'MOQ (OEM)', value: '500 units' },
    ],
    certifications: ['ISO 9001:2015', 'CE', 'RoHS', 'NSF/ANSI 58'],
    minOrder: '500 units (OEM)',
    supplyAbility: '10,000 units/month',
    deliveryTime: '45-60 days',
    featured: true,
  },
  {
    slug: 'under-sink-ro-system',
    name: 'Under-Sink Reverse Osmosis System',
    category: 'RO Systems',
    summary: 'High-capacity under-sink RO water filtration system with 600 GPD output. Tankless design saves space while delivering continuous pure water.',
    description: `## Under-Sink Reverse Osmosis System

A high-flow tankless RO system designed for modern kitchens. The compact under-sink
installation saves counter space while delivering up to 600 gallons of pure water per day.

### Key Features
- **Tankless Design**: Saves under-sink space, no secondary contamination risk
- **High Flow Rate**: 600 GPD, fills a cup in 8 seconds
- **Triple Composite Filter**: PP+C+RO integrated for easy maintenance
- **Smart Faucet**: LED indicator shows filter status and water quality
- **Waste Ratio**: Industry-leading 1:1 pure-to-waste ratio

### ODM/OEM Customization
- Flow rate variants: 400G / 600G / 800G / 1000G
- Smart faucet styles and finishes
- IoT module for app connectivity (optional)`,
    images: [
      '/images/products/undersink-ro-1.jpg',
      '/images/products/undersink-ro-2.jpg',
    ],
    specifications: [
      { label: 'Flow Rate', value: '600 GPD (1.6 L/min)' },
      { label: 'Filtration', value: 'PP + CTO + RO Composite Filter' },
      { label: 'Waste Ratio', value: '1:1 (pure : waste)' },
      { label: 'Dimensions', value: '400 × 160 × 380 mm' },
      { label: 'Power', value: '100W (pump)' },
      { label: 'MOQ (OEM)', value: '300 units' },
    ],
    certifications: ['ISO 9001:2015', 'CE', 'RoHS', 'NSF/ANSI 58'],
    minOrder: '300 units (OEM)',
    supplyAbility: '8,000 units/month',
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
  {
    slug: 'water-softener-system',
    name: 'Whole-House Water Softener System',
    category: 'UF Systems',
    summary: 'Automatic ion-exchange water softener for whole-house protection. Removes hardness minerals, prevents scale buildup, and extends appliance life.',
    description: `## Whole-House Water Softener System

Automatic water softeners that protect your entire home from hard water damage.
Ion-exchange resin removes calcium and magnesium ions, preventing scale buildup
in pipes, water heaters, and appliances.

### Key Features
- **Automatic Regeneration**: Time-based or meter-based control valve
- **High Capacity Resin**: Food-grade ion-exchange resin, 25L-50L options
- **Brine Tank**: Included with safety float valve
- **LCD Controller**: Easy programming for regeneration cycles
- **Flow Rates**: 1.5 - 3.0 m³/hour depending on model

### OEM Customization
- Cabinet color and design
- Control valve brand (Runxin, Fleck, Clack compatible)
- Capacity and flow rate variants`,
    images: [
      '/images/products/softener-1.jpg',
      '/images/products/softener-2.jpg',
    ],
    specifications: [
      { label: 'Resin Volume', value: '25L / 35L / 50L' },
      { label: 'Flow Rate', value: '1.5 - 3.0 m³/hour' },
      { label: 'Control Valve', value: 'Automatic, time/meter-based' },
      { label: 'Inlet/Outlet', value: '3/4" or 1" BSP' },
      { label: 'Regeneration', value: 'Down-flow brine, ~120 min cycle' },
      { label: 'MOQ (OEM)', value: '100 units' },
    ],
    certifications: ['ISO 9001:2015', 'CE'],
    minOrder: '100 units (OEM)',
    supplyAbility: '3,000 units/month',
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
