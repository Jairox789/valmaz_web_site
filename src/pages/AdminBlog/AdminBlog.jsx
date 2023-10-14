import { useEffect } from "react";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";
import "./AdminBlog.css";
import { BlogCard } from "../../components/Blog/BlogCard/BlogCard";
import { AdminNotifications } from "../../components/Admin/AdminNotifications/AdminNotifications";

export const AdminBlog = () => {
  //LOGICA

  useEffect(() => {
    // Desplaza la página al principio (0, 0)
    window.scrollTo(0, 0);
  }, []);

  const blogInfo = [
    {
      id: 1,
      title: "Características más importantes de un sitio web",
      category: "Marketing",
      slug: "caracteristicas-mas-importantes-de-un-sitio-web",
      mainImg:
        "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
      summary: "Summary of blog 1",
      date: "2022-01-01",
      author: "Jairo Ortega",
      comments: 3,
    },
    {
      id: 2,
      title: "Tendencias del marketing actuales",
      category: "Marketing",
      slug: "tendencias-del-marketing-actuales",
      mainImg:
        "http://valmaz.com/wp-content/uploads/2022/05/mobile-notification-icons-between-man-and-woman-using-cell-phone-768x512.jpg",
      summary: "Summary of blog 2",
      date: "2022-01-02",
      author: "John Doe",
      comments: 8,
    },
    {
      id: 3,
      title: "Blog Title 3",
      category: "Marketing",
      slug: "blog-title-3",
      mainImg:
        "https://recursosmarketing.net/wp-content/uploads/2022/07/blog-como-recurso-de-marketing.png",
      summary: "Summary of blog 3",
      date: "2022-01-03",
      author: "John Doe",
      comments: 9,
    },
  ];

  const infoNotificationBlog = [
    {
      id: 1,
      user: "José Zúñiga",
      content: "que buen blog, recomendado", //CAMBIAR POR ID
    },
    {
      id: 2,
      user: "Jorge Tovar",
      content: "Nunca habia leido algo asi, like", //CAMBIAR POR ID
    },
    {
      id: 3,
      user: "Alán Vázquez",
      content: "Gracias a ti aprendi la importancia de las redes sociales", //CAMBIAR POR ID
    },
    {
      id: 4,
      user: "Josue Rocha",
      content: "Me suscribo, tienes un nuevo seguidor", //CAMBIAR POR ID
    },
  ];

  return (
    <main className="main_admin admin_blog">
      <AdminAddElement title={"Blogs"} toAdd={"Añadir un nuevo blog"} />

      <AdminNotifications
        textPending={"Comentarios pendientes"}
        infoNotification={infoNotificationBlog}
        options={true}
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
            category={blog.category}
            summary={blog.summary}
            slug={blog.slug}
            editMode={true}
          />
        ))}
      </div>
    </main>
  );
};
