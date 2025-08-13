import React, { useEffect, useState } from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const PrivacyPolicy = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFade(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageBgAndCursor>
        <div className={`flex items-center justify-center min-h-screen px-4 pt-32 pb-32 transition-opacity duration-700 ${fade ? "opacity-30" : "opacity-100"}`}>
          <div className="max-w-5xl w-full p-16 text-white bg-gray-900/90 rounded-3xl shadow-2xl">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-base text-white/70 mb-3">Last updated: August 12, 2025</p>
            <p className="mb-6 text-lg">Your privacy matters to us.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">What we collect</h2>
            <ul className="list-disc pl-10 space-y-4 text-xl">
              <li>Information you provide through forms (e.g., name, email, student ID, event registrations).</li>
              <li>Basic site analytics (page views, clicks) to improve the site.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">How we use it</h2>
            <ul className="list-disc pl-10 space-y-4 text-xl">
              <li>To manage event registrations and communications.</li>
              <li>To improve site features and content.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">How we protect it</h2>
            <ul className="list-disc pl-10 space-y-4 text-xl">
              <li>Data is stored securely and only accessible by authorized Student Council members and relevant college staff.</li>
              <li>We do not sell, rent, or share your personal information with outside organizations.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Your rights</h2>
            <ul className="list-disc pl-10 space-y-4 text-xl">
              <li>
                You can request to view or delete your personal data by contacting us at{" "}
                <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" className="underline">
                  studentcouncil@dubai.bits-pilani.ac.in
                </a>.
              </li>
            </ul>
          </div>
        </div>
      </PageBgAndCursor>

      {/* Floating Contact Button */}
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

export default PrivacyPolicy;
