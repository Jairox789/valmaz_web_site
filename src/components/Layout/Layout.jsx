import { Outlet } from "react-router-dom";
import { NavbarVisitor } from "../NavbarVisitor/NavbarVisitor";
import { Menu } from "../Menu/Menu";

export function Layout({ toggleMenu, menuVisible, children }) {
  //
  return (
    <>
      <NavbarVisitor toggleMenu={toggleMenu} isMenuVisible={menuVisible} />
      <Menu menuVisible={!menuVisible} toggleMenu={toggleMenu} />
      <Outlet />
    </>
  );
}
