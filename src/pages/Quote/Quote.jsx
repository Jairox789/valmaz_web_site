import { useEffect } from "react";
import { Form } from "../../components/Quote/Form";
import "./Quote.css";
import { Footer } from "../../components/Footer/Footer";

export const Quote = () => {
  //LOGICA
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="main_quote">
        <h1 className="main_quote_title">Cotización</h1>
        <Form />
      </main>
      <Footer />
    </>
  );
};
