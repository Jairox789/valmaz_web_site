import "./InfoItem.css";

export const InfoItem = ({ icon, title, info }) => {
  //LOGICA
  return (
    <div className="info_item">
      <div className="info_item_title">
        {icon}
        <h3>{title}</h3>
      </div>
      <span className="info_item_info">{info}</span>
    </div>
  );
};
