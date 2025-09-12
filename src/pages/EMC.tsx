
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

      <a
        href="/contact"
        className="fixed z-50 bottom-2 right-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        aria-label={t('contactUs', 'Contact Us')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
        {t('contactUs', 'Contact Us')}
      </a>

      <section className="w-full h-[60vh] md:h-screen flex items-center justify-center relative overflow-hidden z-30 p-0 m-0">

        <div className="absolute inset-0 w-full h-full z-0">
          <picture>
            <source media="(max-width: 640px)" srcSet="/assets/compressed/emc.png" />
            <img
              src="/assets/emc.png"
              alt="About Student Council Background"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '60vh', maxHeight: '100vh' }}
            />
          </picture>
        </div>


        <a
          href="https://forms.gle/5XnDaDRczGrUTxKi9"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-700/60 text-white px-8 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-700/80 transition-all text-lg font-semibold backdrop-blur-md"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
          aria-label="Join EMC"
        >
          JOIN NOW
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


     
    <InstagramContactBar />
    </>
  );
};
export default About;