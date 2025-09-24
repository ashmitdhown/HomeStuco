// Author: Manav Arya & Ashmit Dhown
import { HeroSection } from "@/components/sections/HeroSection";
import { CouncilSection } from "@/components/sections/CouncilSection";
import { AnnouncementSection } from "@/components/sections/AnnouncementSection";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const Index = () => {
  return (
    <PageBgAndCursor>
      <div className="min-h-screen pt-16">
        <HeroSection />
        <CouncilSection />
        <AnnouncementSection />
      </div>
    </PageBgAndCursor>
  );
};

export default Index;
