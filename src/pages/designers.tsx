import React, { useState, useEffect, useRef } from "react";
import { Instagram, Linkedin, Github, Sparkles, Code, Cpu } from "lucide-react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

type Designer = {
  name: string;
  year: string;
  img: string;
  instagram: string | string[];
  linkedin: string;
  github: string;
}

const designers: Designer[] = [
  {
    name: "Manav Arya Singh",
    year: "Full Stack Developer • UI/UX Designer • GEN AI",
    img: "/assets/councilphotos/ManavArya.webp",
    instagram: ["https://instagram.com/manav_arya_singh", "https://www.instagram.com/periperimouse/"],
    linkedin: "https://www.linkedin.com/in/manav-arya-singh-3579b4291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/Manavarya09"
  },
  {
    name: "Ashmit Dhown",
    year: "Full Stack Developer • Cyber Security • AI/ML",
    img: "/assets/councilphotos/Ashmit.webp",
    instagram: "https://instagram.com/ashmitdhown",
    linkedin: "https://linkedin.com/in/ashmitdhown",
    github: "https://github.com/ashmitdhown"
  }
];

export default function DesignersPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  };

  const NeuralNetwork = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <circle
                cx={`${20 + i * 12}%`}
                cy={`${30 + Math.sin(i) * 20}%`}
                r="2"
                fill="url(#neural-gradient)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              {i < 7 && (
                <line
                  x1={`${20 + i * 12}%`}
                  y1={`${30 + Math.sin(i) * 20}%`}
                  x2={`${32 + i * 12}%`}
                  y2={`${30 + Math.sin(i + 1) * 20}%`}
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              )}
            </g>
          ))}
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <PageBgAndCursor>
      <div 
        ref={containerRef}
        className="min-h-screen relative flex flex-col items-center justify-center p-8 mt-24"
      >
        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8 mt-24">
          {/* Holographic Title */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent opacity-30 blur-sm transform scale-110">
                CREATORS
              </h1>
            </div>
            <h1 className="relative text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
              CREATORS
            </h1>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              <p className="text-xl font-light tracking-wider">Designed & Developed By Manav Arya Singh and Ashmit Dhown</p>
              <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Designer Cards */}
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
            {designers.map((designer, index) => (
              <div
                key={designer.name}
                className="group relative"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ 
                  animation: `slideUp 0.8s ease-out ${index * 0.3}s both`,
                }}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 w-80 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:border-purple-400/50">
                  
                  {/* Holographic Corner Effects */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-cyan-400/60 to-purple-600/60 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-tl from-pink-400/60 to-yellow-400/60 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* Profile Image with Futuristic Frame */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      {/* Rotating Ring */}
                      <div className="absolute inset-0 w-32 h-32 border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full p-1 animate-spin" style={{ animationDuration: '3s' }}>
                        <div className="w-full h-full bg-slate-800 rounded-full"></div>
                      </div>
                      {/* Profile Image */}
                      <img
                        src={designer.img}
                        alt={designer.name}
                        className="relative w-28 h-28 rounded-full object-cover border-4 border-slate-600 transform transition-all duration-500 group-hover:scale-110 z-10"
                        style={{ margin: '8px' }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${designer.name}`;
                        }}
                      />
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Designer Info */}
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-3 transform transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
                      {designer.name}
                    </h2>
                    <div className="space-y-2">
                      {designer.year.split(' • ').map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="inline-block mx-1 px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105"
                          style={{
                            background: skillIndex === 0 ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))' :
                                       skillIndex === 1 ? 'linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(16, 185, 129, 0.2))' :
                                       'linear-gradient(45deg, rgba(251, 191, 36, 0.2), rgba(239, 68, 68, 0.2))',
                            borderColor: skillIndex === 0 ? 'rgba(139, 92, 246, 0.3)' :
                                        skillIndex === 1 ? 'rgba(6, 182, 212, 0.3)' :
                                        'rgba(251, 191, 36, 0.3)',
                            color: skillIndex === 0 ? '#C084FC' :
                                  skillIndex === 1 ? '#22D3EE' :
                                  '#FCD34D'
                          }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-6">
                    {/* Instagram */}
                    {Array.isArray(designer.instagram) ? (
                      <div className="flex gap-2">
                        {designer.instagram.map((instaLink, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={instaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-3 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl border border-pink-500/30 hover:border-pink-400/60 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-pink-500/25"
                          >
                            <Instagram className="w-6 h-6 text-pink-400" />
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={designer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-3 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl border border-pink-500/30 hover:border-pink-400/60 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-pink-500/25"
                      >
                        <Instagram className="w-6 h-6 text-pink-400" />
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    )}

                    {/* LinkedIn */}
                    <a
                      href={designer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <Linkedin className="w-6 h-6 text-blue-400" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </a>

                    {/* GitHub */}
                    <a
                      href={designer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-3 bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-xl border border-slate-500/30 hover:border-slate-400/60 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-slate-500/25"
                    >
                      <Github className="w-6 h-6 text-slate-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/0 to-slate-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>

                  {/* Tech Stack Indicator */}
                  <div className="mt-6 flex justify-center">
                    <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide">
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        {designer.name.includes('Manav') ? 'Strings of Creativity' : 'Master of logic'}
                      </span>
                    </div>
                  </div>

                  {/* Holographic Data Streams */}
                  {activeCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, streamIndex) => (
                        <div
                          key={streamIndex}
                          className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent"
                          style={{
                            left: `${20 + streamIndex * 30}%`,
                            animation: `dataStream 2s linear infinite`,
                            animationDelay: `${streamIndex * 0.5}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Footer */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/30 rounded-2xl">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 font-medium">Powered by StudentCouncilBPDC</span>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px) rotateX(20deg);
            }
            to {
              opacity: 1;
              transform: translateY(0) rotateX(0deg);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          @keyframes dataStream {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(100%);
            }
          }

          /* Holographic text effect */
          .holographic-text {
            background: linear-gradient(
              45deg,
              #ff006e,
              #8338ec,
              #3a86ff,
              #06ffa5,
              #ffbe0b,
              #ff006e
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: holographic 3s ease-in-out infinite;
          }

          @keyframes holographic {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          /* Glassmorphism enhancement */
          .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          /* Cyber grid effect */
          .cyber-grid::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            animation: gridMove 20s linear infinite;
          }

          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(20px, 20px);
            }
          }

          /* Enhanced hover effects */
          .designer-card {
            position: relative;
            overflow: hidden;
          }

          .designer-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              45deg,
              transparent 30%,
              rgba(139, 92, 246, 0.1) 50%,
              transparent 70%
            );
            transform: translateX(-100%);
            transition: transform 0.6s ease;
          }

          .designer-card:hover::before {
            transform: translateX(100%);
          }

          /* Pulsing border animation */
          .pulse-border {
            position: relative;
          }

          .pulse-border::after {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, #8B5CF6, #EC4899, #06B6D4, #10B981);
            border-radius: inherit;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .pulse-border:hover::after {
            opacity: 1;
            animation: borderPulse 2s infinite;
          }

          @keyframes borderPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </PageBgAndCursor>
  );
}