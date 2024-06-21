import React from "react";
import RecieverChatBoxCard from "../user/RecieverChatBoxCard";
import SendMessageForm from "./SendMessageForm";
import MessagesArea from "./MessagesArea";

const ConversationBox = () => {
  return (
    <div>
      <div className="h-[65px]">
        <RecieverChatBoxCard />
      </div>
      {/* Chat area */}
      <div className="h-[375px]">
        <MessagesArea />
      </div>
      {/* Submission area */}
      <div className="h-60px mt-2">
        <SendMessageForm />
      </div>
      {/* Chat area */}
    </div>
  );
};

export default ConversationBox;
