import Navlink from "../ui/Navlink";
import "./Navbar.css";

const Navbar = ({ routes }) => {
  return (
    <nav className="navbar">
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Navlink path={route.path} label={route.route} />
          </li>
        ))}
      </ul>

      <div className="mobileMenuBtn">
        <button>
          <span className="top-bar"></span>
          <span className="mid-bar"></span>
          <span className="bottom-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
