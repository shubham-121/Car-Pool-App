import formatDate from "../Utils/formatDate";

// Component to render each posted ride
export default function RenderPostedRides({
  ride,
  dashboardData,
  setDashboardData,
  currUserID,
}) {
  console.log(dashboardData);
  console.log("Ride data", ride);

  // Delhi: { dashboardData.allRequestedRides[0].rideID.rideSource}

  const isHost = currUserID === ride.rideID.driver; //show approve/cancel ride btn based on this
  console.log("The current user is host", isHost);

  return (
    <div>
      <div className="bg-orange-100 p-6 rounded-lg shadow-lg border border-gray-200">
        {/* Ride Details */}
        <div className="flex justify-between border-b pb-3 mb-4">
          <div>
            <p className="text-gray-800 font-semibold">
              From:{" "}
              <span className="font-xl text-blue-600">
                {ride.rideID.rideSource}
              </span>
            </p>
            <p className="text-gray-800 font-semibold">
              To:{" "}
              <span className="font-xl text-blue-600">
                {ride.rideID.rideDestination}
              </span>
            </p>
            <p className="text-gray-800 font-semibold">
              Ride Status:{" "}
              {ride.rideStatus === "Pending" ? (
                <span className="font-xl text-green-600">
                  {ride.rideStatus}
                </span>
              ) : (
                <span className="font-normal text-red-600">
                  {ride.rideStatus}
                </span>
              )}
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold font-mono text-gray-600">
              {formatDate(ride.rideID.rideDate)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-800 font-semibold">
              Seats Booked :
              <span className="font-normal text-green-600">
                {ride.seatsBooked}
              </span>
            </p>
            <p className="text-gray-800 font-semibold">
              Total Price :
              <span className="font-normal text-red-500">
                ₹ {ride.totalPrice}
              </span>
            </p>
            <p className="text-gray-800 font-semibold">
              Vehicle Type:{" "}
              <span className="font-normal text-purple-600">Sedan</span>
            </p>
          </div>
        </div>

        {/* Passenger Details */}
        <div className="flex items-center space-x-4">
          {/* <img
          src="https://via.placeholder.com/50"
          alt="Passenger Avatar"
          className="w-16 h-16 rounded-full border border-gray-300 shadow-md"
        /> */}
          <div>
            <p className="text-lg font-semibold  underline text-gray-800">
              Passenger Details
            </p>
            <p className="text-gray-600">
              <span className="text-xl font-mono text-gray-600 font-bold ">
                Passenger ID:{" "}
              </span>
              {ride.passengerID._id}
            </p>
            <p className="text-gray-600">
              <span className="text-xl font-mono text-gray-600 font-bold ">
                Name:
              </span>{" "}
              {ride.passengerID.userName}
            </p>
            <p className="text-gray-600">
              <span className="text-xl font-mono text-gray-600 font-bold ">
                Phone:
              </span>{" "}
              {ride.passengerID.userPhoneNumber}
            </p>
            <p className="text-gray-600">
              <span className="text-xl font-mono text-gray-600 font-bold ">
                Email:
              </span>{" "}
              {ride.passengerID.userEmail}
            </p>
          </div>
        </div>

        {/* Buttons */}
        {isHost && (
          <div className="flex justify-end space-x-4 mt-6">
            <button className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
              Approve
            </button>
            <button className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
