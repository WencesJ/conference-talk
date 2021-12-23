import React from "react";
import AppBase from "./appBase";
import Backtab from "./backtab";

const LayoutBack = ({ children }) => {
  return (
    <div className=''>
      <div className='sticky top-0 right-0  w-full'>
        <Backtab />
      </div>
      <div  className='sm:pt-20 pt-4 pb-8 '>{children}</div>
    </div>
  );
};

export default LayoutBack;
