import React, { useState } from 'react';
import { Menu, Home, Calendar } from '../assets/Icons';

// Navbar Component
const Navbar = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass-panel" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      padding: '16px 20px',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(13, 17, 23, 0.8)',
      backdropFilter: 'blur(20px)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer'
        }} onClick={() => onNavigate('home')}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'var(--bg)'
          }}>
            TS
          </div>
          <span style={{
            fontSize: '24px',
            fontWeight: 'bold',
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            TwinSparks
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="mobile-hidden" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <button
            onClick={() => onNavigate('home')}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentView === 'home' ? 'var(--brand)' : 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--brand)'}
            onMouseLeave={(e) => e.target.style.color = currentView === 'home' ? 'var(--brand)' : 'var(--text-secondary)'}
          >
            <Home size={18} />
            Home
          </button>
          <button
            onClick={() => onNavigate('events')}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentView === 'events' || currentView === 'event' ? 'var(--brand)' : 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--brand)'}
            onMouseLeave={(e) => e.target.style.color = currentView === 'events' || currentView === 'event' ? 'var(--brand)' : 'var(--text-secondary)'}
          >
            <Calendar size={18} />
            Events
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-nav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer'
          }}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-nav glass-panel fade-in" style={{
            position: 'absolute',
            top: '100%',
            right: '20px',
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            marginTop: '8px',
            minWidth: '200px'
          }}>
            <button
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 0',
                width: '100%',
                fontSize: '16px'
              }}
            >
              <Home size={18} />
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('events');
                setIsMenuOpen(false);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 0',
                width: '100%',
                fontSize: '16px'
              }}
            >
              <Calendar size={18} />
              Events
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;