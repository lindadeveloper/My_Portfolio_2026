import { Sun, Moon } from "lucide-react";

export default function ToggleTheme({ isDarkTheme, darkToggle }) {
  let toggleText = isDarkTheme ? "Dark" : "Light";
  let toggleIcon = isDarkTheme ? <Moon size={16} /> : <Sun size={16} />;
  return (
    <button
      role="switch"
      aria-checked={isDarkTheme}
      className="darkModeToggle"
      onClick={darkToggle}
    >
      {toggleIcon}
      <div className="toggleThemeText">{toggleText}</div>
    </button>
  );
}
