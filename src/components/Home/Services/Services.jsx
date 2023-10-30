import { BsChevronRight } from "react-icons/bs";
import { SliderTwo } from "../../Sliders/SliderTwo/SliderTwo";
import { Link } from "react-router-dom";
import { useApiContext } from "../../../context/ApiContext";
import { useEffect, useState } from "react";

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
  }, []);

  return (
    <section className="home_services">
      <div className="home_services_info">
        <div>
          <ul>
            <li>Nuestros servicios</li>
          </ul>
          <h2>Traemos para ti una gran variedad de increibles servicios</h2>
        </div>
        <div>
          <Link to={"/servicios"}>
            <BsChevronRight /> Ver todos
          </Link>
        </div>
      </div>

      {servicesInfo.length > 0 ? <SliderTwo info={servicesInfo} /> : ""}
    </section>
  );
};
