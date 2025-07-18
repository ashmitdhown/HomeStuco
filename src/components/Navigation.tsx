import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Users, Calendar, Mail, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Users },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-velvet/95 backdrop-blur-md border-b border-velvet/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo/Brand */}
      <Link to="/" className="flex items-center space-x-3 group">
        <img src={logo} alt="Student Council Logo" className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105" />
        <div className="text-white">
          <div className="font-bold text-lg tracking-wide">BPDC Student Council</div>
          <div className="text-champagne text-xs font-medium">Excellence in Leadership</div>
        </div>
      </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="group relative px-3 py-2 text-white hover:text-champagne transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-champagne hover:bg-velvet/30"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-velvet/98 backdrop-blur-lg border-t border-velvet/20">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center space-x-3 px-3 py-3 text-white hover:text-champagne hover:bg-velvet/30 rounded-lg transition-all duration-300"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;