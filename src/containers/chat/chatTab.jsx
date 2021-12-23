import React from "react";

export const MyChatTab = ({ message, author, time }) => {
  return (
    <>
      <br />
      <div className=" w-full grid-cols-1 grid justify-items-end ">
        <div className="bg-blue-100 p-2 rounded">
          <p
            style={{ fontSize: "15px" }}
            className=" border-b-1 border-gray-500 text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 font-bold border-b-2"
          >
            {author} - {time}
          </p>
          <p
            style={{ fontSize: "22px" }}
            className="text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 "
          >
            {message}
          </p>
        </div>
      </div>
    </>
  );
};
export const OtherChatTab = ({ message, author, time }) => {
  return (
    <>
      <br />
      <div className=" w-full grid-cols-1 grid justify-items-start p-2">
        <div className="bg-yellow-200 p-2 rounded">
          <p
            style={{ fontSize: "15px" }}
            className=" text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 font-bold border-b-2"
          >
            {author} - {time}
          </p>
          <p
            style={{ fontSize: "22px" }}
            className="text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 "
          >
            {message}
          </p>
        </div>
      </div>
    </>
  );
};
