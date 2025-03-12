// src/pages/Profile/Profile.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessage,
  clearNotificationMessage,
  setErrorMessage,
  setNotificationMessage,
  toggleErrorMessage,
  toggleNotification,
} from "../../redux/slices/notificationSlice";
import Notification from "../UserAuthentication/Notification";

export default function Profile() {
  const API_URL = import.meta.env.VITE_API_URL;

  const { isAuthenticated, accessToken, authUserData } = useSelector(
    (store) => store.authentication
  );

  const { isNotification, notificationMessage, isError, errorMessage } =
    useSelector((store) => store.notification);

  const dispatch = useDispatch();

  // Dummy user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  useEffect(() => {
    async function verifyUserToken() {
      try {
        const res = await fetch(`${API_URL}/api/user/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await res.json();

        console.log("Data from protected route", data);

        if (res.status === 200) {
          dispatch(toggleNotification()); //for conditional rendering
          dispatch(setNotificationMessage(`User Verified Successfully`)); //set the logged in notification message

          setTimeout(() => {
            dispatch(clearErrorMessage());
            dispatch(clearNotificationMessage());
          }, 2500);
        } else {
          dispatch(toggleErrorMessage());
          dispatch(
            setErrorMessage(data.message || "Error In Logging The User In")
          );

          //reset state to remove notification after 2 seconds
          setTimeout(() => {
            dispatch(clearErrorMessage());
            // dispatch(clearNotificationMessage());
          }, 2500);
        }
      } catch (err) {
        dispatch(setErrorMessage("Error in  verifying the user"));

        setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 2500);

        // console.error("Cannot verify user,login again", err.message);
      }
    }
    verifyUserToken();
  }, [API_URL, accessToken, dispatch]);

  return (
    <>
      {isNotification && <Notification></Notification>}
      {isError && <Notification></Notification>}
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>

          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}
