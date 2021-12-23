import React, { useState, useEffect } from "react";
import { Heading } from "../../constant/styles/text";
import TalkTab from "./talkTab";
import { useCookies } from "react-cookie";
import axios from "axios";

const TalkList = ({ className, setChatTalk, chatTalk }) => {
  const [talks, setTalks] = useState([]);
  const [cookies] = useCookies(["ct-auth"]);
  useEffect(() => {
    axios
      .request({
        baseURL: "https://conf-chat.herokuapp.com/api/v1/",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${cookies.user}`,
        },
        timeout: 60000,
        url: "talks/myTalks",
        method: "GET",
      })
      .then((response) => {
        setTalks(response.data.talks);
      })
      .catch((err) => {
        if (err.response) {
          alert(JSON.stringify(err.response.data.message, null, 2));
        } else alert(err);
      });
  }, []);

  return (
    <div
      className={` grid grid-cols-1 p-4  shadow-white  ${className} rounded bg-gray-100 dark:bg-dark-800 w-full`}
    >
      <Heading>My Talks</Heading>
      <div className={` grid grid-cols-1 gap-2 p-2 overflow-y-scroll h-full`}>
        {/* maps of talk tabs */}
        {talks.length === 0 ? (
          <h1>
            No Talks! <br /> Create A New Talk Or Join A Talk!
          </h1>
        ) : (
          talks.map((el) => (
            <div key={el._id}>
              <TalkTab
                subject={el.subject}
                description={el.description}
                locked={el.locked}
                setChatTalk={setChatTalk}
                chatTalk={chatTalk}
              />
              <br />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TalkList;
