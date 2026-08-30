import { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'RO Systems', href: '/products?category=RO+Systems' },
    { label: 'UF Systems', href: '/products?category=UF+Systems' },
    { label: 'Components & Filters', href: '/products?category=Components' },
    { label: 'OEM & ODM Inquiries', href: '/contact' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Company Milestones', href: '/about#milestones' },
    { label: 'Certifications', href: '/about#certifications' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  contact: [
    { label: 'jachochou@gmail.com', href: 'mailto:jachochou@gmail.com' },
    { label: '+86 13250496024', href: 'tel:+8613250496024' },
    { label: 'Zhongshan, Guangdong, China', href: '#' },
  ],
};
