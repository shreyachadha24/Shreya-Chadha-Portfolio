import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: accent,
      marginBottom: 14,
    }}>{children}</p>
  );
}

function PDFViewer({ accent, pink }) {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(780);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setContainerWidth(Math.min(w - 0, 780));
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
          <p style={{ color: '#fff', fontSize: 'clamp(11px, 3vw, 13px)', fontWeight: 600, letterSpacing: '0.02em' }}>Product Page — UI Design</p>
        </div>
        <a
          href="/sur productpage.pdf"
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

      {/* Scrollable box — fixed height, all pages stacked inside */}
      <div style={{
        height: 'clamp(400px, 70vh, 680px)',
        overflowY: 'scroll',
        overflowX: 'hidden',
        background: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '24px 0',
        scrollbarWidth: 'thin',
        scrollbarColor: `${accent} #f0ece8`,
      }}>
        <Document
          file="/sur productpage.pdf"
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

export default function SuroskieBeauty() {
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

      {/* Cursor blob */}
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
            Visual Design · Internship
          </p>
          <h1 className="font-bold text-gray-900 leading-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
            Suroskie{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>Beauty</em>
          </h1>
          <p className="text-gray-500 mx-auto" style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, maxWidth: '72ch' }}>
            A visual design internship at Suroskie Beauty — a growing beauty brand — where I created social media
            graphics, website banners, and UI design to strengthen the brand's digital presence.
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
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Jan 2025 – June 2025</p>
            </div>
            <div>
              <SectionLabel>Role</SectionLabel>
              <p className="text-gray-700 font-medium" style={{ fontSize: 15 }}>Visual Design Intern</p>
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
                Social Media Graphics<br />Website Banners<br />Website UI Design<br />Meta Ad Creatives
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
                <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>sells beauty</em>
              </h2>
            </div>
            <div style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                During my internship at Suroskie Beauty, I worked as a Visual Designer responsible for creating
                a wide range of digital assets to support the brand's online presence. The work spanned social
                media content, website banners, and UI design — all crafted to reflect the brand's identity
                and connect with its audience.
              </p>
              <p>
                Every piece was designed with a focus on consistency, visual appeal, and clear communication —
                ensuring the brand looked polished and professional across all digital touchpoints.
              </p>
            </div>
          </div>
        </div>

        {/* ── Social Media Graphics ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Social Media Graphics</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              From hype to{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>launch ✦</em>
            </h2>
            {/* Side by side layout — stacks on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

              {/* Left — text + highlights */}
              <div>
                <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, marginBottom: 32 }}>
                  Planned and executed Suroskie Beauty's body scrub launch on Instagram — from pre-launch hype
                  to the full grid reveal. One of their best-performing launches, with a significant increase in sales.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'Pre-launch Hype', desc: 'Teaser content to build anticipation before the drop' },
                    { label: 'Launch Day',       desc: 'A cohesive grid reveal for the new body scrub range' },
                    { label: 'Sales Increased',  desc: 'One of Suroskie Beauty\'s best-performing launches' },
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

                {/* Founder note — small, tucked below */}
                <div style={{ marginTop: 28, display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{
                    position: 'relative',
                    width: 'clamp(160px, 50vw, 220px)',
                    flexShrink: 0,
                    transform: 'rotate(-1.5deg)',
                    transition: 'transform 0.3s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-1.5deg)'}
                  >
                    <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', width: 32, height: 14, borderRadius: 3, background: 'rgba(249,166,108,0.4)', zIndex: 2 }} />
                    <div style={{ background: '#fffdf5', borderRadius: '0.4rem', boxShadow: '0 4px 16px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
                      <img src="/sur15.jpg" alt="Founder feedback" style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <p style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: '#aaa', lineHeight: 1.6, marginTop: 8 }}>
                    — Puneet Bansal,<br />Founder · Suroskie Beauty
                  </p>
                </div>
              </div>

              {/* Right — image */}
              <div style={{ position: 'relative' }}>
                <style>{`
                  @keyframes floatGrid {
                    0%, 100% { transform: rotate(-0.8deg) translateY(0px); }
                    50%       { transform: rotate(-0.8deg) translateY(-10px); }
                  }
                  .sur1-wrap {
                    animation: floatGrid 4s ease-in-out infinite;
                  }
                  .sur1-wrap:hover {
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
                  April — Instagram Grid
                </div>
                <div className="sur1-wrap" style={{ borderRadius: '1.2rem', overflow: 'hidden' }}>
                  <img
                    src="/sur1.png"
                    alt="Suroskie Beauty April Instagram Grid — Body Scrub Launch"
                    style={{ width: '100%', display: 'block', mixBlendMode: 'multiply' }}
                  />
                </div>
              </div>

            </div>

          </div>


        </div>

        {/* ── Website Banners ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-16 md:mb-28">
          <SectionLabel>Website Banners</SectionLabel>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Bold visuals for the{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>digital storefront</em>
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
            Created hero banners and promotional banners for the Suroskie Beauty website — designed to capture
            attention instantly, highlight key products, and drive conversions. Each banner balanced brand
            aesthetics with clear calls to action.
          </p>
          {/* Banner grid */}
          <style>{`
            .banner-item { position: relative; border-radius: 1rem; overflow: hidden; cursor: pointer; box-shadow: 0 8px 32px rgba(249,166,108,0.15); }
            .banner-item img { width: 100%; display: block; transition: transform 0.5s ease; }
            .banner-item:hover img { transform: scale(1.06); }
            .banner-overlay {
              position: absolute; inset: 0;
              background: linear-gradient(to top, rgba(249,166,108,0.55) 0%, transparent 60%);
              opacity: 0; transition: opacity 0.4s ease;
              display: flex; align-items: flex-end; padding: 20px 24px;
            }
            .banner-item:hover .banner-overlay { opacity: 1; }
            .banner-overlay p { color: #fff; font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
          `}</style>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* First banner — full width */}
            <div className="banner-item">
              <img src="/sur2.png" alt="Suroskie Beauty website banner 1" />
              <div className="banner-overlay"><p>Banner 01</p></div>
            </div>

            {/* Next two — side by side on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {['sur5.png', 'sur4.png'].map((src, i) => (
                <div key={i} className="banner-item">
                  <img src={`/${src}`} alt={`Suroskie Beauty website banner ${i + 2}`} />
                  <div className="banner-overlay"><p>Banner 0{i + 2}</p></div>
                </div>
              ))}
            </div>

            {/* Last banner — full width */}
            <div className="banner-item">
              <img src="/sur3.png" alt="Suroskie Beauty website banner 4" />
              <div className="banner-overlay"><p>Banner 04</p></div>
            </div>
          </div>
        </div>

        {/* ── Website UI Design ── */}
        <div style={{ background: '#fdf8f5', padding: 'clamp(40px, 8vw, 80px) 0' }} className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <SectionLabel>Website UI Design</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              A seamless{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>shopping experience</em>
            </h2>
            <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch', marginBottom: 40 }}>
              Designed the product page UI for Suroskie Beauty — creating a clean, visually appealing layout
              that showcases their products effectively and gives customers a seamless browsing experience.
            </p>
            {/* PDF Viewer */}
            <PDFViewer accent={accent} pink={pink} />
          </div>
        </div>

        {/* ── Meta Ad Creatives ── */}
        <div className="mb-16 md:mb-28">
          <div className="px-6 md:px-20 max-w-5xl mx-auto mb-12">
            <SectionLabel>Meta Ad Creatives</SectionLabel>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Ads designed to{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>convert</em>
            </h2>
            <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9, maxWidth: '72ch' }}>
              Designed a set of Meta ad creatives (Facebook & Instagram) for Suroskie Beauty — combining
              compelling visuals with clear messaging to drive awareness and conversions. Each creative was
              tailored to platform-specific formats while staying true to the brand's visual identity.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="px-6 md:px-20 max-w-5xl mx-auto">
            <style>{`
              .masonry { columns: 1; column-gap: 16px; }
              @media (min-width: 480px) { .masonry { columns: 2; } }
              @media (min-width: 768px) { .masonry { columns: 3; } }
              .masonry-item { break-inside: avoid; margin-bottom: 16px; border-radius: 0.8rem; overflow: hidden; cursor: pointer; }
              .masonry-item img { width: 100%; display: block; transition: transform 0.4s ease; }
              .masonry-item:hover img { transform: scale(1.04); }
            `}</style>
            <div className="masonry">
              {['sur6','sur7','sur8','sur9','sur10','sur11','sur12','sur13','sur14'].map((s, i) => (
                <div key={i} className="masonry-item" style={{ boxShadow: '0 6px 24px rgba(249,166,108,0.12)' }}>
                  <img src={`/${s}.png`} alt={`Meta ad creative ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Results & Reflection ── */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Results</SectionLabel>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                The visual assets I created contributed to a more consistent and polished brand presence for
                Suroskie Beauty across digital platforms. The social media graphics improved engagement, the
                website banners strengthened the brand's online storefront, and the UI work helped deliver
                a cleaner, more professional user experience.
              </p>
            </div>
            <div>
              <SectionLabel>Reflection</SectionLabel>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.9 }}>
                This internship gave me hands-on experience working within an active brand environment — balancing
                creative freedom with brand guidelines and real deadlines. I strengthened my skills in Illustrator,
                Photoshop, and Figma, and learned how to design with both aesthetics and business goals in mind.
                It was a valuable step in understanding how design functions in a commercial, product-driven context.
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
