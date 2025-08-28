// Author: Manav Arya & Ashmit Dhown
import SplineBg from "@/components/SplineBg";
import { Mail, Linkedin } from "lucide-react";

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n, t } = useTranslation();
  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <>
      <SplineBg />
      <footer className="w-full bg-gray-900/20 backdrop-blur-md border-t border-gray-800 mt-16">
        <div className="w-full px-6 md:px-16 py-0 pb-12 md:pb-0 flex justify-center">
          <div className="w-full max-w-7xl bg-gray-900/10 backdrop-blur-lg shadow-xl p-6 md:p-8 flex flex-col gap-6 md:gap-8 rounded-none mx-auto">
          {/* Contact & Address */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 w-full md:w-full">
            {/* Contact */}
            <div className="flex-1 min-w-[240px]">
              <h3 className="text-4xl font-bold text-center md:text-left text-white mb-8 tracking-tight">
                {t('getInTouch', 'GET IN TOUCH')}
              </h3>
              <div className="mb-5 flex items-center gap-3 font-semibold text-white">
                <Mail className="w-6 h-6 text-gray-500" />
                <span>{t('contact', 'Contact')}</span>
              </div>
              <div className="mb-3 text-base text-white">
                <span className="font-medium">{t('generalQueries', 'General queries')}</span><br />
                <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" className="text-white underline hover:text-blue-300">
                  studentcouncil@dubai.bits-pilani.ac.in
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex-1 min-w-[240px] flex flex-col items-center md:items-start">
              <div className="mb-5 flex items-center gap-3 font-semibold text-white">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{t('address', 'Address')}</span>
              </div>
              <div className="text-base mb-3 text-white text-center md:text-left">
                {t('bitsPilaniDubaiCampus', 'BITS Pilani, Dubai Campus')}<br />
                {t('dubaiInternationalAcademicCity', 'Dubai International Academic City')}<br />
                {t('dubaiUAE', 'Dubai, United Arab Emirates')}
              </div>
              <div className="w-full h-40 rounded-lg overflow-hidden mt-3">
                <iframe
                  title="BITS Pilani Dubai Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.2595640381276!2d55.418083015775154!3d25.131489325771056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63ecaf0b7683%3A0x178903db8ef63bc7!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani%2C%20Dubai!5e0!3m2!1sen!2sus!4v1692486823456"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Social Media - Interactive Cards */}
            <div className="flex-1 min-w-[240px] flex flex-col items-center md:items-start mt-12 md:mt-0 md:ml-14 gap-6">
              {/* Email Card */}
              <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" target="_blank" rel="noopener noreferrer"
                className="w-full rounded-2xl bg-gray-700/20 backdrop-blur-lg p-4 flex items-center gap-4 shadow-md hover:bg-gray-700/40 transition-colors duration-300">
                <div className="bg-gray-500/40 rounded-xl p-3 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-white">{t('email', 'Email')}</div>
                  <div className="text-white text-base">studentcouncil@dubai.bits-pilani.ac.in</div>
                </div>
              </a>

              {/* Instagram Card */}
              <a href="https://www.instagram.com/council.bitsdubai/" target="_blank" rel="noopener noreferrer"
                className="w-full rounded-2xl bg-gray-700/20 backdrop-blur-lg p-4 flex items-center gap-4 shadow-md hover:bg-gray-700/40 transition-colors duration-300">
                <div className="bg-gray-500/40 rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" /></svg>
                </div>
                <div>
                  <div className="font-bold text-xl text-white">{t('instagram', 'Instagram')}</div>
                  <div className="text-white text-base">@council.bitsdubai</div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a href="https://www.linkedin.com/company/student-council-bpdc/" target="_blank" rel="noopener noreferrer"
                className="w-full rounded-2xl bg-gray-700/20 backdrop-blur-lg p-4 flex items-center gap-4 shadow-md hover:bg-gray-700/40 transition-colors duration-300">
                <div className="bg-gray-500/40 rounded-xl p-3 flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-white">{t('linkedIn', 'LinkedIn')}</div>
                  <div className="text-white text-base">{t('studentCouncilBPDC', 'Student Council BPDC')}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="w-full text-center text-sm text-white/70 mt-8">
            {t('copyright', '© 2025 by Student Council, BITS Pilani, Dubai Campus.')}
            <span className="ml-3">{t('designedBy', 'Designed and Developed by Manav Arya and Ashmit Dhown')}</span>
          </div>
          <div className="w-full flex flex-col items-center mt-3 gap-2">
            <div className="flex gap-6 text-sm text-white/80">
              <a href="/terms-of-use" className="hover:underline">{t('termsOfUse', 'Terms of Use')}</a>
              <a href="/code-of-conduct" className="hover:underline">{t('codeOfConduct', 'Code of Conduct')}</a>
              <a href="/privacy-policy" className="hover:underline">{t('privacyPolicy', 'Privacy Policy')}</a>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <span className="text-white/80">{t('changeLanguage', 'Change Language')}:</span>
              <button
                className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
                onClick={() => handleLanguageChange('en')}
              >{t('english', 'English')}</button>
              <button
                className={`px-3 py-1 rounded ${i18n.language === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
                onClick={() => handleLanguageChange('ar')}
              >{t('arabic', 'العربية')}</button>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;