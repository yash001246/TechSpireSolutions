import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import useProjects from '../hooks/useProjects.js';
import company from '../data/company.js';
import { stack } from '../data/services.js';

// Home page services (edit text freely)
const homeServices = [
  {
    title: 'Web Design & UI/UX',
    text: 'Clean, brand-led interfaces that are easy to use on every screen.'
  },
  {
    title: 'Full-Stack Web Development',
    text: 'Scalable MERN applications, from business websites to custom platforms.'
  },
  {
    title: 'E-commerce & Booking Solutions',
    text: 'Online stores, secure payments and booking flows that are simple to manage.'
  },
  {
    title: 'SEO & Performance Optimization',
    text: 'Fast load times, clean structure and search-friendly content that gets found.'
  },
  {
    title: 'Maintenance & Support',
    text: 'Hosting, updates and ongoing improvements after launch.'
  }
];

// REPLACE the quotes below with REAL client feedback (name, role, company).
// Entries that still start with "REPLACE" are hidden automatically,
// so placeholder text never shows on the live site.
const homeTestimonials = [
  { quote: 'REPLACE WITH REAL CLIENT QUOTE #1', name: 'Client Name', role: 'Role, Company' },
  { quote: 'REPLACE WITH REAL CLIENT QUOTE #2', name: 'Client Name', role: 'Role, Company' },
  { quote: 'REPLACE WITH REAL CLIENT QUOTE #3', name: 'Client Name', role: 'Role, Company' }
].filter((t) => !t.quote.startsWith('REPLACE'));

export default function Home() {
  const { projects } = useProjects();
  const [projectsStat, clientsStat] = [company.stats[1], company.stats[2]];
  const hasSamples = projects.some((p) => p.sample);

  return (
    <>
      <PageHeader
        eyebrow="Home"
        title="Projects delivered across industries."
        intro="A look at the work we have delivered, the technology we use and the results our clients get."
      />

      {/* Company summary */}
      <section className="section white">
        <div className="container">
          <div className="eyebrow">About TechSpire Solutions</div>
          <h2>A creative technology studio for growing businesses.</h2>
          <p className="muted">
            TechSpire Solutions designs and builds fast, modern websites and web products for
            growing businesses. We combine clear strategy, thoughtful design and turn ideas into digital experiences that look
            sharp, load quickly and convert visitors into customers. From first sketch to launch
            and beyond, we work as an extension of your team.
          </p>
          <Link to="/about" className="link-arrow">More about us</Link>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Our services</h2>
            <Link to="/services" className="link-arrow">All services</Link>
          </div>
          <div className="grid-4">
            {homeServices.map((s) => (
              <div key={s.title} className="line-card">
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="stat-value">{projectsStat.value}</div>
              <div className="muted">{projectsStat.label}</div>
            </div>
            <div className="stat">
              <div className="stat-value">{clientsStat.value}</div>
              <div className="muted">{clientsStat.label}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Case studies</h2>
            <Link to="/work" className="link-arrow">Browse by category</Link>
          </div>
          <div className="case-grid">
            {projects.map((p) => {
              const hasImage = Boolean(p.image);
              return (
                <article key={p.slug} className="case-card">
                  <div
                    className={hasImage ? 'case-media has-image' : 'case-media'}
                    style={{ background: p.color, color: hasImage ? '#fff' : p.textColor }}
                  >
                    {hasImage && <img className="case-img" src={p.image} alt={`${p.name} screenshot`} loading="lazy" />}
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

                    {p.results && p.results.length > 0 && (
                      <ul className="case-results">
                        {p.results.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    )}

                    {p.link && (
                      <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                        Visit project <span aria-hidden="true"></span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          {hasSamples && (
            <p className="muted stack-note">Some case studies shown here are samples. Replace them in src/data/projects.js.</p>
          )}
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow light">Technology stack</div>
          <h2>What we build with</h2>
          <div className="grid-4">
            {stack.map((s) => (
              <div key={s.title} className="line-card light">
                <h3>{s.title}</h3>
                <ul className="ticks">
                  {s.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section white">
        <div className="container">
          <div className="section-head">
            <h2>What our clients say</h2>
            <Link to="/testimonials" className="link-arrow">Read all testimonials</Link>
          </div>
          {homeTestimonials.length > 0 && (
            <div className="grid-4">
              {homeTestimonials.map((t) => (
                <figure key={t.name + t.quote} className="line-card">
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <div className="muted">{t.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <CallToAction title="Have a project in mind?" button="Tell us about it" />
    </>
  );
}