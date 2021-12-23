import React from "react";
import DarkMode from "../../constant/dark";
import { paddingX } from "../../constant/styles/spacing";
import { Logo } from "../logo/logo";
import { NavItems } from "./navItems";
import SideBar from "./sideBar";

const NavBar = () => {
  return (
    <div
      className={`${paddingX} sticky top-0 right-0 w-full flex justify-between
       items-center py-6 dark:bg-dark-800 shadow-white z-40 bg-white`}
    >
      <Logo />
      <NavItems className='sm:flex justify-between gap-8 items-center hidden' />
      <div className='flex items-center gap-4 justify-between'>
        <SideBar />
      </div>
    </div>
  );
};

export default NavBar;
