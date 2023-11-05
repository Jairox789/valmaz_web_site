import { useEffect, useState } from "react";
import "./MakeComment.css";
import { useApiContext } from "../../../context/ApiContext";
import { MdCancel } from "react-icons/md";

export const MakeComment = ({ idBlog, replyTo, setReplyTo }) => {
  const { apiUrl } = useApiContext();

  const [response, setResponse] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [comment, setComment] = useState("");

  const createComment = async () => {
    const formData = new FormData();
    formData.append("blogId", idBlog);
    formData.append("name", name);
    formData.append("comment", comment);
    formData.append("userEmail", email);
    formData.append("userWeb", web);

    // Hacer una solicitud para subir el comentario al servidor
    fetch(apiUrl + "/blogs_comment/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.error("Error uploading comment:", error);
      });
  };

  const handleInputs = (setter, info) => {
    setter(info);
  };

  const isFormFill = () => {
    return name !== "" && email !== "" && comment !== "";
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setWeb("");
    setComment("");
  };

  useEffect(() => {
    setComment(replyTo ? "@" + replyTo : "");
  }, [replyTo]);

  return (
    <div className="make_comment">
      <h3>Deja tu comentario</h3>

      <div className="make_comment_reply">
        {replyTo && (
          <p>
            Respondiendo a: <b>{replyTo}</b>
          </p>
        )}
        {replyTo ? (
          <MdCancel
            onClick={() => {
              setReplyTo("");
              setComment("");
            }}
          />
        ) : null}
      </div>

      <form className="comment_form">
        <div className="make_comment_info">
          <input
            className="form-control"
            type="text"
            placeholder="Escribe tu nombre"
            value={name}
            onChange={(e) => {
              handleInputs(setName, e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Escribe tu correo electrónico"
            value={email}
            onChange={(e) => {
              handleInputs(setEmail, e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Escribe tu web (opcional)"
            value={web}
            onChange={(e) => {
              handleInputs(setWeb, e.target.value);
            }}
          />

          <input
            className="btn_call_to_action_v2"
            type="submit"
            value="Comentar"
            onClick={(e) => {
              e.preventDefault();
              if (isFormFill()) {
                createComment();
                resetForm();
              } else {
                alert("Debes llenar todos los campos solicitados");
              }
            }}
          />

          {response.state ? (
            <p className="response_ok">{response.message}</p>
          ) : (
            <p className="response_ok">{response.message}</p>
          )}
        </div>

        <textarea
          className="form-control"
          placeholder="Escribe tu comentario"
          value={comment}
          onChange={(e) => {
            handleInputs(setComment, e.target.value);
          }}
        ></textarea>
      </form>
    </div>
  );
};
