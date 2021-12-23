import React from "react";
import DarkMode from "../../constant/dark";
import { paddingX } from "../../constant/styles/spacing";
import { SmText } from "../../constant/styles/text";

const DarkModeToggle = () => {
  const [colorTheme, setIsDarkMode, dark] = DarkMode();
  return (
    <div
      className={`${paddingX} relative top-0 right-0 bg-gray-100 grid dark:bg-dark-700 px-2 py-1  shadow-sm`}
    >
      <button
        onClick={() => setIsDarkMode(colorTheme)}
        className='justify-self-end max-w-min p-3'
      >
        {dark ? (
          <div className='flex items-center gap-2 '>
            <i
              className='fa fa-sun-o text-yellow-600 text-5xl'
              aria-hidden='true'
            ></i>
            <SmText className='text-yellow-600 sm:block hidden'>Light</SmText>
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            {" "}
            <i className='fa fa-moon-o text-gray-800 ' aria-hidden='true' />
            <SmText className='text-gray-800 sm:block hidden'>Dark</SmText>
          </div>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
