// Author: Manav Arya & Ashmit Dhon

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageBgAndCursor>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center bg-white/80 p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </PageBgAndCursor>
  );
};

export default NotFound;
