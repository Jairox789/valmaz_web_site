import React, { forwardRef, useEffect, useState } from "react";
import { MenuAsideItem } from "../MenuAsideItem/MenuAsideItem";
import "./MenuAside.css";
import { useApiContext } from "../../../context/ApiContext";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const MenuAside = forwardRef((props, ref) => {
  //LOGICA
  const { apiUrl } = useApiContext();

  const [queryResults, setQueryResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dropList, setDropList] = useState(false);

  const getQueryResults = async (query) => {
    if (query === "") {
      setQueryResults([]);
    } else {
      fetch(apiUrl + "/blogs_query/" + query)
        .then((response) => response.json())
        .then((data) => {
          setQueryResults(data);
        });
    }
  };

  useEffect(() => {
    setDropList(inputValue != "" ? true : false);
  }, [inputValue]);

  return (
    <div className="menu_aside_blog" ref={ref}>
      <div className="menu_aside_blog_search_container">
        <div className="menu_aside_blog_search">
          <input
            placeholder="Encuentra lo que buscas..."
            className="form-control"
            type="text"
            value={inputValue}
            onChange={(e) => {
              getQueryResults(e.target.value);
              setInputValue(e.target.value);
            }}
          />
          {dropList ? (
            <AiOutlineClose
              onClick={() => {
                setDropList(false);
                setInputValue("");
                setQueryResults([]);
              }}
            />
          ) : null}
        </div>
      </div>

      {dropList ? (
        queryResults.length > 0 ? (
          <div className="menu_aside_blog_query_results">
            {queryResults.map((query, index) => (
              <Link
                className="menu_aside_blog_query"
                to={"/blog/" + query.slug}
                key={index}
              >
                <div className="query_results" key={query.id}>
                  <Link to={"/blog/" + query.slug}>{query.title}</Link>
                  <Link to={"/blog/categorias/" + query.category.name}>
                    {query.category.name}
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="menu_aside_blog_query_results">
            <div className="query_results">
              <p>No hay resultados...</p>
            </div>
          </div>
        )
      ) : null}

      <div className="menu_aside_blog_post_container">
        <h3>Post recientes</h3>
        {props.recentPost.map((post) => (
          <MenuAsideItem
            key={post.slug}
            link={"/blog/" + post.slug}
            text={post.title}
          />
        ))}
      </div>

      <div className="menu_aside_blog_categories_container">
        <h3>Categorías</h3>

        {props.blogCategories.map((category) => (
          <MenuAsideItem
            key={category.id}
            link={"/blog/categorias/" + category.name}
            text={category.name}
          />
        ))}
      </div>
    </div>
  );
});
