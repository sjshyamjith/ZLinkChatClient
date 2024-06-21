import React from "react";
import ChatBalloon from "./ChatBalloon";

const MessagesArea = () => {
  const userId = 1;
  const messages = [
    { id: 1, message: "hi", senderId: 1, sendDateTime: "2024-06-21 18:11" },
    { id: 2, message: "hello", senderId: 2, sendDateTime: "2024-06-21 21:36" },
    {
      id: 3,
      message: "kazhycho?",
      senderId: 1,
      sendDateTime: "2024-06-21 21:37",
    },
    {
      id: 4,
      message: "Yes.. You??",
      senderId: 2,
      sendDateTime: "2024-06-21 21:38",
    },
  ];
  return (
    <div className="h-full px-2 overflow-y-auto bg-white  bg-[url('/chat_bg.jpg')] bg-repeat">
      <div className="py-3">
        {messages.map((item, index) => {
          return (
            <ChatBalloon
              key={item.id}
              id={item.id}
              message={item.message}
              isMyMessage={item.senderId == userId}
              sendDateTime={item.sendDateTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MessagesArea;
