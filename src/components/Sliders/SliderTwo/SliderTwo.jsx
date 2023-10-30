import { useEffect, useRef, useState } from "react";
import "./SliderTwo.css";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const SliderTwo = ({
  info,
  adminMode = false,
  openModalDelete,
  handleServicesInfoTemp,
}) => {
  //LOGICA
  const [width, setWidth] = useState(0);
  const slider = useRef();

  const isAdminMode = adminMode ? "_adminMode" : "";

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={slider} className="slider_two_container">
      <motion.div
        className="slider_two"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {info.map((service, index) => (
          <motion.div className="item" key={index}>
            <img src={service.mainImg} alt={service.title} />

            {adminMode ? (
              <div className="slider_two_info_admin">
                <Link to={"/admin/servicios/editar/" + service.id}>
                  <FaEdit />
                </Link>

                <MdDeleteOutline
                  onClick={() => {
                    openModalDelete();
                    handleServicesInfoTemp(service);
                  }}
                />
              </div>
            ) : (
              ""
            )}

            <div className="slider_two_info">
              <div>
                <h3>{service.title}</h3>
                <span>{service.summary}</span>
              </div>
              <Link to={"/servicios/" + service.slug}>
                <AiOutlineArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
