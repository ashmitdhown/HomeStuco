import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin } from "lucide-react";
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
}

const councilMembers: CouncilMember[] = [
  {
    name: "Mohammad Shamshuddin Gangavali",
    position: "Ex-Officio",
    image: shamsImg,
    instagram: "https://www.instagram.com/shams_gangavali",
    linkedin: "https://www.linkedin.com/in/shams-gangavali",
  },
  {
    name: "Siva Balamurugan",
    position: "President",
    image: sivaImg,
    instagram: "https://www.instagram.com/siva_balamurugan",
    linkedin: "https://www.linkedin.com/in/siva-balamurugan",
  },
  {
    name: "Isharjot Singh Pasricha",
    position: "Vice President",
    image: isharjotImg,
    instagram: "https://www.instagram.com/isharjot_singh",
    linkedin: "https://www.linkedin.com/in/isharjot-singh-pasricha",
  },
  {
    name: "Sivapriya Madhu Pillai",
    position: "Secretary",
    image: sivapriyaImg,
    instagram: "https://www.instagram.com/sivapriya_madhu",
    linkedin: "https://www.linkedin.com/in/sivapriya-madhu-pillai",
  },
  {
    name: "Raj Singh",
    position: "4th Year HR",
    image: rajImg,
    instagram: "https://www.instagram.com/raj_singh",
    linkedin: "https://www.linkedin.com/in/raj-singh",
  },
  {
    name: "Ashmit Dhown",
    position: "3rd Year HR",
    image: ashmitImg,
    instagram: "https://www.instagram.com/ashmit_dhown",
    linkedin: "https://www.linkedin.com/in/ashmit-dhown",
  },
  {
    name: "Gurkaran Singh",
    position: "3rd Year DSR",
    image: gurkaranImg,
    instagram: "https://www.instagram.com/gurkaran_singh",
    linkedin: "https://www.linkedin.com/in/gurkaran-singh",
  },
  {
    name: "Suhas Simha S",
    position: "2nd Year HR",
    image: suhasImg,
    instagram: "https://www.instagram.com/suhas_simha",
    linkedin: "https://www.linkedin.com/in/suhas-simha",
  },
  {
    name: "Tanisha Handa",
    position: "2nd Year DSR",
    image: tanishaImg,
    instagram: "https://www.instagram.com/tanisha_handa",
    linkedin: "https://www.linkedin.com/in/tanisha-handa",
  }
];

export const CouncilSection = () => {
  return (
    <section id="council-section" className="py-20 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-velvet mb-6">
            Meet Your Council
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders committed to representing your voice and making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden"
            >
              <CardContent className="p-6 text-center relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="mb-4 relative">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-glow border-2 border-champagne/30">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-velvet mb-2">
                  {member.name}
                </h3>
                
                <Badge 
                  variant="secondary" 
                  className="bg-champagne/20 text-velvet hover:bg-champagne/30 mb-3"
                >
                  {member.position}
                </Badge>
              </CardContent>

              {/* Hover Overlay with Background Color Change */}
              <div className="absolute inset-0 bg-gradient-to-br from-velvet/90 to-champagne/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                <div className="flex gap-4 justify-center">
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg border border-white/30 cursor-pointer"
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
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};