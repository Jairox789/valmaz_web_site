import { useState } from "react";
import "./ToggleInfoItem.css";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export const ToggleInfoItem = ({ index, title, content }) => {
  //LOGICA
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div className="toggle_info_item">
      <div>
        <span className="toggle_info_item_number">{index}</span>
        <span>{title}</span>
        {selected ? (
          <AiOutlineRight onClick={handleSelect} />
        ) : (
          <AiOutlineDown onClick={handleSelect} />
        )}
      </div>
      <div className="toggle_info_item_content">
        {selected ? <span>{content}</span> : ""}
      </div>
      <hr />
    </div>
  );
};
