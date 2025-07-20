import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyxZP5v4b_ScdFJ-YvHIxQJjszdrc1sU7wvhJIDQ76qMIHUuqHytgdRD4UNXrkNu4AojQ/exec";
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // CORS workaround (you won't get response)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
        }),
      });
      toast({
        title: "Form Submitted",
        description: "Thank you! We will contact you shortly.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting the form.",
        duration: 5000,
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "studentcouncil@dubai.bits-pilani.ac.in",
      link: "mailto:studentcouncil@dubai.bits-pilani.ac.in",
      description: "Send us an email anytime"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@council.bitsdubai",
      link: "https://www.instagram.com/council.bitsdubai/",
      description: "Follow us for updates"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Student Council BPDC",
      link: "https://www.linkedin.com/company/student-council-bpdc/",
      description: "Connect with us professionally"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "BPDC Campus, Dubai",
      link: "https://www.google.com/maps/place/Birla+Institute+of+Technology+and+Science,+Pilani-+Dubai/data=!4m2!3m1!1s0x0:0x178903db8ef63bc7?sa=X&ved=1t:2428&ictx=111",
      description: "Find us on the map"
    }
  ];



  return (
    <div className="min-h-screen pt-16 bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-champagne/20 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-velvet mb-6">
            Get In <span className="text-transparent bg-gradient-accent bg-clip-text">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-velvet/80 max-w-2xl mx-auto">
            Have questions, suggestions, or want to get involved? We'd love to hear from you. 
            Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-luxury h-full min-h-[500px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-velvet flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-champagne" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group"
                  >
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? "_blank" : "_self"}
                      rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                      className="flex items-center gap-5 p-5 rounded-xl hover:bg-velvet/5 transition-all duration-300 group-hover:transform group-hover:scale-105"
                    >
                      <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-lg transition-all duration-300 flex-shrink-0">
                        <info.icon className="h-7 w-7 text-velvet" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <h3 className="font-semibold text-velvet mb-0.5 truncate">{info.title}</h3>
                        <p className="text-velvet/80 font-medium leading-tight truncate">{info.value}</p>
                        <p className="text-sm text-muted-foreground leading-snug mt-0.5 truncate">{info.description}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-luxury h-full min-h-[500px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-velvet flex items-center gap-3">
                  <Send className="h-6 w-6 text-champagne" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-velvet font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus:border-champagne focus:ring-champagne/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-velvet font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus:border-champagne focus:ring-champagne/20"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-velvet font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-champagne focus:ring-champagne/20"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-velvet font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-border/50 focus:border-champagne focus:ring-champagne/20 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-velvet hover:bg-velvet/90 text-pearl font-semibold py-3 shadow-luxury hover:shadow-glow transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-pearl mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;