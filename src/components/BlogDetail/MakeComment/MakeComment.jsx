import "./MakeComment.css";

export const MakeComment = () => {
  //logica
  return (
    <div className="make_comment">
      <h3>Deja tu comentario</h3>

      <form className="comment_form">
        <div className="make_comment_info">
          <input
            className="form-control"
            type="text"
            placeholder="Escribe tu nombre"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Escribe tu correo electrónico"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Escribe tu web"
          />

          <input
            className="btn_call_to_action_v2"
            type="submit"
            value="Comentar"
          />
        </div>

        <textarea
          className="form-control"
          placeholder="Escribe tu comentario"
        ></textarea>
      </form>
    </div>
  );
};
