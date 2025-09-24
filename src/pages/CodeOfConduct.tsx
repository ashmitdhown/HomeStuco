import InstagramContactBar from "@/components/ui/InstagramContactBar";
import React, { useState, useEffect } from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import { scrollManager } from "../lib/scroll-manager";

const CodeOfConduct = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const id = "conduct-fade";
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
            <h1 className="text-5xl font-bold mb-6">Code of Conduct</h1>
            <p className="text-base text-white/70 mb-3">Last updated: August 12, 2025</p>
            <p className="mb-6 text-lg">We want our online spaces to reflect the spirit of BITS Pilani Dubai — respectful, inclusive, and collaborative.</p>
            <ul className="list-disc pl-10 space-y-4 text-xl">
              <li>Be respectful to all members of the community.</li>
              <li>Use polite and constructive language in comments or submissions.</li>
              <li>Avoid harassment, discrimination, or offensive material.</li>
              <li>Follow college rules and UAE laws when using this site.</li>
            </ul>
            <p className="mt-6 text-lg">Violations may result in removal of posts, loss of access to site features, or further action in line with college policies.</p>
          </div>
        </div>
      </PageBgAndCursor>


      <InstagramContactBar />
    </>
  );
};

export default CodeOfConduct;
