import React from "react";

const emcTeam = [
<<<<<<< HEAD
  { name: "Aarav Sharma", role: "President", photo: "/assets/councilphotos/Ashmit.webp" },
  { name: "Suhas Rao", role: "Vice President", photo: "/assets/councilphotos/Suhas.webp" },
  { name: "Tanisha Singh", role: "Secretary", photo: "/assets/councilphotos/Tanisha.webp" },
=======
  { name: "Aarav Sharma", role: "President", photo: "/src/assets/councilphotos/Ashmit.jpeg" },
  { name: "Suhas Rao", role: "Vice President", photo: "/src/assets/councilphotos/Suhas.jpeg" },
  { name: "Tanisha Singh", role: "Secretary", photo: "/src/assets/councilphotos/Tanisha.jpeg" },
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
  // Add more team members as needed
];

export const EMCSection: React.FC = () => (
  <section id="emc-section" className="py-20 bg-pearl/60">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-velvet mb-4">Executive Members Council (EMC)</h2>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 fade-in">Leading with vision, integrity, and teamwork to empower every student.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {emcTeam.map((member, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-card p-6 flex flex-col items-center transition-all duration-300 hover:shadow-luxury fade-in-up">
          <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg" />
<<<<<<< HEAD
          <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg" loading="lazy" />
          <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg" loading="lazy" />
=======
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
          <h3 className="text-xl font-semibold text-velvet mb-1">{member.name}</h3>
          <span className="text-sm text-champagne font-medium mb-2">{member.role}</span>
        </div>
      ))}
    </div>
  </section>
);

// Add fade-in animation via Tailwind or custom CSS as needed
