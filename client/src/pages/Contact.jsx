import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import company from '../data/company.js';

const initial = { name: '', email: '', company: '', topic: 'project', budget: '', message: '' };

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
        eyebrow="Contact us"
        title="Let's connect and build something amazing together."
        intro={`${company.motto} Send us a message and we will get back to you.`}
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
            <div className="channel">
              <div className="muted">Email</div>
              <h3>Write to us</h3>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div className="channel">
              <div className="muted">Phone</div>
              <h3>Call us</h3>
              <a href={company.phoneLink}>{company.phone}</a>
            </div>
            <div className="channel">
              <div className="muted">Website</div>
              <h3>Visit online</h3>
              <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer">{company.website}</a>
            </div>
            <div className="channel">
              <div className="muted">Address</div>
              <h3>Where we work</h3>
              <p>{company.address}</p>
            </div>
            <div className="channel">
              <div className="muted">Support</div>
              <h3>Always here</h3>
              <p>{company.support}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}