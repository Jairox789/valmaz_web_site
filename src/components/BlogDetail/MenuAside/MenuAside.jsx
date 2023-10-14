import React, { forwardRef } from "react";
import { MenuAsideItem } from "../MenuAsideItem/MenuAsideItem";
import "./MenuAside.css";
import { AiOutlineSearch } from "react-icons/ai";

export const MenuAside = forwardRef((props, ref) => {
  //LOGICA
  return (
    <div className="menu_aside_blog" ref={ref}>
      <div className="menu_aside_blog_search_container">
        <div className="menu_aside_blog_search">
          <input
            placeholder="Encuentra lo que buscas..."
            className="form-control"
            type="text"
          />
          <AiOutlineSearch />
        </div>
      </div>

      <div className="menu_aside_blog_post_container">
        <h3>Post recientes</h3>
        <MenuAsideItem
          link={"/"}
          text={"Características más importantes de un sitio web"}
        />

        <MenuAsideItem
          link={"/"}
          text={"La importancia de las redes sociales para el"}
        />

        <MenuAsideItem
          link={"/"}
          text={"Facebook Ads y su papel en la publicidad actual"}
        />
      </div>

      <div className="menu_aside_blog_categories_container">
        <h3>Categorías</h3>
        <MenuAsideItem link={"/"} text={"Categoría 1"} />

        <MenuAsideItem link={"/"} text={"Categoría 2"} />

        <MenuAsideItem link={"/"} text={"Categoría 3"} />
      </div>
    </div>
  );
});
