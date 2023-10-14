import { useState } from "react";
import { SliderTwo } from "../../components/Sliders/SliderTwo/SliderTwo";
import "./AdminServices.css";
import { Modal } from "../../components/Modal/Modal";
import { ServicesDetails } from "../ServicesDetails/ServicesDetails";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";

export const AdminServices = () => {
  //LOGICA

  const [modalStateEdit, setModalStateEdit] = useState(false);
  const [modalStateDelete, setModalStateDelete] = useState(false);

  const [servicesInfoTemp, setServicesInfoTemp] = useState({});

  const openModalEdit = () => {
    setModalStateEdit(true);
  };

  const openModalDelete = () => {
    setModalStateDelete(true);
  };

  const handleServicesInfoTemp = (service) => {
    setServicesInfoTemp(service);
  };

  const servicesInfo = [
    {
      id: 1,
      slug: "video-con-dron",
      mainImg:
        "https://tienda.godron.mx/wp-content/uploads/2022/12/1652197812-DJI-Mini-3-Pro-.jpeg",
      title: "Video con Drone",
      summary:
        "Con una visión aérea, comunicamos algunas de las características de tu empresa como ubicación, instalaciones y arquitectura.",
      description:
        "Nuestro servicio de Video con Drone utiliza tecnología de vanguardia para capturar imágenes impresionantes desde el aire. Destacamos las características únicas de tu empresa, como su ubicación, instalaciones y arquitectura, brindando una perspectiva única y atractiva a tus clientes.",
    },
    {
      id: 2,
      slug: "fotografia-de-producto",
      mainImg:
        "https://static-cse.canva.com/blob/984326/03Secretosfotosdeproducto.jpg",
      title: "Fotografía de Producto",
      summary:
        "Destaca tus productos con fotografías de alta calidad que resalten sus detalles y características.",
      description:
        "Nuestro servicio de Fotografía de Producto está diseñado para resaltar la belleza y los detalles de tus productos. Utilizamos técnicas avanzadas de fotografía para crear imágenes de alta calidad que atraerán a tus clientes y destacarán los aspectos únicos de tus productos.",
    },
    {
      id: 3,
      slug: "marketing-en-redes-sociales",
      mainImg:
        "https://salesland.net/sites/default/files/2018-03/estrategia-de-marketing-digital-en-redes-sociales-como-empezar.png",
      title: "Marketing en Redes Sociales",
      summary:
        "Creamos estrategias efectivas en redes sociales para aumentar la visibilidad de tu marca y atraer a nuevos clientes.",
      description:
        "Nuestro servicio de Marketing en Redes Sociales se enfoca en la creación de estrategias personalizadas para tu marca. Utilizamos plataformas de redes sociales populares para aumentar la visibilidad de tu negocio, interactuar con tu audiencia y atraer a nuevos clientes. Nuestro enfoque estratégico te ayudará a lograr resultados efectivos en línea.",
    },
    {
      id: 4,
      slug: "diseno-de-sitios-web",
      mainImg:
        "https://disenowebakus.net/imagenes/articulos/diseno-de-un-sitio-web.jpg",
      title: "Diseño de Sitios Web",
      summary:
        "Desarrollamos sitios web atractivos y funcionales que representan tu negocio en línea de manera efectiva.",
      description:
        "Nuestro servicio de Diseño de Sitios Web está diseñado para crear una presencia en línea atractiva y efectiva para tu negocio. Desarrollamos sitios web personalizados que representan la identidad de tu marca y proporcionan una experiencia excepcional para tus visitantes. Ya sea que necesites un sitio web corporativo, un sitio de comercio electrónico o una plataforma interactiva, podemos ayudarte a lograr tus objetivos en línea.",
    },
    {
      id: 5,
      slug: "produccion-de-video",
      mainImg:
        "https://e32akj3sky4.exactdn.com/wp-content/uploads/2019/08/produccion-de-un-video.jpg?strip=all&lossy=1&ssl=1",
      title: "Producción de Video",
      summary:
        "Contamos historias convincentes a través de videos profesionales que conectan con tu audiencia.",
      description:
        "Nuestro servicio de Producción de Video se centra en contar historias convincentes a través de videos profesionales. Colaboramos estrechamente contigo para comprender tus objetivos y mensajes clave, y luego creamos videos que conecten de manera efectiva con tu audiencia. Ya sea que necesites videos promocionales, comerciales, testimoniales o cualquier otro tipo de contenido audiovisual, estamos aquí para hacerlo realidad.",
    },
  ];

  return (
    <main className="main_admin admin_services">
      <AdminAddElement title={"Servicios"} toAdd={"Añadir nuevo servicio"} />

      <SliderTwo
        info={servicesInfo}
        adminMode={true}
        openModalEdit={openModalEdit}
        openModalDelete={openModalDelete}
        handleServicesInfoTemp={handleServicesInfoTemp}
      />

      <Modal
        modalState={modalStateEdit}
        setModalState={setModalStateEdit}
        tabTitle={"Editar servicio"}
      >
        <h1>EDITAR SERVICIO</h1>
      </Modal>

      <Modal
        modalState={modalStateDelete}
        setModalState={setModalStateDelete}
        tabTitle={"Eliminar servicio"}
      >
        <h1>ELIMINAR SERVICIO</h1>
      </Modal>
    </main>
  );
};