import { useEffect } from "react";
import "./Admin.css";

export const Admin = () => {
  //LOGICA
  useEffect(() => {
    document.title = "Administrador de sitio";
  }, []);

  return (
    <main className="main_admin admin_home">
      <h1>Administrador de sitio</h1>
    </main>
  );
};
