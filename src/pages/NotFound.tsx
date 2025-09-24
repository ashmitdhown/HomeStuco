// Author: Manav Arya & Ashmit Dhown
import { useEffect } from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const NotFound = () => {
  // You can uncomment and adapt these when using with react-router-dom
  // const location = useLocation();
  // useEffect(() => {
  //   console.error(
  //     "404 Error: User attempted to access non-existent route:",
  //     location.pathname
  //   );
  // }, [location.pathname]);

  return (
    <PageBgAndCursor>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">

        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>


        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">

          <div className="mb-8">
            <p className="text-orange-400 text-xl md:text-2xl font-medium mb-2 tracking-wide">
              Houston,
            </p>
            <p className="text-orange-400 text-xl md:text-2xl font-medium mb-6 tracking-wide">
              we have a problem.
            </p>
          </div>


          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white leading-none tracking-wider mb-4">
              404
            </h1>
            <h2 className="text-orange-400 text-2xl md:text-3xl font-semibold tracking-wide">
              Page not found
            </h2>
            <p className="text-gray-400 text-lg mt-2">

              /your-path-here
            </p>
          </div>


          <div className="relative mb-8">

            <div className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-80">

              <div className="absolute top-6 left-8 w-4 h-4 bg-orange-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 right-6 w-6 h-6 bg-orange-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 left-4 w-3 h-3 bg-orange-300 rounded-full opacity-50"></div>
            </div>


            <div className="relative z-10 inline-block">
              <div className="w-24 h-32 md:w-32 md:h-40 mx-auto mb-6 relative">

                <div className="absolute inset-x-0 bottom-0 h-20 md:h-24 bg-gray-200 rounded-lg border-2 border-gray-300">

                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-blue-400 rounded"></div>
                  <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-red-400 rounded"></div>
                </div>
                

                <div className="absolute top-8 -left-2 w-4 h-8 md:h-10 bg-gray-200 rounded-lg transform -rotate-12"></div>
                <div className="absolute top-8 -right-2 w-4 h-8 md:h-10 bg-gray-200 rounded-lg transform rotate-12"></div>
                

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full border-4 border-gray-400">

                  <div className="absolute top-2 left-2 w-4 h-6 bg-white opacity-30 rounded-lg transform rotate-12"></div>

                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-300 rounded-full"></div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Learn more</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>


        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-300 rounded-full animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </PageBgAndCursor>
  );
};

export default NotFound;