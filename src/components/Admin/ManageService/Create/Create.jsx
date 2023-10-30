import { Navigate, useNavigate } from "react-router-dom";
import { useApiContext } from "../../../../context/ApiContext";
import { UploadImage } from "../../UploadImage/UploadImage";
import "./Create.css";

export const Create = ({
  id,
  editMode,
  setSlug,
  slug,
  setMainImg,
  mainImg,
  setTitle,
  title,
  setSummary,
  summary,
  setDescription,
  description,
}) => {
  //LOGICA
  const handleInputs = (setter, info) => {
    setter(info);
  };

  const { apiUrl } = useApiContext();

  const navigate = useNavigate();

  const createService = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("mainImg", mainImg.id);
    formData.append("slug", slug);
    formData.append("summary", summary);
    formData.append("description", description);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/services/", {
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

  const updateService = () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("mainImg", mainImg.id);
    formData.append("slug", slug);
    formData.append("summary", summary);
    formData.append("description", description);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/services_update/", {
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
      title != "" &&
      mainImg != "" &&
      slug != "" &&
      summary != "" &&
      description != ""
    ) {
      isFill = true;
    }
    return isFill;
  };

  return (
    <form className="admin_create_service">
      <label htmlFor="title">Titulo del servicio:</label>
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
        text={"Selecciona una imagen para el servicio"}
        setImg={setMainImg}
        img={mainImg}
        category={"services"}
      />

      <label htmlFor="slug">Slug del servicio:</label>
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

      <label htmlFor="summary">
        Resumen del servicio (El resumen aparecerá en la vista de los carruseles
        de servicios):
      </label>
      <textarea
        className="form-control"
        type="text"
        id="summary"
        name="summary"
        placeholder="Escribe el resumen del servicio"
        value={summary}
        onChange={(e) => {
          handleInputs(setSummary, e.target.value);
        }}
      ></textarea>

      <label htmlFor="description">
        Descripción del servicio (Proporciona la descripción necesaria para el
        servicio):
      </label>
      <textarea
        className="form-control"
        type="text"
        id="description"
        name="description"
        placeholder="Escribe la descripción del servicio"
        value={description}
        onChange={(e) => {
          handleInputs(setDescription, e.target.value);
        }}
      ></textarea>

      <input
        type="submit"
        value="Guardar"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          if (isFormFill()) {
            if (editMode) {
              updateService();
            } else {
              createService();
            }
            navigate("/admin/servicios");
          } else {
            alert("Debes llenar todos los campos");
          }
        }}
      />
    </form>
  );
};
