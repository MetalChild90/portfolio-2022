import { Routes, Route } from "react-router-dom";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Knowledge from "./pages/Knowledge";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import { useContext } from "react";
import AppContext from "./context/AppContext";

function Content() {
  const { wrapperHeight } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className="wrapper" style={{ height: `${wrapperHeight}px` }}>
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Content;
