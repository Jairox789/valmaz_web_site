import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = ({ toggleMenu }) => {
  //LOGICA
  const { themeToggle } = useTheme();
  const logo = themeToggle
    ? "https://i.ibb.co/6gD2t0y/logo-dark.png"
    : "https://i.ibb.co/dKkCKvN/logo-light.png";
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
      <div className="nav_hamburguer_menu">
        <GiHamburgerMenu onClick={toggleMenu} />
        <span>Menú</span>
      </div>
    </nav>
  );
};
