// Author: Manav Arya & Ashmit Dhown
import SplineBg from "@/components/SplineBg";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import { Mail, Linkedin, Instagram, Facebook, X as Twitter } from "lucide-react";

const navLinks = [
  { name: "HOME", to: "/" },
  { name: "EVENTS", to: "/events" },
  { name: "MERCH", to: "/merch" },
  { name: "CLUBS", to: "/CLUBS" },
  { name: "EMC", to: "/EMC" },
  { name: "ABOUT US", to: "/about" },
  { name: "CONTACT US", to: "/contact" },
  { name: "JASHN'26", to: "/jashn26" },
];


const Navigation = () => {
  const location = useLocation();
  // Track which dropdown is open (by index), null if none
  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  return (
    <>
      <SplineBg />
      <nav className="w-full absolute top-0 left-0 z-50 px-8 pt-6 flex items-center justify-between" style={{background: "rgba(0,0,0,0.0)"}}>
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
      </div>
      {/* Center Nav Links */}
      <ul className="flex items-center gap-8 bg-transparent text-white font-semibold text-lg tracking-wide absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {navLinks.map((link, idx) => (
          <li
            key={link.name}
            className="flex items-center relative list-none p-0 m-0"
            onMouseEnter={() => link.dropdown && setOpenDropdownIdx(idx)}
            onMouseLeave={() => link.dropdown && setOpenDropdownIdx(null)}
            style={{zIndex: 60}}
          >
            {link.dropdown ? (
              <>
                <Link
                  to={link.to}
                  className={`px-2 py-1 whitespace-nowrap transition-colors duration-200 ${location.pathname === link.to ? "border-b-2 border-white" : "hover:text-champagne"}`}
                >
                  {link.name}
                </Link>
                {/* Add a small invisible buffer to prevent flicker */}
                {openDropdownIdx === idx && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 flex flex-col bg-black/90 rounded shadow-lg min-w-[180px] z-50 pointer-events-auto"
                    style={{paddingTop: 4}}
                  >
                    {/* buffer area */}
                    <div style={{height: 8, width: '100%', position: 'absolute', top: -8, left: 0}} />
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="px-4 py-2 text-white hover:bg-champagne/20 whitespace-nowrap border-b last:border-b-0 border-white/10"
                        onClick={() => setOpenDropdownIdx(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={link.to}
                className={`px-2 py-1 whitespace-nowrap transition-colors duration-200 ${location.pathname === link.to ? "border-b-2 border-white" : "hover:text-champagne"}`}
              >
                {link.name}
              </Link>
            )}
            {idx < navLinks.length - 1 && (
              <span className="mx-4 h-6 w-px bg-white/40" />
            )}
          </li>
        ))}
      </ul>
      {/* Right Logo removed */}
      {/* Social Icons Vertical Bar (absolute right) */}
      </nav>
    </>
  );
};

export default Navigation;