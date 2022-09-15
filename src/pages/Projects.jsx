import { useState, useEffect, useRef } from "react";
import BookmarksList from "../componenets/BookmarksList";

function Projects() {
  // const [projectsWidth, setProjectsWidth] = useState(0);

  // const ref = useRef(null);
  // useEffect(() => {
  //   setProjectsWidth(ref.current.offsetWidth);
  // }, []);

  return (
    // <div ref={ref} className="Projects">
    <div className="Projects">
      <BookmarksList />
      {/* <div
      className={`Project-detail-wrapper ${
        clicked ? "Project-detail-visible" : ""
      }`}
      >
        <div className="Project-detail-image-box">
          <img src={tracker} alt="tracker" />
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
