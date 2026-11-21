export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
