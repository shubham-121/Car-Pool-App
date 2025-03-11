import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotification: false,
  notificationMessage: "", //notification message content
  loggedUserName: "", //logged username for showing username on notification message
  errorMessage: " ", //for error message while creating the user
  isNewUser: false, //only use when the user registers for the first time, for conditional rendering
  newUserName: "", //only use when the user registers for the first time , for storing the new user name only for once for signup notification
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    toggleNotification(state) {
      state.isNotification = !state.isNotification;
    },

    setNotificationMessage(state, action) {
      console.log("Notification slice triggered with data :", action.payload);
      state.notificationMessage = action.payload;
      state.isNotification = true;
    },

    clearNotificationMessage(state) {
      state.notificationMessage = "";
      state.isNotification = false;
    },

    setLoggedUserName(state, action) {
      state.loggedUserName = action.payload;
    },
    clearLoggedUserName(state) {
      state.loggedUserName = "";
    },

    toggleIsNewUser(state) {
      state.isNewUser = !state.isNewUser;
    },

    setNewUserName(state, action) {
      state.newUserName = action.payload;
    },
    clearNewUserName(state) {
      state.newUserName = "";
    },

    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    clearErrorMessage(state) {
      state.errorMessage = "";
    },
  },
});

export default notificationSlice.reducer;

export const {
  toggleNotification,
  setNotificationMessage,
  clearNotificationMessage,
  setLoggedUserName,
  clearLoggedUserName,
  setErrorMessage,
  clearErrorMessage,
  toggleIsNewUser,
  setNewUserName,
  clearNewUserName,
} = notificationSlice.actions;

//for easy use:
// import { useSelector, useDispatch } from "react-redux";
// const { isNotification, notificationMessage } = useSelector();
// const dispacth = useDispatch();
