import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../user/UserSlice";
import ConversationSlice from "../conversation/ConversationSlice";

const store = configureStore({
  reducer: { UserSlice, ConversationSlice },
});

export default store;
