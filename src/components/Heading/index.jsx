import { Link } from "react-router-dom";
import "./Heading.css";

const Heading = ({ center = true, title, link, linkName }) => {
  return (
    <div className={center ? "center-heading" : "left-heading"}>
      <h1>{title}</h1>
      {link && <Link to={link}>{linkName}</Link>}
    </div>
  );
};

export default Heading;
