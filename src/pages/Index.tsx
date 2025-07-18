import { HeroSection } from "@/components/sections/HeroSection";
import { CouncilSection } from "@/components/sections/CouncilSection";
import { EventsSection } from "@/components/sections/EventsSection";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <CouncilSection />
      <EventsSection />
    </div>
  );
};

export default Index;
