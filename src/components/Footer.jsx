import React from 'react';

// Footer Component
const Footer = () => {
  const footerLinks = {
    products: {
      title: "Products",
      links: [
        { name: "Why TwinSparks EventRom?", href: "#" },
        { name: "Product Updates", href: "#" },
        { name: "Email Marketing", href: "#" },
        { name: "Event Planning", href: "#" },
        { name: "Virtual Events", href: "#" },
        { name: "Mobile App", href: "#" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Event Library", href: "#" },
        { name: "Free Tools", href: "#" },
        { name: "Event Glossary", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "API Documentation", href: "#" },
        { name: "Templates", href: "#" }
      ]
    },
    community: {
      title: "Community",
      links: [
        { name: "Partners", href: "#" },
        { name: "Developers", href: "#" },
        { name: "Events", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Forum", href: "#" },
        { name: "Success Stories", href: "#" }
      ]
    },
    company: {
      title: "TwinSparks",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Newsroom", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Accessibility", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    help: {
      title: "Help",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Talk to Sales", href: "#" },
        { name: "Support", href: "#" },
        { name: "Status", href: "#" },
        { name: "Security", href: "#" }
      ]
    }
  };

  const socialLinks = [
    { icon: "𝕏", href: "#", label: "X (Twitter)" },
    { icon: "in", href: "#", label: "LinkedIn" },
    { icon: "📷", href: "#", label: "Instagram" },
    { icon: "▶", href: "#", label: "YouTube" },
    { icon: "f", href: "#", label: "Facebook" }
  ];

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      marginTop: '80px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px 40px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr) 1.2fr',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '20px',
                background: 'var(--gradient-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {section.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {section.links.map((link, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>
                    <a
                      href={link.href}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'var(--transition)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--brand)';
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.textDecoration = 'none';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '20px',
              background: 'var(--gradient-brand)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Get Party Started
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'var(--bg)'
              }}>
                TS
              </div>
              <span style={{ 
                fontSize: '14px', 
                fontWeight: '600',
                color: 'var(--text-secondary)'
              }}>
                EventRom
              </span>
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '16px'
            }}>
              Join thousands creating unforgettable and memorable events.
            </p>
            <button
              className="btn-primary"
              style={{
                padding: '8px 16px',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Start Free Trial ▷
            </button>
          </div>
        </div>

        <div style={{
          height: '1px',
          background: 'var(--border)',
          margin: '40px 0'
        }} />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <span style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '14px',
              fontWeight: '600'
            }}>
              Proud Part of ⁝→
            </span>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
              {['TwinSparks', 'CloudBase', 'DataFlow', 'NetWork'].map((brand, i) => (
                <span
                  key={i}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    opacity: 0.7,
                    transition: 'var(--transition)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.color = 'var(--brand)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '0.7';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--panel)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'var(--transition)',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-brand)';
                  e.currentTarget.style.color = 'var(--bg)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--panel)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px'
        }}>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '13px'
          }}>
            ©2025 EventRom • TwinSparks Development® trademark • All Rights Reserved.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['Privacy', 'Terms', 'Legal', 'Cookie Preferences', 'GDPR Compliance'].map((item, i) => (
              <a
                key={i}
                href="#"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--brand)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <select
            style={{
              background: 'var(--panel)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            <option>English</option>
            <option>Nederlands</option>
            <option>Deutsch</option>
            <option>Français</option>
            <option>Español</option>
            <option>Italiano</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;