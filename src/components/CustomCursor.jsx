import { useEffect } from 'react';

const COLORS = ['#F9A66C', '#F17A7E', '#f9b8ba', '#a78bfa', '#8B5CF6'];

function spawnDot(x, y) {
  const el = document.createElement('div');
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const size = 10 + Math.random() * 10;

  Object.assign(el.style, {
    position: 'fixed',
    left: `${x}px`,
    top: `${y}px`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: color,
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: '0.9',
    willChange: 'transform, opacity',
  });

  document.body.appendChild(el);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
      el.style.transform = 'translate(-50%, -50%) scale(0)';
      el.style.opacity = '0';
    });
  });

  setTimeout(() => el.remove(), 550);
}

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    let lastSparkle = 0;

    const onMouseMove = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;

      const now = Date.now();
      if (now - lastSparkle > 55) {
        spawnDot(e.clientX, e.clientY);
        lastSparkle = now;
      }
    };

    const selector = 'a, button, input, textarea, .interactive';
    const onMouseOver = (e) => { if (e.target.closest(selector)) document.body.classList.add('hovering-link'); };
    const onMouseOut  = (e) => { if (!e.relatedTarget?.closest(selector)) document.body.classList.remove('hovering-link'); };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return <div id="cursor-dot" />;
}
