import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import CustomCursor from '../components/CustomCursor';
import ProjectNav from '../components/ProjectNav';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

const tilts = [-2.5, 1.8, -1.2, 2.2];

function WorkCard({ src, label, tilt }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'rotate(0deg) scale(1.04) translateY(-6px)' : `rotate(${tilt}deg) scale(1)`,
        transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
        borderRadius: '1.2rem', overflow: 'hidden',
        boxShadow: hovered ? '0 24px 48px rgba(0,0,0,0.14)' : '0 6px 20px rgba(0,0,0,0.08)',
        cursor: 'default', position: 'relative',
      }}
    >
      <img src={src} alt={label} style={{ width: '100%', display: 'block' }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(0deg, rgba(0,0,0,0.52) 0%, transparent 100%)',
        padding: '24px 16px 14px',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease',
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff' }}>
          {label}
        </span>
      </div>
    </div>
  );
}

function PDFViewer({ file, title, link }) {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(780);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(Math.min(containerRef.current.offsetWidth, 780));
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div ref={containerRef} style={{ borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
      {/* Top bar */}
      <div style={{
        background: `linear-gradient(135deg, ${accent}, ${pink})`,
        padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 16 }}>📄</span>
          <p style={{ color: '#fff', fontSize: 'clamp(11px, 3vw, 13px)', fontWeight: 600, letterSpacing: '0.02em' }}>{title}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff', fontSize: 12, fontWeight: 600,
            background: 'rgba(255,255,255,0.2)', padding: '5px 14px',
            borderRadius: '20px', textDecoration: 'none', letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          Open ↗
        </a>
      </div>

      {/* Scrollable PDF box */}
      <div style={{
        height: 'clamp(400px, 70vh, 640px)',
        overflowY: 'scroll', overflowX: 'hidden',
        background: '#f5f5f5',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 12, padding: '24px 0',
        scrollbarWidth: 'thin', scrollbarColor: `${accent} #f0ece8`,
      }}>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <p style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: 'rgba(249,166,108,0.5)', padding: 40 }}>
              Loading design ✦
            </p>
          }
        >
          {numPages && Array.from({ length: numPages }, (_, i) => (
            <div key={i} style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)', maxWidth: '100%' }}>
              <Page
                pageNumber={i + 1}
                width={containerWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </Document>
      </div>

      {/* Bottom hint */}
      <div style={{ background: '#fff', padding: '12px 24px', textAlign: 'center', borderTop: '1px solid #f0ece8' }}>
        <p style={{ fontFamily: '"Caveat", cursive', fontSize: 15, color: '#bbb' }}>scroll to explore ↓</p>
      </div>
    </div>
  );
}

export default function WorkPlus() {
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
        background: 'radial-gradient(circle, rgba(249,166,108,0.15) 0%, rgba(241,122,126,0.08) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0,
        transition: 'left 0.12s ease, top 0.12s ease', filter: 'blur(8px)',
      }} />

      <ProjectNav />

      <main className="pt-24 md:pt-36 pb-16 md:pb-32" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto text-center mb-20">
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(15px, 2vw, 20px)', color: accent, letterSpacing: '0.06em', marginBottom: 16 }}>
            Visual Design · University
          </p>
          <h1 className="font-bold text-gray-900 leading-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
            Work
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: pink, fontStyle: 'italic', fontWeight: 400 }}>+</em>
          </h1>
          <p className="text-gray-500 mx-auto" style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, maxWidth: '68ch' }}>
            As a part-time Visual Designer at Work+, ASU's student employment program, I create graphics, flyers, social media content, and certificates — all designed to align with Arizona State University's brand guidelines while keeping composition clean and engaging.
          </p>
        </div>

        {/* ── Meta strip ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '24px 32px',
            padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 44px)',
            background: '#fdf8f5', borderRadius: '1.2rem', borderTop: `3px solid ${accent}`,
          }}>
            <div>
              <SectionLabel>Timeline</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Aug 2025 – Present</p>
            </div>
            <div>
              <SectionLabel>Role</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Visual Designer</p>
            </div>
            <div>
              <SectionLabel>Tools Used</SectionLabel>
              <p className="text-gray-700" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Adobe Illustrator<br />Adobe Photoshop<br />Figma
              </p>
            </div>
            <div>
              <SectionLabel>Deliverables</SectionLabel>
              <p className="text-gray-700" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Flyers<br />Social Media Graphics<br />Certificates<br />Website UI Design
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
                Design that{' '}
                <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>communicates</em>
              </h2>
            </div>
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 16 }}>
                At Work+, Arizona State University's student employment department, I work as a part-time Visual Designer creating a range of communication materials that help the team connect with students and staff effectively.
              </p>
              <p>
                Every design follows ASU's strict brand guidelines — from typography and color to layout — while making sure each piece feels fresh, clear, and purposeful.
              </p>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: '#f0ece8', margin: '0 clamp(24px, 5vw, 80px) 64px' }} />

        {/* ── Graphics Section ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <SectionLabel>Visual Work</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            Flyers, Social Media &{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: pink, fontStyle: 'italic', fontWeight: 400 }}>Certificates</em>
          </h2>
          <p className="text-gray-400 mb-12" style={{ fontSize: 15, maxWidth: '58ch', lineHeight: 1.7 }}>
            Designed to follow ASU's brand guidelines — every piece balances strong composition with clear communication.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 2fr 1.4fr',
            gap: '18px', padding: '16px 0 32px', maxWidth: '860px', alignItems: 'center',
          }}>
            <WorkCard src="/work1.png" label="Flyer" tilt={tilts[0]} />
            <WorkCard src="/work2.png" label="Certificate" tilt={tilts[1]} />
            <WorkCard src="/work3.png" label="Social Media" tilt={tilts[2]} />
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: '#f0ece8', margin: '0 clamp(24px, 5vw, 80px) 64px' }} />

        {/* ── Website UI Design ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <SectionLabel>Website UI Design</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            Designed pages for the{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>Work+ website</em>
          </h2>
          <p className="text-gray-400 mb-12" style={{ fontSize: 15, maxWidth: '60ch', lineHeight: 1.7 }}>
            Designed two pages for the official ASU Work+ website — built to align with ASU's brand system while improving clarity and user experience.
          </p>

          {/* PDF 1 — Recognition */}
          <div className="mb-10">
            <p style={{ fontSize: 13, fontWeight: 600, color: '#888', marginBottom: 12, letterSpacing: '0.04em' }}>
              Page 01 — Student Employee & Supervisor of the Year
            </p>
            <PDFViewer
              file="/work5.pdf"
              title="Recognition Page — ASU Work+"
              link="https://workplus.asu.edu/recognition"
            />
          </div>

          {/* PDF 2 — Recognition Year Round */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#888', marginBottom: 12, letterSpacing: '0.04em' }}>
              Page 02 — The Importance of Recognition Year Round
            </p>
            <PDFViewer
              file="/work6.pdf"
              title="Recognition Year Round — ASU Work+"
              link="https://workplus.asu.edu/recognition-year-round"
            />
          </div>
        </div>

        {/* ── More coming soon ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div style={{
            background: 'transparent', borderRadius: '1.5rem',
            padding: 'clamp(32px, 5vw, 56px)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: accent,
              letterSpacing: '0.02em',
              marginBottom: 8,
            }}>more work coming soon ✦</p>
            <p style={{ fontSize: 14, color: '#bbb', lineHeight: 1.7 }}>
              Still creating — check back for more projects from Work+
            </p>
          </div>
        </div>

        {/* ── Footer nav ── */}
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
