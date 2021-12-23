import React, { useState } from "react";
import { Button } from "../components/common/button/btn";
import { paddingX } from "../constant/styles/spacing";
import { Heading } from "../constant/styles/text";
import ChatContainer from "../containers/chat/index";
import { CreateTalkModal, TalkListModal } from "../containers/modal";
import TalkList from "../containers/talkContainers/talkList";
import { useCookies } from "react-cookie";

const TalkPage = () => {
  const [cookies] = useCookies(["ct-auth"]);

  const [chatTalk, setChatTalk] = useState("");

  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const style =
    " fixed top-0 right-0 z-20 w-full bg-transparent backdrop-filter backdrop-blur-sm h-screen grid grid-cols-1 items-center justify-items-center ";
  return (
    <div className={`${paddingX} w-full grid grid-cols-1 gap-2 h-full pb-8`}>
      <div className="w-full flex justify-between py-8">
        <Button onClick={() => setOpen(true)}>Create Talk</Button>
        <Button onClick={() => setOpenList(true)}>Join A Talk</Button>
      </div>
      {/* modals  start */}
      <div className={`${open ? "flex" : "hidden"} ${style}`}>
        <CreateTalkModal setOpen={setOpen} open={open} token={cookies.user} />
      </div>
      <div className={`${openList ? "flex" : "hidden"} ${style}`}>
        <TalkListModal setOpenList={setOpenList} openList={openList} />
      </div>
      {/* modals end */}
      <TalkList
        className="h-96"
        setChatTalk={setChatTalk}
        chatTalk={chatTalk}
      />
      <div className="mt-8">
        <Heading>Chat</Heading>
        <ChatContainer me={cookies.me} chatTalk={chatTalk} />
      </div>
    </div>
  );
};

export default TalkPage;
