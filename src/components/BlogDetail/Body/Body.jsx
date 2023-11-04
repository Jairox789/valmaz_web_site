import "./Body.css";

export const Body = ({ content }) => {
  //LOGICA
  return (
    <div className="body_blog_detail">
      {/* Mapea el contenido para renderizarlo */}
      {content.map((item, index) => (
        <div key={index}>
          {/* TITULOS */}
          {item.type === "h1" && <h1 className="title_body">{item.content}</h1>}
          {item.type === "h2" && <h2 className="title_body">{item.content}</h2>}
          {item.type === "h3" && <h3 className="title_body">{item.content}</h3>}
          {/* Parrafos */}
          {item.type === "p" && (
            <p className="paragraph_body">{item.content}</p>
          )}
          {/* Imagenes */}
          {item.type === "img" && <img src={item.content.url} />}
        </div>
      ))}
    </div>
  );
};
