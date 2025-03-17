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
import RidePost from "./components/Rides/RidePosting/RidePost";
import ContactUs from "./components/Others/ContactUs";
import RideSearch from "./components/Rides/RideSearching/RideSearch";
import ShowRides from "./components/Rides/RideSearching/ShowRides";

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
    children: [
      {
        index: true,
        element: <ParentHeader></ParentHeader>,
      },
    ],
  },

  {
    path: "/postrides",
    element: (
      <ProtectedRoute>
        <RidePost></RidePost>
      </ProtectedRoute>
    ),
  },

  {
    path: "/getrides",
    element: (
      <ProtectedRoute>
        <RideSearch></RideSearch>
      </ProtectedRoute>
    ),
  },

  {
    path: "/getrides/:source/:destination/:date?",
    element: (
      <ProtectedRoute>
        <ShowRides></ShowRides>
      </ProtectedRoute>
    ),
  },

  {
    path: "/contactus",
    element: <ContactUs></ContactUs>,
  },
]);

export { appRouter };
