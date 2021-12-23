import React from "react";
import NavBar from "../../components/navBar/navBar";
import AppBase from "./appBase";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className='pt-20 h-full  pb-4'>{children}</div>
      <div className='fixed bottom-0 right-0 w-full'>
        <AppBase />
      </div>
    </div>
  );
};

export default Layout;
