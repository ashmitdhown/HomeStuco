// Author: Manav Arya & Ashmit Dhown

import React from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const Home = () => (
  <PageBgAndCursor>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-8 text-center">
        Home Page
      </h1>
      {/* Add your home page content here */}
    </div>
  </PageBgAndCursor>
);

export default Home;


