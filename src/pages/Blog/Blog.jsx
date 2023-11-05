import { useEffect, useState } from "react";
import { BlogCard } from "../../components/Blog/BlogCard/BlogCard";
import { Footer } from "../../components/Footer/Footer";
import "./Blog.css";
import { useApiContext } from "../../context/ApiContext";
import { useParams } from "react-router-dom";

export const Blog = ({ searchByCategory = false }) => {
  //LOGICA
  const [blogsInfo, setBlogsInfo] = useState([]);

  const { apiUrl } = useApiContext();

  const { slug } = useParams();

  const getBlogsInfo = async () => {
    fetch(apiUrl + "/blogs/")
      .then((response) => response.json())
      .then((data) => {
        setBlogsInfo(data);
      });
  };

  const getBlogsByCategoryInfo = async () => {
    fetch(apiUrl + "/blogs/categories/" + slug)
      .then((response) => response.json())
      .then((data) => {
        setBlogsInfo(data);
      });
  };

  useEffect(() => {
    document.title = "Blog - Valmaz";
    if (searchByCategory) {
      getBlogsByCategoryInfo();
      document.title = "Blog categoría (" + slug + ")";
    } else {
      getBlogsInfo();
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="main_blog">
        <h1 className="main_blog_title">Blog</h1>
        {blogsInfo.length && searchByCategory > 0 ? (
          <h2>Categoría {slug}</h2>
        ) : (
          ""
        )}
        <div className="blog_container">
          {blogsInfo.map((blog, index) => (
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
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
