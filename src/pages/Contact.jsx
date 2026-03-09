import { FaRegCopy } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaMedium, FaYoutube } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
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
    <section className="content-container">
      <div className="breadcrumb">
        <Link to="../projects" className="back-btn">
          <ChevronLeft />
          Projects
        </Link>
        <Link to="../about" className="back-btn-middle">
          <ChevronLeft />
          About
        </Link>
      </div>
      <div className="contact-container">
        <div className="contact-links">
          <h1 className="contact-h1">Git in touch!</h1>
          <div className="links-container-long-text">
            <p className="key-text">Best way to reach me</p>
            <div className="value-wrap-long-text">
              <a href="mailto: lindacodesdev@gmail.com" className="value-text">
                <span>{isCopied ? "Copied!" : "lindacodesdev@gmail.com"}</span>
              </a>
              <FaRegCopy size={20} className="value-icon" title="Copy email" onClick={copyText} />
            </div>
          </div>

          <a href="" className="links-container" target="_blank">
            <p className="key-text">My Resumé</p>
            <div className="value-wrap">
              <p className="value-text">Download Resumé</p>
              <MdDownload size={20} className="value-icon" title="Download" />
            </div>
          </a>

          <a href="https://github.com/lindadeveloper" className="links-container" target="_blank">
            <p className="key-text">
              <FaGithub size={20} className="value-icon" title="GitHub" />
              GitHub
            </p>
            <div className="value-wrap">
              <p className="value-text">@LindaDeveloper</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/lindadeveloper/"
            className="links-container"
            target="_blank"
          >
            <p className="key-text">
              <FaLinkedin size={20} className="value-icon" title="Linkedin" />
              Linkedin
            </p>
            <div className="value-wrap">
              <p className="value-text">@LindaDeveloper</p>
            </div>
          </a>

          <a href="https://x.com/LindaDeveloper" className="links-container" target="_blank">
            <p className="key-text">
              <PiXLogo size={20} className="value-icon" title="X twitter" />
              Twitter
            </p>
            <div className="value-wrap">
              <p className="value-text">@LindaDeveloper</p>
            </div>
          </a>

          <a href="https://medium.com/@lindadeveloper" className="links-container" target="_blank">
            <p className="key-text">
              <FaMedium size={20} className="value-icon" title="Medium" />
              Medium
            </p>
            <div className="value-wrap">
              <p className="value-text">@LindaDeveloper</p>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@lindadeveloper"
            className="links-container"
            target="_blank"
          >
            <p className="key-text">
              <FaYoutube size={20} className="value-icon" title="YouTube" />
              YouTube
            </p>
            <div className="value-wrap">
              <p className="value-text">@LindaDeveloper</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
