import { useEffect, useState } from "react";
import { UploadImage } from "../../UploadImage/UploadImage";
import { EditorBlogContent } from "../EditorBlogContent/EditorBlogContent";
import "./Create.css";
import { InsertContent } from "../InsertContent/InsertContent";
import { useApiContext } from "../../../../context/ApiContext";
import { useNavigate } from "react-router-dom";

export const Create = ({ editMode, setBlogInfoCreate, id }) => {
  //LOGICA
  //DATOS DE EDICION
  const navigate = useNavigate();

  const [blogInfo, setBlogInfo] = useState();

  const { apiUrl } = useApiContext();

  const [content, setContent] = useState([]);

  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [slug, setSlug] = useState("");
  const [img, setImg] = useState("");
  const [summary, setSummary] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorLink, setAuthorLink] = useState("");

  const [categories, setCategoriesInfo] = useState([]);
  const [status, setStatus] = useState("");

  const getCatogoriesInfo = async () => {
    fetch(apiUrl + "/blogs_categories/")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesInfo(data);
      });
  };

  const getBlogInfo = async () => {
    fetch(apiUrl + "/blogs/id/" + id)
      .then((response) => response.json())
      .then((data) => {
        setBlogInfo(data);
        setTitle(data.title);
        setSelectedCategory(data.category.id);
        setSlug(data.slug);
        setImg(data.mainImg);
        setSummary(data.summary);
        setAuthorName(data.author.name);
        setAuthorLink(data.author.link);
        setContent(data.content);
        setStatus(data.status);
      });
  };

  const handleInputs = (setter, info) => {
    setter(info);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const createBlog = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", selectedCategory);
    formData.append("slug", slug);
    formData.append("mainImg", img.id);
    formData.append("content", JSON.stringify(content));
    formData.append("summary", summary);
    formData.append("authorName", authorName);
    formData.append("authorLink", authorLink);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/blogs/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const updateBlog = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("category", selectedCategory);
    formData.append("slug", slug);
    formData.append("mainImg", img.id);
    formData.append("content", JSON.stringify(content));
    formData.append("summary", summary);
    formData.append("authorName", authorName);
    formData.append("authorLink", authorLink);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/blogs_update/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const category = categories.find((item) => item.id == selectedCategory);

  useEffect(() => {
    if (editMode) {
      getBlogInfo();
    }
  }, []);

  useEffect(() => {
    getCatogoriesInfo();

    setBlogInfoCreate({
      title: title,
      category: category ? category.name : "",
      slug: slug,
      mainImg: img.url
        ? img
        : "https://cdn-icons-png.flaticon.com/512/1617/1617704.png",
      content: content,
      summary: summary,
      date: "x",
      author: { name: authorName, link: authorLink },
      status: true,
    });
  }, [
    title,
    selectedCategory,
    slug,
    img,
    content,
    summary,
    authorName,
    authorLink,
  ]);

  const isFormFill = () => {
    let isFill = false;
    if (
      title != "" &&
      category != "" &&
      slug != "" &&
      img != "" &&
      summary != "" &&
      authorName != "" &&
      authorLink != ""
    ) {
      isFill = true;
    }
    return isFill;
  };

  return (
    <>
      <form className="admin_create_service">
        <div className="admin_create_blog_main_info">
          <h2>Información principal</h2>
          <label htmlFor="title">Titulo del blog:</label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            placeholder="Escribe el titulo del blog"
            value={title}
            onChange={(e) => {
              handleInputs(setTitle, e.target.value);
            }}
          />

          <label htmlFor="slug">Slug del blog:</label>
          <input
            className="form-control"
            type="text"
            id="slug"
            name="slug"
            placeholder="Escribe el slug del blog"
            value={slug}
            onChange={(e) => {
              handleInputs(setSlug, e.target.value);
            }}
          />

          <select
            className="form-select"
            name="select"
            value={selectedCategory} // Usa value para controlar la opción seleccionada
            onChange={handleCategoryChange} // Maneja el cambio de selección
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            {Object.keys(categories).length > 0 ? (
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No hay categorías disponibles
              </option>
            )}
          </select>

          <UploadImage
            text={"Selecciona una imagen principal"}
            setImg={setImg}
            category={"blogs"}
          />

          <label htmlFor="summary">Resumen del blog:</label>
          <textarea
            className="form-control"
            type="text"
            id="summary"
            name="summary"
            placeholder="Escribe el resumen"
            value={summary}
            onChange={(e) => {
              handleInputs(setSummary, e.target.value);
            }}
          ></textarea>

          <h3>Firma del autor:</h3>

          <label htmlFor="author_name">Nombre del autor:</label>
          <input
            className="form-control"
            type="text"
            id="author_name"
            name="author_name"
            placeholder="Escribe el nombre del autor"
            value={authorName}
            onChange={(e) => {
              handleInputs(setAuthorName, e.target.value);
            }}
          />

          <label htmlFor="author_link">Enlace personalizado para autor:</label>
          <input
            className="form-control"
            type="text"
            id="author_link"
            name="author_link"
            placeholder="Ingresa enlace personalizado"
            value={authorLink}
            onChange={(e) => {
              handleInputs(setAuthorLink, e.target.value);
            }}
          />
        </div>

        <div className="admin_create_blog_content_info">
          <h2>Contenido</h2>
          <EditorBlogContent content={content} setContent={setContent} />

          {content.map((element, index) => (
            <InsertContent
              key={index} // Asegúrate de asignar una clave única
              content={content}
              setContent={setContent}
              index={index}
            />
          ))}
        </div>

        <input
          type="submit"
          value={"Crear"}
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (isFormFill()) {
              if (editMode) {
                updateBlog();
              } else {
                createBlog();
              }
              navigate("/admin/blog");
            } else {
              alert("Debes llenar todos los campos");
            }
          }}
        />
      </form>
    </>
  );
};
