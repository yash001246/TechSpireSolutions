import { Link } from 'react-router-dom';

// Shared hero for every inner page: breadcrumb, eyebrow pill, big title, intro.
export default function PageHeader({ eyebrow, title, intro }) {
  const words = typeof title === 'string' ? title.split(' ') : null;

  return (
    <section className="page-header">
      <span className="ph-grid" aria-hidden="true" />
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <div className="eyebrow hero-eyebrow">
          <span className="live-dot" aria-hidden="true" />
          {eyebrow}
        </div>
        {words ? (
          <h1 className="page-title" aria-label={title}>
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className={`word${i === words.length - 1 ? ' accent' : ''}`} aria-hidden="true">
                <span style={{ animationDelay: `${150 + i * 80}ms` }}>{word}</span>
              </span>
            ))}
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}