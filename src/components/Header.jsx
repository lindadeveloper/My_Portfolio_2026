import ToggleTheme from "./ToggleTheme";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, House, Presentation, CircleQuestionMark, Mail } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuToggle() {
    setMenuOpen((prevMenuState) => !prevMenuState);
  }

  const hamburger = menuOpen ? <X size={30} strokeWidth="1" /> : <Menu size={30} strokeWidth="1" />;
  const toggleMenu = { display: menuOpen ? "block" : "none" };

  return (
    <header>
      <nav className="nav-bar">
        <Link to="/" className="logo">
          Linda Liu
        </Link>
        <div className="theme-btn">
          <ToggleTheme />
        </div>
        <div className="ham-btn">
          <button onClick={menuToggle} className="hamburgerToggle">
            {hamburger}
          </button>
        </div>
      </nav>

      <nav className="nav-menu" style={toggleMenu}>
        <ul>
          <div className="menu-logo">
            <img src="/assets/Linda-avatar.svg" />
            <h1>Linda Liu</h1>
          </div>
          <li className="home">
            <NavLink to="/" onClick={menuToggle} className="nav-link">
              <House />
              Home
            </NavLink>
          </li>
          <li className="projects">
            <NavLink to="projects" onClick={menuToggle} className="nav-link">
              <Presentation />
              Projects
            </NavLink>
          </li>
          <li className="about">
            <NavLink to="about" onClick={menuToggle} className="nav-link">
              <CircleQuestionMark />
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
