import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotification: false,
  notificationMessage: "",
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
  },
});

export default notificationSlice.reducer;

export const {
  toggleNotification,
  setNotificationMessage,
  clearNotificationMessage,
} = notificationSlice.actions;
