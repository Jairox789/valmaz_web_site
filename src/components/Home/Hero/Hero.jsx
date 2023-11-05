import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import "./Hero.css";

export const Hero = () => {
  const { themeToggle } = useTheme();

  const logo =
    themeToggle === "dark"
      ? "http://valmaz.com/valmaz_web_site_backend/public/media/logo_dark.png"
      : "http://valmaz.com/valmaz_web_site_backend/public/media/logo_light.png";

  return (
    <section className="home_hero">
      <img src={logo} alt="Logo" />
      <h1 className="home_hero_title">Si no vende, no sirve</h1>
      <span>
        Creemos que las estrategias de marketing deben estar enfocadas en
        generar resultados comerciales para tu empresa
      </span>
      <Link className="btn_call_to_action" to="/cotizar">
        Cotizar
      </Link>
    </section>
  );
};
