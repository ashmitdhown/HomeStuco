import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin, X, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import orientationImg from "@/assets/orientation-fair.jpg";
import workshopImg from "@/assets/leadership-workshop.jpg";
import serviceImg from "@/assets/community-service.jpg";

interface Announcement {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  attendees: number;
  category: string;
}

const events: Announcement[] = [
  {
    id: 1,
    title: "Annual Orientation Fair",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    description: "Welcome new students with club booths, information sessions, and networking opportunities to help them find their community on campus.",
    image: orientationImg,
    attendees: 500,
    category: "Orientation"
  },
  {
    id: 2,
    title: "Leadership Workshop Series",
    date: "March 22, 2024",
    time: "2:00 PM - 5:00 PM",
    description: "Develop essential leadership skills through interactive workshops, panel discussions, and hands-on activities led by industry professionals.",
    image: workshopImg,
    attendees: 75,
    category: "Workshop"
  },
  {
    id: 3,
    title: "Community Service Day",
    date: "March 29, 2024",
    time: "9:00 AM - 3:00 PM",
    description: "Make a positive impact in our local community through organized volunteer activities, environmental projects, and outreach programs.",
    image: serviceImg,
    attendees: 150,
    category: "Service"
  }
];

export const AnnouncementSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Announcement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (event: Announcement) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleJoinEvent = () => {
    // Replace this URL with your actual Google Form URL for event registration
    window.open('https://forms.google.com/event-registration-form', '_blank');
  };

  return (
    <section id="announcement-section" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Luxe Background Elements */}
      <div className="absolute inset-0">
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

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-velvet mb-6">
            ANNOUNCEMENTS
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our vibrant campus community through engaging events and initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
            >
              <Card 
                className="bg-card/90 backdrop-blur-sm border-border/50 shadow-card hover:shadow-luxury transition-all duration-500 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-velvet/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-champagne/90 text-velvet hover:bg-champagne border-none"
                    >
                      {event.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-velvet group-hover:text-champagne transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-champagne" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-champagne" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-champagne" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      className="w-full bg-velvet hover:bg-velvet/90 text-pearl font-semibold transition-all duration-300 hover:shadow-glow"
                      onClick={() => handleLearnMore(event)}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        LEARN MORE
                      </motion.button>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Enhanced Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Enhanced Modal Content */}
          <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl max-w-5xl w-full max-h-[92vh] rounded-2xl overflow-hidden flex flex-col">
            {/* Enhanced Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-velvet hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/30"
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Enhanced Event Image */}
            <div className="relative h-52 md:h-64 overflow-hidden flex-shrink-0">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-velvet/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <Badge 
                  variant="secondary" 
                  className="bg-champagne/95 text-velvet hover:bg-champagne border-none px-4 py-2 text-sm font-medium shadow-lg"
                >
                  {selectedEvent.category}
                </Badge>
              </div>
            </div>
            
            {/* Enhanced Event Details */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
              {/* Enhanced Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-velvet leading-tight">
                  {selectedEvent.title}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-champagne to-velvet mx-auto rounded-full"></div>
              </div>
              
              {/* Enhanced Description */}
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-velvet/80 leading-relaxed font-medium">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Enhanced Additional Information */}
              <div className="bg-gradient-to-br from-champagne/10 to-velvet/5 rounded-2xl p-6 border border-champagne/30 shadow-inner">
                <h4 className="font-bold text-velvet mb-4 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-champagne rounded-full"></div>
                  What to Expect:
                </h4>
                <ul className="space-y-3 text-velvet/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-champagne rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Engaging activities and interactive sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-champagne rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Networking opportunities with fellow students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-champagne rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Valuable insights and learning experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-champagne rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Refreshments and social interaction</span>
                  </li>
                </ul>
              </div>

              {/* Enhanced Event Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-champagne/10 to-velvet/5 rounded-xl border border-champagne/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-champagne/20 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-champagne" />
                  </div>
                  <div>
                    <p className="text-xs text-velvet/60 font-medium uppercase tracking-wide">Date</p>
                    <p className="font-bold text-velvet">{selectedEvent.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-champagne/10 to-velvet/5 rounded-xl border border-champagne/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-champagne/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-champagne" />
                  </div>
                  <div>
                    <p className="text-xs text-velvet/60 font-medium uppercase tracking-wide">Time</p>
                    <p className="font-bold text-velvet">{selectedEvent.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-champagne/10 to-velvet/5 rounded-xl border border-champagne/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-champagne/20 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-champagne" />
                  </div>
                  <div>
                    <p className="text-xs text-velvet/60 font-medium uppercase tracking-wide">Expected Attendees</p>
                    <p className="font-bold text-velvet">{selectedEvent.attendees} students</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Join Button */}
              <div className="text-center pt-4">
                <Button
                  onClick={handleJoinEvent}
                  className="bg-gradient-to-r from-velvet to-velvet/90 hover:from-velvet/90 hover:to-velvet text-pearl font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  <ExternalLink className="h-5 w-5 mr-3" />
                  Join This Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

