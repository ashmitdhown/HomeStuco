import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
<<<<<<< HEAD
import shamsImg from "@/assets/councilphotos/Shams.webp";
import sivaImg from "@/assets/councilphotos/Siva.webp";
import isharjotImg from "@/assets/councilphotos/Isharjot.webp";
import sivapriyaImg from "@/assets/councilphotos/Sivapriya.webp";
import mustafaImg from "@/assets/councilphotos/Mustafa.webp";
import rajImg from "@/assets/councilphotos/Raj.webp";
import ashmitImg from "@/assets/councilphotos/Ashmit.webp";
import gurkaranImg from "@/assets/councilphotos/Gurkaran.webp";
import suhasImg from "@/assets/councilphotos/Suhas.webp";
import tanishaImg from "@/assets/councilphotos/Tanisha.webp";
=======
import shamsImg from "@/assets/councilphotos/Shams.jpeg";
import sivaImg from "@/assets/councilphotos/Siva.jpeg";
import isharjotImg from "@/assets/councilphotos/Isharjot.jpeg";
import sivapriyaImg from "@/assets/councilphotos/Sivapriya.jpeg";
import mustafaImg from "@/assets/councilphotos/Mustafa.jpeg";
import rajImg from "@/assets/councilphotos/Raj.jpeg";
import ashmitImg from "@/assets/councilphotos/Ashmit.jpeg";
import gurkaranImg from "@/assets/councilphotos/Gurkaran.jpeg";
import suhasImg from "@/assets/councilphotos/Suhas.jpeg";
import tanishaImg from "@/assets/councilphotos/Tanisha.jpeg";
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
import blankProfileImg from "@/assets/councilphotos/blank-profile-picture-973460_1280-2.webp";

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
    name: "Mohammad Shamshuddin Gangavali",
    position: "Ex-Officio",
    image: shamsImg,
    instagram: "https://www.instagram.com/shamshuddin_gangavali",
    linkedin: "https://www.linkedin.com/in/shamshuddin-gangavali",
    bio: LOREM
  },
  {
    name: "Sivaa Balamurugan",
    position: "President",
    image: sivaImg,
    instagram: "https://www.instagram.com/siva_balamurugan",
    linkedin: "https://www.linkedin.com/in/siva-balamurugan",
    bio: LOREM
  },
  {
    name: "Isharjot Singh Pasricha",
    position: "Vice President",
    image: isharjotImg,
    instagram: "https://www.instagram.com/isharjotpasricha",
    linkedin: "https://www.linkedin.com/in/isharjotpasricha",
    bio: LOREM

  },
  {
    name: "Sivapriya Madhu Pillai",
    position: "Secretary",
    image: sivapriyaImg,
    instagram: "https://www.instagram.com/sivapriyamadhupillai/",
    linkedin: "https://www.linkedin.com/in/sivapriya-madhu-pillai-721aa130a/",
    bio: LOREM

  },
  {
    name: "Raj Singh",
    position: "4th Year HR",
    image: rajImg,
    instagram: "https://www.instagram.com/raj_singh",
    linkedin: "https://www.linkedin.com/in/raj-singh",
    bio: LOREM
  },
  {
    name: "Mustafa Fatehi",
    position: "4th Year DSR",
    image: mustafaImg,
    instagram: "https://www.instagram.com/mustafatehi",
    linkedin: "https://www.linkedin.com/in/mustafa-fatehi",
    bio: LOREM
  },
  {
    name: "Ashmit Dhown",
    position: "3rd Year HR",
    image: ashmitImg,
    instagram: "https://www.instagram.com/ashmitdhown",
    linkedin: "https://www.linkedin.com/in/ashmit-dhown-3b5523314/",
    bio: LOREM

  },
  {
    name: "Gurkaran Singh",
    position: "3rd Year DSR",
    image: gurkaranImg,
    instagram: "https://www.instagram.com/gurkaran_singh",
    linkedin: "https://www.linkedin.com/in/gurkaran-singh",
    bio: LOREM
  },
  {
    name: "Suhas Simha S",
    position: "2nd Year HR",
    image: suhasImg,
    instagram: "https://www.instagram.com/suhas_simha",
    linkedin: "https://www.linkedin.com/in/suhas-simha-s-301931325/",
    bio: LOREM
  },
  {
    name: "Tanisha Handa",
    position: "2nd Year DSR",
    image: tanishaImg,
    instagram: "https://www.instagram.com/tanisha_handa",
    linkedin: "https://www.linkedin.com/in/tanisha-handa",
    bio: LOREM
  },
  {
    name: "To be announced",
    position: "1st Year HR",
    image: blankProfileImg,
    linkedin: "https://linkedin.com",
    bio: LOREM
  },
  {
    name: "To be announced",
    position: "1st Year DSR",
    image: blankProfileImg,
    instagram: "https://www.instagram.com/txnishx24",
    linkedin: "https://linkedin.com",
    bio: LOREM
  }
];

export const CouncilSection = () => {
  return (
    <section id="council-section" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your Council
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders committed to representing your voice and making a difference
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#14213d99] rounded-xl shadow-md flex flex-row items-center p-0 overflow-hidden relative min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-md"
            >
<<<<<<< HEAD
              {/* Social icons top right */}
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
                    {/* Simple Instagram SVG icon */}
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
=======
              {/* LinkedIn icon top right */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-velvet hover:bg-champagne/70 transition shadow border border-white/60"
                  title="LinkedIn"
                  onClick={e => e.stopPropagation()}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
>>>>>>> df32317b40431adca3251afd0946278b0c3dde67
              {/* Photo left, info right */}
              <div className="flex-shrink-0 w-28 h-36 m-4 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/60">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
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
          ))}
        </div>
      </div>
    </section>
  );
};