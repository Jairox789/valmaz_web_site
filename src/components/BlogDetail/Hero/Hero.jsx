import "./Hero.css";

export const Hero = ({ mainImg, category, title }) => {
  //LOGICA
  return (
    <div className="hero_blog_detail">
      <img src={mainImg} />
      <div className="hero_blog_detail_info">
        <p>{category}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};
