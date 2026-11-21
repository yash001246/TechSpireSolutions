import { useEffect, useRef } from 'react';

// A soft cursor follower. It grows over links and shows "View" over project cards.
// Only active on devices with a mouse, and never when reduced motion is requested.
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return undefined;

    const el = ref.current;
    let x = -100;
    let y = -100;
    let tx = -100;
    let ty = -100;
    let raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add('show');
      const target = e.target instanceof Element ? e.target : null;
      const onCard = target && target.closest('.project-visual');
      const onLink = target && target.closest('a, button, summary, select, input, textarea, label');
      el.classList.toggle('view', Boolean(onCard));
      el.classList.toggle('link', Boolean(onLink) && !onCard);
    };
    const onLeave = () => el.classList.remove('show');

    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <span>View</span>
    </div>
  );
}
