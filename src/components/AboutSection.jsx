import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ── Projects ── */
const projects = [
  {
    title: 'Beyond The Letter',
    category: 'Visual Design · Print',
    year: '2025',
    num: '01',
    textColor: '#fff',
    bg: 'linear-gradient(145deg, #F17A7E 0%, #f9b8ba 100%)',
    link: '/work/beyond-the-letter',
  },
  {
    title: 'EchoTouch',
    category: 'UI/UX · Accessibility',
    year: '2024',
    num: '02',
    textColor: '#fff',
    bg: 'linear-gradient(145deg, #667eea 0%, #764ba2 100%)',
    link: '/work/echotouch',
  },
  {
    title: 'Every Girl, A Bright Future',
    category: 'Campaign · Marketing',
    year: '2024',
    num: '03',
    textColor: '#fff',
    bg: 'linear-gradient(145deg, #0f2027 0%, #2c5364 100%)',
    link: '/work/every-girl-a-bright-future',
  },
  {
    title: 'Sofy',
    category: 'UI/UX · Design System',
    year: '2025',
    num: '04',
    textColor: '#fff',
    bg: 'linear-gradient(145deg, #e879a0 0%, #f4a8c7 100%)',
    link: '/work/sofy',
  },
];

/* ── Work Experience ── */
const experiences = [
  {
    title: 'Suroskie Beauty',
    category: 'Visual Design · Intern',
    year: '2025',
    num: '01',
    textColor: '#fff',
    bg: 'linear-gradient(145deg, #F9A66C 0%, #F17A7E 100%)',
    link: '/work/suroskie-beauty',
  },
  {
    title: 'Work+',
    category: 'Visual Design · University',
    year: '2025',
    num: '02',
    textColor: '#fff',
    bg: 'linear-gradient(145deg, #8B5CF6 0%, #a78bfa 100%)',
    link: '/work/work-plus',
  },
  {
    title: 'The GIT Creative Agency',
    category: 'Visual Design · Project Manager',
    year: '2026',
    num: '03',
    textColor: '#fff',
    bg: 'linear-gradient(145deg, #4a5568 0%, #718096 100%)',
    link: '/work/creative-agency',
  },
];

/* ── Stack / Fan positions ── */
const projStackPos = [
  { x:  0,  y:  4, r:  0 },
  { x: -8,  y: 14, r: -6 },
  { x:  8,  y: 14, r:  6 },
  { x: -14, y: 24, r: -10 },
];
const projFanPos = [
  { x: -220, y: -40, r: -24 },
  { x:  -70, y: -14, r:  -8 },
  { x:   70, y: -14, r:   8 },
  { x:  220, y: -40, r:  24 },
];

const expStackPos = [
  { x:  0, y:  4, r:  0 },
  { x: -8, y: 14, r: -6 },
  { x:  8, y: 14, r:  6 },
];
const expFanPos = [
  { x: -155, y: -30, r: -18 },
  { x:    0, y: -10, r:   0 },
  { x:  155, y: -30, r:  18 },
];

