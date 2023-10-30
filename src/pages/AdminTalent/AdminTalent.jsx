import "./AdminTalent.css";
import { AdminTalentCard } from "../../components/Admin/AdminTalentCard/AdminTalentCard";
import { AdminNotifications } from "../../components/Admin/AdminNotifications/AdminNotifications";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";
import { useEffect, useState } from "react";
import { useApiContext } from "../../context/ApiContext";
import { Modal } from "../../components/Modal/Modal";
import { ViewTalent } from "../../components/Admin/ManageTalent/ViewTalent/ViewTalent";

export const AdminTalent = () => {
  //LOGICA
  const [vacantsInfo, setVacantsInfo] = useState([]);
  const [infoNotificationTalent, setInfoNotificationTalent] = useState([]);

  const { apiUrl } = useApiContext();

  const getVacantsInfo = async () => {
    fetch(apiUrl + "/vacants_admin/")
      .then((response) => response.json())
      .then((data) => {
        setVacantsInfo(data);
      });
  };

  const getNotificationTalent = async () => {
    fetch(apiUrl + "/talents_notify/")
      .then((response) => response.json())
      .then((data) => {
        setInfoNotificationTalent(data);
      });
  };

  const deleteVacant = (id) => {
    const formData = new FormData();

    fetch(apiUrl + "/vacants/" + id, {
      method: "DELETE",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
        getVacantsInfo();
        //getNotificationTalent();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const [modalStateDelete, setModalStateDelete] = useState(false);

  const [vacantsInfoTemp, setVacantsInfoTemp] = useState({});

  const [modalStateViewTalent, setModalStateViewTalent] = useState(false);

  const [talentInfoTemp, setTalentInfoTemp] = useState({});

  const openModalDelete = () => {
    setModalStateDelete(true);
  };

  const handleVacantsInfoTemp = (service) => {
    setVacantsInfoTemp(service);
  };

  const openModalView = () => {
    setModalStateViewTalent(true);
  };

  const handleTalentInfoTemp = (service) => {
    setTalentInfoTemp(service);
  };

  useEffect(() => {
    getVacantsInfo();
    getNotificationTalent();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main_admin admin_talent">
      <AdminAddElement
        title={"Talento"}
        toAdd={"Añadir una nueva vacante"}
        link={"/admin/talento/crear/"}
      />

      <AdminNotifications
        textPending={"Solicitudes pendientes"}
        infoNotification={infoNotificationTalent}
        openModal={openModalView}
        handleTemp={handleTalentInfoTemp}
      />

      <div className="admin_talent_container">
        {vacantsInfo.map((talent, index) => (
          <AdminTalentCard
            key={index}
            id={talent.id}
            name={talent.name}
            img={talent.img}
            state={talent.state}
            editMode={true}
            openModalDelete={openModalDelete}
            handleVacantsInfoTemp={handleVacantsInfoTemp}
          />
        ))}
      </div>

      <Modal
        modalState={modalStateDelete}
        setModalState={setModalStateDelete}
        tabTitle={"Eliminar vacante"}
      >
        <p>
          ¿Estás seguro que deseas eliminar el testimonio de{" "}
          <b>{vacantsInfoTemp.name}</b>?
        </p>

        <div className="btn_container">
          <button
            onClick={() => {
              deleteVacant(vacantsInfoTemp.id);
              setModalStateDelete(false);
            }}
            className="btn btn-danger"
          >
            Confirmar
          </button>
          <button
            onClick={() => {
              setModalStateDelete(false);
            }}
            className="btn btn-primary"
          >
            Cerrar
          </button>
        </div>
      </Modal>

      <Modal
        modalState={modalStateViewTalent}
        setModalState={setModalStateViewTalent}
        tabTitle={"Solicitud de " + talentInfoTemp.user}
      >
        <ViewTalent
          talentInfo={talentInfoTemp}
          setModalState={setModalStateViewTalent}
          update={getNotificationTalent}
        />
      </Modal>
    </main>
  );
};
