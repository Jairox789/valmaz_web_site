import { GrAdd } from "react-icons/gr";
import "./AdminAddElement.css";

export const AdminAddElement = ({ title, toAdd }) => {
  //LOGICA
  return (
    <div className="admin_add_container">
      <h1>{title}</h1>
      <div className="admin_add">
        <GrAdd />
        <span>{toAdd}</span>
      </div>
    </div>
  );
};
