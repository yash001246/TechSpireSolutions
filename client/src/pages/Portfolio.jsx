import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import useProjects from '../hooks/useProjects.js';
import ProjectModal from '../components/ProjectModal.jsx';
import company from '../data/company.js';
import { actionLabel, categoryOf, getCategories, getThumb } from '../utils/media.js';
import { stack } from '../data/services.js';

// Shown at the bottom when a video or design category is selected (edit freely)
const toolSets = {
  'Video Editing': {
    title: 'What we edit with',
    groups: [
      { title: 'Editing', items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut'] },
      { title: 'Motion and effects', items: ['After Effects', 'Motion graphics', 'Animated captions'] },
      { title: 'Sound', items: ['Audio cleanup', 'Music and sound design', 'Voice-over mixing'] },
      { title: 'Delivery', items: ['YouTube and long form', 'Reels and Shorts (9:16)', 'Ads and promos'] }
    ]
  },
  'Graphic Design': {
    title: 'What we design with',
    groups: [
      { title: 'Design tools', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'] },
      { title: 'Branding', items: ['Logos', 'Colour and type guides', 'Brand kits'] },
      { title: 'Marketing', items: ['Social media posts', 'Posters and flyers', 'Ad creatives'] },
      { title: 'Print and packaging', items: ['Menus and brochures', 'Packaging', 'Business cards'] }
    ]
  }
};

export default function Portfolio() {
  const { projects } = useProjects();
  const [projectsStat, clientsStat] = [company.stats[1], company.stats[2]];
  const hasSamples = projects.some((p) => p.sample);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const categories = getCategories(projects);
  const filters = ['All', ...categories];
  const count = (f) => (f === 'All' ? projects.length : projects.filter((p) => categoryOf(p) === f).length);
  const visible = projects.filter((p) => filter === 'All' || categoryOf(p) === filter);
  const tools = toolSets[filter];
  const showStack = filter === 'All' || filter === 'Web & Apps';

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects delivered across industries."
        intro="Websites and apps, video edits and graphic design: a look at the work we have delivered and the results our clients get."
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
            <h2>{filter === 'All' ? 'Case studies' : filter}</h2>
            <Link to="/work" className="link-arrow">Browse all work</Link>
          </div>
          {categories.length > 1 && (
            <div className="filters" role="group" aria-label="Filter projects">
              {filters.map((f) => (
                <button
                  key={f}
                  className={filter === f ? 'chip active' : 'chip'}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f} <span className="chip-count">{count(f)}</span>
                </button>
              ))}
            </div>
          )}
          <div className="case-grid">
            {visible.map((p) => {
              const thumb = getThumb(p);
              const hasImage = Boolean(thumb);
              return (
                <article key={p.slug} className="case-card">
                  <button
                    type="button"
                    className={hasImage ? 'case-media case-media-btn has-image' : 'case-media case-media-btn'}
                    style={{ background: p.color, color: hasImage ? '#fff' : p.textColor }}
                    onClick={() => setSelected(p)}
                    aria-label={`${actionLabel(p)}: ${p.name}`}
                  >
                    {hasImage && <img className="case-img" src={thumb} alt="" loading="lazy" />}
                    {!hasImage && <span className="case-orb" style={{ background: p.accent }} aria-hidden="true" />}
                    <span className="case-sector">{p.category || p.sector}</span>
                    {p.video && <span className="play-badge" aria-hidden="true"><i /></span>}
                    <span className="case-title-on">{p.name}</span>
                  </button>

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

                    <button type="button" className="project-link" onClick={() => setSelected(p)}>
                      {actionLabel(p)} <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {visible.length === 0 && <p className="muted">No projects in this category yet.</p>}
          {hasSamples && (
            <p className="muted stack-note">Some case studies shown here are samples. Replace them in src/data/projects.js.</p>
          )}
        </div>
      </section>

      {tools ? (
        <section className="section dark">
          <div className="container">
            <div className="eyebrow light">Our toolkit</div>
            <h2>{tools.title}</h2>
            <div className="grid-4">
              {tools.groups.map((g) => (
                <div key={g.title} className="line-card light">
                  <h3>{g.title}</h3>
                  <ul className="ticks">
                    {g.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        showStack && (
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
        )
      )}

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      <CallToAction title="Have a project in mind?" button="Tell us about it" />
    </>
  );
}