import { useContext, useEffect, useRef, useCallback } from "react";
import AppContext from "../context/AppContext";
import BookmarksList from "../componenets/BookmarksList";
import ProjectDisplay from "../componenets/ProjectDisplay";

function Projects() {
  const { setProjectsWidth } = useContext(AppContext);

  const projectsRef = useRef(null);

  const updateDimensions = useCallback(() => {
    if (projectsRef.current) setProjectsWidth(projectsRef.current.offsetWidth);
  }, [setProjectsWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    setProjectsWidth(projectsRef.current.offsetWidth);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [setProjectsWidth, updateDimensions]);

  return (
    <div ref={projectsRef} className="Projects">
      <BookmarksList />
      <ProjectDisplay />
    </div>
  );
}

export default Projects;
