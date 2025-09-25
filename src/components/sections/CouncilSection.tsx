import { Linkedin } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

interface CouncilMember {
  name: string;
  position: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  bio: string;
}

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget consequat massa enim nec sem.";

const councilMembers: CouncilMember[] = [
  {
    name: "Sivaa Balamurugan",
    position: "President",
    image: "/assets/councilphotos/Siva.webp",
    instagram: "https://www.instagram.com/siv.xxa/",
    linkedin: "https://www.linkedin.com/in/sivaab/",
    bio: LOREM
  },
  {
    name: "Isharjot Singh Pasricha",
    position: "Vice President",
    image: "/assets/councilphotos/Isharjot.webp",
    instagram: "https://www.instagram.com/isharjotpasricha/",
    linkedin: "https://www.linkedin.com/in/isharjotpasricha",
    bio: LOREM
  },
  {
    name: "Sivapriya Madhu Pillai",
    position: "Secretary",
    image: "/assets/councilphotos/Sivapriya.webp",
    instagram: "https://www.instagram.com/sivapriyamadhupillai/",
    linkedin: "https://www.linkedin.com/in/sivapriya-madhu-pillai-721aa130a/",
    bio: LOREM
  },
  {
    name: "Mohammad Shamshuddin Gangavali",
    position: "Ex-Officio",
    image: "/assets/councilphotos/Shams.webp",
    instagram: "https://www.instagram.com/shamshuddin2424/",
    linkedin: "https://www.linkedin.com/in/shamshuddin-gangavali",
    bio: LOREM
  },
  {
    name: "Raj Singh",
    position: "4th Year HR",
    image: "/assets/councilphotos/Raj.webp",
    linkedin: "https://www.linkedin.com/in/raj-singh-913a21278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: LOREM
  },
  {
    name: "Mustafa Fatehi",
    position: "4th Year DSR",
    image: "/assets/councilphotos/Mustafa.webp",
    instagram: "https://www.instagram.com/mustafatehi/profilecard/?igsh=OHNlaDdwdjI4ODU3",
    linkedin: "https://www.linkedin.com/in/mustafa-fatehi",
    bio: LOREM
  },
  {
    name: "Ashmit Dhown",
    position: "3rd Year HR",
    image: "/assets/councilphotos/Ashmit.webp",
    instagram: "https://www.instagram.com/ashmitdhown/",
    linkedin: "https://www.linkedin.com/in/ashmit-dhown-3b5523314/",
    bio: LOREM
  },
  {
    name: "Gurkaran Singh",
    position: "3rd Year DSR",
    image: "/assets/councilphotos/Gurkaran.webp",
    instagram: "https://www.instagram.com/i._guru?igsh=MW1jbWx4dG5xZG5rMA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/gurkaran-singh-b1127b327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: LOREM
  },
  {
    name: "Suhas Simha S",
    position: "2nd Year HR",
    image: "/assets/councilphotos/Suhas.webp",
    linkedin: "https://www.linkedin.com/in/suhas-simha-s-301931325/",
    bio: LOREM
  },
  {
    name: "Tanisha Handa",
    position: "2nd Year DSR",
    image: "/assets/councilphotos/Tanisha.webp",
    instagram: "https://www.instagram.com/txnishx24/",
    bio: LOREM
  },

  {
    name: "Amaan Purohit Haider",
    position: "1st Year HR",
    image: "/assets/councilphotos/Amaan.jpeg",
    bio: LOREM
  },
  

  {
    name: "Shreya Pramode",
    position: "1st Year DSR",
    image: "/assets/councilphotos/Shreya.jpeg",
    instagram:"https://www.instagram.com/shreya.pramod1011?igsh=OTIwaHhqb3p3NXB5&utm_source=qr",
    bio: LOREM
  },
  {
    name: "Manjushree Magesh",
    position: "IMT HR",
    image: "/assets/councilphotos/Manjushree.jpeg",
    instagram:"https://www.instagram.com/oblivious.really?igsh=MWNmd3RqN2F2cWc4Mw%3D%3D&utm_source=qr",
    bio: LOREM
  },
  {
    name: "Vaani Gill",
    position: "STUDY WORLD HR",
    image: "/assets/councilphotos/Vaani.jpeg",
    instagram:"https://www.instagram.com/vaanii.gill?igsh=MTJtd3YwODhsOTJp",
    linkedin:"https://www.linkedin.com/in/vaani-gill-71a8bb372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: LOREM
  },
  {
    name: "Mansha Saraswat",
    position: "G/H-Block HR",
    image: "/assets/councilphotos/Mansha.jpeg",
    instagram:"https://www.instagram.com/eternallythought/",
    linkedin:"https://www.linkedin.com/in/mansha-saraswat/",
    bio: LOREM
  },

];

