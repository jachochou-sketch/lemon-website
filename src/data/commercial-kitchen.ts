import { Product } from '@/types';

export const commercialKitchenCategory = 'Commercial Kitchen';
// Source: limone青柠-商厨净水器.pptx. Slide numbers are internal audit references.
// Model codes repeat across physical variants. Slugs distinguish variants, not new SKUs.
type KitchenEntry = { key: string; name: string; model: string; slide: number; technology: 'UF' | 'RO'; flow: string; capacity: string; media: string; pressure?: string; dimensions?: string; power?: string; features: string[] };
const entries: KitchenEntry[] = [
  { key: 'uf114-auto', name: '114 Parallel UF System with Automatic Flushing', model: 'LM-UF6530', slide: 4, technology: 'UF', flow: '3,000 L/h', capacity: '60,000 L', media: 'PVDF ultrafiltration membrane', dimensions: '382 × 196 × 642 mm', features: ['Programmable automatic flushing cycles', 'External-pressure PVDF membrane with a washable UF element', 'SUS304 stainless-steel housing', 'Pretreatment option upstream of RO systems or water-heating equipment'] },
  { key: 'uf108-single', name: '108 Series Single-Housing Filtration System', model: 'LM-UF6110', slide: 6, technology: 'UF', flow: '1,000 L/h', capacity: '20,000 L', media: 'PVDF UF membrane or activated carbon, by configuration', features: ['Single-housing format with threaded fastening', 'SUS304 stainless-steel housing', 'Serviceable cartridge layout', 'Select the UF or carbon configuration for the required application'] },
  { key: 'uf108-dual', name: '108 Series Twin-Housing UF and Carbon System', model: 'LM-UF6110', slide: 8, technology: 'UF', flow: '1,000 L/h', capacity: '10,000 L', media: 'PVDF UF membrane + activated carbon', dimensions: '298 × 138 × 536 mm', features: ['Twin-housing layout with UF and carbon stages', 'Dual-water design for separate supply paths', 'SUS304 stainless-steel housing', 'Washable UF membrane element with access for servicing'] },
  { key: 'uf160-pullout', name: '160 Series Pull-Out UF System', model: 'LM-UF6530', slide: 12, technology: 'UF', flow: '3,000 L/h', capacity: '60,000 L', media: 'PVDF ultrafiltration membrane', dimensions: '500 × 330 × 1,170 mm', features: ['Automatic flushing with configurable cycles', 'Pull-out cartridge access for maintenance', 'External-pressure PVDF membrane and washable UF elements', 'Modular filtration configurations available for project review'] },
  { key: 'obsidian-triple', name: 'Obsidian Three-Stage Kitchen Filtration System', model: 'LM-UF6106', slide: 18, technology: 'UF', flow: '600 L/h', capacity: '6,000 L', media: 'PC composite + UF + CTO carbon', pressure: '0.1–0.4 MPa', dimensions: '390 × 135 × 715 mm', features: ['PC, UF and CTO stages in a three-housing format', 'Replaceable inner cartridges', 'Washable UF element; other media follow their replacement schedule', 'Filtration for restaurant, canteen and beverage-service applications'] },
  { key: 'white-cube-i', name: 'White Cube I Commercial Kitchen RO System', model: 'LM-R3800', slide: 22, technology: 'RO', flow: '2.1 L/min', capacity: '4,000 L', media: 'PC composite cartridge + RO membrane', power: '120 W', features: ['Two-cartridge PC and RO configuration', 'Replaceable inner cartridges', 'Compact commercial kitchen product format', 'Configuration review for restaurants, canteens and beverage outlets'] },
  { key: 'white-cube-ii', name: 'White Cube II Commercial Kitchen RO System', model: 'LM-R3800', slide: 24, technology: 'RO', flow: '2.1 L/min', capacity: '4,000 L', media: 'PP + activated carbon + activated carbon + RO + post-carbon', power: '200 W', features: ['Multi-stage prefiltration and RO membrane treatment', 'Replaceable inner cartridges', 'Enclosed format for commercial kitchen installation planning', 'Installation dimensions confirmed with the selected configuration'] },
  { key: 'black-diamond', name: 'Black Diamond Beverage RO System', model: 'LM-R3800', slide: 26, technology: 'RO', flow: '2.1 L/min', capacity: '4,000 L', media: 'PP + C1 carbon + UF + RO + C2 carbon', dimensions: '385 × 298 × 500 mm', power: '300 W', features: ['UF pretreatment before the RO stage', 'Adjustable TDS setting for beverage preparation', 'Pressure gauges and cartridge maintenance indicators', 'Designed for tea and coffee outlet water-treatment programs'] },
  { key: 'grey-box', name: '108 Grey Box Commercial Kitchen RO System', model: 'LM-R3160', slide: 28, technology: 'RO', flow: '4.25 L/min', capacity: '4,000 L', media: 'RO membrane + activated carbon', dimensions: '545 × 320 × 719 mm', power: '96 W', features: ['304 stainless-steel housing', 'Inlet and outlet TDS display', 'Replaceable inner cartridges', 'Commercial RO format for tea and coffee outlets'] },
];

export const commercialKitchenProducts: Product[] = entries.map(entry => ({
  slug: `commercial-kitchen-${entry.key}`,
  name: entry.name,
  model: entry.model,
  category: commercialKitchenCategory,
  summary: `${entry.flow} ${entry.technology === 'RO' ? 'reverse-osmosis' : 'filtration'} configuration for commercial kitchens. ${entry.features[0]}.`,
  description: `## ${entry.name}

This commercial kitchen configuration is intended for restaurants, canteens, tea shops and coffee outlets using municipal tap water.

### Configuration Highlights
${entry.features.map(feature => `- ${feature}`).join('\n')}

### Installation and Maintenance
- Feed-water temperature: 5–38°C
- Review peak demand, feed-water conditions and installation space before selecting a configuration
- Flow and rated treatment capacity are specification values, not guarantees of cartridge service life in every installation
- Confirm the membrane, media configuration and maintenance procedure with your project specification

### OEM and ODM
- Discuss branding, packaging and approved configuration options
- Minimum order quantity, sample terms and delivery schedule are confirmed per project`,
  images: [`/images/commercial-kitchen/${entry.key}.webp`],
  imageAvailable: true,
  specifications: [
    { label: 'Series / Variant', value: entry.name },
    { label: 'Model', value: entry.model },
    { label: 'Filtration Type', value: entry.technology === 'RO' ? 'Reverse osmosis' : 'UF / media filtration' },
    { label: 'Nominal Purified Water Flow', value: entry.flow },
    { label: 'Rated Treatment Capacity', value: entry.capacity },
    { label: 'Filter Media', value: entry.media },
    { label: 'Working Inlet Pressure', value: entry.pressure ?? (entry.technology === 'RO' ? '0.1–0.4 MPa' : '0.05–0.4 MPa') },
    { label: 'Feed Water Temperature', value: '5–38°C' },
    { label: 'Feed Water', value: 'Municipal tap water' },
    ...(entry.dimensions ? [{ label: 'Dimensions', value: entry.dimensions }] : []),
    ...(entry.power ? [{ label: 'Rated Power', value: entry.power }] : []),
  ],
  certifications: [], serviceOptions: ['OEM', 'ODM'],
  minOrder: 'Confirm with sales', supplyAbility: 'Project-based', deliveryTime: 'Agreed per project', featured: false,
}));

export function getKitchenProducts(type: 'UF' | 'RO') {
  return commercialKitchenProducts.filter((_, index) => entries[index].technology === type);
}
