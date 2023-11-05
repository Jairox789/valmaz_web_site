import { useEffect, useState } from "react";
import "./AdminQuote.css";
import { AdminQuoteTable } from "../../components/Admin/AdminQuoteTable/AdminQuoteTable";
import { useApiContext } from "../../context/ApiContext";
import { Modal } from "../../components/Modal/Modal";

export const AdminQuote = () => {
  //Logica
  const [quoteInfo, setQuoteInfo] = useState([]);
  const { apiUrl } = useApiContext();

  const getQuoteInfo = async () => {
    fetch(apiUrl + "/quote/")
      .then((response) => response.json())
      .then((data) => {
        setQuoteInfo(data);
      });
  };

  useEffect(() => {
    document.title = "Administrador de sitio (Cotizaciones)";
    getQuoteInfo();
    window.scrollTo(0, 0);
  }, []);

  const deleteQuote = (id) => {
    fetch(apiUrl + "/quote_delete/" + id, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
        getQuoteInfo();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const [quoteInfoTemp, setQuoteInfoTemp] = useState({});
  const [modalStateDelete, setModalStateDelete] = useState(false);
  const openModalDelete = () => {
    setModalStateDelete(true);
  };

  const handleQuoteInfoTemp = (service) => {
    setQuoteInfoTemp(service);
  };

  return (
    <main className="main_admin admin_quote">
      <h1>Cotizaciones</h1>
      {quoteInfo.length > 0 ? (
        <AdminQuoteTable
          handleQuoteInfoTemp={handleQuoteInfoTemp}
          openModalDelete={openModalDelete}
          quoteInfo={quoteInfo}
        />
      ) : (
        <h2>Sin cotizaciones disponibles</h2>
      )}

      <Modal
        modalState={modalStateDelete}
        setModalState={setModalStateDelete}
        tabTitle={"Eliminar cotización"}
      >
        <p>
          ¿Estás seguro que deseas eliminar la cotización de{" "}
          <b>{quoteInfoTemp.name}</b>?
        </p>

        <div className="btn_container">
          <button
            onClick={() => {
              deleteQuote(quoteInfoTemp.id);
              getQuoteInfo();
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
