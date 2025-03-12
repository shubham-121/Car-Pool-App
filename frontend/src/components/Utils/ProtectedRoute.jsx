import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import {
  clearNotificationMessage,
  setNotificationMessage,
} from "../../redux/slices/notificationSlice";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, accessToken } = useSelector(
    (store) => store.authentication
  );

  const dispatch = useDispatch();

  //show notification if user not logged in
  useEffect(() => {
    if (!isAuthenticated || !accessToken) {
      //   console.error("User not loggged in!");
      dispatch(setNotificationMessage("Please Log In Again!"));

      setTimeout(() => {
        dispatch(clearNotificationMessage());
      }, 3000);
    }
  }, [isAuthenticated, accessToken, dispatch]);

  //redirect him to login page
  if (!isAuthenticated || !accessToken) {
    return <Navigate to="/login" replace></Navigate>;
  }

  //if authenticated, allow and render the components
  return <> {children}</>;
}
