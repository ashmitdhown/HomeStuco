import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin } from "lucide-react";
import React, { useState } from "react";
import shamsImg from "@/assets/councilphotos/Shams.jpeg";
import sivaImg from "@/assets/councilphotos/Siva.jpeg";
import isharjotImg from "@/assets/councilphotos/Isharjot.jpeg";
import sivapriyaImg from "@/assets/councilphotos/Sivapriya.jpeg";
import rajImg from "@/assets/councilphotos/Raj.jpeg";
import ashmitImg from "@/assets/councilphotos/Ashmit.jpeg";
import gurkaranImg from "@/assets/councilphotos/Gurkaran.jpeg";
import suhasImg from "@/assets/councilphotos/Suhas.jpeg";
import tanishaImg from "@/assets/councilphotos/Tanisha.jpeg";

interface CouncilMember {
  name: string;
  position: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  bio: string;
}

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget consequat massa enim nec sem.";

const councilMembers: CouncilMember[] = [
  {
    name: "Mohammad Shamshuddin Gangavali",
    position: "Ex-Officio",
    image: shamsImg,
    instagram: "https://www.instagram.com/shams_gangavali",
    linkedin: "https://www.linkedin.com/in/shams-gangavali",
    bio: LOREM,
  },
  {
    name: "Sivaa Balamurugan",
    position: "President",
    image: sivaImg,
    instagram: "https://www.instagram.com/siva_balamurugan",
    linkedin: "https://www.linkedin.com/in/siva-balamurugan",
    bio: LOREM,
  },
  {
    name: "Isharjot Singh Pasricha",
    position: "Vice President",
    image: isharjotImg,
    instagram: "https://www.instagram.com/isharjot_singh",
    linkedin: "https://www.linkedin.com/in/isharjot-singh-pasricha",
    bio: LOREM,
  },
  {
    name: "Sivapriya Madhu Pillai",
    position: "Secretary",
    image: sivapriyaImg,
    instagram: "https://www.instagram.com/sivapriya_madhu",
    linkedin: "https://www.linkedin.com/in/sivapriya-madhu-pillai",
    bio: LOREM,
  },
  {
    name: "Raj Singh",
    position: "4th Year HR",
    image: rajImg,
    instagram: "https://www.instagram.com/raj_singh",
    linkedin: "https://www.linkedin.com/in/raj-singh",
    bio: LOREM,
  },
  {
    name: "Ashmit Dhown",
    position: "3rd Year HR",
    image: ashmitImg,
    instagram: "https://www.instagram.com/ashmit_dhown",
    linkedin: "https://www.linkedin.com/in/ashmit-dhown",
    bio: LOREM,
  },
  {
    name: "Gurkaran Singh",
    position: "3rd Year DSR",
    image: gurkaranImg,
    instagram: "https://www.instagram.com/gurkaran_singh",
    linkedin: "https://www.linkedin.com/in/gurkaran-singh",
    bio: LOREM,
  },
  {
    name: "Suhas Simha S",
    position: "2nd Year HR",
    image: suhasImg,
    instagram: "https://www.instagram.com/suhas_simha",
    linkedin: "https://www.linkedin.com/in/suhas-simha",
    bio: LOREM,
  },
  {
    name: "Tanisha Handa",
    position: "2nd Year DSR",
    image: tanishaImg,
    instagram: "https://www.instagram.com/tanisha_handa",
    linkedin: "https://www.linkedin.com/in/tanisha-handa",
    bio: LOREM,
  }
];

export const CouncilSection = () => {
  const [selected, setSelected] = useState<CouncilMember | null>(null);
  const [showImage, setShowImage] = useState(false);

  // Handle Escape key to close fullscreen image
  React.useEffect(() => {
    if (!showImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowImage(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showImage]);

  return (
    <section id="council-section" className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Animated Background Shape (static now) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-champagne/10 rounded-full blur-3xl z-0" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-velvet mb-6">
            Meet Your Council
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders committed to representing your voice and making a difference
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-24">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelected(member)}
              className="cursor-pointer"
            >
              <Card
                className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 group hover:transform hover:scale-105 relative overflow-visible min-h-[200px]"
              >
                {/* Overlapping Profile Image, fades out on hover */}
                <div
                  className="absolute left-1/2 -top-12 transform -translate-x-1/2 z-20 transition-opacity duration-300 group-hover:opacity-0"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-glow border-4 border-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center relative z-10 pt-16 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-velvet mb-1 mt-2 tracking-tight text-center transition-opacity duration-300 group-hover:opacity-0">
                    {member.name}
                  </h3>
                  <span className="text-base font-medium text-muted-foreground mb-3 text-center block transition-opacity duration-300 group-hover:opacity-0">
                    {member.position}
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-champagne/20 text-velvet hover:bg-champagne/30 mb-3 hidden"
                  >
                    {member.position}
                  </Badge>
                </CardContent>
                {/* Hover Overlay with Background Color Change */}
                <div className="absolute inset-0 bg-gradient-to-br from-velvet/90 to-champagne/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20 rounded-lg">
                  <div className="flex gap-4 justify-center">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg border border-white/30 cursor-pointer"
                        onClick={e => e.stopPropagation()}
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg border border-white/30 cursor-pointer"
                        onClick={e => e.stopPropagation()}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for Member Bio (static) */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setSelected(null)}
          />
          {/* Modal Content */}
          <div
            className="relative bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl max-w-md w-full rounded-2xl overflow-hidden flex flex-col items-center p-8 z-10"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-velvet hover:bg-white/60 transition-all duration-300 shadow-lg border border-white/30"
            >
              <span className="text-lg font-bold">×</span>
            </button>
            <div
              className="w-32 h-32 rounded-full overflow-hidden shadow-glow border-4 border-white mb-4 cursor-zoom-in"
              onClick={() => setShowImage(true)}
              title="Click to view full photo"
            >
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-velvet mb-1 mt-2 tracking-tight text-center">
              {selected.name}
            </h3>
            <span className="text-lg font-medium text-muted-foreground mb-3 text-center block">
              {selected.position}
            </span>
            <p className="text-base text-velvet/80 text-center mb-4">
              {selected.bio}
            </p>
            <div className="flex gap-4 justify-center mt-2">
              {selected.instagram && (
                <a
                  href={selected.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-champagne/30 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/50 hover:scale-110 transition-all duration-200 shadow-lg border border-white/30 cursor-pointer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {selected.linkedin && (
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-champagne/30 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/50 hover:scale-110 transition-all duration-200 shadow-lg border border-white/30 cursor-pointer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Fullscreen Image Lightbox (static) */}
      {showImage && selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 cursor-zoom-out"
          onClick={() => setShowImage(false)}
        >
          <img
            src={selected.image}
            alt={selected.name}
            className="max-w-full max-h-full rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};