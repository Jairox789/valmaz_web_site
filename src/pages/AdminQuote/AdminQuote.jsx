import { useEffect } from "react";
import "./AdminQuote.css";

export const AdminQuote = () => {
  //Logica
  useEffect(() => {
    // Desplaza la página al principio (0, 0)
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main_admin admin_quote">
      <h1>Cotizaciones</h1>
    </main>
  );
};
