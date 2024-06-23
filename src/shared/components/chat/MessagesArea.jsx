import React, { useEffect, useRef } from "react";
import ChatBalloon from "./ChatBalloon";
import { useSelector } from "react-redux";

const MessagesArea = ({ messages }) => {
  const userSliceStore = useSelector((state) => state);
  const user = userSliceStore.UserSlice.user;
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="h-full px-2 overflow-y-auto bg-white  bg-[url('/chat_bg.jpg')] bg-repeat"
      ref={chatContainerRef}
    >
      <div className="py-3">
        {messages.map((item, index) => {
          return (
            <ChatBalloon
              key={item.id}
              id={item.id}
              message={item.message}
              isMyMessage={item.sender.id == user.id}
              sendDateTime={item.sendDateTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MessagesArea;
