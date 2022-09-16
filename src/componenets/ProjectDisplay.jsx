import { useContext } from "react";
import AppContext from "../context/AppContext";
function ProjectDisplay() {
  const { projects, activeBookmark, contentWidth, bookmarkWidth } =
    useContext(AppContext);
  return (
    activeBookmark !== null && (
      <div
        className={`Project-detail-wrapper ${
          activeBookmark !== null && "Project-detail-visible"
        }`}
        style={{
          width: `${contentWidth}px`,
          marginLeft: `${
            activeBookmark === 0
              ? 0
              : activeBookmark === 1
              ? bookmarkWidth
              : bookmarkWidth * 2
          }px`,
        }}
      >
        <div>
          <div className="Project-detail-title">
            <p>{projects[activeBookmark].title}</p>
          </div>
          <div className="Project-detail-image-box">
            <img
              src={projects[activeBookmark].image}
              alt={projects[activeBookmark].title}
            />
          </div>
          <div className="Project-detail-links">
            <div className="Project-detail-link">
              <p>Live: </p>
              <a href="http://github.com">http://github.com</a>
            </div>
            <div className="Project-detail-link">
              <p>Code: </p>
              <a href="http://github.com">http://github.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProjectDisplay;
