import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,

  reducers: {
    // login
    loginUser: (state, action) => {
      console.log("Slice called");
      const _user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
      console.log(_user);
      state.user = _user;
    },
    // logout
    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = UserSlice.actions;
export default UserSlice.reducer;
