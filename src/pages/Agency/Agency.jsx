import { useEffect, useState } from "react";
import { About } from "../../components/Agency/About/About";
import { Hero } from "../../components/Agency/Hero/Hero";
import { TestimonyCard } from "../../components/Agency/TestimonyCard/TestimonyCard";
import { Footer } from "../../components/Footer/Footer";
import "./Agency.css";
import { useApiContext } from "../../context/ApiContext";

export const Agency = () => {
  //LOGICA
  const [testimonys, setTestimonys] = useState([]);

  const { apiUrl } = useApiContext();

  const getVacantsInfo = async () => {
    fetch(apiUrl + "/testimonials/")
      .then((response) => response.json())
      .then((data) => {
        setTestimonys(data);
      });
  };
  useEffect(() => {
    document.title = "Agencia - Valmaz";
    getVacantsInfo();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="main_agency">
        <Hero />
        <About />
        <div className="testimony_info">
          <h2>Testimonios</h2>
          <p>Lo que dicen nuestros clientes de nosotros.</p>
        </div>
        <div className="testimony_container">
          {testimonys.map((testimony, index) => (
            <TestimonyCard
              key={index}
              name={testimony.name}
              img={testimony.img}
              facebook={testimony.social.facebook}
              instagram={testimony.social.instagram}
              linkedin={testimony.social.linkedin}
              website={testimony.social.website}
              twitter={testimony.social.twitter}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
