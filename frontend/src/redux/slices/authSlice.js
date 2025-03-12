import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, //for global auth
  accessToken: "", //state for storing access token
  refreshToken: "", //state for storing  refresh token
  authUserData: {}, //for storing authenticated user data obj type
};

const authSlice = createSlice({
  name: "authentication", //slice state name for referring
  initialState,
  reducers: {
    //havent used anywhere, delete later this setToken()
    setTokens(state, action) {
      state.accessToken = action.payload;
      state.refreshToken = action.payload;
      state.isAuthenticated = true;
    },

    setAccessToken(state, action) {
      const { message, userName, userEmail, userPhoneNumber, token } =
        action.payload;
      state.isAuthenticated = true;
      state.accessToken = token;

      //set logged user dataUser
      state.authUserData = {
        authUser: userName,
        authUserEmail: userEmail,
        authUserPhone: userPhoneNumber,
      };

      console.log(
        "Access token triggered",
        state.accessToken,
        state.isAuthenticated,
        state.authUserData
      );

      console.log("Access token", state.accessToken);
    },

    //work on this later
    setRefreshToken(state, action) {
      state.isAuthenticated = true;
      state.refreshToken = action.payload;
    },
    clearToken(state, action) {
      state.accessToken = "";
      state.refreshToken = "";
      state.isAuthenticated = false;
      state.authUserData = {};
    },
  },
});

export default authSlice.reducer;

export const { setTokens, clearToken, setAccessToken, setRefreshToken } =
  authSlice.actions;
