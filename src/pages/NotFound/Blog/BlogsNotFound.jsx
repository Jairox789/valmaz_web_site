import { useEffect, useState } from "react";
import "./BlogsNotFound.css";
import { useApiContext } from "../../../context/ApiContext";
import { BlogCard } from "../../../components/Blog/BlogCard/BlogCard";

export const BlogsNotFound = () => {
  //LOGICA
  const [blogsInfo, setBlogsInfo] = useState([]);

  const { apiUrl } = useApiContext();

  const getBlogsInfo = async () => {
    fetch(apiUrl + "/blogs/")
      .then((response) => response.json())
      .then((data) => {
        setBlogsInfo(data);
      });
  };

  useEffect(() => {
    getBlogsInfo();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not_found_services">
      <h1>No se ha encontrado el blog</h1>
      <p>Tal vez te interesen los siguientes blogs</p>

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
    </div>
  );
};
