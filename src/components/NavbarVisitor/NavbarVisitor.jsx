import { Navbar } from "../Navbar/Navbar";
import { SocialMediasAside } from "../SocialMedia/SocialMediasAside/SocialMediasAside";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import "./NavbarVisitor.css";

export const NavbarVisitor = ({ toggleMenu, isMenuVisible }) => {
  //LOGICA
  return (
    <>
      <Navbar toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} />
      <div className="layout">
        <ThemeToggle />
        <SocialMediasAside />
      </div>
    </>
  );
};
