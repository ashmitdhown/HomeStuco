import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InstagramContactBar from "@/components/ui/InstagramContactBar";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { throttle } from "@/lib/throttle";

export const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = throttle(() => {
      setShowContact(window.scrollY > 0);
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return ( 
    <>
      <section className="w-full h-screen flex items-center justify-center relative overflow-hidden z-30 p-0 m-0 -mt-16">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={"/assets/Hero 2.webp"}
            alt="Student Council Background"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.6)" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-col items-center gap-6 absolute right-12 top-1/2 -translate-y-1/2 z-20">
          <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" className="text-white hover:text-champagne transition">
            <Mail size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition">
            <Linkedin size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition">
            <Instagram size={28} />
          </a>
        </div>

        {/* Main Text */}
        <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
          <h1
            className="text-[4.5rem] xs:text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8rem] font-extrabold text-white mb-[-2rem] tracking-tight uppercase drop-shadow-lg"
            style={{
              wordBreak: 'break-word',
              lineHeight: 1.3,
            }}
          >
            {t("student")}
          </h1>
          <h1
            className="text-[4.5rem] xs:text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8rem] font-extrabold text-white mb-[-1rem] tracking-tight uppercase drop-shadow-lg"
            style={{
              wordBreak: 'break-word',
              lineHeight: 1.3,
            }}
          >
            {t("council")}
          </h1>
          <h2
            className="text-[2.5rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold text-white mb-0 tracking-wide uppercase drop-shadow"
            style={{
              wordBreak: 'break-word',
              lineHeight: 1.3,
            }}
          >
            {t("bitsDubai")}
          </h2>
        </div>

        {/* Floating Contact Us Button (Instant show/hide) */}
        {showContact && (
          <a
            href="/contact"
            className="fixed z-50 bottom-2 right-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-colors text-lg font-semibold"
            style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" }}
            aria-label={t("contact")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75"
              />
            </svg>
            {t("contactUs")}
          </a>
        )}
      </section>
      <InstagramContactBar />
    </>
  );
};
