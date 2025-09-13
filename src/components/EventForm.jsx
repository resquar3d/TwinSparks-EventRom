import React, { useState, useEffect } from 'react';
import { X } from '../assets/Icons.jsx';
import { useAppContext } from '../context/AppContext';

// Event Form Modal
const EventFormModal = ({ isOpen, onClose, onSubmit, event = null }) => {
  const { categories } = useAppContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    startTime: '',
    endTime: '',
    location: '',
    categories: '',
    createdBy: {
      name: 'Current User',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    }
  });

  useEffect(() => {
    if (event) {
      setFormData({
        ...event,
        categories: Array.isArray(event.categories) ? event.categories.join(', ') : event.categories
      });
    }
  }, [event]);

  const handleSubmit = () => {
    // Validation
    if (!formData.title || !formData.description || !formData.image || 
        !formData.location || !formData.startTime || !formData.endTime || 
        !formData.categories) {
      return;
    }
    
    const processedData = {
      ...formData,
      categories: formData.categories.split(',').map(cat => cat.trim()).filter(Boolean)
    };
    onSubmit(processedData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '20px'
    }}>
      <div className="glass-panel fade-in" style={{
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto',
        borderRadius: 'var(--radius-lg)',
        padding: '32px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {event ? 'Edit EventRom' : 'Create EventRom'}
          </h2>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <X size={24} />
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="input-field"
              placeholder="Enter event title"
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="input-field"
              rows="4"
              placeholder="Describe your event"
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="input-field"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="input-field"
              placeholder="Event venue or address"
            />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-responsive">
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Start Time</label>
              <input
                type="datetime-local"
                value={formData.startTime}
                onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                className="input-field"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>End Time</label>
              <input
                type="datetime-local"
                value={formData.endTime}
                onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                className="input-field"
              />
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Categories (comma-separated)</label>
            <input
              type="text"
              value={formData.categories}
              onChange={(e) => setFormData({...formData, categories: e.target.value})}
              className="input-field"
              placeholder="Technology, Conference, Networking"
            />
            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {categories.slice(0, 10).map(cat => (
                <span
                  key={cat}
                  onClick={() => {
                    const currentCats = formData.categories ? formData.categories.split(',').map(c => c.trim()) : [];
                    if (!currentCats.includes(cat)) {
                      setFormData({...formData, categories: currentCats.concat(cat).join(', ')});
                    }
                  }}
                  style={{
                    background: 'var(--panel)',
                    color: 'var(--text-secondary)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    border: '1px solid var(--border)',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--brand)';
                    e.target.style.color = 'var(--bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--panel)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexDirection: 'column' }} className="grid-responsive">
            <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%' }}>
              {event ? 'Update Event' : 'Create Event'}
            </button>
            <button onClick={onClose} className="btn-secondary" style={{ width: '100%' }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFormModal;