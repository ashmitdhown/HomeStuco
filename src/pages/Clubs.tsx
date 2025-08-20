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
import SplineBg from "@/components/SplineBg";
<<<<<<< HEAD
import InstagramContactBar from "@/components/ui/InstagramContactBar";
=======
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67

const clubSections = [
  {
    clubs: [
<<<<<<< HEAD
      { name: "Expressions", logo: "/assets/logo.webp", head: { name: "Vaibhav", photo: "/assets/Club-members/Vaibhav.webp", intro: "President" }, description: "" },
      { name: "Reflexions", logo: "/assets/logo.webp", head: { name: "Sathvik Sreeram", photo: "/assets/Club-members/Sathvik.webp", intro: "President" }, description: "" },
      { name: "Paribhasha", logo: "/assets/logo.webp", head: { name: "Nishit Batwal", photo: "/assets/Club-members/Nishit.webp", intro: "President" }, description: "" },
      { name: "SEC MAD", logo: "/assets/logo.webp", head: { name: "Laksha Malik", photo: "/assets/Club-members/Laksha.webp", intro: "President" }, description: "" },
      { name: "Groove", logo: "/assets/logo.webp", head: { name: "Gourisankar Sajith", photo: "/assets/Club-members/Gourisankar.webp", intro: "President" }, description: "" },
      { name: "Supernova", logo: "/assets/logo.webp", head: { name: "Rushirajsinh Solanki", photo: "/assets/Club-members/Rushirajsinh.webp", intro: "President" }, description: "" },
      { name: "Allure", logo: "/assets/logo.webp", head: { name: "Vidyullekha V", photo: "/assets/Club-members/Vidyullekha.webp", intro: "President" }, description: "" },
      { name: "Oh Crop", logo: "/assets/logo.webp", head: { name: "Aimy Acksa", photo: "/assets/Club-members/Aimy.webp", intro: "President" }, description: "" },
      { name: "Shades", logo: "/assets/logo.webp", head: { name: "Varnikka TM", photo: "/assets/Club-members/Varnikka.webp", intro: "President" }, description: "" },
      { name: "Treble", logo: "/assets/logo.webp", head: { name: "Mevin Mathews", photo: "/assets/Club-members/Mevin.webp", intro: "President" }, description: "" },
=======
      { name: "Expressions", logo: "/src/assets/logo.png", head: { name: "Vaibhav", photo: "/src/assets/Club-members/Vaibhav.jpg", intro: "President" }, description: "" },
      { name: "Reflexions", logo: "/src/assets/logo.png", head: { name: "Sathvik Sreeram", photo: "/src/assets/Club-members/Sathvik.jpeg", intro: "President" }, description: "" },
      { name: "Paribhasha", logo: "/src/assets/logo.png", head: { name: "Nishit Batwal", photo: "/src/assets/Club-members/Nishit.jpeg", intro: "President" }, description: "" },
      { name: "Mad", logo: "/src/assets/logo.png", head: { name: "Laksha Malik", photo: "/src/assets/Club-members/Laksha.jpg", intro: "Secretary" }, description: "" },
      { name: "Groove", logo: "/src/assets/logo.png", head: { name: "Gourisankar Sajith", photo: "/src/assets/Club-members/Gourisankar.jpg", intro: "President" }, description: "" },
      { name: "Supernova", logo: "/src/assets/logo.png", head: { name: "Rushirajsinh Solanki", photo: "/src/assets/Club-members/Rushirajsinh.jpeg", intro: "President" }, description: "" },
      { name: "Allure", logo: "/src/assets/logo.png", head: { name: "Vidyullekha V", photo: "/src/assets/Club-members/Vidyullekha.jpeg", intro: "President" }, description: "" },
      { name: "Oh Crop", logo: "/src/assets/logo.png", head: { name: "Aimy Acksa", photo: "/src/assets/Club-members/Aimy.jpg", intro: "President" }, description: "" },
      { name: "Shades", logo: "/src/assets/logo.png", head: { name: "Varnikka TM", photo: "/src/assets/Club-members/Varnikka.jpeg", intro: "President" }, description: "" },
      { name: "Treble", logo: "/src/assets/logo.png", head: { name: "Mevin Mathews", photo: "/src/assets/Club-members/Mevin.jpg", intro: "President" }, description: "" },
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
    ],
  },
];

export default function Clubs() {
  return (
    <>
      <SplineBg />
      <PageBgAndCursor>
        {/* Hero Carousel */}
<<<<<<< HEAD
        <section className="relative h-[420px] md:h-[640px] lg:h-[900px] w-full overflow-hidden flex items-center justify-center">
          <div className="w-full h-[640px] md:h-[900px] lg:h-[1100px] flex items-center justify-center relative">
            <img
              src="/assets/eventscaroseul.jpg"
              alt="Club Carousel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Floating View Clubs Button - only on large screens */}
            <button
              onClick={() => {
                const section = document.getElementById('clubs-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden lg:flex absolute bottom-36 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-lg text-2xl font-bold text-white px-10 py-5 rounded-full shadow-2xl border-2 border-white/40 hover:bg-white/40 transition-all duration-300"
              style={{ letterSpacing: '0.05em', zIndex: 30 }}
            >
              View Clubs
            </button>
          </div>
        </section>

        {/* Clubs Section Redesigned */}
        <section id="clubs-section" className="py-20 min-h-screen">
=======
        <section className="relative h-[320px] md:h-[420px] lg:h-[520px] w-full overflow-hidden flex items-center justify-center">
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
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
                      {img.caption}
                    </h1>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Clubs Section Redesigned */}
        <section className="py-20 min-h-screen">
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
          <div className="max-w-7xl mx-auto px-4 relative z-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Clubs</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubSections[0].clubs.map((club, index) => (
                <div
                  key={index}
                  className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md"
                >
                  {/* Photo left */}
                  <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                    <img
<<<<<<< HEAD
              src={club.head.photo}
              alt={club.head.name}
              className="w-full h-full object-cover object-top"
              loading="lazy"
=======
                      src={club.head.photo}
                      alt={club.head.name}
                      className="w-full h-full object-cover object-top"
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
                    />
                  </div>

                  {/* Info right */}
                  <div className="flex flex-col flex-1 justify-center px-4 py-2">
                    {/* Club Name at Top */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 tracking-tight">
                      {club.name}
                    </h3>

                    {/* Head Info Below */}
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

      {/* Floating Contact Button */}
      <a
        href="/contact"
        className="fixed z-50 bottom-2 right-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" }}
        aria-label="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
        Contact Us
      </a>
<<<<<<< HEAD
    <InstagramContactBar />
    </>
  );
}
=======
    </>
  );
}
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
