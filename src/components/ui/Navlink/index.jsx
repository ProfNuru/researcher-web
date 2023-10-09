import { Link } from "react-router-dom";
import "./Navlink.css";

const Navlink = ({
  path,
  label,
  activeNav = false,
  mobile = false,
  afterClick,
}) => {
  return (
    <Link
      className={`${mobile ? "mobile-navlink" : "navlink"} ${
        activeNav ? "active-navlink" : ""
      }`}
      to={path}
      onClick={afterClick ? afterClick : () => {}}
    >
      {label}
    </Link>
  );
};

export default Navlink;
