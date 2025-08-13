// Author: Manav Arya & Ashmit Dhown
import SplineBg from "@/components/SplineBg";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import logo from "@/assets/logo.png";

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

  return (
    <>
      <SplineBg />

      {/* Fixed, fully transparent navbar */}
      <nav
        className="w-full fixed top-0 left-0 z-50 px-8 pt-6 flex items-center bg-transparent"
      >
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Center Nav Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center justify-evenly w-[70%] text-white font-semibold text-xl tracking-wide">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <li>
                  <Link
                    to={link.to}
                    className={`whitespace-nowrap transition-colors duration-200 ${
                      location.pathname === link.to
                        ? "border-b-2 border-white"
                        : "hover:text-champagne"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
                {idx < navLinks.length - 1 && (
                  <span className="h-6 w-px bg-white/40" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
