import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);

  function themeToggle() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  const currentTheme = darkTheme ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ currentTheme, themeToggle, darkTheme }}>
      <div className="body-container" data-theme={currentTheme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
