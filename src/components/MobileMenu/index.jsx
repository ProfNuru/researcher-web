import MenuButton from "../ui/MenuButton";
import Navlink from "../ui/Navlink";
import "./MobileMenu.css";

const MobileMenu = ({ menuItems, closeMenuFxn }) => {
  // console.log(menuItems);
  return (
    <div className="menuOverlay">
      <ul className="mobileMenu">
        <header>
          <MenuButton open={false} fxn={closeMenuFxn} />
        </header>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Navlink
              mobile={true}
              path={item.path}
              label={item.route}
              afterClick={closeMenuFxn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
