import PropTypes from "prop-types";
import { useContext, useState, useEffect, useRef, useCallback } from "react";
import AppContext from "../context/AppContext";

function Bookmark({ project: { id, title, bookmarkMoved } }) {
  const { contentWidth, setActiveBookmark, activeBookmark, setBookmarkWidth } =
    useContext(AppContext);
  const [translateVar, setTranslateVar] = useState(0);

  const bookmarkRef = useRef(0);

  const updateDimensions = useCallback(() => {
    setBookmarkWidth(bookmarkRef.current.offsetWidth);
  }, [setBookmarkWidth]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    setBookmarkWidth(bookmarkRef.current.offsetWidth);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [setBookmarkWidth, updateDimensions]);

  const handleClick = () => {
    if (activeBookmark === 2 && id === 2) {
      setActiveBookmark(null);
    } else {
      setActiveBookmark(id);
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
        transform: bookmarkMoved ? translateVar : "translateX(0px)",
        borderLeft: bookmarkMoved ? "3px solid var(--black)" : "none",
        borderRight: bookmarkMoved ? "none" : "3px solid var(--black)",
      }}
      onClick={handleClick}
    >
      <div className="Bookmark-text">{title}</div>
    </div>
  );
}

Bookmark.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  bookmarkMoved: PropTypes.bool,
};

export default Bookmark;
