import { useEffect, useState } from "react";
import "./ServicesNotFound.css";
import { useApiContext } from "../../../context/ApiContext";
import { SliderTwo } from "../../../components/Sliders/SliderTwo/SliderTwo";

export const ServicesNotFound = () => {
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
  }, []);

  return (
    <div className="not_found_services">
      <h1>No se ha encontrado ningún servicio</h1>
      <p>Tal vez te interesen los siguientes servicios</p>
      {servicesInfo.length > 0 ? <SliderTwo info={servicesInfo} /> : ""}
    </div>
  );
};
