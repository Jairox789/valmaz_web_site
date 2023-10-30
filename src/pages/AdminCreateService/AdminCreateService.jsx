import { useEffect, useState } from "react";
import { Create } from "../../components/Admin/ManageService/Create/Create";
import { ServicesDetails } from "../ServicesDetails/ServicesDetails";
import "./AdminCreateService.css";
import { useParams } from "react-router-dom";
import { useApiContext } from "../../context/ApiContext";

export const AdminCreateService = ({ editMode = false }) => {
  //LOGICA
  const [slug, setSlug] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  //EDIT
  const { id } = useParams();
  const [servicesInfo, setServicesInfo] = useState({});
  const { apiUrl } = useApiContext();

  const getServicesInfo = async () => {
    fetch(apiUrl + "/services/" + id)
      .then((response) => response.json())
      .then((data) => {
        setServicesInfo(data);
      });
  };

  const servicesInfoCreate = {
    slug: slug,
    mainImg: mainImg ? mainImg : "",
    title: title,
    summary: summary,
    description: description,
    status: true,
  };

  useEffect(() => {
    if (editMode) {
      getServicesInfo();
    }
  }, []);

  useEffect(() => {
    setTitle(servicesInfo.title);
    setSlug(servicesInfo.slug);
    setMainImg(servicesInfo.mainImg);
    setDescription(servicesInfo.description);
    setSummary(servicesInfo.summary);
  }, [servicesInfo]);

  return (
    <main className="main_admin admin_create_services">
      <div className="admin_create_services_create">
        <h1>{editMode ? "Editar servicio" : "Crear servicio"}</h1>
        <Create
          id={id}
          editMode={editMode}
          setSlug={setSlug}
          slug={slug}
          setMainImg={setMainImg}
          mainImg={mainImg}
          setTitle={setTitle}
          title={title}
          setSummary={setSummary}
          summary={summary}
          setDescription={setDescription}
          description={description}
        />
      </div>
      <div className="admin_create_services_preview">
        <h2>Vista previa de servicio</h2>
        <p>valmaz.com/servicios/{slug}</p>
        <ServicesDetails
          createMode={true}
          servicesInfoCreate={servicesInfoCreate}
        />
      </div>
    </main>
  );
};
