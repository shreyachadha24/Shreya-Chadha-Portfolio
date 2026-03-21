/* Placeholder painting SVGs — swap src strings once real painting PNGs are ready */
const paintings = [
  {
    id: 'sunset',
    style: { top: '-20px', left: '-28px', transform: 'rotate(-10deg)', width: 96, zIndex: 4 },
    svg: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="80" height="60" rx="3" fill="#fdf6ec" />
        <rect x="2" y="2" width="76" height="35" rx="2" fill="#FBBF24" opacity="0.6" />
        <rect x="2" y="18" width="76" height="19" fill="#F97316" opacity="0.55" />
        <circle cx="40" cy="22" r="8" fill="#FDE68A" />
        <rect x="2" y="37" width="76" height="21" rx="2" fill="#7DD3FC" opacity="0.6" />
        <rect x="35" y="38" width="10" height="18" rx="2" fill="#FDE68A" opacity="0.4" />
        <rect x="0.5" y="0.5" width="79" height="59" rx="3" stroke="#d4a96a" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'abstract',
    style: { top: '-16px', right: '-24px', transform: 'rotate(9deg)', width: 86, zIndex: 4 },
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="80" height="80" rx="3" fill="#fdf2f8" />
        <circle cx="28" cy="28" r="18" fill="#F9A66C" opacity="0.7" />
        <circle cx="52" cy="48" r="16" fill="#F17A7E" opacity="0.65" />
        <circle cx="38" cy="55" r="12" fill="#a78bfa" opacity="0.5" />
        <circle cx="55" cy="25" r="10" fill="#6EE7B7" opacity="0.55" />
        <rect x="0.5" y="0.5" width="79" height="79" rx="3" stroke="#d4a96a" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'floral',
    style: { bottom: '-18px', left: '-24px', transform: 'rotate(8deg)', width: 90, zIndex: 4 },
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="80" height="80" rx="3" fill="#f0fdf4" />
        <line x1="40" y1="72" x2="40" y2="30" stroke="#4ade80" strokeWidth="2" />
        <line x1="40" y1="55" x2="28" y2="45" stroke="#4ade80" strokeWidth="1.5" />
        <line x1="40" y1="50" x2="52" y2="40" stroke="#4ade80" strokeWidth="1.5" />
        {[0,60,120,180,240,300].map((deg, i) => (
          <ellipse key={i}
            cx={40 + 13 * Math.cos((deg * Math.PI) / 180)}
            cy={28 + 13 * Math.sin((deg * Math.PI) / 180)}
            rx="7" ry="5"
            fill={i % 2 === 0 ? '#F9A66C' : '#F17A7E'}
            opacity="0.85"
            transform={`rotate(${deg} ${40 + 13 * Math.cos((deg * Math.PI) / 180)} ${28 + 13 * Math.sin((deg * Math.PI) / 180)})`}
          />
        ))}
        <circle cx="40" cy="28" r="6" fill="#FDE68A" />
        <rect x="0.5" y="0.5" width="79" height="79" rx="3" stroke="#d4a96a" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'mountains',
    style: { bottom: '-14px', right: '-22px', transform: 'rotate(-8deg)', width: 94, zIndex: 4 },
    svg: (
      <svg viewBox="0 0 90 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="90" height="65" rx="3" fill="#eff6ff" />
        <rect x="2" y="2" width="86" height="38" rx="2" fill="#BAE6FD" opacity="0.6" />
        <ellipse cx="22" cy="12" rx="10" ry="5" fill="#fff" opacity="0.8" />
        <ellipse cx="65" cy="9" rx="12" ry="5" fill="#fff" opacity="0.7" />
        <polygon points="10,45 30,18 50,45" fill="#94A3B8" opacity="0.5" />
        <polygon points="40,45 62,14 82,45" fill="#64748B" opacity="0.55" />
        <polygon points="30,18 26,28 34,28" fill="#fff" opacity="0.9" />
        <polygon points="62,14 57,26 67,26" fill="#fff" opacity="0.9" />
        <rect x="2" y="44" width="86" height="19" rx="2" fill="#86EFAC" opacity="0.6" />
        <rect x="0.5" y="0.5" width="89" height="64" rx="3" stroke="#d4a96a" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Top label + headline */}
        <div className="text-center mb-20">
          <p className="text-base mb-4" style={{ color: '#F9A66C' }}>
            Namaste, I'm <span className="font-semibold">Shreya!</span>
          </p>
          <h2 className="font-semibold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}>
            I design, create, and sometimes<br />over-caffeinate
          </h2>
        </div>

        {/* Photo + Bio row */}
        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* Photo with floating paintings */}
          <div className="flex-shrink-0 w-full md:w-[420px]" style={{ position: 'relative' }}>
            {/* Card frame for photo */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '1.5rem',
              overflow: 'hidden',
              background: '#f5f0eb',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}>
              <img
                src="/Shreya3.png"
                alt="Shreya Chadha"
                className="w-full object-contain block"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Paintings overlapping the card corners */}
            {paintings.map(p => (
              <div
                key={p.id}
                className="absolute hidden md:block"
                style={{
                  ...p.style,
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                  transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = p.style.transform + ' scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = p.style.transform; }}
              >
                {p.svg}
              </div>
            ))}
          </div>

          {/* Bio text */}
          <div className="flex-1 pt-2">
            <p className="text-gray-700 text-lg leading-[1.85] mb-8">
              I'm Shreya, a Communication Designer and User Experience graduate student at Arizona State University. I love exploring how design can tell stories, spark emotion, and make everyday moments a little more meaningful. With a background in visual communication and user experience, I've worked on brand identities, social media campaigns, and digital experiences for a variety of projects.
            </p>
            <p className="text-gray-700 text-lg leading-[1.85] mb-10">
              My journey started with a love for painting and sketching, and that curiosity still drives how I approach design today, with creativity, empathy, and a genuine interest in people and their experiences.
            </p>
            <a
              href="#"
              className="interactive inline-flex items-center gap-2 text-base font-medium pb-1 transition-colors"
              style={{ color: '#111', borderBottom: '1.5px solid #111' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F9A66C'; e.currentTarget.style.borderBottomColor = '#F9A66C'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#111'; e.currentTarget.style.borderBottomColor = '#111'; }}
            >
              View Resume <span style={{ fontSize: 16 }}>↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
