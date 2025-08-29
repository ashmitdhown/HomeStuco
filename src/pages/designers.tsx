import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";

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
    year: "3rd Year Computer Science",
    img: "/assets/councilphotos/ManavArya.webp",
    instagram: ["https://instagram.com/manav_arya_singh", "https://www.instagram.com/periperimouse/"],
    linkedin: "https://www.linkedin.com/in/manav-arya-singh-3579b4291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/Manavarya09"
  },
  {
    name: "Ashmit Dhown",
    year: "3rd Year Computer Science",
    img: "/assets/councilphotos/Ashmit.webp", 
    instagram: "https://instagram.com/ashmitdhown",
    linkedin: "https://linkedin.com/in/ashmitdhown",
    github: "https://github.com/ashmitdhown"
  }
];

export default function DesignersPage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#f8fafc", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      position: "relative",
      zIndex: 100
    }}>
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: "#f8fafc", 
        zIndex: -1 
      }}></div>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", color: "#1a202c" }}>Designed & Developed By</h1>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        {designers.map((designer) => (
          <div key={designer.name} style={{ background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "2rem", width: "320px", textAlign: "center" }}>
            <img src={designer.img} alt={designer.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }} />
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#2d3748" }}>{designer.name}</h2>
            <p style={{ color: "#718096", marginBottom: "1rem" }}>{designer.year}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
              {Array.isArray(designer.instagram) ? (
                designer.instagram.map((instaLink, index) => (
                  <a key={index} href={instaLink} target="_blank" rel="noopener noreferrer" title={`Instagram ${index + 1}`} style={{ color: "#E1306C" }}>
                    <Instagram size={28} />
                  </a>
                ))
              ) : (
                <a href={designer.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: "#E1306C" }}>
                  <Instagram size={28} />
                </a>
              )}
              <a href={designer.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: "#0077B5" }}>
                <Linkedin size={28} />
              </a>
              <a href={designer.github} target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: "#333" }}>
                <Github size={28} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
