import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Layout from "./components/Layout";
import useLocalStorage from "use-local-storage";
import { ThemeContext } from "./Context";
const ProjectLayout = lazy(() => import("./layouts/ProjectLayout"));
const Layout = lazy(() => import("./layouts/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Contact = lazy(() => import("./pages/Contact"));
const BudgetApp = lazy(() => import("./pages/Projects/BudgetApp"));
const AptSearch = lazy(() => import("./pages/Projects/AptSearch"));
const RecipeApp = lazy(() => import("./pages/Projects/RecipeApp"));
const UXUI = lazy(() => import("./pages/Projects/UXUI"));

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
                <Route path="/projects/recipe-app" element={<RecipeApp />} />
                <Route path="/projects/apt-search-tool" element={<AptSearch />} />
                <Route path="/projects/budget-app" element={<BudgetApp />} />
                <Route path="/projects/uxui" element={<UXUI />} />
                <Route path="about" element={<About />} />
                <Route path="education" element={<Education />} />
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
