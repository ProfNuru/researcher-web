import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ text, link, fxn = () => {} }) => {
  return (
    <Link to={link} onClick={fxn} className="actionButton">
      {text}
    </Link>
  );
};

export default Button;
