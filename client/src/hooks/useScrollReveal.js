import { useEffect } from 'react';

// Elements that fade and slide in as they enter the viewport.
const SELECTOR = [
  '.project-card',
  '.line-card',
  '.plan',
  '.step',
  '.service-row',
  '.channel',
  '.stat',
  '.faq details',
  '.board-col',
  '.review',
  '.featured-quote',
  '.person',
  '.timeline li',
  '.rating-summary',
  '.section-head',
  '.cta h2',
  '.cta .btn'
].join(',');

export default function useScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const seen = new WeakSet();
    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) => c.matches(SELECTOR))
          : [];
        el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 80}ms`);
        el.classList.add('reveal');
        io.observe(el);
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.getElementById('root'), { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
