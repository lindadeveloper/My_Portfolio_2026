import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="content-container">
      <h1 className="hero-h1">Hi, I'm Linda</h1>
      <p>
        I'm a software developer who builds clean, user-friendly, and accessible web applications. I
        focus on fast performance and simple, user-centered UX that helps turn visitors into happy
        customers!
      </p>
      <div className="hero-btn-container">
        <Link to="about" className="hero-btn-about">
          About me
        </Link>
        <Link to="projects" className="hero-btn">
          My projects
        </Link>
      </div>
    </section>
  );
}
