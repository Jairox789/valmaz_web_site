import { useEffect, useRef, useState } from "react";
import "./SliderOne.css";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SliderOne = ({ info }) => {
  //LOGICA
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={slider} className="slider_one_container">
      <motion.div
        className="slider_one"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {info.map((project, index) => (
          <motion.div className="item" key={index}>
            <div className="frame_img">
              <img src={project.mainImg} alt={project.title} />
            </div>
            <div className="slider_one_info">
              <h3>{project.title}</h3>
              <span>{project.service[0].title}</span>
            </div>
            <div className="slider_one_btn_container">
              <Link to={"/proyectos/" + project.slug} className="iconLink">
                <BsChevronRight />
                Ver caso
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
