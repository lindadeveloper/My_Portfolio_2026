import { NavLink, Outlet } from "react-router-dom";

export default function ProjectLayout() {
  return (
    <section className="content-container">
      <NavLink to="/projects/website" className="project-btn">
        Website
      </NavLink>
      <NavLink to="/projects/games" className="project-btn">
        Games
      </NavLink>
      <Outlet />
    </section>
  );
}
