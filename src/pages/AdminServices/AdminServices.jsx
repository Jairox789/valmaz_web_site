import { useEffect, useState } from "react";
import { SliderTwo } from "../../components/Sliders/SliderTwo/SliderTwo";
import "./AdminServices.css";
import { Modal } from "../../components/Modal/Modal";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";
import { useApiContext } from "../../context/ApiContext";

export const AdminServices = () => {
  //LOGICA
  const [servicesInfo, setServicesInfo] = useState([]);

  const { apiUrl } = useApiContext();

  const getServicesInfo = async () => {
    fetch(apiUrl + "/services/")
      .then((response) => response.json())
      .then((data) => {
        setServicesInfo(data);
      });
  };

  const deleteServices = (id) => {
    fetch(apiUrl + "/services/" + id, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getServicesInfo();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    getServicesInfo();
    window.scrollTo(0, 0);
  }, []);

  const [modalStateDelete, setModalStateDelete] = useState(false);

  const [servicesInfoTemp, setServicesInfoTemp] = useState({});

  const openModalDelete = () => {
    setModalStateDelete(true);
  };

  const handleServicesInfoTemp = (service) => {
    setServicesInfoTemp(service);
  };

  return (
    <main className="main_admin admin_services">
      <AdminAddElement
        title={"Servicios"}
        toAdd={"Añadir nuevo servicio"}
        link={"/admin/servicios/crear/"}
      />

      <SliderTwo
        info={servicesInfo}
        adminMode={true}
        openModalDelete={openModalDelete}
        handleServicesInfoTemp={handleServicesInfoTemp}
      />

      <Modal
        modalState={modalStateDelete}
        setModalState={setModalStateDelete}
        tabTitle={"Eliminar servicio"}
      >
        <p>
          ¿Estás seguro que deseas eliminar el servicio{" "}
          <b>{servicesInfoTemp.title}</b>?
        </p>

        <div className="btn_container">
          <button
            onClick={() => {
              deleteServices(servicesInfoTemp.id);
              getServicesInfo();
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
    </main>
  );
};
