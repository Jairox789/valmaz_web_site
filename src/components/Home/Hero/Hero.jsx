import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import "./Hero.css";

export const Hero = () => {
  //LOGICA
  const { themeToggle } = useTheme();

  const logo = themeToggle
    ? "https://i.ibb.co/6gD2t0y/logo-dark.png"
    : "https://i.ibb.co/dKkCKvN/logo-light.png";

  return (
    <section className="home_hero">
      <img src={logo} />
      <h1>Si no vende, no sirve</h1>
      <span>
        Creemos que las estrategias de marketing deben estar enfocadas en
        generar resultados comerciales para tu empresa
      </span>
      <Link className="btn_call_to_action" to={"/cotizar"}>
        Cotizar
      </Link>
    </section>
  );
};
