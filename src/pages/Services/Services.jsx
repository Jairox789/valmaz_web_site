import { useEffect, useState } from "react";
import { ServicesCard } from "../../components/Services/ServicesCard/ServicesCard";
import "./Services.css";
import { Footer } from "../../components/Footer/Footer";
import { useApiContext } from "../../context/ApiContext";

export const Services = () => {
  //LOGICA
  const [servicesInfo, setServicesInfo] = useState({});

  const { apiUrl } = useApiContext();

  const getServicesInfo = async () => {
    fetch(apiUrl + "/services/")
      .then((response) => response.json())
      .then((data) => {
        setServicesInfo(data);
      });
  };

  useEffect(() => {
    getServicesInfo();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="main_services">
        <h1 className="main_services_title">Servicios</h1>
        {servicesInfo.length > 0 ? (
          <div className="services_card_container">
            {servicesInfo.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                summary={service.summary}
                img={service.mainImg}
                slug={service.slug}
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
