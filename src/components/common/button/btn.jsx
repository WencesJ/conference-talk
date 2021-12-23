import React from 'react';
import './buttonStyle.css';
export const Button = ({ children, type, onClick, disabled, className }) => (
  <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={`${className} btn1 text-base m transition duration-300 ease-linear focus:outline-none`}  >
    <span className="span1"> {children}</span>
  </button>
);


export const CustomButton = ({ children, type, onClick, disabled, className }) => (
  <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={`${className} py-2 px-5 text-sm rounded text-white transition duration-300 ease-linear focus:outline-none`}  >
    <span className="span1"> {children}</span>
  </button>
);
