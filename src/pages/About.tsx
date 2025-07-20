import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target, Quote } from "lucide-react";
import sivaImg from "@/assets/councilphotos/Siva.jpeg";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-champagne/20 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-velvet mb-6">
            About <span className="text-transparent bg-gradient-accent bg-clip-text">Student Council</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-velvet/80 max-w-3xl mx-auto">
            Discover the story behind our student council, our mission, and the vision that drives us forward.
          </p>
        </motion.div>

        {/* Student Council Description */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-primary/10 rounded-xl border border-champagne/20">
                    <Users className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-velvet mb-2">Student Voice</h3>
                    <p className="text-velvet/70">Representing and amplifying student concerns and aspirations</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-primary/10 rounded-xl border border-champagne/20">
                    <Award className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-velvet mb-2">Leadership</h3>
                    <p className="text-velvet/70">Developing future leaders through hands-on experience</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-primary/10 rounded-xl border border-champagne/20">
                    <Heart className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-velvet mb-2">Community</h3>
                    <p className="text-velvet/70">Building a supportive and inclusive campus environment</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-primary/10 rounded-xl border border-champagne/20">
                    <Target className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-velvet mb-2">Innovation</h3>
                    <p className="text-velvet/70">Creating innovative solutions for student needs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* President's Note */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                 {/* President Image */}
                 <div className="text-center lg:text-left">
                   <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-xl border-4 border-champagne/30 mb-6">
                     <img 
                       src={sivaImg} 
                       alt="Siva Balamurugan - President"
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-velvet mb-2">Siva Balamurugan</h3>
                     <Badge className="bg-champagne/20 text-velvet hover:bg-champagne/30">
                       President, Student Council
                     </Badge>
                   </div>
                 </div>
                
                {/* President's Message */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-lg text-velvet/80 leading-relaxed italic">
                    "Dear fellow students,
                  </p>
                  
                  <p className="text-lg text-velvet/80 leading-relaxed">
                    It is with immense pride and gratitude that I serve as your Student Council President. 
                    Our council represents the collective voice of every student at BPDC, and we are committed 
                    to ensuring that your academic journey is enriched with meaningful experiences, opportunities 
                    for growth, and a supportive community that celebrates diversity and inclusion.
                  </p>
                  
                  <p className="text-lg text-velvet/80 leading-relaxed">
                    This year, we have set ambitious goals to enhance student life through innovative events, 
                    improved facilities, and stronger connections between students, faculty, and administration. 
                    We believe that every student has the potential to be a leader, and we are here to provide 
                    the platform and support needed to turn that potential into reality.
                  </p>
                  
                  <p className="text-lg text-velvet/80 leading-relaxed">
                    I encourage each of you to actively participate in our initiatives, share your ideas, and 
                    help us create a campus environment that not only meets your needs but exceeds your expectations. 
                    Together, we can build a stronger, more vibrant community that will leave a lasting legacy 
                    for future generations of BPDC students.
                  </p>
                  
                  <p className="text-lg text-velvet/80 leading-relaxed italic">
                    Thank you for your trust and support. Let's make this year extraordinary!
                  </p>
                  
                                     <div className="text-velvet/60">
                     <div className="font-semibold">Warm regards,</div>
                     <div>Siva Balamurugan</div>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
                <Award className="h-12 w-12 text-champagne mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-velvet mb-2">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <p className="text-velvet/80 leading-relaxed text-center">
                To be the leading student council that creates an inclusive, innovative, and inspiring 
                campus environment where every student thrives and achieves their full potential.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;