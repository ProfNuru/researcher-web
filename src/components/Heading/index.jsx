import { Link } from "react-router-dom";
import "./Heading.css";

const Heading = ({
  center = true,
  textCase = "uppercase",
  title,
  link,
  linkName,
}) => {
  return (
    <div className={center ? "center-heading" : "left-heading"}>
      <h1
        style={{
          textTransform: textCase,
        }}
      >
        {title}
      </h1>
      {link && <Link to={link}>{linkName}</Link>}
    </div>
  );
};

export default Heading;
