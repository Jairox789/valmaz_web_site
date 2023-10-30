import { GrAdd } from "react-icons/gr";
import "./AdminAddElement.css";
import { Link } from "react-router-dom";

export const AdminAddElement = ({
  title,
  toAdd,
  link,
  button = false,
  open,
}) => {
  //LOGICA
  return (
    <div className="admin_add_container">
      <h1>{title}</h1>
      {button ? (
        <div onClick={open} className="admin_add">
          <GrAdd />
          <span>{toAdd}</span>
        </div>
      ) : (
        <Link to={link}>
          <div className="admin_add">
            <GrAdd />
            <span>{toAdd}</span>
          </div>
        </Link>
      )}
    </div>
  );
};
