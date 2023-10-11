import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  text,
  link,
  blankTab = false,
  toggler = false,
  active = false,
  fxn = () => {},
}) => {
  return (
    <Link
      target={blankTab ? "_blank" : "_self"}
      to={link}
      onClick={fxn}
      className={`${active ? "activeButton" : "actionButton"} ${
        toggler ? "toggle-btn" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
