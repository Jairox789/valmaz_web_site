import "./SocialMediaAside.css";

export const SocialMediaAside = ({ icon, link }) => {
  return (
    <div className="social_media_aside">
      <a href={link}>{icon}</a>
    </div>
  );
};
