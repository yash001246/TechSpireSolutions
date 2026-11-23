import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="navbar">
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
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav open' : 'nav'}>
          {links.map((l, i) => (
            <NavLink
              key={`${l.to}-${pathname}`}
              to={l.to}
              style={{ '--i': i + 1 }}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              <span className="mask"><span className="mask-in">{l.label}</span></span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}