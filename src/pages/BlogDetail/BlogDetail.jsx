import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import { Hero } from "../../components/BlogDetail/Hero/Hero";
import { Body } from "../../components/BlogDetail/Body/Body";
import { MenuAside } from "../../components/BlogDetail/MenuAside/MenuAside";
import { ToggleMenuAside } from "../../components/BlogDetail/ToggleMenuAside/ToggleMenuAside";
import { Navigation } from "../../components/Navigation/Navigation";
import { CommentsSection } from "../../components/BlogDetail/CommentsSection/CommentsSection";
import { AuthorSignature } from "../../components/BlogDetail/AuthorSignature/AuthorSignature";
import { useApiContext } from "../../context/ApiContext";
import { BlogsNotFound } from "../NotFound/Blog/BlogsNotFound";

export const BlogDetail = ({ createMode = false, blogInfoCreate }) => {
  //LOGICA
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [toggleMenuAside, setToggleMenuAside] = useState(false);
  const [blogInfo, setBlogInfo] = useState({});
  const [blogNavigate, setBlogNavigate] = useState({});
  const [recentPost, setRecentPost] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);

  const { apiUrl } = useApiContext();
  const { slug } = useParams();

  const getBlogInfo = async () => {
    setIsLoading(true);
    fetch(apiUrl + "/blogs/" + slug)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setBlogInfo(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getBlogNavigate = async () => {
    fetch(apiUrl + "/blog_navigate/" + slug)
      .then((response) => response.json())
      .then((data) => {
        setBlogNavigate(data);
      });
  };

  const getRecentPost = async () => {
    fetch(apiUrl + "/blogs_new/")
      .then((response) => response.json())
      .then((data) => {
        setRecentPost(data);
      });
  };

  const getCategoriesBlog = async () => {
    fetch(apiUrl + "/blogs_categories/")
      .then((response) => response.json())
      .then((data) => {
        setBlogCategories(data);
      });
  };

  const menuAsideRef = useRef(null);

  const openMenuAside = () => {
    setToggleMenuAside(true);
  };

  const closeMenuAside = () => {
    setToggleMenuAside(false);
  };

  useEffect(() => {
    // if (createMode == false) {
    //   getBlogInfo();
    //   getBlogNavigate();
    //   getRecentPost();
    //   getCategoriesBlog();
    // }

    window.scrollTo(0, 0);

    const handleClickOutside = (event) => {
      if (
        menuAsideRef.current &&
        !menuAsideRef.current.contains(event.target)
      ) {
        closeMenuAside();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getBlogInfo();
    getBlogNavigate();
    getRecentPost();
    getCategoriesBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const selectedBlog = createMode ? blogInfoCreate : blogInfo;

  useEffect(() => {
    document.title = selectedBlog.title + " - Valmaz";
  }, [selectedBlog]);

  return (
    <>
      {isLoading ? (
        <p>Cargando</p>
      ) : error ? (
        <p>{error}</p>
      ) : !selectedBlog.status ? (
        <BlogsNotFound />
      ) : (
        <main className="main_blog_detail">
          {toggleMenuAside ? (
            <MenuAside
              blogCategories={blogCategories}
              recentPost={recentPost}
              ref={menuAsideRef}
            />
          ) : (
            ""
          )}
          {createMode ? "" : <ToggleMenuAside openMenuAside={openMenuAside} />}
          {createMode ? (
            <>
              <h2>Vista previa</h2> <p>valmaz.com/blog/{selectedBlog.slug}</p>
            </>
          ) : (
            ""
          )}
          <Hero
            mainImg={selectedBlog.mainImg.url}
            category={selectedBlog.category.name}
            title={selectedBlog.title}
          />
          <Body content={selectedBlog.content} />
          <AuthorSignature
            author={selectedBlog.author.name}
            link={selectedBlog.author.link}
          />
          {createMode ? (
            ""
          ) : (
            <>
              {" "}
              <Navigation
                menuLink={"/blog/"}
                next={blogNavigate.next_blog}
                previous={blogNavigate.previous_blog}
                availables={"blogs"}
              />
              <CommentsSection
                idBlog={selectedBlog.id}
                commentsInfo={selectedBlog.comments}
              />
            </>
          )}
        </main>
      )}

      {createMode ? "" : <Footer />}
    </>
  );
};
