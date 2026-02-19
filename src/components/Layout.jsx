import Footer from "./Footer";
import Header from "./Header";
import Projects from "../pages/Projects";
import useLocalStorage from "use-local-storage";

export default function Layout() {
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);
  return (
    <div className="app-container" data-theme={darkTheme ? "dark" : "light"}>
      <Header isDark={darkTheme} toggleClick={() => setDarkTheme(!darkTheme)} />
      <Projects />
      <Footer />
    </div>
  );
}
