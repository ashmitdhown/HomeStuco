import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InstagramContactBar from "@/components/ui/InstagramContactBar";
import { Calendar, Clock, MapPin, BookOpen, Sparkles, PartyPopper, Search, Filter, Grid, List, Trophy, Music, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import SplineBg from "@/components/SplineBg";

interface SparkEventCardProps {
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
  isPastEvent?: boolean;
}

const categories = [
  { id: 'all', nameKey: 'allEvents' },
  { id: 'competition', nameKey: 'competitions' },
  { id: 'performance', nameKey: 'performances' },
  { id: 'workshop', nameKey: 'workshops' },
  { id: 'social', nameKey: 'social' },
];

const SparkEventCard = ({ 
  title, description, date, time, location, category, icon, gradient, image, 
  featured = false, buttonLabel = 'Register Now', buttonLink = '#', isPastEvent = false
}: SparkEventCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#14213d]/60 backdrop-blur-md text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-900 relative"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={t(title, title)}
          className={`w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ${isPastEvent ? 'opacity-60 grayscale' : ''}`}
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            {t('featured', 'Featured')}
          </div>
        )}
        {isPastEvent && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-lg font-bold bg-black/60 px-4 py-2 rounded">{t('eventEnded', 'Event Ended')}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#14213d]/90 to-transparent p-4 flex justify-between items-center">
          <span className="text-white text-sm font-medium bg-[#14213d]/80 px-2 py-1 rounded">
            {t(category, category)}
          </span>
          {isPastEvent && (
            <span className="ml-2 bg-gray-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">{t('eventEnded', 'Event Ended')}</span>
          )}
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
            <Calendar className="w-5 h-5 mr-2 text-orange-300" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-white/70">
            <Clock className="w-5 h-5 mr-2 text-orange-300" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-white/70">
            <MapPin className="w-5 h-5 mr-2 text-orange-300" />
            <span>{location}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a 
            href={buttonLink} 
            target="_self" 
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg ${isPastEvent ? 'pointer-events-none opacity-60 cursor-not-allowed' : ''}`}
            aria-disabled={isPastEvent}
          >
            {isPastEvent ? t('eventEnded', 'Event Ended') : t(buttonLabel, buttonLabel)}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Sparks = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sparkEvents: SparkEventCardProps[] = [
    {
      id: 1,
      title: 'Dance Competition',
      description: 'Show off your moves in the ultimate dance battle! Solo, duo, and group categories available. Let your creativity shine on the dance floor.',
      date: 'Day 1 - TBA',
      time: '6:00 PM',
      location: 'Main Auditorium',
      category: 'Competition',
      icon: <Music className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-pink-500 to-rose-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Register for Dance',
      buttonLink: '#'
    },
    {
      id: 2,
      title: 'Singing Competition',
      description: 'Voice your passion! Solo and group singing competitions across multiple genres. From classical to contemporary, showcase your vocal talent.',
      date: 'Day 1 - TBA',
      time: '7:30 PM',
      location: 'Main Auditorium',
      category: 'Competition',
      icon: <Music className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-purple-500 to-indigo-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Register to Sing',
      buttonLink: '#'
    },
    {
      id: 3,
      title: 'Drama & Theatre',
      description: 'Bring stories to life on stage! Participate in our drama competition with original scripts or classic adaptations.',
      date: 'Day 2 - TBA',
      time: '5:00 PM',
      location: 'Theatre Hall',
      category: 'Performance',
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Join Theatre',
      buttonLink: '#'
    },
    {
      id: 4,
      title: 'Photography Contest',
      description: 'Capture the essence of SPARKS! Submit your best shots throughout the festival for a chance to win amazing prizes.',
      date: 'All 3 Days',
      time: 'Ongoing',
      location: 'Campus Wide',
      category: 'Competition',
      icon: <Camera className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Submit Photos',
      buttonLink: '#'
    },
    {
      id: 5,
      title: 'Art & Craft Exhibition',
      description: 'Display your artistic creations! From paintings to sculptures, showcase your artistic talent in our exhibition.',
      date: 'Day 2 - TBA',
      time: '10:00 AM',
      location: 'Art Gallery',
      category: 'Performance',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Exhibit Art',
      buttonLink: '#'
    },
    {
      id: 6,
      title: 'Gaming Tournament',
      description: 'Battle it out in our esports arena! Multiple gaming competitions including FIFA, Valorant, and mobile gaming tournaments.',
      date: 'Day 3 - TBA',
      time: '2:00 PM',
      location: 'Gaming Zone',
      category: 'Competition',
      icon: <Trophy className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Join Tournament',
      buttonLink: '#'
    },
    {
      id: 7,
      title: 'Food Festival',
      description: 'Taste the world! Enjoy diverse cuisines from food stalls representing different cultures and regions.',
      date: 'All 3 Days',
      time: '12:00 PM - 10:00 PM',
      location: 'Food Court Area',
      category: 'Social',
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-green-400 to-lime-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Explore Food',
      buttonLink: '#'
    },
    {
      id: 8,
      title: 'DJ Night & Concert',
      description: 'End each day with a bang! Live DJ performances and special guest artists to keep the energy high.',
      date: 'All 3 Days',
      time: '9:00 PM',
      location: 'Main Stage',
      category: 'Performance',
      icon: <Music className="w-6 h-6" />,
      gradient: 'bg-gradient-to-r from-violet-500 to-purple-500',
      image: '/assets/compressed/sparks.webp',
      buttonLabel: 'Party Time',
      buttonLink: '#'
    }
  ];

  const filteredEvents = sparkEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || event.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SplineBg />
      <PageBgAndCursor>

        <section className="relative h-[420px] md:h-[640px] lg:h-[900px] w-full overflow-hidden flex items-center justify-center pointer-events-none">
          <div className="w-full h-[640px] md:h-[900px] lg:h-[1100px] flex items-center justify-center relative" style={{ willChange: 'transform' }}>
            <img
              src="/assets/compressed/sparks.webp"
              alt="SPARKS Festival"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
                >
                  SPARKS
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto px-4"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
                >
                  Three days of non-stop energy, creativity, and campus spirit
                </motion.p>
              </div>
            </div>
            <button
              onClick={() => {
                const section = document.getElementById('sparks-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden lg:flex absolute bottom-36 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 backdrop-blur-lg text-2xl font-bold text-white px-10 py-5 rounded-full shadow-2xl border-2 border-orange-400/40 hover:from-orange-500/40 hover:to-yellow-500/40 transition-all duration-300 pointer-events-auto"
              style={{ letterSpacing: '0.05em' }}
              aria-label="Explore Events"
            >
              Explore Events
            </button>
          </div>
        </section>
      

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-black rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-300" />
                </div>
                <input
                  type="text"
                  name="searchSparksEvents"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Search SPARKS events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-orange-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-orange-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

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
                              ? 'bg-orange-600 text-white'
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


          <div className="mb-12" id="sparks-section">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Events</h2>
            </div>

            {filteredEvents.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <div className="text-gray-400 mb-2">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
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
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            ) : (
              <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}`}>
                {filteredEvents.map((event) => (
                  <div key={event.id} className={viewMode === 'grid' ? 'h-full' : ''}>
                    <SparkEventCard {...event} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </PageBgAndCursor>

      <a
        href="/Contact"
        className="fixed z-[9999] bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        aria-label="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
        Contact Us
      </a>

      <InstagramContactBar />
    </>
  );
};

export default Sparks;
