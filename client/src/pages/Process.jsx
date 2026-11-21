import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';

const steps = [
  {
    title: 'Discover',
    time: 'Weeks 1 to 2',
    text: 'We run workshops and interviews to pin down the problem, the users and what success looks like.',
    outputs: ['Project brief', 'User insights', 'Scope and priorities']
  },
  {
    title: 'Design',
    time: 'Weeks 3 to 5',
    text: 'We build clickable prototypes and test them with real people before any code is written.',
    outputs: ['Prototype', 'Usability findings', 'Visual design and components']
  },
  {
    title: 'Build',
    time: 'Weeks 6 to 14',
    text: 'We work in two-week sprints, with a working demo at the end of each one.',
    outputs: ['Working software every sprint', 'Automated tests', 'Staging environment']
  },
  {
    title: 'Launch and grow',
    time: 'Week 15 onward',
    text: 'We release, monitor, learn from usage and keep improving with support from the same team.',
    outputs: ['Production launch', 'Analytics and monitoring', 'Improvement roadmap']
  }
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Most websites take 6 to 10 weeks. Apps and platforms usually take 3 to 6 months.' },
  { q: 'How do you price projects?', a: 'We quote a fixed price for clearly scoped work and a monthly rate for ongoing team engagements.' },
  { q: 'Can we change direction mid-project?', a: 'Yes. Sprints are short, so priorities can change between them without losing work.' },
  { q: 'Who owns the code?', a: 'You do. Everything we build for you is handed over with full documentation.' }
];

export default function Process() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="A clear path from first call to launch."
        intro="Every project follows four stages. You always know what is happening, what is next and what you will get."
      />

      <section className="section white">
        <div className="container steps">
          {steps.map((s, i) => (
            <div key={s.title} className="step">
              <div className="step-num">{i + 1}</div>
              <div>
                <div className="plan-length">{s.time}</div>
                <h2 className="h3">{s.title}</h2>
                <p>{s.text}</p>
                <ul className="ticks">
                  {s.outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Common questions</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallToAction title="Let's plan your first step." button="Get in touch" />
    </>
  );
}
