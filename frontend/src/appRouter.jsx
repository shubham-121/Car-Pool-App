import { createBrowserRouter } from "react-router-dom";
// import LogInForm from "./components/UserAuthentication/UserAuth";
import App from "./App";
import SignUpForm from "./components/UserAuthentication/SignUpForm";
import LogInForm from "./components/UserAuthentication/LogInForm";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <LogInForm></LogInForm>,
  },
  {
    path: "/signup",
    element: <SignUpForm></SignUpForm>,
  },
]);

export { appRouter };
