import InstagramContactBar from "@/components/ui/InstagramContactBar";
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

      {/* Instagram/Contact Us Bar for small screens only */}
    <InstagramContactBar />
    </>
  );
};

export default PrivacyPolicy;
