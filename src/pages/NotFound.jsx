// import break from "../images/break.jpg";
import { Link } from "react";

function NotFound() {
  return (
    <div>
      <div>{/* <img src={break} alt="madhatter" /> */}</div>
      <p>Rabbit hole starts here</p>
      <Link to="/">Go somwhere safe</Link>
    </div>
  );
}

export default NotFound;
