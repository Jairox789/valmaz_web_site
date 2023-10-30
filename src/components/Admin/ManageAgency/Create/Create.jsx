import { useNavigate } from "react-router-dom";
import { UploadImage } from "../../UploadImage/UploadImage";
import "./Create.css";
import { useApiContext } from "../../../../context/ApiContext";

export const Create = ({
  id,
  editMode,
  setName,
  name,
  setImg,
  img,
  setFacebook,
  facebook,
  setInstagram,
  instagram,
  setLinkedin,
  linkedin,
  setWebsite,
  website,
  setTwitter,
  twitter,
}) => {
  //LOGICA
  const handleInputs = (setter, info) => {
    setter(info);
  };

  const { apiUrl } = useApiContext();

  const navigate = useNavigate();

  const createTestimony = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", img.id);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    formData.append("website", website);
    formData.append("twitter", twitter);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/testimonials/", {
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

  const updateTestimony = () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("img", img.id);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    formData.append("website", website);
    formData.append("twitter", twitter);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/testimonials_update/", {
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
    if (name != "" && img != "") {
      isFill = true;
    }
    return isFill;
  };

  return (
    <form className="admin_create_service">
      <label htmlFor="title">Nombre del testimonio:</label>
      <input
        className="form-control"
        type="text"
        id="testimony"
        name="testimony"
        placeholder="Escribe el nombre del testimonio"
        value={name}
        onChange={(e) => {
          handleInputs(setName, e.target.value);
        }}
      />

      <UploadImage
        text={"Selecciona una imagen para el testimonio"}
        setImg={setImg}
        img={img}
        category={"Testimony"}
      />

      <label htmlFor="facebook">Facebook:</label>
      <input
        className="form-control"
        type="text"
        id="facebook"
        name="facebook"
        placeholder="Facebook"
        value={facebook}
        onChange={(e) => {
          handleInputs(setFacebook, e.target.value);
        }}
      />

      <label htmlFor="instagram">Instagram:</label>
      <input
        className="form-control"
        type="text"
        id="instagram"
        name="instagram"
        placeholder="Instagram"
        value={instagram}
        onChange={(e) => {
          handleInputs(setInstagram, e.target.value);
        }}
      />

      <label htmlFor="linkedin">Linkedin:</label>
      <input
        className="form-control"
        type="text"
        id="linkedin"
        name="linkedin"
        placeholder="Linkedin"
        value={linkedin}
        onChange={(e) => {
          handleInputs(setLinkedin, e.target.value);
        }}
      />

      <label htmlFor="twitter">Twitter:</label>
      <input
        className="form-control"
        type="text"
        id="twitter"
        name="twitter"
        placeholder="Twitter"
        value={twitter}
        onChange={(e) => {
          handleInputs(setTwitter, e.target.value);
        }}
      />

      <label htmlFor="web">Sitio web:</label>
      <input
        className="form-control"
        type="text"
        id="web"
        name="web"
        placeholder="Sitio web"
        value={website}
        onChange={(e) => {
          handleInputs(setWebsite, e.target.value);
        }}
      />

      <input
        type="submit"
        value={"Crear"}
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          if (isFormFill()) {
            if (editMode) {
              updateTestimony();
            } else {
              createTestimony();
            }
            navigate("/admin/agencia");
          } else {
            alert("Debes agregar por lo menos un nombre y una imagen");
          }
        }}
      />
    </form>
  );
};
