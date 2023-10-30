import "./TestimonyCard.css";
import {
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiWorld,
} from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const TestimonyCard = ({
  id,
  facebook,
  instagram,
  linkedin,
  website,
  twitter,
  name,
  img,
  editMode = false,
  createMode = false,
  openModalDelete,
  handleTestimonysInfoTemp,
}) => {
  //LOGICA
  const socialMedias = {
    facebook: {
      icon: BiLogoFacebook,
      link: facebook,
    },
    instagram: {
      icon: BiLogoInstagramAlt,
      link: instagram,
    },
    linkedin: {
      icon: BiLogoLinkedin,
      link: linkedin,
    },
    website: {
      icon: BiWorld,
      link: website,
    },
    twitter: {
      icon: BsTwitter,
      link: twitter, // Enlace vacío
    },
  };

  const image =
    img !== ""
      ? img
      : "https://cdn-icons-png.flaticon.com/512/6632/6632582.png";

  return (
    <div className="testimony_card">
      <img src={image} />

      {editMode ? (
        <div className="testimony_card_edit_mode">
          <Link to={"/admin/agencia/editar/" + id}>
            {" "}
            <FaEdit />
          </Link>
          <MdDeleteOutline
            onClick={() => {
              openModalDelete();
              handleTestimonysInfoTemp({ name: name, id: id });
            }}
          />
        </div>
      ) : (
        ""
      )}
      <h5 className="testimony_card_name">{name}</h5>

      <div className="testimony_card_social">
        {Object.keys(socialMedias).map((socialMediaKey) => {
          const { icon: IconComponent, link } = socialMedias[socialMediaKey];
          if (link) {
            return (
              <a key={socialMediaKey} href={link}>
                <IconComponent />
              </a>
            );
          }
          return null; // No renderizar enlace cuando el enlace sea vacío
        })}
      </div>
    </div>
  );
};
