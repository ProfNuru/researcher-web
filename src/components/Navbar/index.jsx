import { Link } from "react-router-dom";

const Navbar = ({ routes }) => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.route}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
