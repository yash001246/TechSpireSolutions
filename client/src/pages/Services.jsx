import PageHeader from '../components/PageHeader.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { serviceGroups, stack } from '../data/services.js';

export default function Services() {
  const total = serviceGroups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={`${total} services. One team.`}
        intro="Complete digital solutions under one roof: development, design and marketing, with 24/7 support after launch."
      />

      <section className="section white">
        <div className="container service-list">
          {serviceGroups.map((g) => (
            <div key={g.title} className="service-row">
              <div>
                <h2 className="h3">{g.title}</h2>
                <p>{g.text}</p>
                <div className="plan-length service-count">{g.items.length} services</div>
              </div>
              <ul className="ticks">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Technologies we work with</h2>
          <div className="grid-4">
            {stack.map((s) => (
              <div key={s.title} className="line-card">
                <h3>{s.title}</h3>
                <div className="filters tight">
                  {s.items.map((t) => (
                    <span key={t} className="chip static">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="muted stack-note">and more, depending on what your project needs.</p>
        </div>
      </section>

      <CallToAction title="Not sure what you need?" button="Talk to us" />
    </>
  );
}