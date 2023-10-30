import { useEffect, useState } from "react";
import { useApiContext } from "../../../../context/ApiContext";
import "./Category.css";

export const Category = () => {
  //LOGICA
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const { apiUrl } = useApiContext();
  const handleInputs = (setter, info) => {
    setter(info);
  };

  const getCategories = async () => {
    fetch(apiUrl + "/blogs_categories/")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const createCategory = () => {
    const formData = new FormData();
    formData.append("name", title);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/blogs_create_category/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getCategories();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="create_category">
      <form className="create_category_form">
        <label htmlFor="title">Titulo del servicio:</label>
        <input
          className="form-control"
          type="text"
          id="title"
          name="title"
          placeholder="Escribe el titulo del servicio"
          value={title}
          onChange={(e) => {
            handleInputs(setTitle, e.target.value);
          }}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value={"Crear categoría"}
          onClick={(e) => {
            e.preventDefault();
            createCategory();
            setTitle("");
          }}
        />
      </form>
      <table className="table_quote">
        <thead className="table-success table-striped">
          <tr>
            <th>Nombre de categoría</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
