import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [statusHovered, setStatusHovered] = useState(false);
  const blobRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return;
      blobRef.current.style.left = `${e.clientX}px`;
      blobRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white">

      {/* Cursor color blob */}
      <div
        ref={blobRef}
        style={{
          position: 'fixed',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,166,108,0.18) 0%, rgba(241,122,126,0.12) 40%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'left 0.12s ease, top 0.12s ease',
          filter: 'blur(8px)',
        }}
      />

{/* Main content */}
      <div className="w-full pl-6 md:pl-24 lg:pl-36 pr-4 md:pr-16 lg:pr-24 pt-28 pb-10 flex flex-col justify-between min-h-screen">

        {/* Name + Portrait row — stacks on mobile, side-by-side on md+ */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2" style={{ marginRight: '0' }}>

          {/* Left: Name block */}
          <div className="flex-none md:flex-1 z-10">
            {/* Communication Designer chip — above SHREYA */}
            <div className="mb-5">
              <span
                className="inline-block bg-white/70 backdrop-blur-md border border-white/60 px-3 md:px-5 py-1.5 md:py-2 rounded-full shadow-lg font-medium animate-color-shift"
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: 'clamp(9px, 2.5vw, 14px)',
                  transform: 'rotate(-3deg)',
                  animation: 'chipWiggle 4s ease-in-out infinite',
                }}
              >
                COMMUNICATION DESIGNER
              </span>
            </div>

            <h1
              className="font-black uppercase leading-[0.88] tracking-tighter select-none"
              style={{ fontSize: 'clamp(1.9rem, 10vw, 11rem)' }}
            >
              <span className="block text-gray-950 hero-text interactive cursor-default">
                {'SHREYA'.split('').map((c, i) => <span key={i} className="glitch-char">{c}</span>)}
              </span>
              <span
                className="block hero-text interactive cursor-default"
                style={{ color: '#C0BFC4' }}
              >
                {'CHADHA'.split('').map((c, i) => <span key={i} className="glitch-char">{c}</span>)}
              </span>
            </h1>

            {/* Bio */}
            <p className="mt-5 text-gray-400 text-sm md:text-base font-normal leading-relaxed max-w-[52ch]">
              Designing pixels with purpose, coffee in hand. Designer, color schemer,
              and always up for turning ideas into beautiful, user-friendly magic.
            </p>

            <p className="mt-3 text-gray-500 text-sm tracking-wide">Based in the United States</p>

            {/* Status badge — inline below bio */}
            <div
              className="flex items-center gap-3 interactive cursor-pointer mt-6"
              onMouseEnter={() => setStatusHovered(true)}
              onMouseLeave={() => setStatusHovered(false)}
              style={{
                display: 'inline-flex',
                transform: statusHovered ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: statusHovered
                    ? 'linear-gradient(135deg, #F17A7E, #F9A66C)'
                    : 'linear-gradient(135deg, #F9A66C, #F17A7E)',
                  transition: 'background 0.3s ease',
                  boxShadow: statusHovered ? '0 0 18px rgba(241,122,126,0.5)' : '0 4px 14px rgba(249,166,108,0.4)',
                }}
              >
                <span style={{ fontSize: '15px' }}>✦</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Status</p>
                <p className="text-sm font-semibold text-gray-900">Open to work</p>
              </div>
            </div>

          </div>

          {/* Right: Polaroid cards — hidden on mobile, shown on md+ */}
          <div className="hidden md:block flex-shrink-0 relative" style={{ marginTop: '100px', transform: 'translateX(-80px)', width: 'clamp(260px, 24vw, 400px)', height: 'clamp(340px, 38vw, 520px)' }}>

            {/* Annotation 1: Childhood */}
            <div className="absolute" style={{ top: '-72px', left: '-60px', zIndex: 5, transform: 'rotate(-4deg)' }}>
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: 'clamp(15px, 1.4vw, 20px)',
                color: '#b0b0b0',
                maxWidth: '190px',
                lineHeight: 1.35,
              }}>
                colors were my very first love — long before I had a name for it 🎨
              </p>
              <svg width="48" height="44" viewBox="0 0 48 44" style={{ marginTop: '2px', marginLeft: '30px' }}>
                <path d="M 4 4 C 10 18, 28 32, 40 40" stroke="#c8c8c8" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M 40 40 L 30 38" stroke="#c8c8c8" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M 40 40 L 38 30" stroke="#c8c8c8" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Annotation 2: Main polaroid */}
            <div className="absolute" style={{ bottom: '80px', right: '-10px', zIndex: 5, transform: 'rotate(2deg)' }}>
              <svg width="55" height="40" viewBox="0 0 55 40" style={{ marginBottom: '2px', marginLeft: '20px' }}>
                <path d="M 50 36 C 38 22, 20 10, 6 4" stroke="#c8c8c8" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M 6 4 L 15 8" stroke="#c8c8c8" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M 6 4 L 10 14" stroke="#c8c8c8" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: 'clamp(15px, 1.4vw, 20px)',
                color: '#b0b0b0',
                maxWidth: '200px',
                lineHeight: 1.35,
                textAlign: 'right',
              }}>
                that obsession quietly shaped me into a designer ✦
              </p>
            </div>

            {/* Childhood polaroid — small, behind, overlapping bottom-left */}
            <div
              className="absolute interactive"
              style={{
                top: '10%',
                left: '-75px',
                zIndex: 1,
                transform: 'rotate(-6deg)',
                transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(-2deg) scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-6deg)'}
            >
              <div style={{
                background: '#fff',
                padding: '10px 10px 22px 10px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)',
                width: 'clamp(130px, 12vw, 190px)',
              }}>
                <img
                  src="/Shreya6.png"
                  alt="Childhood"
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1.1',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'grayscale(100%) contrast(1.05)',
                  }}
                />
                <p style={{
                  textAlign: 'center',
                  marginTop: '6px',
                  fontFamily: '"Caveat", cursive',
                  fontSize: 'clamp(11px, 1vw, 14px)',
                  color: '#888',
                }}>where it all began</p>
              </div>
            </div>

            {/* Main polaroid — front */}
            <div
              className="absolute interactive"
              style={{
                top: 0,
                right: 0,
                zIndex: 2,
                transform: 'rotate(3deg)',
                transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(3deg)'}
            >
              <div style={{
                background: '#fff',
                padding: '14px 14px 28px 14px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1)',
                width: 'clamp(200px, 18vw, 300px)',
              }}>
                <img
                  src="/shreya7.JPG?v=2"
                  alt="Shreya Chadha"
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1.1',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'contrast(1.05) saturate(0.85)',
                  }}
                />
                <p style={{
                  textAlign: 'center',
                  marginTop: '10px',
                  fontFamily: '"Caveat", cursive',
                  fontSize: 'clamp(13px, 1.1vw, 17px)',
                  color: '#555',
                }}>still that same curiosity</p>
              </div>
            </div>
          </div>

          {/* Mobile-only: two polaroids side by side */}
          <div className="md:hidden w-full mb-2 flex justify-center items-end" style={{ gap: '14px', marginTop: '16px' }}>
            {/* Childhood polaroid — smaller, tilted left */}
            <div style={{
              background: '#fff',
              padding: '8px 8px 20px 8px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.07)',
              width: 'min(125px, 33vw)',
              transform: 'rotate(-5deg)',
              flexShrink: 0,
            }}>
              <img
                src="/Shreya6.png"
                alt="Childhood"
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1.1',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(100%) contrast(1.05)',
                }}
              />
              <p style={{
                textAlign: 'center',
                marginTop: '6px',
                fontFamily: '"Caveat", cursive',
                fontSize: '11px',
                color: '#888',
              }}>where it all began</p>
            </div>
            {/* Main polaroid — slightly bigger, tilted right */}
            <div style={{
              background: '#fff',
              padding: '10px 10px 22px 10px',
              boxShadow: '0 16px 48px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)',
              width: 'min(155px, 42vw)',
              transform: 'rotate(3deg)',
              flexShrink: 0,
            }}>
              <img
                src="/shreya7.JPG?v=2"
                alt="Shreya Chadha"
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1.1',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.05) saturate(0.85)',
                }}
              />
              <p style={{
                textAlign: 'center',
                marginTop: '7px',
                fontFamily: '"Caveat", cursive',
                fontSize: '11px',
                color: '#555',
              }}>still that same curiosity</p>
            </div>
          </div>

        </div>

        {/* Bottom row: scroll indicator */}
        <div className="flex justify-end items-end pt-4" style={{ marginTop: '-50px' }}>
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
            <div
              className="w-px bg-gray-300"
              style={{ height: '60px', animation: 'scrollLine 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.4); opacity: 0.4; }
        }
        @keyframes chipWiggle {
          0%   { transform: rotate(-3deg) translateY(0px); }
          25%  { transform: rotate(-1.5deg) translateY(-5px); }
          50%  { transform: rotate(-3deg) translateY(0px); }
          75%  { transform: rotate(-4.5deg) translateY(-3px); }
          100% { transform: rotate(-3deg) translateY(0px); }
        }
      `}</style>
    </section>
  );
}
