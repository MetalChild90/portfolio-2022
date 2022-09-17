import { useContext, useState, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";

function Bookmark({ project }) {
  const {
    contentWidth,
    setActiveBookmark,
    activeBookmark,
    setBookmarkWidth,
    wrapperHeight,
    orientation,
  } = useContext(AppContext);
  const [translateVar, setTranslateVar] = useState("");

  const bookmarkRef = useRef(0);

  useEffect(() => {
    setBookmarkWidth(bookmarkRef.current.offsetWidth);
  }, [setBookmarkWidth]);

  const handleClick = () => {
    if (activeBookmark === 2 && project.id === 2) {
      setActiveBookmark(null);
    } else {
      setActiveBookmark(project.id);
    }
  };

  useEffect(() => {
    setTranslateVar(`translateX(${contentWidth}px)`);
  }, [contentWidth]);

  return (
    <div
      ref={bookmarkRef}
      className="Bookmark"
      style={{
        transform: project.bookmarkMoved ? translateVar : "translateX(0px)",
        borderLeft: project.bookmarkMoved ? "3px solid var(--black)" : "none",
        borderRight: project.bookmarkMoved ? "none" : "3px solid var(--black)",
        height: orientation === "landscape" ? "100vh" : `${wrapperHeight}px`,
      }}
      onClick={handleClick}
    >
      <div className="Bookmark-text">{project.title}</div>
    </div>
  );
}

export default Bookmark;
