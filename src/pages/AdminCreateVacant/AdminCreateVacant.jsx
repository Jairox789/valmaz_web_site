import { useEffect, useState } from "react";
import "./AdminCreateVacant.css";
import { Create } from "../../components/Admin/ManageTalent/Create/Create";
import { AdminTalentCard } from "../../components/Admin/AdminTalentCard/AdminTalentCard";
import { useParams } from "react-router-dom";
import { useApiContext } from "../../context/ApiContext";

export const AdminCreateVacant = ({ editMode = false }) => {
  //LOGICA
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [state, setState] = useState(false);

  const { id } = useParams();
  const [vacant, setVacant] = useState({});
  const { apiUrl } = useApiContext();

  const getVacant = async () => {
    fetch(apiUrl + "/vacants/" + id)
      .then((response) => response.json())
      .then((data) => {
        setVacant(data[0]);
      });
  };

  useEffect(() => {
    getVacant();
  }, []);

  useEffect(() => {
    setName(vacant.name);
    setImg(vacant.img ? vacant.img : "");
    setState(vacant.state);
  }, [vacant]);

  return (
    <main className="main_admin admin_create_vacant">
      <h1>{editMode ? "Editar vacante" : "Crear vacante"}</h1>
      <Create
        id={id}
        editMode={editMode}
        setName={setName}
        name={name}
        setImg={setImg}
        img={img}
        state={state}
        setState={setState}
      />

      <h2>Vista previa de la vacante</h2>

      <AdminTalentCard name={name} img={img.url ? img.url : ""} state={state} />
    </main>
  );
};
