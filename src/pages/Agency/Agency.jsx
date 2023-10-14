import { useEffect } from "react";
import { About } from "../../components/Agency/About/About";
import { Hero } from "../../components/Agency/Hero/Hero";
import { TestimonyCard } from "../../components/Agency/TestimonyCard/TestimonyCard";
import { Footer } from "../../components/Footer/Footer";
import "./Agency.css";

export const Agency = () => {
  //LOGICA
  const testimonys = [
    {
      img: "https://media.licdn.com/dms/image/C4E03AQHRNzjteHSlRw/profile-displayphoto-shrink_800_800/0/1528047318157?e=1701907200&v=beta&t=Pa9FztH-uSY_91qat2fbItRgVcJRrvQcIeohuOXZYZ4",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
    {
      img: "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
    {
      img: "https://t1.uc.ltmcdn.com/es/posts/1/8/4/como_cuidar_la_barba_41481_600.webp",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RQSMx2hlkQAV-N8h5LVbLY-imS_H84Yfr-pibnwsREdUhaIW",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
  ];

  useEffect(() => {
    // Desplaza la página al principio (0, 0)
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
