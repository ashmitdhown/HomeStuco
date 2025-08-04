import { useState } from "react";
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

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 relative">
      {/* Animated Gradient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-[28rem] h-[28rem] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-300 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-pink-200 via-yellow-100 to-indigo-200 opacity-30 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-velvet mb-6 drop-shadow-lg">
            Contact <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 bg-clip-text animate-gradient">Us</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-xl text-velvet/80 max-w-3xl mx-auto font-medium">
            Reach out to us for any queries, suggestions, or feedback. We're here to help!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="h-full">
            <Card className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-2xl h-full min-h-[500px] flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
              <CardHeader>
                <CardTitle className="text-2xl text-velvet flex items-center gap-3 font-bold">
                  <MessageSquare className="h-6 w-6 text-indigo-400 animate-bounce" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-sm hover:shadow-md transition-all">
                    <Mail className="h-7 w-7 text-indigo-500 bg-white rounded-full p-1 shadow" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">Email</span>
                      <span className="text-lg text-velvet font-semibold">studentcouncil@university.edu</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 my-2" />
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-sm hover:shadow-md transition-all">
                    <Phone className="h-7 w-7 text-indigo-500 bg-white rounded-full p-1 shadow" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">Phone</span>
                      <span className="text-lg text-velvet font-semibold">+1 234 567 8900</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 my-2" />
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-sm hover:shadow-md transition-all">
                    <MapPin className="h-7 w-7 text-indigo-500 bg-white rounded-full p-1 shadow" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">Address</span>
                      <span className="text-lg text-velvet font-semibold">123 Campus Road, City, Country</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 my-2" />
                  <div className="flex gap-4 mt-6 justify-center">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-200 shadow-lg border border-white/30 cursor-pointer">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-200 shadow-lg border border-white/30 cursor-pointer">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Contact Form */}
          <div className="h-full">
            <Card className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-2xl h-full min-h-[500px] flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
              <CardHeader>
                <CardTitle className="text-2xl text-velvet flex items-center gap-3 font-bold">
                  <Send className="h-6 w-6 text-indigo-400 animate-bounce" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground font-medium">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-velvet">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold text-velvet">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="font-semibold text-velvet">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-semibold text-velvet">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 hover:from-indigo-600 hover:to-pink-500 text-white font-semibold py-3 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white mr-2"
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
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;