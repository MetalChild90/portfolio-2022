import { useContext } from "react";
import AppContext from "../context/AppContext";
import Bookmark from "./Bookmark";
// import projects from "../data/projectsData";

function BookmarksList() {
  const { projects } = useContext(AppContext);

  return (
    <div className="Bookmarks-wrapper">
      {projects.map((project, i) => (
        <Bookmark key={i} project={project} />
      ))}
    </div>
  );
}

export default BookmarksList;
