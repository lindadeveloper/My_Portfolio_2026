import ToggleTheme from "./ToggleTheme";
import useLocalStorage from "use-local-storage";

export default function Header() {
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);

  return (
    <header className="nav-container">
      <nav className="nav-bar" data-theme={darkTheme ? "dark" : undefined}>
        <h1 className="logo">
          <a href="">Linda Liu</a>
        </h1>
        <ul className="nav-menu">
          <li className="menu">
            <a href="">Home</a>
          </li>
          <li className="menu">
            <a href="">Projects</a>
          </li>
          <li className="menu">
            <a href="">About</a>
          </li>
          <li className="menu">
            <a href="">Contact</a>
          </li>
        </ul>
        <ToggleTheme isDark={darkTheme} darkToggle={() => setDarkTheme(!darkTheme)} />
      </nav>
    </header>
  );
}
