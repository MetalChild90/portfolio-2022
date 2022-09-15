// import { useState } from "react";

function Bookmark({ project }) {
  //   const [bookmarkClicked, setBookmarkClicked] = useState(false);
  //   const [translateVar, setTranslateVar] = useState("");

  //   const handleClick = () => {
  //     setClicked((prevState) => !prevState);
  //     setTranslateVar(`translateX(${projectsWidth - 150}px)`);
  //   };

  return (
    <div
      className="Project-shrinked"
      // style={{
      //   transform: bookmarkClicked ? translateVar : "translateX(0px)",
      //   borderLeft: bookmarkClicked ? "3px solid var(--black)" : "none",
      // }}
      // onClick={handleClick}
    >
      <div className="Project-shrinked-text">{project.title}</div>
    </div>
  );
}

export default Bookmark;
