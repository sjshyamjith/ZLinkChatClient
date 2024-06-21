import React from "react";
import ConversationItem from "../components/chat/ConversationItem";
import UserChatBoxCard from "../components/user/UserChatBoxCard";
import ConversationBox from "../components/chat/ConversationBox";

function ChatPage() {
  const user = { Id: 1, Name: "SHYAMJITH K", Email: "shyamjithsj@gmail.com" };
  return (
    <div className="bg-slate-100 rounded-xl p-2 w-full lg:w-3/4 m-auto">
      <div className="py-1">
        <div className="py-5 flex px-5 h-full">
          {/* Left Side */}
          <div className="w-2/5 border-r-2 border-r-white pb-3 pr-3 h-[500px]">
            {/* Name card */}
            <div className="h-[80px]">
              <UserChatBoxCard user={user} />
            </div>
            {/* Name card */}
            {/* Conversation List */}
            <div className="overflow-hidden h-[420px]">
              <div className=" h-full overflow-auto">
                <ConversationItem fullName="Shyam" id="1" key={1} />
                <ConversationItem fullName="Shyam" id="2" key={2} />
                <ConversationItem fullName="Shyam" id="3" key={3} />
                <ConversationItem fullName="Shyam" id="3" key={4} />
                <ConversationItem fullName="Shyam" id="3" key={5} />
                <ConversationItem fullName="Shyam" id="3" key={6} />
                <ConversationItem fullName="Shyam" id="3" key={7} />
                <ConversationItem fullName="Shyam" id="3" key={8} />
                <ConversationItem fullName="Shyam" id="3" key={9} />
                <ConversationItem fullName="Shyam" id="3" key={10} />
                <ConversationItem fullName="Shyam" id="3" key={11} />
                <ConversationItem fullName="Shyam" id="3" key={12} />
                <ConversationItem fullName="Shyam" id="3" key={13} />
                <ConversationItem fullName="Shyam" id="3" key={14} />
                <ConversationItem fullName="Shyam" id="3" key={15} />
              </div>
            </div>
            {/* Conversation List */}
          </div>
          {/* Left Side */}
          {/* Right Side */}
          <div className="w-3/5 h-[500px] bg-[url('/chat_bg.jpg')]">
            <ConversationBox />
          </div>
          {/* Right Side */}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
