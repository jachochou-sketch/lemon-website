import HeroSection from '@/components/home/HeroSection';
import { BrandProof, ProductDirections, OEMSpotlight, QualificationProof } from '@/components/home/CommercialSections';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ManufacturingPreview from '@/components/home/ManufacturingPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcurementFAQ from '@/components/home/ProcurementFAQ';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandProof />
      <ProductDirections />
      <FeaturedProducts />
      <OEMSpotlight />
      <ManufacturingPreview />
      <QualificationProof />
      <WhyChooseUs />
      <ProcurementFAQ />
      <CTASection />
    </>
  );
}
