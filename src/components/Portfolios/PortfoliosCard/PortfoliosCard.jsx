import { BsChevronRight } from "react-icons/bs";
import "./PortfoliosCard.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export const PortfoliosCard = ({
  title,
  service,
  img,
  slug,
  adminMode = false,
  id,
  openModalDelete,
  handlePortfolioInfoTemp,
}) => {
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
      {adminMode ? (
        <div className="portfolios_info_admin">
          <Link to={"/admin/proyectos/editar/" + id}>
            <FaEdit />
          </Link>

          <MdDeleteOutline
            onClick={() => {
              openModalDelete();
              handlePortfolioInfoTemp({ id: id, title: title });
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
