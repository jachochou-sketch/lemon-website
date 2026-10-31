import HeroSection from '@/components/home/HeroSection';
import PartnershipPaths from '@/components/home/PartnershipPaths';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ManufacturingPreview from '@/components/home/ManufacturingPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcurementFAQ from '@/components/home/ProcurementFAQ';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnershipPaths />
      <FeaturedProducts />
      <ManufacturingPreview />
      <WhyChooseUs />
      <ProcurementFAQ />
      <AboutPreview />
      <CTASection />
    </>
  );
}
