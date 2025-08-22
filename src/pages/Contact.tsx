// Author: Manav Arya & Ashmit Dhown
import { useState, useRef } from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Send,
  Zap,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true); // NEW STATE
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setShowBackButton(false);
      toast({
        title: t('invalidEmail', 'Invalid Email'),
        description: t('enterValidEmail', 'Please enter a valid email address.'),
        duration: 4000,
      });
      setTimeout(() => setShowBackButton(true), 4000);
      return;
    }

    setIsSubmitting(true);
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwlDSHO-aEWlT_OWPy8FAobG_vLMCsz1Wud4sMulmB2SAHDexeVS7094-iYDx9DOVU/exec";
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
        }),
      });

      setShowBackButton(false);
      toast({
        title: t('formSubmitted', 'Form Submitted'),
        description: t('thankYouMessage', 'Thank you! We will contact you shortly.'),
        duration: 5000,
      });
      setTimeout(() => setShowBackButton(true), 7000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setShowBackButton(false);
      toast({
        title: t('submissionFailed', 'Submission Failed'),
        description: t('submissionError', 'There was an error submitting the form.'),
        duration: 5000,
      });
      setTimeout(() => setShowBackButton(true), 5000);
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t('email', 'Email'),
      value: "studentcouncil@dubai.bits-pilani.ac.in",
      href: "mailto:studentcouncil@dubai.bits-pilani.ac.in"
    },
    {
      icon: Instagram,
      label: t('instagram', 'Instagram'),
      value: "@council.bitsdubai",
      href: "https://www.instagram.com/council.bitsdubai/"
    },
    {
      icon: Linkedin,
      label: t('linkedIn', 'LinkedIn'), 
      value: t('studentCouncilBPDC', 'Student Council BPDC'),
      href: "https://www.linkedin.com/company/student-council-bpdc/"
    },
    {
      icon: MapPin,
      label: t('campus', 'Campus'),
      value: t('bitsPilaniDubai', 'BITS Pilani Dubai'),
      href: "https://www.google.com/maps/place/Birla+Institute+of+Technology+and+Science,+Pilani-+Dubai/"
    }
  ];

  return (
    <>
      <PageBgAndCursor>
        <div ref={containerRef} className="min-h-screen relative">
          <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-6xl">
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
                  {t('letsTalk', "Let's Talk")}
                </h1>
              </div>

              <div className="grid lg:grid-cols-5 gap-10">
                {/* Contact Methods */}
                <div className="lg:col-span-2">
                  <div className="h-full flex flex-col justify-between space-y-5">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="group relative flex-1">
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : '_self'}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="flex h-full items-center p-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl hover:bg-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                        >
                          <div className="flex items-center gap-5 w-full">
                            <div className="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                              <method.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-semibold text-xl">{method.label}</div>
                              <div className="text-white text-base">{method.value}</div>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-2xl text-white h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{t('sendMessage', 'Send Message')}</h2>
                    </div>
                    
                    <div className="space-y-7 flex-1 flex flex-col">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="relative group">
                          <Input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-white/20 border border-white/40 rounded-xl px-5 py-4 text-white placeholder:text-white focus:bg-white/30 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 text-base"
                            placeholder={t('yourName', 'Your Name')}
                          />
                          {focusedField === 'name' && (
                            <div className="absolute -top-5 left-4 bg-gradient-to-r from-blue-500 to-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                              <span className="text-white">{t('fullName', 'Full Name')}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="relative group">
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-white/20 border border-white/40 rounded-xl px-5 py-4 text-white placeholder:text-white focus:bg-white/30 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300 text-base"
                            placeholder={t('yourEmail', 'your@email.com')}
                          />
                          {focusedField === 'email' && (
                            <div className="absolute -top-5 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-2 py-1 rounded text-xs font-medium">
                              <span className="text-white">{t('emailAddress', 'Email Address')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <Input
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-white/20 border border-white/40 rounded-xl px-5 py-4 text-white placeholder:text-white focus:bg-white/30 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all duration-300 text-base"
                          placeholder={t('subject', 'Subject')}
                        />
                        {focusedField === 'subject' && (
                          <div className="absolute -top-5 left-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                            <span className="text-white">{t('whatsThisAbout', "What's this about?")}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="relative group flex-1">
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full h-full min-h-[140px] bg-white/20 border border-white/40 rounded-xl px-5 py-4 text-white placeholder:text-white focus:bg-white/30 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all duration-300 resize-none text-base"
                          placeholder={t('tellUsWhatsOnYourMind', "Tell us what's on your mind...")}
                        />
                        {focusedField === 'message' && (
                          <div className="absolute -top-3 left-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                            <span className="text-white">{t('yourMessage', 'Your Message')}</span>
                          </div>
                        )}
                      </div>
                      
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-white/30 text-white font-semibold py-5 px-8 rounded-xl shadow-lg hover:bg-white/40 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group mt-auto text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            {t('sendingYourMessage', 'Sending your message...')}
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300 text-white" />
                            {t('sendMessageButton', 'Send Message')}
                            <Zap className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageBgAndCursor>

      {/* Back to Homepage button (conditionally rendered) */}
      {showBackButton && (
        <a
          href="/"
          className="fixed z-[9999] bottom-4 right-3 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
          style={{ minWidth: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" />
          </svg>
          {t('backToHomepage', 'Back to Homepage')}
        </a>
      )}
    </>
  );
};

export default Contact;
