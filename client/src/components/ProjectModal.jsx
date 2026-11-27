import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getEmbed, getThumb } from '../utils/media.js';

// Detail popup shared by Work and Portfolio.
// Shows a video player, a design gallery, or the normal case-study header.
export default function ProjectModal({ project: p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  const embed = getEmbed(p.video);
  const thumb = getThumb(p);
  const gallery = Array.isArray(p.gallery) ? p.gallery.filter(Boolean) : [];

  // Rendered straight into <body> so it always covers the screen, whatever page animation is running
  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={embed || gallery.length ? 'modal wide' : 'modal'}
        role="dialog"
        aria-modal="true"
        aria-label={p.name}
        onClick={(e) => e.stopPropagation()}
      >
        {embed ? (
          <div className={p.vertical ? 'modal-player vertical' : 'modal-player'}>
            {embed.type === 'file' ? (
              <video src={embed.src} poster={thumb || undefined} controls autoPlay playsInline />
            ) : (
              <iframe
                src={embed.src}
                title={p.name}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            )}
          </div>
        ) : (
          <div className="modal-visual" style={{ background: p.color, color: thumb ? '#fff' : p.textColor }}>
            {thumb && <img className="modal-img" src={thumb} alt={`${p.name} preview`} />}
            <span className="project-sector">{p.sector}</span>
            <span className="project-name">{p.name}</span>
          </div>
        )}

        <div className="modal-body">
          <h3>{p.title}</h3>
          <p>{p.summary}</p>

          {gallery.length > 0 && (
            <div className="modal-gallery">
              {gallery.map((src) => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer">
                  <img src={src} alt={`${p.name} design`} loading="lazy" />
                </a>
              ))}
            </div>
          )}

          {p.results && p.results.length > 0 && (
            <>
              <h4>Highlights</h4>
              <ul className="ticks">
                {p.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}
          <p className="muted strong">{[p.category, ...p.tags, p.year].filter(Boolean).join(' · ')}</p>
          <div className="btn-row modal-actions">
            {p.link && (
              <a className="btn btn-dark" href={p.link} target="_blank" rel="noopener noreferrer">
                {p.video ? 'Open original' : 'Visit project'}
              </a>
            )}
            <button className="btn btn-outline" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}