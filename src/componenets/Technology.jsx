import PropTypes from "prop-types";
import useToggle from "../hooks/useToggle";

function Technology({ technology, i }) {
  const [hovered, toggleHovered] = useToggle(false);

  const textColor = (chosenColor) => `2px 2px 0 ${chosenColor},
    2px -2px 0 ${chosenColor}, -2px 2px 0 ${chosenColor},
    -2px -2px 0 ${chosenColor}, 2px 0px 0 ${chosenColor},
    0px 2px 0 ${chosenColor}, -2px 0px 0 ${chosenColor},
    0px -2px 0 ${chosenColor}`;

  return (
    <li
      key={i}
      className="Knowledge-item"
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
      style={{
        textShadow: hovered ? textColor(technology.color) : "",
        backgroundColor: hovered ? technology.bgColor : "",
      }}
    >
      {i + 1}. {technology.name}
    </li>
  );
}

Technology.propTypes = {
  technology: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
};

export default Technology;
