import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Stars from '../components/Stars.jsx';
import useFeedback from '../hooks/useFeedback.js';

const initial = { name: '', role: '', company: '', project: '', rating: 0, quote: '' };

export default function Feedback() {
  const feedback = useFeedback();
  const [form, setForm] = useState(initial);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const count = feedback.length;
  const average = count ? feedback.reduce((sum, f) => sum + f.rating, 0) / count : 0;
  const [featured, ...rest] = feedback;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.rating) {
      setStatus({ type: 'error', text: 'Please choose a star rating.' });
      return;
    }
    setStatus({ type: 'sending', text: '' });
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus({ type: 'success', text: data.message });
      setForm(initial);
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Client feedback"
        title="What our clients say."
        intro="We ask every client for honest feedback at the end of a project. Here is what they told us. The entries shown now are samples. Replace them with real reviews."
      />

      <section className="section white">
        <div className="container">
          <div className="rating-summary">
            <div className="rating-big">{average.toFixed(1)}</div>
            <div>
              <Stars value={Math.round(average)} />
              <div className="muted">Average from {count} client reviews</div>
            </div>
          </div>

          {featured && (
            <figure className="featured-quote">
              <Stars value={featured.rating} />
              <blockquote>{featured.quote}</blockquote>
              <figcaption>
                <strong>{featured.name}</strong>
                <span>{[featured.role, featured.company].filter(Boolean).join(', ')}</span>
              </figcaption>
            </figure>
          )}

          <div className="grid-3 reviews">
            {rest.map((f) => (
              <figure key={f.name + f.company} className="review">
                <Stars value={f.rating} />
                <blockquote>{f.quote}</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">{f.name.charAt(0)}</span>
                  <span>
                    <strong>{f.name}</strong>
                    <span className="muted">{[f.role, f.company].filter(Boolean).join(', ')}</span>
                    {f.project && <span className="muted">Project: {f.project}</span>}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="share">
        <div className="container contact-grid">
          <div className="feedback-intro">
            <h2>Worked with us?</h2>
            <p className="lead">
              Tell us how it went. Good or bad, your feedback helps us improve. New reviews appear on this page after
              our team has read them.
            </p>
          </div>

          <form className="form" onSubmit={submit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor="fb-name">Name</label>
                <input id="fb-name" name="name" value={form.name} onChange={update} required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="fb-company">Company</label>
                <input id="fb-company" name="company" value={form.company} onChange={update} autoComplete="organization" />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="fb-role">Your role</label>
                <input id="fb-role" name="role" value={form.role} onChange={update} autoComplete="organization-title" />
              </div>
              <div className="field">
                <label htmlFor="fb-project">Project we worked on</label>
                <input id="fb-project" name="project" value={form.project} onChange={update} />
              </div>
            </div>

            <fieldset className="rating-field">
              <legend>Your rating</legend>
              <div className="rating-input" onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <label
                    key={n}
                    className={n <= (hover || form.rating) ? 'rate on' : 'rate'}
                    onMouseEnter={() => setHover(n)}
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={n}
                      checked={form.rating === n}
                      onChange={() => setForm({ ...form, rating: n })}
                    />
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" />
                    </svg>
                    <span className="sr-only">{n} star{n > 1 ? 's' : ''}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="fb-quote">Your feedback</label>
              <textarea id="fb-quote" name="quote" rows="5" value={form.quote} onChange={update} required />
            </div>

            <button className="btn btn-dark" type="submit" disabled={status.type === 'sending'}>
              {status.type === 'sending' ? 'Sending...' : 'Submit feedback'}
            </button>
            {status.text && (
              <p className={status.type === 'success' ? 'notice ok' : 'notice err'} role="status">
                {status.text}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
