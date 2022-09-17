import { createContext, useEffect, useState, useCallback } from "react";
import beachImage from "../images/beach.png";
import trackerImage from "../images/tracker.png";

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

  const updateWrapperHeight = useCallback(() => {
    setWrapperHeight(window.innerHeight - headerHeight - footerHeight);
  }, [setWrapperHeight, footerHeight, headerHeight]);

  useEffect(() => {
    window.addEventListener("resize", updateWrapperHeight);
    setWrapperHeight(window.innerHeight - headerHeight - footerHeight);
    return () => {
      console.log("dismount");
      window.removeEventListener("resize", updateWrapperHeight);
    };
  }, [setWrapperHeight, footerHeight, headerHeight, updateWrapperHeight]);

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

  const isLandscape = () =>
      window.matchMedia("(orientation:landscape)").matches,
    [orientation, setOrientation] = useState(
      isLandscape() ? "landscape" : "portrait"
    ),
    onWindowResize = useCallback(() => {
      clearTimeout(window.resizeLag);
      window.resizeLag = setTimeout(() => {
        delete window.resizeLag;
        setOrientation(isLandscape() ? "landscape" : "portrait");
      }, 200);
    }, []);

  useEffect(
    () => (
      onWindowResize(),
      window.addEventListener("resize", onWindowResize),
      () => window.removeEventListener("resize", onWindowResize)
    ),
    [onWindowResize]
  );

  return (
    <AppContext.Provider
      value={{
        projects,
        orientation,
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
