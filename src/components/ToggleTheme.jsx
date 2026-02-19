import { Sun, Moon } from "lucide-react";

export default function ToggleTheme({ isDark, darkToggle }) {
  let toggleText = isDark ? "Dark" : "Light";
  let toggleIcon = isDark ? <Moon size={16} /> : <Sun size={16} />;

  return (
    <button role="switch" aria-checked={isDark} className="darkModeToggle" onClick={darkToggle}>
      {toggleIcon}
      <div className="toggleThemeText">{toggleText}</div>
    </button>
  );
}
