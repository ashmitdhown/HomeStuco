import React from "react";
import { useNavigate } from "react-router-dom";

export const OurBackboneSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="our-backbone" className="py-20 bg-pearl/40">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-velvet mb-8">Our Backbone</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <div
          className="w-full md:w-1/2 bg-white rounded-3xl shadow-card p-12 flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-luxury hover:scale-105"
          onClick={() => navigate("/emc")}
        >
          <h3 className="text-3xl font-bold text-velvet mb-4">Executive Members Council (EMC)</h3>
          <p className="text-lg text-muted-foreground">Meet the leaders driving student initiatives and representation.</p>
        </div>
        <div
          className="w-full md:w-1/2 bg-white rounded-3xl shadow-card p-12 flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-luxury hover:scale-105"
          onClick={() => navigate("/clubs")}
        >
          <h3 className="text-3xl font-bold text-velvet mb-4">Student Clubs</h3>
          <p className="text-lg text-muted-foreground">Explore our diverse clubs and find your community.</p>
        </div>
      </div>
    </section>
  );
}
