import Footer from "./Footer";
import Header from "./Header";
import Projects from "../pages/Projects";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Layout({ children }) {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className="app-container" data-theme={currentTheme}>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}
