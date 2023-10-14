import { useState } from "react";
import "./PortfolioInfo.css";

export const PortfolioInfo = ({ description, service }) => {
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
        <span>{toggleShowInfo ? description : service}</span>
      </div>
    </div>
  );
};
