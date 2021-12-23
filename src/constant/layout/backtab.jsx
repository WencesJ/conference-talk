import React from "react";
import { useNavigate } from "react-router-dom";

import { paddingX } from "../styles/spacing";

const Backtab = () => {
  const navigate = useNavigate();

 
  return (
      <div className={`${paddingX} py-4 bg-gray-100 dark:bg-dark-800`}>
          <button onClick={()=>navigate(-1)} className='focus:outline-none bg-transparent p-2'>

      <i className='fa fa-arrow-left text-gray-800 dark:text-primary-900' />
          </button>
    </div>
  );
};

export default Backtab;
