import { useNavigate } from "react-router";
import carpool_logo from "../../images/carpool/carpool_logo.avif";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotificationMessage } from "../../redux/slices/notificationSlice";

export default function LogInForm() {
  //   const navigate = useNavigate();

  const { isNotification, notificationMessage } = useSelector(
    (store) => store.notification
  );

  console.log(isNotification, notificationMessage);

  const dispatch = useDispatch();

  //   dispatch(setNotificationMessage("Notification state is working "));

  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleFormChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        console.log("Successfully logged the user in", data);
        alert("Successfully logged the user in");
        // setError("Error in regestering the user");

        // setNotification(true);

        //reset form data
        setFormData({
          email: "",
          password: "",
        });

        // navigate("/")     //navigate to homepage
      } else {
        console.error("Error:", data.message || "Unknown error");
        alert(data.message || "Error in logging the user.");
      }

      console.log(data);
    } catch (err) {
      console.error("Error in logging the user", err);
      alert(
        "An unexpected error occurred while logging the user. Please try again."
      );
    }
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={carpool_logo}
          alt="Placeholder Image"
          className="object-fill w-full h-full"
        />
      </div>

      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <p className="text-xl font-semibold text-stone-600 text-center  ">
          We Are Glad To Have You Back Again!
        </p>
        <br></br>
        <h1 className="text-2xl font-semibold mb-4 text-stone-600">Login</h1>

        <form onSubmit={handleOnSubmit}>
          {/* Username Input */}

          <div className="mb-4">
            <label htmlFor="username" className="block text-stone-600">
              User Email:
            </label>
            <input
              value={formData.email}
              onChange={(e) => handleFormChange(e)}
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-stone-600">
              User Password:
            </label>
            <input
              value={formData.password}
              onChange={(e) => handleFormChange(e)}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-stone-600 ml-2">
              Remember Me
            </label>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500">
            <Link to="/forgotPassword" className="hover:underline"></Link>
          </div>
          {/* Login Button */}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>

        {/* Sign up Link */}
        <div className="mt-6 text-blue-500 text-center">
          <Link to="/signup">New User? Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
}
