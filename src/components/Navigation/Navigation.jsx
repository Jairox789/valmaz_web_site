import { Link } from "react-router-dom";
import "./Navigation.css";
import { BsFillGridFill } from "react-icons/bs";

export const Navigation = ({ menuLink, next, previous, availables }) => {
  //LOGICA
  return (
    <div className="navigation">
      <div>
        <h4>Previo</h4>
        <Link to={previous ? menuLink + previous[2] : menuLink}>
          <span>
            {previous
              ? previous[1]
              : "No hay " + availables + " siguientes disponibles"}
          </span>
        </Link>
      </div>
      <Link className="navigation_to_menu" to={menuLink}>
        <BsFillGridFill />
      </Link>
      <div>
        <h4>Siguiente</h4>
        <Link to={next ? menuLink + next[2] : menuLink}>
          <span>
            {next ? next[1] : "No hay " + availables + " previos disponibles"}
          </span>
        </Link>
      </div>
    </div>
  );
};
