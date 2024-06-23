import React, { useState } from "react";
import ConversationService from "../../../services/conversation/ConversationService";
import { useDispatch, useSelector } from "react-redux";
import { fetchConversations } from "../../../services/conversation/ConversationSlice";

const SendMessageForm = ({
  recieverId,
  recieverName,
  conversationId,
  setSelectedConversation,
}) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const userSliceStore = useSelector((state) => state);
  const user = userSliceStore.UserSlice.user;
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await ConversationService.createNewMessage(
      user.id,
      message,
      recieverId,
      conversationId
    );
    console.log("Message", result);
    setMessage("");
    if (conversationId == "") {
      setSelectedConversation({
        conversationId: result.conversationId,
        reciever: { id: result.recieverId, name: recieverName },
        chatMessages: [],
        lastMessagedOn: result.sendDateTime,
      });
    }
    dispatch(fetchConversations(user.id));
    // console.log(result);
    if (result) {
      // console.log("success");
    }
  };
  return (
    <div className="w-full">
      <form action="#" onSubmit={onSubmit} method="POST">
        <div className="flex px-2">
          <div className="w-9/12">
            <input
              type="text"
              name="message"
              id="message"
              className="rounded-tl-lg rounded-bl-lg w-full p-3 italic"
              autoComplete="off"
              required
              placeholder="Type Message..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="w-3/12">
            <button
              type="submit"
              className="bg-sky-400 text-white w-full rounded-tr rounded-br-lg p-3"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMessageForm;
