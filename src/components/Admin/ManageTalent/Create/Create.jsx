import { UploadImage } from "../../UploadImage/UploadImage";
import "./Create.css";
import { useApiContext } from "../../../../context/ApiContext";
import { useNavigate } from "react-router-dom";

export const Create = ({
  id,
  editMode,
  setName,
  name,
  setImg,
  img,
  state,
  setState,
}) => {
  //LOGICA

  const handleInputs = (setter, info) => {
    setter(info);
  };

  const { apiUrl } = useApiContext();

  const navigate = useNavigate();

  const createVacant = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", img.id);
    formData.append("state", state);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/vacants/", {
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

  const updateVacant = () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("img", img.id);
    formData.append("state", state);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/vacants_update/", {
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
    if (name != "" && img != "" && state != null) {
      isFill = true;
    }
    return isFill;
  };

  return (
    <form className="admin_create_service">
      <label htmlFor="title">Nombre de la vacante:</label>
      <input
        className="form-control"
        type="text"
        id="name"
        name="name"
        placeholder="Escribe el nombre de la vacante"
        value={name}
        onChange={(e) => {
          handleInputs(setName, e.target.value);
        }}
      />
      <UploadImage
        text={"Selecciona una imagen para la vacante"}
        setImg={setImg}
        category={"vacant"}
      />

      <label>Estado inicial de la vacante</label>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value={true}
          checked={state === true}
          onChange={(e) => setState(true)}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Activa
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value={false}
          checked={state === false}
          onChange={(e) => setState(false)}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Inactiva
        </label>
      </div>

      <input
        type="submit"
        value={editMode ? "Editar" : "Crear"}
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          if (isFormFill()) {
            if (editMode) {
              updateVacant();
            } else {
              createVacant();
            }
            navigate("/admin/talento");
          } else {
            alert("Debes llenar todos los campos");
          }
        }}
      />
    </form>
  );
};
