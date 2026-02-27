import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Layout from "./components/Layout";
import useLocalStorage from "use-local-storage";
import { ThemeContext } from "./Context";
const Home = lazy(() => import("./pages/Home"));
const ProjectLayout = lazy(() => import("./layouts/ProjectLayout"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Layout = lazy(() => import("./layouts/Layout"));
const Games = lazy(() => import("./pages/Projects/Games"));
const Website = lazy(() => import("./pages/Projects/Website"));

export default function App() {
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);

  function themeToggle() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  const currentTheme = darkTheme ? "dark" : "light";
  // useEffect(() => {c
  //   const savedTheme = localStorage.getItem("darkTheme") || "system";
  //   setDarkTheme(savedTheme);
  // }, []);

  // useEffect(() => {
  //   const root = document.documentElement;

  //   if (darkTheme === "system") {
  //     root.removeAttribute("data-theme");
  //   } else {
  //     root.setAttribute("data-theme", darkTheme);
  //   }
  //   localStorage.setItem("darkTheme", darkTheme);
  // }, [darkTheme]);

  // function themeToggle() {
  //   if (darkTheme === "system") {
  //     return "system";
  //   } else if (darkTheme === "dark") {
  //     return "dark";
  //   } else {
  //     return "light";
  //   }
  // }
  return (
    <ThemeContext.Provider value={{ currentTheme, themeToggle, darkTheme }}>
      <div className="site-wrapper" data-theme={currentTheme}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading Page...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="projects" element={<ProjectLayout />} />
                <Route path="/projects/website" element={<Website />} />
                <Route path="/projects/games" element={<Games />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
