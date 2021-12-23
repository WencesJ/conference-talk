import React from "react";
import { CustomButton } from "../../components/common/button/btn";

const TalkTab = ({ subject, description, setChatTalk, chatTalk }) => {
  return (
    <div className="grid grid-cols-1 gap-2 flex-grow items-center rounded bg-gray-100 dark:bg-dark-700  hover:shadow-white py-2 px-2">
      <div className="flex gap-2 items-center justify-between">
        <div>
          <div className="text-gray-800 dark:text-gray-200  text-base">
            <h1 style={{ fontWeight: "bolder" }}>Subject: </h1>
            <h1 style={{ textTransform: "uppercase" }}>{subject}</h1>
          </div>
          {/* <br /> */}
          <br />
          <div
            style={{ textTransform: "capitalize" }}
            className="text-gray-800 dark:text-gray-200 flex flex-wrap text-base"
          >
            <h1 style={{ fontWeight: "bolder" }}>Description:</h1>
            <br />
            {description}
          </div>
        </div>

        <CustomButton
          className={`${
            chatTalk == subject ? "bg-green-600" : "bg-red-600"
          } text-sm `}
          onClick={() => {
            setChatTalk(subject);
          }}
        >
          {`${chatTalk == subject ? "Online" : "Chat"}`}
        </CustomButton>
      </div>
    </div>
  );
};

export default TalkTab;
