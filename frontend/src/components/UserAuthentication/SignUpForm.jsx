import { useNavigate } from "react-router";
import carpool_logo2 from "../../images/carpool/carpool_logo2.avif";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessage,
  clearLoggedUserName,
  clearNewUserName,
  clearNotificationMessage,
  setErrorMessage,
  setLoggedUserName,
  setNewUserName,
  setNotificationMessage,
  toggleErrorMessage,
  toggleIsNewUser,
  toggleNotification,
} from "../../redux/slices/notificationSlice";
import Notification from "./Notification";

export default function SignUpForm() {
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const {
    isNotification,
    notificationMessage,
    loggedUserName,
    errorMessage,
    isNewUser,
    newUserName,
    isError,
  } = useSelector((store) => store.notification);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    city: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;

    console.log(name, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // console.log(formData);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    // console.log(e.target.value); /api/auth/login

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      console.log("user ddata front:", data);

      if (res.status === 200) {
        console.log("Successfully created the user", data);
        alert("Successfully created the user");

        //set global notification state for notifying the user
        dispatch(toggleNotification());
        dispatch(setNotificationMessage(`User Created Successfully`)); //set the logged in notification message

        //run only once for new user only
        dispatch(toggleIsNewUser());
        dispatch(setNewUserName(data.user.userName)); //set the new username only for once

        //reset form data
        setFormData({
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          city: "",
        });

        //wait for 3 seconds,show the user login notification,then redirect to home route:
        setTimeout(() => {
          dispatch(toggleNotification());
          // navigate("/"); //navigate to homepage
          dispatch(clearNotificationMessage());

          dispatch(toggleIsNewUser());
          dispatch(clearNewUserName()); //set the new username only for once
          // dispatch(clearLoggedUserName());
        }, 1500);

        // navigate("/")     //navigate to homepage
      } else {
        console.error("Error:", data.message || "Unknown error");

        dispatch(toggleErrorMessage());

        dispatch(
          setErrorMessage(
            data?.message
              ? data.message
              : "Problem In Creating The User In The DB"
          )
        );
        // alert(data.message || "Error in creating the user.");

        setTimeout(() => {
          //clear the errormsg after 2 seconds
          dispatch(clearErrorMessage());
        }, 2000);
      }

      console.log(data);
    } catch (err) {
      console.error("Error:", err.message || "Unknown error");
      dispatch(
        setErrorMessage(
          err?.message ? err.message : "Problem In Creating The User In The DB"
        )
      );

      setTimeout(() => {
        //clear the errormsg after 2 seconds
        dispatch(clearErrorMessage());
      }, 2000);
    }
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen mt-1 ">
      {isNotification && <Notification></Notification>}
      {isError && <Notification></Notification>}
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={carpool_logo2}
          alt="Placeholder Image"
          className="object-fill w-full h-full"
        />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <p className="text-xl font-semibold text-stone-600 text-center  ">
          New User. Sign Up Today!
        </p>
        <br></br>
        <h1 className="text-2xl font-semibold mb-4 text-stone-600">Login</h1>

        <form onSubmit={handleOnSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-stone-600">
              Name
            </label>
            <input
              value={formData.name}
              onChange={handleFormChange}
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-stone-600">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleFormChange}
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneno." className="block text-stone-600">
              Phone Number
            </label>
            <input
              value={formData.phoneNumber}
              onChange={handleFormChange}
              type="text"
              id="phoneno."
              name="phoneNumber"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-stone-600">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleFormChange}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-stone-600">
              City
            </label>
            <input
              value={formData.city}
              onChange={handleFormChange}
              type="city"
              id="city"
              name="city"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500">
            <Link to="/forgotPassword" className="hover:underline"></Link>
          </div>
          {/* Login Button */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        {/* Sign up Link */}
        <div className="mt-6 text-blue-500 text-center">
          <Link to="/login">Go Back</Link>
        </div>
      </div>
    </div>
  );
}
