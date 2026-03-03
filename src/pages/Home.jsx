import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaFigma,
  FaUserCheck,
  FaBootstrap,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

export default function Home() {
  return (
    <section className="content-container">
      <h1 className="hero-h1">Hi, I'm Linda</h1>
      <p className="p1">
        I'm a <span className="em-text">Front-End Developer</span> who builds user-friendly, and
        accessible web applications. I focus on fast performance and simple, user-centered UX that
        helps turn visitors into happy customers!
      </p>
      <div className="hero-btn-container">
        <Link to="about" className="hero-btn-about">
          About me
        </Link>
        <Link to="projects" className="hero-btn">
          My projects
        </Link>
      </div>
      <h2>Tech Stacks</h2>
      <div className="icon-container">
        <button className="icon-btn">
          <FaHtml5 className="stack-icons" />
          <span>HTML</span>
        </button>
        <button className="icon-btn">
          <FaCss3Alt className="stack-icons" />
          <span>CSS</span>
        </button>
        <button className="icon-btn">
          <RiJavascriptFill className="stack-icons" />
          <span>JavaScript</span>
        </button>
        <button className="icon-btn">
          <FaReact className="stack-icons" />
          <span>React</span>
        </button>
        <button className="icon-btn">
          <FaNodeJs className="stack-icons" />
          <span>Node.js</span>
        </button>
        <button className="icon-btn">
          <FaPython className="stack-icons" />
          <span>Python</span>
        </button>
        <button className="icon-btn">
          <span>More to come...</span>
        </button>
      </div>
      <h2>Tools</h2>
      <div className="icon-container">
        <button className="icon-btn">
          <FaGithub className="stack-icons" />
          <span>Github</span>
        </button>
        <button className="icon-btn">
          <FaFigma className="stack-icons" />
          <span>Figma</span>
        </button>
        <button className="icon-btn">
          <FaUserCheck className="stack-icons" />
          <span>UX / UI</span>
        </button>
        <button className="icon-btn">
          <FaBootstrap className="stack-icons" />
          <span>Bootstrap</span>
        </button>
        <button className="icon-btn">
          <DiPhotoshop className="stack-icons" />
          <span>Photoshop</span>
        </button>
        <button className="icon-btn">
          <DiIllustrator className="stack-icons" />
          <span>Illustrator</span>
        </button>
      </div>
    </section>
  );
}
