import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import ProjectNav from '../components/ProjectNav';

const accent  = '#F9A66C';
const pink    = '#F17A7E';

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

export default function EveryGirl() {
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
            Campaign Design
          </p>
          <h1 className="font-bold text-gray-900 leading-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
            Every Girl,{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>A Bright Future</em>
          </h1>
          <p className="text-gray-500 mx-auto" style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, maxWidth: '76ch' }}>
            "Har Ladki, Ek Ujjwal Bhavishya" uses the idea of a 'missing Queen piece' to highlight how vital
            daughters are to society. Just as a game is incomplete without its Queen, our world is incomplete
            without empowered and educated girls.
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
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Nov 2024 – Dec 2024</p>
            </div>
            <div>
              <SectionLabel>Role</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Communication Designer</p>
            </div>
            <div>
              <SectionLabel>Tools Used</SectionLabel>
              <p className="text-gray-700" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Adobe Illustrator<br />Adobe Photoshop
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
                A campaign that speaks through{' '}
                <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                  metaphor
                </em>
              </h2>
            </div>
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                The campaign "Har Ladki, Ek Ujjwal Bhavishya" (Every Girl, A Bright Future) uses the idea of a
                "missing Queen piece" to show how vital daughters are to society. Just as a game like chess feels
                incomplete without its Queen — the most powerful and strategic piece — our world is incomplete
                without empowered, educated girls. The campaign highlights that when girls are given equal
                opportunities, they become strong leaders who shape families, communities, and the nation's future.
              </p>
              <p>
                It reminds society that girls are not just participants but changemakers. By ensuring their education,
                safety, and independence, we give them the power to unlock limitless possibilities. When every girl
                gets her rightful place, the whole world moves closer to balance, strength, and a truly bright future.
              </p>
            </div>
          </div>
        </div>

        {/* ── Overview image ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <img
            src="/camp1.png"
            alt="Every Girl A Bright Future campaign"
            style={{ width: '100%', borderRadius: '0.8rem', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
          />
        </div>

        {/* ── Problem + Insight ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-0">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">

            {/* Problem */}
            <div className="mb-16">
              <SectionLabel>Problem</SectionLabel>
              <p style={{ color: '#555', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '82ch' }}>
                In many parts of our society, girls are still seen as less important than boys. They face
                discrimination in education, opportunities, and even their right to be born.
              </p>
            </div>

            {/* Insight & Concept */}
            <div>
              <SectionLabel>The Insight & Concept</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Find a symbolic way to represent the absence and undervaluing of girls — something that would work universally and evoke emotion through metaphor.',
                  'Just like a game can\'t function properly without the Queen, society too becomes imbalanced and incomplete when women are excluded or undervalued.',
                  'I focused on the Queen, which is often overlooked in games, yet she plays a crucial role. So I began exploring.',
                  'Using a visually simple, universally understood object to communicate a deep social issue.',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '18px 20px', background: '#fff', borderRadius: '0.8rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                    <span style={{
                      flexShrink: 0, width: 7, height: 7, borderRadius: '50%',
                      background: accent, marginTop: 8,
                    }} />
                    <p style={{ color: '#555', fontSize: 'clamp(14px, 1.8vw, 15px)', lineHeight: 1.8 }}>{item}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: '#555', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                Using the theme of a <em>"Missing Queen Piece"</em> in various games, this campaign emphasizes
                the crucial role daughters play in society. Just as a game feels incomplete without its Queen,
                our world is incomplete without the presence, empowerment, and education of daughters.
              </p>
            </div>

          </div>
        </div>

        {/* ── Visual Design Execution ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28" style={{ paddingTop: 'clamp(40px, 8vw, 80px)' }}>
          <SectionLabel>Visual Design Execution</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Bringing the concept{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>to life</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              'I chose a minimalist and modern style to keep the focus on the message.',
              'Monochromatic palette with subtle contrast to keep the focus on the missing Queen piece.',
              'Bold headlines, centered game visuals, and short yet impactful copy ensures the campaign is readable both from a distance (for posters) and up close (for print or digital use).',
              'To make the campaign more accessible and relatable to the target audience in India, especially in regional and semi-urban areas, I also designed the entire set of posters in Hindi.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 24px', background: '#fdf8f5', borderRadius: '0.8rem' }}>
                <span style={{
                  flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${accent}, ${pink})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 800, color: '#fff',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ color: '#555', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.7 }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
            To ensure the campaign reached different audience touchpoints, I extended the core design system
            into multiple formats, both print and digital, while maintaining visual consistency and message clarity.
          </p>
        </div>

        {/* ── Campaign Posters ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Campaign Posters</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Designed for{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>impact</em>
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '82ch', marginBottom: 32 }}>
            The final set of posters brings the campaign concept to life — combining the symbolic chess queen metaphor
            with bold typography, a restrained colour palette, and bilingual messaging. Each poster was designed to
            work across print and digital formats, ensuring the message resonates with a wide audience.
          </p>
          <img
            src="/camp2.png"
            alt="Every Girl A Bright Future campaign posters"
            style={{ width: '100%', borderRadius: '0.8rem', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
          />
        </div>

        {/* ── Hoardings ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Hoardings</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Taking it to the{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>streets</em>
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '82ch', marginBottom: 32 }}>
            The campaign was extended to large-format hoardings, bringing the message into public spaces where it
            could reach the widest possible audience. The bold visuals and concise copy were designed to make an
            immediate impact — even at a glance.
          </p>
          <img
            src="/camp3.png"
            alt="Every Girl A Bright Future hoardings"
            style={{ width: '100%', borderRadius: '0.8rem', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
          />
        </div>

        {/* ── Social Media Posts ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Social Media</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Designed for the{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>digital world</em>
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '82ch', marginBottom: 32 }}>
            The campaign was adapted for social media platforms to reach younger, digitally active audiences.
            Each post maintains the same visual language — minimal, symbolic, and bilingual — while being
            optimised for scroll-stopping impact on feeds.
          </p>
          <img
            src="/camp4.png"
            alt="Every Girl A Bright Future social media posts"
            style={{ width: '100%', borderRadius: '0.8rem', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
          />
        </div>

        {/* ── Bookmark ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Bookmark</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            A small reminder with a{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>big message</em>
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '82ch', marginBottom: 32 }}>
            A custom bookmark was designed as a tangible, print collectible for the campaign — something that
            people could carry with them. It extends the campaign's visual identity into an everyday object,
            keeping the message alive beyond posters and screens.
          </p>
          <img
            src="/camp5.png"
            alt="Every Girl A Bright Future bookmark"
            style={{ width: '100%', borderRadius: '0.8rem', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
          />
        </div>

        {/* ── Challenges + Takeaways ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <SectionLabel>Challenges Faced</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Biggest challenge was to communicate a sensitive issue like gender inequality using very minimal, symbolic visuals.',
                  'Creating both English and Hindi versions meant I had to carefully adapt messaging and typography for different audiences while keeping the tone respectful and impactful.',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 24px', background: '#fdf8f5', borderRadius: '0.8rem' }}>
                    <span style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${accent}, ${pink})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 800, color: '#fff',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p style={{ color: '#555', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.7 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Takeaways</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'How visual metaphors can elevate communication',
                  'The importance of empathy in design thinking',
                  'Improved ability to think strategically as well as aesthetically',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '20px 24px', background: '#fdf8f5', borderRadius: '0.8rem' }}>
                    <span style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${accent}, ${pink})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 800, color: '#fff',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p style={{ color: '#555', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.7 }}>{item}</p>
                  </div>
                ))}
              </div>
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
