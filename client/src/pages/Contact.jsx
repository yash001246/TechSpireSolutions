import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';

const initial = { name: '', email: '', company: '', topic: 'project', budget: '', message: '' };

const channels = [
  { label: 'Want to collaborate?', title: 'Work with us', email: 'office@techspiresolutions.in' },
  { label: 'Want to say hi?', title: 'General inquiries', email: 'office@techspiresolutions.in' },
  { label: 'Want to join us?', title: 'Careers', email: 'career@techspiresolutions.in' },
  { label: 'Want to learn?', title: 'Internships', email: 'career@techspiresolutions.in' }
];

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'sending', text: 'Sending...' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus({ type: 'success', text: data.message || 'Thanks. We will be in touch.' });
      setForm(initial);
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you want to build."
        intro="Share a few details and we will reply within two working days."
      />

      <section className="section white">
        <div className="container contact-grid">
          <form className="form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={update} required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="company">Company (optional)</label>
              <input id="company" name="company" value={form.company} onChange={update} autoComplete="organization" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="topic">I am contacting you about</label>
                <select id="topic" name="topic" value={form.topic} onChange={update}>
                  <option value="project">A new project</option>
                  <option value="hello">Just saying hi</option>
                  <option value="careers">Careers</option>
                  <option value="internship">Internships</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="budget">Budget (optional)</label>
                <select id="budget" name="budget" value={form.budget} onChange={update}>
                  <option value="">Not sure yet</option>
                  <option value="<10k">Under $10k</option>
                  <option value="10-50k">$10k to $50k</option>
                  <option value="50-150k">$50k to $150k</option>
                  <option value="150k+">$150k+</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" value={form.message} onChange={update} required />
            </div>
            <button className="btn btn-dark" type="submit" disabled={status.type === 'sending'}>
              {status.type === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status.text && status.type !== 'sending' && (
              <p className={status.type === 'success' ? 'notice ok' : 'notice err'} role="status">
                {status.text}
              </p>
            )}
          </form>

          <div className="channels">
            {channels.map((c) => (
              <div key={c.title} className="channel">
                <div className="muted">{c.label}</div>
                <h3>{c.title}</h3>
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </div>
            ))}
            <div className="channel">
              <div className="muted">Visit us</div>
              <h3>Studio</h3>
              <p>Lucknow, India<br />7007387337</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
