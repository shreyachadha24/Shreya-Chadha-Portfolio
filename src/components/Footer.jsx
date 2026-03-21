import { useState, useEffect, useRef } from 'react';

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const blobRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current || !footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      blobRef.current.style.left = `${e.clientX - rect.left}px`;
      blobRef.current.style.top = `${e.clientY - rect.top}px`;
    };
    const footer = footerRef.current;
    if (footer) footer.addEventListener('mousemove', handleMouseMove);
    return () => { if (footer) footer.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="relative overflow-hidden px-6 md:px-20 pt-16 md:pt-28 pb-12"
      style={{ background: '#fff', borderTop: '1px solid #f0ece8' }}>

      {/* Cursor blob */}
      <div ref={blobRef} style={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,166,108,0.15) 0%, rgba(241,122,126,0.10) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        transition: 'left 0.12s ease, top 0.12s ease',
        filter: 'blur(8px)',
        zIndex: 0,
      }} />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Top: two-column CTA + form */}
        <div className="footer-top-grid mb-16" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

          {/* Left: CTA */}
          <div>
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              color: '#888',
              marginBottom: 16,
              letterSpacing: '0.02em',
            }}>
              got a project in mind? let's make it happen ✦
            </p>
            <a
              href="mailto:chadhashreya8@gmail.com"
              className="interactive"
              style={{
                display: 'inline-block',
                fontSize: 'clamp(1.8rem, 6vw, 6rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#F9A66C',
                transition: 'color 0.6s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F17A7E'}
              onMouseLeave={e => e.currentTarget.style.color = '#F9A66C'}
            >
              Let's Talk →
            </a>
            <p style={{ marginTop: 14, fontSize: 13, color: '#888', letterSpacing: '0.02em' }}>
              chadhashreya8@gmail.com
            </p>
          </div>

          {/* Right: message form */}
          <div style={{
            background: '#faf8f5',
            border: '1px solid #f0ece8',
            borderRadius: '1.4rem',
            padding: '28px 28px 24px',
          }}>
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 17,
              color: '#F9A66C',
              marginBottom: 16,
              letterSpacing: '0.02em',
            }}>drop me a message ✦</p>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: '100%',
                background: '#fff',
                border: '1px solid #ede9e4',
                borderRadius: '0.75rem',
                padding: '12px 16px',
                fontSize: 14,
                color: '#333',
                outline: 'none',
                marginBottom: 12,
                boxSizing: 'border-box',
                fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={e => e.target.style.borderColor = '#F9A66C'}
              onBlur={e => e.target.style.borderColor = '#ede9e4'}
            />

            <textarea
              placeholder="What's on your mind?"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={4}
              style={{
                width: '100%',
                background: '#fff',
                border: '1px solid #ede9e4',
                borderRadius: '0.75rem',
                padding: '12px 16px',
                fontSize: 14,
                color: '#333',
                outline: 'none',
                resize: 'none',
                marginBottom: 16,
                boxSizing: 'border-box',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.6,
                transition: 'border-color 0.2s ease',
              }}
              onFocus={e => e.target.style.borderColor = '#F9A66C'}
              onBlur={e => e.target.style.borderColor = '#ede9e4'}
            />

            <a
              href={`mailto:chadhashreya8@gmail.com?subject=Hey from ${encodeURIComponent(name || 'your website')}&body=${encodeURIComponent(message)}`}
              className="interactive"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #F9A66C, #F17A7E)',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(249,166,108,0.3)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Send Message ✦
            </a>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, #F9A66C22, #F17A7E22, transparent)', marginBottom: 28 }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="interactive"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative', fontSize: 22, fontWeight: 800, color: '#1a1a1a', textDecoration: 'none' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span style={{
                position: 'absolute',
                inset: '-6px',
                borderRadius: '50%',
                background: '#111',
                opacity: hovered ? 0.08 : pulse ? 0.05 : 0,
                transform: hovered ? 'scale(1.3)' : pulse ? 'scale(1.15)' : 'scale(1)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                pointerEvents: 'none',
              }} />
              <span style={{
                display: 'inline-block',
                transform: hovered ? 'scale(1.25) rotate(-8deg)' : pulse ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                position: 'relative',
                zIndex: 1,
              }}>श्र</span>
            </a>
            <p style={{ fontSize: 12, color: '#888', letterSpacing: '0.04em' }}>
              © 2026 Shreya Chadha. All rights reserved.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {[
              { label: 'Behance', href: 'https://www.behance.net/shreyachadha' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreya-chadha-37249423a/' },
              { label: 'Resume', href: 'https://drive.google.com/file/d/1PsiuPIW2kGmcEmROzFlXNLgzRwYn20Xf/view?usp=sharing' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#888',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#F9A66C'}
                onMouseLeave={e => e.currentTarget.style.color = '#888'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
