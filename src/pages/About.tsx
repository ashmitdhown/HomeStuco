import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target, Quote } from "lucide-react";
import sivaImg from "@/assets/councilphotos/Siva.jpeg";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-champagne/20 rounded-full blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-velvet mb-6">
            About <span className="text-transparent bg-gradient-accent bg-clip-text">Student Council</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-velvet/80 max-w-3xl mx-auto">
            Discover the story behind our student council, our mission, and the vision that drives us forward.
          </p>
        </div>
        {/* Student Council Description */}
        <div className="mb-20">
          <Card className="bg-white/90 backdrop-blur-sm border-border/50 shadow-luxury">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-velvet mb-4">
                  Who We Are
                </h2>
                <div className="w-16 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-velvet/80 leading-relaxed">
                    The BPDC Student Council serves as the primary representative body for all students, 
                    working tirelessly to enhance the academic, social, and cultural experience of our 
                    campus community. Established with the vision of fostering leadership, promoting 
                    student welfare, and creating meaningful change, our council operates on the principles 
                    of transparency, inclusivity, and excellence.
                  </p>
                  <p className="text-lg text-velvet/80 leading-relaxed">
                    We are committed to bridging the gap between students and administration, organizing 
                    events that bring our diverse community together, and advocating for student rights 
                    and interests. Through collaborative efforts and innovative initiatives, we strive to 
                    create an environment where every student feels heard, valued, and empowered to reach 
                    their full potential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* President's Note */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-velvet/5 to-champagne/10 backdrop-blur-sm border-border/50 shadow-luxury">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Quote className="h-8 w-8 text-champagne" />
                  <h2 className="text-3xl md:text-4xl font-bold text-velvet">
                    President's Note
                  </h2>
                  <Quote className="h-8 w-8 text-champagne" />
                </div>
                <div className="w-16 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <div className="text-velvet/80 leading-relaxed text-center mb-8">
                Welcome to the Student Council page! We are here to serve you and make your campus experience memorable.
              </div>
              <div className="text-velvet/60">
                <div className="font-semibold">Warm regards,</div>
                <div>Siva Balamurugan</div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur-sm border-border/50 shadow-luxury">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Target className="h-12 w-12 text-champagne mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-velvet mb-2">Our Mission</h3>
                <div className="w-12 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <p className="text-velvet/80 leading-relaxed text-center">
                To empower students through leadership development, foster a vibrant campus community, 
                and advocate for student interests while promoting academic excellence and personal growth.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm border-border/50 shadow-luxury">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Heart className="h-12 w-12 text-champagne mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-velvet mb-2">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <p className="text-velvet/80 leading-relaxed text-center">
                To be a catalyst for positive change, inspire student leadership, and create a campus environment 
                where every student feels valued, empowered, and equipped to succeed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;