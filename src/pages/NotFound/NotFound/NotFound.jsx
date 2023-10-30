import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  //
  return (
    <div className="route_not_found">
      <div>
        <h1>Página no encontrada</h1>
        <p>Página no encontrada. Lo sentimos, la página que buscas no existe</p>
        <Link className="btn_call_to_action" to={"/"}>
          Regresar a casa
        </Link>
      </div>
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/3855/3855833.png" />
      </div>
    </div>
  );
};
