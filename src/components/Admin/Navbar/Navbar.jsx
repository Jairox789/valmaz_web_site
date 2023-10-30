import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { useTheme } from "../../../context/ThemeContext";

export const Navbar = () => {
  //Logica
  const { themeToggle } = useTheme();

  const logo =
    themeToggle === "dark"
      ? "/src/assets/logo_dark.png"
      : "/src/assets/logo_light.png";

  return (
    <nav className="navbar_admin">
      <Link to={"/"}>
        {" "}
        <img src={logo} />
      </Link>
      <div className="navbar_admin_info">
        <div className="navbar_admin_info_user">
          <p>Usuario</p>
          <p>Admin</p>
        </div>
        <BiSolidUserCircle />
      </div>
    </nav>
  );
};
