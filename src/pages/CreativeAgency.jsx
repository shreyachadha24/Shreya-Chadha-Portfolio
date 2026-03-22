import { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import CustomCursor from '../components/CustomCursor';
import ProjectNav from '../components/ProjectNav';

const accent = '#F9A66C';
const pink   = '#F17A7E';

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: accent, marginBottom: 14,
    }}>{children}</p>
  );
}

const programPages = [
  { src: '/git132.png',  label: 'Cover' },
  { src: '/git133.png',  label: 'Page 2' },
  { src: '/git134.png',  label: 'Page 3' },
  { src: '/git135.png',  label: 'Page 4' },
  { src: '/git136.png',  label: 'Page 5' },
  { src: '/git137.png',  label: 'Page 6' },
  { src: '/git138.png',  label: 'Page 7' },
  { src: '/git139.png',  label: 'Page 8' },
  { src: '/git1310.png', label: 'Page 9' },
  { src: '/git1311.png', label: 'Page 10' },
  { src: '/git1312.png', label: 'Page 11' },
  { src: '/git1313.png', label: 'Page 12' },
  { src: '/git1314.png', label: 'Page 13' },
  { src: '/git1315.png', label: 'Page 14' },
  { src: '/git1316.png', label: 'Page 15' },
  { src: '/git1317.png', label: 'Page 16' },
  { src: '/git1318.png', label: 'Page 17' },
  { src: '/git1319.png', label: 'Page 18' },
  { src: '/git1320.png', label: 'Page 19' },
  { src: '/git13.png',   label: 'Back Cover' },
];

