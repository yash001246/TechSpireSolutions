import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import company, { reasons, comparison } from '../data/company.js';

const initials = company.founder
  .split(' ')
  .map((w) => w.charAt(0))
  .join('');

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Innovating the future of technology."
        intro={`${company.name} is a dynamic and fast-growing technology company delivering comprehensive digital solutions to businesses of all sizes.`}
      />

      <section className="section white">
        <div className="container split">
          <div>
            <h2>Who we are</h2>
          </div>
          <div className="prose">
            <p>
              We provide 26+ professional IT and digital services designed to help brands build, scale and succeed in
              today's competitive digital landscape.
            </p>
            <p>
              With a strong focus on innovation, quality and client satisfaction, we combine technical expertise with
              strategic thinking to deliver impactful results.
            </p>
            <Link to="/services" className="link-arrow">Explore our services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            {company.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">{s.value}</div>
                <div className="muted">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="facts-line">
            Founded in <strong>{company.founded}</strong> by <strong>{company.founder}</strong>. Support: {company.support}.
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow light">Why choose TechSpire</div>
          <h2>What sets us apart</h2>
          <div className="grid-3">
            {reasons.map((r) => (
              <div key={r.title} className="line-card light">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <h2>Our approach compared</h2>
          <div className="compare">
            <div className="compare-col old">
              <h3>{comparison.traditional.title}</h3>
              <ul className="ticks muted-ticks">
                {comparison.traditional.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="compare-vs" aria-hidden="true">VS</div>
            <div className="compare-col new">
              <h3>{comparison.techspire.title}</h3>
              <ul className="ticks">
                {comparison.techspire.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Leadership</h2>
          </div>
          <div className="grid-4">
            <div className="person">
              <div className="person-art" style={{ background: 'var(--sun)' }}>
                <span className="person-shape" aria-hidden="true" />
                <span className="person-initials" aria-hidden="true">{initials}</span>
              </div>
              <h3>{company.founder}</h3>
              <div className="strong">{company.founderRole}</div>
              <div className="muted">Since {company.founded}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container split">
          <div>
            <h2>Our promise</h2>
          </div>
          <div className="prose">
            <p>
              {company.name} is committed to delivering innovative, reliable and result-driven digital solutions that
              help businesses grow and succeed in the modern digital era. We aim to build long-term partnerships based on
              trust, quality and performance.
            </p>
            <p className="pull">We don't just create digital products. We create digital success stories.</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}