import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee.jsx';
import Stars from '../components/Stars.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import useFeedback from '../hooks/useFeedback.js';
import useProjects from '../hooks/useProjects.js';
import company, { reasons } from '../data/company.js';
import { serviceGroups } from '../data/services.js';

const heroWords = ['We', 'build', 'tech', 'that', 'climbs.'];

export default function Home() {
  const { projects } = useProjects();
  const feedback = useFeedback();
  const heroRef = useRef(null);

  // Moves the hero triangles slightly with the mouse.
  useEffect(() => {
    const hero = heroRef.current;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hero || !fine || reduced) return undefined;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty('--mx', mx.toFixed(3));
      hero.style.setProperty('--my', my.toFixed(3));
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="container hero-inner">
          <div className="eyebrow">{company.tagline}</div>
          <h1 className="hero-title" aria-label="We build tech that climbs.">
            {heroWords.map((word, i) => (
              <span key={word} className="word" aria-hidden="true">
                <span style={{ animationDelay: `${180 + i * 100}ms` }}>{word}</span>
              </span>
            ))}
          </h1>
          <p className="lead">
            {company.name} is a dynamic and fast-growing technology company delivering comprehensive digital solutions
            to businesses of all sizes.
          </p>
          <div className="btn-row">
            <Link to="/services" className="btn btn-dark">Our services</Link>
            <Link to="/contact" className="btn btn-outline">Start a project</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="tri t1" />
          <span className="tri t2" />
          <span className="tri t3" />
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container stats">
          {company.stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-head">
            <h2>What we do</h2>
            <Link to="/services" className="link-arrow">All services</Link>
          </div>
          <div className="grid-3">
            {serviceGroups.map((g) => (
              <div key={g.title} className="line-card">
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <div className="muted strong">{g.items.length} services</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Recent work</h2>
            <Link to="/work" className="link-arrow">View all projects</Link>
          </div>
          <div className="grid-2">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow light">Why choose TechSpire</div>
          <h2>Built around your goals.</h2>
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
          <div className="section-head">
            <h2>Testimonials</h2>
            <Link to="/testimonials" className="link-arrow">Read all reviews</Link>
          </div>
          <div className="grid-3 reviews">
            {feedback.slice(0, 3).map((f) => (
              <figure key={f.name + f.company} className="review">
                <Stars value={f.rating} />
                <blockquote>{f.quote}</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">{f.name.charAt(0)}</span>
                  <span>
                    <strong>{f.name}</strong>
                    <span className="muted">{[f.role, f.company].filter(Boolean).join(', ')}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}