import "./SocialMediaIcon.css";

export const SocialMediaIcon = ({ link, icon }) => {
  //LOGICA
  return (
    <a className="social_media_circle" href={link}>
      {icon}
    </a>
  );
};
