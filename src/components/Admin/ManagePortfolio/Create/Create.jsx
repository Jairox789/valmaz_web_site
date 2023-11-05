import { useNavigate } from "react-router-dom";
import { useApiContext } from "../../../../context/ApiContext";
import { UploadImage } from "../../UploadImage/UploadImage";
import "./Create.css";
import { useEffect, useState } from "react";
import { InsertImagesPortfolio } from "../InsertImagesPortfolio/InsertImagesPortfolio";

export const Create = ({
  id,
  editMode,
  setSlug,
  slug,
  setMainImg,
  mainImg,
  setImgs,
  imgs,
  setTitle,
  title,
  setDescription,
  description,
  setService,
  service,
  setServicesSelected,
  servicesSelected,
}) => {
  //LOGICA
  const handleInputs = (setter, info) => {
    setter(info);
  };

  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const [servicesList, setServicesList] = useState([]);

  const addImage = () => {
    const updatedContent = [
      ...imgs,
      { id: "", url: "", category: "portfolio" },
    ];
    setImgs(updatedContent);
  };

  const getServices = async () => {
    fetch(apiUrl + "/services/")
      .then((response) => response.json())
      .then((data) => {
        setServicesList(data);
      });
  };

  const { apiUrl } = useApiContext();

  const navigate = useNavigate();

  const createPortfolio = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("mainImg", mainImg.id);
    formData.append("imgs", JSON.stringify(imgs));
    formData.append("description", description);
    formData.append("service", selectedService);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/portfolio/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const updatePortfolio = () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("mainImg", mainImg.id);
    formData.append("imgs", JSON.stringify(imgs));
    formData.append("description", description);
    formData.append("service", selectedService);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/portfolio_update/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const isFormFill = () => {
    let isFill = false;
    if (
      mainImg != "" &&
      slug != "" &&
      title != "" &&
      service != "" &&
      description != "" &&
      imgs != []
    ) {
      isFill = true;
    }
    return isFill;
  };

  useEffect(() => {
    getServices();
  }, []);

  useEffect(() => {
    const getService = servicesList.find((item) => item.id == selectedService);

    setServicesSelected(getService);
  }, [selectedService]);

  return (
    <form className="admin_create_service">
      <label htmlFor="title">Titulo del proyecto:</label>
      <input
        className="form-control"
        type="text"
        id="title"
        name="title"
        placeholder="Escribe el titulo del servicio"
        value={title}
        onChange={(e) => {
          handleInputs(setTitle, e.target.value);
        }}
      />

      <UploadImage
        text={"Selecciona la imagen principal del proyecto"}
        setImg={setMainImg}
        img={mainImg}
        category={"portfolios"}
      />

      <label htmlFor="slug">Slug del proyecto:</label>
      <input
        className="form-control"
        type="text"
        id="slug"
        name="slug"
        placeholder="Escribe el slug aquí"
        value={slug}
        onChange={(e) => {
          handleInputs(setSlug, e.target.value);
        }}
      />

      <button
        className="btn btn-success"
        onClick={(e) => {
          e.preventDefault();
          addImage();
        }}
      >
        Agregar imagen
      </button>

      <InsertImagesPortfolio setImgs={setImgs} imgs={imgs} />

      <label htmlFor="summary">Descripción del proyecto</label>
      <textarea
        className="form-control"
        type="text"
        id="summary"
        name="summary"
        placeholder="Escribe el resumen del servicio"
        value={description}
        onChange={(e) => {
          handleInputs(setDescription, e.target.value);
        }}
      ></textarea>

      <select
        className="form-select"
        name="select"
        value={selectedService} // Usa value para controlar la opción seleccionada
        onChange={handleServiceChange} // Maneja el cambio de selección
      >
        <option value="" disabled>
          Selecciona un servicio
        </option>
        {servicesList.length > 0 ? (
          servicesList.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No hay servicios disponibles
          </option>
        )}
      </select>

      <input
        type="submit"
        value={editMode ? "Editar" : "Guardar"}
        className="btn btn-primary btn_send"
        onClick={(e) => {
          e.preventDefault();
          if (isFormFill()) {
            if (editMode) {
              updatePortfolio();
            } else {
              createPortfolio();
            }
            navigate("/admin/proyectos");
          } else {
            alert("Debes llenar todos los campos");
          }
        }}
      />
    </form>
  );
};
