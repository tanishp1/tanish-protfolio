import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <span className="eyebrow">👋 Hello, I&apos;m</span>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="lead">{profile.tagline}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