export default function CreativeAgency() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const blobRef = useRef();
  const flipRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return;
      blobRef.current.style.left = `${e.clientX}px`;
      blobRef.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const deliverables = [
    'Design Guide', 'Flyer', 'Theme Graphic',
    'Social Media Posts', 'Event Program', 'Presentation Slides', 'Hype Video',
  ];

  return (
    <div className="text-gray-900 font-sans antialiased bg-white min-h-screen">
      <CustomCursor />

      <div ref={blobRef} style={{
        position: 'fixed', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,166,108,0.18) 0%, rgba(241,122,126,0.12) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0,
        transition: 'left 0.12s ease, top 0.12s ease', filter: 'blur(8px)',
      }} />

      <ProjectNav />

      <main className="pt-24 md:pt-36 pb-16 md:pb-32" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto text-center mb-20">
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(15px, 2vw, 20px)', color: accent, letterSpacing: '0.06em', marginBottom: 16 }}>
            Visual Design · Project Management · Spring 2026
          </p>
          <h1 className="font-bold text-gray-900 leading-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
            The GIT{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
              Creative Agency
            </em>
          </h1>
          <p className="text-gray-500 mx-auto" style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, maxWidth: '72ch' }}>
            Selected as one of <strong style={{ color: '#1a1a1a' }}>11 students</strong> for the Spring '26 GIT Creative Agency at ASU —
            leading the <strong style={{ color: '#1a1a1a' }}>TEDxFaurotPark</strong> project as both Project Manager and Visual Designer.
          </p>
        </div>

        {/* ── Meta strip ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '24px 32px', padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 44px)',
            background: '#fdf8f5', borderRadius: '1.2rem', borderTop: `3px solid ${accent}`,
          }}>
            <div>
              <SectionLabel>Timeline</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>4 Weeks</p>
            </div>
            <div>
              <SectionLabel>My Roles</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Visual Designer<br />Project Manager
              </p>
            </div>
            <div>
              <SectionLabel>Team</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>5 Members</p>
            </div>
            <div>
              <SectionLabel>Deliverables</SectionLabel>
              <p className="text-gray-700" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Brand System<br />Flyer<br />Social Media Posts<br />Hype Video<br />Event Program<br />Presentation Slides
              </p>
            </div>
          </div>
        </div>

        {/* ── Overview ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Overview</SectionLabel>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.2 }}>
                Design, leadership, and{' '}
                <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                  storytelling ✦
                </em>
              </h2>
            </div>
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                Over 7 weeks, our team of 5 developed 6 deliverables for TEDxFaurotPark — ranging from social media
                graphics to print and video assets — building a full brand system and design guidelines along the way.
              </p>
              <p>
                We focused on creating a visual structure that is meaningful, cohesive, and scalable across multiple
                touchpoints, while still leaving room for creative expression and storytelling.
              </p>
            </div>
          </div>
        </div>

        {/* ── My Roles ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>My Roles</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Wearing{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                two hats
              </em>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* PM */}
              <div style={{
                background: '#fff', border: '1px solid #f0ece8',
                borderRadius: '1.2rem', padding: '28px 32px',
              }}>
                <div style={{
                  display: 'inline-flex', background: `linear-gradient(135deg, ${accent}, ${pink})`,
                  borderRadius: '20px', padding: '5px 16px', marginBottom: 18,
                }}>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase' }}>
                    Project Manager
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Coordinating timelines & milestones',
                    'Managing team communication',
                    'Organizing deliverables & file systems',
                    'Keeping Notion structured & updated',
                    'Ensuring on-time submission',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ color: accent, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✦</span>
                      <span style={{ fontSize: 15, color: '#555', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Designer */}
              <div style={{
                background: '#fff', border: '1px solid #f0ece8',
                borderRadius: '1.2rem', padding: '28px 32px',
              }}>
                <div style={{
                  display: 'inline-flex', background: '#1c1917',
                  borderRadius: '20px', padding: '5px 16px', marginBottom: 18,
                }}>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase' }}>
                    Visual Designer
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Designed the event program from scratch to final',
                    'Provided ideas, references & ideations for branding, social media & print collaterals',
                    'Contributed to ensuring a cohesive visual direction across all touchpoints',
                    'Provided detailed feedback on the hype video to improve its visual impact',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ color: accent, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✦</span>
                      <span style={{ fontSize: 15, color: '#555', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Deliverables list ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>What We Made</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            6 Deliverables in{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
              4 Weeks
            </em>
          </h2>
          <div className="flex flex-wrap gap-3">
            {deliverables.map((d, i) => (
              <span key={i} style={{
                fontSize: 14, fontWeight: 500, color: '#555',
                background: '#fff', border: '1px solid #ede8e3',
                borderRadius: '24px', padding: '8px 20px', cursor: 'default',
                transition: '0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = accent;
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#555';
                  e.currentTarget.style.borderColor = '#ede8e3';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* ── Process / Deadline tracker ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Keeping the team{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                on track
              </em>
            </h2>
            <p className="text-gray-500 mb-10" style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.9, maxWidth: '65ch' }}>
              As PM, I built and maintained a deadline tracker to keep everyone aligned from planning to final submission.
              Even small things like keeping Notion organized and maintaining a structured file system made a big
              difference in how smoothly the team worked.
            </p>
            <div style={{ borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)', border: '1px solid #f0ece8' }}>
              <img src="/git1.png" alt="TEDxFaurotPark deadline tracker" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Concept Evolution ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Concept Evolution</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Where the{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
              idea began
            </em>
          </h2>
          <div className="grid gap-12 items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
            {/* Images stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'flex-start' }}>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 8px 28px rgba(0,0,0,0.08)', width: '90%' }}>
                <img src="/git2.png" alt="Concept Evolution — Living Layers" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', width: '72%' }}>
                <img src="/git3.png" alt="Concept Evolution — Branches & Buds" style={{ width: '100%', display: 'block', mixBlendMode: 'multiply' }} />
              </div>
            </div>
            {/* Text */}
            <div style={{ color: '#555', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                The visual identity evolves from the earlier concept of <strong style={{ color: '#1a1a1a' }}>"Living Layers,"</strong> which explored the layered systems found in nature. The original mark represented a form between leaf and bark, representing layers that supports growth.
              </p>
              <p style={{ marginBottom: 20 }}>
                The rebrand translates this abstract idea into a more legible metaphor built around <strong style={{ color: '#1a1a1a' }}>branches and orange buds.</strong> Branches reflect pathways and relationships that connect the community, while buds represent emerging ideas and future potential.
              </p>
              <p>
                This shift maintains the theme of interconnectedness while improving clarity, symbolism, and scalability across the system.
              </p>
            </div>
          </div>
        </div>

        {/* ── Flyer Design ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Deliverables</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Flyer{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                Design
              </em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* Left — text */}
              <div>
                <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, marginBottom: 32 }}>
                  Designed as part of the TEDxFaurotPark brand collateral — the flyer communicates the event's identity while staying true to the visual system built for the project.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'Brand Aligned',  desc: 'Follows the TEDxFaurotPark visual system and design guidelines' },
                    { label: 'Print Ready',    desc: 'Designed for both digital and print distribution' },
                    { label: 'Cohesive Identity', desc: 'Part of a unified set of collaterals for the event' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{
                        flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                        background: `linear-gradient(135deg, ${accent}, ${pink})`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, color: '#fff', fontWeight: 700, marginTop: 2,
                      }}>✓</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 2 }}>{s.label}</p>
                        <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.6 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — flyer image */}
              <div style={{ position: 'relative' }}>
                <style>{`
                  @keyframes floatFlyer {
                    0%, 100% { transform: rotate(-0.8deg) translateY(0px); }
                    50%       { transform: rotate(-0.8deg) translateY(-10px); }
                  }
                  .git4-wrap { animation: floatFlyer 4s ease-in-out infinite; }
                  .git4-wrap:hover {
                    animation: none;
                    transform: rotate(0deg) scale(1.02);
                    transition: transform 0.4s ease;
                  }
                `}</style>
                <div style={{
                  position: 'absolute', top: -14, left: 12, zIndex: 2,
                  background: `linear-gradient(135deg, ${accent}, ${pink})`,
                  color: '#fff', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '5px 14px', borderRadius: '20px',
                  boxShadow: '0 4px 14px rgba(249,166,108,0.4)',
                }}>
                  Flyer
                </div>
                <div className="git4-wrap" style={{ borderRadius: '1.2rem', overflow: 'hidden' }}>
                  <img src="/git4.png" alt="TEDxFaurotPark Flyer Design" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Theme Graphic ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* Left — theme graphic image */}
            <div style={{ position: 'relative' }}>
              <style>{`
                @keyframes floatTheme {
                  0%, 100% { transform: rotate(0.8deg) translateY(0px); }
                  50%       { transform: rotate(0.8deg) translateY(-10px); }
                }
                .git5-wrap { animation: floatTheme 4s ease-in-out infinite; }
                .git5-wrap:hover {
                  animation: none;
                  transform: rotate(0deg) scale(1.02);
                  transition: transform 0.4s ease;
                }
              `}</style>
              <div style={{
                position: 'absolute', top: -14, left: 12, zIndex: 2,
                background: `linear-gradient(135deg, ${accent}, ${pink})`,
                color: '#fff', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '5px 14px', borderRadius: '20px',
                boxShadow: '0 4px 14px rgba(249,166,108,0.4)',
              }}>
                Theme Graphic
              </div>
              <div className="git5-wrap" style={{ borderRadius: '1.2rem', overflow: 'hidden' }}>
                <img src="/git5.png" alt="TEDxFaurotPark Theme Graphic" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            {/* Right — text */}
            <div>
              <SectionLabel>Deliverables</SectionLabel>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                Theme{' '}
                <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                  Graphic
                </em>
              </h2>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, marginBottom: 32 }}>
                The theme graphic captures the visual essence of TEDxFaurotPark — serving as the central identity piece that anchors the event's look and feel across all touchpoints.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Central Identity',  desc: "Anchors the event's visual language across all materials" },
                  { label: 'Brand Cohesion',    desc: 'Connects with the flyer, social media and print collaterals' },
                  { label: 'Scalable Design',   desc: 'Works across both digital and large-format print' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${accent}, ${pink})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, color: '#fff', fontWeight: 700, marginTop: 2,
                    }}>✓</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 2 }}>{s.label}</p>
                      <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Social Media Posts ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Deliverables</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Social Media{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                Posts
              </em>
            </h2>
            <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, marginBottom: 40, maxWidth: '65ch' }}>
              A series of social media graphics for TEDxFaurotPark — from speaker announcements to talk title reveals, designed to build anticipation and engage the community ahead of the event.
            </p>

            <style>{`
              .git-masonry { columns: 3; column-gap: 14px; }
              .git-masonry-item { break-inside: avoid; margin-bottom: 14px; border-radius: 0; overflow: hidden; }
              .git-masonry-item img { width: 100%; display: block; transition: transform 0.4s ease; }
              .git-masonry-item:hover img { transform: scale(1.04); }
              @media (max-width: 640px) { .git-masonry { columns: 2; } }
            `}</style>

            <div className="git-masonry">
              {['git6.png','git7.png','git8.png','git9.png','git10.png','git11.png'].map((file, i) => (
                <div key={i} className="git-masonry-item">
                  <img src={`/${file}`} alt={`TEDxFaurotPark social media post ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Event Program ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-10 md:gap-12 items-center" style={{ gridTemplateColumns: '1fr 2.2fr' }}>

              {/* Left — text */}
              <div>
                <SectionLabel>Deliverables</SectionLabel>
                <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                  Event{' '}
                  <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                    Program
                  </em>
                </h2>
                <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, marginBottom: 32 }}>
                  Designed the TEDxFaurotPark event program from scratch — from layout and typography to the final print-ready file. This was my primary deliverable as Visual Designer on the project.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'Primary Deliverable', desc: 'Owned end-to-end from ideation to final file' },
                    { label: 'Print Ready',          desc: 'Designed for high-quality physical distribution at the event' },
                    { label: 'On-Brand',             desc: 'Follows the TEDxFaurotPark visual system and guidelines' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{
                        flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                        background: `linear-gradient(135deg, ${accent}, ${pink})`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, color: '#fff', fontWeight: 700, marginTop: 2,
                      }}>✓</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 2 }}>{s.label}</p>
                        <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.6 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — image */}
              <div style={{ position: 'relative' }}>
                <style>{`
                  @keyframes floatProgram {
                    0%, 100% { transform: rotate(-0.8deg) translateY(0px); }
                    50%       { transform: rotate(-0.8deg) translateY(-10px); }
                  }
                  .git12-wrap { animation: floatProgram 4s ease-in-out infinite; }
                  .git12-wrap:hover {
                    animation: none;
                    transform: rotate(0deg) scale(1.02);
                    transition: transform 0.4s ease;
                  }
                `}</style>
                <div style={{
                  position: 'absolute', top: -14, left: 12, zIndex: 2,
                  background: `linear-gradient(135deg, ${accent}, ${pink})`,
                  color: '#fff', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '5px 14px', borderRadius: '20px',
                  boxShadow: '0 4px 14px rgba(249,166,108,0.4)',
                }}>
                  Event Program
                </div>
                <div className="git12-wrap">
                  <img src="/git12.png" alt="TEDxFaurotPark Event Program Mockup" style={{ width: '100%', display: 'block', mixBlendMode: 'multiply' }} />
                </div>
              </div>

            </div>{/* closes grid */}

            {/* Flipbook below mockup */}
            <div style={{ marginTop: 56 }}>
              <p style={{ color: '#aaa', fontFamily: '"Caveat", cursive', fontSize: 17, marginBottom: 32, textAlign: 'center' }}>
                flip through the pages ✦
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
                <HTMLFlipBook
                  width={360}
                  height={504}
                  size="fixed"
                  showCover={true}
                  mobileScrollSupport={true}
                  onFlip={(e) => setCurrentPage(e.data)}
                  ref={flipRef}
                  style={{ boxShadow: '0 24px 72px rgba(0,0,0,0.18)' }}
                  className="flip-book"
                >
                  {programPages.map((page, i) => (
                    <div key={i} style={{ width: '100%', height: '100%', background: '#fff', overflow: 'hidden' }}>
                      <img src={page.src} alt={page.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                  ))}
                </HTMLFlipBook>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <button
                    onClick={() => flipRef.current?.pageFlip().flipPrev()}
                    style={{ width: 46, height: 46, borderRadius: '50%', border: '1.5px solid #e8e0d8', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#888', transition: 'all 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e0d8'; e.currentTarget.style.color = '#888'; }}
                  >←</button>
                  <p style={{ fontSize: 13, color: '#bbb', minWidth: 90, textAlign: 'center', letterSpacing: '0.06em' }}>
                    {currentPage + 1} / {programPages.length}
                  </p>
                  <button
                    onClick={() => flipRef.current?.pageFlip().flipNext()}
                    style={{ width: 46, height: 46, borderRadius: '50%', border: '1.5px solid #e8e0d8', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#888', transition: 'all 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e0d8'; e.currentTarget.style.color = '#888'; }}
                  >→</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hype Video ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Deliverables</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Hype{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>Video</em>
          </h2>
          <p style={{ color: '#888', fontSize: 'clamp(14px, 1.8vw, 15px)', lineHeight: 1.8, marginBottom: 32, maxWidth: '60ch' }}>
            A hype video created to build anticipation for TEDxFaurotPark. I contributed by providing detailed feedback to improve its visual impact and pacing.
          </p>
          <div style={{ borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', aspectRatio: '16/9', width: '100%' }}>
            <iframe
              src="https://www.youtube.com/embed/5pKs2Fi09gg"
              title="TEDxFaurotPark Hype Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Feedback ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20 md:mb-32">
          <SectionLabel>What they said</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-12" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Feedback &{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>kind words</em>
          </h2>
          <style>{`
            .sticky-note { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease; }
            .sticky-note:hover { transform: rotate(0deg) scale(1.04) translateY(-6px) !important; box-shadow: 0 20px 48px rgba(0,0,0,0.13) !important; }
          `}</style>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center', alignItems: 'flex-start' }}>
            {/* Note 1 */}
            <div className="sticky-note" style={{
              background: '#fff9c4', borderRadius: '4px', padding: '28px 24px 36px',
              width: 'clamp(240px, 28%, 300px)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              transform: 'rotate(-2.5deg)', position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 48, height: 14, background: 'rgba(255,255,255,0.55)', borderRadius: '0 0 4px 4px' }} />
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(16px, 2vw, 19px)', color: '#4a4a2a', lineHeight: 1.6, marginBottom: 20 }}>
                "Fantastic!!! The quality across every deliverable is impressive."
              </p>
              <div style={{ borderTop: '1px dashed rgba(0,0,0,0.15)', paddingTop: 12 }}>
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: 14, fontWeight: 700, color: '#7a7a3a' }}>— Aimee Bucher</p>
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: 13, color: '#aaa86a' }}>Client</p>
              </div>
            </div>

            {/* Note 2 */}
            <div className="sticky-note" style={{
              background: '#ffd6e0', borderRadius: '4px', padding: '28px 24px 36px',
              width: 'clamp(240px, 32%, 340px)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              transform: 'rotate(1.8deg)', position: 'relative', marginTop: 24,
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 48, height: 14, background: 'rgba(255,255,255,0.55)', borderRadius: '0 0 4px 4px' }} />
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(16px, 2vw, 19px)', color: '#5a2a35', lineHeight: 1.6, marginBottom: 20 }}>
                "Brilliant work! I love the impact you guys created with subtle but effective changes. Thank you for all the great work. I'm so happy with the outcome!"
              </p>
              <div style={{ borderTop: '1px dashed rgba(0,0,0,0.15)', paddingTop: 12 }}>
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: 14, fontWeight: 700, color: '#8a3a4a' }}>— Prof. Benjie Wilhelm</p>
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: 13, color: '#c47a8a' }}>Mentor & Client Intermediary</p>
              </div>
            </div>

            {/* Note 3 */}
            <div className="sticky-note" style={{
              background: '#c8f0d8', borderRadius: '4px', padding: '28px 24px 36px',
              width: 'clamp(240px, 28%, 300px)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              transform: 'rotate(-1.2deg)', position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 48, height: 14, background: 'rgba(255,255,255,0.55)', borderRadius: '0 0 4px 4px' }} />
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(16px, 2vw, 19px)', color: '#1a4a2a', lineHeight: 1.6, marginBottom: 20 }}>
                "I am incredibly proud of this team. I'm so happy to show off this work, and you should be, too."
              </p>
              <div style={{ borderTop: '1px dashed rgba(0,0,0,0.15)', paddingTop: 12 }}>
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: 14, fontWeight: 700, color: '#2a6a3a' }}>— Prof. Kassidy Breaux</p>
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: 13, color: '#6aaa7a' }}>Professor & Mentor</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Reflection ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Reflection</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              What this experience{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                taught me
              </em>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div style={{ color: '#555', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.9 }}>
                <p style={{ marginBottom: 20 }}>
                  This was my first time as a Project Manager — and it pushed my boundaries in the best way.
                  Initially, I found it difficult to delegate tasks, but talking to Professor Breaux helped me
                  understand how to lead with confidence. Eventually, everything was submitted on time.
                </p>
                <p>
                  Beyond design, this experience reminded me that impactful work comes from more than just design skills —
                  it requires shared accountability, clear communication with clients, and constructive feedback sessions. 🤝
                </p>
              </div>
              <div style={{ color: '#555', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.9 }}>
                <p style={{ marginBottom: 20 }}>
                  Completing everything within a month felt like a real milestone. The professors and stakeholders
                  were happy and had good things to say about all the deliverables — which made the tough deadline
                  completely worth it.
                </p>
                <p>
                  Completing a full brand system within a month, managing timelines, and contributing as a designer —
                  all at once — was challenging but incredibly rewarding. 🎓
                </p>
              </div>
            </div>

            {/* Professor credit */}
            <div style={{
              marginTop: 36, background: '#fff', border: '1px solid #f0ece8',
              borderRadius: '1rem', padding: '20px 28px',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <span style={{ fontSize: 24 }}>🎓</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
                  Under the Guidance of
                </p>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#333' }}>
                  Prof. Kassidy Breaux &amp; Prof. Cameron Rennacker
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer nav ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <a href="/#work" className="interactive inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">
            ← Back to all work
          </a>
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: accent }}>
            Spring 2026 · ASU ✦
          </p>
        </div>

      </main>
    </div>
  );
}
