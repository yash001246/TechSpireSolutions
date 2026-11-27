import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import company, { comparison } from '../data/company.js';

// Edit any text below freely. Numbers on top come from src/data/company.js.
const reasons = [
  {
    title: '26+ specialized services',
    text: 'Websites, apps, cloud, AI, cybersecurity, marketing and support, all under one roof. You do not need to manage five different vendors for one product.'
  },
  {
    title: 'Experienced and skilled team',
    text: 'Designers, developers and strategists who have worked with clients in India and abroad, and who care about clean code and clear communication.'
  },
  {
    title: 'Client-centric approach',
    text: 'We start with your goals, your users and your budget, then shape the solution around them. No copy-paste templates, no unnecessary extras.'
  },
  {
    title: 'On-time project delivery',
    text: 'A structured process with clear milestones, regular updates and honest timelines, so you always know what is done and what is next.'
  },
  {
    title: '24/7 support and maintenance',
    text: 'Hosting, monitoring, updates and fixes after launch. When something needs attention, someone from our team is there to help.'
  },
  {
    title: 'Innovation-driven strategy',
    text: 'Modern technologies such as React, Node.js, cloud and AI, chosen because they solve your problem and not because they are trendy.'
  }
];

const steps = [
  { title: 'Listen', text: 'We learn about your business, your customers and what success looks like for you.' },
  { title: 'Plan', text: 'We agree on scope, timeline and budget in writing before any work begins.' },
  { title: 'Build', text: 'We design and develop in short cycles and show progress along the way.' },
  { title: 'Launch and grow', text: 'We deploy, test, support and keep improving as your business grows.' }
];

const promises = [
  'Clear, written scope and pricing before we start',
  'Regular progress updates, not silence until launch day',
  'Mobile-friendly, fast and secure by default',
  'You own your code, content and accounts',
  'Honest advice, even when it means a smaller project',
  'Support that continues after the project goes live'
];

export default function WhyChooseUs() {
  const [, projects, clients, care] = company.stats;
  const facts = [projects, clients, care];

  return (
    <>
      <PageHeader
        eyebrow="Why choose us"
        title="Technology partners who care about your growth."
        intro={`${company.name} combines strategy, design and engineering to deliver digital solutions that work for your business today and scale with you tomorrow.`}
      />

      {/* Numbers */}
      <section className="section white">
        <div className="container">
          <div className="stats">
            {facts.map((f) => (
              <div key={f.label} className="stat">
                <div className="stat-value">{f.value}</div>
                <div className="muted">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six reasons */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Six reasons businesses work with us</h2>
          </div>
          <div className="grid-3 why-grid">
            {reasons.map((r, i) => (
              <div key={r.title} className="line-card">
                <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.title}</h3>
                <p className="muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section white">
        <div className="container">
          <div className="eyebrow">The difference</div>
          <h2>A smarter way to go digital.</h2>
          <div className="compare">
            <div className="compare-col old">
              <h3>{comparison.traditional.title}</h3>
              <ul className="ticks muted-ticks">
                {comparison.traditional.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="compare-vs" aria-hidden="true">vs</div>
            <div className="compare-col new">
              <h3>{comparison.techspire.title}</h3>
              <ul className="ticks">
                {comparison.techspire.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How we work with you</h2>
            <Link to="/process" className="link-arrow">See our full process</Link>
          </div>
          <div className="grid-4 why-steps">
            {steps.map((s, i) => (
              <div key={s.title} className="line-card">
                <span className="why-num">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section dark">
        <div className="container">
          <div className="eyebrow light">Our promise</div>
          <h2>What you can always expect from us.</h2>
          <ul className="ticks promise-list">
            {promises.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link to="/services" className="btn btn-light">Explore our services</Link>
            <Link to="/portfolio" className="btn btn-ghost">See our work</Link>
          </div>
        </div>
      </section>

      <CallToAction title="Ready to build something that lasts?" button="Talk to us" />
    </>
  );
}