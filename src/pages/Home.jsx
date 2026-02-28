import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

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
      <h2>My Stacks</h2>
      <FaHtml5 className="stack-icons" />
      <span>HTML</span>
      <FaCss3Alt className="stack-icons" />
      <span>CSS</span>
      <IoLogoJavascript className="stack-icons" />
      <span>JavaScript</span>
      <FaReact className="stack-icons" />
      <span>React</span>
      <FaPython className="stack-icons" />
      <span>Python</span>
      <FaNode className="stack-icons" />
      <span>Node.js</span>
      <FaGithub className="stack-icons" />
      <span>Github</span>
    </section>
  );
}
