import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotification: false,
  notificationMessage: "", //notification message content
  loggedUserName: "", //logged username for showing username on notification message
  isError: false, //for conditionally rendering the error message
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

    toggleErrorMessage(state) {
      state.isError = !state.isError;
    },

    setErrorMessage(state, action) {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    clearErrorMessage(state) {
      state.isError = false;
      state.errorMessage = "";
    },

    //these actions below only run once ,when the user is newly creeated
    toggleIsNewUser(state) {
      state.isNewUser = !state.isNewUser;
    },

    setNewUserName(state, action) {
      state.newUserName = action.payload;
    },
    clearNewUserName(state) {
      state.newUserName = "";
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
  toggleErrorMessage,
  toggleIsNewUser,
  setNewUserName,
  clearNewUserName,
} = notificationSlice.actions;

//for easy use:
// import { useSelector, useDispatch } from "react-redux";
// const { isNotification, notificationMessage } = useSelector();
// const dispacth = useDispatch();
