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
import { useState } from "react";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText("lindacodesdev@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.log("Failed to copy: ", err);
    }
  };
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
                <FaLinkedin size={35} />
              </a>
              <a
                href="https://github.com/lindadeveloper"
                alt="github"
                title="Github"
                target="_blank"
                className="link-icon"
              >
                <FaGithub size={35} />
              </a>
              <a
                href=""
                alt="download"
                target="_blank"
                title="Download Resumé"
                className="link-icon"
              >
                <MdDownload size={35} />
              </a>
              <button
                className="link-icon-mail"
                alt="e-mail"
                title="Copy E-mail"
                onClick={copyText}
              >
                <span>{isCopied ? "E-mail Copied!" : <Mail size={35} />}</span>
              </button>
            </div>
          </div>
          <p className="p1">
            I'm a <span className="em-text">Front-End Developer</span> who builds clean, responsive,
            and user-centered interfaces that are intuitive, accessible and user-friendly. I also
            have experience in e-commerce and a strong eye for design.
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
        <img src="/assets/movie_theatre.svg" className="hero-image" />
      </div>
      <div className="skills-container">
        <h2 className="sub-title">My Skills</h2>
        <div className="stacks-wrapper">
          <h3>Tech Stacks</h3>
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
          <h3>Tools</h3>
          <div className="icon-container">
            <button className="icon-btn">
              <FaGitAlt className="stack-icons" />
              <span>Git / GitHub</span>
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
        </div>
      </div>
    </section>
  );
}
