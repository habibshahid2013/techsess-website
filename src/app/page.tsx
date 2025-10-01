import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import MissionSection from '@/components/home/MissionSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
