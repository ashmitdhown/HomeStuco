// Author: Manav Arya & Ashmit Dhown
import SplineBg from "@/components/SplineBg";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import logo from "@/assets/logo.webp";
import { Menu } from "lucide-react";

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
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SplineBg />
      {/* Fixed navbar, changes bg on scroll */}
      <nav
        className={`w-full fixed top-0 left-0 z-50 px-8 pt-6 flex items-center navbar-optimized transition-all duration-300 ease-out ${
          scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-auto object-contain cursor-pointer" loading="lazy" />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex items-center justify-evenly w-[70%] text-white font-semibold text-xl tracking-wide">
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ml-auto">
          <button
            aria-label="Open menu"
            className="text-white p-2 rounded focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Drawer Menu - slides in from right */}
        {mobileMenuOpen && (
          <>
            {/* Overlay behind drawer */}
            <div className="fixed inset-0 bg-black/60 z-[99] transition-opacity duration-300" onClick={() => setMobileMenuOpen(false)}></div>
            <div className="fixed top-0 left-0 w-full h-full bg-[#7b1f1f] z-[100] shadow-2xl flex flex-col px-8 py-8 animate-slide-in-right transition-all duration-300">
              <button
                aria-label="Close menu"
                className="absolute top-6 right-6 text-white bg-[#2a1850] rounded-full p-2 z-10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span style={{fontSize: 32, lineHeight: 1}}>&#10005;</span>
              </button>
              {/* Logo at top */}
              <div className="mb-8 flex flex-col items-start">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src={logo} alt="Logo" className="h-16 w-auto object-contain mb-4" loading="lazy" />
                </Link>
              </div>
              {/* Nav Links - solid background */}
              <div className="flex-1 flex flex-col gap-4 mt-2">
                <div className="bg-[#7b1f1f] rounded-xl p-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      className={`block text-white text-lg font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-left mb-2 ${location.pathname === link.to ? "bg-black" : "hover:bg-[#3c2366]/80"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navigation;
