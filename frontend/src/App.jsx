import { useEffect, useState } from "react";
import LandingPage from "./components/Homepage/LandingPage";
import "./App.css";

// import LogInForm from "./components/UserAuthentication/UserAuth";

//only render landing page in app

function App() {
  return (
    <div>
      <LandingPage></LandingPage>
      {/* <LogInForm></LogInForm> */}
    </div>
  );
}
export default App;
