import { Link } from 'react-router-dom';

// Project card used on Home and Work.
// With onOpen it opens the case study modal; without it (Home) it links to /work.
export default function ProjectCard({ project, onOpen }) {
  const { name, sector, title, summary, tags, color, textColor, accent, image } = project;
  const hasImage = Boolean(image);

  const visual = (
    <>
      {hasImage && <img className="project-img" src={image} alt="" loading="lazy" />}
      <span className="project-sector">{sector}</span>
      <span className="project-go" style={{ background: hasImage, textColor, color: hasImage ? '#0c1230' : color }} aria-hidden="true">
        
      </span>
      {!hasImage && <span className="project-shape" style={{ background: accent }} aria-hidden="true" />}
      <span className="project-name">{name}</span>
    </>
  );

  const visualProps = {
    className: hasImage ? 'project-visual has-image' : 'project-visual',
    style: { background: color, color: hasImage ? '#fff' : textColor }
  };

  return (
    <article className="project-card">
      {onOpen ? (
        <button {...visualProps} onClick={() => onOpen(project)} aria-label={`Open case study: ${name}`}>
          {visual}
        </button>
      ) : (
        <Link {...visualProps} to="/work" aria-label={`See ${name} in our work`}>
          {visual}
        </Link>
      )}

      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>
      <h3>{title}</h3>
      {summary && <p className="project-summary">{summary}</p>}
      {onOpen ? (
        <button className="project-link" onClick={() => onOpen(project)}>
          View case study <span aria-hidden="true">&rarr;</span>
        </button>
      ) : (
        <Link to="/work" className="project-link">
          See our work <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </article>
  );
}