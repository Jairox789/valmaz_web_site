import "./AdminAgency.css";
import { useEffect, useState } from "react";
import { TestimonyCard } from "../../components/Agency/TestimonyCard/TestimonyCard";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";
import { useApiContext } from "../../context/ApiContext";
import { Modal } from "../../components/Modal/Modal";

export const AdminAgency = () => {
  //LOGICA
  const [modalStateDelete, setModalStateDelete] = useState(false);

  const [testimonysInfoTemp, setTestimonysInfoTemp] = useState({});

  const [testimonys, setTestimonys] = useState([]);

  const openModalDelete = () => {
    setModalStateDelete(true);
  };

  const handleTestimonysInfoTemp = (service) => {
    setTestimonysInfoTemp(service);
  };

  const { apiUrl } = useApiContext();

  const getTestimonials = async () => {
    fetch(apiUrl + "/testimonials/")
      .then((response) => response.json())
      .then((data) => {
        setTestimonys(data);
      });
  };

  const deleteTestimolias = (id) => {
    fetch(apiUrl + "/testimonials_delete/" + id, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
        getTestimonials();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    document.title = "Administrador de sitio (Agencia)";
    getTestimonials();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main_admin admin_agency">
      <AdminAddElement
        title={"Testimonios"}
        toAdd={"Añadir un nuevo testimonio"}
        link={"/admin/agencia/crear/"}
      />
      {testimonys.length > 0 ? (
        <div className="testimony_container">
          {testimonys.map((testimony, index) => (
            <TestimonyCard
              key={index}
              id={testimony.id}
              name={testimony.name}
              img={testimony.img}
              facebook={testimony.social.facebook}
              instagram={testimony.social.instagram}
              linkedin={testimony.social.linkedin}
              website={testimony.social.website}
              twitter={testimony.social.twitter}
              editMode={true}
              openModalDelete={openModalDelete}
              handleTestimonysInfoTemp={handleTestimonysInfoTemp}
            />
          ))}
        </div>
      ) : (
        <h2 className="not_availables_title">No hay testimonios disponibles</h2>
      )}

      <Modal
        modalState={modalStateDelete}
        setModalState={setModalStateDelete}
        tabTitle={"Eliminar testimonio"}
      >
        <p>
          ¿Estás seguro que deseas eliminar el testimonio de{" "}
          <b>{testimonysInfoTemp.name}</b>?
        </p>

        <div className="btn_container">
          <button
            onClick={() => {
              deleteTestimolias(testimonysInfoTemp.id);
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
