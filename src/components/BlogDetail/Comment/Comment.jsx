import "./Comment.css";
import { BiSolidUserCircle } from "react-icons/bi";

export const Comment = ({ name, date, comment }) => {
  //LOGICA
  return (
    <div className="comment">
      <div className="comment_info">
        <BiSolidUserCircle />
        <div className="comment_info_user">
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="comment_content">
        <p>{comment}</p>
        <button>Responder</button>
      </div>
    </div>
  );
};
