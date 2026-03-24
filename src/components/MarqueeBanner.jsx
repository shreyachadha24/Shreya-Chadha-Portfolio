const items = [
  { text: "Figma", type: "tags" },
  { text: "✦", type: "sep" },
  { text: "Adobe Illustrator", type: "tags" },
  { text: "✦", type: "sep" },
  { text: "Adobe InDesign", type: "tags" },
  { text: "✦", type: "sep" },
  { text: "Adobe Photoshop", type: "tags" },
  { text: "✦", type: "sep" },
  { text: "Adobe After Effects", type: "tags" },
  { text: "✦", type: "sep" },
  { text: "Miro", type: "tags" },
  { text: "✦", type: "sep" },
  { text: "Notion", type: "tags" },
  { text: "✦", type: "sep" },
  { text: "Microsoft Office", type: "tags" },
  { text: "✦", type: "sep" },
];

const renderItem = (item, key) => {
  if (item.type === "sep") {
    return <span key={key} style={{ color: '#e0d8d0', margin: '0 32px', fontSize: 16, flexShrink: 0, display: 'inline-block' }}>✦</span>;
  }
  if (item.type === "tags") {
    return (
      <span key={key} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'linear-gradient(90deg, #F9A66C, #F17A7E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.text}</span>
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
