import { useEffect, useState } from "react";
import { useApiContext } from "../../../../context/ApiContext";
import "./ViewTalent.css";

export const ViewTalent = ({ talentInfo, setModalState, update }) => {
  //LOGICA
  const { apiUrl } = useApiContext();
  const [talent, setTalent] = useState({});

  const getTalentInfo = async () => {
    fetch(apiUrl + "/talent_info/" + talentInfo.id)
      .then((response) => response.json())
      .then((data) => {
        setTalent(data);
      });
  };

  const deleteTalent = () => {
    fetch(apiUrl + "/talents_delete/" + talent.id, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    getTalentInfo();
  }, []);

  return (
    <div className="view_talent">
      <p>Nombre: {talent.name}</p>
      <p>Número teléfonico: {talent.phone}</p>
      <p>Correo electrónico: {talent.email}</p>
      <p>Vacante que solicita: {talent.vacant ? talent.vacant[0].name : ""}</p>

      <div className="view_talent_options">
        <a target="_blank" href={talent.cv} className="btn btn-primary">
          Ver CV
        </a>
        <button
          onClick={() => {
            deleteTalent();
            update();
            setModalState(false);
          }}
          className="btn btn-danger"
        >
          Eliminar solicitud
        </button>
      </div>
    </div>
  );
};
