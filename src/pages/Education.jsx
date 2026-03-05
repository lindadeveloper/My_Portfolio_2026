import { PiCertificate } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";

export default function Education() {
  return (
    <div className="education-container">
      <h2 className="sub-title">My Education</h2>
      <div className="edu-wrapper">
        <div className="edu-container">
          <div className="edu-logo-container">
            <img src="/assets/Scrimba_logo.svg" className="edu-logo" />
            <h4 className="opaque-logo-text">Scrimba</h4>
          </div>
          <div>
            <h3>Front-End Developer Path</h3>
            <p className="opaque-text">
              Designed and developed responsive web applications using HTML, CSS, JavaScript, and
              React. Integrated APIs, managed version control with Git, and deployed projects in
              production environments.
            </p>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">React</span>
              <span className="lang-learned">Advanced React</span>
              <span className="lang-learned">Javascript</span>
              <span className="lang-learned">HTML</span>
              <span className="lang-learned">CSS</span>
              <span className="lang-learned">Figma</span>
              <span className="lang-learned">API/REST</span>
              <span className="lang-learned">Accessibility</span>
              <span className="lang-learned">Best Practices</span>
              <span className="lang-learned">GitHub</span>
            </div>
          </div>
        </div>
        <div className="certificate-globe-wrapper">
          <a
            href="https://scrimba.com/frontend-path-c0j;cert24zAwPPowRJgx81zpwEyoCV9kdEQSCPobBTwe"
            target="_blank"
            className="certificate-btn"
          >
            <PiCertificate size={30} />
          </a>
          <a href="https://scrimba.com/?via=u4217c86" target="_blank" className="globe-icon">
            <FaGlobe size={20} />
          </a>
        </div>
      </div>

      <div className="edu-wrapper">
        <div className="edu-container">
          <div className="edu-logo-container">
            <img src="/assets/Udacity_logo.svg" className="edu-logo" />
            <h4 className="opaque-logo-text">Udacity</h4>
          </div>
          <div>
            <h3>Introduction to Programming 2024</h3>
            <p className="opaque-text">
              Built a strong foundation in programming using Python and JavaScript. Gained
              experience with core concepts including variables, data types, conditionals, loops,
              functions, and basic data structures. Applied version control using Git and GitHub,
              and developed hands-on projects such as simple applications and interactive web pages.
            </p>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">Python</span>
              <span className="lang-learned">Javascript</span>
              <span className="lang-learned">HTML</span>
              <span className="lang-learned">CSS</span>
              <span className="lang-learned">API requests</span>
              <span className="lang-learned">JSON</span>
              <span className="lang-learned">Code debugging</span>
              <span className="lang-learned">Flexbox</span>
              <span className="lang-learned">Dev tools</span>
            </div>
          </div>
        </div>
        <div className="certificate-globe-wrapper">
          <a
            href="https://www.udacity.com/certificate/e/ee2656d4-3b61-11ef-a234-93027758fbeb"
            target="_blank"
            className="certificate-btn"
          >
            <PiCertificate size={30} />
          </a>
          <a href="https://www.udacity.com/" target="_blank" className="globe-icon">
            <FaGlobe size={20} />
          </a>
        </div>
      </div>

      <div className="edu-wrapper">
        <div className="edu-container">
          <div className="edu-logo-container">
            <img src="/assets/Coursera_logo.svg" className="edu-logo" />
            <h4 className="opaque-logo-text">Coursera</h4>
          </div>
          <div>
            <h3>Google UX Design 2023</h3>
            <p className="opaque-text">
              Learned the end-to-end user experience design process, from empathizing with users and
              defining pain points to ideating, prototyping, and testing solutions. Built wireframes
              and high-fidelity prototypes in Figma while applying principles of accessibility and
              inclusive design. Conducted user research and usability testing to inform design
              decisions.
            </p>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">Figma (Design Software)</span>
              <span className="lang-learned">Applicant Tracking Systems</span>
              <span className="lang-learned">Design Reviews</span>
              <span className="lang-learned">Design Thinking</span>
              <span className="lang-learned">Information Architecture</span>
              <span className="lang-learned">Interviewing Skills</span>
              <span className="lang-learned">Mobile Development</span>
              <span className="lang-learned">Persona (User Experience)</span>
              <span className="lang-learned">Presentations</span>
              <span className="lang-learned">Responsive Web Design</span>
              <span className="lang-learned">Storyboarding</span>
              <span className="lang-learned">UX/UI Research</span>
            </div>
          </div>
        </div>
        <div className="certificate-globe-wrapper">
          <a
            href="https://coursera.org/share/d6ab578b6ecb3ccdb4fb500a1dc0b433"
            target="_blank"
            className="certificate-btn"
          >
            <PiCertificate size={30} />
          </a>
          <a href="https://www.coursera.org/" target="_blank" className="globe-icon">
            <FaGlobe size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
