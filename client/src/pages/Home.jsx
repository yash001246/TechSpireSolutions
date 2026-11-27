import { Link } from 'react-router-dom';
import Stars from '../components/Stars.jsx';
import useFeedback from '../hooks/useFeedback.js';
import useProjects from '../hooks/useProjects.js';
import company, { reasons } from '../data/company.js';
import { getThumb } from '../utils/media.js';

const heroWords = ['We', 'build', 'tech', 'that', 'climbs.'];

// Core services shown on the home page (edit text freely)
const coreServices = [
  { title: 'Web Design & UI/UX', text: 'Clean, brand-led interfaces that are easy to use on every screen.' },
  { title: 'Full-Stack Web Development', text: 'Scalable MERN applications, from business websites to custom platforms.' },
  { title: 'E-commerce & Booking Solutions', text: 'Online stores, secure payments and booking flows that are simple to manage.' },
  { title: 'SEO & Performance Optimization', text: 'Fast load times, clean structure and search-friendly content that gets found.' },
  { title: 'AI, Cloud & Automation', text: 'Smart tools, cloud hosting and automation that save time and cut costs.' },
  { title: 'Maintenance & Support', text: 'Hosting, updates and ongoing improvements after launch.' }
];

export default function Home() {
  const { projects } = useProjects();
  const feedback = useFeedback();
  const [, projectsStat, clientsStat] = company.stats;

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-inner">
            <div className="eyebrow">{company.tagline}</div>
            <h1 className="hero-title" aria-label="We build tech that climbs.">
              {heroWords.map((word, i) => (
                <span key={word} className="word" aria-hidden="true">
                  <span style={{ animationDelay: `${180 + i * 100}ms` }}>{word}</span>
                </span>
              ))}
            </h1>
            <p className="lead">
              {company.name} is a dynamic and fast-growing technology company delivering comprehensive digital
              solutions to businesses of all sizes.
            </p>
            <div className="btn-row">
              <Link to="/services" className="btn btn-dark">Our services</Link>
              <Link to="/contact" className="btn btn-outline">Start a project</Link>
            </div>
          </div>

          <div className="hero-media">
            <video
              className="hero-video"
              src="/hero.mp4"
              poster="/hero-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Illustration of the TechSpire team building web, cloud and marketing solutions"
            />
          </div>
        </div>
      </section>

      {/* 2. Company about */}
      <section className="section white">
        <div className="container split">
          <div>
            <div className="eyebrow">About {company.name}</div>
            <h2>A creative technology studio for growing businesses.</h2>
          </div>
          <div className="prose">
            <p>
              {company.name} designs and builds fast, modern websites, apps and digital products. We combine clear
              strategy and thoughtful design to turn ideas into experiences that look sharp, load quickly and convert
              visitors into customers.
            </p>
            <p>
              Founded in {company.founded} by {company.founder}, we work with clients in India and abroad, and act as an
              extension of your team from the first sketch to launch and beyond.
            </p>
            <div className="home-facts">
              <div className="stat">
                <div className="stat-value">{projectsStat.value}</div>
                <div className="muted">{projectsStat.label}</div>
              </div>
              <div className="stat">
                <div className="stat-value">{clientsStat.value}</div>
                <div className="muted">{clientsStat.label}</div>
              </div>
            </div>
            <Link to="/about" className="link-arrow">More about us</Link>
          </div>
        </div>
      </section>

      {/* 3. Core services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Core services</h2>
            <Link to="/services" className="link-arrow">View all 26+ services</Link>
          </div>
          <div className="grid-3 home-grid">
            {coreServices.map((s) => (
              <div key={s.title} className="line-card">
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why choose us */}
      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow light">Why choose us</div>
              <h2>Built around your goals.</h2>
            </div>
            <Link to="/why-choose-us" className="link-arrow">Read more</Link>
          </div>
          <div className="grid-3 home-grid">
            {reasons.map((r) => (
              <div key={r.title} className="line-card light">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Showcase portfolio */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Portfolio showcase</h2>
            <Link to="/portfolio" className="link-arrow">See full portfolio</Link>
          </div>
          <div className="case-grid">
            {projects.slice(0, 3).map((p) => {
              const thumb = getThumb(p);
              const hasImage = Boolean(thumb);
              return (
                <article key={p.slug} className="case-card">
                  <div
                    className={hasImage ? 'case-media has-image' : 'case-media'}
                    style={{ background: p.color, color: hasImage ? '#fff' : p.textColor }}
                  >
                    {hasImage && <img className="case-img" src={thumb} alt={`${p.name} preview`} loading="lazy" />}
                    {!hasImage && <span className="case-orb" style={{ background: p.accent }} aria-hidden="true" />}
                    <span className="case-sector">{p.sector}</span>
                    <span className="case-title-on">{p.name}</span>
                  </div>
                  <div className="case-body">
                    <div className="case-meta">
                      {p.tags.map((t) => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                      {p.year && <span className="case-year">{p.year}</span>}
                    </div>
                    <h3>{p.title}</h3>
                    <p className="case-summary">{p.summary}</p>
                    {p.link && (
                      <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                        Visit project <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="section white">
        <div className="container">
          <div className="section-head">
            <h2>What our clients say</h2>
            <Link to="/testimonials" className="link-arrow">Read all reviews</Link>
          </div>
          {feedback.length > 0 ? (
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
          ) : (
            <p className="muted">Reviews from our clients will appear here soon.</p>
          )}
        </div>
      </section>
    </>
  );
}