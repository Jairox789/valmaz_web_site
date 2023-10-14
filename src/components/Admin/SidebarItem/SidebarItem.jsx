import "./SidebarItem.css";
import { Link } from "react-router-dom";

export function SidebarItem({ link, text }) {
  return (
    <li className="item">
      {/* Usa el componente Link en lugar del elemento a */}
      <Link to={link} className="nav_link">
        {text}
      </Link>
    </li>
  );
}
