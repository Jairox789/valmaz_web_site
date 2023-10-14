import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Home/Hero/Hero";
import { Porfolios } from "../../components/Home/Portfolios/Portfolios";
import { Services } from "../../components/Home/Services/Services";
import "./Home.css";

export const Home = () => {
  //LOGICA
  useEffect(() => {
    // Desplaza la página al principio (0, 0)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="main_home">
        <Hero />
        <Porfolios />
        <Services />
      </main>
      <Footer />
    </>
  );
};
