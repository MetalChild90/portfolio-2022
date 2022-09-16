import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";
import BookmarksList from "../componenets/BookmarksList";
import ProjectDisplay from "../componenets/ProjectDisplay";

function Projects() {
  const { setProjectsWidth } = useContext(AppContext);

  const projectsRef = useRef(null);
  useEffect(() => {
    setProjectsWidth(projectsRef.current.offsetWidth);
  }, [setProjectsWidth]);

  return (
    <div ref={projectsRef} className="Projects">
      <BookmarksList />
      <ProjectDisplay />
    </div>
  );
}

export default Projects;
