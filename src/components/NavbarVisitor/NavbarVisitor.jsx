import { Navbar } from "../Navbar/Navbar";
import { SocialMediasAside } from "../SocialMedia/SocialMediasAside/SocialMediasAside";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import "./NavbarVisitor.css";

export const NavbarVisitor = ({ toggleMenu }) => {
  //LOGICA
  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <div className="layout">
        <ThemeToggle />
        <SocialMediasAside />
      </div>
    </>
  );
};
