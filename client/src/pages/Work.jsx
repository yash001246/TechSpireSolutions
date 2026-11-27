import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import useProjects from '../hooks/useProjects.js';
import { categoryOf, getCategories } from '../utils/media.js';

export default function Work() {
  const { projects } = useProjects();
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  // Filter buttons are built from the `category` used in src/data/projects.js
  const categories = getCategories(projects);
  const filters = ['All', ...categories];
  const count = (f) => (f === 'All' ? projects.length : projects.filter((p) => categoryOf(p) === f).length);
  const visible = projects.filter((p) => filter === 'All' || categoryOf(p) === filter);
  const hasSamples = projects.some((p) => p.sample);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Products people use, brands people remember."
        intro="A selection of our work across web and apps, video editing and graphic design. Open any project to watch, view and see the results."
      />

      <section className="section white">
        <div className="container">
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
          <div className="grid-2">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} onOpen={setSelected} />
            ))}
          </div>
          {visible.length === 0 && <p className="muted">No projects in this category yet.</p>}
          {hasSamples && (
            <p className="muted stack-note">Some projects shown here are samples. Replace them in src/data/projects.js.</p>
          )}
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      <CallToAction title="Have a project in mind?" button="Tell us about it" />
    </>
  );
}