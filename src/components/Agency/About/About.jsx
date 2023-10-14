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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis placerat orci. Suspendisse at sem eleifend, dictum magna a, congue augue. Aenean mattis lorem faucibus, auctor lectus id, suscipit nunc. Suspendisse sagittis egestas lacus, quis ultricies lorem malesuada a"
            }
          />
          <ToggleInfoItem
            index={2}
            title={"Nuestras metas"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis placerat orci. Suspendisse at sem eleifend, dictum magna a, congue augue. Aenean mattis lorem faucibus, auctor lectus id, suscipit nunc. Suspendisse sagittis egestas lacus, quis ultricies lorem malesuada a"
            }
          />
          <ToggleInfoItem
            index={3}
            title={"Nuestra misión"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis placerat orci. Suspendisse at sem eleifend, dictum magna a, congue augue. Aenean mattis lorem faucibus, auctor lectus id, suscipit nunc. Suspendisse sagittis egestas lacus, quis ultricies lorem malesuada a"
            }
          />
        </div>
      </div>
    </div>
  );
};
