import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';

const services = [
  {
    title: 'Strategy and design',
    text: 'We work out what to build and why, then design it so it is easy to use and easy to build.',
    items: ['Product discovery workshops', 'User research and testing', 'UX and interface design', 'Brand identity and design systems']
  },
  {
    title: 'Web and mobile engineering',
    text: 'Fast, accessible websites and apps that feel right on every screen.',
    items: ['Websites and web apps (React, Node.js)', 'iOS and Android apps', 'E-commerce and content platforms', 'APIs and integrations']
  },
  {
    title: 'Cloud and DevOps',
    text: 'Infrastructure that scales with your users and does not wake your team at 3 a.m.',
    items: ['Cloud migration and setup', 'CI/CD pipelines', 'Monitoring and alerting', 'Security reviews and cost tuning']
  },
  {
    title: 'AI and data',
    text: 'Practical AI features and data tools built around your own information.',
    items: ['AI assistants and search', 'Workflow automation', 'Dashboards and analytics', 'Data pipelines']
  },
  {
    title: 'Support and growth',
    text: 'After launch we stay close, fixing, measuring and improving.',
    items: ['Maintenance and updates', 'Performance and SEO', 'A/B testing', 'Dedicated team retainers']
  }
];

const stack = ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'React Native', 'AWS', 'Docker', 'GitHub Actions', 'Figma'];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to take a product from idea to launch."
        intro="One team covers strategy, design, engineering and growth, so nothing gets lost between handoffs."
      />

      <section className="section white">
        <div className="container service-list">
          {services.map((s) => (
            <div key={s.title} className="service-row">
              <div>
                <h2 className="h3">{s.title}</h2>
                <p>{s.text}</p>
              </div>
              <ul className="ticks">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Tools we use</h2>
          <div className="filters">
            {stack.map((t) => (
              <span key={t} className="chip static">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <CallToAction title="Not sure what you need?" button="Talk to us" />
    </>
  );
}
