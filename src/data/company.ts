import { CompanyInfo } from '@/types';

// Company history and capabilities checked against introduce.pdf, spreads 3-4.
// Contact details retain the owner's explicit website instructions.
export const companyInfo: CompanyInfo = {
  name: 'Lemon Environmental Technology (Guangdong) Co., Ltd.',
  shortName: 'Lemon',
  tagline: 'RO and PVDF Ultrafiltration Development & Manufacturing',
  description: `Established in 2012, Lemon Environmental Technology develops and manufactures water treatment products under the limOne brand. Its work spans residential RO drinking-water systems, PVDF ultrafiltration membranes, stainless-steel whole-house purification systems, and commercial drinking-water equipment.

The manufacturing and development network includes the household water purification base in Zhongshan, the commercial water purification manufacturing base in Chuzhou, Anhui, and the research and brand operation centre in Beijiao, Shunde.

Product development is supported by physical and chemical analysis, quality testing, temperature and humidity testing, water-hammer testing, membrane-fibre production, finished-unit performance testing, and final assembly.`,
  founded: 2012,
  employees: '',
  factorySize: '10,000+ m²',
  annualRevenue: '',
  markets: [],
  certifications: [],
  milestones: [
    { year: 2012, title: 'Established in Zhongshan', description: 'Company established with a focus on water purification research, development, production, and sales.' },
    { year: 2013, title: 'Ultrafiltration range launched', description: 'The limOne ultrafiltration product series entered the market.' },
    { year: 2014, title: 'Household RO development', description: 'Expansion into under-sink household reverse-osmosis systems.' },
    { year: 2016, title: 'High-tech enterprise recognition', description: 'The development history records recognition as a high-tech enterprise.' },
    { year: 2019, title: 'Commercial water purification', description: 'A dedicated commercial water purification project was established.' },
    { year: 2020, title: 'Development and manufacturing network', description: 'Research and brand operations in Beijiao, Shunde, and commercial equipment manufacturing in Chuzhou, Anhui, were developed.' },
    { year: 2024, title: 'Zhongshan relocation', description: 'The Huoju factory relocated to Caixun Science and Technology Park in Zhongshan.' },
  ],
  teamMembers: [],
  contact: {
    address: 'Building 2-3, Caixun Technology Park, Minzhong Street, Zhongshan City, Guangdong 528441, China',
    phone: '+86 13250496024',
    email: 'jacho@lemonenviro.com',
    linkedin: 'https://www.linkedin.com/in/jacho-chou-204ba3386/',
    workingHours: 'Mon - Fri, 8:30 AM - 5:30 PM (CST / UTC+8)',
  },
};

export const companyEvidence = {
  patentPortfolio: '100+',
  locations: [
    { name: 'Zhongshan', area: '10,000+ m²', role: 'Household water purification', detail: 'Research and manufacturing at Caixun Science and Technology Park.' },
    { name: 'Chuzhou, Anhui', area: '28,000+ m²', role: 'Commercial equipment manufacturing', detail: 'Water purification smart-manufacturing industrial park.' },
    { name: 'Beijiao, Shunde', area: '1,000+ m²', role: 'Research & brand operations', detail: 'A centre supporting product research, development, and brand operations.' },
  ],
};
