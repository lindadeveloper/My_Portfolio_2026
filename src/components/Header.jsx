import ToggleTheme from "./ToggleTheme";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  House,
  Presentation,
  CircleQuestionMark,
  GraduationCap,
  Mail,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import LindaAvatar from "/assets/LindaAvatar.svg";
// import { CiCircleChevUp } from "react-icons/ci";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  /*On scroll, the nav bar show shadow*/
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 0 ? true : false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*Closes the menu when clicked outside of the menu*/
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  /*Toggle open /closes the menu when clicked on the hamburger button*/
  function menuToggle() {
    setMenuOpen((prevMenuState) => !prevMenuState);
  }

  const hamburger = menuOpen ? <X size={30} strokeWidth="1" /> : <Menu size={30} strokeWidth="1" />;
  const toggleMenu = { display: menuOpen ? "block" : "none" };

  return (
    // <header id="top">
    <header className={scroll ? "header-nav-bar scrolled" : "header-nav-bar"}>
      <nav className="nav-bar">
        <Link to="/" className="logo">
          Linda Liu
        </Link>
        <div className="theme-btn">
          <ToggleTheme />
        </div>
        <div className="ham-btn" ref={buttonRef}>
          <button onClick={menuToggle} className="hamburgerToggle">
            {hamburger}
          </button>
        </div>

        <nav className="nav-menu" style={toggleMenu} ref={menuRef}>
          <ul>
            <div className="menu-logo">
              <img src={LindaAvatar} alt="Avatar Image" />
              <h1>Linda Liu</h1>
            </div>
            <div className="nav-btn">
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
              <li className="education">
                <NavLink to="education" onClick={menuToggle} className="nav-link">
                  <GraduationCap />
                  Education
                </NavLink>
              </li>
              <li className="about">
                <NavLink to="about" onClick={menuToggle} className="nav-link">
                  <CircleQuestionMark />
                  About
                </NavLink>
              </li>
              <li className="contact">
                <NavLink to="contact" onClick={menuToggle} className="nav-link">
                  <Mail />
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </nav>
      {/* <button className="back-to-top-btn" aria-label="Back to top">
        <a className="back-to-top-arrow" href="#top">
          <CiCircleChevUp size={50} />
        </a>
        UP
      </button> */}
    </header>
  );
}
