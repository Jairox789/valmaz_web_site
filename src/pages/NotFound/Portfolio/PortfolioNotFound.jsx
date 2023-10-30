import { useEffect, useState } from "react";
import "./PortfolioNotFound.css";
import { useApiContext } from "../../../context/ApiContext";
import { SliderOne } from "../../../components/Sliders/SliderOne/SliderOne";

export const PortfolioNotFound = () => {
  //LOGICA
  const [portfolioInfo, setPortfolioInfo] = useState([]);

  const { apiUrl } = useApiContext();

  const getPortfolioInfo = async () => {
    fetch(apiUrl + "/portfolio/")
      .then((response) => response.json())
      .then((data) => {
        setPortfolioInfo(data);
      });
  };

  useEffect(() => {
    getPortfolioInfo();
  }, []);

  return (
    <div className="not_found_portfolios">
      <h1>No se ha encontró ningún proyecto</h1>
      <p>Tal vez te interesen los siguientes proyectos</p>
      {portfolioInfo.length > 0 ? <SliderOne info={portfolioInfo} /> : ""}
    </div>
  );
};
