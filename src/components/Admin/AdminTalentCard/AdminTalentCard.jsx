import { BsArrowRight } from "react-icons/bs";
import "./AdminTalentCard.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AdminTalentCard = ({
  id,
  name,
  img,
  state,
  editMode = false,
  openModalDelete,
  handleVacantsInfoTemp,
}) => {
  //LOGICA
  const isAvailable = state ? "Abierta" : "Cerrada";

  const image =
    img !== "" ? img : "https://cdn-icons-png.flaticon.com/512/889/889563.png";

  return (
    <div className="admin_talent">
      <div className="admin_talent_card">
        <img src={image} />
        <h3 className="admin_talent_title">{name}</h3>
        <p className="admin_title_state">Estado: {isAvailable}</p>
        <div className="admin_talent_card_info_container"></div>
      </div>

      {editMode ? (
        <div className="admin_talent_manage">
          <Link to={"/admin/talento/editar/" + id}>
            <FaEdit />
          </Link>

          <MdDeleteOutline
            onClick={() => {
              openModalDelete();
              handleVacantsInfoTemp({ name: name, id: id });
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
