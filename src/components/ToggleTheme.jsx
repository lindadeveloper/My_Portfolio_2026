import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function ToggleTheme() {
  const { themeToggle, darkTheme } = useContext(ThemeContext);
  let toggleText = darkTheme ? "Dark" : "Light";
  let toggleIcon = darkTheme ? <Moon size={16} /> : <Sun size={16} />;

  return (
    <button role="switch" aria-checked={darkTheme} className="darkModeToggle" onClick={themeToggle}>
      {toggleIcon}
      <div className="toggleThemeText">{toggleText}</div>
    </button>
  );
}
