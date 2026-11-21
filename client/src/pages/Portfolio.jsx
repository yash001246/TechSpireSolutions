import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';

const plans = [
  {
    name: 'Product Sprint',
    length: '4 to 6 weeks',
    text: 'Turn an idea into a clickable prototype and a build plan.',
    items: ['Discovery workshops', 'Prototype tested with users', 'Technical plan and estimate']
  },
  {
    name: 'Launch Squad',
    length: '3 to 6 months',
    text: 'A dedicated team of designers and engineers builds your first release.',
    items: ['Product designer, engineers and a lead', 'Two-week sprints with demos', 'Launch and early support'],
    featured: true
  },
  {
    name: 'Growth Team',
    length: 'Ongoing',
    text: 'An embedded team that keeps improving the product after launch.',
    items: ['Roadmap and experiments', 'Performance and reliability work', 'Monthly review with your team']
  }
];

const benefits = [
  { title: 'Start fast', text: 'A team can begin within two weeks of kickoff.' },
  { title: 'Work in the open', text: 'You see the board, the code and a working demo every sprint.' },
  { title: 'Scale up or down', text: 'Add or remove people as your needs change.' },
  { title: 'Hand over cleanly', text: 'Clear documentation so your own team can take over any time.' }
];

export default function Product() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="A launch pad for product teams."
        intro="We join startups and in-house product groups as an extra squad of designers and engineers. You set the direction. We help you reach a working release and keep improving it."
      />

      <section className="section white">
        <div className="container">
          <h2>Ways to work with us</h2>
          <div className="grid-3">
            {plans.map((p) => (
              <div key={p.name} className={p.featured ? 'plan featured' : 'plan'}>
                <div className="plan-length">{p.length}</div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul className="ticks">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Why teams choose this model</h2>
          <div className="grid-4">
            {benefits.map((b) => (
              <div key={b.title} className="line-card light">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container board">
          <div className="board-col">
            <h4>Backlog</h4>
            <div className="ticket">Checkout redesign</div>
            <div className="ticket">Role-based access</div>
          </div>
          <div className="board-col">
            <h4>Building</h4>
            <div className="ticket blue">Mobile onboarding</div>
            <div className="ticket blue">Search API</div>
            <div className="ticket blue">Usage dashboard</div>
          </div>
          <div className="board-col">
            <h4>Shipped</h4>
            <div className="ticket coral">Design system</div>
            <div className="ticket coral">Launch site</div>
          </div>
        </div>
      </section>

      <CallToAction title="Ready to add a squad?" button="Talk to our team" />
    </>
  );
}
