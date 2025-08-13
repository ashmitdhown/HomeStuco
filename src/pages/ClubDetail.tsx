// Author: Manav Arya & Ashmit Dhon
import React from "react";

import { useParams } from "react-router-dom";

// Example club data (replace with real data or fetch from API)
const clubs = {
  "tech-club": {
    name: "Tech Club",
    logo: "/src/assets/logo.png",
    description: "Fostering innovation and technical skills among students.",
    head: {
      name: "Raj Patel",
      photo: "/src/assets/councilphotos/Raj.jpeg",
      intro: "Tech enthusiast and mentor."
    }
  },
  "arts-club": {
    name: "Arts Club",
    logo: "/src/assets/logo.png",
    description: "Celebrating creativity and artistic expression.",
    head: {
      name: "Sivapriya Reddy",
      photo: "/src/assets/councilphotos/Sivapriya.jpeg",
      intro: "Encouraging creativity and artistic expression."
    }
  },
  // ...add more clubs
};

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs[clubId || "tech-club"];

  if (!club) return <div className="text-center py-20">Club not found.</div>;

  return (
    <section className="py-20 min-h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <img src={club.logo} alt={club.name} className="w-64 h-64 object-contain rounded-2xl shadow-luxury" />
      </div>
      <div className="md:w-1/2 px-8">
        <h2 className="text-4xl font-bold text-velvet mb-4">{club.name}</h2>
        <p className="text-lg text-muted-foreground mb-6">{club.description}</p>
        <button className="bg-velvet text-pearl px-6 py-3 rounded-xl font-semibold shadow-luxury hover:bg-velvet/90 transition-all mb-8">Join Now</button>
        <div className="flex items-center gap-6">
          <img src={club.head.photo} alt={club.head.name} className="w-24 h-24 rounded-full object-cover shadow-lg" />
          <div>
            <div className="text-xl font-bold text-velvet mb-1">{club.head.name}</div>
            <div className="text-md text-muted-foreground">{club.head.intro}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
