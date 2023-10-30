import { Link } from "react-router-dom";
import "./MenuItem.css";

export const MenuItem = ({ num, text, link, toggleMenu }) => {
  return (
    <li>
      <span>{num}.</span>
      <Link
        className="menu_item_link"
        onClick={() => {
          toggleMenu(false);
        }}
        to={link}
      >
        <h3>{text}</h3>
      </Link>
    </li>
  );
};
