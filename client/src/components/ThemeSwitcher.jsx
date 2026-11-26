import { useEffect, useRef, useState } from 'react';

const palettes = [
  { id: 'indigo', name: 'Indigo', colors: ['#3d4bff', '#ff6a4d', '#ffd66b'] },
  { id: 'emerald', name: 'Emerald', colors: ['#0b8a67', '#ff7a45', '#ffd166'] },
  { id: 'sunset', name: 'Sunset', colors: ['#e5502a', '#8b5cf6', '#ffc857'] },
  { id: 'violet', name: 'Violet', colors: ['#7c3aed', '#ec4899', '#fde68a'] }
];

const root = document.documentElement;

const save = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    /* storage can be blocked, the choice still works for this visit */
  }
};

// Light / dark toggle and a colour palette picker.
// The saved choice is applied by a small script in index.html, so the page never flashes the wrong theme.
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(root.getAttribute('data-theme') || 'light');
  const [palette, setPalette] = useState(root.getAttribute('data-palette') || 'indigo');
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  const fade = () => {
    root.classList.add('theme-fade');
    window.setTimeout(() => root.classList.remove('theme-fade'), 500);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    fade();
    root.setAttribute('data-theme', next);
    save('ts-theme', next);
    setTheme(next);
  };

  const choosePalette = (id) => {
    fade();
    root.setAttribute('data-palette', id);
    save('ts-palette', id);
    setPalette(id);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (box.current && !box.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="theme-tools" ref={box}>
      <button
        className="tool-btn"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      >
        <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </button>

      <button
        className="tool-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Choose colour palette"
        title="Colour palette"
      >
        <span className="swatch-dot" aria-hidden="true" />
      </button>

      {open && (
        <div className="palette-menu" role="group" aria-label="Colour palette">
          <h4>Colour palette</h4>
          {palettes.map((p) => (
            <button
              key={p.id}
              className="palette-option"
              aria-pressed={palette === p.id}
              onClick={() => choosePalette(p.id)}
            >
              <span className="palette-swatches" aria-hidden="true">
                {p.colors.map((c) => (
                  <span key={c} style={{ background: c }} />
                ))}
              </span>
              {p.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}