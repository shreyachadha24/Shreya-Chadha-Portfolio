import { useState, useEffect } from 'react';

function NavLink({ href, children, external }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="interactive"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        fontSize: 14,
        fontWeight: 500,
        color: hovered ? '#1a1a1a' : '#555',
        textDecoration: 'none',
        padding: '5px 10px',
        borderRadius: 20,
        transition: 'color 0.2s ease',
        display: 'inline-block',
      }}
    >
      <span style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 20,
        background: 'linear-gradient(135deg, #F9A66C, #F17A7E)',
        opacity: hovered ? 0.12 : 0,
        transform: hovered ? 'scaleX(1) scaleY(1)' : 'scaleX(0.6) scaleY(0.6)',
        transition: 'opacity 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        pointerEvents: 'none',
      }} />
      {children}
    </a>
  );
}

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 w-full z-50 px-5 md:px-16 py-5 md:py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200/40"
      >
        {/* Logo */}
        <a
          href="/"
          className="font-bold text-4xl tracking-tight interactive relative text-gray-900"
          aria-label="Home"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '50%',
              background: '#111',
              opacity: hovered ? 0.08 : pulse ? 0.05 : 0,
              transform: hovered ? 'scale(1.3)' : pulse ? 'scale(1.15)' : 'scale(1)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              pointerEvents: 'none',
            }}
          />
          <span
            style={{
              display: 'inline-block',
              transform: hovered ? 'scale(1.25) rotate(-8deg)' : pulse ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            श्र
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Work', href: '#work' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
            { label: 'Resume ↗', href: 'https://drive.google.com/file/d/1PsiuPIW2kGmcEmROzFlXNLgzRwYn20Xf/view?usp=sharing', external: true },
          ].map((link) => (
            <NavLink key={link.label} href={link.href} external={link.external}>{link.label}</NavLink>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 z-50 interactive"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: 22, height: 1.5, background: '#111',
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
            transition: 'transform 0.3s ease',
          }} />
          <span style={{
            display: 'block', width: 22, height: 1.5, background: '#111',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }} />
          <span style={{
            display: 'block', width: 22, height: 1.5, background: '#111',
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            transition: 'transform 0.3s ease',
          }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden fixed top-0 left-0 w-full z-40"
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          paddingTop: '88px',
          paddingBottom: '32px',
          paddingLeft: '32px',
          paddingRight: '32px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
          borderBottom: '1px solid #f0ece8',
          boxShadow: menuOpen ? '0 8px 32px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Work', href: '#work' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
            { label: 'Resume ↗', href: 'https://drive.google.com/file/d/1PsiuPIW2kGmcEmROzFlXNLgzRwYn20Xf/view?usp=sharing', external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={handleLinkClick}
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#1a1a1a',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                padding: '14px 0',
                borderBottom: '1px solid #f5f2ef',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F9A66C'}
              onMouseLeave={e => e.currentTarget.style.color = '#1a1a1a'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
