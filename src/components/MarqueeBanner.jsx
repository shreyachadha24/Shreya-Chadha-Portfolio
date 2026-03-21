const items = [
  { text: "Designing today, probably rearranging my workspace tomorrow.", type: "normal", icon: "🎨" },
  { text: "✦", type: "sep" },
  { text: "branding  ·  UI/UX  ·  editorial  ·  campaigns  ·  visual", type: "tags", icon: "💼" },
  { text: "✦", type: "sep" },
  { text: "turning ideas into beautiful, user-friendly magic.", type: "normal", icon: "✨" },
  { text: "✦", type: "sep" },
  { text: "Arizona State University  ·  Masters in User Experience", type: "tags", icon: "🎓" },
  { text: "✦", type: "sep" },
  { text: "open to internships & co-op", type: "highlight", icon: "👋" },
  { text: "✦", type: "sep" },
  { text: "Figma  ·  Illustrator  ·  InDesign  ·  Photoshop", type: "tags", icon: "🖥️" },
  { text: "✦", type: "sep" },
  { text: "design with empathy, ship with intention.", type: "normal", icon: "💡" },
  { text: "✦", type: "sep" },
];

const renderItem = (item, key) => {
  if (item.type === "sep") {
    return <span key={key} style={{ color: '#e0d8d0', margin: '0 32px', fontSize: 16, flexShrink: 0, display: 'inline-block' }}>✦</span>;
  }
  if (item.type === "tags") {
    return (
      <span key={key} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0, whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: 14 }}>{item.icon}</span>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8c0b8' }}>{item.text}</span>
      </span>
    );
  }
  if (item.type === "highlight") {
    return (
      <span key={key} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0, whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: 14 }}>{item.icon}</span>
        <span style={{
          fontSize: 14, fontWeight: 600,
          background: 'linear-gradient(90deg, #F9A66C, #F17A7E)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', fontStyle: 'italic',
        }}>{item.text}</span>
      </span>
    );
  }
  return (
    <span key={key} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0, whiteSpace: 'nowrap' }}>
      <span style={{ fontSize: 14 }}>{item.icon}</span>
      <span style={{ fontSize: 14, fontWeight: 500, color: '#aaa', fontStyle: 'italic', letterSpacing: '0.02em' }}>{item.text}</span>
    </span>
  );
};

export default function MarqueeBanner() {
  return (
    <div className="w-full border-y border-gray-100 bg-white py-5" style={{ overflow: 'hidden' }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        animation: 'marquee 35s linear infinite',
        willChange: 'transform',
      }}>
        {items.flatMap((item, i) => [renderItem(item, `a-${i}`)])}
        {items.flatMap((item, i) => [renderItem(item, `b-${i}`)])}
      </div>
    </div>
  );
}
