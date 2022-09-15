import { useState } from "react";

function Technology({ technology, i }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered((prevState) => !prevState);
  };

  const handleMouseLeave = () => {
    setHovered((prevState) => !prevState);
  };

  const textColor = (chosenColor) => `2px 2px 0 ${chosenColor},
    2px -2px 0 ${chosenColor}, -2px 2px 0 ${chosenColor},
    -2px -2px 0 ${chosenColor}, 2px 0px 0 ${chosenColor},
    0px 2px 0 ${chosenColor}, -2px 0px 0 ${chosenColor},
    0px -2px 0 ${chosenColor}`;

  return (
    <li
      key={i}
      className="Knowledge-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        textShadow: hovered ? textColor(technology.color) : "",
        backgroundColor: hovered ? technology.bgColor : "",
      }}
    >
      {i + 1}. {technology.name}
    </li>
  );
}

export default Technology;
