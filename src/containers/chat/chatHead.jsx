import React from "react";
import { CustomButton } from "../../components/common/button/btn";

const ChatHead = ({ chatTalk }) => {
  return (
    <div className="px-2 py-4 bg-gray-100 dark:bg-dark-700 rounded">
      <div className="flex gap-2 items-center justify-between">
        <h4
          style={{ textTransform: "uppercase" }}
          className="font-bold text-base text-gray-800 dark:text-gray-200 "
        >
          Live Chat - {chatTalk}{" "}
          <sup className="text-yellow-700 text-base">*</sup>
        </h4>
      </div>
    </div>
  );
};

export default ChatHead;
