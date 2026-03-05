import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { CiCircleChevUp } from "react-icons/ci";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <button className="back-to-top-btn" aria-label="Back to top">
        <a className="back-to-top-arrow" href="#top">
          <CiCircleChevUp size={50} />
        </a>
        UP
      </button>
      <Footer />
    </>
  );
}
