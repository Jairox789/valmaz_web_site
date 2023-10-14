import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSolidUserCircle } from "react-icons/bi";

export const Navbar = () => {
  //Logica
  return (
    <nav className="navbar_admin">
      <Link to={"/"}>
        {" "}
        <img src="https://i.ibb.co/dKkCKvN/logo-light.png" />
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
