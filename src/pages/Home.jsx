import SiteHeader from "@/components/site/SiteHeader";
import HeroSection from "@/components/site/HeroSection";
import OverviewSection from "@/components/site/OverviewSection";
import FeaturesSection from "@/components/site/FeaturesSection";
import RoadmapSection from "@/components/site/RoadmapSection";
import NotifySection from "@/components/site/NotifySection";
import SiteFooter from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <div className="bg-[#0A0A0B] text-[#EDEDED] min-h-screen">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <RoadmapSection />
        <NotifySection />
      </main>
      <SiteFooter />
    </div>
  );
}
