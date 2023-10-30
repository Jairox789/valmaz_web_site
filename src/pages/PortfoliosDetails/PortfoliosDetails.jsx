import { useEffect, useState } from "react";
import "./PortfoliosDetails.css";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import { Carousel } from "../../components/Carousel/CarouselOne/Carousel";
import { PortfolioInfo } from "../../components/Portfolios/PortfolioInfo/PortfolioInfo";
import { useApiContext } from "../../context/ApiContext";
import { PortfolioNotFound } from "../NotFound/Portfolio/PortfolioNotFound";

export const PortfoliosDetails = ({
  createMode = false,
  portfolioInfoCreate,
  editMode = false,
  id,
}) => {
  //LOGICA
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [portfolioInfo, setPortfolioInfo] = useState({});
  const [portfolioNavigate, setPortfolioNavigate] = useState([]);
  const { apiUrl } = useApiContext();

  const { slug } = useParams();

  const getPortfolioInfo = async () => {
    setIsLoading(true);
    fetch(apiUrl + "/portfolio/slug/" + slug)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setPortfolioInfo(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getPortfolioNavigate = async () => {
    fetch(apiUrl + "/portfolio_navigate/" + slug)
      .then((response) => response.json())
      .then((data) => {
        setPortfolioNavigate(data);
      });
  };

  useEffect(() => {
    if (editMode == false && createMode == false) {
      getPortfolioInfo();
      getPortfolioNavigate();
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getPortfolioInfo();
    getPortfolioNavigate();
  }, [slug]);

  const selectedPortfolio = createMode ? portfolioInfoCreate : portfolioInfo;
  return (
    <>
      <main className="main_portfolios_detail">
        {isLoading ? (
          <p>Cargando</p>
        ) : error ? (
          <p>{error}</p>
        ) : !selectedPortfolio.status ? (
          <PortfolioNotFound />
        ) : Object.keys(selectedPortfolio).length > 0 ? (
          <>
            <section className="main_portfolios_hero">
              <img
                src={
                  selectedPortfolio.mainImg
                    ? selectedPortfolio.mainImg.url
                    : "https://cdn-icons-png.flaticon.com/512/1617/1617704.png"
                }
              />
              <div className="main_portfolios_detail_info">
                <div>
                  <h1 className="main_portfolios_detail_info_title">
                    {selectedPortfolio.title ? selectedPortfolio.title : ""}
                  </h1>
                  <h2 className="main_portfolios_detail_info_content">
                    {selectedPortfolio.service
                      ? selectedPortfolio.service.title
                      : ""}
                  </h2>
                  <span>{selectedPortfolio.description}</span>
                </div>
              </div>
            </section>
            <section className="portfolios_carousel">
              <Carousel imgs={selectedPortfolio.imgs} />
            </section>
            <section className="portfolios_info">
              <PortfolioInfo
                description={selectedPortfolio.description}
                service={
                  selectedPortfolio.service
                    ? selectedPortfolio.service.title
                    : ""
                }
                serviceDescription={
                  selectedPortfolio.service
                    ? selectedPortfolio.service.description
                    : ""
                }
              />
            </section>
          </>
        ) : (
          <PortfolioNotFound />
        )}
      </main>

      {createMode || editMode ? (
        ""
      ) : (
        <div className="navigation_portfolios">
          <Navigation
            menuLink={"/proyectos/"}
            next={portfolioNavigate.next_portfolio}
            previous={portfolioNavigate.previous_portfolio}
            availables={"proyectos"}
          />
        </div>
      )}
      {createMode || editMode ? "" : <Footer />}
    </>
  );
};
