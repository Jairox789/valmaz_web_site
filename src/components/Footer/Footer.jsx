import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { SocialMediaIcon } from "../SocialMedia/SocialMediaIcon/SocialMediaIcon";
import "./Footer.css";
import {
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoTiktok,
} from "react-icons/bi";
export const Footer = () => {
  //LOGICA
  const { themeToggle } = useTheme();

  const logo =
    themeToggle === "dark"
      ? "/src/assets/logo_dark.png"
      : "/src/assets/logo_light.png";

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_info">
        <div className="footer_info_medias">
          <Link to={"/"}>
            <img src={logo} />
          </Link>
          <div className="social_media_icon_container">
            <SocialMediaIcon
              link={"https://www.facebook.com/valmazmarketingdigital"}
              icon={<BiLogoFacebook />}
            />
            <SocialMediaIcon
              link={"https://www.instagram.com/valmazmarketingdigital/"}
              icon={<BiLogoInstagramAlt />}
            />
            <SocialMediaIcon
              link={"https://www.youtube.com/channel/UCx8LF0ZsoTe54xYmi9UUrUw"}
              icon={<BiLogoYoutube />}
            />
            <SocialMediaIcon
              link={
                "https://www.linkedin.com/company/valmaz-marketing-digital/"
              }
              icon={<BiLogoLinkedin />}
            />
            <SocialMediaIcon
              link={
                "https://www.tiktok.com/@valmazmarketing?_t=8gkp43DhzQj&_r=1"
              }
              icon={<BiLogoTiktok />}
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
          <a href="tel:+526648895225">T. 6648895225</a>
          <a href="mailto: victor@valmaz.com">E. victor@valmaz.com</a>
        </div>
        <div className="footer_info_address">
          <h3>Dirección</h3>
          <a href="https://www.google.com.mx/maps/place/Valmaz+Marketing/@32.5177417,-117.0206858,17z/data=!3m1!4b1!4m6!3m5!1s0x80d94840208ff4ab:0x91081caa78c1cc22!8m2!3d32.5177372!4d-117.0181109!16s%2Fg%2F11dylrt914?entry=ttu">
            Blvd. Agua Caliente 9955-Int. 507, Calete, 22044 Tijuana, B.C.
          </a>
        </div>
      </div>
      <p>&copy; {currentYear} Valmaz marketing.</p>
    </footer>
  );
};
