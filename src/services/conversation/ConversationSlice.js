import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ConversationService from "./ConversationService";
const initialState = {
  conversations: [],
  isLoading: false,
  isError: false,
};

export const fetchConversations = createAsyncThunk(
  "fetchConversations",
  async (userId) => {
    try {
      const response = await ConversationService.getUserConversations(userId);
      // console.log("response", response);
      return response;
    } catch (error) {
      return;
    }
  }
);

export const fetchConversation = createAsyncThunk(
  "fetchConversations",
  async (conversationId) => {
    try {
      const response = await ConversationService.getConversationById(
        conversationId
      );
      // console.log("response", response);
      return response;
    } catch (error) {
      return;
    }
  }
);

export const ConversationSlice = createSlice({
  name: "Conversation",
  initialState,
  extraReducers: (builder) => {
    //
    builder.addCase(fetchConversations.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    }),
      builder.addCase(fetchConversations.fulfilled, (state, action) => {
        // console.log("action.payload", action.payload);
        if (action.payload) {
          state.conversations = action.payload;
        } else {
          state.conversations = [];
        }
        state.isLoading = false;
        state.isError = false;
      }),
      builder.addCase(fetchConversations.rejected, (state, action) => {
        state.isError = true;
        isLoading = false;
      });
  },
  reducers: {
    // login
    addMessage: (state, action) => {
      // console.log("Slice called");
    },
    // logout
    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = ConversationSlice.actions;
export default ConversationSlice.reducer;
