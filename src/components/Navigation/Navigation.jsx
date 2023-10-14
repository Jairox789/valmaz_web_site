import { Link } from "react-router-dom";
import "./Navigation.css";
import { BsFillGridFill } from "react-icons/bs";

export const Navigation = ({ menuLink }) => {
  //LOGICA
  return (
    <div className="navigation">
      <div>
        <h4>Previo</h4>
        <Link to={"/"}>
          <span>Anterior</span>
        </Link>
      </div>
      <Link className="navigation_to_menu" to={menuLink}>
        <BsFillGridFill />
      </Link>
      <div>
        <h4>Siguiente</h4>
        <Link to={"/"}>
          <span>Posterior</span>
        </Link>
      </div>
    </div>
  );
};
