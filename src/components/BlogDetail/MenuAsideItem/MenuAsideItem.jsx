import { Link } from "react-router-dom";
import "./MenuAsideItem.css";

export const MenuAsideItem = ({ link, text }) => {
  //LOGICA
  return (
    <div className="menu_aside_item">
      <Link to={link}>{text}</Link>
    </div>
  );
};
