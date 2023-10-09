import { useState } from "react";
import Navlink from "../ui/Navlink";
import MobileMenu from "../MobileMenu";
import MenuButton from "../ui/MenuButton";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ routes }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navlinks">
        {routes.map((route) => (
          <li key={route.path}>
            <Navlink
              activeNav={location.pathname == route.path}
              path={route.path}
              label={route.route}
            />
          </li>
        ))}
      </ul>

      <div className="mobileMenuBtn">
        {!showMobileMenu && (
          <MenuButton
            open={!showMobileMenu}
            fxn={() => setShowMobileMenu(true)}
          />
        )}

        {showMobileMenu && (
          <MobileMenu
            menuItems={routes}
            closeMenuFxn={() => setShowMobileMenu(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
