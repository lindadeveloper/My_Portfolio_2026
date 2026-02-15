import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="nav-container">
        <div className="header-container">
          <Header />
        </div>
      </div>
      <div className="content-container">
        <Main />
        <Footer />
      </div>
    </>
  );
}
