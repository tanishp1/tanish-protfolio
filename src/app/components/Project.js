import Image from "next/image";
import { projects } from "../data/portfolio";

export default function Project() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <div className="center-text">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            A selection of real-world websites I&apos;ve built for clients.
          </p>
        </div>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <div className="card-img-wrap">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:640px) 100vw, 360px"
                  className="card-img"
                />
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="card-link">
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
