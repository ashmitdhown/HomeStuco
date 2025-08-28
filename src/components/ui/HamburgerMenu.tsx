import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const menuItems = [
  "Home",
  "Festival 2025",
  "Programme",
  "JLF International",
  "Media",
  "About",
  "Partners"
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        className="sm:hidden fixed top-6 right-6 z-[10001] bg-transparent p-2"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-8 h-8 text-white" />
      </button>


      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[10000] transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}


      <nav
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[400px] bg-[#3c2366] z-[10001] shadow-2xl transition-transform duration-300 sm:hidden flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ willChange: "transform" }}
      >

        <button
          className="absolute top-6 right-6 bg-white/10 rounded-full p-2"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8 text-white" />
        </button>


        <div className="flex items-center gap-3 px-8 pt-8 pb-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          <span className="text-white text-xl font-bold">Your Event</span>
        </div>


        <ul className="flex flex-col gap-6 px-8 mt-8">
          {menuItems.map((item) => (
            <li key={item} className="text-white text-lg font-medium cursor-pointer hover:text-pink-400 transition-colors">
              {item}
            </li>
          ))}
        </ul>


        <div className="mt-auto px-8 pb-8">
          <button className="w-full bg-pink-500 text-white text-lg font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-pink-600 transition-all">
            Book Now <span className="ml-2">→</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;
