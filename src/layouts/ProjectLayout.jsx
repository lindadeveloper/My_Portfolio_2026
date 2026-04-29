import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
// import { useState } from "react";

export default function ProjectLayout() {
  // const [hidden, setHidden] = useState(false);
  // function hide() {
  //   setHidden((preHide) => !preHide);
  // }

  return (
    <section className="content-container">
      <div className="breadcrumb">
        <Link to="/" className="back-btn">
          <ChevronLeft />
          Home
        </Link>
        <Link to="../Education" className="back-btn">
          <ChevronLeft />
          Education
        </Link>
        <Link to="../contact" className="back-btn">
          <ChevronLeft />
          Contact
        </Link>
      </div>
      <div className="project-container">
        <Link to="budget-app" className="project-btn project-lang">
          <div className="project-background budgetBackground-img">
            <h2 className="project-title">Budget App</h2>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">React</span>
              <span className="lang-learned">Javascript</span>
              <span className="lang-learned">HTML</span>
              <span className="lang-learned">CSS</span>
              <span className="lang-learned">Mock Data</span>
            </div>
          </div>
        </Link>
        {/* <Link to="real-time-chat-app" className="project-btn project-lang">
          <div className="project-background">
            <h2 className="project-title">Real Time Chat App</h2>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">React</span>
              <span className="lang-learned">Javascript</span>
              <span className="lang-learned">HTML</span>
              <span className="lang-learned">CSS</span>
              <span className="lang-learned">API requests</span>
            </div>
          </div>
        </Link>
        <Link to="Task-app" className="project-btn project-lang">
          <div className="project-background">
            <h2 className="project-title">Kanban Task App</h2>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">React</span>
              <span className="lang-learned">Javascript</span>
              <span className="lang-learned">HTML</span>
              <span className="lang-learned">CSS</span>
              <span className="lang-learned">API requests</span>
            </div>
          </div>
        </Link> */}
        <Link to="crypto-dashboard" className="project-btn project-lang">
          <div className="project-background">
            <h2 className="project-title">Crypto Dashboard</h2>
            <div className="lang-learned-wrapper">
              <span className="lang-learned">React</span>
              <span className="lang-learned">Javascript</span>
              <span className="lang-learned">HTML</span>
              <span className="lang-learned">CSS</span>
              <span className="lang-learned">API requests</span>
            </div>
          </div>
        </Link>
        {/* <Link to="uxui" className="project-btn project-lang">
          UX UI projects
          <div className="lang-learned-wrapper">
            <span className="lang-learned">Figma (Design Software)</span>
            <span className="lang-learned">UX/UI Research</span>
            <span className="lang-learned">User Testing</span>
            <span className="lang-learned">Persona (User Experience)</span>
            <span className="lang-learned">Storyboarding</span>
            <span className="lang-learned">Mobile Development</span>
            <span className="lang-learned">Responsive Web Design</span>
          </div>
        </Link> */}
      </div>
    </section>
  );
}

// {hidden ? (
//           <>
//             <NavLink to="website" className="project-btn" onClick={hide}>
//               Website
//             </NavLink>
//             <NavLink to="games" className="project-btn" onClick={hide}>
//               Games
//             </NavLink>
//           </>
//         ) : (
//           <>
//             <NavLink to="." className="back-btn" onClick={hide}>
//               Back
//             </NavLink>
//             <Outlet />
//           </>
//         )}
