import React, { useEffect } from 'react';
import { Check, AlertCircle } from '../assets/Icons';

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--warning)';

  return (
    <div 
      className="slide-in"
      style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 20px',
        borderRadius: 'var(--radius-sm)',
        background: bgColor,
        color: 'var(--bg)',
        boxShadow: 'var(--shadow-lg)',
        fontWeight: '600'
      }}
    >
      {type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
      <span>{message}</span>
    </div>
  );
};

export default Toast;