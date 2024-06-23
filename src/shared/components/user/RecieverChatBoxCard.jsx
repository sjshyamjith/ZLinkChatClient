import React from "react";

const RecieverChatBoxCard = ({ recieverId, name }) => {
  return (
    <div className="rounded-xl bg-orange-400 p-2 flex cursor-pointer mb-3">
      <div className="w-[10%] flex">
        <img
          src="/chat_user_icon.png"
          className="w-full rounded-full align-middle m-auto"
          alt=""
        />
      </div>
      <div className="w-5/6 pl-1 pr-2 flex">
        <div className="self-center">
          <div className="text-left text-white uppercase">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default RecieverChatBoxCard;
