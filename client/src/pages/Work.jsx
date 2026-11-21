import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import useProjects from '../hooks/useProjects.js';

const filters = ['All', 'Web', 'Mobile', 'Cloud', 'AI', 'Branding'];

export default function Work() {
  const { projects } = useProjects();
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const visible = projects.filter((p) => filter === 'All' || p.tags.includes(filter));

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Products people use, brands people remember."
        intro="A selection of recent projects across web, mobile, cloud, AI and brand. These are sample projects. Replace them with your own case studies."
      />

      <section className="section white">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                className={filter === f ? 'chip active' : 'chip'}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid-2">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} onOpen={setSelected} />
            ))}
          </div>
          {visible.length === 0 && <p className="muted">No projects in this category yet.</p>}
        </div>
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-visual" style={{ background: selected.color, color: selected.textColor }}>
              <span className="project-sector">{selected.sector}</span>
              <span className="project-name">{selected.name}</span>
            </div>
            <div className="modal-body">
              <h3>{selected.title}</h3>
              <p>{selected.summary}</p>
              <h4>Results</h4>
              <ul className="ticks">
                {selected.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="muted strong">{selected.tags.join(' · ')}</p>
              <button className="btn btn-dark" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <CallToAction title="Have a project in mind?" button="Tell us about it" />
    </>
  );
}
