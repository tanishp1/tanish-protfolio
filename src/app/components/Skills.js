import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container center-text">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub">
          The tools and technologies I use to build modern, performant web applications.
        </p>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
