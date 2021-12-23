import React, { useState } from "react";
import { sideList } from "../../constant/sideNav";
import { Link } from "react-router-dom";
import { SmText } from "../../constant/styles/text";
import DarkModeToggle from "../darkMode";

const SideBar = () => {
  const [open, isOpen] = useState(false);

  //   const variants = {
  //     initial: {
  //       x: 900,
  //       opacity: 0,
  //     },
  //     show: {
  //       opacity: 1,
  //       x: 0,
  //       transition: {
  //         duration: 0.1,
  //         ease: [0.2, 0.1, -0.05, 0.5],
  //       },
  //     },
  //     exit: {
  //       opacity: 1,
  //       x: 900,
  //       transition: {
  //         duration: 0.2,
  //         ease: [0.6, 0.01, -0.05, 0.95],
  //       },
  //     },
  //   };

  return (
    <div className={`sm:hidden grid z-50 `}>
      {/* button for nav open and close in nav bar */}
      <button
        type='button'
        onClick={() => isOpen(!open)}
        className={`${
          open && "hidden"
        }  transform transition duration-500 ease-in-out z-50 mr-4`}
      >
        <div className='block w-5 absolute left-1/Name2 top-1/2 text-primary-900  transform  -translate-x-1/2 -translate-y-1/2'>
          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-primary-900 transform transition duration-500 ease-in-out ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`block absolute  h-0.5 w-5 bg-primary-900   transform transition duration-500 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`block absolute  h-0.5 w-5 bg-primary-900 transform  transition duration-500 ease-in-out ${
              open ? "-rotate-45" : " translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
      <>
        {open && (
          <div
            className={`${
              open ? "grid" : "hidden"
            } h-screen w-full absolute left-0 top-0 bg-transparent backdrop-filter backdrop-blur-sm 
            overflow-hidden  transform transition duration-1000 ease-in-out  shadow-white z-40`}
          >
            {/* button for nav open and close in slider */}
            <div
              className={`w-full justify-self-end h-screen dark:bg-dark-700 bg-primary-900 shadow-white py-16`}
            >
              <div>
                <button
                  type='button'
                  onClick={() => isOpen(!open)}
                  className=' absolute right-6 top-11  mr-4'
                >
                  <div className='block w-5 absolute left-1/Name2 top-1/2 text-white  transform  -translate-x-1/2 -translate-y-1/2'>
                    <span
                      aria-hidden='true'
                      className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
                        open ? "rotate-45" : "-translate-y-1.5"
                      }`}
                    ></span>
                    <span
                      aria-hidden='true'
                      className={`block absolute  h-0.5 w-5 bg-white   transform transition duration-500 ease-in-out ${
                        open ? "opacity-0" : ""
                      }`}
                    ></span>
                    <span
                      aria-hidden='true'
                      className={`block absolute  h-0.5 w-5 bg-white transform  transition duration-500 ease-in-out ${
                        open ? "-rotate-45" : " translate-y-1.5"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
              {/* // nav items for mobile */}
              <div className='flex flex-col gap-4 mx-8'>

              {sideList.map((el) => (
                <Link key={el.title} to={el.route}>
                  <SmText className='text-white dark:text-gray-300'>
                    {el.title}
                  </SmText>
                </Link>
              ))}
                {/* <DarkModeToggle/> */}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SideBar;
