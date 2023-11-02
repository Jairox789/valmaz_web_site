import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./ServicesDetails.css";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { useApiContext } from "../../context/ApiContext";
import { ServicesNotFound } from "../NotFound/Service/ServicesNotFound";

export const ServicesDetails = ({
  createMode = false,
  servicesInfoCreate,
  editMode = false,
  id,
}) => {
  //LOGICA
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [servicesInfo, setServicesInfo] = useState({});
  const [serviceNavigate, setServiceNavigate] = useState([]);

  const { apiUrl } = useApiContext();
  const { slug } = useParams();

  const getServicesInfo = async () => {
    setIsLoading(true);
    fetch(apiUrl + "/services/slug/" + slug)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setServicesInfo(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getServiceNavigate = async () => {
    fetch(apiUrl + "/service_navigate/" + slug)
      .then((response) => response.json())
      .then((data) => {
        setServiceNavigate(data);
      });
  };

  useEffect(() => {
    if (editMode == false && createMode == false) {
      getServicesInfo();
      getServiceNavigate();
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getServicesInfo();
    getServiceNavigate();
    window.scrollTo(0, 0);
  }, [slug]);

  const selectedService = createMode ? servicesInfoCreate : servicesInfo;

  const image = selectedService.mainImg
    ? selectedService.mainImg.url
    : "https://cdn-icons-png.flaticon.com/512/1632/1632721.png";

  return (
    <>
      {isLoading ? (
        <p>Cargando</p>
      ) : error ? (
        <p>{error}</p>
      ) : !selectedService.status ? (
        <ServicesNotFound />
      ) : createMode || editMode ? (
        <main className="main_services_detail">
          <img src={image} />
          <div className="main_services_detail_info">
            <div>
              <h1 className="services_detail_info_title">
                {selectedService.title}
              </h1>
              <span>{selectedService.description}</span>
            </div>
            <div>
              <Link to={"/cotizar"}>Cotizar</Link>
            </div>
          </div>
        </main>
      ) : (
        <>
          <main className="main_services_detail">
            <img src={image} />
            <div className="main_services_detail_info">
              <div>
                <h1 className="services_detail_info_title">
                  {selectedService.title}
                </h1>
                <span>{selectedService.description}</span>
              </div>
              <div>
                <Link to={"/cotizar"}>Cotizar</Link>
              </div>
            </div>
          </main>
          <div className="navigation_services">
            <Navigation
              menuLink={"/servicios/"}
              next={serviceNavigate.next_service}
              previous={serviceNavigate.previous_service}
              availables={"servicios"}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
