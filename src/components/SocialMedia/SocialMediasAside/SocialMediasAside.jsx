import { SocialMediaAside } from "../SocialMediaAside/SocialMediaAside";
import "./SocialMediasAside.css";
import {
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
} from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

export const SocialMediasAside = () => {
  //LOGICA
  return (
    <aside className="social_media_aside">
      <SocialMediaAside
        name={"Linkedin"}
        icon={<BiLogoLinkedin />}
        link={"https://www.facebook.com/"}
      />

      <SocialMediaAside
        name={"Twitter"}
        icon={<BsTwitter />}
        link={"https://www.facebook.com/"}
      />

      <SocialMediaAside
        name={"Instagram"}
        icon={<BiLogoInstagramAlt />}
        link={"https://www.facebook.com/"}
      />

      <SocialMediaAside
        name={"Facebook"}
        icon={<BiLogoFacebook />}
        link={"https://www.facebook.com/"}
      />
      <div className="social_line"></div>
      <span>Siguenos</span>
    </aside>
  );
};
