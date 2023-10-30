import { SocialMediaAside } from "../SocialMediaAside/SocialMediaAside";
import "./SocialMediasAside.css";
import {
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoTiktok,
} from "react-icons/bi";

export const SocialMediasAside = () => {
  //LOGICA
  return (
    <aside className="social_media_aside">
      <SocialMediaAside
        name={"Facebook"}
        icon={<BiLogoFacebook />}
        link={"https://www.facebook.com/valmazmarketingdigital"}
      />

      <SocialMediaAside
        name={"Instagram"}
        icon={<BiLogoInstagramAlt />}
        link={"https://www.instagram.com/valmazmarketingdigital/"}
      />

      <SocialMediaAside
        name={"Youtube"}
        icon={<BiLogoYoutube />}
        link={"https://www.youtube.com/channel/UCx8LF0ZsoTe54xYmi9UUrUw"}
      />

      <SocialMediaAside
        name={"Linkedin"}
        icon={<BiLogoLinkedin />}
        link={"https://www.linkedin.com/company/valmaz-marketing-digital/"}
      />

      <SocialMediaAside
        name={"Tiktok"}
        icon={<BiLogoTiktok />}
        link={"https://www.tiktok.com/@valmazmarketing?_t=8gkp43DhzQj&_r=1"}
      />

      <div className="social_line"></div>
      <span>Siguenos</span>
    </aside>
  );
};
