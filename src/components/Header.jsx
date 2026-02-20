import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Header() {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <header className="nav-container">
      <nav className="nav-bar">
        <h1 className="logo">Linda Liu</h1>
        <ul className="nav-menu">
          <li className="menu">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="menu">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="menu">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="menu">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <ToggleTheme isDarkToggled={themeToggle} />
      </nav>
    </header>
  );
}
