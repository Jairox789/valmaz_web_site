import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Talent/Form/Form";
import "./Talent.css";
import { useApiContext } from "../../context/ApiContext";

export const Talent = () => {
  //LOGICA
  const [vacantsInfo, setVacantsInfo] = useState({});

  const { apiUrl } = useApiContext();

  const getVacantsInfo = async () => {
    fetch(apiUrl + "/vacants/")
      .then((response) => response.json())
      .then((data) => {
        setVacantsInfo(data);
      });
  };

  useEffect(() => {
    getVacantsInfo();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="main_talent">
        <h1 className="main_talent_title">Desarrolla tu carrera profesional</h1>
        {vacantsInfo.length > 0 ? <Form vacantsInfo={vacantsInfo} /> : ""}
      </main>
      <Footer />
    </>
  );
};
