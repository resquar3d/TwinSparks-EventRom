import React from 'react';
import { AlertCircle } from '../assets/Icons';

// Delete Confirmation Modal
const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, eventTitle }) => {
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
      zIndex: 55,
      padding: '20px'
    }}>
      <div className="glass-panel fade-in" style={{
        width: '100%',
        maxWidth: '400px',
        borderRadius: 'var(--radius-lg)',
        padding: '32px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ 
            padding: '12px', 
            borderRadius: '50%', 
            background: 'rgba(255, 68, 68, 0.1)',
            border: '1px solid var(--danger)'
          }}>
            <AlertCircle size={24} style={{ color: 'var(--danger)' }} />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Delete Event</h3>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
          Are you sure you want to delete this Event🤔😮 "<span style={{ color: 'var(--text)' }}>{eventTitle}</span>"? 
          This action cannot be undone😒.
        </p>
        
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }} className="grid-responsive">
          <button
            onClick={onConfirm}
            className="btn-primary"
            style={{ width: '100%', background: 'var(--danger)' }}
          >
            Delete Event
          </button>
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ width: '100%' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;