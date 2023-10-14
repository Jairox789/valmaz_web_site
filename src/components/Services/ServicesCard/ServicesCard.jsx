import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import "./ServicesCard.css";

export const ServicesCard = ({ title, summary, img, slug }) => {
  //LOGICA
  return (
    <div className="services_card">
      <img src={img} />
      <div className="services_card_info">
        <div>
          <h3>{title}</h3>
          <span>{summary}</span>
        </div>
        <div>
          <Link to={"/servicios/" + slug}>
            <BsChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
