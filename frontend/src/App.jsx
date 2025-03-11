import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import LandingPage from "./components/Homepage/LandingPage";
import "./App.css";
import Notification from "./components/UserAuthentication/Notification";

// import LogInForm from "./components/UserAuthentication/UserAuth";

//only render landing page in app

function App() {
  const { isNotification, notificationMessage } = useSelector(
    (store) => store.notification
  );
  const dispacth = useDispatch();

  return (
    <div>
      <LandingPage></LandingPage>
      {/* <LogInForm></LogInForm> */}
    </div>
  );
}
export default App;
