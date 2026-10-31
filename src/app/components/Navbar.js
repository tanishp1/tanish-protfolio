import { profile } from "../data/portfolio";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">{profile.name}</a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn btn-small">Hire Me</a>
        </nav>
      </div>
    </header>
  );
}
