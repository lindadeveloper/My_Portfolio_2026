import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function BudgetApp() {
  return (
    <div className="content-container">
      <Link to="../projects" className="back-btn">
        <ChevronLeft /> Back to all Projects
      </Link>
      <h1 className="project-title">Budget App</h1>
      <div className="live-demo-github-link-wrapper">
        <a
          href="https://budget-app-beta-lemon.vercel.app/"
          alt="Live Demo"
          className="live-demo-github"
        >
          Live Demo
        </a>
        <span>|</span>
        <a href="" alt="GitHub Link" className="live-demo-github">
          GitHub
        </a>
        <span>|</span>
        <p>A budget app to track all your expenses</p>
      </div>
      <p className="p-default project-p">
        I designed and developed this budget app with a focus on intuitive UX/UI and user-friendly
        experience. I initially created the design in Figma and conducted user research to better
        understand how users interact with the app's layout. I then refined the design and added
        features to improve usability and intuitiveness. I spent two weeks building this app using
        only HTML, CSS, and JavaScript. This project is still a work in progress.
      </p>
    </div>
  );
}
