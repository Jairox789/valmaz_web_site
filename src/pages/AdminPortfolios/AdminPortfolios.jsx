import "./AdminPortfolios.css";
import { useEffect, useState } from "react";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";
import { useApiContext } from "../../context/ApiContext";
import { Modal } from "../../components/Modal/Modal";
import { PortfoliosCard } from "../../components/Portfolios/PortfoliosCard/PortfoliosCard";

export const AdminPortfolios = () => {
  //LOGICA
  const [modalStateDelete, setModalStateDelete] = useState(false);

  const [portfolioInfoTemp, setPortfolioInfoTemp] = useState({});

  const [portfolioInfo, setPortfolioInfo] = useState([]);

  const openModalDelete = () => {
    setModalStateDelete(true);
  };

  const handlePortfolioInfoTemp = (service) => {
    setPortfolioInfoTemp(service);
  };

  const { apiUrl } = useApiContext();

  const getPortfolioInfo = async () => {
    fetch(apiUrl + "/portfolio/")
      .then((response) => response.json())
      .then((data) => {
        setPortfolioInfo(data);
      });
  };

  const deletePortfolio = (id) => {
    fetch(apiUrl + "/portfolio_delete/" + id, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
        getPortfolioInfo();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    document.title = "Administrador de sitio (Proyectos)";
    getPortfolioInfo();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main_admin admin_agency">
      <AdminAddElement
        title={"Proyectos"}
        toAdd={"Añadir un nuevo proyecto"}
        link={"/admin/proyectos/crear/"}
      />

      {portfolioInfo.length > 0 ? (
        <div className="portfolios_card_container">
          {portfolioInfo.map((portfolio, index) => (
            <PortfoliosCard
              key={index}
              id={portfolio.id}
              title={portfolio.title}
              service={portfolio.service}
              img={portfolio.mainImg}
              slug={portfolio.slug}
              adminMode={true}
              openModalDelete={openModalDelete}
              handlePortfolioInfoTemp={handlePortfolioInfoTemp}
            />
          ))}
        </div>
      ) : (
        <h2 className="not_availables_title">No hay proyectos disponibles</h2>
      )}

      <Modal
        modalState={modalStateDelete}
        setModalState={setModalStateDelete}
        tabTitle={"Eliminar proyecto"}
      >
        <p>
          ¿Estás seguro que deseas eliminar el proyecto{" "}
          <b>{portfolioInfoTemp.title}</b>?
        </p>

        <div className="btn_container">
          <button
            onClick={() => {
              deletePortfolio(portfolioInfoTemp.id);
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
