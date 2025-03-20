import { useState } from "react";
import formatDate from "../Utils/formatDate";
import { useDispatch, useSelector } from "react-redux";
import fetchRequest from "../Utils/fetchRequest";

export default function RenderPostedRides({ ride, currUserID, children }) {
  console.log("🚗 Ride Data:", ride);
  console.log("📌 rideID.driver:", ride.rideID?.driver);
  console.log("📌 currUserID (Logged-in user):", currUserID);

  const { accessToken } = useSelector((store) => store.authentication);
  const dispatch = useDispatch();

  const [statusBtn, setStatusBtn] = useState(false); //false->host hasnt decided yet on the ride request. for rendering the approve/cancel btn based on user approval
  const [rideStatus, setRideStatus] = useState(ride.rideStatus);

  async function handleRideConfirmation(bookingID, bookingStatus) {
    console.log("clicked", bookingID, bookingStatus);
    try {
      const rideConfirmation = await fetchRequest(
        `/api/bookings/${bookingID}/status`,
        "PATCH",
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        JSON.stringify({ rideStatus: bookingStatus })
      );

      if (!rideConfirmation) {
        console.error(
          "Error in sending the Ride approval/cancellation request"
        );
        alert("Error in sending the Ride approval/cancellation request");
        return;
      }

      console.log(
        " Ride approval/cancellation request sent to backend",
        rideConfirmation.updateStatus.rideStatus
      );

      //update the UI
      setStatusBtn(true);
      setRideStatus(rideConfirmation.updateStatus?.rideStatus);
    } catch (err) {
      console.error(
        "Error in sending the Ride approval/cancellation request",
        err.message
      );
      alert("Error in sending the Ride approval/cancellation request");
    }
  }

  // ✅ Safely check for missing data
  if (!ride?.rideID || !ride?.passengerID) {
    console.log("❌ Ride ID or Passenger ID is missing:", ride);
    return null;
  }

  // ✅ Determine if the user is a host (driver) or passenger
  const isHost = ride.rideID.driver === currUserID;
  console.log("✅ Is Host:", isHost);
  return (
    <div className="bg-orange-100 p-6 rounded-lg shadow-lg border border-gray-200">
      {/* Ride Details */}
      <div className="flex justify-between border-b pb-3 mb-4">
        <div>
          <p className="text-gray-800 font-semibold">
            From:{" "}
            <span className="font-xl text-blue-600">
              {ride.rideID.rideSource || "N/A"}
            </span>
          </p>
          <p className="text-gray-800 font-semibold">
            To:{" "}
            <span className="font-xl text-blue-600">
              {ride.rideID.rideDestination || "N/A"}
            </span>
          </p>
          <p className="text-gray-800 font-semibold">
            Ride Status:{" "}
            <span
              className={`font-xl ${
                rideStatus === "Confirmed" ? "text-green-600" : "text-red-600"
              }`}
            >
              {rideStatus || "N/A"}
            </span>
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold font-mono text-gray-600">
            {ride.rideID.rideDate ? formatDate(ride.rideID.rideDate) : "N/A"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-800 font-semibold">
            Seats Booked:{" "}
            <span className="font-normal text-green-600">
              {ride.seatsBooked || 0}
            </span>
          </p>
          <p className="text-gray-800 font-semibold">
            Total Price:{" "}
            <span className="font-normal text-red-500">
              ₹ {ride.totalPrice || 0}
            </span>
          </p>
        </div>
      </div>

      {/* ✅ Passenger Details (ALWAYS VISIBLE) */}
      <div className="border-t border-gray-300 pt-3 mt-3">
        <p className="text-lg font-semibold underline text-gray-800">
          Passenger Details
        </p>
        <p className="text-gray-600">
          <span className="text-xl font-mono font-bold">Name:</span>{" "}
          {ride.passengerID.userName || "N/A"}
        </p>
        <p className="text-gray-600">
          <span className="text-xl font-mono font-bold">Phone:</span>{" "}
          {ride.passengerID.userPhoneNumber || "N/A"}
        </p>
        <p className="text-gray-600">
          <span className="text-xl font-mono font-bold">Email:</span>{" "}
          {ride.passengerID.userEmail || "N/A"}
        </p>
      </div>

      {isHost && rideStatus === "Pending" && (
        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600"
            onClick={() => handleRideConfirmation(ride._id, "Confirmed")}
          >
            ✅ Approve
          </button>
          <button
            className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600"
            onClick={() => handleRideConfirmation(ride._id, "Cancelled")}
          >
            ❌ Cancel
          </button>
        </div>
      )}
    </div>
  );
}
