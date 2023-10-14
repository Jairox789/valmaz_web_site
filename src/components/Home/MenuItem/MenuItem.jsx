import { Link } from "react-router-dom";

export const MenuItem = ({ num, text, link, toggleMenu }) => {
  return (
    <li>
      <span>{num}.</span>
      <Link
        onClick={() => {
          toggleMenu(false);
        }}
        to={link}
      >
        <h3>{text}</h3>
      </Link>
    </li>
  );
};
