import React from "react";
import CreateTalk from "./talkContainers/create";
import TalkList from "./talkContainers/talkList2";

const CloseButton = ({ onClick, children }) => (
  <div className='relative    rounded '>
  <button
    className='absolute top-0 right-0 mt-2 mr-8
text-red-500 focus:text-red-500 font-bold'
    onClick={onClick}
  >
    Close
  </button>
  {children}
  </div>
);

export const CreateTalkModal = ({ setOpen, token }) => {
  return (
      <CloseButton onClick={() => setOpen(false)}>
      <CreateTalk token={token} />
      </CloseButton>
  );
};

export const TalkListModal = ({ setOpenList }) => {
  return (
      <CloseButton onClick={() => setOpenList(false)}>

      <TalkList className=' h-80' />
      </CloseButton>
  );
};


