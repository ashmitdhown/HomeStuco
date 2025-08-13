// Author: Manav Arya & Ashmit Dhown
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { clubCarouselImages } from "./ClubCarouselImages";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";


import { useState } from "react";

const clubSections = [
  {
    clubs: [
      { name: "Treble", logo: "/src/assets/logo.png", head: { name: "Aimy", photo: "/src/assets/Club-members/Aimy.jpg", intro: "President" }, description: "" },
      { name: "Mad", logo: "/src/assets/logo.png", head: { name: "IMG_0212", photo: "/src/assets/Club-members/IMG_0212.JPG", intro: "President" }, description: "" },
      { name: "Paribhasha", logo: "/src/assets/logo.png", head: { name: "IMG_1011", photo: "/src/assets/Club-members/IMG_1011.jpeg", intro: "President" }, description: "" },
      { name: "Groove", logo: "/src/assets/logo.png", head: { name: "IMG_1650", photo: "/src/assets/Club-members/IMG_1650_Original.jpeg", intro: "President" }, description: "" },
      { name: "Expressions", logo: "/src/assets/logo.png", head: { name: "IMG_4046", photo: "/src/assets/Club-members/IMG_4046.jpeg", intro: "President" }, description: "" },
      { name: "Supernova", logo: "/src/assets/logo.png", head: { name: "IMG_7079", photo: "/src/assets/Club-members/IMG_7079 (1).jpg", intro: "President" }, description: "" },
      { name: "Allure", logo: "/src/assets/logo.png", head: { name: "1000069296", photo: "/src/assets/Club-members/1000069296.jpg", intro: "President" }, description: "" },
      { name: "Reflexions", logo: "/src/assets/logo.png", head: { name: "1000121306", photo: "/src/assets/Club-members/1000121306.jpg", intro: "President" }, description: "" },
      { name: "Shades", logo: "/src/assets/logo.png", head: { name: "Copy of DSC_8828", photo: "/src/assets/Club-members/Copy of DSC_8828.jpeg", intro: "President" }, description: "" },
      { name: "Oh Crop", logo: "/src/assets/logo.png", head: { name: "WhatsApp Image", photo: "/src/assets/Club-members/WhatsApp Image 2025-05-14 at 5.45.47 PM.jpeg", intro: "President" }, description: "" },
    ],
  },
];

import SplineBg from "@/components/SplineBg";

export default function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (club) => {
    setSelectedClub(club);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedClub(null);
  };

  return (
    <>
      <SplineBg />
      <PageBgAndCursor>
        {/* Hero Carousel Section with theme bg and cursor effect */}
        <section className="relative h-[320px] md:h-[420px] lg:h-[520px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none z-0" />
          <Carousel className="h-full w-full z-10">
            <CarouselContent>
              {clubCarouselImages.map((img, idx) => (
                <CarouselItem key={idx} className="h-[320px] md:h-[420px] lg:h-[520px] w-full relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">{img.caption}</h1>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>
        <section className="py-20 min-h-screen">
          <div className="space-y-16 max-w-6xl mx-auto">
            {clubSections.map((section, sIdx) => (
              <div key={sIdx}>
                {/* No section.title, so omit heading or add a static heading if needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.clubs.map((club, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl shadow-xl p-8 flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.04] border border-gray-100 hover:border-primary/40 bg-transparent backdrop-blur-md"
                      onClick={() => handleCardClick(club)}
                    >
                      <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/60 transition-all">
                        <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-1 text-center">{club.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2 text-center">{club.description}</p>
                      {/* President photo hidden on card, only shown in modal */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Club Details Modal */}
        {modalOpen && selectedClub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative flex flex-col">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-primary text-2xl font-bold"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex flex-col items-center mb-6">
                <img src={selectedClub.logo} alt={selectedClub.name} className="w-24 h-24 rounded-full border-4 border-primary/30 mb-2 object-cover" />
                <h2 className="text-2xl font-bold text-velvet mt-2 mb-1">{selectedClub.name}</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="md:w-1/3 w-full flex justify-center items-start">
                  <img src={selectedClub.head.photo} alt={selectedClub.head.name} className="w-[90px] h-[130px] object-cover border-2 border-primary/40 mb-2 shadow-lg bg-white" style={{ borderRadius: '12px' }} />
                  <div className="ml-4 mt-2 text-left">
                    <div className="text-lg font-semibold text-primary">{selectedClub.head.name || 'President'}</div>
                    <div className="text-xs text-muted-foreground">{selectedClub.head.intro}</div>
                  </div>
                </div>
                <div className="md:w-2/3 w-full">
                  <div className="text-base text-gray-700 whitespace-pre-line min-h-[80px]">{selectedClub.description || 'No description available.'}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      {/* Floating Contact Button */}
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
      </PageBgAndCursor>
    </>
  );
}
