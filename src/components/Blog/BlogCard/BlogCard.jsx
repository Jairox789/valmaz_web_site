import "./BlogCard.css";
import { FaEdit, FaUserAlt } from "react-icons/fa";
import { BsCalendarDateFill, BsArrowRight } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

export const BlogCard = ({
  id,
  img,
  title,
  author,
  date,
  comments,
  category,
  summary,
  slug,
  editMode = false,
  openModalDelete,
  handleBlogsInfoTemp,
}) => {
  //LOGICA
  return (
    <div className="blog_content_card">
      <div className="blog_card">
        <img src={img} />
        <h3>{title}</h3>
        <div className="blog_card_info">
          <div className="blog_card_info_author">
            <FaUserAlt /> <span>{author}</span>
          </div>
          <div className="blog_card_info_date">
            <BsCalendarDateFill /> <span>{date}</span>
          </div>
          <div className="blog_card_info_comments">
            <AiOutlineComment /> <span>{comments}</span>
          </div>
        </div>
        <p className="blog_card_info_category">{category}</p>
        <span className="blog_card_info_summary">{summary}</span>
        <div className="blog_card_info_link_container">
          <Link className="blog_card_info_link" to={"/blog/" + slug}>
            <BsArrowRight />
          </Link>
        </div>
      </div>

      {editMode ? (
        <div className="admin_blog_manage">
          <Link to={"/admin/blog/editar/" + id}>
            <FaEdit />
          </Link>

          <MdDeleteOutline
            onClick={() => {
              openModalDelete();
              handleBlogsInfoTemp({ id: id, title: title });
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
