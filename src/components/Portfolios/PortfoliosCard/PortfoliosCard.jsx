import { BsChevronRight } from "react-icons/bs";
import "./PortfoliosCard.css";
import { Link } from "react-router-dom";

export const PortfoliosCard = ({ title, service, img, slug }) => {
  //LOGICA
  return (
    <div className="portfolios_card">
      <img src={img} />
      <div className="portfolios_card_info">
        <div>
          <h3 className="portfolios_card_info_title">{title}</h3>
          <h3 className="portfolios_card_info_title">{service}</h3>
        </div>
        <div>
          <Link to={"/proyectos/" + slug}>
            <BsChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
