import "./Menu.css";
import { MenuItem } from "../Home/MenuItem/MenuItem";

export const Menu = ({ menuVisible, toggleMenu }) => {
  //LOGICA

  return (
    <div className={`menu_container ${menuVisible ? "" : "hide"}`}>
      <h1>MENU</h1>

      <div className="menu_container_sections ">
        <ul>
          <MenuItem
            num={"01"}
            text={"Inicio"}
            link={"/"}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            num={"02"}
            text={"Servicios"}
            link={"/servicios"}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            num={"03"}
            text={"Proyectos"}
            link={"/proyectos"}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            num={"04"}
            text={"Agencia"}
            link={"/agencia"}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            num={"05"}
            text={"Talentos"}
            link={"/talento"}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            num={"06"}
            text={"Blog"}
            link={"/blog"}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            num={"07"}
            text={"Cotizar"}
            link={"/cotizar"}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            num={"08"}
            text={"Mi cuenta"}
            link={"/mi-cuenta"}
            toggleMenu={toggleMenu}
          />
        </ul>
      </div>
      <div className="menu_container_info ">
        <div>
          <h2>Estudio</h2>
          <span>26-30 New Damietta El-Mahalla El-Kubra, SK1 66LM</span>
        </div>
        <div>
          <h2>Contacto</h2>
          <p>+00 (2)012 3321</p>
          <p>info@VALMAZ.COM</p>
        </div>
        <div>
          <h2>Siguenos</h2>
          <div className="menu_container_info_social ">
            <span>Linkedin</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};
