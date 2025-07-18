const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-velvet mb-6">
            About Our <span className="text-transparent bg-gradient-accent bg-clip-text">Council</span>
          </h1>
          <p className="text-xl text-velvet/80 mb-8">
            Learn more about our mission, vision, and the dedicated team behind our student council.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-luxury">
            <p className="text-lg text-velvet/90">
              This page is coming soon. Stay tuned for more information about our student council structure, 
              achievements, and how we serve our student community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;