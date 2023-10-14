import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { SocialMediaIcon } from "../SocialMedia/SocialMediaIcon/SocialMediaIcon";
import "./Footer.css";
import {
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
} from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
export const Footer = () => {
  //LOGICA
  const { themeToggle } = useTheme();

  const logo = themeToggle
    ? "https://i.ibb.co/6gD2t0y/logo-dark.png"
    : "https://i.ibb.co/dKkCKvN/logo-light.png";

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_info">
        <div className="footer_info_medias">
          <Link to={"/"}>
            <img src={logo} />
          </Link>
          <div className="social_media_icon_container">
            <SocialMediaIcon link={"facebook.com"} icon={<BiLogoFacebook />} />
            <SocialMediaIcon link={"twitter.com"} icon={<BsTwitter />} />
            <SocialMediaIcon link={"linkedin.com"} icon={<BiLogoLinkedin />} />
            <SocialMediaIcon
              link={"instagram.com"}
              icon={<BiLogoInstagramAlt />}
            />
          </div>
        </div>
        <div className="footer_info_navegation">
          <h3>Navegación</h3>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/agencia">Agencia</Link>
          <Link to="/talentos">Talentos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cotizar">Cotizar</Link>
          <Link to="/mi-cuenta">Mi cuenta</Link>
        </div>
        <div className="footer_info_contact">
          <h3>Contacto</h3>
          <a href="tel:+526648895251">T. 664 889 5251</a>
          <a href="mailto: info@valmaz.com">E. Info@valmaz.com</a>
        </div>
        <div className="footer_info_address">
          <h3>Dirección</h3>
          <span>
            Blvd. Agua Caliente 9955-Int. 507, Calete, 22044 Tijuana, B.C.
          </span>
        </div>
      </div>
      <p>&copy; {currentYear} Valmaz marketing.</p>
    </footer>
  );
};
