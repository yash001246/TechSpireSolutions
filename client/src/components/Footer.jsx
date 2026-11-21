import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col wide">
          <div className="footer-brand">TechSpire Solutions</div>
          <p>We create software, brands and platforms that help teams reach higher.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/product">Product</Link>
          <Link to="/process">Process</Link>
          <Link to="/about">About</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Studio</h4>
          <span>Lucknow, India</span>
          <span>7007387337</span>
          <span>office@techspiresolutions.in</span>
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
