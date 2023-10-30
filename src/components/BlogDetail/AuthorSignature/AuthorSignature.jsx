import "./AuthorSignature.css";

export const AuthorSignature = ({ author, link }) => {
  //LOGICA
  return (
    <div className="author_signature">
      <p>
        Escrito por: <a href={link}>{author}</a>
      </p>
    </div>
  );
};
