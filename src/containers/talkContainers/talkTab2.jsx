import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CustomButton } from "../../components/common/button/btn";

const TalkTab = ({ id, subject, description, locked, token }) => {
  const [isLocked, setLocked] = useState(locked);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (token == undefined) {
      return navigate("/login");
    }
  }, []);

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
            <h1 style={{ fontWeight: "bolder" }}>Description: </h1>{" "}
            {description}
          </div>
        </div>
        <CustomButton
          className="bg-green-600 text-sm "
          onClick={() => {
            axios
              .request({
                baseURL: "https://conf-chat.herokuapp.com/api/v1/",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  Authorization: `Bearer ${token}`,
                },
                timeout: 60000,
                url: `talks/${id}/addAttendee`,
                method: "POST",
              })
              .then((response) => {
                console.log(response.data);
                alert(`You have Successfully Joined The Talk - "${subject}"`);
                window.location.reload();
              })
              .catch((err) => {
                if (err.response) {
                  alert(JSON.stringify(err.response.data.message, null, 2));
                } else alert(err);
              });
          }}
        >
          Join
        </CustomButton>
      </div>
    </div>
  );
};

export default TalkTab;
