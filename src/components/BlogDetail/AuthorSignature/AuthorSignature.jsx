import "./AuthorSignature.css";

export const AuthorSignature = ({ author, link }) => {
  //LOGICA
  return (
    <div className="author_signature">
      <p>
        Escritor por: <a href={link}>{author}</a>
      </p>
    </div>
  );
};
