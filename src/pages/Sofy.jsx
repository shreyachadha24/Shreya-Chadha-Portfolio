import { useEffect, useRef } from 'react';
import CustomCursor from '../components/CustomCursor';
import ProjectNav from '../components/ProjectNav';

const accent = '#F9A66C';
const pink   = '#e879a0';

export default function Sofy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const blobRef = useRef();
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return;
      blobRef.current.style.left = `${e.clientX}px`;
      blobRef.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="text-gray-900 font-sans antialiased bg-white min-h-screen">
      <CustomCursor />

      <div ref={blobRef} style={{
        position: 'fixed', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,121,160,0.12) 0%, rgba(244,168,199,0.07) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0,
        transition: 'left 0.12s ease, top 0.12s ease', filter: 'blur(8px)',
      }} />

      <ProjectNav />

      <main className="pt-24 md:pt-36 pb-16 md:pb-32" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          minHeight: '60vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
        }}>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(15px, 2vw, 20px)',
            color: accent, letterSpacing: '0.06em', marginBottom: 16,
          }}>
            UI/UX · Design System
          </p>

          <h1 className="font-bold text-gray-900 leading-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>
            So
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: pink, fontStyle: 'italic', fontWeight: 400 }}>fy</em>
          </h1>

          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            color: '#bbb', marginBottom: 48, letterSpacing: '0.02em',
          }}>
            something exciting is coming soon ✦
          </p>

          {/* Animated dots */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 10, height: 10, borderRadius: '50%',
                background: `linear-gradient(135deg, ${pink}, #f4a8c7)`,
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                opacity: 0.7,
              }} />
            ))}
          </div>

          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50%       { transform: translateY(-10px); }
            }
          `}</style>
        </div>

        <div className="px-6 md:px-20 max-w-5xl mx-auto pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <a href="/#work" className="interactive inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">
            ← Back to all work
          </a>
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: accent }}>
            more coming soon ✦
          </p>
        </div>
      </main>
    </div>
  );
}
