import { Link } from 'react-router-dom';

export default function CallToAction({ title = "Let's build the future together.", button = 'Start a project' }) {
  return (
    <section className="cta">
      <div className="container">
        <h2>{title}</h2>
        <Link to="/contact" className="btn btn-light">
          {button}
        </Link>
      </div>
    </section>
  );
}