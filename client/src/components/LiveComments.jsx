import { useEffect, useState } from 'react';
import useLiveComments from '../hooks/useLiveComments.js';

const MAX = 500;
const colors = [
  { bg: 'var(--blue)', fg: '#fff' },
  { bg: 'var(--coral)', fg: '#0c1230' },
  { bg: 'var(--sun)', fg: '#0c1230' },
  { bg: 'var(--mint)', fg: '#0c1230' }
];

const timeAgo = (iso, now) => {
  const s = Math.max(0, Math.round((now - new Date(iso).getTime()) / 1000));
  if (s < 10) return 'just now';
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hr ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} day${d > 1 ? 's' : ''} ago`;
  return new Date(iso).toLocaleDateString();
};

const readName = () => {
  try {
    return localStorage.getItem('ts-comment-name') || '';
  } catch (err) {
    return '';
  }
};
const saveName = (v) => {
  try {
    localStorage.setItem('ts-comment-name', v);
  } catch (err) {
    /* storage can be blocked, that is fine */
  }
};

export default function LiveComments() {
  const { comments, status, post } = useLiveComments();
  const [name, setName] = useState(readName);
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // hidden spam trap
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [now, setNow] = useState(Date.now());

  // Keeps "2 min ago" labels fresh.
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 20000);
    return () => clearInterval(t);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Please add your name and a comment.');
      return;
    }
    setSending(true);
    setError('');
    try {
      await post({ name: name.trim(), message: message.trim(), website });
      saveName(name.trim());
      setMessage('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section dark live" id="live-comments">
      <div className="container live-grid">
        <div className="live-form-col">
          <div className="live-badge" data-status={status}>
            <span className="live-badge-dot" aria-hidden="true" />
            {status === 'live' ? 'Live' : status === 'offline' ? 'Offline' : 'Connecting'}
          </div>
          <h2>Join the conversation.</h2>
          <p className="live-lead">
            Say hello, ask a question or share your thoughts. Comments appear here instantly, for everyone who is on
            this page.
          </p>

          <form className="live-form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="lc-name">Your name</label>
              <input
                id="lc-name"
                value={name}
                maxLength={60}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="lc-message">Your comment</label>
              <textarea
                id="lc-message"
                rows="4"
                value={message}
                maxLength={MAX}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className="live-count">{message.length}/{MAX}</span>
            </div>
            {/* Hidden from people. Bots fill it in and get ignored. */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="lc-website">Website</label>
              <input id="lc-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
            <button className="btn btn-light" type="submit" disabled={sending}>
              {sending ? 'Posting...' : 'Post comment'}
            </button>
            {error && <p className="notice err" role="alert">{error}</p>}
          </form>
        </div>

        <div className="live-list-col">
          <div className="live-list-head">
            <h3>Recent comments</h3>
            <span className="muted">{comments.length} so far</span>
          </div>
          <ul className="live-list" aria-live="polite">
            {comments.map((c, i) => (
              <li key={c._id} className="live-item">
                <span className="live-avatar" style={{ background: colors[i % colors.length].bg, color: colors[i % colors.length].fg }} aria-hidden="true">
                  {c.name.charAt(0).toUpperCase()}
                </span>
                <div className="live-body">
                  <div className="live-meta">
                    <strong>{c.name}</strong>
                    <span>{timeAgo(c.createdAt, now)}</span>
                  </div>
                  <p>{c.message}</p>
                </div>
              </li>
            ))}
            {comments.length === 0 && (
              <li className="live-empty">
                {status === 'offline'
                  ? 'Live comments are offline right now. Please check back soon.'
                  : 'No comments yet. Be the first to say something.'}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}