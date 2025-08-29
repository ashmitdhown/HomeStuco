import React, { useState, useEffect } from "react";
import { throttle } from "../lib/throttle";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const TermsOfUse = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      requestAnimationFrame(() => {
        setFade(window.scrollY > 100);
      });
    }, 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageBgAndCursor>
        <div className={`flex items-center justify-center min-h-screen px-4 pt-32 pb-32 transition-opacity duration-700 ${fade ? "opacity-30" : "opacity-100"}`}>
          <div className="max-w-5xl w-full p-16 text-white bg-gray-900/90 rounded-3xl shadow-2xl">
            <h1 className="text-5xl font-bold mb-6">Terms of Use</h1>
            <p className="text-base text-white/70 mb-3">Last updated: August 12, 2025</p>
            <ul className="list-disc pl-10 space-y-4 text-xl">
              <li><b>Purpose</b>: This site is managed by the Student Council to share news, events, and resources for the BITS Pilani Dubai community.</li>
              <li><b>Accuracy</b>: We try to keep all information up to date, but we can’t guarantee everything is always accurate or error-free.</li>
              <li><b>Use of Content</b>: You may read and share our content for personal or academic use. Please don’t copy, modify, or use it for commercial purposes without permission.</li>
              <li><b>Respectful Use</b>: Do not misuse the site (e.g., hacking attempts, spamming, posting inappropriate content).</li>
              <li><b>External Links</b>: We may link to other sites. We are not responsible for their content or policies.</li>
              <li><b>Changes</b>: We may update these terms at any time without prior notice.</li>
            </ul>
          </div>
        </div>
      </PageBgAndCursor>


      <a
        href="/contact"
        className="fixed z-[9999] bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        aria-label="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
        Contact Us
      </a>
    </>
  );
};

export default TermsOfUse;
