// Types
export interface EventData {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  featured: boolean;
  buttonLabel?: string;
  buttonLink?: string;
  isPastEvent?: boolean;
}

// Default events for initial setup
const defaultEvents: EventData[] = [
  {
    id: 1,
    title: "Freshers Game Night",
    description: "Start your campus journey with an unforgettable night of games, laughs, and bonding. Hosted by the Student Council, this event is designed to break the ice!",
    date: "Friday, 29th August",
    time: "7:00 PM",
    location: "TBA",
    category: "orientation",
    image: "/assets/gamenight.webp",
    featured: true,
    buttonLabel: "Join Game Night",
    buttonLink: "#",
    isPastEvent: true
  },
  {
    id: 2,
    title: "Peer-to-Peer Mentorship",
    description: "Connect, learn, and grow together with our Peer-to-Peer Mentorship Programme — a supportive space where students help each other succeed academically and socially.",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    category: "academic",
    image: "/assets/P2P.webp",
    featured: true,
    buttonLabel: "Mentorship",
    buttonLink: ""
  },
  {
    id: 3,
    title: "Bits Sports Fest",
    description: "UAE's largest inter-university and inter-school sports fest. It brings together sports, live events, food, and entertainment in a vibrant celebration of talent, sportsmanship, and community.",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    category: "cultural",
    image: "/assets/bsf.png",
    featured: false,
    buttonLabel: "Coming Soon...",
    buttonLink: ""
  },
  {
    id: 4,
    title: "Orientation Fair",
    description: "Welcome to campus! Join us for an exciting orientation fair where new students can learn about campus life, meet fellow students, and get familiar with all the opportunities available at BPDC.",
    date: "Monday, 19th August",
    time: "10:00 AM",
    location: "Main Campus Grounds",
    category: "orientation",
    image: "/assets/orientation-fair.webp",
    featured: true,
    buttonLabel: "Join Orientation",
    buttonLink: "#",
    isPastEvent: true
  },
  {
    id: 5,
    title: "Leadership Workshop",
    description: "Develop your leadership skills and learn from experienced leaders. This interactive workshop covers communication, team management, and strategic thinking essential for student leaders.",
    date: "Saturday, 14th September",
    time: "2:00 PM",
    location: "Conference Hall",
    category: "workshop",
    image: "/assets/leadership-workshop.webp",
    featured: false,
    buttonLabel: "Register Now",
    buttonLink: "#",
    isPastEvent: true
  },
  {
    id: 6,
    title: "Community Service Drive",
    description: "Make a difference in our community! Join the Student Council for a meaningful community service initiative where we give back to those in need and strengthen our bonds as a student body.",
    date: "Friday, 27th September",
    time: "9:00 AM",
    location: "Various Locations",
    category: "social",
    image: "/assets/community-service.webp",
    featured: false,
    buttonLabel: "Volunteer Now",
    buttonLink: "#",
    isPastEvent: true
  },
  {
    id: 7,
    title: "JASHN 2026",
    description: "Get ready for the most spectacular cultural celebration of the year! JASHN 2026 brings together music, dance, art, and performances in an unforgettable festival of creativity and talent.",
    date: "TBA",
    time: "TBA",
    location: "Main Auditorium",
    category: "cultural",
    image: "/assets/jashn.webp",
    featured: true,
    buttonLabel: "Coming Soon",
    buttonLink: "/jashn26"
  },
  {
    id: 8,
    title: "Sparks",
    description: "Three days of non-stop energy, creativity, and campus spirit — SPARKS brings students together to perform, compete, and celebrate everything that makes college unforgettable.",
    date: "TBA",
    time: "TBA",
    location: "Main Auditorium",
    category: "cultural",
    image: "/assets/sparks.webp",
    featured: true,
    buttonLabel: "Coming Soon",
    buttonLink: "/sparks"
  },
  {
    id: 9,
    title: "Ethnic Day",
    description: "Celebrate the rich cultural heritage of our campus with traditional attire, music, and festivities. Join us for a day of unity and diversity!",
    date: "Thursday, 10th October",
    time: "12:00 PM",
    location: "Student Plaza",
    category: "cultural",
    image: "/assets/ethnic.webp",
    featured: false,
    buttonLabel: "Join Festival",
    buttonLink: "#"
  },
  {
    id: 10,
    title: "Student Orientation Week",
    description: "A comprehensive week-long orientation program for new students featuring campus tours, academic guidance, social activities, and opportunities to connect with peers and faculty.",
    date: "Monday, 12th August",
    time: "9:00 AM",
    location: "Campus Wide",
    category: "orientation",
    image: "/assets/orientation.webp",
    featured: false,
    buttonLabel: "View Schedule",
    buttonLink: "#",
    isPastEvent: true
  }
];

// Use localStorage to persist events data
class EventService {
  private readonly STORAGE_KEY = 'homeStuco_events';

  // Initialize the events data
  constructor() {
    // Only initialize with default events if no data exists
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.saveEvents(defaultEvents);
    }
  }

  // Get all events
  getEvents(): EventData[] {
    const events = localStorage.getItem(this.STORAGE_KEY);
    return events ? JSON.parse(events) : [];
  }

  // Get a single event by ID
  getEventById(id: number): EventData | undefined {
    const events = this.getEvents();
    return events.find(event => event.id === id);
  }

  // Save all events
  saveEvents(events: EventData[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
  }

  // Add a new event
  addEvent(event: EventData): EventData {
    const events = this.getEvents();
    // Ensure unique ID
    const newEvent = {
      ...event,
      id: Date.now() // Simple ID generation
    };
    events.push(newEvent);
    this.saveEvents(events);
    return newEvent;
  }

  // Update an existing event
  updateEvent(updatedEvent: EventData): EventData | null {
    const events = this.getEvents();
    const index = events.findIndex(event => event.id === updatedEvent.id);
    
    if (index !== -1) {
      events[index] = updatedEvent;
      this.saveEvents(events);
      return updatedEvent;
    }
    
    return null;
  }

  // Delete an event
  deleteEvent(id: number): boolean {
    const events = this.getEvents();
    const filteredEvents = events.filter(event => event.id !== id);
    
    if (filteredEvents.length !== events.length) {
      this.saveEvents(filteredEvents);
      return true;
    }
    
    return false;
  }

  // Reset events to default (useful for testing or reinitializing)
  resetToDefaults(): void {
    this.saveEvents(defaultEvents);
  }
}

// Create a singleton instance
const eventService = new EventService();

export default eventService;
