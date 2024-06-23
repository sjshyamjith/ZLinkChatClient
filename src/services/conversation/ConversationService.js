const BASE_URL = process.env.API_URL;
const GET_USER_CONVERSATIONS_URL = "/api/Conversation/all";
const ADD_NEW_MESSAGE_URL = "/api/Conversation/message";
const CONVERSATION_BY_ID = "/api/Conversation";

const getUserConversations = async (userId) => {
  const url = BASE_URL + GET_USER_CONVERSATIONS_URL + "/" + userId;

  //connect api
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status != 200) {
    return null;
  }
  try {
    const result = await response.json();
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const getConversationById = async (conversationId) => {
  const url = BASE_URL + CONVERSATION_BY_ID + "/" + userId;

  //connect api
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status != 200) {
    return null;
  }
  try {
    const result = await response.json();
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const createNewMessage = async (
  userId,
  message,
  recieverId,
  conversationId
) => {
  const url = BASE_URL + ADD_NEW_MESSAGE_URL;
  // console.log(url);
  //connect api
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      SenderId: userId,
      RecieverId: recieverId,
      Message: message,
      ConversationId: conversationId,
    }),
  });
  // console.log(response);
  if (response.status != 200) {
    return null;
  }
  try {
    const result = await response.json();
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default { getUserConversations, createNewMessage, getConversationById };
