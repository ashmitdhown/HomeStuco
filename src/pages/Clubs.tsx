import React from "react";
import {
} from "@/components/ui/carousel";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import InstagramContactBar from "@/components/ui/InstagramContactBar";
import { useTranslation } from 'react-i18next';

export default function Clubs() {
  const { t } = useTranslation();

  const clubSections = [
    {
      clubs: [
        { name: t('expressions', 'Expressions'), logo: "/assets/logo.webp", head: { name: "Vaibhav", photo: "/assets/Club-members/Vaibhav.webp", intro: t('president', 'President') }, description: "" },
        { name: t('reflexions', 'Reflexions'), logo: "/assets/logo.webp", head: { name: "Sathvik Sreeram", photo: "/assets/Club-members/Sathvik.webp", intro: t('president', 'President') }, description: "" },
        { name: t('paribhasha', 'Paribhasha'), logo: "/assets/logo.webp", head: { name: "Nishit Batwal", photo: "/assets/compressed/Nishit.webp", intro: t('president', 'President') }, description: "" },
        { name: t('secMAD', 'SEC MAD'), logo: "/assets/logo.webp", head: { name: "Laksha Malik", photo: "/assets/Club-members/Laksha.webp", intro: t('president', 'President') }, description: "" },
        { name: t('groove', 'Groove'), logo: "/assets/logo.webp", head: { name: "Gourisankar Sajith", photo: "/assets/Club-members/Gourisankar.webp", intro: t('president', 'President') }, description: "" },
        { name: t('supernova', 'Supernova'), logo: "/assets/logo.webp", head: { name: "Rushirajsinh Solanki", photo: "/assets/Club-members/Rushirajsinh.webp", intro: t('president', 'President') }, description: "" },
        { name: t('allure', 'Allure'), logo: "/assets/logo.webp", head: { name: "Aaditya Deokar", photo: "/assets/Club-members/AadityaDeokar.webp", intro: t('president', 'President') }, description: "" },
        { name: t('ohCrop', 'Oh Crop'), logo: "/assets/logo.webp", head: { name: "Aimy Acksa", photo: "/assets/Club-members/Aimy.webp", intro: t('president', 'President') }, description: "" },
        { name: t('shades', 'Shades'), logo: "/assets/logo.webp", head: { name: "Drisya Manikkath", photo: "/assets/Club-members/DrisyaManikkath.webp", intro: t('president', 'President') }, description: "" },
        { name: t('treble', 'Treble'), logo: "/assets/logo.webp", head: { name: "Mevin Mathews", photo: "/assets/Club-members/Mevin.webp", intro: t('president', 'President') }, description: "" },
        { name: t('sportsclub', 'Sports Club'), logo: "/assets/logo.webp", head: { name: "Shaurya Gupta", photo: "/assets/Club-members/ShauryaGupta.webp", intro: t('president', 'President') }, description: "" },
      ],
    },
  ];

  return (
    <>
      <PageBgAndCursor>

        <section className="relative h-[60vh] md:h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
          <div className="w-full h-full flex items-center justify-center relative" style={{ willChange: 'transform' }}>
            <img
              src="/assets/clubs2carousel.jpg"
              alt={t('clubCarousel', 'Club Carousel')}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <button
              onClick={() => {
                const section = document.getElementById('clubs-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden lg:flex absolute bottom-36 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-lg text-2xl font-bold text-white px-10 py-5 rounded-full shadow-2xl border-2 border-white/40 hover:bg-white/40 transition-all duration-300 pointer-events-auto"
              style={{ letterSpacing: '0.05em', zIndex: 30 }}
              aria-label={t('viewClubs', 'View Clubs')}
            >
              {t('viewClubs', 'View Clubs')}
            </button>
          </div>
        </section>


        <section id="clubs-section" className="py-20 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 relative z-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('ourClubs', 'Our Clubs')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubSections[0].clubs.map((club, index) => (
                <div
                  key={index}
                  className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md"
                >

                  <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                    <img
              src={club.head.photo}
              alt={club.head.name}
              className="w-full h-full object-cover object-top"
              loading="lazy"
                    />
                  </div>


                  <div className="flex flex-col flex-1 justify-center px-4 py-2">

                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 tracking-tight">
                      {club.name}
                    </h3>


                    <div className="flex flex-col">
                      <span className="text-lg md:text-xl font-semibold text-white mb-1">
                        {club.head.name}
                      </span>
                      <span className="text-sm md:text-base font-medium text-white/80">
                        {club.head.intro}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageBgAndCursor>


      <InstagramContactBar />
    </>
  );
}