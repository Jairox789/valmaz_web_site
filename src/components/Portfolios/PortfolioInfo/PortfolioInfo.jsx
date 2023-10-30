import { useState } from "react";
import "./PortfolioInfo.css";
import { Link } from "react-router-dom";

export const PortfolioInfo = ({ description, service, serviceDescription }) => {
  //LOGICA
  const [toggleShowInfo, setToggleShowInfo] = useState(true);

  const handleToggleShowInfo = (state) => {
    setToggleShowInfo(state);
  };

  return (
    <div className="portfolio_info">
      <div className="portfolio_info_header">
        <span
          className={`info_tab ${toggleShowInfo ? "selected" : ""}`}
          onClick={() => {
            handleToggleShowInfo(true);
          }}
        >
          Descripción
        </span>
        <span
          className={`info_tab ${!toggleShowInfo ? "selected" : ""}`}
          onClick={() => {
            handleToggleShowInfo(false);
          }}
        >
          Tipo de servicio para proyecto
        </span>
      </div>
      <div className="portfolio_info_body">
        <p>{toggleShowInfo ? description : service}</p>
        <p>{toggleShowInfo ? "" : serviceDescription}</p>
        <p>
          {toggleShowInfo ? (
            ""
          ) : (
            <Link to={"/cotizar"} className="btn_call_to_action_v2">
              Cotizar
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};
