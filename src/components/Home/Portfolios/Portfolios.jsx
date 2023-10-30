import { Link } from "react-router-dom";
import { SliderOne } from "../../Sliders/SliderOne/SliderOne";
import { BsChevronRight } from "react-icons/bs";
import { useApiContext } from "../../../context/ApiContext";
import { useEffect, useState } from "react";

export const Portfolios = () => {
  //LOGICA
  const [portfolioInfo, setPortfolioInfo] = useState({});

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
    <section className="home_portfolios">
      <div className="home_portfolios_info">
        <div>
          <ul>
            <li>Nuestro trabajo</li>
          </ul>
          <h2>Nuestros últimos proyectos</h2>
        </div>
        <div>
          <Link to={"/proyectos"}>
            <BsChevronRight /> Ver todos
          </Link>
        </div>
      </div>
      {portfolioInfo.length > 0 ? <SliderOne info={portfolioInfo} /> : ""}
    </section>
  );
};
