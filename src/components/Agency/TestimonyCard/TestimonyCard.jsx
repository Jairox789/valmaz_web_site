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

export const TestimonyCard = ({
  facebook,
  instagram,
  linkedin,
  website,
  twitter,
  img,
  editMode = false,
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

  return (
    <div className="testimony_card">
      <img src={img} />

      {editMode ? (
        <div className="testimony_card_edit_mode">
          <FaEdit />
          <MdDeleteOutline />
        </div>
      ) : (
        ""
      )}

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
