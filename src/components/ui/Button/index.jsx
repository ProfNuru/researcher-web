import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  text,
  link,
  toggler = false,
  active = false,
  fxn = () => {},
}) => {
  return (
    <Link
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
