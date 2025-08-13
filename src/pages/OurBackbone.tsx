// Author: Manav Arya & Ashmit Dhon
import React from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import { Link } from "react-router-dom";


const OurBackbone = () => (
  <PageBgAndCursor>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-8 text-center">
        Our Backbone
      </h1>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <Link to="/clubs" className="bg-white/80 hover:bg-champagne/80 text-velvet font-semibold px-8 py-6 rounded-2xl shadow-xl text-2xl transition-all duration-200 border-2 border-champagne/40">
          Student Clubs
        </Link>
        <Link to="/emc" className="bg-white/80 hover:bg-champagne/80 text-velvet font-semibold px-8 py-6 rounded-2xl shadow-xl text-2xl transition-all duration-200 border-2 border-champagne/40">
          Executive Members Council (EMC)
        </Link>
      </div>
    </div>
  </PageBgAndCursor>
);

export default OurBackbone;
