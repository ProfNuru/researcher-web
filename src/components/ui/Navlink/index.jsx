import { Link } from "react-router-dom";
import "./Navlink.css";

const Navlink = ({ path, label }) => {
  return (
    <Link className="navlink" to={path}>
      {label}
    </Link>
  );
};

export default Navlink;
