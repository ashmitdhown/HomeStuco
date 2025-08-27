import React from 'react';

const SplinePlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
    </div>
  );
};

export default SplinePlaceholder;
