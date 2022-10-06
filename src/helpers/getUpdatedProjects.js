export const getUpdatedProjects = (projects, activeBookmark) => {
  let currentProjects = [];

  if (activeBookmark === 2) {
    currentProjects = projects.map((item) => {
      if (item.id === 2) {
        return { ...item, bookmarkMoved: true };
      } else if (item.id !== 2) {
        return { ...item, bookmarkMoved: false };
      }
      return item;
    });
  } else if (activeBookmark === 1) {
    currentProjects = projects.map((item) => {
      if (item.id >= 1) {
        return { ...item, bookmarkMoved: true };
      } else if (item.id < 1) {
        return { ...item, bookmarkMoved: false };
      }
      return item;
    });
  } else if (activeBookmark === 0) {
    currentProjects = projects.map((item) => {
      return { ...item, bookmarkMoved: true };
    });
  } else if (activeBookmark === null) {
    currentProjects = projects.map((item) => {
      return { ...item, bookmarkMoved: false };
    });
  }
  return currentProjects;
};
