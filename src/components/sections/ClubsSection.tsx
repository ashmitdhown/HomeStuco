import SplineBg from "@/components/SplineBg";
import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";

const clubs = [
  {
    name: "Tech Club",
    logo: "/assets/logo.webp",
    description: "Fostering innovation and technical skills among students.",
    head: {
      name: "Raj Patel",
      photo: "/assets/councilphotos/Raj.webp",
      intro: "Passionate about technology and student growth."
    }
  },
  {
    name: "Arts Club",
    logo: "/assets/logo.webp",
    description: "Celebrating creativity and artistic expression.",
    head: {
      name: "Sivapriya Reddy",
      photo: "/assets/councilphotos/Sivapriya.webp",
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
      <div className="max-w-4xl mx-auto">
        <List
          height={600}
          itemCount={clubs.length}
          itemSize={180}
          width={"100%"}
        >
          {({ index, style }) => {
            const club = clubs[index];
            return (
              <div
                key={index}
                style={style}
                className={`bg-white rounded-2xl shadow-card transition-all duration-300 hover:shadow-luxury cursor-pointer mb-8 ${openIdx === index ? "scale-105" : ""}`}
                onClick={() => setOpenIdx(openIdx === index ? null : index)}
              >
                <div className="flex items-center p-6">
                  <img src={club.logo} alt={club.name} className="w-16 h-16 rounded-full mr-4" loading="lazy" />
                  <div>
                    <h3 className="text-xl font-bold text-velvet mb-1">{club.name}</h3>
                    <p className="text-sm text-muted-foreground">{club.head.name}</p>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIdx === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6">
                    <p className="mb-2">{club.description}</p>
                    <div className="flex items-center">
                      <img src={club.head.photo} alt={club.head.name} className="w-10 h-10 rounded-full mr-2" loading="lazy" />
                      <span className="text-sm text-muted-foreground">{club.head.intro}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </List>
      </div>
      </section>
    </>
  );
};

// Add fade-in and expand/collapse animation via Tailwind or custom CSS as needed
