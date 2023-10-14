import "./ToggleMenuAside.css";
import { BsArrowLeft } from "react-icons/bs";

export const ToggleMenuAside = ({ openMenuAside }) => {
  //LOGICA
  return (
    <div onClick={openMenuAside} className="toggle_menu_aside">
      <BsArrowLeft />
    </div>
  );
};
