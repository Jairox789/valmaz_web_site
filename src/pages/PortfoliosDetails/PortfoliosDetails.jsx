import { useEffect } from "react";
import "./PortfoliosDetails.css";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import { Carousel } from "../../components/Carousel/CarouselOne/Carousel";
import { PortfolioInfo } from "../../components/Portfolios/PortfolioInfo/PortfolioInfo";

export const PortfoliosDetails = () => {
  //LOGICA
  useEffect(() => {
    // Desplaza la página al principio (0, 0)
    window.scrollTo(0, 0);
  }, []);
  const portfolioInfo = [
    {
      id: 1,
      slug: "proyecto-1",
      mainImg: "https://i.ibb.co/tLZhSDz/36.jpg",
      imgs: [
        "https://i.ibb.co/p3YpMSb/2770631597145984701-IMG-9996.jpg",
        "https://i.ibb.co/XFQ9XHc/20.jpg",
        "https://i.ibb.co/XX1VKqt/20210618-AXL-DC-IMG-6400-HDR.jpg",
        "https://i.ibb.co/ck4bVkq/IMG-0850.jpg",
      ],
      title: "Proyecto 1 de ejemplo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed egestas mauris. Proin auctor, turpis at condimentum ornare, tortor purus aliquet erat, nec porta est nisi sed turpis. Phasellus non scelerisque dui. Vestibulum eget eros a arcu venenatis lacinia. Fusce dictum, enim eget pellentesque ultrices, lectus sem auctor tortor, in sodales felis sapien vitae mi.",
      service: "Servicio 1",
    },
    {
      id: 2,
      slug: "proyecto-2",
      mainImg: "/src/assets/muestras/IMG_2658.JPG",
      imgs: [
        "https://i.ibb.co/p3YpMSb/2770631597145984701-IMG-9996.jpg",
        "https://i.ibb.co/XFQ9XHc/20.jpg",
        "https://i.ibb.co/XX1VKqt/20210618-AXL-DC-IMG-6400-HDR.jpg",
        "https://i.ibb.co/ck4bVkq/IMG-0850.jpg",
      ],
      title: "Proyecto 2 de ejemplo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed egestas mauris. Proin auctor, turpis at condimentum ornare, tortor purus aliquet erat, nec porta est nisi sed turpis. Phasellus non scelerisque dui. Vestibulum eget eros a arcu venenatis lacinia. Fusce dictum, enim eget pellentesque ultrices, lectus sem auctor tortor, in sodales felis sapien vitae mi.",

      service: "Servicio 2",
    },
    {
      id: 3,
      slug: "proyecto-3",
      mainImg: "/src/assets/muestras/IMG_0021.JPG",
      imgs: [
        "https://i.ibb.co/p3YpMSb/2770631597145984701-IMG-9996.jpg",
        "https://i.ibb.co/XFQ9XHc/20.jpg",
        "https://i.ibb.co/XX1VKqt/20210618-AXL-DC-IMG-6400-HDR.jpg",
        "https://i.ibb.co/ck4bVkq/IMG-0850.jpg",
      ],
      title: "Proyecto 3 de ejemplo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed egestas mauris. Proin auctor, turpis at condimentum ornare, tortor purus aliquet erat, nec porta est nisi sed turpis. Phasellus non scelerisque dui. Vestibulum eget eros a arcu venenatis lacinia. Fusce dictum, enim eget pellentesque ultrices, lectus sem auctor tortor, in sodales felis sapien vitae mi.",
      service: "Servicio 3",
    },
    {
      id: 4,
      slug: "proyecto-4",
      mainImg: "/src/assets/muestras/1 2.jpg",
      imgs: [
        "https://i.ibb.co/p3YpMSb/2770631597145984701-IMG-9996.jpg",
        "https://i.ibb.co/XFQ9XHc/20.jpg",
        "https://i.ibb.co/XX1VKqt/20210618-AXL-DC-IMG-6400-HDR.jpg",
        "https://i.ibb.co/ck4bVkq/IMG-0850.jpg",
      ],
      title: "Proyecto 4 de ejemplo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed egestas mauris. Proin auctor, turpis at condimentum ornare, tortor purus aliquet erat, nec porta est nisi sed turpis. Phasellus non scelerisque dui. Vestibulum eget eros a arcu venenatis lacinia. Fusce dictum, enim eget pellentesque ultrices, lectus sem auctor tortor, in sodales felis sapien vitae mi.",

      service: "Servicio 4",
    },
    {
      id: 5,
      slug: "proyecto-5",
      mainImg: "https://i.ibb.co/XX1VKqt/20210618-AXL-DC-IMG-6400-HDR.jpg",
      imgs: [
        "https://i.ibb.co/p3YpMSb/2770631597145984701-IMG-9996.jpg",
        "https://i.ibb.co/XFQ9XHc/20.jpg",
        "https://i.ibb.co/XX1VKqt/20210618-AXL-DC-IMG-6400-HDR.jpg",
        "https://i.ibb.co/ck4bVkq/IMG-0850.jpg",
      ],
      title: "Proyecto 5 de ejemplo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed egestas mauris. Proin auctor, turpis at condimentum ornare, tortor purus aliquet erat, nec porta est nisi sed turpis. Phasellus non scelerisque dui. Vestibulum eget eros a arcu venenatis lacinia. Fusce dictum, enim eget pellentesque ultrices, lectus sem auctor tortor, in sodales felis sapien vitae mi.",

      service: "Servicio 5",
    },
  ];

  const { slug } = useParams();

  const selectedPortfolio = portfolioInfo.find((s) => s.slug === slug);

  return (
    <>
      <main className="main_portfolios_detail">
        <section className="main_portfolios_hero">
          <img src={selectedPortfolio.mainImg} />

          <div className="main_portfolios_detail_info">
            <div>
              <h1 className="main_portfolios_detail_info_title">
                {selectedPortfolio.title}
              </h1>
              <h2 className="main_portfolios_detail_info_content">
                {selectedPortfolio.service}
              </h2>
              <span>{selectedPortfolio.description}</span>
            </div>
          </div>
        </section>
        <section className="portfolios_carousel">
          <Carousel imgs={selectedPortfolio.imgs} />
        </section>
        <section className="portfolios_info">
          <PortfolioInfo
            description={selectedPortfolio.description}
            service={selectedPortfolio.service}
          />
        </section>
      </main>
      <div className="navigation_portfolios">
        <Navigation menuLink={"/proyectos"} />
      </div>
      <Footer />
    </>
  );
};
