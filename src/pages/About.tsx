// Author: Manav Arya & Ashmit Dhon
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target, Quote } from "lucide-react";
import sivaImg from "@/assets/councilphotos/Siva.jpeg";
import heroImg from "@/assets/Untitled design-5.png";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const About = () => {
  return (
    <>
      {/* Floating Contact Us Button */}
      <a
        href="/contact us"
        className="fixed z-50 bottom-2 right-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        aria-label="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
        Contact Us
      </a>
      {/* Hero Section with Background Image */}
      <section className="w-full h-screen flex items-center justify-center relative overflow-hidden z-30 p-0 m-0">
        {/* Full Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={heroImg}
            alt="About Student Council Background"
            className="w-full h-full object-fill object-center"
          />
        </div>
        
        {/* Main Content */}
        <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <PageBgAndCursor>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Mission & Vision - moved above Who We Are */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="bg-[#0a174e66] backdrop-blur-md text-white border-none shadow-luxury">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-full p-4 mb-2 shadow">
                  <Target className="h-10 w-10 text-champagne" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Our Mission</h3>
                <div className="w-12 h-1 bg-gradient-accent mx-auto rounded-full"></div>
              </div>
              <div className="border-t border-gray-200 w-full mb-6" />
              <p className="text-white leading-relaxed text-center text-lg">
                To empower students through <span className="font-semibold text-white">leadership development</span>, foster a vibrant campus community, and advocate for student interests while promoting academic excellence and personal growth.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#0a174e66] backdrop-blur-md text-white border-none shadow-luxury">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-full p-4 mb-2 shadow">
                  <Award className="h-10 w-10 text-champagne" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-accent mx-auto rounded-full"></div>
              </div>
              <div className="border-t border-gray-200 w-full mb-6" />
              <p className="text-white leading-relaxed text-center text-lg">
                To be the <span className="font-semibold text-white">leading student council</span> that creates an inclusive, innovative, and inspiring campus environment where every student thrives and achieves their full potential.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Student Council Description - now below Mission & Vision */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <Card className="bg-[#0a174e66] backdrop-blur-md text-white border-none shadow-luxury">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Who We Are
                </h2>
                <div className="w-16 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-white leading-relaxed">
                    The BPDC Student Council serves as the primary representative body for all students, 
                    working tirelessly to enhance the academic, social, and cultural experience of our 
                    campus community. Established with the vision of fostering leadership, promoting 
                    student welfare, and creating meaningful change, our council operates on the principles 
                    of transparency, inclusivity, and excellence.
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    We are committed to bridging the gap between students and administration, organizing 
                    events that bring our diverse community together, and advocating for student rights 
                    and interests. Through collaborative efforts and innovative initiatives, we strive to 
                    create an environment where every student feels heard, valued, and empowered to reach 
                    their full potential.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Users className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Student Voice</h3>
                    <p className="text-white/80">Representing and amplifying student concerns and aspirations</p>
                  </div>
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Award className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Leadership</h3>
                    <p className="text-white/80">Developing future leaders through hands-on experience</p>
                  </div>
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Heart className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                    <p className="text-white/80">Building a supportive and inclusive campus environment</p>
                  </div>
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Target className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                    <p className="text-white/80">Creating innovative solutions for student needs</p>
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
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="bg-[#0a174e66] backdrop-blur-md text-white border-none shadow-luxury">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Quote className="h-8 w-8 text-champagne" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    President's Note
                  </h2>
                  <Quote className="h-8 w-8 text-champagne" />
                </div>
                <div className="w-16 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* President Portrait - card container fills card height on large screens */}
                <div className="w-full lg:w-1/3 h-auto lg:h-full flex flex-col items-center justify-center">
                  <div className="w-60 h-[420px] lg:w-full lg:h-full rounded-2xl overflow-hidden shadow-xl border-4 border-champagne/30 bg-white mb-6 flex flex-col items-center justify-center">
                    <img
                      src={sivaImg}
                      alt="Siva Balamurugan - President"
                      className="w-full h-full object-cover object-top"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2 text-center mt-4 lg:mt-8">Siva Balamurugan</h3>
                    <Badge className="bg-champagne/20 text-white hover:bg-champagne/30 mb-2">
                      President, Student Council
                    </Badge>
                  </div>
                </div>
                {/* President's Message */}
                <div className="flex-1 space-y-6">
                  <p className="text-lg text-white leading-relaxed italic">
                    "Dear fellow students,
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    It is with immense pride and gratitude that I serve as your Student Council President. 
                    Our council represents the collective voice of every student at BPDC, and we are committed 
                    to ensuring that your academic journey is enriched with meaningful experiences, opportunities 
                    for growth, and a supportive community that celebrates diversity and inclusion.
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    This year, we have set ambitious goals to enhance student life through innovative events, 
                    improved facilities, and stronger connections between students, faculty, and administration. 
                    We believe that every student has the potential to be a leader, and we are here to provide 
                    the platform and support needed to turn that potential into reality.
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    I encourage each of you to actively participate in our initiatives, share your ideas, and 
                    help us create a campus environment that not only meets your needs but exceeds your expectations. 
                    Together, we can build a stronger, more vibrant community that will leave a lasting legacy 
                    for future generations of BPDC students.
                  </p>
                  <p className="text-lg text-white leading-relaxed italic">
                    Thank you for your trust and support. Let's make this year extraordinary!
                  </p>
                  <div className="text-white/80">
                    <div className="font-semibold">Warm regards,</div>
                    <div>Siva Balamurugan</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission & Vision */}

        </div>
      </PageBgAndCursor>
    </>
  );
};export default About;