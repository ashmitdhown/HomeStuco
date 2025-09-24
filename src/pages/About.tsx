import InstagramContactBar from "@/components/ui/InstagramContactBar";
// Author: Manav Arya & Ashmit Dhown
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target, Quote } from "lucide-react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>

      <section className="w-full h-[60vh] md:h-screen flex items-center justify-center relative overflow-hidden z-30 p-0 m-0">

        <div className="absolute inset-0 w-full h-full z-0">
          <picture>
            <source media="(max-width: 640px)" srcSet="/assets/compressed/aboutsmall.webp" />
            <img
              src="/assets/Untitled design-5.webp"
              alt="About Student Council Background"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '60vh', maxHeight: '100vh' }}
            />
          </picture>
        </div>


        <a
          href="#about-content"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-700/60 text-white px-8 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-700/80 transition-all text-lg font-semibold backdrop-blur-md"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
          aria-label="Learn More"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
          Learn More
        </a>

        <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
        </div>
      </section>


      <PageBgAndCursor>
        <div id="about-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

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
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('ourMission', 'Our Mission')}</h3>
                <div className="w-12 h-1 bg-gradient-accent mx-auto rounded-full"></div>
              </div>
              <div className="border-t border-gray-200 w-full mb-6" />
              <p className="text-white leading-relaxed text-center text-lg">
                {t('missionText', 'To empower students through leadership development, foster a vibrant campus community, and advocate for student interests while promoting academic excellence and personal growth.')}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#0a174e66] backdrop-blur-md text-white border-none shadow-luxury">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-full p-4 mb-2 shadow">
                  <Award className="h-10 w-10 text-champagne" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('ourVision', 'Our Vision')}</h3>
                <div className="w-12 h-1 bg-gradient-accent mx-auto rounded-full"></div>
              </div>
              <div className="border-t border-gray-200 w-full mb-6" />
              <p className="text-white leading-relaxed text-center text-lg">
                {t('visionText', 'To be the leading student council that creates an inclusive, innovative, and inspiring campus environment where every student thrives and achieves their full potential.')}
              </p>
            </CardContent>
          </Card>
        </motion.div>


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
                  {t('whoWeAre', 'Who We Are')}
                </h2>
                <div className="w-16 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-white leading-relaxed">
                    {t('whoWeAreText1', 'The BPDC Student Council serves as the primary representative body for all students, working tirelessly to enhance the academic, social, and cultural experience of our campus community. Established with the vision of fostering leadership, promoting student welfare, and creating meaningful change, our council operates on the principles of transparency, inclusivity, and excellence.')}
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    {t('whoWeAreText2', 'We are committed to bridging the gap between students and administration, organizing events that bring our diverse community together, and advocating for student rights and interests. Through collaborative efforts and innovative initiatives, we strive to create an environment where every student feels heard, valued, and empowered to reach their full potential.')}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Users className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{t('studentVoice', 'Student Voice')}</h3>
                    <p className="text-white/80">{t('studentVoiceDesc', 'Representing and amplifying student concerns and aspirations')}</p>
                  </div>
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Award className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{t('leadership', 'Leadership')}</h3>
                    <p className="text-white/80">{t('leadershipDesc', 'Developing future leaders through hands-on experience')}</p>
                  </div>
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Heart className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{t('community', 'Community')}</h3>
                    <p className="text-white/80">{t('communityDesc', 'Building a supportive and inclusive campus environment')}</p>
                  </div>
                  <div className="text-center p-6 bg-[#11235A] text-white rounded-xl">
                    <Target className="h-12 w-12 text-champagne mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{t('innovation', 'Innovation')}</h3>
                    <p className="text-white/80">{t('innovationDesc', 'Creating innovative solutions for student needs')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>


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
                    {t('presidentsNote', "President's Note")}
                  </h2>
                  <Quote className="h-8 w-8 text-champagne" />
                </div>
                <div className="w-16 h-1 bg-gradient-accent mx-auto"></div>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 items-center">

                <div className="w-full lg:w-1/3 h-auto lg:h-full flex flex-col items-center justify-center">
                  <div className="w-60 h-[350px] md:h-[420px] lg:w-full lg:h-full rounded-2xl overflow-hidden shadow-xl border-4 border-champagne/30 bg-white mb-6 flex flex-col items-center justify-center">
                    <img
                            src="/assets/councilphotos/Siva.webp"
                      alt="Siva Balamurugan - President"
                      className="w-full h-full object-cover object-top"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2 text-center mt-4 lg:mt-8">{t('presidentName', 'Siva Balamurugan')}</h3>
                    <Badge className="bg-champagne/20 text-white hover:bg-champagne/30 mb-2">
                      {t('presidentTitle', 'President, Student Council')}
                    </Badge>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <p className="text-lg text-white leading-relaxed italic">
                    {t('presidentMsg1', '"Dear fellow students,')}
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    {t('presidentMsg2', 'It is with immense pride and gratitude that I serve as your Student Council President. Our council represents the collective voice of every student at BPDC, and we are committed to ensuring your voices are heard and your needs are met. We believe that every student has the potential to be a leader, and we are here to provide the platform and support needed to turn that potential into reality.')}
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    {t('presidentMsg3', 'I encourage each of you to actively participate in our initiatives, share your ideas, and help us create a campus environment that not only meets your needs but exceeds your expectations. Together, we can build a stronger, more vibrant community that will leave a lasting legacy for future generations of BPDC students.')}
                  </p>
                  <p className="text-lg text-white leading-relaxed italic">
                    {t('presidentMsg4', "Thank you for your trust and support. Let's make this year extraordinary!")}
                  </p>
                  <div className="text-white/80">
                    <div className="font-semibold">{t('warmRegards', 'Warm regards,')}</div>
                    <div>{t('presidentName', 'Siva Balamurugan')}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>



        </div>
      </PageBgAndCursor>
    <InstagramContactBar />
    </>
  );
};
export default About;