import { useEffect, useState } from "react";
import "./Portfolios.css";
import { Footer } from "../../components/Footer/Footer";
import { PortfoliosCard } from "../../components/Portfolios/PortfoliosCard/PortfoliosCard";
import { useApiContext } from "../../context/ApiContext";

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
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="main_portfolios">
        <h1 className="main_portfolios_title">Proyectos</h1>
        {Object.keys(portfolioInfo).length > 0 ? (
          <div className="portfolios_card_container">
            {portfolioInfo.map((portfolio, index) => (
              <PortfoliosCard
                key={index}
                title={portfolio.title}
                service={portfolio.service.title}
                img={portfolio.mainImg}
                slug={portfolio.slug}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
};
