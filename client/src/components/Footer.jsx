import { Link } from 'react-router-dom';
import company from '../data/company.js';

const explore = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Call to action strip */}
        <div className="footer-cta">
          <div>
            <h3>Have a project in mind?</h3>
            <p>{company.motto}</p>
          </div>
          <div className="footer-cta-actions">
            <Link to="/contact" className="btn btn-light">Start a project</Link>
            <a
              className="btn btn-ghost"
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="footer-inner">
          <div className="footer-col wide">
            <Link to="/" className="footer-brandlink">
              <img className="footer-logo" src="/logo.png" alt="" width="64" height="64" />
              <span className="footer-brand">{company.name}</span>
            </Link>
            <p>{company.tagline}. We create software, brands and platforms that help teams reach higher.</p>
            <span className="footer-badge"><i aria-hidden="true" /> {company.support}</span>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {explore.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={company.phoneLink}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer">{company.website}</a>
            <span>{company.address}</span>
          </div>

          <div className="footer-col">
            <h4>Founder</h4>
            <span className="footer-founder">{company.founder}</span>
            <span>{company.founderRole}, since {company.founded}</span>
            <Link to="/about">Meet the team</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>{company.motto}</span>
        </div>
      </div>
    </footer>
  );
}