import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <div className="contact-box">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.15)" }}>
            Get In Touch
          </span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p>Have a project in mind? Send me a message and I&apos;ll reply within 24 hours.</p>
          <a href={`mailto:${profile.email}`} className="btn btn-white">
            {profile.email}
          </a>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
