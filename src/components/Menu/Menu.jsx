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
          <span>
            Blvd. Agua Caliente 9955-Int. 507, Calete, 22044 Tijuana, B.C.
          </span>
        </div>
        <div>
          <h2>Contacto</h2>
          <a href="tel:+526648895225">
            <p>+526648895225</p>
          </a>
          <a href="mailto: victor@valmaz.com">
            <p>victor@valmaz.com</p>
          </a>
        </div>
        <div>
          <h2>Siguenos</h2>
          <div className="menu_container_info_social ">
            <a href="https://www.facebook.com/valmazmarketingdigital/">
              <span>Facebook</span>
            </a>

            <a href="https://www.instagram.com/valmazmarketingdigital/">
              <span>Instagram</span>
            </a>

            <a href="https://www.youtube.com/channel/UCx8LF0ZsoTe54xYmi9UUrUw">
              <span>Youtube</span>
            </a>

            <a href="https://www.linkedin.com/company/valmaz-marketing-digital/">
              <span>Linkedin</span>
            </a>

            <a href="https://www.tiktok.com/@valmazmarketing?_t=8gkp43DhzQj&_r=1">
              <span>Tiktok</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
