import { useEffect } from "react";
import { BlogCard } from "../../components/Blog/BlogCard/BlogCard";
import { Footer } from "../../components/Footer/Footer";
import "./Blog.css";

export const Blog = () => {
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
  return (
    <>
      <main className="main_blog">
        <h1 className="main_blog_title">Blog</h1>
        <div className="blog_container">
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
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
