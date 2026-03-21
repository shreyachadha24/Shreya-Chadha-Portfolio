import { useState } from 'react';

export default function ProjectNav() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-16 py-5 md:py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200/40">

      {/* Logo — identical to Navbar */}
      <a
        href="/"
        className="font-bold text-3xl md:text-4xl tracking-tight interactive relative text-gray-900"
        aria-label="Home"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{
          position: 'absolute',
          inset: '-6px',
          borderRadius: '50%',
          background: '#111',
          opacity: hovered ? 0.08 : 0,
          transform: hovered ? 'scale(1.3)' : 'scale(1)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          pointerEvents: 'none',
        }} />
        <span style={{
          display: 'inline-block',
          transform: hovered ? 'scale(1.25) rotate(-8deg)' : 'scale(1)',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          position: 'relative',
          zIndex: 1,
        }}>
          श्र
        </span>
      </a>

      {/* Back link */}
      <a
        href="/#work"
        className="interactive"
        style={{
          fontSize: 'clamp(12px, 3vw, 14px)',
          fontWeight: 500,
          color: '#555',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          letterSpacing: '0.01em',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#1a1a1a'}
        onMouseLeave={e => e.currentTarget.style.color = '#555'}
      >
        ← Back to Work
      </a>
    </nav>
  );
}
