import SplineBg from "@/components/SplineBg";
import React, { useState } from "react";

const clubs = [
  {
    name: "Tech Club",
<<<<<<< HEAD
    logo: "/assets/logo.webp",
    description: "Fostering innovation and technical skills among students.",
    head: {
      name: "Raj Patel",
      photo: "/assets/councilphotos/Raj.webp",
=======
    logo: "/src/assets/logo.png",
    description: "Fostering innovation and technical skills among students.",
    head: {
      name: "Raj Patel",
      photo: "/src/assets/councilphotos/Raj.jpeg",
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
      intro: "Passionate about technology and student growth."
    }
  },
  {
    name: "Arts Club",
<<<<<<< HEAD
    logo: "/assets/logo.webp",
    description: "Celebrating creativity and artistic expression.",
    head: {
      name: "Sivapriya Reddy",
      photo: "/assets/councilphotos/Sivapriya.webp",
=======
    logo: "/src/assets/logo.png",
    description: "Celebrating creativity and artistic expression.",
    head: {
      name: "Sivapriya Reddy",
      photo: "/src/assets/councilphotos/Sivapriya.jpeg",
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
      intro: "Encouraging every student to find their creative voice."
    }
  },
  // Add more clubs as needed
];

export const ClubsSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <SplineBg />
      <section id="clubs-section" className="py-20 bg-pearl/40">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-velvet mb-4">Our Backbone → Student Clubs & EMC</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 fade-in">Explore our vibrant clubs, each led by passionate students.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {clubs.map((club, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-card transition-all duration-300 hover:shadow-luxury cursor-pointer ${openIdx === idx ? "scale-105" : ""}`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="flex items-center p-6">
              <img src={club.logo} alt={club.name} className="w-16 h-16 rounded-full mr-4" />
<<<<<<< HEAD
              <img src={club.logo} alt={club.name} className="w-16 h-16 rounded-full mr-4" loading="lazy" />
              <img src={club.logo} alt={club.name} className="w-16 h-16 rounded-full mr-4" loading="lazy" />
=======
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
              <div>
                <h3 className="text-xl font-bold text-velvet mb-1">{club.name}</h3>
                <p className="text-sm text-muted-foreground">{club.head.name}</p>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-6 pb-6">
                <p className="mb-2">{club.description}</p>
                <div className="flex items-center">
                  <img src={club.head.photo} alt={club.head.name} className="w-10 h-10 rounded-full mr-2" />
<<<<<<< HEAD
                <img src={club.head.photo} alt={club.head.name} className="w-10 h-10 rounded-full mr-2" loading="lazy" />
                <img src={club.head.photo} alt={club.head.name} className="w-10 h-10 rounded-full mr-2" loading="lazy" />
=======
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
                  <span className="text-sm text-muted-foreground">{club.head.intro}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

// Add fade-in and expand/collapse animation via Tailwind or custom CSS as needed
