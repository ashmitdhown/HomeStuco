import React, { useState, useEffect } from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import { scrollManager } from "../lib/scroll-manager";

const TermsOfUse = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const id = "terms-fade";
    scrollManager.addListener(id, (scrollY) => {
      requestAnimationFrame(() => {
        setFade(scrollY > 100);
      });
    });
    return () => scrollManager.removeListener(id);
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
    </>
  );
};

export default TermsOfUse;
