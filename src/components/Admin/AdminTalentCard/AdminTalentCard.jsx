import { BsArrowRight } from "react-icons/bs";
import "./AdminTalentCard.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const AdminTalentCard = ({ name, img, state }) => {
  //LOGICA
  const isAvailable = state ? "Abierta" : "Cerrada";

  return (
    <div className="admin_talent">
      <div className="admin_talent_card">
        <img src={img} />
        <h3 className="admin_talent_title">{name}</h3>
        <p className="admin_title_state">Estado: {isAvailable}</p>
        <div className="admin_talent_card_info_container">
          <button className="admin_talent_card_info">
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="admin_talent_manage">
        <FaEdit />
        <MdDeleteOutline />
      </div>
    </div>
  );
};
