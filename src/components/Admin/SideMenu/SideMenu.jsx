import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import "./SideMenu.css";

export const SideMenu = () => {
  //LOGICA
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav>
      <aside className="side_menu_admin">
        <div className="side_menu_admin_info">
          <p>Panel de administración</p>
          <p>Valmaz®</p>
        </div>
        <ul className="menu_items">
          <SidebarItem text="Incio" link="/admin/" />
          <SidebarItem text="Servicios" link="/admin/servicios" />
          <SidebarItem text="Proyectos" link="/admin/proyectos" />
          <SidebarItem text="Agencia" link="/admin/agencia" />
          <SidebarItem text="Talento" link="/admin/talento" />
          <SidebarItem text="Blogs" link="/admin/blog" />
          <SidebarItem text="Cotizar" link="/admin/cotizar" />
          <SidebarItem text="Mi cuenta" link="/admin/mi-cuenta" />
        </ul>
        <div className="side_menu_admin_close_session">
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </aside>
    </nav>
  );
};
