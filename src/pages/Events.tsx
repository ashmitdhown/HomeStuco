import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InstagramContactBar from "@/components/ui/InstagramContactBar";
import { Calendar, Clock, MapPin, BookOpen, Sparkles, PartyPopper, Search, Filter, Grid, List } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';
import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import SplineBg from "@/components/SplineBg";

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
  buttonLabel?: string;  
  buttonLink?: string;   
}

const categories = [
  { id: 'all', nameKey: 'allEvents' },
  { id: 'academic', nameKey: 'academic' },
  { id: 'cultural', nameKey: 'cultural' },
  { id: 'workshop', nameKey: 'workshops' },
  { id: 'social', nameKey: 'social' },
];

const EventCard = ({ 
  title, description, date, time, location, category, icon, gradient, image, 
  featured = false, buttonLabel = 'Register Now', buttonLink = '#' 
}: EventCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#14213d]/60 backdrop-blur-md text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-900"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={t(title, title)}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            {t('featured', 'Featured')}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#14213d]/90 to-transparent p-4">
          <span className="text-white text-sm font-medium bg-[#14213d]/80 px-2 py-1 rounded">
            {t(category, category)}
          </span>
        </div>
      </div>

      <div className={`h-1 ${gradient}`}></div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg ${gradient.replace('bg-gradient-to-r', 'bg-gradient-to-br')} text-white mr-4`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{t(title, title)}</h3>
        </div>

        <p className="text-white/80 mb-6 flex-grow">{t(description, description)}</p>

        <div className="space-y-3 mt-auto">
          <div className="flex items-center text-white/70">
            <Calendar className="w-5 h-5 mr-2 text-indigo-300" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-white/70">
            <Clock className="w-5 h-5 mr-2 text-indigo-300" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-white/70">
            <MapPin className="w-5 h-5 mr-2 text-indigo-300" />
            <span>{location}</span>
          </div>
        </div>

        {/* 👇 Each Event Has Its Own Button */}
        <div className="mt-6 flex justify-center">
          <a 
            href={buttonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
          >
            {t(buttonLabel, buttonLabel)}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const events: EventCardProps[] = [
    {
      id: 1,
      title: 'Freshers’ Game Night',
      description: 'Start your campus journey with an unforgettable night of games, laughs, and bonding. Hosted by the Student Council, this event is designed to break the ice !',
      date: 'Friday, 29th August',
      time: '7:00 PM',
      location: 'TBA',
      category: 'Orientation',
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      image: '/assets/gamenight.webp',
      featured: true,
      buttonLabel: 'Join Game Night',
      buttonLink: '#'
    },
    {
      id: 2,
      title: 'Peer-to-Peer Mentorship',
      description: 'Connect, learn, and grow together with our Peer-to-Peer Mentorship Programme — a supportive space where students help each other succeed academically and socially.',
      date: 'TBA',
      time: 'TBA',
      location: 'TBA',
      category: 'Academic',
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      image: '/assets/P2P.webp',
      featured: true,
      buttonLabel: 'Mentorship',
      buttonLink: ''
    },
    {
      id: 5,
      title: 'Jashn',
      description: 'A vibrant cultural festival celebrating diversity through music, dance, and art from around the world.',
      date: 'TBA',
      time: 'TBA',
      location: 'TBA',
      category: 'Cultural',
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-pink-500 to-rose-500',
      image: '/assets/jashn.webp',
      buttonLabel: 'Coming Soon... ',
      buttonLink: ''
    },
    {
      id: 6,
      title: 'Sparks',
      description: 'Three days of non-stop energy, creativity, and campus spirit — SPARKS brings students together to perform, compete, and celebrate everything that makes college unforgettable.',
      date: 'TBA',
      time: 'TBA',
      location: 'TBA',
      category: 'Cultural',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-orange-400 to-yellow-500',
      image: '/assets/sparks.webp',
      buttonLabel: 'Coming Soon... ',
      buttonLink: '/Events/'
    },
    {
      id: 7,
      title: 'Ethnic Day',
      description: 'Celebrate the rich cultural heritage of our campus with traditional attire, music, and festivities. Join us for a day of unity and diversity!',
      date: 'TBA',
      time: 'TBA',
      location: 'TBA',
      category: 'Cultural',
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-green-400 to-emerald-500',
      image: '/assets/ethnic.webp',
      buttonLabel: 'Coming Soon... ',
      buttonLink: ''
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || event.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  return (
    <>
      <SplineBg />
      <PageBgAndCursor>
        {/* Hero Carousel */}
        <section className="relative h-[420px] md:h-[640px] lg:h-[900px] w-full overflow-hidden flex items-center justify-center">
          <div className="w-full h-[640px] md:h-[900px] lg:h-[1100px] flex items-center justify-center relative">
            <img
              src="/assets/eventcarosuel.jpg"
              alt="Events Carousel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <button
              onClick={() => {
                window.scrollBy({ top: 500, left: 0, behavior: 'smooth' });
              }}
              className="hidden lg:flex absolute bottom-36 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-lg text-2xl font-bold text-white px-10 py-5 rounded-full shadow-2xl border-2 border-white/40 hover:bg-white/40 transition-all duration-300"
              style={{ letterSpacing: '0.05em' }}
            >
              {t('viewEvents', 'View Events')}
            </button>
          </div>
        </section>
      
        {/* Search and Filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-black rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-300" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={t('searchEvents', 'Search events...')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-indigo-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-indigo-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>{t('filter', 'Filter')}</span>
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
                    <h3 className="text-sm font-medium text-gray-700 mb-3">{t('categories', 'Categories')}</h3>
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
                          {t(category.nameKey, category.nameKey)}
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
              <h2 className="text-2xl font-bold text-white mb-6">{t('featuredEvents', 'Featured Events')}</h2>
              <Slider
                dots
                infinite
                speed={500}
                slidesToShow={Math.min(2, featuredEvents.length)}
                slidesToScroll={1}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: Math.min(2, featuredEvents.length) } },
                  { breakpoint: 768, settings: { slidesToShow: 1 } }
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
          <div className="mb-12" id="events-section">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{t('allEvents', 'All Events')}</h2>
            </div>

            {filteredEvents.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <div className="text-gray-400 mb-2">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{t('noEventsFound', 'No events found')}</h3>
                <p className="mt-1 text-gray-500">{t('tryAdjusting', 'Try adjusting your search or filter criteria')}</p>
                <div className="mt-6">
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {t('clearFilters', 'Clear filters')}
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
      </PageBgAndCursor>

      {/* Floating Contact Button*/}
      <a
        href="/Contact"
        className="fixed z-[9999] bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        aria-label="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
        {t('contactUs', 'Contact Us')}
      </a>

      <InstagramContactBar />
    </>
  );
};

export default Events;
