import { createContext, useEffect, useState } from "react";
import beachImage from "../images/beach.png";
import trackerImage from "../images/tracker.png";
import $ from "jquery";

const AppContext = createContext();

export const Provider = ({ children }) => {
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [bookmarkWidth, setBookmarkWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [activeBookmark, setActiveBookmark] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Paradise Beach",
      image: beachImage,
      website: "",
      github: "",
      bookmarkMoved: false,
    },
    {
      id: 1,
      title: "Crypto Tracker",
      image: trackerImage,
      website: "",
      github: "",
      bookmarkMoved: false,
    },
    {
      id: 2,
      title: "Anime Character Review",
      image: beachImage,
      website: "",
      github: "",
      bookmarkMoved: false,
    },
  ]);

  useEffect(() => {
    setContentWidth(projectsWidth - bookmarkWidth * 3);
  }, [projectsWidth, bookmarkWidth]);

  useEffect(() => {
    setWrapperHeight($(window).height() - headerHeight - footerHeight);
  }, [wrapperHeight, footerHeight, headerHeight]);

  useEffect(() => {
    if (activeBookmark === 2) {
      const newProjectsArray = () => {
        return projects.map((item) => {
          if (item.id === 2) {
            return { ...item, bookmarkMoved: true };
          } else if (item.id !== 2) {
            return { ...item, bookmarkMoved: false };
          }
          return item;
        });
      };
      setProjects(newProjectsArray);
    } else if (activeBookmark === 1) {
      const newProjectsArray = () => {
        return projects.map((item) => {
          if (item.id >= 1) {
            return { ...item, bookmarkMoved: true };
          } else if (item.id < 1) {
            return { ...item, bookmarkMoved: false };
          }
          return item;
        });
      };
      setProjects(newProjectsArray);
    } else if (activeBookmark === 0) {
      const newProjectsArray = () => {
        return projects.map((item) => {
          return { ...item, bookmarkMoved: true };
        });
      };
      setProjects(newProjectsArray);
    } else if (activeBookmark === null) {
      const newProjectsArray = () => {
        return projects.map((item) => {
          return { ...item, bookmarkMoved: false };
        });
      };
      setProjects(newProjectsArray);
    }
    // eslint-disable-next-line
  }, [activeBookmark]);

  return (
    <AppContext.Provider
      value={{
        projects,
        contentWidth,
        bookmarkWidth,
        setBookmarkWidth,
        setProjectsWidth,
        activeBookmark,
        setActiveBookmark,
        setFooterHeight,
        wrapperHeight,
        setHeaderHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
