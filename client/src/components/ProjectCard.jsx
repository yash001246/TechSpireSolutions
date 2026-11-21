export default function ProjectCard({ project, onOpen }) {
  const { name, sector, title, tags, color, textColor, accent } = project;
  return (
    <article className="project-card">
      <button
        className="project-visual"
        style={{ background: color, color: textColor }}
        onClick={() => onOpen && onOpen(project)}
        aria-label={`Open case study: ${name}`}
      >
        <span className="project-sector">{sector}</span>
        <span className="project-shape" style={{ background: accent }} aria-hidden="true" />
        <span className="project-name">{name}</span>
      </button>
      <h3>{title}</h3>
      <p className="muted strong">{tags.join(' · ')}</p>
    </article>
  );
}
