import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/process', label: 'Process' },
  { to: '/why-choose-us', label: 'Why Us' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  // Scroll state: shadow, progress bar, hide on scroll down / show on scroll up, back-to-top button
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      setShowTop(y > 600);
      if (y > 240 && y > last + 6) setHidden(true);
      else if (y < last - 6 || y <= 240) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (open) setHidden(false);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  // Close the menu with Escape, and whenever the page changes
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const cls = ['navbar', scrolled && 'scrolled', hidden && !open && 'hide'].filter(Boolean).join(' ');

  return (
    <>
    <header className={cls}>
      {/* key={pathname} remounts these on every page change, so the reveal replays */}
      <span key={pathname} className="nav-curtain" aria-hidden="true" />
      <div className="container navbar-inner">
        <Link
          key={`logo-${pathname}`}
          to="/"
          className="logo"
          style={{ '--i': 0 }}
          onClick={() => setOpen(false)}
        >
          <img className="logo-img" src="/logo.png" alt="" width="44" height="44" />
          <span className="mask"><span className="mask-in">TechSpire</span></span>
        </Link>

        <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          {links.map((l, i) => (
            <NavLink
              key={`${l.to}-${pathname}`}
              to={l.to}
              end={l.end}
              style={{ '--i': i + 1 }}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              <span className="mask"><span className="mask-in">{l.label}</span></span>
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta nav-cta-menu" onClick={() => setOpen(false)}>
            Contact us <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <div className="nav-right">
          <ThemeSwitcher />
          <Link to="/contact" className="nav-cta nav-cta-desktop">
            Contact us <span aria-hidden="true">→</span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger" aria-hidden="true" />
          </button>
        </div>
      </div>
      <span className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
    <button
      type="button"
      className={showTop ? 'to-top show' : 'to-top'}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
    </>
  );
}