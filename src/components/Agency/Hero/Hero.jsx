import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  //LOGICA
  return (
    <div className="agency_hero">
      <div className="agency_hero_content">
        <h1 className="agency_hero_content_title">
          Ofrecemos el mejor valor para los negocios
        </h1>
        <span className="agency_hero_content_body">
          Soluciones confiables y probadas que cumplen con las prácticas y
          estándares internacionales de la industria
        </span>
        <Link className="btn_call_to_action_v2" to={"/"}>
          Empezar ahora
        </Link>
      </div>
      <div>
        <img src="https://strategofirma.com/wp-content/uploads/2021/08/Disen%CC%83o-sin-ti%CC%81tulo-8-600x458.png" />
      </div>
    </div>
  );
};
