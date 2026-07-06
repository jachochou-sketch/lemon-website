import { CompanyInfo } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Lemon Environmental Technology Co., Ltd.',
  shortName: 'Lemon',
  tagline: 'Your Trusted Partner in Water Purifier ODM & OEM Manufacturing',
  description: `Lemon Environmental Technology Co., Ltd. (柠檬环境科技有限公司) is a premier water purifier manufacturer specializing in
ODM (Original Design Manufacturing) and OEM (Original Equipment Manufacturing) services for global brands.
With over 14 years of experience, we design, engineer, and produce high-quality water purification systems
for residential, commercial, and industrial applications.

Our 10,000 m² ISO-certified facility houses advanced RO membrane production lines, filter assembly
workshops, injection molding for housings, and a dedicated water quality testing laboratory.
We offer complete turnkey solutions — from product design, mold development, and prototyping
to mass production, packaging design, and international logistics.

We serve brands across 10+ countries, providing customized RO systems, UF purifiers, UV sterilizers,
water softeners, and replacement filter cartridges. Every product undergoes rigorous testing to meet
NSF, CE, RoHS, and ISO 9001 standards.`,

  founded: 2012,
  employees: '100+',
  factorySize: '10,000 m²',
  annualRevenue: '$15M+',
  markets: [
    'North America',
    'European Union',
    'Southeast Asia',
    'Middle East',
    'South America',
    'Africa',
    'South Asia',
  ],

  certifications: [
    { name: 'ISO 9001:2015', issuer: 'SGS', year: 2018 },
    { name: 'CE Marking', issuer: 'TÜV Rheinland', year: 2019 },
  ],

  milestones: [
    { year: 2012, title: 'Company Founded', description: 'Established in Zhongshan, Guangdong with focus on RO membrane and filter R&D.' },
    { year: 2017, title: 'Factory Expansion', description: 'Moved to current 10,000 m² facility in Caixun Technology Park, Zhongshan.' },
    { year: 2018, title: 'ISO 9001 Certified', description: 'Achieved ISO 9001:2015 certification for quality management systems.' },
    { year: 2022, title: 'Smart Purifier Launch', description: 'Launched IoT-enabled smart water purifier series with mobile app integration.' },
    { year: 2024, title: 'Production Expansion', description: 'Added automated RO membrane production line, doubling annual output capacity.' },
    { year: 2025, title: 'Global Reach', description: 'Products now sold in 10+ countries through brand partnerships and ODM/OEM programs.' },
  ],

  teamMembers: [
    {
      name: 'Michael Zhang',
      role: 'CEO & Founder',
      image: '/images/team/ceo.jpg',
      bio: '18 years in water treatment industry. Former R&D Director at a leading membrane manufacturer.',
    },
    {
      name: 'Dr. Lisa Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/cto.jpg',
      bio: 'PhD in Environmental Engineering. Holds 8 patents in RO membrane and filtration technology.',
    },
    {
      name: 'Robert Wu',
      role: 'VP of International Sales',
      image: '/images/team/vp-sales.jpg',
      bio: '15 years of B2B sales experience. Manages partnerships with 50+ brands across 40 countries.',
    },
    {
      name: 'Anna Liu',
      role: 'Quality Director',
      image: '/images/team/quality-director.jpg',
      bio: 'Certified ISO 9001 Lead Auditor. Former quality manager at NSF-certified laboratory.',
    },
  ],

  contact: {
    address: 'Building 2-3, Caixun Technology Park, Minzhong Street, Zhongshan City, Guangdong 528441, China',
    phone: '+86 13250496024',
    email: 'jachochou@gmail.com',
    workingHours: 'Mon - Fri, 8:30 AM - 5:30 PM (CST / UTC+8)',
  },
};
