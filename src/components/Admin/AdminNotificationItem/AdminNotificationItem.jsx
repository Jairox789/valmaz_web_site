import "./AdminNotificationItem.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useApiContext } from "../../../context/ApiContext";

export const AdminNotificationItem = ({
  id,
  user,
  text,
  options = false,
  update,
  setToggleAdminNotifications,
  openModal,
  handleTemp,
}) => {
  //LOGICA
  const { apiUrl } = useApiContext();

  const approveComment = async () => {
    const formData = new FormData();
    formData.append("approvedValue", 1);
    formData.append("commentId", id);

    fetch(apiUrl + "/blogs_comment_approve/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const deleteComment = () => {
    fetch(apiUrl + "/blogs_comment_delete/" + id, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="admin_notification_item">
      <p>{user}</p>
      <div className="admin_notification_info">
        <BiSolidUserCircle />
        <span>{text}</span>

        {options ? (
          <div className="admin_notification_info_options">
            <AiOutlineCheck
              onClick={() => {
                approveComment();
                update();
                setToggleAdminNotifications();
              }}
            />
            <AiOutlineClose
              onClick={() => {
                deleteComment();
                update();
                setToggleAdminNotifications();
              }}
            />
          </div>
        ) : (
          <button
            onClick={() => {
              openModal();
              handleTemp({ user: user, id: id });
            }}
          >
            Revisar
          </button>
        )}
      </div>
    </div>
  );
};
