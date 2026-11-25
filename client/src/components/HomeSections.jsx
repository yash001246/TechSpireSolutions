import React from "react";
import "./homeSections.css";

// ---- Edit this content freely ----
const services = [
  {
    title: "Web Design & UI/UX",
    text: "Clean, brand-led interfaces that are easy to use on every screen.",
  },
  {
    title: "Full-Stack Web Development",
    text: "Scalable MERN applications, from business websites to custom platforms.",
  },
  {
    title: "E-commerce & Booking Solutions",
    text: "Online stores, secure payments and booking flows that are simple to manage.",
  },
  {
    title: "SEO & Performance Optimization",
    text: "Fast load times, clean structure and search-friendly content that gets found.",
  },
  {
    title: "Maintenance & Support",
    text: "Hosting, updates and ongoing improvements after launch.",
  },
];

// REPLACE these placeholders with REAL client feedback (name, role, company, quote).
// Do not publish invented reviews. They hurt trust and SEO.
const testimonials = [
  {
    quote: "REPLACE WITH REAL CLIENT QUOTE #1",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "REPLACE WITH REAL CLIENT QUOTE #2",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "REPLACE WITH REAL CLIENT QUOTE #3",
    name: "Client Name",
    role: "Role, Company",
  },
];

export default function HomeSections() {
  return (
    <>
      {/* 2. Company summary */}
      <section className="hs-section hs-about" aria-labelledby="about-heading">
        <h2 id="about-heading">About TechSpire Solutions</h2>
        <p>
          TechSpire Solutions is a creative technology studio that designs and
          builds fast, modern websites and web products for growing businesses.
          We combine clear strategy, thoughtful design and the MERN stack
          (MongoDB, Express, React, Node.js) to turn ideas into digital
          experiences that look sharp, load quickly and convert visitors into
          customers. From first sketch to launch and beyond, we work as an
          extension of your team.
        </p>
      </section>

      {/* 3. Services */}
      <section className="hs-section hs-services" aria-labelledby="services-heading">
        <h2 id="services-heading">Our Services</h2>
        <div className="hs-grid">
          {services.map((s) => (
            <article className="hs-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Testimonials */}
      <section
        className="hs-section hs-testimonials"
        aria-labelledby="testimonials-heading"
      >
        <h2 id="testimonials-heading">What Our Clients Say</h2>
        <div className="hs-grid">
          {testimonials.map((t, i) => (
            <figure className="hs-card hs-quote" key={i}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}