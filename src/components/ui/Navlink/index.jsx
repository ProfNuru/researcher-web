import { Link } from "react-router-dom";
import "./Navlink.css";

const Navlink = ({ path, label, mobile = false, afterClick }) => {
  return (
    <Link
      className={mobile ? "mobile-navlink" : "navlink"}
      to={path}
      onClick={afterClick ? afterClick : () => {}}
    >
      {label}
    </Link>
  );
};

export default Navlink;
