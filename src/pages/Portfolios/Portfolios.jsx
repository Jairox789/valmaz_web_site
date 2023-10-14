import { useEffect } from "react";
import "./Portfolios.css";
import { Footer } from "../../components/Footer/Footer";
import { PortfoliosCard } from "../../components/Portfolios/PortfoliosCard/PortfoliosCard";

export const Portfolios = () => {
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
      mainImg: "https://i.ibb.co/wwFgyTB/IMG-2658.jpg",
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
      mainImg: "https://i.ibb.co/m5zR56s/IMG-0021.jpg",
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
      mainImg: "https://i.ibb.co/VW8Y5yr/1-2.jpg",
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

  return (
    <>
      <main className="main_portfolios">
        <h1 className="main_portfolios_title">Proyectos</h1>
        <div className="portfolios_card_container">
          {portfolioInfo.map((portfolio, index) => (
            <PortfoliosCard
              key={index}
              title={portfolio.title}
              service={portfolio.service}
              img={portfolio.mainImg}
              slug={portfolio.slug}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
