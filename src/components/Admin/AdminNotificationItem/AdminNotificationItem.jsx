import "./AdminNotificationItem.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export const AdminNotificationItem = ({ user, text, options = false }) => {
  //LOGICA
  return (
    <div className="admin_notification_item">
      <p>{user}</p>
      <div className="admin_notification_info">
        <BiSolidUserCircle />
        <span>{text}</span>

        {options ? (
          <div className="admin_notification_info_options">
            <AiOutlineCheck />
            <AiOutlineClose />
          </div>
        ) : (
          <button>Revisar</button>
        )}
      </div>
    </div>
  );
};
