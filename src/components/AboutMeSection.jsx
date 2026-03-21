import { useState, useEffect } from 'react';

export default function AboutMeSection() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const paintings = [
    { src: '/image 1.avif', fanX: isMobile ? -130 : -200, fanY: isMobile ? -90  : -140, fanR: '-18deg', stackR: '-6deg' },
    { src: '/image 2.jpg',  fanX: isMobile ?  130 :  200, fanY: isMobile ? -75  : -115, fanR:  '14deg', stackR:  '4deg' },
    { src: '/image 3.jpg',  fanX: isMobile ? -120 : -185, fanY: isMobile ?  90  :  140, fanR:  '-9deg', stackR: '-3deg' },
    { src: '/image 4.jpg',  fanX: isMobile ?  120 :  185, fanY: isMobile ?  95  :  145, fanR:  '16deg', stackR:  '6deg' },
    { src: '/image 5.avif', fanX: 0,                       fanY: isMobile ? -110 : -170, fanR:  '-2deg', stackR: '-1deg' },
  ];

  const paintingW  = isMobile ? 130 : 170;
  const paintingH  = isMobile ? 155 : 200;
  const workspaceScale = open ? 'scale(0.78)' : (isMobile ? 'scale(1.1)' : 'scale(1.45)');

  return (
    <section id="about" className="py-12 md:py-20 px-6 md:px-20 bg-white">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-bold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}>
            A bit about{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F9A66C', fontStyle: 'italic', fontWeight: 400 }}>
              Myself ✦
            </em>
          </h2>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: '#888',
            letterSpacing: '0.02em',
          }}>
            the person behind the pixels
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* LEFT: Note */}
          <div
            style={{
              flex: '0 0 auto',
              width: 'clamp(300px, 100%, 580px)',
              transform: 'rotate(-1.2deg)',
              background: '#fffef0',
              borderRadius: '4px',
              padding: '48px 44px 44px 64px',
              boxShadow: '4px 6px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
              position: 'relative',
              backgroundImage: `
                repeating-linear-gradient(
                  transparent,
                  transparent 31px,
                  #dde8f5 31px,
                  #dde8f5 32px
                )`,
              backgroundPositionY: '52px',
            }}
          >
            {/* Red margin line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 50, width: '1.5px', background: 'rgba(249,122,126,0.45)' }} />

            {/* Tape at top */}
            <div style={{
              position: 'absolute',
              top: -14,
              left: '50%',
              transform: 'translateX(-50%) rotate(-1deg)',
              width: 70,
              height: 28,
              background: 'rgba(249,166,108,0.35)',
              borderRadius: 3,
              backdropFilter: 'blur(2px)',
            }} />

            {/* Heading in Caveat */}
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#F9A66C',
              marginBottom: 20,
              lineHeight: 1.2,
            }}>
              Namaste! I'm Shreya ✦
            </p>

            <div style={{ lineHeight: 2, color: '#555', fontSize: 'clamp(13px, 2vw, 15px)' }}>
              <p style={{ marginBottom: 16 }}>
                I'm a <strong>Communication Designer</strong> and User Experience graduate student at <strong>Arizona State University</strong>. I love exploring how design can tell stories, spark emotion, and make everyday moments a little more meaningful.
              </p>
              <p style={{ marginBottom: 16 }}>
                With a background in visual communication and user experience, I've worked on <strong>brand identities, social media campaigns, and digital experiences</strong> for a variety of projects.
              </p>
              <p style={{ marginBottom: 20 }}>
                My journey started with a love for <strong>painting and sketching</strong>, and that curiosity still drives how I approach design today — with creativity, empathy, and a genuine interest in people and their experiences.
              </p>
            </div>

            <p style={{ lineHeight: 2, color: '#555', fontSize: 'clamp(13px, 2vw, 15px)' }}>
              Currently open to <strong>internships & Co-op</strong>. If you're building something with heart, let's talk!
            </p>
          </div>

          {/* RIGHT: Gallery */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 420, minWidth: 280, width: '100%' }}>
            <div
              style={{ position: 'relative', width: 400, height: 460 }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {/* Paintings stacked behind, fan out on hover */}
              {paintings.map((p, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: paintingW,
                    height: paintingH,
                    left: '50%',
                    top: '50%',
                    marginLeft: -paintingW / 2,
                    marginTop: -paintingH / 2,
                    background: '#fff',
                    padding: 8,
                    borderRadius: 2,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                    zIndex: i + 1,
                    transform: open
                      ? `translateX(${p.fanX}px) translateY(${p.fanY}px) rotate(${p.fanR})`
                      : `translateX(${(i - 2) * 4}px) translateY(${(i - 2) * 3}px) rotate(${p.stackR})`,
                    transition: `transform 0.9s cubic-bezier(0.34,1.56,0.64,1)`,
                    transitionDelay: `${i * 0.04}s`,
                  }}
                >
                  <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #ff9a6c, #c0392b)', boxShadow: '0 2px 6px rgba(0,0,0,0.3)', zIndex: 20 }} />
                  <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}

              {/* Workspace — always on top */}
              <div
                style={{
                  position: 'absolute',
                  width: 310,
                  height: 230,
                  left: '50%',
                  top: '50%',
                  marginLeft: -155,
                  marginTop: -115,
                  background: '#fff',
                  padding: 10,
                  borderRadius: 2,
                  boxShadow: open ? '0 12px 32px rgba(0,0,0,0.14)' : '0 20px 60px rgba(0,0,0,0.22)',
                  zIndex: 20,
                  transform: workspaceScale,
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  cursor: 'pointer',
                }}
              >
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', width: 20, height: 20, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #ff9a6c, #c0392b)', boxShadow: '0 2px 8px rgba(0,0,0,0.35)', zIndex: 30 }} />
                <img src="/image 6.jpg" alt="workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

                {/* Caption changes based on state */}
                <p style={{
                  position: 'absolute',
                  bottom: -32,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: '"Caveat", cursive',
                  fontSize: 'clamp(13px, 2vw, 16px)',
                  color: open ? '#F9A66C' : '#888',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.3s ease',
                }}>
                  {open ? 'just me and colors again 🎨' : 'where things come together ✦'}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
