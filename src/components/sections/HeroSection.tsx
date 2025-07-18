import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Calendar, Award } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-velvet mb-6 tracking-tight">
            Student Council
          </h1>
          <div className="w-32 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-velvet/80 max-w-3xl mx-auto leading-relaxed">
            Empowering students, fostering community, and creating positive change 
            through collaborative leadership and innovative initiatives.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-velvet hover:bg-velvet/90 text-pearl px-8 py-6 text-lg font-semibold shadow-luxury hover:shadow-glow transition-all duration-300"
          >
            Join Our Mission
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-velvet text-velvet hover:bg-velvet hover:text-pearl px-8 py-6 text-lg font-semibold transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-300 group-hover:transform group-hover:scale-105">
              <Users className="h-12 w-12 text-champagne mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-velvet mb-2">Community</h3>
              <p className="text-muted-foreground">Building connections across all student groups</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-300 group-hover:transform group-hover:scale-105">
              <Calendar className="h-12 w-12 text-champagne mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-velvet mb-2">Events</h3>
              <p className="text-muted-foreground">Organizing memorable experiences for students</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-300 group-hover:transform group-hover:scale-105">
              <Award className="h-12 w-12 text-champagne mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-velvet mb-2">Excellence</h3>
              <p className="text-muted-foreground">Striving for outstanding student representation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};