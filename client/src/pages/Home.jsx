import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import useProjects from '../hooks/useProjects.js';
import company from '../data/company.js';
import { stack } from '../data/services.js';

export default function Portfolio() {
  const { projects } = useProjects();
  const [projectsStat, clientsStat] = [company.stats[1], company.stats[2]];
  const hasSamples = projects.some((p) => p.sample);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects delivered across industries."
        intro="A look at the work we have delivered, the technology we use and the results our clients get."
      />

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

      <CallToAction title="Have a project in mind?" button="Tell us about it" />
    </>
  );
}