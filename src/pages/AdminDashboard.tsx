
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Calendar, Clock, MapPin, Calendar as CalendarIcon, Image, Tag, Edit, Trash2, LogOut, ArrowLeft, Save } from 'lucide-react';
import { motion } from 'framer-motion';
import eventService, { EventData } from '../services/eventService';

// Example categories
const categories = [
  { id: 'academic', name: 'Academic' },
  { id: 'cultural', name: 'Cultural' },
  { id: 'workshop', name: 'Workshop' },
  { id: 'social', name: 'Social' },
  { id: 'orientation', name: 'Orientation' }
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState<EventData[]>([]);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null);
  
  // New event form state
  const [newEvent, setNewEvent] = useState<EventData>({
    id: 0,
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    image: '',
    featured: false,
    buttonLabel: 'Register Now',
    buttonLink: '#'
  });

  // Check authentication
  useEffect(() => {
    const isAdmin = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAdmin) {
      navigate('/admin');
    } else {
      setIsAuthenticated(true);
      
      // Load events from service
      const loadedEvents = eventService.getEvents();
      setEvents(loadedEvents);
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the authentication state
    localStorage.removeItem('adminAuthenticated');
    // Use navigate instead of window.location for proper routing
    navigate('/admin', { replace: true });
  };

  const handleAddNewEvent = () => {
    setIsAddingEvent(true);
    setEditingEvent(null);
    setNewEvent({
      id: 0, // This will be replaced when saved
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: '',
      image: '',
      featured: false,
      buttonLabel: 'Register Now',
      buttonLink: '#'
    });
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (editingEvent) {
      setEditingEvent({
        ...editingEvent,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      });
    } else {
      setNewEvent({
        ...newEvent,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (editingEvent) {
      setEditingEvent({
        ...editingEvent,
        [name]: checked
      });
    } else {
      setNewEvent({
        ...newEvent,
        [name]: checked
      });
    }
  };

  const handleSaveEvent = () => {
    if (editingEvent) {
      // Update existing event
      const updatedEvent = eventService.updateEvent(editingEvent);
      if (updatedEvent) {
        // Refresh events list
        setEvents(eventService.getEvents());
      }
    } else {
      // Add new event
      const savedEvent = eventService.addEvent(newEvent);
      // Refresh events list
      setEvents(eventService.getEvents());
    }
    
    // Reset form
    setIsAddingEvent(false);
    setEditingEvent(null);
  };

  const handleEditEvent = (event: EventData) => {
    setEditingEvent(event);
    setIsAddingEvent(false);
  };

  const handleDeleteEvent = (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const success = eventService.deleteEvent(id);
      if (success) {
        // Refresh events list
        setEvents(eventService.getEvents());
      }
    }
  };

  const handleCancel = () => {
    setIsAddingEvent(false);
    setEditingEvent(null);
  };

  const handleLoadDefaultEvents = () => {
    if (window.confirm('This will replace all current events with the default HomeStuco events. Are you sure?')) {
      eventService.resetToDefaults();
      setEvents(eventService.getEvents());
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white w-full pt-24">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 py-4 px-6 w-full">
        <div className="flex justify-between items-center bg-black">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLoadDefaultEvents}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm"
            >
              Load Default Events
            </button>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-md transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8 bg-black">
        {/* Form for adding/editing event */}
        {(isAddingEvent || editingEvent) ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg border border-gray-800"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">
                {editingEvent ? 'Edit Event' : 'Add New Event'}
              </h2>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft size={18} />
                <span>Back to Events</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column - Basic info */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                    Event Title*
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={editingEvent ? editingEvent.title : newEvent.title}
                    onChange={handleEventChange}
                    className="bg-gray-800 text-white w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter event title"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                    Event Description*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={editingEvent ? editingEvent.description : newEvent.description}
                    onChange={handleEventChange}
                    rows={4}
                    className="bg-gray-800 text-white w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter event description"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                    Category*
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={editingEvent ? editingEvent.category : newEvent.category}
                    onChange={handleEventChange}
                    className="bg-gray-800 text-white w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Right column - Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                      Date*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarIcon className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="date"
                        name="date"
                        type="text"
                        required
                        value={editingEvent ? editingEvent.date : newEvent.date}
                        onChange={handleEventChange}
                        className="bg-gray-800 text-white w-full pl-10 pr-3 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="e.g., Friday, 29th August"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
                      Time*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="time"
                        name="time"
                        type="text"
                        required
                        value={editingEvent ? editingEvent.time : newEvent.time}
                        onChange={handleEventChange}
                        className="bg-gray-800 text-white w-full pl-10 pr-3 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="e.g., 7:00 PM"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                    Location*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={editingEvent ? editingEvent.location : newEvent.location}
                      onChange={handleEventChange}
                      className="bg-gray-800 text-white w-full pl-10 pr-3 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Event location"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-1">
                    Image URL*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Image className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="image"
                      name="image"
                      type="text"
                      required
                      value={editingEvent ? editingEvent.image : newEvent.image}
                      onChange={handleEventChange}
                      className="bg-gray-800 text-white w-full pl-10 pr-3 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="/assets/your-image.webp"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Enter path to image (e.g., /assets/event-name.webp)
                  </p>
                </div>
                
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <div>
                    <label htmlFor="buttonLabel" className="block text-sm font-medium text-gray-300 mb-1">
                      Button Label
                    </label>
                    <input
                      id="buttonLabel"
                      name="buttonLabel"
                      type="text"
                      value={editingEvent ? editingEvent.buttonLabel || '' : newEvent.buttonLabel || ''}
                      onChange={handleEventChange}
                      className="bg-gray-800 text-white w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Register Now"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="buttonLink" className="block text-sm font-medium text-gray-300 mb-1">
                      Button Link
                    </label>
                    <input
                      id="buttonLink"
                      name="buttonLink"
                      type="text"
                      value={editingEvent ? editingEvent.buttonLink || '' : newEvent.buttonLink || ''}
                      onChange={handleEventChange}
                      className="bg-gray-800 text-white w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="#"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center">
                    <input
                      id="featured"
                      name="featured"
                      type="checkbox"
                      checked={editingEvent ? editingEvent.featured : newEvent.featured}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-gray-800"
                    />
                    <label htmlFor="featured" className="ml-2 text-sm text-gray-300">
                      Featured Event
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="isPastEvent"
                      name="isPastEvent"
                      type="checkbox"
                      checked={editingEvent ? editingEvent.isPastEvent || false : newEvent.isPastEvent || false}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-gray-800"
                    />
                    <label htmlFor="isPastEvent" className="ml-2 text-sm text-gray-300">
                      Past Event
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleCancel}
                className="bg-white text-black px-6 py-3 rounded-lg mr-4 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEvent}
                className="bg-white text-black px-6 py-3 rounded-lg flex items-center hover:bg-gray-200 transition-colors"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Event
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Events list header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Events Management</h2>
              <button
                onClick={handleAddNewEvent}
                className="bg-white text-black px-4 py-2 rounded-md flex items-center hover:bg-gray-200 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Event
              </button>
            </div>
            
            {/* Events list */}
            <div className="bg-gray-900/30 rounded-xl p-6 shadow-lg border border-gray-800">
              {events.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300">No events yet</h3>
                  <p className="text-gray-500 mt-2">Click the button above to add your first event.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="text-gray-400 text-xs uppercase">
                      <tr className="border-b border-gray-800">
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Location</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map(event => (
                        <tr key={event.id} className="border-b border-gray-800 hover:bg-gray-800/40">
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded overflow-hidden mr-3 bg-gray-800 flex-shrink-0">
                                {event.image && (
                                  <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              <div>
                                <div className="font-medium text-white">{event.title}</div>
                                {event.featured && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                    Featured
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-gray-300">
                            <div>{event.date}</div>
                            <div className="text-sm text-gray-500">{event.time}</div>
                          </td>
                          <td className="px-4 py-4 text-gray-300">{event.location}</td>
                          <td className="px-4 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {event.category}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            {event.isPastEvent ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Past
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Upcoming
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEditEvent(event)}
                                className="bg-white text-black p-1 rounded-md hover:bg-gray-200"
                                aria-label="Edit event"
                              >
                                <Edit size={18} />
                              </button>
                              <button
                                onClick={() => handleDeleteEvent(event.id)}
                                className="bg-white text-black p-1 rounded-md hover:bg-gray-200"
                                aria-label="Delete event"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
