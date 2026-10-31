import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section alt">
      <div className="container narrow center-text">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Turning ideas into real products</h2>
        <p className="about-text">{profile.about}</p>
        <div className="about-stats">
          <div className="stat">
            <div className="stat-number">2.5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">20+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
