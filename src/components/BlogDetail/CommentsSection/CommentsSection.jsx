import React, { useState } from "react";
import { Comment } from "../Comment/Comment";
import { MakeComment } from "../MakeComment/MakeComment";
import "./CommentsSection.css";

export const CommentsSection = ({ idBlog, commentsInfo }) => {
  //LOGICA
  const [replyToComment, setReplyToComment] = useState(null);

  const handleReply = (commentName) => {
    setReplyToComment(commentName);
  };

  const commentsState = commentsInfo.length
    ? "Comentarios (" + commentsInfo.length + ")"
    : "Sé el primero en comentar";

  return (
    <div className="comments_section">
      <h3>{commentsState}</h3>
      {commentsInfo.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          date={comment.date}
          comment={comment.comment}
          onReply={() => handleReply(comment.name)}
        />
      ))}
      <MakeComment
        idBlog={idBlog}
        replyTo={replyToComment}
        setReplyTo={setReplyToComment}
      />
    </div>
  );
};
