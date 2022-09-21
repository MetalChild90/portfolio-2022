import { useContext } from "react";
import AppContext from "../context/AppContext";

function ProjectDisplay() {
  const { projects, activeBookmark, contentWidth, bookmarkWidth } =
    useContext(AppContext);

  return (
    activeBookmark !== null && (
      <div
        className={`Project-detail-wrapper inner-wrapper ${
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
            <h3>{projects[activeBookmark].title}</h3>
          </div>
          <div className="Project-detail-image-box">
            <img
              src={projects[activeBookmark].image}
              alt={projects[activeBookmark].title}
            />
          </div>
          <div className="Project-detail-links">
            <div className="Project-detail-link">
              <p>Website: </p>
              <a
                href={projects[activeBookmark].website}
                target="_blank"
                rel="noreferrer"
              >
                {contentWidth <= 700
                  ? "link"
                  : projects[activeBookmark].website}
              </a>
            </div>
            <div className="Project-detail-link">
              <p>Code: </p>
              <a
                href={projects[activeBookmark].github}
                target="_blank"
                rel="noreferrer"
              >
                {contentWidth <= 700 ? "link" : projects[activeBookmark].github}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProjectDisplay;
