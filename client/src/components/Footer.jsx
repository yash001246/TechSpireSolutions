import { Link } from 'react-router-dom';
import company from '../data/company.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col wide">
          <img className="footer-logo" src="/logo.png" alt="TechSpire Solutions logo" width="72" height="72" />
          <div className="footer-brand">TechSpire Solutions</div>
          <p>{company.motto}</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/process">Process</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
       <h4>Studio</h4>
       <span>{company.address}</span>
       <a href={company.phoneLink}>{company.phone}</a>
       <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <a href="https://www.linkedin.com/company/techspire-solutions-india/">Linkdin</a>
          <a href="">Instagram</a>
          <a href="">GitHub</a>
        </div>
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} TechSpire Solutions. All rights reserved.
      </div>
    </footer>
  );
}
