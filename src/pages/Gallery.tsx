import React from 'react';
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const Gallery: React.FC = () => {
  return (
    <PageBgAndCursor>
      <div className="gallery-page min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Gallery Portraits</h1>
        {/* Add your gallery images/components here */}
        <p>Gallery content coming soon...</p>
      </div>
    </PageBgAndCursor>
  );
};

export default Gallery;
