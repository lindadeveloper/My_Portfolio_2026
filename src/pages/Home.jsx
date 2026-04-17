import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaFigma,
  FaUserCheck,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Mail } from "lucide-react";
import { MdDownload } from "react-icons/md";
import { RiJavascriptFill } from "react-icons/ri";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import BudgetApp from "/assets/BudgetApp.png";

export default function Home() {
  return (
    <section className="content-container ">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1 className="hero-h1">Hi, I'm Linda</h1>
            <div className="link-wrapper">
              <a
                href="https://www.linkedin.com/in/lindadeveloper/"
                alt="linkedin"
                title="Linkedin"
                target="_blank"
                className="link-icon"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/lindadeveloper"
                alt="github"
                title="GitHub"
                target="_blank"
                className="link-icon"
              >
                <FaGithub size={24} />
              </a>
              <a
                href=""
                alt="download"
                target="_blank"
                title="Download resumé"
                className="link-icon"
              >
                <MdDownload size={24} />
              </a>
              <a
                href="mailto:lindacodesdev@gmail.com"
                alt="email"
                title="lindacodesdev@gmail.com"
                className="link-icon"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <p className="p1-home">
            I'm a <span className="em-text">Front-End Developer</span> who builds responsive, and
            user-centered interfaces that are intuitive, accessible and effective. I focus on
            writing clean and maintainable code, designing scalable systems, and creating digital
            experiences that are both intuitive and effective.
          </p>
          <p>
            <b>Current promo:</b> Free static website (up to 5 pages) for the first 3 clients.
          </p>
          <div className="hero-btn-container">
            <Link to="about" className="hero-btn-about">
              About me
            </Link>
            <Link to="projects" className="hero-btn">
              My projects
            </Link>
          </div>
        </div>
        <img src={BudgetApp} alt="Budget App Image" className="hero-image" />
      </div>
      <div className="skills-container">
        <h2 className="sub-title">My Skills</h2>
        <div className="stacks-wrapper">
          <h3>Tech Stacks</h3>
          <div className="icon-container">
            <i className="icon-btn">
              <FaHtml5 className="stack-icons" />
              <span>HTML</span>
            </i>
            <i className="icon-btn">
              <FaCss3Alt className="stack-icons" />
              <span>CSS</span>
            </i>
            <i className="icon-btn">
              <RiJavascriptFill className="stack-icons" />
              <span>JavaScript</span>
            </i>
            <i className="icon-btn">
              <FaReact className="stack-icons" />
              <span>React</span>
            </i>
            <i className="icon-btn">
              <FaNodeJs className="stack-icons" />
              <span>Node.js</span>
            </i>
            <i className="icon-btn">
              <FaPython className="stack-icons" />
              <span>Python</span>
            </i>
            <i className="icon-btn">
              <span>More to come...</span>
            </i>
          </div>
          <h3>Tools</h3>
          <div className="icon-container">
            <i className="icon-btn">
              <FaGitAlt className="stack-icons" />
              <span>Git / GitHub</span>
            </i>
            <i className="icon-btn">
              <FaFigma className="stack-icons" />
              <span>Figma</span>
            </i>
            <i className="icon-btn">
              <FaUserCheck className="stack-icons" />
              <span>UX / UI</span>
            </i>
            <i className="icon-btn">
              <FaBootstrap className="stack-icons" />
              <span>Bootstrap</span>
            </i>
            <i className="icon-btn">
              <DiPhotoshop className="stack-icons" />
              <span>Photoshop</span>
            </i>
            <i className="icon-btn">
              <DiIllustrator className="stack-icons" />
              <span>Illustrator</span>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}
