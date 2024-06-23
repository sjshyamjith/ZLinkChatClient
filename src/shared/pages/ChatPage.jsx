import React, { useEffect, useState } from "react";
import ConversationItem from "../components/chat/ConversationItem";
import UserChatBoxCard from "../components/user/UserChatBoxCard";
import ConversationBox from "../components/chat/ConversationBox";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../../services/user/UserService";
import { fetchConversations } from "../../services/conversation/ConversationSlice";

function ChatPage() {
  const dispatch = useDispatch();
  const userSliceStore = useSelector((state) => state);
  const conversationSliceStore = useSelector((state) => state);
  const user = userSliceStore.UserSlice.user;
  const conversations = conversationSliceStore.ConversationSlice.conversations;
  const [appUsers, setAppUsers] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  console.log("conv", conversations);
  console.log("chatpage", selectedConversation);
  useEffect(() => {
    const getAllUsers = async () => {
      const _data = await UserService.allUsers(user.id);
      setAppUsers(_data);
    };
    getAllUsers();
    dispatch(fetchConversations(user.id));
  }, []);

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
                {conversations.length > 0 && (
                  <div>
                    <h3 className="mb-3">Recent Chats</h3>
                    {conversations.map((item, index) => {
                      console.log("conversation", item);
                      return (
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedConversation(item);
                          }}
                        >
                          <ConversationItem reciever={item.reciever} />
                        </div>
                      );
                    })}
                  </div>
                )}

                <h3 className="mb-3">All Users</h3>
                <div>
                  {appUsers &&
                    appUsers.map((item, index) => {
                      return (
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedConversation({
                              conversationId: null,
                              chatMessages: [],
                              lastMessagedOn: null,
                              reciever: {
                                id: item.id,
                                name: item.name,
                              },
                            });
                          }}
                        >
                          <ConversationItem
                            reciever={{
                              id: item.id,
                              name: item.name,
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {/* Conversation List */}
          </div>
          {/* Left Side */}
          {/* Right Side */}
          <div className="w-3/5 h-[500px] bg-[url('/chat_bg.jpg')]">
            {selectedConversation != null && (
              <ConversationBox
                conversation={
                  conversations.find(
                    (c) =>
                      c.conversationId == selectedConversation.conversationId
                  ) ?? selectedConversation
                }
              />
            )}
          </div>
          {/* Right Side */}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
