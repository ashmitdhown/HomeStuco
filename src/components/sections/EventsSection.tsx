import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import orientationImg from "@/assets/orientation-fair.jpg";
import workshopImg from "@/assets/leadership-workshop.jpg";
import serviceImg from "@/assets/community-service.jpg";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  attendees: number;
  category: string;
}

const events: Event[] = [
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

export const EventsSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
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
            LATEST EVENTS
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
                      asChild
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

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-pearl hover:bg-gradient-primary/90 font-semibold px-8 py-3 shadow-luxury hover:shadow-glow transition-all duration-300"
            asChild
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW ALL EVENTS
            </motion.button>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

