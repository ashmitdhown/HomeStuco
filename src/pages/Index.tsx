// Author: Manav Arya & Ashmit Dhown
import { HeroSection } from "@/components/sections/HeroSection";
import { CouncilSection } from "@/components/sections/CouncilSection";
import { AnnouncementSection } from "@/components/sections/AnnouncementSection";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <CouncilSection />
      <AnnouncementSection />
    </div>
  );
};

export default Index;
