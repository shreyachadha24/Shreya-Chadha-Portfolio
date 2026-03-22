import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
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

function ImagePlaceholder({ label, aspect = '16/9', bg }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio: aspect,
      borderRadius: '0.8rem',
      background: bg || 'linear-gradient(145deg, #fdf0e8 0%, #fce8e9 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <p style={{
        fontFamily: '"Caveat", cursive',
        fontSize: 'clamp(12px, 1.6vw, 17px)',
        color: 'rgba(249,166,108,0.55)',
        letterSpacing: '0.04em',
        textAlign: 'center',
        padding: '0 16px',
      }}>{label || 'Image coming soon ✦'}</p>
    </div>
  );
}

/* A row with label/text on left and two stacked magazine images on right */
function DesignRow({ label, text, printLabel = 'Printed Magazine', onlineLabel = 'Online Magazine', printSrc, onlineSrc, printFit = 'cover', onlineFit = 'cover' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 24, alignItems: 'start', marginBottom: 40 }}
      className="md:!grid-cols-[1fr_3fr] md:!gap-10 md:!mb-14"
    >
      {/* Label + text */}
      <div style={{ paddingTop: 6 }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#F9A66C', marginBottom: 10, letterSpacing: '0.06em' }}>{label}</p>
        <p style={{ color: '#999', fontSize: 13, lineHeight: 1.75 }}>{text}</p>
      </div>
      {/* Images side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {printSrc && (
          <div>
            <div style={{ height: 'clamp(200px, 40vw, 320px)', borderRadius: '0.8rem', overflow: 'hidden', boxShadow: '0 10px 32px rgba(0,0,0,0.12)' }}>
              <img src={printSrc} alt={printLabel} style={{ width: '100%', height: '100%', objectFit: printFit, display: 'block' }} />
            </div>
            <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', marginTop: 10, letterSpacing: '0.04em' }}>{printLabel}</p>
          </div>
        )}
        <div>
          <div style={{ height: 'clamp(200px, 40vw, 320px)', borderRadius: '0.8rem', overflow: 'hidden', boxShadow: '0 10px 32px rgba(0,0,0,0.12)' }}>
            {onlineSrc
              ? <img src={onlineSrc} alt={onlineLabel} style={{ width: '100%', height: '100%', objectFit: onlineFit, display: 'block' }} />
              : <ImagePlaceholder label={`${onlineLabel} ✦`} aspect="3/4" />}
          </div>
          <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', marginTop: 10, letterSpacing: '0.04em' }}>{onlineLabel}</p>
        </div>
      </div>
    </div>
  );
}

const magazinePages = [
  { src: '/magazine cover.png', label: 'Cover' },
  { src: '/Mag1.png',           label: '' },
  { src: '/mag2.png',           label: '' },
  { src: '/mag3.png',           label: '' },
  { src: '/mag4.png',           label: '' },
  { src: '/mag5.png',           label: '' },
  { src: '/mag6.png',           label: '' },
  { src: '/mag7.png',           label: '' },
  { src: '/mag8.png',           label: '' },
  { src: '/mag9.png',           label: '' },
  { src: '/mag10.png',          label: '' },
  { src: '/mag11.png',          label: '' },
  { src: '/mag12.png',          label: '' },
  { src: '/mag13.png',          label: '' },
  { src: '/mag14.png',          label: '' },
  { src: '/mag15.png',          label: '' },
  { src: '/mag16.png',          label: '' },
  { src: '/magazine back.png',  label: 'Back Cover' },
];

export default function BeyondTheLetter() {
  const blobRef = useRef();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return;
      blobRef.current.style.left = `${e.clientX}px`;
      blobRef.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const flipRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  // Responsive flipbook dimensions
  const [flipbookWidth, setFlipbookWidth] = useState(360);
  const [flipbookHeight, setFlipbookHeight] = useState(504);
  useEffect(() => {
    const updateFlipbookSize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setFlipbookWidth(Math.min(w - 48, 300));
        setFlipbookHeight(Math.round(Math.min(w - 48, 300) * 1.4));
      } else if (w < 768) {
        setFlipbookWidth(340);
        setFlipbookHeight(476);
      } else {
        setFlipbookWidth(360);
        setFlipbookHeight(504);
      }
    };
    updateFlipbookSize();
    window.addEventListener('resize', updateFlipbookSize);
    return () => window.removeEventListener('resize', updateFlipbookSize);
  }, []);

  return (
    <div className="text-gray-900 font-sans antialiased bg-white min-h-screen">
      <style>{`
        .final-cover {
          border-radius: 0.8rem;
          width: 100%;
          display: block;
          box-shadow: 0 12px 36px rgba(0,0,0,0.15);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
          cursor: zoom-in;
        }
        .final-cover:hover {
          transform: scale(1.06);
          box-shadow: 0 24px 56px rgba(0,0,0,0.22);
        }
      `}</style>
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
            Magazine Design
          </p>
          <h1 className="font-bold text-gray-900 leading-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>
            Beyond The{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: pink, fontStyle: 'italic', fontWeight: 400 }}>Letter</em>
          </h1>
          <p className="text-gray-500 mx-auto" style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, maxWidth: '62ch' }}>
            A magazine design created in Adobe InDesign for the <em>Design Through The Decades</em> journal,
            featuring typographer Craig Ward. The project blends research, layout, and typography to reflect
            his experimental approach to design.
          </p>
        </div>

        {/* ── Meta strip ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '24px 32px',
            padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 44px)',
            background: '#fdf8f5',
            borderRadius: '1.2rem',
            borderTop: `3px solid ${accent}`,
          }}>
            <div>
              <SectionLabel>Timeline</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Sept 2025 – Dec 2025</p>
            </div>
            <div>
              <SectionLabel>Role</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Visual Designer</p>
            </div>
            <div>
              <SectionLabel>Tools Used</SectionLabel>
              <p className="text-gray-700" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Adobe InDesign<br />Adobe Illustrator<br />Adobe Photoshop
              </p>
            </div>
            <div>
              <SectionLabel>Deliverables</SectionLabel>
              <p className="text-gray-700" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Printed Magazine<br />Online PDF
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
                Designing a magazine that{' '}
                <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
                  speaks through type
                </em>
              </h2>
            </div>
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                For this project, I designed a condensed magazine for the <em>Design Through The Decades</em> journal,
                featuring my article on Craig Ward, a New York-based designer known for his experimental and artistic
                approach to typography. Ward transforms words into visual art, blending science, materials, and design
                to make type expressive and meaningful.
              </p>
              <p>
                Using Adobe InDesign, I created a professional magazine layout that highlights his innovative work.
                The project applied skills in typographic hierarchy, grid systems, and layout design, reflecting
                real-world editorial standards and demonstrating how thoughtful design can bring written content to
                life visually.
              </p>
            </div>
          </div>
        </div>

        {/* ── Hero cover image ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <img
            src="/magazine 1.png"
            alt="Beyond The Letter magazine cover"
            style={{ width: '100%', borderRadius: '0.8rem', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
          />
        </div>


        {/* ── Process ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-0">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-12" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              How it came together
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mb-14">
              <div style={{ background: '#fff', borderRadius: '1rem', padding: '32px 28px', borderTop: `3px solid ${accent}`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 12 }}>01 — RESEARCH</p>
                <p style={{ color: '#666', fontSize: 'clamp(14px, 1.8vw, 15px)', lineHeight: 1.85 }}>
                  I began with extensive research and content organization, gathering verified information about
                  Craig Ward's life, projects, and design methods. Next, I developed moodboards and sketches to
                  explore layout options inspired by Ward's bold, text-based compositions.
                </p>
              </div>
              <div style={{ background: '#fff', borderRadius: '1rem', padding: '32px 28px', borderTop: `3px solid ${pink}`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: pink, marginBottom: 12 }}>02 — DESIGN & REFINE</p>
                <p style={{ color: '#666', fontSize: 'clamp(14px, 1.8vw, 15px)', lineHeight: 1.85 }}>
                  Using InDesign, I applied typographic hierarchy, grid structures, and consistent alignment to
                  create flow across pages. I then refined the design through peer critiques and instructor feedback,
                  adjusting type sizes, image placement, and spacing for better readability and balance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Challenges ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(20px, 4vw, 36px) 0 clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Challenges Faced</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              What pushed me to grow
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                'Conducting deep and accurate research on Craig Ward.',
                'Selecting relevant and credible information for the article.',
                'Translating research into a visually engaging magazine layout.',
                'Balancing creativity with readability and structure.',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '20px 24px', background: '#fff', borderRadius: '0.8rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${accent}, ${pink})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#fff' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ color: '#555', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Logo Design ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Logo Design</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Design Through{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>the Decades</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                For the <em>Design Through the Decades</em> magazine, I created a custom logo that reflects the
                publication's mix of history, typography, and modern design. I began by sketching 10 different logo
                concepts on tracing paper, experimenting with various typefaces, lettering styles, and compositions
                to explore a wide range of visual directions.
              </p>
              <p>
                After reviewing the sketches, I selected the strongest concept and refined it digitally, focusing on
                contrast, alignment, and typographic character. The final logo combines bold serif and script elements
                to represent both the timelessness of design history and the dynamic storytelling of the journal.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <img src="/magazine 3.avif" alt="Logo concepts" style={{ width: '100%', display: 'block', borderRadius: '0.8rem', boxShadow: '0 8px 28px rgba(0,0,0,0.1)' }} />
              <img src="/magazine 4.png" alt="Logo concepts" style={{ width: '100%', display: 'block', borderRadius: '0.8rem', boxShadow: '0 8px 28px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>

        {/* ── Cover Exploration ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Magazine Cover Exploration</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Five directions, one vision
            </h2>
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, marginBottom: 48 }}>
              <p style={{ marginBottom: 20 }}>
                Along with the interior layout, I explored multiple cover design directions for the magazine.
                I created five different cover concepts, each using a unique grid system, visual style, and
                aesthetic — while keeping the core content consistent. This allowed me to experiment with
                hierarchy, imagery, and typography to see which approach best represented Craig Ward's
                experimental design philosophy.
              </p>
              <p>
                After developing the variations, I gathered feedback from peers and people around me to understand
                which cover communicated the concept most effectively. Based on this input, I selected the strongest
                design and refined it further for the final magazine.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-3">
                {['Magazine5.png', 'Magazine7.png', 'Magazine9.png'].map((src, i) => (
                  <img key={i} src={`/${src}`} alt={`Cover concept ${i + 1}`}
                    style={{ width: '100%', display: 'block', borderRadius: '0.6rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ alignItems: 'start' }}>
                <img src="/Magazine8.png" alt="Cover concept 4"
                  style={{ width: '100%', display: 'block', borderRadius: '0.6rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }} />
                <div style={{ position: 'relative' }}>
                  <img src="/Magazine66.png" alt="Final cover — selected design"
                    className="final-cover" />
                  <span style={{
                    position: 'absolute', top: 10, right: 10,
                    background: `linear-gradient(135deg, ${accent}, ${pink})`,
                    color: '#fff', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '4px 10px', borderRadius: '20px',
                  }}>Final ✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Designs ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <SectionLabel>Designs</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-16" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Inside the{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>magazine</em>
          </h2>

          {/* Design aspects */}
          {[
            {
              num: '01',
              label: 'Grid System',
              text: 'The layout mainly follows a modular grid for consistency, with asymmetrical variations to add contrast and keep pages visually dynamic.',
              images: [{ src: '/Magazine11.avif', caption: '' }],
            },
            {
              num: '02',
              label: 'Typography',
              text: 'Headlines use a bold sans-serif, while body text uses a clean serif, creating clear hierarchy and rhythm within a minimalist, editorial style.',
              images: [{ src: '/Magazine12.png', caption: '' }],
            },
            {
              num: '03',
              label: 'Minimalism & Aesthetic',
              text: 'The magazine follows a minimalist style with white space and muted tones, keeping focus on Ward\'s visuals and the text\'s meaning.',
              images: [{ src: '/Magazine13.png', caption: '' }],
            },
          ].map((item, i) => (
            <div key={i} style={{ borderTop: '1px solid #f0ece8', paddingTop: 32, marginBottom: 40 }}>
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-6 md:gap-10" style={{ alignItems: 'start' }}>
                {/* Left: number + label + text */}
                <div>
                  <p style={{ fontSize: 12, color: '#ccc', fontWeight: 700, letterSpacing: '0.2em', marginBottom: 8 }}>{item.num}</p>
                  <p style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 14 }}>{item.label}</p>
                  <p style={{ fontSize: 15, color: '#999', lineHeight: 1.85 }}>{item.text}</p>
                </div>
                {/* Right: images or placeholder note */}
                <div>
                  {item.images.length > 0 ? (
                    <div style={{ display: 'flex', gap: 12 }}>
                      {item.images.map((img, j) => (
                        <div key={j} style={{ flex: 1 }}>
                          <img src={img.src} alt={img.caption}
                            style={{ width: 'clamp(50%, 40%, 40%)', display: 'block', borderRadius: '0.8rem', boxShadow: '0 8px 28px rgba(0,0,0,0.1)', marginLeft: 'auto' }} />
                          {img.caption && <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', marginTop: 8, letterSpacing: '0.04em' }}>{img.caption}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ height: 200, borderRadius: '0.8rem', background: 'linear-gradient(145deg, #fdf0e8, #fce8e9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <p style={{ fontFamily: '"Caveat", cursive', fontSize: 15, color: 'rgba(249,166,108,0.5)' }}>Images coming soon ✦</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Flipbook ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Browse the Magazine</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Flip through the{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>pages</em>
            </h2>
            <p style={{ color: '#aaa', fontSize: 14, marginBottom: 48, fontFamily: '"Caveat", cursive', fontSize: 17 }}>
              click the page edges or use the arrows to turn pages ✦
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
              <HTMLFlipBook
                width={flipbookWidth}
                height={flipbookHeight}
                size="fixed"
                showCover={true}
                mobileScrollSupport={true}
                onFlip={(e) => setCurrentPage(e.data)}
                ref={flipRef}
                style={{ boxShadow: '0 24px 72px rgba(0,0,0,0.18)' }}
                className="flip-book"
              >
                {magazinePages.map((page, i) => (
                  <div key={i} style={{ width: '100%', height: '100%', background: '#fff', overflow: 'hidden' }}>
                    <img
                      src={page.src}
                      alt={page.label}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                ))}
              </HTMLFlipBook>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <button
                  onClick={() => flipRef.current?.pageFlip().flipPrev()}
                  style={{
                    width: 46, height: 46, borderRadius: '50%',
                    border: '1.5px solid #e8e0d8', background: '#fff',
                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 20, color: '#888',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e0d8'; e.currentTarget.style.color = '#888'; }}
                >←</button>

                <p style={{ fontSize: 13, color: '#bbb', minWidth: 90, textAlign: 'center', letterSpacing: '0.06em' }}>
                  {currentPage + 1} / {magazinePages.length}
                </p>

                <button
                  onClick={() => flipRef.current?.pageFlip().flipNext()}
                  style={{
                    width: 46, height: 46, borderRadius: '50%',
                    border: '1.5px solid #e8e0d8', background: '#fff',
                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 20, color: '#888',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e0d8'; e.currentTarget.style.color = '#888'; }}
                >→</button>
              </div>

              {/* Page label */}
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: '#ccc', letterSpacing: '0.04em' }}>
                {magazinePages[currentPage]?.label}
              </p>
            </div>
          </div>
        </div>

        {/* ── Results & Reflection ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Results</SectionLabel>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                The finished magazine effectively communicated both the content and visual essence of Craig Ward's work.
                It received positive feedback for its clarity, structure, and professional finish, successfully bridging
                research and design execution. The final design demonstrated my ability to handle complex editorial
                projects with attention to accuracy, aesthetics, and usability.
              </p>
            </div>
            <div>
              <SectionLabel>Reflection</SectionLabel>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                This project taught me how to combine research, design thinking, and technical execution into one
                cohesive outcome. I learned the importance of aligning visual style with content meaning, maintaining
                consistency through grids and hierarchy, and balancing creativity with readability. Overall, it was a
                strong exercise in editorial design and professional presentation, preparing me for real-world publishing
                and design communication challenges.
              </p>
            </div>
          </div>
        </div>

        {/* ── Craig Ward Noticed ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(22px, 3vw, 30px)', color: accent, marginBottom: 8 }}>
              and then something unexpected happened ✦
            </p>
            <p style={{ color: '#888', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.7, maxWidth: '60ch', margin: '0 auto' }}>
              I posted my magazine on LinkedIn — and Craig Ward himself saw it. He commented on my post and even reached out in a personal DM.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* LinkedIn Comment */}
            <div style={{
              background: '#fff',
              borderRadius: '4px',
              padding: '16px 16px 48px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              transform: 'rotate(-2.5deg)',
              maxWidth: '320px',
              width: '100%',
              transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              cursor: 'default',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-2.5deg)'}
            >
              <img src="/craig1.png" alt="Craig Ward LinkedIn comment" style={{ width: '100%', display: 'block', borderRadius: '2px' }} />
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: 17, color: '#888', textAlign: 'center', marginTop: 16, lineHeight: 1.4 }}>
                his comment on my LinkedIn post
              </p>
            </div>

            {/* Personal DM */}
            <div style={{
              background: '#fff',
              borderRadius: '4px',
              padding: '16px 16px 48px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              transform: 'rotate(2deg)',
              maxWidth: '320px',
              width: '100%',
              transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              cursor: 'default',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(2deg)'}
            >
              <img src="/craig2.png" alt="Craig Ward personal DM" style={{ width: '100%', display: 'block', borderRadius: '2px' }} />
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: 17, color: '#888', textAlign: 'center', marginTop: 16, lineHeight: 1.4 }}>
                he even texted me personally
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
