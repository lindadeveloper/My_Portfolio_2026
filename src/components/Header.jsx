import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  return (
    <header>
      <h1>
        <a href="">Linda Liu</a>
      </h1>
      <nav className="navBar">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <ToggleThemeButton />
    </header>
  );
}
