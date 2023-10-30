import { ToggleInfoItem } from "../ToggleInfoItem/ToggleInfoItem";
import "./About.css";

export const About = () => {
  //LOGICA
  return (
    <div className="agency_about">
      <div>
        <img src="https://cdn.sanity.io/images/kjhc3ivf/production/27fd87cf47e375e7870566a1f4385b30c1d17886-6941x4627.jpg" />
      </div>
      <div>
        <h2>Realizamos proyectos desde 2016</h2>
        <span>
          Iniciamos en 2016 en Tijuana, B.C. como un equipo multidisciplinario
          enfocado en los resultados de ventas para las empresas en las que
          colaboramos Contamos con especialistas en Mercadotecnia, Publicidad,
          Diseño Gráfico, Desarrollo web, Fotografía, Producción Audiovisual y
          Analítica.
        </span>

        <div className="toggle_info_item_container">
          <ToggleInfoItem
            index={1}
            title={"Nuestra visión"}
            content={
              "Nos consolidamos día a día como la agencia de marketing de mayor confianza para las empresas."
            }
          />
          <ToggleInfoItem
            index={2}
            title={"Valores"}
            content={"honestidad, creatividad y puntualidad."}
          />
          <ToggleInfoItem
            index={3}
            title={"Nuestra misión"}
            content={
              "Nuestra misión en la Agencia Valmaz Marketing es brindar soluciones de marketing innovadoras y efectivas a nuestros clientes para ayudarlos a alcanzar sus objetivos de negocio y posicionarse de manera destacada en su mercado. Trabajamos con dedicación y pasión para ofrecer un servicio personalizado y de alta calidad que refleje los valores y la visión de cada empresa. Nos esforzamos por mantenernos actualizados en las últimas tendencias y tecnologías del marketing para garantizar el éxito de nuestros clientes y su satisfacción en cada proyecto que emprendemos juntos."
            }
          />
        </div>
      </div>
    </div>
  );
};
