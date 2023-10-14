import "./AdminTalent.css";
import { AdminTalentCard } from "../../components/Admin/AdminTalentCard/AdminTalentCard";
import { AdminNotifications } from "../../components/Admin/AdminNotifications/AdminNotifications";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";

export const AdminTalent = () => {
  //LOGICA
  const talentInfo = [
    {
      id: 1,
      name: "Diseñador web",
      img: "https://www.comunicare.es/wp-content/uploads/2021/08/disenador-web.jpg",
      state: true,
    },
    {
      id: 2,
      name: "Fotografo",
      img: "https://mott.pe/noticias/wp-content/uploads/2018/03/10-tips-para-saber-c%C3%B3mo-ser-un-buen-fot%C3%B3grafo-profesional-portada.jpg",
      state: false,
    },
    {
      id: 3,
      name: "Practicante",
      img: "https://www.managementjournal.net/images/joomlart/article/7e72c9265cdf790f140d9aba9b4800ff.jpg",
      state: true,
    },
  ];

  const infoNotificationTalent = [
    {
      id: 1,
      user: "José Zúñiga",
      content: "Diseñador web", //CAMBIAR POR ID
    },
    {
      id: 2,
      user: "Jorge Tovar",
      content: "Fotografo", //CAMBIAR POR ID
    },
    {
      id: 3,
      user: "Alán Vázquez",
      content: "Practicante", //CAMBIAR POR ID
    },
    {
      id: 4,
      user: "Josue Rocha",
      content: "Practicante", //CAMBIAR POR ID
    },
    {
      id: 5,
      user: "Misael Aguilar",
      content: "Practicante", //CAMBIAR POR ID
    },
  ];

  return (
    <main className="main_admin admin_talent">
      <AdminAddElement title={"Talento"} toAdd={"Añadir una nueva vacante"} />

      <AdminNotifications
        textPending={"Solicitudes pendientes"}
        infoNotification={infoNotificationTalent}
      />

      <div className="admin_talent_container">
        {talentInfo.map((talent, index) => (
          <AdminTalentCard
            key={index}
            name={talent.name}
            img={talent.img}
            state={talent.state}
          />
        ))}
      </div>
    </main>
  );
};
