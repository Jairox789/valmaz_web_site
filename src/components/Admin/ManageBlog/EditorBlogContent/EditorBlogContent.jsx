import "./EditorBlogContent.css";
import { FaParagraph } from "react-icons/fa";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";

export const EditorBlogContent = ({ content, setContent }) => {
  //LOGICA
  const addParagraph = () => {
    // Copia el contenido actual y agrega un párrafo al final
    const updatedContent = [
      ...content,
      { type: "p", typeName: "Párrafo", content: "" },
    ];
    setContent(updatedContent);
  };

  const addHeading1 = () => {
    // Copia el contenido actual y agrega un título h1 al final
    const updatedContent = [
      ...content,
      { type: "h1", typeName: "Titulo 1", content: "" },
    ];
    setContent(updatedContent);
  };

  const addHeading2 = () => {
    // Copia el contenido actual y agrega un título h2 al final
    const updatedContent = [
      ...content,
      { type: "h2", typeName: "Titulo 2", content: "" },
    ];
    setContent(updatedContent);
  };

  const addHeading3 = () => {
    // Copia el contenido actual y agrega un título h3 al final
    const updatedContent = [
      ...content,
      { type: "h3", typeName: "Titulo 3", content: "" },
    ];
    setContent(updatedContent);
  };

  const addImage = () => {
    // Copia el contenido actual y agrega una imagen al final
    const updatedContent = [
      ...content,
      { type: "img", typeName: "Imagen", content: "" },
    ];
    setContent(updatedContent);
  };

  return (
    <div className="editor_blog_content">
      <FaParagraph onClick={addParagraph} />
      <LuHeading1 onClick={addHeading1} />
      <LuHeading2 onClick={addHeading2} />
      <LuHeading3 onClick={addHeading3} />
      <BsFillFileEarmarkImageFill onClick={addImage} />
    </div>
  );
};
