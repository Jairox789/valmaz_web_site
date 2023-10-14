import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import { Hero } from "../../components/BlogDetail/Hero/Hero";
import { Body } from "../../components/BlogDetail/Body/Body";
import { MenuAside } from "../../components/BlogDetail/MenuAside/MenuAside";
import { ToggleMenuAside } from "../../components/BlogDetail/ToggleMenuAside/ToggleMenuAside";
import { Navigation } from "../../components/Navigation/Navigation";
import { CommentsSection } from "../../components/BlogDetail/CommentsSection/CommentsSection";
import { AuthorSignature } from "../../components/BlogDetail/AuthorSignature/AuthorSignature";

export const BlogDetail = () => {
  //LOGICA
  const [toggleMenuAside, setToggleMenuAside] = useState(false);

  const menuAsideRef = useRef(null);

  const openMenuAside = () => {
    setToggleMenuAside(true);
  };

  const closeMenuAside = () => {
    setToggleMenuAside(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleClickOutside = (event) => {
      if (
        menuAsideRef.current &&
        !menuAsideRef.current.contains(event.target)
      ) {
        closeMenuAside();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { slug } = useParams();

  const blogInfo = [
    {
      id: 1,
      title: "Características más importantes de un sitio web",
      category: "Marketing",
      slug: "caracteristicas-mas-importantes-de-un-sitio-web",
      mainImg:
        "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
      content: [
        {
          type: "p",
          content:
            "En la actualidad, los sitio web cuentan con diversos elementos que básicamente permiten su correcto funcionamiento, pero, ¿Sabias que hay algunas características indispensables que todo sitio web deberías de tener? Estas características son los encabezados, los CTA (Call To Action), calidad de contenido, botones de redes sociales y formulario de contacto. A continuación te hablaremos un poco acerca de cada uno de estos elementos.",
        },

        {
          type: "img",
          url: "https://www.sherlockcomms.com/wp-content/uploads/2022/07/company-ever-finish-social-media-marketing-strategy-img.jpg",
          description: "",
        },
        { type: "h2", content: "La importancia de los encabezados    " },
        {
          type: "p",
          content:
            "Los usuarios buscan contenido que llame su atención, por lo que los encabezados juegan un papel muy importante en este tema. Siempre se recomienda utilizar palabras y frases que tengan una impresión instantánea con los usuarios, tales como “rápido”, “sobresaliente” e incluso “oferta especial” por mencionar algunos ejemplos. Los encabezados deben de estar estructurados para retener el usuario en el sitio web, haciendo que este pase por todo el documento y al mismo tiempo haciéndole saber “que” es lo que está visualizando.  ",
        },
        {
          type: "img",
          url: "https://static.wixstatic.com/media/8c26a2_ef168943d69947999d58160edffc690f~mv2.jpg/v1/fill/w_1431,h_954,al_c,q_90/8c26a2_ef168943d69947999d58160edffc690f~mv2.webp",
          description: "",
        },
      ],
      summary: "Summary of blog 1",
      date: "2022-01-01",
      author: "Jairo Ortega",
      comments: [
        {
          name: "Jairo",
          date: "12 de Octubre, 2023 a las 12:40 pm",
          comment: "Excelente artículo",
        },
        {
          name: "John Doe",
          date: "13 de Octubre, 2023 a las 11:20 pm",
          comment: "Muy bien escrito y útil, gracias por compartirlo.",
        },
        {
          name: "Jorge",
          date: "12 de Octubre, 2023 a las 12:40 pm",
          comment: "Me encantó este contenido. ¡Espero ver más en el futuro!",
        },
      ],
    },
    {
      id: 2,
      title: "Tendencias del marketing actuales",
      category: "Marketing",
      slug: "tendencias-del-marketing-actuales",
      mainImg:
        "http://valmaz.com/wp-content/uploads/2022/05/mobile-notification-icons-between-man-and-woman-using-cell-phone-768x512.jpg",
      content: [
        {
          type: "p",
          content:
            "El marketing es una materia que mantiene su esencia, pero pasa por cambios constantes cuando se trata de las diferentes maneras que existen para alcanzar e interactuar con clientes potenciales. Sabiendo esto, es muy necesario tener entendido que existen tendencias en el marketing digital, las cuales deben tenerse en consideración al momento de realizar campañas, ya que esto puede ser la diferencia entre realizar una venta y perder a un cliente potencial. A continuación se hablara un poco acerca de algunas de las tendencias actuales del marketing digital.",
        },

        {
          type: "img",
          url: "http://valmaz.com/wp-content/uploads/2022/05/4040274-600x600.jpg",
          description: "",
        },
        {
          type: "p",
          content:
            "El mindful marketing es una de las tendencias mas relevantes del 2022, permitiendo mostrar a las compañías desde una perspectiva mucho mas humana y consistente. Básicamente, el mindful marketing permite que las empresas muestran su identidad a otros usuarios, mostrando sus valores y filosofías como negocio. Esta tendencia nace de la necesidad de la sociedad para sentirse mas identificada con las marcas y no solo comprar por comprar.",
        },
        {
          type: "img",
          url: "http://valmaz.com/wp-content/uploads/2022/06/5149654-300x300.jpg",
          description: "",
        },
        {
          type: "img",
          url: "http://valmaz.com/wp-content/uploads/2022/06/Big_phone_with_cart-300x300.png",
          description: "",
        },
      ],
      summary: "Summary of blog 2",
      date: "2022-01-02",
      author: "John Doe",
      comments: [
        {
          name: "Maria",
          date: "15 de Octubre, 2023 a las 9:15 am",
          comment:
            "Interesante artículo, me ha ayudado mucho a comprender este tema.",
        },
        {
          name: "Laura",
          date: "16 de Octubre, 2023 a las 3:30 pm",
          comment:
            "¡Excelente contenido! Estoy ansiosa por leer más de tu blog.",
        },
        {
          name: "Pedro",
          date: "17 de Octubre, 2023 a las 8:45 am",
          comment:
            "Gracias por compartir tus conocimientos. Tu artículo es muy claro y completo.",
        },
      ],
    },
    {
      id: 3,
      title: "Blog Title 3",
      category: "Marketing",
      slug: "blog-title-3",
      mainImg: "image7.jpg",
      content: [
        {
          type: "p",
          content:
            "En la actualidad, los sitio web cuentan con diversos elementos que básicamente permiten su correcto funcionamiento, pero, ¿Sabias que hay algunas características indispensables que todo sitio web deberías de tener? Estas características son los encabezados, los CTA (Call To Action), calidad de contenido, botones de redes sociales y formulario de contacto. A continuación te hablaremos un poco acerca de cada uno de estos elementos.",
        },

        {
          type: "img",
          url: "https://www.sherlockcomms.com/wp-content/uploads/2022/07/company-ever-finish-social-media-marketing-strategy-img.jpg",
          description: "",
        },
        { type: "h2", content: "La importancia de los encabezados    " },
        {
          type: "p",
          content:
            "Los usuarios buscan contenido que llame su atención, por lo que los encabezados juegan un papel muy importante en este tema. Siempre se recomienda utilizar palabras y frases que tengan una impresión instantánea con los usuarios, tales como “rápido”, “sobresaliente” e incluso “oferta especial” por mencionar algunos ejemplos. Los encabezados deben de estar estructurados para retener el usuario en el sitio web, haciendo que este pase por todo el documento y al mismo tiempo haciéndole saber “que” es lo que está visualizando.  ",
        },
        {
          type: "img",
          url: "https://static.wixstatic.com/media/8c26a2_ef168943d69947999d58160edffc690f~mv2.jpg/v1/fill/w_1431,h_954,al_c,q_90/8c26a2_ef168943d69947999d58160edffc690f~mv2.webp",
          description: "",
        },
      ],
      summary: "Summary of blog 3",
      date: "2022-01-03",
      author: "John Doe",
      comments: [
        {
          name: "Lucía",
          date: "18 de Octubre, 2023 a las 11:55 am",
          comment: "Este artículo es justo lo que estaba buscando. ¡Gracias!",
        },
        {
          name: "Carlos",
          date: "19 de Octubre, 2023 a las 5:20 pm",
          comment:
            "Muy informativo. Has cubierto todos los aspectos importantes.",
        },
        {
          name: "Ana",
          date: "20 de Octubre, 2023 a las 9:30 am",
          comment: "Me ha inspirado a profundizar en este tema. ¡Gran trabajo!",
        },
      ],
    },
  ];

  const selectedBlog = blogInfo.find((s) => s.slug === slug);
  console.log(selectedBlog);
  return (
    <>
      <main className="main_blog_detail">
        {toggleMenuAside ? <MenuAside ref={menuAsideRef} /> : ""}
        <ToggleMenuAside openMenuAside={openMenuAside} />
        <Hero
          mainImg={selectedBlog.mainImg}
          category={selectedBlog.category}
          title={selectedBlog.title}
        />
        <Body content={selectedBlog.content} />
        <AuthorSignature
          author={selectedBlog.author}
          link={"https://www.valmaz.com"}
        />
        <Navigation />

        <CommentsSection commentsInfo={selectedBlog.comments} />
      </main>
      <Footer />
    </>
  );
};
