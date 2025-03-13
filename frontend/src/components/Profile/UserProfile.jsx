import { useDispatch, useSelector } from "react-redux";
import olivia from "../../images/users/olivia.jpg";
import { clearToken } from "../../redux/slices/authSlice";
import { Navigate, useNavigate } from "react-router";

export default function UserProfile() {
  const { authUserData } = useSelector((store) => store.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Authenticated user data after login is:", authUserData);

  function handleLogOut() {
    dispatch(clearToken());
    navigate("/");
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-900 bg-cover  p-6"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1138578799/vector/yellow-car-on-route-in-city-carsharing-cartoon.jpg?s=612x612&w=0&k=20&c=X7JgMRK9WUq8U1_NUNxtgNKqmPrhLKPCKFu2effuF7Y=')`,
      }}
    >
      <div className="w-full max-w-3xl bg-stone-300 shadow-2xl rounded-lg p-6 backdrop-blur-lg bg-opacity-90">
        {/* Profile Picture & Info */}
        <div className="text-center">
          <img
            src={olivia}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full shadow-md border-4 border-green-500"
          />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            {authUserData.authUser}
          </h2>
          <p className="text-gray-600 text-lg">
            📧 {authUserData.authUserEmail}
          </p>
          <p className="text-gray-600 text-lg">
            📞 {authUserData.authUserPhone}
          </p>
        </div>

        {/* Carpool Stats */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            🚗 Carpool Stats
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <p className="text-2xl font-bold text-green-700">15</p>
              <p className="text-gray-600">Rides Given</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <p className="text-2xl font-bold text-blue-700">8</p>
              <p className="text-gray-600">Rides Taken</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <p className="text-2xl font-bold text-yellow-700">⭐ 4.8/5</p>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
        </div>

        {/* Car Details */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            🚘 Car Details
          </h3>
          <p className="text-gray-700">
            <strong>Car:</strong> Hyundai i20
          </p>
          <p className="text-gray-700">
            <strong>Number Plate:</strong> UK07-XXXX
          </p>
          <p className="text-gray-700">
            <strong>Seats Available:</strong> 3
          </p>
          <p className="text-gray-700">
            <strong>AC:</strong> Yes
          </p>
        </div>

        {/* Preferences */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            🎵 Preferences
          </h3>
          <p className="text-gray-700">
            📍 <strong>Default Pickup:</strong> Dehradun
          </p>
          <p className="text-gray-700">
            📍 <strong>Default Drop:</strong> Uttarkashi
          </p>
          <p className="text-gray-700">
            🎵 <strong>Music:</strong> Yes
          </p>
          <p className="text-gray-700">
            🚬 <strong>Smoking:</strong> No
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md">
            Edit Profile
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow-md">
            Change Password
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md"
            onClick={handleLogOut}
          >
            Log Out
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-md">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
