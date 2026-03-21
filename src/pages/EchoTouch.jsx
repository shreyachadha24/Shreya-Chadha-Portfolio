import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import ProjectNav from '../components/ProjectNav';

const accent = '#F9A66C';
const pink   = '#F17A7E';

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: accent,
      marginBottom: 14,
    }}>{children}</p>
  );
}

const interviewQuestions = [
  'Could you tell me a bit about your daily routine?',
  'Do you use a smartphone or any assistive technology?',
  'Are there any specific tasks or situations where you often feel like you need more support or accessibility?',
  'When using technology, do you prefer audio feedback, vibrations, or something else?',
  'Have you used an ATM machine independently?',
  'What difficulties do you usually face while using an ATM?',
];

export default function EchoTouch() {
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

      <ProjectNav />

      <main className="pt-24 md:pt-36 pb-16 md:pb-32" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto text-center mb-20">
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(15px, 2vw, 20px)', color: accent, letterSpacing: '0.06em', marginBottom: 16 }}>
            UI/UX Case Study
          </p>
          <h1 className="font-bold text-gray-900 leading-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>
            Echo
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: pink, fontStyle: 'italic', fontWeight: 400 }}>Touch</em>
          </h1>
          <p className="text-gray-500 mx-auto" style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, maxWidth: '80ch' }}>
            An AI-powered accessibility app designed to help visually impaired users safely navigate ATMs
            independently. It uses artificial intelligence to detect ATM screens, buttons, and instructions
            through voice guidance. The app ensures users can complete transactions securely.
          </p>
        </div>

        {/* ── Meta strip ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '24px 32px',
            padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 44px)',
            background: '#fdf8f5',
            borderRadius: '1.2rem',
            borderTop: `3px solid ${accent}`,
          }}>
            <div>
              <SectionLabel>Timeline</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Jan 2025 – May 2025</p>
            </div>
            <div>
              <SectionLabel>Role</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>UX Designer</p>
            </div>
            <div>
              <SectionLabel>Tools Used</SectionLabel>
              <p className="text-gray-700" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Figma<br />Adobe Photoshop
              </p>
            </div>
          </div>
        </div>

        {/* ── Overview ── */}
        <div className="px-6 md:px-20 max-w-6xl mx-auto mb-16 md:mb-28">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Overview</SectionLabel>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.2 }}>
                Banking made{' '}
                <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                  accessible for all
                </em>
              </h2>
            </div>
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                EchoTouch is a next-generation accessibility app that revolutionizes how visually impaired users
                interact with ATMs. Through advanced echo mapping technology, it scans the surrounding environment
                and translates spatial details into intuitive audio cues. These cues help users locate and interact
                with ATM features, such as the card slot, cash dispenser, and screen, without any physical guidance
                or visual input.
              </p>
              <p>
                By combining spatial sound, real-time object detection, and voice-assisted instructions, EchoTouch
                creates a completely touch-free and secure ATM experience. It not only reduces the risk of fraud or
                dependency on others but also promotes equal access to financial services. Ultimately, EchoTouch
                empowers users to perform transactions confidently, fostering true independence and inclusion in
                everyday banking.
              </p>
            </div>
          </div>
        </div>

        {/* ── Overview image ── */}
        <div className="px-6 md:px-20 max-w-6xl mx-auto mb-16 md:mb-28" style={{ position: 'relative' }}>
          <img
            src="/echo4.png"
            alt="EchoTouch app overview"
            style={{
              width: '88%',
              display: 'block',
              margin: '0 auto',
              mixBlendMode: 'multiply',
              transform: 'translateY(-40px)',
            }}
          />
        </div>

        {/* ── Problem + Solution ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <SectionLabel>Problem</SectionLabel>
                <p style={{ color: '#555', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                  Visually impaired users struggle to access ATMs due to limited audio support and reliance on
                  touchscreens. There's a need for a touch-free, sound-based solution for independent ATM use.
                </p>
              </div>
              <div>
                <SectionLabel>Solution</SectionLabel>
                <p style={{ color: '#555', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                  EchoTouch is an AI-powered mobile app that enables visually impaired users to interact with ATMs
                  using spatial audio cues, real-time sound mapping, and voice commands — offering a fully touchless,
                  independent, and accessible experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Qualitative Research ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Qualitative Research</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            User{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>Interviews</em>
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
            I conducted four user interviews to understand the ATM usage challenges faced by visually impaired
            individuals — two girls from a blind school, one professional I connected with on LinkedIn, and one
            person I met in the market. These conversations provided valuable insights that shaped the design of EchoTouch.
          </p>

          {/* Interview question cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {interviewQuestions.map((q, i) => (
              <div key={i} style={{
                background: '#fdf8f5',
                borderRadius: '1rem',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <span style={{
                  flexShrink: 0, width: 26, height: 26, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${accent}, ${pink})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: '#fff',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ color: '#555', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.65 }}>{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── User Stories ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>User Stories</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Voices that shaped{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>EchoTouch</em>
            </h2>
            <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
              I spoke directly with visually impaired users to understand their needs, challenges, and expectations.
              Their insights helped shape key features of EchoTouch, ensuring the app aligns with their real-world
              experiences and enhances ATM accessibility.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                '"Our daily routines are similar to those of sighted people, but we have to put in extra effort to accomplish the same tasks."',
                '"Depending on our preference, we use audio, vibration, or both as feedback methods."',
                '"Some ATMs are accessible, with voice assistance and tactile buttons, but many are not. The lack of consistent accessibility tools, like headphone jacks or voice instructions, makes independent banking difficult."',
                '"We rely heavily on smartphones with TalkBack or VoiceOver, which makes navigating easier."',
              ].map((quote, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: '1rem', padding: '24px 28px',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  borderLeft: `3px solid ${accent}`,
                }}>
                  <p style={{ color: '#555', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.8, fontStyle: 'italic' }}>{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Competitor Analysis ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Quantitative Research</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Competitor{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>Analysis</em>
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
            Explored existing accessibility applications, personally tested them, and gathered feedback from users
            to understand their strengths and limitations. This helped identify key gaps that EchoTouch aims to
            address, especially in the context of ATM accessibility.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { name: 'BeMyEyes', type: 'Direct competitor', rating: '4.8', reviews: '741' },
              { name: 'Seeing AI', type: 'Direct competitor', rating: '4.4', reviews: '724' },
              { name: 'Aira', type: 'In Direct competitor', rating: '4.0', reviews: '110' },
            ].map((app, i) => (
              <div key={i} style={{
                background: '#fdf8f5', borderRadius: '1.2rem', padding: '28px 24px',
                borderTop: `3px solid ${accent}`,
              }}>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>{app.name}</p>
                <p style={{ fontSize: 12, color: '#aaa', marginBottom: 20, letterSpacing: '0.04em' }}>{app.type}</p>
                <div style={{ display: 'flex', gap: 24 }}>
                  <div>
                    <p style={{ fontSize: 20, fontWeight: 800, color: accent }}>{app.rating} ★</p>
                    <p style={{ fontSize: 11, color: '#aaa', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Ratings</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 20, fontWeight: 800, color: '#1a1a1a' }}>{app.reviews}</p>
                    <p style={{ fontSize: 11, color: '#aaa', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Reviews</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── User Persona ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>User Persona & Empathy Mapping</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              User{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>Persona</em>
            </h2>
            <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
              A User Persona was developed to represent the key characteristics, goals, and pain points of visually
              impaired users. This helped in aligning the design of EchoTouch with real user needs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: name card */}
              <div style={{ background: '#fff', borderRadius: '1.2rem', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg, ${accent}, ${pink})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 16 }}>👤</div>
                <p style={{ fontSize: 22, fontWeight: 800, color: '#1a1a1a', marginBottom: 4 }}>Arjun Sharma</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 16 }}>
                  {[['Age', '27'], ['Gender', 'Male'], ['Professional', 'Disability Advocate'], ['Location', 'Chennai, India']].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', gap: 8 }}>
                      <span style={{ fontSize: 13, color: '#aaa', minWidth: 100 }}>{k}</span>
                      <span style={{ fontSize: 13, color: '#555', fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginTop: 20 }}>
                  Arjun Sharma is a 27-year-old customer support executive and passionate disability rights advocate
                  based in Chennai, India. Visually impaired since birth, Arjun has turned his lived experiences into
                  meaningful advocacy, focusing on creating a more inclusive and accessible world.
                </p>
              </div>
              {/* Right: pain points + goals */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#fff', borderRadius: '1.2rem', padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: `3px solid ${pink}` }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: pink, marginBottom: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Pain Points</p>
                  {['Inaccessible ATMs with no voice or tactile support', 'Privacy issues when sharing PINs in public', 'Limited features and safety concerns in assistive apps'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: pink, marginTop: 7 }} />
                      <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#fff', borderRadius: '1.2rem', padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: `3px solid ${accent}` }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: accent, marginBottom: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Goals</p>
                  {['Use ATMs and payment systems independently', 'Advocate for better digital accessibility', 'Support and contribute to inclusive tech solutions'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: accent, marginTop: 7 }} />
                      <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Empathy Mapping ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Empathy Mapping</SectionLabel>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
            An Empathy Map was created to gain deeper insights into the thoughts, feelings, actions, and challenges
            of visually impaired users. This guided more empathetic and inclusive design decisions for EchoTouch.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div style={{ background: '#fdf8f5', borderRadius: '1.2rem', padding: '28px', borderTop: `3px solid ${accent}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: accent, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Thinks</p>
              {['Will this ATM have voice assistance?', 'There has to be a better and safer way for us to manage money.', 'I want to be independent when using ATMs.', 'Accessibility should be a priority, not an afterthought.'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: accent, marginTop: 7 }} />
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{ background: '#fdf8f5', borderRadius: '1.2rem', padding: '28px', borderTop: `3px solid ${pink}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: pink, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Feels & Does</p>
              {['Vulnerable when privacy is compromised', 'Frustrated when denied independence', 'Tries to use ATMs independently whenever possible', 'Uses assistive tech (TalkBack, screen readers) daily'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: pink, marginTop: 7 }} />
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Low Fidelity Wireframes ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Low Fidelity Wireframes</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Mapping the{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>user flow</em>
            </h2>
            <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
              Low-fidelity wireframes were created to map out the core features of EchoTouch, focusing on
              accessibility, voice navigation, and a smooth, touch-free user experience. These helped define
              the user flow and layout before moving to high-fidelity designs.
            </p>
          </div>

          {/* Marquee */}
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <style>{`
              @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                gap: 20px;
                width: max-content;
                animation: marquee 30s linear infinite;
              }
              .marquee-track:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="marquee-track">
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((n, i) => (
                <img
                  key={i}
                  src={`/S${n}.png`}
                  alt={`Screen ${n}`}
                  style={{
                    height: 'clamp(160px, 35vw, 260px)',
                    width: 'auto',
                    borderRadius: '1rem',
                    flexShrink: 0,
                    mixBlendMode: 'multiply',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Visual Design ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          {/* Pull quote */}
          <blockquote style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.4 }}>
              "<span style={{ color: accent }}>WCAG guidelines</span> ensure even visually impaired users benefit from{' '}
              <span style={{ color: accent }}>thoughtful visual structure</span> and accessibility."
            </p>
          </blockquote>

          <SectionLabel>Visual Design</SectionLabel>
          <p style={{ color: '#555', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '80ch', marginBottom: 52 }}>
            EchoTouch uses high contrast, clear icons, and simple layouts to support accessibility and screen reader
            compatibility, following WCAG guidelines.
          </p>

          {/* Typography showcase */}
          <div style={{ background: '#fdf8f5', borderRadius: '1.4rem', padding: 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 48px)', marginBottom: 32, overflowX: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
              <p style={{ fontSize: 13, color: '#aaa', letterSpacing: '0.06em' }}>
                <span style={{ fontWeight: 600, color: '#888', marginRight: 16 }}>Type Scale</span>
                10px / 12px / 14px / 16px / 18px / 20px
              </p>
            </div>
            <p style={{ fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 24 }}>
              <span style={{ color: accent }}>POPPINS</span>{' '}
              <span style={{ color: '#1a1a1a' }}>FONT</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, color: '#555', fontSize: 15, lineHeight: 1.8 }}>
              <p style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp</p>
              <p style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
              <p style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>1234567890!@#$%^&amp;*()_+=&lt;&gt;?:&quot;;</p>
            </div>
          </div>

          {/* Color palette */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>Colour Palette</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { hex: '#3C0C62', label: '#3C0C62' },
                { hex: '#AE6DDF', label: '#AE6DDF' },
                { hex: '#494949', label: '#494949' },
                { hex: '#0C0C0C', label: '#0C0C0C' },
              ].map((c) => (
                <div key={c.hex} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                  <div style={{ background: c.hex, height: 100 }} />
                  <div style={{ background: c.hex, padding: '12px 16px' }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Main Flow ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Main Flow</SectionLabel>
            <p style={{ color: '#555', fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, maxWidth: '80ch', marginBottom: 40 }}>
              The main flow of EchoTouch is designed to be simple and voice-guided. Users can locate nearby ATMs,
              access audio instructions, and complete secure transactions — all through intuitive voice commands,
              ensuring a seamless and touch-free experience.
            </p>
            <img
              src="/echo6.png"
              alt="EchoTouch main flow"
              style={{ width: '100%', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </div>

        {/* ── Home Screen Showcase ── */}
        <div className="px-6 md:px-20 max-w-6xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Home Screen</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-8 md:mb-16" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Designed for{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>independence</em>
          </h2>

          {/* Mobile: stacked layout. Desktop: 3-column with phone center */}
          <div className="flex flex-col md:hidden gap-4 mb-6">
            {[
              { title: 'Scan ATM Interface', desc: 'Point your camera at the ATM screen to hear what\'s displayed, with options to confirm or go back.', color: accent, side: 'left' },
              { title: 'Secure PIN Entry', desc: 'Choose between voice input or gesture-based entry for a touch-free and private PIN experience.', color: accent, side: 'left' },
              { title: 'Gesture Control Guide', desc: 'Learn simple hand gestures to navigate the ATM interface easily.', color: pink, side: 'right' },
              { title: 'Voice Navigation', desc: 'Every screen is fully narrated — users are guided step by step through each transaction with clear audio feedback.', color: pink, side: 'right' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '16px 20px', borderLeft: `3px solid ${f.color}` }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>{f.title}</p>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex md:hidden justify-center mb-8">
            <img src="/echo7.png" alt="EchoTouch home screen" style={{ width: '60%', maxWidth: 260, display: 'block', mixBlendMode: 'multiply' }} />
          </div>

          <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 1.2fr 1fr', gap: 0, alignItems: 'center' }}>

            {/* Left callouts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {[
                {
                  title: 'Scan ATM Interface',
                  desc: 'Point your camera at the ATM screen to hear what\'s displayed, with options to confirm or go back.',
                },
                {
                  title: 'Secure PIN Entry',
                  desc: 'Choose between voice input or gesture-based entry for a touch-free and private PIN experience.',
                },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Card */}
                  <div style={{
                    background: '#fdf8f5',
                    borderRadius: '1rem',
                    padding: '20px 24px',
                    borderLeft: `3px solid ${accent}`,
                    flex: 1,
                  }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>{f.desc}</p>
                  </div>
                  {/* Dashed arrow line */}
                  <div style={{ display: 'flex', alignItems: 'center', width: 48, flexShrink: 0 }}>
                    <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
                    <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0 }}>
                      <polygon points="0,2 8,5 0,8" fill={accent} />
                    </svg>
                  </div>
                  {/* Dot */}
                  <div style={{
                    width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                    background: `linear-gradient(135deg, ${accent}, ${pink})`,
                    boxShadow: `0 0 0 3px rgba(249,166,108,0.2)`,
                  }} />
                </div>
              ))}
            </div>

            {/* Center phone */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/echo7.png"
                alt="EchoTouch home screen"
                style={{ width: '100%', maxWidth: 320, display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Right callouts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {[
                {
                  title: 'Gesture Control Guide',
                  desc: 'Learn simple hand gestures to navigate the ATM interface easily.',
                },
                {
                  title: 'Voice Navigation',
                  desc: 'Every screen is fully narrated — users are guided step by step through each transaction with clear audio feedback.',
                },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Dot */}
                  <div style={{
                    width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                    background: `linear-gradient(135deg, ${accent}, ${pink})`,
                    boxShadow: `0 0 0 3px rgba(249,166,108,0.2)`,
                  }} />
                  {/* Dashed arrow line */}
                  <div style={{ display: 'flex', alignItems: 'center', width: 48, flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0 }}>
                      <polygon points="10,2 2,5 10,8" fill={accent} />
                    </svg>
                    <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
                  </div>
                  {/* Card */}
                  <div style={{
                    background: '#fdf8f5',
                    borderRadius: '1rem',
                    padding: '20px 24px',
                    borderRight: `3px solid ${pink}`,
                    flex: 1,
                  }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Find Accessible ATM Showcase ── */}
        <div className="px-6 md:px-20 max-w-6xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Find Accessible ATM</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-8 md:mb-16" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            ATMs that work{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>for everyone</em>
          </h2>

          {/* Mobile layout */}
          <div className="flex flex-col md:hidden gap-4 mb-6">
            <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '16px 20px', borderLeft: `3px solid ${accent}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Nearby ATM Finder</p>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Discover ATMs around you that are fully compatible with EchoTouch.</p>
            </div>
            <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '16px 20px', borderLeft: `3px solid ${pink}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Voice Navigation</p>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Receive step-by-step, voice-guided directions to reach the nearest accessible ATM smoothly.</p>
            </div>
          </div>
          <div className="flex md:hidden gap-4 justify-center mb-8">
            <img src="/echo8.png" alt="EchoTouch find accessible ATM" style={{ width: '45%', maxWidth: 180, display: 'block', mixBlendMode: 'multiply' }} />
            <img src="/echo9.png" alt="EchoTouch find accessible ATM detail" style={{ width: '45%', maxWidth: 180, display: 'block', mixBlendMode: 'multiply' }} />
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 32, alignItems: 'center' }}>

            {/* Left phone — echo8 */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/echo8.png"
                alt="EchoTouch find accessible ATM"
                style={{ width: '100%', maxWidth: 280, display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Center — feature cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

              {/* Nearby ATM Finder — arrow points right to echo9 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '20px 24px', borderLeft: `3px solid ${accent}`, flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Nearby ATM Finder</p>
                  <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Discover ATMs around you that are fully compatible with EchoTouch.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: 44, flexShrink: 0 }}>
                  <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
                  <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="0,2 8,5 0,8" fill={accent} /></svg>
                </div>
                <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${accent}, ${pink})`, boxShadow: `0 0 0 3px rgba(249,166,108,0.2)` }} />
              </div>

              {/* Voice Navigation — arrow points left to echo8 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${accent}, ${pink})`, boxShadow: `0 0 0 3px rgba(249,166,108,0.2)` }} />
                <div style={{ display: 'flex', alignItems: 'center', width: 44, flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="10,2 2,5 10,8" fill={accent} /></svg>
                  <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
                </div>
                <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '20px 24px', borderRight: `3px solid ${pink}`, flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Voice Navigation</p>
                  <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Receive step-by-step, voice-guided directions to reach the nearest accessible ATM smoothly.</p>
                </div>
              </div>

            </div>

            {/* Right phone — echo9 */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/echo9.png"
                alt="EchoTouch find accessible ATM detail"
                style={{ width: '100%', maxWidth: 280, display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>

          </div>
        </div>

        {/* ── Session History Showcase ── */}
        <div className="px-6 md:px-20 max-w-6xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Session History</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-8 md:mb-16" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Every transaction,{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>tracked securely</em>
          </h2>

          {/* Mobile layout */}
          <div className="flex flex-col md:hidden gap-4 mb-6">
            <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '16px 20px', borderLeft: `3px solid ${accent}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Usage Statistics</p>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>See total ATM sessions and types of transactions performed.</p>
            </div>
            <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '16px 20px', borderLeft: `3px solid ${pink}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Recent ATM Sessions</p>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Access a secure log of your latest visits for quick reference and tracking.</p>
            </div>
          </div>
          <div className="flex md:hidden gap-4 justify-center mb-8">
            <img src="/echo10.png" alt="EchoTouch session history" style={{ width: '45%', maxWidth: 180, display: 'block', mixBlendMode: 'multiply' }} />
            <img src="/echo11.png" alt="EchoTouch session history detail" style={{ width: '45%', maxWidth: 180, display: 'block', mixBlendMode: 'multiply' }} />
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 32, alignItems: 'center' }}>

            {/* Left phone — echo10 */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/echo10.png"
                alt="EchoTouch session history"
                style={{ width: '100%', maxWidth: 280, display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Center — feature cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

              {/* Usage Statistics — arrow points right to echo11 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '20px 24px', borderLeft: `3px solid ${accent}`, flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Usage Statistics</p>
                  <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>See total ATM sessions and types of transactions performed.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: 44, flexShrink: 0 }}>
                  <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
                  <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="0,2 8,5 0,8" fill={accent} /></svg>
                </div>
                <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${accent}, ${pink})`, boxShadow: `0 0 0 3px rgba(249,166,108,0.2)` }} />
              </div>

              {/* Recent ATM Sessions — arrow points left to echo10 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${accent}, ${pink})`, boxShadow: `0 0 0 3px rgba(249,166,108,0.2)` }} />
                <div style={{ display: 'flex', alignItems: 'center', width: 44, flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="10,2 2,5 10,8" fill={accent} /></svg>
                  <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
                </div>
                <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '20px 24px', borderRight: `3px solid ${pink}`, flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Recent ATM Sessions</p>
                  <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Access a secure log of your latest visits for quick reference and tracking.</p>
                </div>
              </div>

            </div>

            {/* Right phone — echo11 */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/echo11.png"
                alt="EchoTouch session history detail"
                style={{ width: '100%', maxWidth: 280, display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>

          </div>
        </div>

        {/* ── Settings Showcase ── */}
        <div className="px-6 md:px-20 max-w-6xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Settings</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-8 md:mb-16" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Personalised for{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>every user</em>
          </h2>

          {/* Mobile layout */}
          <div className="flex flex-col md:hidden gap-4 mb-6">
            <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '16px 20px', borderLeft: `3px solid ${accent}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Accessibility Settings</p>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Adjust audio volume and speech rate for a personalized experience.</p>
            </div>
            <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '16px 20px', borderLeft: `3px solid ${pink}` }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Interaction Controls</p>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Enable or disable voice commands and gesture controls based on your preference.</p>
            </div>
          </div>
          <div className="flex md:hidden justify-center mb-8">
            <img src="/echo12.png" alt="EchoTouch settings" style={{ width: '60%', maxWidth: 240, display: 'block', mixBlendMode: 'multiply' }} />
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 1.2fr 1fr', gap: 0, alignItems: 'center' }}>

            {/* Left card — Accessibility Settings */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '20px 24px', borderLeft: `3px solid ${accent}`, flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Accessibility Settings</p>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Adjust audio volume and speech rate for a personalized experience.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: 44, flexShrink: 0 }}>
                <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
                <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="0,2 8,5 0,8" fill={accent} /></svg>
              </div>
              <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${accent}, ${pink})`, boxShadow: `0 0 0 3px rgba(249,166,108,0.2)` }} />
            </div>

            {/* Center phone — echo12 */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/echo12.png"
                alt="EchoTouch settings"
                style={{ width: '100%', maxWidth: 300, display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Right card — Interaction Controls */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${accent}, ${pink})`, boxShadow: `0 0 0 3px rgba(249,166,108,0.2)` }} />
              <div style={{ display: 'flex', alignItems: 'center', width: 44, flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="10,2 2,5 10,8" fill={accent} /></svg>
                <div style={{ flex: 1, borderTop: `2px dashed rgba(249,166,108,0.5)` }} />
              </div>
              <div style={{ background: '#fdf8f5', borderRadius: '1rem', padding: '20px 24px', borderRight: `3px solid ${pink}`, flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Interaction Controls</p>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>Enable or disable voice commands and gesture controls based on your preference.</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Results & Reflection ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Results</SectionLabel>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                EchoTouch successfully addressed a real-world accessibility gap in banking. The design delivered a fully
                voice-guided, touch-free ATM experience backed by a complete design system — including accessible typography,
                colour palette, gesture icons, and CTA components. The prototype covers all core user flows, from finding
                ATMs to secure PIN entry, demonstrating how thoughtful design can foster true independence for visually
                impaired users.
              </p>
            </div>
            <div>
              <SectionLabel>Reflection</SectionLabel>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                This project taught me that great design is invisible — it removes barriers without drawing attention to
                itself. Designing for accessibility pushed me to prioritise clarity, simplicity, and empathy at every step.
                User research and competitor analysis were essential in identifying gaps that existing solutions hadn't
                addressed. If I were to continue, I would conduct usability testing with visually impaired users and
                iterate on gesture controls based on real feedback.
              </p>
            </div>
          </div>
        </div>

        {/* ── Back ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <a href="/#work" className="interactive inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">
            ← Back to all work
          </a>
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: accent }}>
            more projects coming soon ✦
          </p>
        </div>

      </main>
    </div>
  );
}
