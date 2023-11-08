import { useEffect, useState } from "react";
import "./AdminCreatePortfolios.css";
import { useParams } from "react-router-dom";
import { useApiContext } from "../../context/ApiContext";
import { Create } from "../../components/Admin/ManagePortfolio/Create/Create";
import { PortfoliosDetails } from "../PortfoliosDetails/PortfoliosDetails";

export const AdminCreatePortfolios = ({ editMode = false }) => {
  //LOGICA
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [description, setDescription] = useState("");
  const [servicesInfo, setServicesInfo] = useState({});
  const [servicesSelected, setServicesSelected] = useState({});
  const [portfolioInfo, setPortfolioInfo] = useState({});
  //EDIT
  const { id } = useParams();
  const { apiUrl } = useApiContext();

  const getPortfolioInfo = async () => {
    fetch(apiUrl + "/portfolio/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPortfolioInfo(data);
      });
  };

  const portfolioInfoCreate = {
    mainImg: mainImg ? mainImg : "",
    slug: slug,
    title: title,
    service: "servicesSelected", // ARREGLAR
    description: description,
    imgs: imgs,
    status: true,
  };

  useEffect(() => {
    if (editMode) {
      getPortfolioInfo();
    }
  }, []);

  useEffect(() => {
    if (editMode) {
      setMainImg(portfolioInfo.mainImg);
      setSlug(portfolioInfo.slug);
      setTitle(portfolioInfo.title);
      setServicesSelected(
        portfolioInfo.service ? portfolioInfo.service.id : ""
      );
      setDescription(portfolioInfo.description);
      setImgs(portfolioInfo.imgs ? portfolioInfo.imgs : []);
    }
  }, [portfolioInfo]);

  return (
    <main className="main_admin admin_create_services">
      <div className="admin_create_services_create">
        <h1>{editMode ? "Editar proyecto" : "Crear proyecto"}</h1>
        <Create
          id={id}
          editMode={editMode}
          setSlug={setSlug}
          slug={slug}
          setMainImg={setMainImg}
          mainImg={mainImg}
          setImgs={setImgs}
          imgs={imgs}
          setTitle={setTitle}
          title={title}
          setDescription={setDescription}
          description={description}
          setServices={setServicesInfo}
          service={servicesInfo}
          servicesSelected={servicesSelected}
          setServicesSelected={setServicesSelected}
        />
      </div>

      <div className="admin_create_portfolios_preview">
        <h2>Vista previa del proyecto</h2>
        <p>valmaz.com/proyectos/{slug}</p>
        <PortfoliosDetails
          createMode={true}
          portfolioInfoCreate={portfolioInfoCreate}
        />
      </div>
    </main>
  );
};
