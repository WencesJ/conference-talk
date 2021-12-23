import React, { useState, useEffect } from "react";
import { CustomButton } from "../../components/common/button/btn";
import { Input } from "../../components/common/input";
import ChatHead from "./chatHead";
import { MyChatTab, OtherChatTab } from "./chatTab";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";

const socket = io.connect("https://conf-chat.herokuapp.com");

const ChatContainer = ({ me, chatTalk }) => {
  const username = `${me.firstName} ${me.lastName}`;
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState(
    JSON.parse(window.localStorage.getItem(chatTalk)) || []
  );

  const sendMessage = async () => {
    console.log(messageList);
    if (chatTalk == "" || chatTalk == undefined) {
      return alert("Select A Talk Before You Can Chat!");
    }

    if (currentMessage !== "") {
      const messageData = {
        subject: chatTalk,
        author: username,
        email: me.email,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      window.localStorage.setItem(
        chatTalk,
        JSON.stringify([...messageList, messageData], null, 2)
      );
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.email != me.email) {
        window.localStorage.setItem(
          chatTalk,
          JSON.stringify([...messageList, data], null, 2)
        );
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket]);

  useEffect(() => {
    if (chatTalk != "" || chatTalk != undefined)
      socket.emit("join_room", chatTalk);
    setMessageList(JSON.parse(window.localStorage.getItem(chatTalk)) || []);
  }, [chatTalk]);

  return (
    <div className="grid grid-cols-1 rounded shadow-white dark:bg-dark-800">
      <ChatHead chatTalk={chatTalk} />
      <div className="p-2 grid  grid-cols-1 gap-3">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => {
            return (
              <div>
                {username === messageContent.author ? (
                  <MyChatTab
                    key={index}
                    message={messageContent.message}
                    author={messageContent.author}
                    time={messageContent.time}
                  />
                ) : (
                  <OtherChatTab
                    key={index}
                    message={messageContent.message}
                    author={messageContent.author}
                    time={messageContent.time}
                  />
                )}
              </div>
            );
          })}
        </ScrollToBottom>
      </div>

      <div className="flex gap-2 items-center justify-between p-2">
        <Input
          placeholder="message..."
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <CustomButton
          onClick={sendMessage}
          type="button"
          className="bg-green-600 text-sm "
        >
          Send
        </CustomButton>
      </div>
    </div>
  );
};

export default ChatContainer;
