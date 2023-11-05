import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = ({ toggleMenu, isMenuVisible }) => {
  //LOGICA
  const { themeToggle } = useTheme();

  const logo =
    themeToggle === "dark"
      ? "http://valmaz.com/valmaz_web_site_backend/public/media/logo_dark.png"
      : "http://valmaz.com/valmaz_web_site_backend/public/media/logo_light.png";
  return (
    <nav>
      <div className="nav_logo">
        <Link to="/">
          <img
            src={logo}
            onClick={() => {
              toggleMenu(false);
            }}
          />
        </Link>
      </div>
      <div onClick={toggleMenu} className="nav_hamburguer_menu">
        {isMenuVisible ? (
          <AiOutlineClose className="menu-icon" />
        ) : (
          <GiHamburgerMenu className="menu-icon" />
        )}

        <span>Menú</span>
      </div>
    </nav>
  );
};
