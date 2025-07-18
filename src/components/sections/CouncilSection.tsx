import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CouncilMember {
  name: string;
  position: string;
  image: string;
}

const councilMembers: CouncilMember[] = [
  {
    name: "Siva Balamurugan",
    position: "President",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Isharjot Singh Pasricha",
    position: "Vice President",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Sivapriya Madhu Pillai",
    position: "Secretary",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Raj Singh",
    position: "4th Year HR",
    image: "/api/placeholder/300/300",

  },
  {
    name: "Ashmit Dhown",
    position: "3rd Year HR",
    image: "/api/placeholder/300/300",

  },
  {
    name: "Gurkaran Singh",
    position: "3rd Year DSR",
    image: "/api/placeholder/300/300",

  },

  {
    name: "Suhas Simha S",
    position: "2nd Year HR",
    image: "/api/placeholder/300/300",

  },

  {
    name: "Tanisha Handa",
    position: "2nd Year DSR",
    image: "/api/placeholder/300/300",

  }
];

export const CouncilSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
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
              className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 relative">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-accent flex items-center justify-center shadow-glow">
                    <span className="text-2xl font-bold text-velvet">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};