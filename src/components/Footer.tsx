// Author: Manav Arya & Ashmit Dhown
import SplineBg from "@/components/SplineBg";

const Footer = () => (
  <>
    <SplineBg />
    <footer className="w-full bg-gray-900/20 backdrop-blur-md border-t border-gray-800 mt-12">
    <div className="w-full px-0 py-0 flex justify-center">
      <div className="w-full max-w-none bg-gray-900/10 backdrop-blur-lg shadow-xl p-4 md:p-6 flex flex-col gap-4 md:gap-6 rounded-none mx-auto">
        {/* Contact & Address */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 w-full md:w-full">
          {/* Contact */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-3xl font-bold text-center md:text-left text-white mb-6 tracking-tight">GET IN TOUCH</h3>
            <div className="mb-4 flex items-center gap-2 font-semibold text-white">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6.75A2.25 2.25 0 0018.75 4.5h-13.5A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25V13.5" /></svg>
              <span>Contact</span>
            </div>
            <div className="mb-2 text-sm text-white">
              <span className="font-medium">General queries</span><br />
              <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" className="text-white underline hover:text-blue-300">studentcouncil@dubai.bits-pilani.ac.in</a>
            </div>
          </div>
          {/* Address */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center gap-2 font-semibold text-white">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Address</span>
            </div>
            <div className="text-sm mb-2 text-white text-center md:text-left">
              BITS Pilani, Dubai Campus<br />
              Dubai International Academic City<br />
              Dubai, United Arab Emirates
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden mt-2">
              <iframe
                title="BITS Pilani Dubai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.073073289889!2d55.41030731501044!3d25.0925359839497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f62e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2sBITS%20Pilani%2C%20Dubai%20Campus!5e0!3m2!1sen!2sae!4v1691500000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Social Media - Interactive Cards */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start mt-10 md:mt-0 md:ml-12 gap-4">
            {/* Email Card */}
            <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl bg-gray-700/20 backdrop-blur-lg p-3 flex items-center gap-3 shadow-md hover:bg-gray-700/40 transition-colors duration-300">
              <div className="bg-gray-500/40 rounded-xl p-2 flex items-center justify-center">
                {/* Email Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6.75A2.25 2.25 0 0018.75 4.5h-13.5A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25V13.5" /></svg>
              </div>
              <div>
                <div className="font-bold text-lg text-white">Email</div>
                <div className="text-white text-sm">studentcouncil@dubai.bits-pilani.ac.in</div>
              </div>
            </a>
            {/* Instagram Card */}
            <a href="https://www.instagram.com/council.bitsdubai/" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl bg-gray-700/20 backdrop-blur-lg p-3 flex items-center gap-3 shadow-md hover:bg-gray-700/40 transition-colors duration-300">
              <div className="bg-gray-500/40 rounded-xl p-2 flex items-center justify-center">
                {/* Instagram Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" /></svg>
              </div>
              <div>
                <div className="font-bold text-lg text-white">Instagram</div>
                <div className="text-white text-sm">@council.bitsdubai</div>
              </div>
            </a>
            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/company/student-council-bpdc/" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl bg-gray-700/20 backdrop-blur-lg p-3 flex items-center gap-3 shadow-md hover:bg-gray-700/40 transition-colors duration-300">
              <div className="bg-gray-500/40 rounded-xl p-2 flex items-center justify-center">
                {/* LinkedIn Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 01-12 0 6 6 0 0112 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M7 10v6M17 10v6" /></svg>
              </div>
              <div>
                <div className="font-bold text-lg text-white">LinkedIn</div>
                <div className="text-white text-sm">Student Council BPDC</div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full text-center text-xs text-white/70 mt-8">© 2025 by Student Council, BITS Pilani, Dubai Campus. <span className="ml-2">Designed and Developed by Manav Arya and Ashmit Dhown</span></div>
        <div className="w-full flex justify-center mt-2">
          <div className="flex gap-4 text-xs text-white/80">
            <a href="/terms-of-use" className="hover:underline">Terms of Use</a> <a href="/code-of-conduct" className="hover:underline">Code of Conduct</a> <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
      {/* No copyright or made by text */}
    </div>
    </footer>
  </>
);

export default Footer;