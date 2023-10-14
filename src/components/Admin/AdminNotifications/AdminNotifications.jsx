import { useState } from "react";
import { AdminNotificationItem } from "../AdminNotificationItem/AdminNotificationItem";
import "./AdminNotifications.css";

export const AdminNotifications = ({
  textPending,
  infoNotification,
  options,
}) => {
  //LOGICA
  const [toggleAdminNotifications, setToggleAdminNotifications] =
    useState(false);

  const toggleNotifications = () => {
    setToggleAdminNotifications(!toggleAdminNotifications);
  };

  return (
    <aside className="admin_notifications_panel">
      <div onClick={toggleNotifications} className="admin_notifications_toggle">
        <span className="admin_notifications_toggle_number">
          {infoNotification.length}
        </span>
        <span>{textPending}</span>
      </div>

      {toggleAdminNotifications ? (
        <div className="admin_notifications">
          {infoNotification.map((info) => (
            <AdminNotificationItem
              key={info.id}
              user={info.user}
              text={info.content}
              options={options}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </aside>
  );
};
