import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';

const steps = [
  { title: 'Requirement analysis', text: 'Understanding client goals, target audience and business needs.' },
  { title: 'Strategy and planning', text: 'Creating a structured roadmap with timelines and milestones.' },
  { title: 'Design and development', text: 'Building high-performance, user-friendly and scalable solutions.' },
  { title: 'Testing and QA', text: 'Ensuring security, speed and flawless functionality.' },
  { title: 'Deployment and launch', text: 'Smooth project delivery with proper configuration.' },
  { title: 'Maintenance and support', text: '24/7 monitoring, updates and long-term support.' }
];

const faqs = [
  {
    q: 'What services does TechSpire Solutions offer?',
    a: 'We provide end-to-end IT services including software development, web and mobile app development, cloud solutions and digital transformation services tailored to business needs.'
  },
  {
    q: 'How do you ensure project quality?',
    a: 'We follow agile methodology, conduct regular testing and maintain continuous client communication to ensure high-quality and timely delivery.'
  },
  {
    q: 'What is your project timeline?',
    a: 'Timelines depend on project complexity, but we ensure clear milestones and timely delivery with regular progress updates.'
  },
  {
    q: 'What technologies do you work with?',
    a: 'We work with modern technologies like React, Node.js, Python, Java, cloud platforms (AWS/Azure) and more.'
  },
  {
    q: 'How do you handle client requirements?',
    a: 'We start with requirement analysis to understand your goals, audience and business needs, then agree on a roadmap with timelines and milestones before development begins.'
  },
  {
    q: 'What about pricing?',
    a: 'Our pricing is flexible and depends on project scope, features and duration. We offer cost-effective solutions without compromising quality.'
  },
  {
    q: 'Do you provide support after delivery?',
    a: 'Yes, we offer post-deployment support, maintenance and updates to ensure smooth performance.'
  }
];

export default function Process() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="A clear path from first call to launch."
        intro="Every project follows the same six steps, so you always know what is happening and what comes next."
      />

      <section className="section white">
        <div className="container steps">
          {steps.map((s, i) => (
            <div key={s.title} className="step">
              <div className="step-num">{i + 1}</div>
              <div>
                <h2 className="h3">{s.title}</h2>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Frequently asked questions</h2>
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