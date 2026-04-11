import { PiCertificate } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import CourseraLogo from "/assets/CourseraLogo.svg";
import ScrimbaLogo from "/assets/ScrimbaLogo.svg";
import UdacityLogo from "/assets/UdacityLogo.svg";
import WGULogo from "/assets/WGULogo.png";

export default function Education() {
  return (
    <div className="education-container">
      <div className="breadcrumb">
        <Link to="/" className="back-btn">
          <ChevronLeft />
          Home
        </Link>
        <Link to="../projects" className="back-btn">
          <ChevronLeft />
          Projects
        </Link>
        <Link to="../contact" className="back-btn">
          <ChevronLeft />
          Contact
        </Link>
      </div>
      <h2 className="sub-title">My Education</h2>

      {/* <div className="edu-wrapper">
        <div className="edu-container">
          <div className="edu-logo-container">
            <img src={ScrimbaLogo} alt="Scrimba Logo" className="edu-logo" />
            <h4 className="opaque-logo-text">Scrimba</h4>
          </div>
          <div>
            <h3>Full Stack Developer Path 2026~Ongoing</h3>
            <p className="opaque-text">
              Built full-stack applications by creating REST APIs with Node.js/Express and managing
              data with MongoDB and integrating front-end interfaces with backend services.
              Integrated AI features into applications using LLM APIs, prompt engineering, and
              modern AI workflows.
            </p>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">React</span>
              <span className="lang-learned">Javascript</span>
              <span className="lang-learned">HTML/CSS</span>
              <span className="lang-learned">Next.js</span>
              <span className="lang-learned">Node.js</span>
              <span className="lang-learned">Express</span>
              <span className="lang-learned">SQL</span>
              <span className="lang-learned">JSON</span>
              <span className="lang-learned">TypeScript</span>
              <span className="lang-learned">REST/API</span>
              <span className="lang-learned">Authentication</span>
              <span className="lang-learned">Ai Engineering</span>
              <span className="lang-learned">RAG & Agents</span>
              <span className="lang-learned">Deployment</span>
              <span className="lang-learned">Best Practices</span>
            </div>
          </div>
        </div>
        <div className="certificate-globe-wrapper">
          <a href="https://scrimba.com/?via=u4217c86" target="_blank" className="certificate-btn">
            <PiCertificate size={30} />
          </a>
          <a href="https://scrimba.com/?via=u4217c86" target="_blank" className="globe-icon">
            <FaGlobe size={20} />
          </a>
        </div>
      </div> */}

      <div className="edu-wrapper">
        <div className="edu-container">
          <div className="edu-logo-container">
            <img src={WGULogo} alt="WGU Logo" className="edu-logo" />
            <h4 className="opaque-logo-text">Western Governors University</h4>
          </div>
          <div>
            <h3>Bachelor of Science in Computer Science 2026~Ongoing</h3>
            <p className="opaque-text">
              Learning programming such as Java, C++, data structures, and algorithms, along with
              core concepts in systems, databases, and software engineering. It also includes math
              foundations and exposure to AI and networking, combining theory and practical skills
              for software development careers.
            </p>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">Algorithms</span>
              <span className="lang-learned">Data Structures</span>
              <span className="lang-learned">API</span>
              <span className="lang-learned">C++</span>
              <span className="lang-learned">Java</span>
              <span className="lang-learned">SQL</span>
              <span className="lang-learned">Git</span>
              <span className="lang-learned">Services & Databases</span>
              <span className="lang-learned">Computer Architecture</span>
              <span className="lang-learned">Linux</span>
              <span className="lang-learned">Ai & Machine Learning</span>
              <span className="lang-learned">Math & Calculus</span>
              <span className="lang-learned">Networking & Security</span>
              <span className="lang-learned">Agile & Scrum</span>
            </div>
          </div>
        </div>
        <div className="certificate-globe-wrapper">
          <a href="https://www.wgu.edu/" target="_blank" className="certificate-btn">
            <PiCertificate size={30} />
          </a>
          <a href="https://www.wgu.edu/" target="_blank" className="globe-icon">
            <FaGlobe size={20} />
          </a>
        </div>
      </div>

      <div className="edu-wrapper">
        <div className="edu-container">
          <div className="edu-logo-container">
            <img src={ScrimbaLogo} alt="Scrimba Logo" className="edu-logo" />
            <h4 className="opaque-logo-text">Scrimba</h4>
          </div>
          <div>
            <h3>Front-End Developer Path 2025~2026</h3>
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
            <img src={UdacityLogo} alt="Udacity Logo" className="edu-logo" />
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
            <img src={CourseraLogo} alt="Coursera Logo" className="edu-logo" />
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
