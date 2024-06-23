import React from "react";
import RecieverChatBoxCard from "../user/RecieverChatBoxCard";
import SendMessageForm from "./SendMessageForm";
import MessagesArea from "./MessagesArea";

const ConversationBox = ({ conversation }) => {
  const reciever = conversation.reciever;

  return (
    <div>
      <div className="h-[65px]">
        <RecieverChatBoxCard recieverId={reciever.id} name={reciever.name} />
      </div>
      {/* Chat area */}
      <div className="h-[375px]">
        <MessagesArea messages={conversation.chatMessages} />
      </div>
      {/* Submission area */}
      <div className="h-60px mt-2">
        <SendMessageForm
          recieverId={reciever.id}
          conversationId={conversation.conversationId}
        />
      </div>
      {/* Chat area */}
    </div>
  );
};

export default ConversationBox;
