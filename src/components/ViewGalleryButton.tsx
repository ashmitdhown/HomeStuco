import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewGalleryButton: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px (adjust as needed)
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <button
      className="fixed left-4 bottom-4 z-50 bg-gradient-to-b from-blue-700 to-black text-white px-3 py-6 rounded-lg shadow-lg font-semibold hover:scale-105 transition-all flex flex-col items-center"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
      onClick={() => navigate('/gallery')}
    >
      Gallery
    </button>
  );
};

export default ViewGalleryButton;
