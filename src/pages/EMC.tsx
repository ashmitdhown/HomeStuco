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