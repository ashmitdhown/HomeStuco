import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Linkedin, Instagram, Facebook, X as Twitter } from "lucide-react";

export const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowContact(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden z-30 p-0 m-0 -mt-16">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={"src/assets/Hero 2.jpg"}
          alt="Student Council Background"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.6)" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Animated shine keyframes */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shine-animate {
          animation: shine 2.5s linear infinite;
        }
      `}</style>
      {/* Social Icons Vertical Bar */}
      <div className="hidden md:flex flex-col items-center gap-6 absolute right-12 top-1/2 -translate-y-1/2 z-20">
        <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition"><Mail size={28} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition"><Linkedin size={28} /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition"><Instagram size={28} /></a>
      </div>
      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center" style={{ minHeight: '100vh' }}>
        <h1 className="text-[8rem] md:text-[7.5rem] font-extrabold text-white mb-[-2rem] tracking-tight uppercase drop-shadow-lg">STUDENT</h1>
        <h1 className="text-[8rem] md:text-[7.5rem] font-extrabold text-white mb-[-1rem] tracking-tight uppercase drop-shadow-lg">COUNCIL</h1>
        <h2 className="text-[4rem] md:text-[3.5rem] font-semibold text-white mb-0 tracking-wide uppercase drop-shadow">BITS PILANI, DUBAI</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          {/* ...existing code... */}
        </div>
      </div>

      {/* Floating Contact Button */}
      {showContact && (
        <a
          href="mailto:studentcouncil@dubai.bits-pilani.ac.in"
          className="fixed bottom-5 right-3 z-50 bg-blue-600 text-white rounded-full shadow-lg p-4 px-7 flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
          style={{ boxShadow: "0 5px 24px rgba(0,0,0,0.2)" }}
        >
          <Mail size={26} />
          <span className="font-semibold hidden sm:inline">Contact Us</span>
        </a>
      )}
    </section>
  );
};