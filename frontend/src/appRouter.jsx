import { createBrowserRouter } from "react-router-dom";
// import LogInForm from "./components/UserAuthentication/UserAuth";
import App from "./App";
import SignUpForm from "./components/UserAuthentication/SignUpForm";
import LogInForm from "./components/UserAuthentication/LogInForm";
import ProtectedRoute from "./components/Utils/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Header from "./components/Homepage/Header";
import ParentHeader from "./components/Utils/ParentHeader";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <LogInForm></LogInForm>,
    children: [
      {
        index: true,
        element: <ParentHeader></ParentHeader>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpForm></SignUpForm>,
    children: [
      {
        index: true,
        element: <ParentHeader></ParentHeader>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
  },

  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile></Profile>
      </ProtectedRoute>
    ),
  },
]);

export { appRouter };
