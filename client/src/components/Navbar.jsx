import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Shadow appears once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu with Escape, and whenever the page changes
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
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
    </header>
  );
}