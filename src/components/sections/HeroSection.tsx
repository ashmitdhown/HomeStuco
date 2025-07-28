import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Calendar, Award } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Subtle static background shape for depth (no animation) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-champagne/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-velvet/5 rounded-full blur-2xl z-0" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-velvet via-champagne to-velvet bg-clip-text text-transparent relative inline-block">
            Student Council
            {/* Shine effect (static, not animated) */}
            <span className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden">
              <span className="block w-1/3 h-full bg-gradient-to-r from-white/0 via-white/60 to-white/0 opacity-40 rotate-12" style={{ left: '33%' }} />
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-velvet/80 max-w-3xl mx-auto leading-relaxed">
            Empowering students, fostering community, and creating positive change
            through collaborative leadership and innovative initiatives.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-velvet hover:bg-velvet/90 text-pearl px-8 py-6 text-lg font-semibold shadow-luxury hover:shadow-glow transition-all duration-300"
            onClick={() => {
              document.getElementById('council-section')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Know Your Council
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-velvet text-velvet hover:bg-velvet hover:text-pearl px-8 py-6 text-lg font-semibold transition-all duration-300"
            onClick={() => {
              document.getElementById('announcement-section')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Announcements
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
      {/* Scroll Down Indicator (static) */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-8 h-8 rounded-full border-2 border-champagne flex items-center justify-center mb-1">
          <ChevronRight className="h-6 w-6 text-champagne rotate-90" />
        </div>
        <span className="text-xs text-champagne font-semibold tracking-widest">SCROLL</span>
      </div>
    </section>
  );
};