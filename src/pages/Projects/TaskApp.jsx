import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function TaskApp() {
  return (
    <div className="content-container">
      <Link to="../projects" className="back-btn">
        <ChevronLeft /> Back to all Projects
      </Link>
      <h1 className="project-title">Kanban Task App</h1>
      <div className="live-demo-github-link-wrapper">
        <a href="" alt="Live Demo" className="live-demo-github">
          Live Demo
        </a>
        <span>|</span>
        <a href="" alt="GitHub Link" className="live-demo-github">
          GitHub
        </a>
        <span>|</span>
        <p>Short description</p>
      </div>
      <ul className="p-default project-p">
        <li>✔ Drag tasks between columns</li>
        <li>✔ Reorder tasks in column</li>
        <li>✔ Task detail modal</li>
        <li>✔ Data persistence (backend or localStorage)</li>
        <li>✔ Responsive UI</li>

        <li>✔ Multiple boards</li>
        <li>✔ Search/filter</li>
        <li>✔ Authentication</li>
        <li>✔ Backend API</li>
      </ul>
    </div>
  );
}