/* ── Reusable Folder component ── */
function FolderStage({ items, tabLabel, count, yearRange, wrapperW, wrapperH, stackPos, fanPos, wrapperClass }) {
  const [open, setOpen]     = useState(false);
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <div
      className={`relative interactive ${wrapperClass}`}
      style={{ width: wrapperW, height: wrapperH }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); setActive(null); }}
    >
      {/* Folder tab */}
      <div
        className="absolute"
        style={{
          top: -14,
          left: 44,
          width: tabLabel === 'Projects' ? 180 : 220,
          height: 54,
          background: 'linear-gradient(135deg, #F9A66C 0%, #F17A7E 100%)',
          borderRadius: '14px 14px 0 0',
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 -4px 16px rgba(249,122,126,0.25)',
        }}
      >
        <span style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.88)',
          textTransform: 'uppercase',
        }}>{tabLabel}</span>
      </div>

      {/* Folder body */}
      <div
        className="absolute"
        style={{
          top: 30,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(160deg, #1c1917 0%, #292524 55%, #1c1917 100%)',
          borderRadius: '2rem',
          zIndex: 1,
          boxShadow: open
            ? '0 40px 100px rgba(0,0,0,0.28), 0 8px 28px rgba(249,166,108,0.08)'
            : '0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.14)',
          transition: 'box-shadow 0.4s ease',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          backgroundPosition: '11px 11px',
          pointerEvents: 'none',
        }} />

        {/* Inner border */}
        <div className="absolute inset-5 rounded-[1.5rem] pointer-events-none"
          style={{ border: '1px solid rgba(255,255,255,0.05)' }} />

        {/* Top left: count */}
        <div style={{
          position: 'absolute',
          top: 28,
          left: 36,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          pointerEvents: 'none',
        }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#F9A66C', opacity: 0.55 }} />
          <span style={{
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.45)',
            textTransform: 'uppercase',
          }}>{count}</span>
        </div>

        {/* Top right: year range */}
        <div style={{
          position: 'absolute',
          top: 28,
          right: 36,
          fontFamily: '"Caveat", cursive',
          fontSize: 15,
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '0.06em',
          pointerEvents: 'none',
        }}>{yearRange}</div>

        {/* Bottom label bar */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center pointer-events-none"
          style={{
            padding: '15px 36px',
            background: 'linear-gradient(0deg, rgba(249,166,108,0.07) 0%, transparent 100%)',
            borderTop: '1px solid rgba(249,166,108,0.1)',
          }}>
          <p style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}>
            Shreya Chadha
          </p>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 15,
            color: open ? '#F9A66C' : 'rgba(255,255,255,0.5)',
            transition: 'color 0.3s ease',
            letterSpacing: '0.02em',
          }}>
            {open ? 'select a card ↑' : 'hover to open →'}
          </p>
        </div>
      </div>

      {/* Cards */}
      {items.map((p, i) => {
        const pos     = open ? fanPos[i] : stackPos[i];
        const lift    = active === i ? -34 : 0;
        const isActive = active === i;

        return (
          <div
            key={i}
            className="absolute interactive cursor-pointer"
            style={{
              width: 188,
              height: 260,
              left: '50%',
              top: '50%',
              marginLeft: -94,
              marginTop: -130,
              borderRadius: '1.4rem',
              background: p.bg,
              zIndex: 10 + (items.length - 1 - i),
              transform: `translateX(${pos.x}px) translateY(${pos.y + lift}px) rotate(${pos.r}deg)`,
              transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
              boxShadow: isActive
                ? '0 32px 64px rgba(0,0,0,0.38), 0 6px 18px rgba(0,0,0,0.18)'
                : '0 12px 32px rgba(0,0,0,0.25)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '22px 20px',
            }}
            onMouseEnter={() => open && setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => open && p.link && navigate(p.link)}
          >
            {/* Ghost number */}
            <div style={{
              position: 'absolute',
              bottom: -12,
              right: -8,
              fontSize: 110,
              fontWeight: 900,
              lineHeight: 1,
              color: 'rgba(255,255,255,0.12)',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.04em',
              userSelect: 'none',
              pointerEvents: 'none',
            }}>{p.num}</div>

            {/* Top: category + title */}
            <div>
              <p style={{
                color: p.textColor,
                fontSize: 8.5,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.55,
                marginBottom: 10,
              }}>{p.category}</p>
              <p style={{
                color: p.textColor,
                fontSize: 17,
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}>{p.title}</p>
            </div>

            {/* Bottom: year + arrow */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: p.textColor, fontSize: 10, opacity: 0.4, fontWeight: 600 }}>{p.year}</p>
              {isActive && p.link && (
                <div style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: p.textColor,
                  fontSize: 14,
                }}>↗</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="work" className="py-8 md:py-16 px-6 md:px-20 overflow-hidden"
      style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-bold text-gray-900 leading-tight mb-3"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}>
            Selected{' '}
            <em style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#F9A66C',
              fontStyle: 'italic',
              fontWeight: 400,
            }}>
              Work ✦
            </em>
          </h2>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: '#888',
            letterSpacing: '0.02em',
          }}>
            hover the folder to see what's inside
          </p>
        </div>

        {/* Two folders side by side */}
        <div className="flex flex-col lg:flex-row justify-center items-end gap-10 lg:gap-8 folders-row">
          <FolderStage
            items={projects}
            tabLabel="Projects"
            count="4 works"
            yearRange="2023 — 2025"
            wrapperW={600}
            wrapperH={460}
            stackPos={projStackPos}
            fanPos={projFanPos}
            wrapperClass="folder-stage-wrapper"
          />
          <FolderStage
            items={experiences}
            tabLabel="Work Experience"
            count="3 roles"
            yearRange="2025 — 2026"
            wrapperW={480}
            wrapperH={460}
            stackPos={expStackPos}
            fanPos={expFanPos}
            wrapperClass="folder-stage-wrapper-exp"
          />
        </div>

      </div>
    </section>
  );
}
