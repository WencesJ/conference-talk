import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/btn";
import Layout from "../../constant/layout/layout";
import { LoginModal } from "../modal";

const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='h-screen flex place-content-center flex-col items-center justify-items-center'>
      <h3 className='font-extrabold text-4xl text-gray-700'>Let's Talk</h3>
      <div className='flex flex-col items-center'>
        <Link to='/talk'>
          <Button>Login</Button>{" "}
        </Link>
        <Link to='/signup' className='text-blue'><p className='text-gray-800 dark:text-gray-100 text-sm text-center'>SignUp</p></Link>
      </div>
    </div>
  );
};

export default Index;
