import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function AptSearch() {
  return (
    <div className="content-container">
      <Link to="../projects" className="back-btn">
        <ChevronLeft /> Back to all Projects
      </Link>
      <h1 className="project-title">Real Time Chat App</h1>
      <div className="live-demo-github-link-wrapper">
        <a href="" alt="Live Demo" className="live-demo-github">
          Live Demo
        </a>
        <span>|</span>
        <a href="" alt="GitHub Link" className="live-demo-github">
          GitHub
        </a>
        <span>|</span>
        <p>Chat with an Ai Assistant</p>
      </div>
      <p className="p-default project-p">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
        pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
        aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
        Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
        aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
      </p>
    </div>
  );
}
