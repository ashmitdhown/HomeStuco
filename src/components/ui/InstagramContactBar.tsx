import React from "react";

const InstagramContactBar = () => (
  <div className="fixed bottom-0 left-0 w-full z-[9999] sm:hidden flex">
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 bg-gradient-to-r from-[#3a0a0a] to-[#7b1f1f] text-white text-center py-4 text-lg font-bold shadow-lg transition-all duration-200 hover:from-[#2a0808] hover:to-[#a83232]"
      style={{ letterSpacing: "0.05em" }}
    >
      Instagram
    </a>
    <a
      href="/contact"
      className="flex-1 bg-gradient-to-r from-[#0a1a3a] to-[#1e3a8a] text-white text-center py-4 text-lg font-bold shadow-lg transition-all duration-200 hover:from-[#08122a] hover:to-[#2746a6]"
      style={{ letterSpacing: "0.05em" }}
    >
      Contact Us
    </a>
  </div>
);

export default InstagramContactBar;
