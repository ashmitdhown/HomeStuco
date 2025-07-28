import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, BookOpen, Sparkles, PartyPopper, Zap, ChevronLeft, ChevronRight, Search, Filter, Share2, Calendar as CalendarIcon, Grid, List } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';

interface EventCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
  image: string;
  featured?: boolean;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const categories = [
  { id: 'all', name: 'All Events' },
  { id: 'academic', name: 'Academic' },
  { id: 'cultural', name: 'Cultural' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'social', name: 'Social' },
];

// Custom arrow components for the slider
const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden sm:block`}
      style={{ ...style, right: '-40px' }}
      onClick={onClick}
    >
      <div className="bg-indigo-100 hover:bg-indigo-200 rounded-full p-2 transition-colors duration-200">
        <ChevronRight className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden sm:block`}
      style={{ ...style, left: '-40px' }}
      onClick={onClick}
    >
      <div className="bg-indigo-100 hover:bg-indigo-200 rounded-full p-2 transition-colors duration-200">
        <ChevronLeft className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center space-x-2 mt-2">
      {timeLeft.days > 0 && (
        <div className="text-center">
          <div className="bg-white/20 px-2 py-1 rounded-md text-sm font-medium">
            {timeLeft.days}d
          </div>
        </div>
      )}
      <div className="text-center">
        <div className="bg-white/20 px-2 py-1 rounded-md text-sm font-medium">
          {timeLeft.hours}h
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white/20 px-2 py-1 rounded-md text-sm font-medium">
          {timeLeft.minutes}m
        </div>
      </div>
      {timeLeft.days === 0 && (
        <div className="text-center">
          <div className="bg-white/20 px-2 py-1 rounded-md text-sm font-medium">
            {timeLeft.seconds}s
          </div>
        </div>
      )}
    </div>
  );
};

const EventCard = ({ id, title, description, date, time, location, category, icon, gradient, image, featured = false }: EventCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white text-sm font-medium bg-black/40 px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className={`h-1 ${gradient}`}></div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg ${gradient.replace('bg-gradient-to-r', 'bg-gradient-to-br')} text-white mr-4`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        <div className="space-y-3 mt-auto">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2 text-indigo-500" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2 text-indigo-500" />
            <span>{location}</span>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
            Register Now
          </button>
          <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Share2 size={20} />
          </button>
        </div>
        <div className="mt-3 text-center">
          <CountdownTimer targetDate={new Date(date + ' ' + time)} />
        </div>
      </div>
    </motion.div>
  );
};



const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const events: EventCardProps[] = [
    {
      id: 1,
      title: 'Peer-Peer Mentorship',
      description: 'Connect with experienced mentors and peers to enhance your academic and personal growth through structured guidance and support.',
      date: 'August 15, 2025',
      time: '15:00',
      location: 'Student Center, Room 205',
      category: 'Academic',
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Sparks',
      description: 'An electrifying talent showcase where students light up the stage with their unique abilities and creative performances.',
      date: 'August 22, 2025',
      time: '18:00',
      location: 'Main Auditorium',
      category: 'Cultural',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'Jashn',
      description: 'A vibrant cultural festival celebrating diversity through music, dance, and art from around the world.',
      date: 'September 5, 2025',
      time: '16:00',
      location: 'University Grounds',
      category: 'Cultural',
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      title: 'Recharge',
      description: 'A wellness retreat focused on mental health, self-care, and recharging your energy for the semester ahead.',
      date: 'September 12, 2025',
      time: '10:00',
      location: 'Campus Lawn & Wellness Center',
      category: 'Workshop',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-green-400 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80'
    },
    {
      id: 5,
      title: 'Tech Symposium',
      description: 'A day of tech talks, workshops, and networking with industry professionals and innovators.',
      date: 'October 3, 2025',
      time: '09:00',
      location: 'Engineering Building',
      category: 'Workshop',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-purple-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
    },
    {
      id: 6,
      title: 'Alumni Mixer',
      description: 'Network with successful alumni and explore career opportunities in various industries.',
      date: 'November 15, 2025',
      time: '18:30',
      location: 'Grand Ballroom',
      category: 'Social',
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  // Filter events based on search query and active category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || event.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Separate featured events
  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Upcoming <span className="text-yellow-300">Events</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Discover all the exciting events and activities organized by our student council
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4"
              >
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                          activeCategory === category.id
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={Math.min(2, featuredEvents.length)}
              slidesToScroll={1}
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: Math.min(2, featuredEvents.length),
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                  }
                }
              ]}
              className="px-2"
            >
              {featuredEvents.map((event) => (
                <div key={event.id} className="px-2 py-4">
                  <EventCard {...event} />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* All Events */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All Events</h2>
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>View Calendar</span>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <div className="text-gray-400 mb-2">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">No events found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              <div className="mt-6">
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Clear filters
                </button>
              </div>
            </div>
          ) : (
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}`}>
              {regularEvents.map((event) => (
                <div key={event.id} className={viewMode === 'grid' ? 'h-full' : ''}>
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default Events;