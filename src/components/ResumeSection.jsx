import { useState } from 'react';

const accent = '#F9A66C';
const pink   = '#F17A7E';

const experience = [
  { title: 'Visual Designer & Project Manager', place: 'The GIT Creative Agency, USA', period: 'Jan 2026 – Present' },
  { title: 'Visual Designer', place: 'Arizona State University (Work+ Learn), USA', period: 'Aug 2025 – Present' },
  { title: 'Visual Design Intern', place: 'Suroskie Beauty, India', period: 'Jan 2025 – June 2025' },
  { title: 'UI/UX Design Intern', place: 'Grapes Worldwide, India', period: 'May 2024 – July 2024' },
];

const education = [
  { title: 'Arizona State University, Arizona', sub: 'Master of Science in User Experience', period: 'Expected: 12/2026' },
  { title: 'Sharda University, India', sub: 'Bachelor of Design in Communication Design', period: 'Graduation: 2025' },
];

const certifications = [
  { title: 'Foundations of User Experience (UX) Design', issuer: 'Google' },
];

// Each skill/tool maps to the projects that used it
const skillProjects = {
  'User Interface Design':  ['EchoTouch', 'Work+'],
  'Graphic Design':  ['Suroskie Beauty', 'Every Girl, A Bright Future', 'Beyond The Letter'],
  'Wireframing':     ['EchoTouch'],
  'Photo Editing':   ['Suroskie Beauty', 'Work+', 'Beyond The Letter'],
  'User Flows':      ['EchoTouch'],
  'Visual Design':   ['Suroskie Beauty', 'Beyond The Letter', 'Work+', 'Every Girl, A Bright Future'],
  'Storyboarding':   ['Every Girl, A Bright Future'],
  'Accessibility':   ['EchoTouch'],
  'User Research':   ['EchoTouch', 'Every Girl, A Bright Future'],
  'Communication':   ['Every Girl, A Bright Future', 'Work+', 'Suroskie Beauty'],
  'Typography':      ['Beyond The Letter', 'Work+', 'Every Girl, A Bright Future'],
  'Composition':     ['Beyond The Letter', 'Suroskie Beauty', 'Every Girl, A Bright Future'],
  'Collaborative':   ['Work+', 'Suroskie Beauty'],
  'Creative':        ['EchoTouch', 'Suroskie Beauty', 'Beyond The Letter', 'Every Girl, A Bright Future', 'Work+'],
  'Detail-Oriented': ['EchoTouch', 'Beyond The Letter', 'Every Girl, A Bright Future'],
};

const toolProjects = {
  'Figma':                 ['EchoTouch', 'Work+'],
  'Adobe Illustrator':     ['Suroskie Beauty', 'Beyond The Letter', 'Every Girl, A Bright Future', 'Work+'],
  'Adobe Photoshop':       ['Suroskie Beauty', 'Work+'],
  'Adobe InDesign':        ['Beyond The Letter'],
  'Adobe After Effects':   ['EchoTouch'],
  'Miro Board':            ['Work+'],
  'Monday Board':          ['Work+'],
  'Slack':                 ['Work+'],
};

// Project accent colours for the pill badges in tooltip
const projectColor = {
  'EchoTouch':          '#667eea',
  'Work+':              '#8B5CF6',
  'Every Girl, A Bright Future':         '#2c5364',
  'Suroskie Beauty':    '#F9A66C',
  'Beyond The Letter':  '#F17A7E',
};

function SkillTag({ label, projects }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* Tooltip */}
      {hovered && projects && projects.length > 0 && (
        <span style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#fff',
          borderRadius: '14px',
          padding: '10px 14px',
          zIndex: 999,
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 28px rgba(249,166,108,0.18), 0 2px 8px rgba(0,0,0,0.07)',
          border: '1px solid #f0ece8',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          minWidth: '140px',
        }}>
          {/* Arrow */}
          <span style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #f0ece8',
          }} />
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: accent,
            marginBottom: 2,
          }}>Used in</span>
          {projects.map((p, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: projectColor[p] || accent,
                flexShrink: 0,
              }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: '#444' }}>{p}</span>
            </span>
          ))}
        </span>
      )}

      {/* The tag itself */}
      <span
        style={{
          fontSize: 13, fontWeight: 500, color: hovered ? '#fff' : '#555',
          background: hovered ? `linear-gradient(135deg, ${accent}, ${pink})` : '#fff',
          border: hovered ? '1px solid transparent' : '1px solid #f0ece8',
          borderRadius: '20px', padding: '6px 14px',
          cursor: 'default',
          transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          display: 'inline-block',
          transform: hovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
          boxShadow: hovered ? '0 6px 18px rgba(249,166,108,0.35)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </span>
    </span>
  );
}

function Block({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: accent,
        }}>{title}</p>
        <div style={{ flex: 1, height: 1, background: '#f0ece8' }} />
      </div>
      {children}
    </div>
  );
}

export default function ResumeSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-36 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
            Here's a{' '}
            <em style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: accent,
              fontStyle: 'italic',
              fontWeight: 400,
            }}>quick look ✦</em>
          </h2>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: '#888',
            letterSpacing: '0.02em',
          }}>if you haven't gone through my resume yet —</p>
        </div>

        {/* Top: Experience + Education */}
        <div className="grid md:grid-cols-2 gap-12 mb-4">

          {/* Experience */}
          <div>
            <Block title="Experience">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {experience.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0, width: 8, height: 8, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${accent}, ${pink})`,
                      marginTop: 7,
                    }} />
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 3 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{item.place} | {item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>
          </div>

          {/* Education + Certifications */}
          <div>
            <Block title="Education">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {education.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0, width: 8, height: 8, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${accent}, ${pink})`,
                      marginTop: 7,
                    }} />
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 3 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{item.sub} | {item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Certifications">
              {certifications.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0, width: 8, height: 8, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${accent}, ${pink})`,
                    marginTop: 7,
                  }} />
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 3 }}>{item.title}</p>
                    <p style={{ fontSize: 13, color: '#888' }}>{item.issuer}</p>
                  </div>
                </div>
              ))}
            </Block>
          </div>
        </div>

        {/* Bottom: Skills + Tools */}
        <div style={{ background: '#fdf8f5', borderRadius: '1.5rem', padding: '40px 48px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
          <div className="grid md:grid-cols-2 gap-12">

            {/* Skills */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>Skills</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {Object.keys(skillProjects).map((s, i) => (
                  <SkillTag key={i} label={s} projects={skillProjects[s]} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>Tools & Software</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {Object.keys(toolProjects).map((t, i) => (
                  <SkillTag key={i} label={t} projects={toolProjects[t]} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
