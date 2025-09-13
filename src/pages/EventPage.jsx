import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Edit, Trash2 } from '../assets/Icons';
import { api } from '../utils/api';
import EventFormModal from '../components/EventForm';
import DeleteConfirmModal from '../components/Modal';
import Toast from '../components/Notification';

// Event Page Component
const EventPage = ({ event, onBack, onUpdate, onDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleUpdate = async (updatedData) => {
    try {
      await api.updateEvent(event.id, updatedData);
      onUpdate(updatedData);
      setIsEditMode(false);
      setToast({ message: 'Event updated successfully!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to update event', type: 'error' });
    }
  };

  const handleDelete = async () => {
    try {
      await api.deleteEvent(event.id);
      setToast({ message: 'Event deleted successfully!', type: 'success' });
      setTimeout(() => {
        onDelete(event.id);
        onBack();
      }, 1000);
    } catch (error) {
      setToast({ message: 'Failed to delete event', type: 'error' });
    }
    setIsDeleteModalOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '120px 20px 40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <button
          onClick={onBack}
          className="btn-secondary"
          style={{ 
            marginBottom: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ← Back to EventRom
        </button>

        <div className="glass-panel fade-in" style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden'
        }}>
          <div style={{ 
            height: '400px', 
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img 
              src={event.image} 
              alt={event.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 0%, rgba(13, 17, 23, 0.9) 100%)'
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              right: '32px'
            }}>
              <h1 style={{ 
                fontSize: '48px', 
                fontWeight: 'bold',
                marginBottom: '16px',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'
              }} className="hero-title">
                {event.title}
              </h1>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {event.categories.map((cat, i) => (
                  <span key={i} className="category-tag">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '32px',
              right: '32px',
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={() => setIsEditMode(true)}
                className="glass-panel"
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--panel)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--brand)';
                  e.currentTarget.style.borderColor = 'var(--brand)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--panel)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <Edit size={20} />
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="glass-panel"
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  border: '1px solid var(--danger)',
                  background: 'rgba(255, 68, 68, 0.15)',
                  color: 'var(--danger)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--danger)';
                  e.currentTarget.style.color = 'var(--bg)';
                  e.currentTarget.style.borderColor = 'var(--danger)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 68, 68, 0.15)';
                  e.currentTarget.style.color = 'var(--danger)';
                  e.currentTarget.style.borderColor = 'var(--danger)';
                }}
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
          
          <div style={{ padding: '40px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
              marginBottom: '40px'
            }} className="grid-responsive">
              <div className="glass-panel" style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Calendar size={20} style={{ color: 'var(--brand)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Start Date</span>
                </div>
                <p style={{ fontSize: '16px', fontWeight: '500' }}>
                  {formatDate(event.startTime)}
                </p>
              </div>
              
              <div className="glass-panel" style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Clock size={20} style={{ color: 'var(--brand)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>End Date</span>
                </div>
                <p style={{ fontSize: '16px', fontWeight: '500' }}>
                  {formatDate(event.endTime)}
                </p>
              </div>

              {event.location && (
                <div className="glass-panel" style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <MapPin size={20} style={{ color: 'var(--brand)' }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Location</span>
                  </div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>
                    {event.location}
                  </p>
                </div>
              )}
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                marginBottom: '16px',
                background: 'var(--gradient-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                About This Event
              </h2>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '16px', 
                lineHeight: '1.8'
              }}>
                {event.description}
              </p>
            </div>

            <div className="glass-panel" style={{
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src={event.createdBy.image} 
                alt={event.createdBy.name}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '3px solid var(--brand)'
                }}
              />
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>
                  Event Organizer
                </p>
                <p style={{ fontSize: '18px', fontWeight: '600' }}>
                  {event.createdBy.name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <EventFormModal
          isOpen={isEditMode}
          onClose={() => setIsEditMode(false)}
          onSubmit={handleUpdate}
          event={event}
        />

        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
          eventTitle={event.title}
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

export default EventPage;