import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PressHero from "@/components/press/PressHero";
import PressOverview from "@/components/press/PressOverview";
import PressPhilosophy from "@/components/press/PressPhilosophy";
import PressProductConcepts from "@/components/press/PressProductConcepts";
import PressAudiences from "@/components/press/PressAudiences";
import PressFounder from "@/components/press/PressFounder";
import PressFactSheet from "@/components/press/PressFactSheet";
import PressApprovedLanguage from "@/components/press/PressApprovedLanguage";
import PressFAQ from "@/components/press/PressFAQ";
import PressBrandAssets from "@/components/press/PressBrandAssets";
import PressMediaContact from "@/components/press/PressMediaContact";

export default function Press() {
  return (
    <div className="bg-[#0A0A0B] text-[#EDEDED] min-h-screen">
      <SiteHeader />
      <main id="main-content">
        <PressHero />
        <PressOverview />
        <PressPhilosophy />
        <PressProductConcepts />
        <PressAudiences />
        <PressFounder />
        <PressFactSheet />
        <PressApprovedLanguage />
        <PressFAQ />
        <PressBrandAssets />
        <PressMediaContact />
      </main>
      <SiteFooter />
    </div>
  );
}