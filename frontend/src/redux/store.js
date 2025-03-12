import { configureStore } from "@reduxjs/toolkit";

import notificationReducer from "../redux/slices/notificationSlice";
import authenticationReducer from "../redux/slices/authSlice";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    authentication: authenticationReducer,
  },
});

export default store;
