import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import useProjects from '../hooks/useProjects.js';
import company from '../data/company.js';
import { stack } from '../data/services.js';

export default function Portfolio() {
  const { projects } = useProjects();
  const featured = projects.slice(0, 3);
  const [projectsStat, clientsStat] = [company.stats[1], company.stats[2]];

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects delivered across industries."
        intro="A look at the technology we use and the kind of results we deliver for our clients."
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
            <Link to="/work" className="link-arrow">See all work</Link>
          </div>
          <div className="grid-3">
            {featured.map((p) => (
              <article key={p.slug} className="case">
                <div className="case-visual" style={{ background: p.color, color: p.textColor }}>
                  <span className="project-sector">{p.sector}</span>
                  <span className="case-shape" style={{ background: p.accent }} aria-hidden="true" />
                  <span className="case-name">{p.name}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="muted">{p.summary}</p>
                <ul className="ticks">
                  {p.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="muted stack-note">Sample case studies. Replace them with your own project details.</p>
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