import { Toaster } from "@/components/ui/toaster";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
// ...existing code...
import About from "./pages/About";
import Events from "./pages/Events";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Jashn26 from "./pages/Jashn26";
import EMC from "./pages/EMC";
import Clubs from "./pages/Clubs";
import ClubDetail from "./pages/ClubDetail";
import OurBackbone from "./pages/OurBackbone";
import TermsOfUse from "./pages/TermsOfUse";
import CodeOfConduct from "./pages/CodeOfConduct";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// ...existing code...




const queryClient = new QueryClient();

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollProgressBar />
            <div className="relative">
              <div className="absolute top-0 left-0 w-full">
                <Navigation />
              </div>
            </div>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/merch" element={<Merch />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/emc" element={<EMC />} />
                  <Route path="/clubs" element={<Clubs />} />
                  <Route path="/clubs/:clubId" element={<ClubDetail />} />
                  <Route path="/our-backbone" element={<OurBackbone />} />
                  <Route path="/jashn26" element={<Jashn26 />} />
                  <Route path="/terms-of-use" element={<TermsOfUse />} />
                  <Route path="/code-of-conduct" element={<CodeOfConduct />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default App;