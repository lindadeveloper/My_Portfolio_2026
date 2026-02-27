import { Link } from "react-router-dom";
// import { useState } from "react";

export default function ProjectLayout() {
  // const [hidden, setHidden] = useState(false);
  // function hide() {
  //   setHidden((preHide) => !preHide);
  // }

  return (
    <section className="content-container">
      <Link to="website" className="project-btn">
        Website
      </Link>
      <Link to="games" className="project-btn">
        Games
      </Link>
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
