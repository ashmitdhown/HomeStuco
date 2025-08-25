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
import React, { Suspense } from "react";

const About = React.lazy(() => import("./pages/About"));
const Events = React.lazy(() => import("./pages/Events"));
const Merch = React.lazy(() => import("./pages/Merch"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Jashn26 = React.lazy(() => import("./pages/Jashn26"));
const EMC = React.lazy(() => import("./pages/EMC"));
const Clubs = React.lazy(() => import("./pages/Clubs"));
const ClubDetail = React.lazy(() => import("./pages/ClubDetail"));
const OurBackbone = React.lazy(() => import("./pages/OurBackbone"));
const TermsOfUse = React.lazy(() => import("./pages/TermsOfUse"));
const CodeOfConduct = React.lazy(() => import("./pages/CodeOfConduct"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));

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
                  <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
                  <Route path="/events" element={<Suspense fallback={<div>Loading...</div>}><Events /></Suspense>} />
                  <Route path="/merch" element={<Suspense fallback={<div>Loading...</div>}><Merch /></Suspense>} />
                  <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
                  <Route path="/emc" element={<Suspense fallback={<div>Loading...</div>}><EMC /></Suspense>} />
                  <Route path="/clubs" element={<Suspense fallback={<div>Loading...</div>}><Clubs /></Suspense>} />
                  <Route path="/clubs/:clubId" element={<Suspense fallback={<div>Loading...</div>}><ClubDetail /></Suspense>} />
                  <Route path="/our-backbone" element={<Suspense fallback={<div>Loading...</div>}><OurBackbone /></Suspense>} />
                  <Route path="/jashn26" element={<Suspense fallback={<div>Loading...</div>}><Jashn26 /></Suspense>} />
                  <Route path="/terms-of-use" element={<Suspense fallback={<div>Loading...</div>}><TermsOfUse /></Suspense>} />
                  <Route path="/code-of-conduct" element={<Suspense fallback={<div>Loading...</div>}><CodeOfConduct /></Suspense>} />
                  <Route path="/privacy-policy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />
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