const items = ['Web', 'Mobile', 'E-commerce', 'SaaS', 'Cloud', 'Cybersecurity', 'Design', 'Marketing'];

// A looping strip of text. The list is rendered twice so the loop is seamless.
export default function Marquee() {
  const row = items.map((item) => (
    <span key={item} className="marquee-item">
      {item}
      <span className="marquee-dot" aria-hidden="true" />
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-row">{row}</div>
        <div className="marquee-row">{row}</div>
      </div>
    </div>
  );
}