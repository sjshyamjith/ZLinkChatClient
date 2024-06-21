import React, { useEffect, useState } from "react";
import ChatBalloonWithEdit from "../hoc/ChatBalloonWithEdit";
import DateParsing from "../../../utils/DateParsing";

const ChatBalloon = ({
  id,
  message,
  sendDateTime,
  isMyMessage,
  editMessage,
}) => {
  const [isEditVisible, setEditIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setEditIsVisible(true);
  };

  const handleMouseLeave = () => {
    setEditIsVisible(false);
  };
  const isMessageInLimitHours = DateParsing.isExactlyLimitHoursDifference(
    sendDateTime,
    4
  );
  return (
    <div
      className="mb-3 flow-root relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`max-w-[75%] min-w-[30%] ${
          isMyMessage ? "bg-slate-400" : "bg-orange-400"
        } text-white p-2 rounded-lg ${
          isMyMessage ? "float-end" : "float-start"
        }`}
      >
        <div className={`pb-2 text-left`}>{message}</div>
        <div
          className={`${isMyMessage ? "text-left" : "text-right"} text-xs ${
            isMyMessage ? "text-slate-200" : "text-orange-200"
          }`}
        >
          <div>{sendDateTime}</div>
          {isMyMessage && isMessageInLimitHours && (
            <div
              onClick={() => {
                editMessage(id, message);
              }}
              className={`${
                isEditVisible ? "block" : "hidden"
              } absolute right-1 bottom-1 bg-slate-600 rounded py-1 text-white text-xs px-2 cursor-pointer`}
            >
              Edit
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBalloonWithEdit(ChatBalloon);
