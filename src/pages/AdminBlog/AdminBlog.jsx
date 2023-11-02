import { useEffect, useState } from "react";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";
import "./AdminBlog.css";
import { BlogCard } from "../../components/Blog/BlogCard/BlogCard";
import { AdminNotifications } from "../../components/Admin/AdminNotifications/AdminNotifications";
import { useApiContext } from "../../context/ApiContext";
import { Modal } from "../../components/Modal/Modal";
import { Category } from "../../components/Admin/ManageBlog/Category/Category";

export const AdminBlog = () => {
  //LOGICA
  const [blogInfo, setBlogInfo] = useState([]);
  const { apiUrl } = useApiContext();
  const [infoNotificationBlog, setInfoNotificationBlog] = useState([]);

  const getBlogsInfo = async () => {
    fetch(apiUrl + "/blogs/")
      .then((response) => response.json())
      .then((data) => {
        setBlogInfo(data);
      });
  };

  const getNotificationBlogs = async () => {
    fetch(apiUrl + "/blogs_notification_comments/")
      .then((response) => response.json())
      .then((data) => {
        setInfoNotificationBlog(data);
      });
  };

  const deleteBlogs = (id) => {
    fetch(apiUrl + "/blogs_delete/" + id, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Actualiza el estado con el nombre de la imagen
        getBlogsInfo();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    getBlogsInfo();
    getNotificationBlogs();
    window.scrollTo(0, 0);
  }, []);

  const [modalStateDelete, setModalStateDelete] = useState(false);
  const [modalStateCategories, setModalStateCategories] = useState(false);

  const [blogsInfoTemp, setBlogsInfoTemp] = useState({});

  const openModalDelete = () => {
    setModalStateDelete(true);
  };

  const openModalCategories = () => {
    setModalStateCategories(true);
  };

  const handleBlogsInfoTemp = (service) => {
    setBlogsInfoTemp(service);
  };

  return (
    <main className="main_admin admin_blog">
      <div className="admin_blog_add_element">
        <AdminAddElement
          title={"Blogs"}
          toAdd={"Añadir un nuevo blog"}
          link={"/admin/blog/crear/"}
        />

        <AdminAddElement
          title={"Categorías"}
          toAdd={"Añadir una nueva categoría"}
          button={true}
          open={openModalCategories}
        />
      </div>

      <AdminNotifications
        textPending={"Comentarios pendientes"}
        infoNotification={infoNotificationBlog}
        options={true}
        update={getNotificationBlogs}
      />

      <div className="admin_blog_container">
        {blogInfo.map((blog, index) => (
          <BlogCard
            key={index}
            img={blog.mainImg}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            comments={blog.comments}
            category={blog.category.name}
            summary={blog.summary}
            slug={blog.slug}
            editMode={true}
            id={blog.id}
            openModalDelete={openModalDelete}
            handleBlogsInfoTemp={handleBlogsInfoTemp}
          />
        ))}
      </div>

      <Modal
        modalState={modalStateDelete}
        setModalState={setModalStateDelete}
        tabTitle={"Eliminar servicio"}
      >
        <p>
          ¿Estás seguro que deseas eliminar el blog de{" "}
          <b>{blogsInfoTemp.title}</b>?
        </p>

        <div className="btn_container">
          <button
            onClick={() => {
              deleteBlogs(blogsInfoTemp.id);
              getBlogsInfo();
              setModalStateDelete(false);
            }}
            className="btn btn-danger"
          >
            Confirmar
          </button>
          <button
            onClick={() => {
              setModalStateDelete(false);
            }}
            className="btn btn-primary"
          >
            Cerrar
          </button>
        </div>
      </Modal>

      <Modal
        modalState={modalStateCategories}
        setModalState={setModalStateCategories}
        tabTitle={"Añadir categorías para los blogs"}
      >
        <Category />
      </Modal>
    </main>
  );
};
