// Author: Manav Arya & Ashmit Dhon
import { useState, useRef, useEffect } from "react";
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
  Sparkles,
  Zap,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("🚀 Message sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "studentcouncil@dubai.bits-pilani.ac.in",
      href: "mailto:studentcouncil@dubai.bits-pilani.ac.in"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@council.bitsdubai",
      href: "https://www.instagram.com/council.bitsdubai/"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "Student Council BPDC",
      href: "https://www.linkedin.com/company/student-council-bpdc/"
    },
    {
      icon: MapPin,
      label: "Campus",
      value: "BITS Pilani Dubai",
      href: "https://www.google.com/maps/place/Birla+Institute+of+Technology+and+Science,+Pilani-+Dubai/"
    }
  ];

  return (
    <PageBgAndCursor>
      <div 
        ref={containerRef}
        className="min-h-screen relative"
      >
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
              Let's Talk
            </h1>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            
            {/* Contact Methods */}
            <div className="lg:col-span-2 space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="group relative">
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block p-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl hover:bg-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-lg">{method.label}</div>
                        <div className="text-white text-sm">{method.value}</div>
                      </div>
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </a>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Send Message</h2>
                </div>
                
                <div className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <Input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/20 border border-white/40 rounded-xl px-4 py-3 text-white placeholder-white focus:bg-white/30 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                        placeholder="Your Name"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute -top-2 left-4 bg-gradient-to-r from-blue-500 to-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                          <span className="text-white">Full Name</span>
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
                        className="w-full bg-white/20 border border-white/40 rounded-xl px-4 py-3 text-white placeholder-white focus:bg-white/30 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute -top-2 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-2 py-1 rounded text-xs font-medium">
                          <span className="text-white">Email Address</span>
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
                    className="w-full bg-white/20 border border-white/40 rounded-xl px-4 py-3 text-white placeholder-white focus:bg-white/30 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all duration-300"
                      placeholder="Subject"
                    />
                    {focusedField === 'subject' && (
                      <div className="absolute -top-2 left-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                        <span className="text-white">What's this about?</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative group">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full bg-white/20 border border-white/40 rounded-xl px-4 py-3 text-white placeholder-white focus:bg-white/30 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all duration-300 resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute -top-2 left-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                        <span className="text-white">Your Message</span>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-white/30 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-white/40 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300 text-white" />
                        Send Message
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
      {/* Floating Back to Homepage Button */}
      <a
        href="/"
        className="fixed z-50 bottom-5 right-4 flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-lg border-2 border-white/30"
        style={{ minWidth: 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" />
        </svg>
        Back to Homepage
      </a>
    </PageBgAndCursor>
  );
};

export default Contact;