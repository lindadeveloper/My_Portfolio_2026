import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ToggleTheme from "./components/ToggleTheme";
import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className="nav-container" data-theme={darkTheme ? "dark" : "light"}>
        <div className="header-container">
          <Header />
          <ToggleTheme isDark={darkTheme} darkToggle={() => setDarkTheme(!darkTheme)} />
        </div>
      </div>
      <div className="content-container">
        <Main />
        <Footer />
      </div>
    </>
  );
}
