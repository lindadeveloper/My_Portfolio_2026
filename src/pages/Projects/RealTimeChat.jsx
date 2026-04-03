import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function RealTimeChat() {
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
        <p>Chat with an Ai Travel Planner</p>
      </div>
      <p className="p-default project-p">Coming Soon!...</p>
    </div>
  );
}
