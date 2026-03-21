import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    const onMouseMove = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      outline.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 500, fill: 'forwards' }
      );
    };

    window.addEventListener('mousemove', onMouseMove);

    const selector = 'a, button, input, textarea, .interactive';

    const onMouseOver = (e) => {
      if (e.target.closest(selector)) {
        document.body.classList.add('hovering-link');
      }
    };

    const onMouseOut = (e) => {
      if (!e.relatedTarget?.closest(selector)) {
        document.body.classList.remove('hovering-link');
      }
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-outline" />
    </>
  );
}
