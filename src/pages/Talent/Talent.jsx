import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Talent/Form/Form";
import "./Talent.css";

export const Talent = () => {
  //LOGICA
  useEffect(() => {
    // Desplaza la página al principio (0, 0)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="main_talent">
        <h1 className="main_talent_title">Desarrolla tu carrera profesional</h1>
        <Form />
      </main>
      <Footer />
    </>
  );
};
