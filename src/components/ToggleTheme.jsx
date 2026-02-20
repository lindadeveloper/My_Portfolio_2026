import { Sun, Moon } from "lucide-react";

export default function ToggleTheme({ isDarkToggled }) {
  let toggleText = isDarkToggled ? "Dark" : "Light";
  let toggleIcon = isDarkToggled ? <Moon size={16} /> : <Sun size={16} />;

  return (
    <button
      role="switch"
      aria-checked={isDarkToggled}
      className="darkModeToggle"
      onClick={isDarkToggled}
    >
      {toggleIcon}
      <div className="toggleThemeText">{toggleText}</div>
    </button>
  );
}
