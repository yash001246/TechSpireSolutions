import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { services, getService } from '../data/services.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <section className="page-header">
        <div className="container">
          <div className="eyebrow">Service not found</div>
          <h1>We could not find that service.</h1>
          <p className="lead">The link may be wrong, or the service may have moved.</p>
          <Link to="/services" className="btn btn-dark">See all services</Link>
        </div>
      </section>
    );
  }

  const index = services.findIndex((s) => s.slug === slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const related = services.filter((s) => s.category === service.category && s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={`${service.category} services`} title={service.name} intro={service.summary} />

      <section className="section white">
        <div className="container">
          <Link to="/services" className="back-link">&larr; All services</Link>
          <div className="split detail-split">
            <div>
              <h2>Overview</h2>
            </div>
            <div className="prose">
              <p>{service.overview}</p>
              <Link to="/process" className="link-arrow">See how we work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split detail-split">
          <div>
            <h2>What is included</h2>
          </div>
          <ul className="ticks detail-ticks">
            {service.includes.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow light">Why it matters</div>
          <h2>What you get</h2>
          <div className="grid-3">
            {service.benefits.map((b) => (
              <div key={b} className="line-card light">
                <h3>{b}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.tools.length > 0 && (
        <section className="section white">
          <div className="container">
            <h2>Tools and platforms</h2>
            <div className="filters tools-row">
              {service.tools.map((t) => (
                <span key={t} className="chip static">{t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>Related services</h2>
            <div className="svc-list related-list">
              {related.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="svc-item">
                  <span className="svc-text">
                    <span className="svc-name">{s.name}</span>
                    <span className="svc-summary">{s.summary}</span>
                  </span>
                  <span className="svc-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pager-wrap">
        <div className="container pager">
          <Link to={`/services/${prev.slug}`} className="pager-link">
            <span className="muted">Previous</span>
            <span className="pager-name">{prev.name}</span>
          </Link>
          <Link to={`/services/${next.slug}`} className="pager-link next">
            <span className="muted">Next</span>
            <span className="pager-name">{next.name}</span>
          </Link>
        </div>
      </section>

      <CallToAction title={`Interested in ${service.name}?`} button="Talk to us" />
    </>
  );
}