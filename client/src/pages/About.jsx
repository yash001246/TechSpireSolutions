import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';

const values = [
  { title: 'Clarity first', text: 'We explain what we are doing and why, in plain language, at every stage.' },
  { title: 'Ship, then improve', text: 'Working software beats long documents. We release early and learn from real use.' },
  { title: 'Craft matters', text: 'Details such as spacing, speed and accessibility are part of the job, not extras.' },
  { title: 'Your team stays in control', text: 'You own the code, the data and the roadmap. We make handover easy.' }
];

const milestones = [
  { year: '2017', text: 'TechSpire starts as a team of three building websites for local businesses.' },
  { year: '2019', text: 'We open a product practice and ship our first mobile apps.' },
  { year: '2021', text: 'Cloud and DevOps joins the studio, along with our first embedded product teams.' },
  { year: '2023', text: 'We add an AI and data group and pass 100 launched products.' },
  { year: '2025', text: 'A team of 40 designers and engineers serving clients in 18 countries.' }
];

const team = [
  { role: 'Founder and CEO', focus: 'Strategy, client partnerships', color: 'var(--blue)' },
  { role: 'Head of Design', focus: 'Product design, brand systems', color: 'var(--coral)' },
  { role: 'Head of Engineering', focus: 'Architecture, quality, delivery', color: 'var(--sun)' },
  { role: 'Head of Cloud and Data', focus: 'Infrastructure, AI, analytics', color: 'var(--mint)' }
];

const numbers = [
  { value: '120+', label: 'Products launched' },
  { value: '40', label: 'Designers and engineers' },
  { value: '18', label: 'Countries served' },
  { value: '92%', label: 'Clients who come back' }
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small studio with big products on its mind."
        intro="TechSpire Solutions is a team of designers, engineers and strategists. We help companies turn ideas into software that people enjoy using."
      />

      <section className="section white">
        <div className="container split">
          <div>
            <h2>Our story</h2>
          </div>
          <div className="prose">
            <p>
              We started TechSpire because too many digital projects fail in the gaps between teams: the designer hands
              off a file, the developer guesses, and the client sees the result last. We wanted one team that carries a
              product from first sketch to launch.
            </p>
            <p>
              Today we work with startups, growing companies and in-house product groups. Some bring us a rough idea.
              Others bring a product that needs to scale. In both cases we start the same way: by listening, then by
              building something real as early as we can.
            </p>
            <Link to="/process" className="link-arrow">See how we work</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats">
          {numbers.map((n) => (
            <div key={n.label} className="stat">
              <div className="stat-value">{n.value}</div>
              <div className="muted">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow light">What we believe</div>
          <h2>Our values</h2>
          <div className="grid-4">
            {values.map((v) => (
              <div key={v.title} className="line-card light">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <h2>Our journey</h2>
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.year}>
                <span className="timeline-year">{m.year}</span>
                <span>{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Leadership</h2>
            <div className="muted">Add your team members' names and photos here.</div>
          </div>
          <div className="grid-4">
            {team.map((t) => (
              <div key={t.role} className="person">
                <div className="person-art" style={{ background: t.color }}>
                  <span className="person-shape" aria-hidden="true" />
                </div>
                <h3>[Name]</h3>
                <div className="strong">{t.role}</div>
                <div className="muted">{t.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction title="Want to join the team?" button="Say hello" />
    </>
  );
}
