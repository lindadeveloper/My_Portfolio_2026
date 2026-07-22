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
          className="link"
        >
          Live Demo
        </a>
        <span>|</span>
        <a
          href="https://github.com/lindadeveloper/Budget_App"
          alt="GitHub Link"
          className="link"
        >
          GitHub
        </a>
        <span>|</span>
        <p>A budget app to track all your expenses</p>
        <span>|</span>
        <p>Team Size: 1 (solo)</p>
        <span>|</span>
        <p>Status: Work in progress</p>
      </div>
      <p className="p-default project-p">
        I designed and developed this budget app with a focus on intuitive UX/UI
        and user-friendly experience. I initially created the design in Figma
        and conducted user research to better understand how users interact with
        the app's layout. I then refined the design and added features to
        improve usability and intuitiveness. I spent three weeks building this
        app using only HTML, CSS, and JavaScript.
      </p>
      <ul>
        <h2>Next step:</h2>
        <li>Implement switching and adding categories</li>
        <li>Work on backend database logic</li>
        <li>Add protective layers to the login page</li>
        <li>Add a search feature</li>
      </ul>
      <a href="https://budget-app-beta-lemon.vercel.app/" alt="Live Demo">
        <img src="/budgetingAppImg.png" className="preview-img" />
      </a>
    </div>
  );
}
