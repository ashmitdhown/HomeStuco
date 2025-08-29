import { Toaster } from "@/components/ui/toaster";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { lazy, Suspense, useEffect } from 'react';
import NotFound from "./pages/NotFound";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useTranslation } from 'react-i18next';

// Lazy-loaded page components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const Merch = lazy(() => import("./pages/Merch"));
const Contact = lazy(() => import("./pages/Contact"));
const Jashn26 = lazy(() => import("./pages/Jashn26"));
const EMC = lazy(() => import("./pages/EMC"));
const Clubs = lazy(() => import("./pages/Clubs"));
const OurBackbone = lazy(() => import("./pages/OurBackbone"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const DesignersPage = lazy(() => import("./pages/designers"));

const queryClient = new QueryClient();

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
                  <Route path="/" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Index />
                    </Suspense>
                  } />
                  <Route path="/about" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <About />
                    </Suspense>
                  } />
                  <Route path="/events" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Events />
                    </Suspense>
                  } />
                  <Route path="/merch" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Merch />
                    </Suspense>
                  } />
                  <Route path="/contact" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Contact />
                    </Suspense>
                  } />
                  <Route path="/emc" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <EMC />
                    </Suspense>
                  } />
                  <Route path="/clubs" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Clubs />
                    </Suspense>
                  } />
                  <Route path="/our-backbone" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <OurBackbone />
                    </Suspense>
                  } />
                  <Route path="/jashn26" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Jashn26 />
                    </Suspense>
                  } />
                  <Route path="/terms-of-use" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <TermsOfUse />
                    </Suspense>
                  } />
                  <Route path="/code-of-conduct" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <CodeOfConduct />
                    </Suspense>
                  } />
                  <Route path="/privacy-policy" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <PrivacyPolicy />
                    </Suspense>
                  } />

                  <Route path="/designers" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <DesignersPage />
                    </Suspense>
                  } />

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