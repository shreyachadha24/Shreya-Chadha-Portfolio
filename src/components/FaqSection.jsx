import { useState, useRef } from 'react';

const faqs = [
  {
    q: 'What makes you stand out?',
    a: "I'm someone who notices the small details others often miss and turns them into ideas that actually mean something. I bring a mix of curiosity, empathy, and a fresh way of looking at problems.",
  },
  {
    q: 'What do you need from me to get started?',
    a: "A brief detailing your goals, target audience, any existing brand assets, and examples of styles you like. If you don't have this, we can figure it out together during a discovery call.",
  },
  {
    q: 'Which design tools do you use?',
    a: "I primarily work with Adobe Photoshop, Illustrator, InDesign, and Figma for my design projects. I also have basic knowledge of After Effects and can handle simple motion graphics or animations. I'm comfortable adapting to new tools as needed.",
  },
  {
    q: 'Are you open to working on projects?',
    a: "I'm always open to discussing new projects, ideas, and work commitments. If you have something in mind, I'd love to connect and explore it with you.",
  },
  {
    q: "What's the best way to reach you?",
    a: 'Email is best! You can reach me at chadhashreya8@gmail.com. I usually reply within 24-48 hours.',
  },
];

function AccordionItem({ q, a, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div
      style={{
        borderRadius: '1.2rem',
        overflow: 'hidden',
        border: isOpen ? '1px solid rgba(249,166,108,0.3)' : '1px solid #f0ece8',
        transition: 'border-color 0.3s ease',
        background: '#fff',
      }}
    >
      <button
        style={{
          width: '100%',
          padding: '22px 28px',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={onToggle}
      >
        <h3 style={{
          fontSize: 16,
          fontWeight: 600,
          color: isOpen ? '#F9A66C' : '#1a1a1a',
          transition: 'color 0.3s ease',
          margin: 0,
        }}>{q}</h3>
        <div style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isOpen ? 'linear-gradient(135deg, #F9A66C, #F17A7E)' : '#f5f2ef',
          color: isOpen ? '#fff' : '#888',
          transition: 'all 0.3s ease',
          flexShrink: 0,
          fontSize: 18,
          lineHeight: 1,
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</div>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? '200px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
          padding: isOpen ? '0 28px 22px' : '0 28px',
        }}
      >
        <p style={{ fontSize: 14, color: '#888', lineHeight: 1.75, margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pt-0 pb-4 md:pb-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header — matches other sections */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}>
            Common{' '}
            <em style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#F9A66C',
              fontStyle: 'italic',
              fontWeight: 400,
            }}>
              Questions ✦
            </em>
          </h2>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: '#888',
            letterSpacing: '0.02em',
          }}>
            everything you might want to know before we work together
          </p>
        </div>

        {/* Two-column layout */}
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>

          {/* Left: sticky info */}
          <div className="faq-sticky-col" style={{ position: 'sticky', top: 120 }}>

            <p style={{ fontSize: 'clamp(13px, 2vw, 15px)', color: '#aaa', lineHeight: 1.8, marginBottom: 32 }}>
              Answers to common questions to help you understand{' '}
              <span style={{ color: '#F9A66C', fontWeight: 600 }}>the process and how we can work together.</span>
            </p>

            {/* Quick stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {[
                { label: 'Response time', value: 'Within 24–48 hrs' },
                { label: 'Availability', value: 'Open to work ✦' },
                { label: 'Based in', value: 'United States' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #f0ece8',
                }}>
                  <span style={{ fontSize: 12, color: '#888', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: '#555', fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:chadhashreya8@gmail.com"
              className="interactive"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #F9A66C, #F17A7E)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(249,166,108,0.35)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Email Me ✦
            </a>
          </div>

          {/* Right: accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
