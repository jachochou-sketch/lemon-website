// ============================================================
// Product Types
// ============================================================

export interface SpecItem {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  model?: string;
  category: string;
  summary: string;
  description: string;
  images: string[];
  imageAvailable?: boolean;
  specifications: SpecItem[];
  certifications: string[];
  serviceOptions?: Array<'OEM' | 'ODM'>;
  minOrder: string;
  supplyAbility: string;
  deliveryTime: string;
  featured: boolean;
}

// ============================================================
// Blog Types
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

// ============================================================
// Company Types
// ============================================================

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  founded: number;
  employees: string;
  factorySize: string;
  annualRevenue: string;
  markets: string[];
  certifications: Certification[];
  milestones: Milestone[];
  teamMembers: TeamMember[];
  contact: ContactDetails;
}

// ============================================================
// Contact Form Types
// ============================================================

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  productInterest: string;
  serviceType: 'OEM' | 'ODM';
  message: string;
}

// ============================================================
// Navigation Types
// ============================================================

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
