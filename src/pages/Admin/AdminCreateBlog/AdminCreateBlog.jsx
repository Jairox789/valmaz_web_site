import { useState } from "react";
import { Create } from "../../../components/Admin/ManageBlog/Create/Create";
import "./AdminCreateBlog.css";
import { BlogDetail } from "../../BlogDetail/BlogDetail";
import { useParams } from "react-router-dom";

export const AdminCreateBlog = ({ editMode = false }) => {
  //LOGICA
  const [blogInfoCreate, setBlogInfoCreate] = useState({
    title: "",
    category: "",
    slug: "",
    mainImg: "",
    content: [],
    summary: "",
    date: "",
    author: { name: "", link: "" },
  });
  const { id } = useParams();
  return (
    <main className="main_admin admin_create_services">
      <div className="admin_create_services_form">
        <h1>{editMode ? "Editar blog" : "Crear blog"}</h1>
        <Create
          editMode={editMode}
          setBlogInfoCreate={setBlogInfoCreate}
          id={id}
        />
      </div>
      <div className="admin_create_services_preview">
        <BlogDetail createMode={true} blogInfoCreate={blogInfoCreate} />
      </div>
    </main>
  );
};
