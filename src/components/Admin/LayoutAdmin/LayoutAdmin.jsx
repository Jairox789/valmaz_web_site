import { Outlet } from "react-router-dom";
import { SideMenu } from "../SideMenu/SideMenu";
import { Navbar } from "../Navbar/Navbar";

export function LayoutAdmin({ children }) {
  //
  return (
    <>
      <SideMenu />
      <Navbar />
      <Outlet />
    </>
  );
}
