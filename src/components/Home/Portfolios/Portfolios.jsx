import { Link } from "react-router-dom";
import { SliderOne } from "../../Sliders/SliderOne/SliderOne";
import { BsChevronRight } from "react-icons/bs";

export const Porfolios = () => {
  //LOGICA
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

  return (
    <section className="home_portfolios">
      <div className="home_portfolios_info">
        <div>
          <ul>
            <li>Nuestro trabajo</li>
          </ul>
          <h2>Nuestros últimos proyectos</h2>
        </div>
        <div>
          <Link to={"/proyectos"}>
            <BsChevronRight /> Ver todos
          </Link>
        </div>
      </div>
      <SliderOne info={portfolioInfo} />
    </section>
  );
};
