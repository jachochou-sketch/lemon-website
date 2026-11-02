import HeroSection from '@/components/home/HeroSection';
import { BrandProof, ProductDirections, OEMSpotlight, QualificationProof } from '@/components/home/CommercialSections';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ManufacturingPreview from '@/components/home/ManufacturingPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcurementFAQ from '@/components/home/ProcurementFAQ';
import CTASection from '@/components/home/CTASection';
import { MembraneExpertise } from '@/components/home/ProfileCapabilities';
import CommercialKitchenPreview from '@/components/home/CommercialKitchenPreview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandProof />
      <ProductDirections />
      <CommercialKitchenPreview />
      <FeaturedProducts />
      <OEMSpotlight />
      <MembraneExpertise />
      <ManufacturingPreview />
      <QualificationProof />
      <WhyChooseUs />
      <ProcurementFAQ />
      <CTASection />
    </>
  );
}
