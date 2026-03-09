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
        <Link to="to-do-list-app" className="project-btn">
          To-Do List App
        </Link>
        <Link to="blog-app" className="project-btn">
          Blog App
        </Link>
        <Link to="uxui" className="project-btn">
          UX UI projects
        </Link>
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
