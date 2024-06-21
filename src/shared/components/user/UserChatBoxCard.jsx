import React from "react";

const UserChatBoxCard = ({ user }) => {
  return (
    <div className="flex border-b-2 border-b-white pb-3">
      <div className="w-1/5 flex">
        <img
          src="/chat_user_icon.png"
          className="w-full rounded-full align-middle m-auto"
          alt=""
        />
      </div>
      <div className="w-4/5 pl-3 pr-2">
        <div className="text-xl font-bold">{user.Name}</div>
        <div className="text-xs italic">{user.Email}</div>
        <div>
          <button
            type="button"
            className="bg-black text-white text-xs rounded px-2 py-1"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserChatBoxCard;
