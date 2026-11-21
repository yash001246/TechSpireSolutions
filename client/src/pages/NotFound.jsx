import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-header">
      <div className="container">
        <div className="eyebrow">404</div>
        <h1>This page does not exist.</h1>
        <p className="lead">The link may be broken or the page may have moved.</p>
        <Link to="/" className="btn btn-dark">Back to home</Link>
      </div>
    </section>
  );
}
