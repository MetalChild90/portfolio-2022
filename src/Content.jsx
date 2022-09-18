import { Routes, Route } from "react-router-dom";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Knowledge from "./pages/Knowledge";
// import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import { useContext } from "react";
import AppContext from "./context/AppContext";

function Content() {
  const { wrapperHeight, contentWidth, orientation } = useContext(AppContext);

  return (
    <>
      <Header />
      <div
        className="wrapper"
        // style={{
        //   height:
        //     contentWidth < 700 && orientation === "landscape"
        //       ? "auto"
        //       : `${wrapperHeight}px`,
        // }}
      >
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Content;
