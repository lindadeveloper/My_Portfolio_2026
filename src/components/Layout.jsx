import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
