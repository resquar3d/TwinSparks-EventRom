import React, { useState, useEffect } from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import { api } from './utils/api';
import { Calendar, Clock, MapPin, Plus, Search, Filter } from './assets/Icons';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventFormModal from './components/EventForm';
import EventPage from './pages/EventPage';
import Toast from './components/Notification';

// Home Page Component
const HomePage = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920',
    'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=1920',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div>
      {/* Single Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Carousel Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out'
        }} />

        {/* Carousel Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 20,
          background: 'rgba(0, 0, 0, 0.2)',
          padding: '8px 16px',
          borderRadius: '20px',
          backdropFilter: 'blur(4px)'
        }}>
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                background: index === currentImageIndex ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0.7
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.7'}
            />
          ))}
        </div>

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 0.6))'
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          zIndex: 10,
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 className="hero-title" style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 20px rgba(0, 194, 255, 0.3)',
            lineHeight: '1.1'
          }}>
            EventRom
          </h1>
          <p className="hero-subtitle" style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Discover amazing events, connect with passionate communities, and create unforgettable memories. Your next adventure starts here.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => onNavigate('events')}
              className="btn-primary animate-glow"
              style={{
                padding: '16px 32px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Calendar size={20} />
              Explore EventRom
            </button>
            <button
              className="btn-secondary"
              style={{
                padding: '16px 32px',
                fontSize: '18px'
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-secondary)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          <div style={{
            width: '2px',
            height: '10px',
            background: 'var(--gradient-brand)',
            margin: '0 auto 8px',
            borderRadius: '1px'
          }} />
          <span style={{ fontSize: '12px' }}>⇡⇡⇡</span>
        </div>
      </section>
      
      {/* Features Section */}
      <section style={{
        padding: '100px 20px',
        background: 'var(--bg-secondary)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Why TwinSparks EventRom?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            The ultimate platform for discovering, creating, and managing events that bring people together.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: <Calendar size={32} />,
                title: 'Easy Event Discovery',
                description: 'Find events that match your interests with powerful search and filtering capabilities.'
              },
              {
                icon: <Plus size={32} />,
                title: 'Simple Event Creation',
                description: 'Create and manage your own events with our intuitive and user-friendly interface.'
              },
              {
                icon: <Search size={32} />,
                title: 'Smart Search',
                description: 'Advanced search functionality to help you find exactly what you\'re looking for.'
              }
            ].map((feature, index) => (
              <div key={index} className="glass-panel" style={{
                padding: '40px',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                transition: 'var(--transition)'
              }}>
                <div style={{
                  color: 'var(--brand)',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: 'var(--text)'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event, onClick }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div 
      onClick={onClick}
      className="gradient-border glass-panel"
      style={{
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'var(--transition)',
        transform: 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <img 
          src={event.image} 
          alt={event.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'var(--transition)',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-dark)',
          pointerEvents: 'none'
        }} />
      </div>
      
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{event.title}</h3>
        <p style={{ 
          color: 'var(--text-secondary)', 
          marginBottom: '16px', 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {event.description}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Clock size={16} style={{ color: 'var(--brand)' }} />
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            {formatDate(event.startTime)}
          </span>
        </div>

        {event.location && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <MapPin size={16} style={{ color: 'var(--brand)' }} />
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              {event.location}
            </span>
          </div>
        )}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          {event.categories.map((cat, i) => (
            <span key={i} className="category-tag">
              {cat}
            </span>
          ))}
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          paddingTop: '16px', 
          borderTop: '1px solid var(--border)'
        }}>
          <img 
            src={event.createdBy.image} 
            alt={event.createdBy.name}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '2px solid var(--brand)'
            }}
          />
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            by {event.createdBy.name}
          </span>
        </div>
      </div>
    </div>
  );
};

// Events Page Component
const EventsPage = ({ onEventClick }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    filterEvents();
  }, [events, searchTerm, selectedCategory]);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const data = await api.getEvents();
      setEvents(data);
    } catch (error) {
      setToast({ message: 'Failed to load events', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const filterEvents = () => {
    let filtered = [...events];
    
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => 
        event.categories.includes(selectedCategory)
      );
    }
    
    setFilteredEvents(filtered);
  };

  const getAllCategories = () => {
    const eventCategories = new Set(['All']);
    events.forEach(event => {
      event.categories.forEach(cat => eventCategories.add(cat));
    });
    return Array.from(eventCategories);
  };

  const handleCreateEvent = async (eventData) => {
    try {
      const newEvent = await api.createEvent(eventData);
      setEvents([...events, newEvent]);
      setToast({ message: 'Event created successfully!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to create event', type: 'error' });
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px'
      }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '120px 20px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold',
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }} className="hero-title">
            Events
          </h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary animate-glow"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Plus size={20} />
            Add EventRom
          </button>
        </div>

        <div className="glass-panel" style={{
          padding: '24px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '32px'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <input
                type="text"
                placeholder="🔍 Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
                style={{ 
                  width: '100%'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Filter size={20} style={{ color: 'var(--text-secondary)' }} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
                style={{ minWidth: '150px' }}
              >
                {getAllCategories().map(cat => (
                  <option key={cat} value={cat} style={{ background: 'var(--bg)' }}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <Calendar style={{ 
              margin: '0 auto 24px', 
              color: 'var(--text-secondary)',
              width: '64px',
              height: '64px'
            }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
              No events found
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }} className="grid-responsive">
            {filteredEvents.map(event => (
              <EventCard 
                key={event.id} 
                event={event} 
                onClick={() => onEventClick(event)}
              />
            ))}
          </div>
        )}

        <EventFormModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleCreateEvent}
        />

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setCurrentView('event');
  };

  const handleEventUpdate = (updatedEvent) => {
    setSelectedEvent({ ...selectedEvent, ...updatedEvent });
  };

  const handleEventDelete = (eventId) => {
    // In a real app, this would also update the events list
    setCurrentView('events');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage onEventClick={handleEventClick} />;
      case 'event':
        return (
          <EventPage 
            event={selectedEvent}
            onBack={() => setCurrentView('events')}
            onUpdate={handleEventUpdate}
            onDelete={handleEventDelete}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <AppProvider>
      <div style={{ 
        background: 'var(--bg)', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navbar onNavigate={handleNavigate} currentView={currentView} />
        <div style={{ flex: 1 }}>
          {renderCurrentView()}
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}