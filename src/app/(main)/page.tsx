import HeroSection from '@/components/home/HeroSection';
import PartnershipPaths from '@/components/home/PartnershipPaths';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnershipPaths />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutPreview />
      <CTASection />
    </>
  );
}
