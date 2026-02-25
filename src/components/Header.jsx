import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";
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
    <header className="nav-container">
      <nav className="nav-bar">
        <h1 className="logo">Linda Liu</h1>
        <div className="theme-btn">
          <ToggleTheme />
        </div>
        <div className="ham-btn">
          <button onClick={menuToggle} className="hamburgerToggle">
            {hamburger}
          </button>
        </div>
        <ul className="nav-menu" style={toggleMenu}>
          <h1 className="logo-menu">Linda Liu</h1>
          <li className="home">
            <Link to="/" onClick={menuToggle} className="nav-link">
              <House />
              Home
            </Link>
          </li>
          <li className="projects">
            <Link to="/projects" onClick={menuToggle} className="nav-link">
              <Presentation />
              Projects
            </Link>
          </li>
          <li className="about">
            <Link to="/about" onClick={menuToggle} className="nav-link">
              <CircleQuestionMark />
              About
            </Link>
          </li>
          <li className="contact">
            <Link to="/contact" onClick={menuToggle} className="nav-link">
              <Mail />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
