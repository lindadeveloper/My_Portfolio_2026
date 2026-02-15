export default function Header() {
  return (
    <header>
      <h1>
        <a href="">Linda Liu</a>
      </h1>
      <nav className="navBar">
        <ul>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="light-dark-switch"></button>
    </header>
  );
}
