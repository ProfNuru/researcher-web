import "./MenuButton.css";

const MenuButton = ({ open = true, fxn }) => {
  return open ? (
    <button className="openMenuButton" onClick={fxn}>
      <span className="top-bar"></span>
      <span className="mid-bar"></span>
      <span className="bottom-bar"></span>
    </button>
  ) : (
    <button className="closeMenuButton" onClick={fxn}>
      <span className="top-bar"></span>
      <span className="bottom-bar"></span>
    </button>
  );
};

export default MenuButton;
