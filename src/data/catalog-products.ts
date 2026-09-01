import { Product } from '@/types';

const commonCommercialTerms = {
  minOrder: 'Contact us for MOQ',
  supplyAbility: 'Project-based',
  deliveryTime: 'Confirm with sales',
  certifications: [] as string[],
  serviceOptions: ['OEM', 'ODM'] as Array<'OEM' | 'ODM'>,
  imageAvailable: true,
  featured: false,
};

export const catalogProducts: Product[] = [
  {
    slug: 'lm-r1001-non-electric-ro-water-purifier',
    model: 'LM-R1001',
    name: 'Non-Electric Reverse Osmosis Water Purifier',
    category: 'RO Systems',
    summary:
      'A silent, pump-free RO purifier with a removable 2.5 L fresh-water pitcher, low-pressure membrane and tool-free cartridge replacement.',
    description: `## LM-R1001 Non-Electric RO Water Purifier

Designed for homes and markets where a quiet, energy-free purification solution is preferred. The system stores purified water while idle, so users can lift the detachable pitcher and pour immediately.

### Key Features
- **No Pump or Electricity**: Operates without a pressure pump, power connection or motor noise
- **Fresh-Water Pitcher**: Removable 2.5 L pitcher locks the water path automatically when lifted
- **Low-Pressure RO Membrane**: Physical reverse-osmosis filtration without an electric booster pump
- **Compact Filtration**: PAC composite cartridge plus RO membrane in a two-cartridge design
- **Pre-Filter Screen**: Captures larger particles and helps protect the main cartridges
- **Quick-Change Cartridges**: Bayonet-style cartridges can be replaced by the user
- **Flexible Installation**: Suitable for countertop or wall-mounted installation

### Included Accessories
- Installation tool, 1/4-inch integrated tee ball valve, PE tube, metal mounting plate, manual, screws and wall plugs

### OEM/ODM Options
- Custom logo, housing color, filtration configuration, packaging and multilingual manual
- Product adaptation for target-market water conditions and installation standards`,
    images: ['/images/products/lm-r1001-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-R1001' },
      { label: 'Color', value: 'White' },
      { label: 'Filtration', value: 'PAC composite cartridge + RO membrane' },
      { label: 'Pure Water Flow', value: '0.26 L/min' },
      { label: 'Pitcher Capacity', value: '2.5 L' },
      { label: 'Working Pressure', value: '0.1-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Feed Water', value: 'Municipal tap water' },
      { label: 'Dimensions', value: '316 × 206 × 395 mm' },
      { label: 'Recommended Feed TDS', value: '≤ 1,000 ppm' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-r3100-100g-ro-water-purifier',
    model: 'LM-R3100',
    name: '100 GPD Reverse Osmosis Water Purifier',
    category: 'RO Systems',
    summary:
      'A four-stage under-sink RO purifier with quick-change cartridges, automatic flushing, smart filter-life voice alerts and a 3.0 G pressure tank.',
    description: `## LM-R3100 100 GPD RO Water Purifier

A compact residential direct-drinking system built around an integrated waterway to reduce leak points and simplify installation under a kitchen sink.

### Key Features
- **Four-Stage Filtration**: 5 μm PP sediment, sintered carbon block, RO membrane and post-carbon polishing
- **Smart Maintenance Alert**: Voice reminder when cartridge replacement is due
- **Integrated Waterway**: Helps minimize internal joints and leakage risk
- **Automatic RO Flush**: Flushes the RO membrane for 18 seconds at startup
- **Quick-Change Cartridges**: Bayonet-style cartridges can be replaced in seconds
- **Complete Drinking-Water Set**: Includes a 3.0 G pressure tank and stainless-steel faucet

### Included Accessories
- User manual and pressure-reducing valve

### OEM/ODM Options
- Private-label logo, housing color, cartridge configuration and packaging
- Electrical specification, faucet style and target-market installation kit customization`,
    images: ['/images/products/lm-r3100-series-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-R3100' },
      { label: 'Nominal Capacity', value: '100 GPD class' },
      { label: 'Filtration', value: 'PP + pre-carbon + RO + post-carbon' },
      { label: 'Housing Material', value: 'ABS' },
      { label: 'Installation', value: 'Countertop or under-sink' },
      { label: 'Pressure Tank', value: '3.0 G' },
      { label: 'Faucet', value: 'Stainless steel, G1/4' },
      { label: 'Automatic Flush', value: '18 seconds at startup' },
      { label: 'Dimensions', value: '389 × 180 × 430 mm' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-r3500-500g-ro-water-purifier',
    model: 'LM-R3500',
    name: '500 GPD Reverse Osmosis Water Purifier',
    category: 'RO Systems',
    summary:
      'A higher-capacity four-stage RO system with quick-change cartridges, automatic membrane flushing, integrated waterways and filter-life voice alerts.',
    description: `## LM-R3500 500 GPD RO Water Purifier

The LM-R3500 extends the LM-R series to higher-capacity applications while retaining the service-friendly cartridge layout and integrated waterway design.

### Key Features
- **Four-Stage Filtration**: PP sediment, sintered carbon block, RO membrane and post-carbon polishing
- **Higher-Capacity Configuration**: 500 GPD model for stronger demand
- **Smart Maintenance Alert**: Voice reminder for scheduled cartridge replacement
- **Integrated Waterway**: Reduces internal connection points and leakage risk
- **Automatic RO Flush**: Flushes the membrane for 18 seconds at startup
- **Quick-Change Cartridges**: User-serviceable bayonet cartridge design

### Included Accessories
- User manual and pressure-reducing valve

### OEM/ODM Options
- Custom capacity, membrane, logo, color, faucet and packaging
- Market-specific power, plumbing connections and documentation`,
    images: ['/images/products/lm-r3100-series-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-R3500' },
      { label: 'Nominal Capacity', value: '500 GPD class' },
      { label: 'Filtration', value: 'PP + pre-carbon + RO + post-carbon' },
      { label: 'Housing Material', value: 'ABS' },
      { label: 'Installation', value: 'Countertop or under-sink' },
      { label: 'Pressure Tank', value: '3.0 G' },
      { label: 'Faucet', value: 'Stainless steel, G1/4' },
      { label: 'Automatic Flush', value: '18 seconds at startup' },
      { label: 'Dimensions', value: '389 × 180 × 430 mm' },
    ],
    ...commonCommercialTerms,
    featured: true,
  },
  {
    slug: 'lm-r3100-zhiyuan-ro-water-purifier',
    model: 'LM-R3100 (Zhiyuan)',
    name: 'Zhiyuan Reverse Osmosis Water Purifier',
    category: 'RO Systems',
    summary:
      'A compact four-stage RO purifier with automatic flushing, quick-change cartridges, voice maintenance alerts and a complete pressure-tank installation kit.',
    description: `## LM-R3100 Zhiyuan RO Water Purifier

A compact residential RO system combining a four-stage filtration path with an easy-service cartridge layout and automatic membrane protection.

### Key Features
- **Four-Stage RO Filtration**: PP, activated carbon, RO membrane and post-carbon
- **Voice Maintenance Reminder**: Prompts users when filter replacement is due
- **High-Precision RO Membrane**: Up to 92% stated desalination performance under suitable conditions
- **Automatic Flushing**: Periodic membrane back-flushing helps extend cartridge life
- **Quick-Change Cartridges**: Designed for fast user replacement
- **Complete Installation Kit**: Includes faucet, pressure tank, tubing, adapter and fittings

### OEM/ODM Options
- Logo, color, control panel, cartridge configuration and retail packaging
- Faucet, power adapter and documentation customization for target markets`,
    images: ['/images/products/lm-r3100-zhiyuan-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-R3100 (Zhiyuan)' },
      { label: 'Color', value: 'White' },
      { label: 'Filtration', value: 'PP + activated carbon + RO + post-carbon' },
      { label: 'Pure Water Flow', value: '0.26 L/min' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Rated Power', value: '48 W' },
      { label: 'Input', value: 'AC 220 V / 50 Hz' },
      { label: 'Output', value: '24 V / 2.0 A' },
      { label: 'Dimensions', value: '230 × 210 × 285 mm' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-uf6106-prefilter-ultrafiltration-purifier',
    model: 'LM-UF6106',
    name: 'Pre-Filter Ultrafiltration Water Purifier',
    category: 'UF Systems',
    summary:
      'A washable 0.01 μm PVDF ultrafiltration pre-filter that protects downstream purifier cartridges and uses a tool-free removable housing.',
    description: `## LM-UF6106 Ultrafiltration Pre-Filter

Installed upstream of a drinking-water purifier, the LM-UF6106 removes sediment, rust, bacteria, colloids and selected organic matter while helping extend downstream cartridge life.

### Key Features
- **0.01 μm UF Membrane**: Fine filtration for suspended particles, bacteria and colloids
- **Washable Cartridge**: Reusable membrane design reduces replacement cost
- **Quick-Release Housing**: Tool-free disassembly for inspection and cleaning
- **Downstream Protection**: Helps protect RO and other fine-filtration cartridges
- **PVDF Membrane Material**: Selected for durability and fouling resistance

### Included Accessories
- User manual

### OEM/ODM Options
- Custom logo, label, housing color, connector size and packaging
- Membrane area and flow configuration can be adapted to project requirements`,
    images: ['/images/products/lm-uf6106-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-UF6106' },
      { label: 'Color', value: 'White / Gray' },
      { label: 'Filtration', value: 'PVDF ultrafiltration membrane' },
      { label: 'Nominal Flow', value: '500 L/h' },
      { label: 'Filtration Precision', value: '0.01 μm' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Recommended Feed TDS', value: '≤ 300 ppm' },
      { label: 'Feed Water', value: 'Tap water' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-uf6110-pipeline-ultrafiltration-purifier',
    model: 'LM-UF6110',
    name: 'Pipeline Ultrafiltration Water Purifier',
    category: 'UF Systems',
    summary:
      'A 1,000 L/h stainless-steel pipeline UF purifier with a washable external-pressure PVDF membrane and patented full-surface flushing structure.',
    description: `## LM-UF6110 Pipeline UF Water Purifier

A durable whole-line ultrafiltration unit for residential and light-commercial water treatment, designed for high flow and repeated membrane cleaning.

### Key Features
- **External-Pressure PVDF Membrane**: Washable, reusable and resistant to fouling
- **Patented Flushing Path**: A central inlet distributes water across the membrane surface for more complete cleaning
- **304 Stainless-Steel Housing**: 1.5 mm food-grade shell tested for pressure and repeated water hammer
- **Aviation-Grade Aluminum Clamp**: One-piece casting supports secure, tool-friendly disassembly
- **Vortex-Assisted Cleaning**: Curved bottom outlet promotes turbulent flushing around the membrane fibers

### Included Accessories
- User manual, screws, wall plugs and stainless-steel mounting plate

### OEM/ODM Options
- Custom flow rate, ports, bracket, logo plate and packaging
- Membrane, finish and installation configuration for project requirements`,
    images: ['/images/products/lm-uf6000-series-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-UF6110' },
      { label: 'Color', value: 'Natural stainless-steel finish' },
      { label: 'Filtration', value: 'PVDF ultrafiltration membrane' },
      { label: 'Nominal Flow', value: '1,000 L/h' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Dimensions', value: '400 × 131 × 145 mm' },
      { label: 'Feed Water', value: 'Tap water' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-uf6530-whole-house-ultrafiltration-purifier',
    model: 'LM-UF6530',
    name: 'Whole-House Ultrafiltration Water Purifier',
    category: 'UF Systems',
    summary:
      'A 3,000 L/h whole-house UF system with a washable external-pressure PVDF membrane, 304 stainless-steel housing and patented flushing design.',
    description: `## LM-UF6530 Whole-House UF Water Purifier

The LM-UF6530 is a higher-flow member of Lemon's stainless-steel pipeline series, suitable for whole-house pretreatment and central water purification.

### Key Features
- **3,000 L/h Flow**: Sized for central residential water treatment
- **Washable PVDF Membrane**: External-pressure design can be cleaned and reused
- **Patented Full-Surface Flush**: Distributes rinse water across the membrane bundle
- **304 Stainless-Steel Shell**: 1.5 mm food-grade housing for strength and durability
- **One-Piece Aluminum Clamp**: Secure connection with convenient disassembly

### Included Accessories
- User manual, screws, wall plugs and stainless-steel mounting plate

### OEM/ODM Options
- Custom ports, flow rating, surface finish, logo plate, packaging and installation kit`,
    images: ['/images/products/lm-uf6000-series-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-UF6530' },
      { label: 'Color', value: 'Natural stainless-steel finish' },
      { label: 'Filtration', value: 'PVDF ultrafiltration membrane' },
      { label: 'Nominal Flow', value: '3,000 L/h' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Dimensions', value: '600 × 131 × 145 mm' },
      { label: 'Feed Water', value: 'Tap water' },
    ],
    ...commonCommercialTerms,
    featured: true,
  },
  {
    slug: 'lm-uf6540-high-flow-ultrafiltration-purifier',
    model: 'LM-UF6540',
    name: 'High-Flow Ultrafiltration Water Purifier',
    category: 'UF Systems',
    summary:
      'A 4,000 L/h stainless-steel UF purifier for higher-demand whole-house applications, with a washable PVDF membrane and patented flushing structure.',
    description: `## LM-UF6540 High-Flow UF Water Purifier

The largest model in the listed stainless-steel pipeline series, designed for applications requiring up to 4,000 L/h of central ultrafiltration capacity.

### Key Features
- **4,000 L/h Flow**: Higher-throughput configuration for whole-house or light-commercial demand
- **Washable PVDF Membrane**: Reusable external-pressure membrane lowers operating cost
- **Patented Flushing Structure**: Promotes thorough cleaning across the membrane surface
- **304 Stainless-Steel Housing**: Strong, food-grade outer shell
- **Aviation-Grade Aluminum Clamp**: One-piece casting for a secure and serviceable connection

### Included Accessories
- User manual, screws, wall plugs and stainless-steel mounting plate

### OEM/ODM Options
- Custom flow rating, ports, finish, branding, bracket and project packaging`,
    images: ['/images/products/lm-uf6000-series-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-UF6540' },
      { label: 'Color', value: 'Natural stainless-steel finish' },
      { label: 'Filtration', value: 'PVDF ultrafiltration membrane' },
      { label: 'Nominal Flow', value: '4,000 L/h' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Dimensions', value: '700 × 131 × 145 mm' },
      { label: 'Feed Water', value: 'Tap water' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-pbc3000-central-activated-carbon-purifier',
    model: 'LM-PBC3000',
    name: 'Central Activated Carbon Water Purifier',
    category: 'UF Systems',
    summary:
      'A 3,000 L/h central purifier with a PP and activated-carbon composite cartridge, durable stainless-steel housing and service-friendly clamp structure.',
    description: `## LM-PBC3000 Central Activated Carbon Water Purifier

A central water-treatment unit for sediment reduction and activated-carbon conditioning, housed in a robust stainless-steel body.

### Key Features
- **Composite Filtration**: PP sediment and activated-carbon media in one central unit
- **3,000 L/h Flow**: Suitable for whole-house pretreatment
- **304 Stainless-Steel Housing**: Durable food-grade shell
- **Serviceable Clamp Structure**: Designed for easier opening and cartridge maintenance
- **Alternative Cartridge Option**: Can also be configured with a PP cartridge

### Included Accessories
- User manual, screws, wall plugs and stainless-steel mounting plate

### OEM/ODM Options
- Custom media combination, ports, logo, finish, cartridge specification and packaging`,
    images: ['/images/products/lm-pbc3000-series-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-PBC3000' },
      { label: 'Color', value: 'Natural stainless-steel finish' },
      { label: 'Filtration', value: 'PP + activated-carbon composite cartridge' },
      { label: 'Nominal Flow', value: '3,000 L/h' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Dimensions', value: '188 × 188 × 558 mm' },
      { label: 'Feed Water', value: 'Tap water' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-uf6530-pro-central-ultrafiltration-purifier',
    model: 'LM-UF6530 Pro',
    name: 'Central Ultrafiltration Water Purifier Pro',
    category: 'UF Systems',
    summary:
      'A compact 3,000 L/h central UF purifier with a washable external-pressure PVDF membrane, stainless-steel housing and patented flushing path.',
    description: `## LM-UF6530 Pro Central UF Water Purifier

A compact central-ultrafiltration configuration that combines whole-house flow with a washable membrane and durable stainless-steel enclosure.

### Key Features
- **External-Pressure UF Cartridge**: Washable and reusable to reduce operating cost
- **PVDF Membrane**: Durable, fouling-resistant ultrafiltration material
- **0.01-0.2 μm Filtration Range**: Helps remove colloids, bacteria and suspended contaminants
- **304 Stainless-Steel Housing**: Strong food-grade enclosure
- **Patented Flushing Design**: Supports more complete membrane cleaning

### Included Accessories
- User manual, screws, wall plugs and stainless-steel mounting plate

### OEM/ODM Options
- Custom membrane, cartridge, connection ports, branding, finish and packaging`,
    images: ['/images/products/lm-pbc3000-series-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-UF6530 Pro' },
      { label: 'Color', value: 'Natural stainless-steel finish' },
      { label: 'Filtration', value: 'PVDF ultrafiltration membrane' },
      { label: 'Nominal Flow', value: '3,000 L/h' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Dimensions', value: '188 × 188 × 558 mm' },
      { label: 'Feed Water', value: 'Tap water' },
    ],
    ...commonCommercialTerms,
  },
  {
    slug: 'lm-uf6103-two-stage-ultrafiltration-purifier',
    model: 'LM-UF6103 (Two-Stage)',
    name: 'Two-Stage Ultrafiltration Water Purifier',
    category: 'UF Systems',
    summary:
      'A compact two-stage purifier combining a washable PVDF UF membrane with a sintered carbon-block cartridge and integrated leak-resistant waterway.',
    description: `## LM-UF6103 Two-Stage UF Water Purifier

A compact direct-drinking ultrafiltration system with two complementary cartridges for fine particle removal and taste-and-odor improvement.

### Key Features
- **Two-Stage Filtration**: PVDF UF membrane plus sintered carbon-block cartridge
- **Integrated Waterway**: Helps reduce internal joints and leakage risk
- **0.01-0.1 μm UF Precision**: Fine filtration for suspended contaminants and bacteria
- **Activated Carbon Polishing**: Supports adsorption of taste and odor compounds
- **Quick-Change Cartridges**: Bayonet structure simplifies user maintenance

### Included Accessories
- User manual

### OEM/ODM Options
- Custom logo, cartridge media, housing color, control panel and packaging
- Market-specific power and connector configuration`,
    images: ['/images/products/lm-uf6103-water.jpg'],
    specifications: [
      { label: 'Model', value: 'LM-UF6103 (Two-Stage)' },
      { label: 'Color', value: 'White' },
      { label: 'Filtration', value: 'PVDF UF membrane + sintered carbon block' },
      { label: 'Nominal Flow', value: '3 L/min' },
      { label: 'Working Pressure', value: '0.05-0.4 MPa' },
      { label: 'Rated Power', value: '4.5 W' },
      { label: 'Input', value: 'AC 220 V / 50 Hz' },
      { label: 'Output', value: '4.5 V / 1 A' },
      { label: 'Feed Water Temperature', value: '5-45°C' },
      { label: 'Recommended Feed TDS', value: '≤ 300 ppm' },
      { label: 'Feed Water', value: 'Tap water' },
    ],
    ...commonCommercialTerms,
  },
];
