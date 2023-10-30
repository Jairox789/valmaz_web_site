import { UploadImage } from "../../UploadImage/UploadImage";
import "./InsertContent.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const InsertContent = ({ content, setContent, index }) => {
  const handleContentChange = (event) => {
    const updatedContent = [...content];
    updatedContent[index].content = event.target.value;
    setContent(updatedContent);
  };

  const handleContentDelete = () => {
    // Crea una copia del contenido actual excluyendo el elemento en el índice especificado
    const updatedContent = content.filter((_, i) => i !== index);
    setContent(updatedContent);
  };
  return (
    <div className="insert_content_container">
      {content[index].type == "img" ? (
        <UploadImage
          category={"blog_content"}
          setImg={(content) =>
            handleContentChange({ target: { value: content } })
          }
        />
      ) : (
        <textarea
          type="text"
          className="form-control insert_content"
          placeholder={content[index].typeName}
          value={content[index].content}
          onChange={handleContentChange}
        ></textarea>
      )}

      <AiFillCloseCircle onClick={handleContentDelete} />
    </div>
  );
};
