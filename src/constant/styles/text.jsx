import React from 'react';

export const Heading = ({children, className}) => {
    return (
        <h5 className={`${className} lg:text-4xl md:text-2xl text-xl font-bold text-gray-800 dark:text-gray-100`}>
            {children}
        </h5>
    );
};

export const SubText = ({text}) => {
    return (
        <h4 className='text-blue-900 dark:bg-gray-700'>
            {text}
        </h4>
    );
};


export const SmText = ({children, className}) => {
    return (
        <h5 className={`${className}  text-sm `}>
            {children}
        </h5>
    );
};
