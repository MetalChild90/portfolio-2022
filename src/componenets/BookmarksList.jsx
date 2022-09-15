import Bookmark from "./Bookmark";
import projects from "../data/projectsData";

function BookmarksList() {
  return (
    <div className="Projects-bookmarks-wrapper">
      {projects.map((project, i) => (
        <Bookmark key={i} project={project} />
      ))}
    </div>
  );
}

export default BookmarksList;