export const CouncilSection = () => {
  const { t } = useTranslation();
  return (
    <section id="council-section" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("meetCouncil")}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            {t("councilDesc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(() => {
            const members = [...councilMembers];
            const hBlockIndex = members.findIndex(m => m.position === "H-Block HR");
            if (hBlockIndex === -1) return members.map((member, index) => (
              <div
                key={index}
                className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md"
              >

                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-pink-500 hover:bg-champagne/70 transition shadow border border-white/60"
                      title="Instagram"
                      onClick={e => e.stopPropagation()}
                    >

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/70 transition shadow border border-white/60"
                      title="LinkedIn"
                      onClick={e => e.stopPropagation()}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-center px-4 py-2">
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-base font-medium text-white/80 mb-0 block">
                    {member.position}
                  </span>
                </div>
              </div>
            ));
            const hBlock = members.splice(hBlockIndex, 1)[0];
            // Render all except H-Block HR
            const cards = members.map((member, index) => (
              <div key={index} className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-pink-500 hover:bg-champagne/70 transition shadow border border-white/60"
                      title="Instagram"
                      onClick={e => e.stopPropagation()}
                    >

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/70 transition shadow border border-white/60"
                      title="LinkedIn"
                      onClick={e => e.stopPropagation()}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-center px-4 py-2">
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-base font-medium text-white/80 mb-0 block">
                    {member.position}
                  </span>
                </div>
              </div>
            ));
            // Add placeholders to center H-Block HR in last row
            const remainder = cards.length % 3;
            if (remainder === 1) {
              cards.push(<div key="empty1" />);
              cards.push(
                <div key="h-block-center" className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md">
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {hBlock.instagram && (
                      <a
                        href={hBlock.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-pink-500 hover:bg-champagne/70 transition shadow border border-white/60"
                        title="Instagram"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </a>
                    )}
                    {hBlock.linkedin && (
                      <a
                        href={hBlock.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/70 transition shadow border border-white/60"
                        title="LinkedIn"
                        onClick={e => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                    <img
                      src={hBlock.image}
                      alt={hBlock.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center px-4 py-2">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                      {hBlock.name}
                    </h3>
                    <span className="text-base font-medium text-white/80 mb-0 block">
                      {hBlock.position}
                    </span>
                  </div>
                </div>
              );
            } else if (remainder === 2) {
              cards.push(<div key="empty1" />);
              cards.push(
                <div key="h-block-center" className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md">
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {hBlock.instagram && (
                      <a
                        href={hBlock.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-pink-500 hover:bg-champagne/70 transition shadow border border-white/60"
                        title="Instagram"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </a>
                    )}
                    {hBlock.linkedin && (
                      <a
                        href={hBlock.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/70 transition shadow border border-white/60"
                        title="LinkedIn"
                        onClick={e => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                    <img
                      src={hBlock.image}
                      alt={hBlock.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center px-4 py-2">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                      {hBlock.name}
                    </h3>
                    <span className="text-base font-medium text-white/80 mb-0 block">
                      {hBlock.position}
                    </span>
                  </div>
                </div>
              );
            } else {
              // If remainder is 0, start a new row with H-Block HR in the center
              cards.push(<div key="empty1" />);
              cards.push(
                <div key="h-block-center" className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md">
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {hBlock.instagram && (
                      <a
                        href={hBlock.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-pink-500 hover:bg-champagne/70 transition shadow border border-white/60"
                        title="Instagram"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </a>
                    )}
                    {hBlock.linkedin && (
                      <a
                        href={hBlock.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/70 transition shadow border border-white/60"
                        title="LinkedIn"
                        onClick={e => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                    <img
                      src={hBlock.image}
                      alt={hBlock.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center px-4 py-2">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                      {hBlock.name}
                    </h3>
                    <span className="text-base font-medium text-white/80 mb-0 block">
                      {hBlock.position}
                    </span>
                  </div>
                </div>
              );
              cards.push(<div key="empty2" />);
            }
            return cards;
          })()}
        </div>
      </div>
    </section>
  );
};