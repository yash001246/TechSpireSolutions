import { Link } from 'react-router-dom';
import { actionLabel, getThumb } from '../utils/media.js';

// Project card used on Home and Work.
// With onOpen it opens the popup (case study, video or design); without it (Home) it links to /work.
export default function ProjectCard({ project, onOpen }) {
  const { name, sector, title, summary, tags, color, textColor, accent, video } = project;
  const image = getThumb(project);
  const hasImage = Boolean(image);

  const visual = (
    <>
      {hasImage && <img className="project-img" src={image} alt="" loading="lazy" />}
      <span className="project-sector">{project.category || sector}</span>
      {video && <span className="play-badge" aria-hidden="true"><i /></span>}
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
        <button {...visualProps} onClick={() => onOpen(project)} aria-label={`${actionLabel(project)}: ${name}`}>
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
          {actionLabel(project)} <span aria-hidden="true">&rarr;</span>
        </button>
      ) : (
        <Link to="/work" className="project-link">
          See our work <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </article>
  );
}