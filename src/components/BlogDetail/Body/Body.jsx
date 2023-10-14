import "./Body.css";

export const Body = ({ content }) => {
  //LOGICA
  return (
    <div className="body_blog_detail">
      {/* Mapea el contenido para renderizarlo */}
      {content.map((item, index) => (
        <>
          {/* TITULOS */}
          {item.type === "h1" && <h1>{item.content}</h1>}
          {item.type === "h2" && <h2>{item.content}</h2>}
          {/* Parrafos */}
          {item.type === "p" && <p>{item.content}</p>}
          {/* Imagenes */}
          {item.type === "img" && <img src={item.url} alt={item.description} />}
        </>
      ))}
    </div>
  );
};
