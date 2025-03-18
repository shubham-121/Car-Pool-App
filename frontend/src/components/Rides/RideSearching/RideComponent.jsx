import { useSelector } from "react-redux";
import fetchRequest from "../../Utils/fetchRequest";
import formatDate from "../../Utils/formatDate";
import { useState } from "react";

export default function RideComponent({
  rideDetails,
  totalPassangers,
  setTotalPassangers,
}) {
  const { accessToken } = useSelector((store) => store.authentication);

  console.log(rideDetails);

  const bookingData = {
    rideID: rideDetails.rideInfo?._id,
    passengerID: rideDetails.userInfo?._id,
    seatsBooked: totalPassangers,
    totalPrice: totalPassangers * rideDetails.rideInfo?.ridePricePerSeat,
    rideStatus: "Pending",
    paymentStatus: "Pending",
  };

  //for handling the available seats afer bookinng , UI update
  const [reduceSeats, setReduceSeats] = useState(
    rideDetails?.rideInfo?.rideAvailableSeats || 0
  );

  // confirmRide.reduceSeats.rideAvailableSeats

  function handleTotalPassangers(e) {
    const totalseats = Number(e.target.value);
    setTotalPassangers(totalseats);
  }

  async function handleConfirmRide() {
    try {
      const confirmRide = await fetchRequest(
        "/api/bookings",
        "POST",
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        JSON.stringify(bookingData)
      );

      if (!confirmRide) {
        console.log("Error in booking the ride");
        return;
      }

      //   also handle if  no seats are available
      if (confirmRide.message === "Not enough seats available!") {
        setRideStatus(false);
      }

      console.log("Confirmed the booking ride", confirmRide);
      //show notification
      alert("Seats confirmed");
    } catch (err) {
      console.error("Error booking ride:", err);
      alert("Something went wrong. Try again later.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-amber-50 border-4 border-amber-100 shadow-lg rounded-lg">
      {/* Ride ID */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
        {/* 🚗 Ride ID: {rideID} */}
      </h2>

      {/* Ride Date & Time */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold text-gray-700">
          📅 {formatDate(rideDetails.rideInfo?.rideDate)}
        </p>
        <p className="text-lg font-semibold text-gray-700">
          ⏰ Time: {rideDetails.rideInfo?.rideTime}
        </p>
      </div>

      {/* Ride Details (Source, Destination, City) */}
      <div className="flex flex-row justify-between border border-gray-300 p-4 rounded-md bg-gray-100 shadow-sm">
        <div>
          <p className="text-lg font-semibold text-gray-800">
            📍 From:{" "}
            <span className="text-gray-600">
              {rideDetails.rideInfo?.rideSource}
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            🏁 To:{" "}
            <span className="text-gray-600">
              {rideDetails.rideInfo?.rideDestination}
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            🏙️ User City:{" "}
            <span className="text-gray-600">
              {rideDetails.userInfo?.userCity}
            </span>
          </p>
        </div>

        {/* Payment Mode, Seats Available, Vehicle Type */}
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-800">
            💰 Payment:{" "}
            <span className="text-gray-600">
              {rideDetails.rideInfo?.ridePaymentMethod}
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            🪑 Seats Available:{" "}
            <span className="text-gray-600">
              {reduceSeats
                ? reduceSeats
                : rideDetails.rideInfo?.rideAvailableSeats}
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            🚘 Vehicle:{" "}
            <span className="text-gray-600">
              {rideDetails.rideInfo?.rideVehicleType}
            </span>
          </p>
        </div>
      </div>

      {/* Host Information */}
      <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-md flex items-center shadow-md">
        {/* Avatar Placeholder */}
        <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-bold text-lg">👤</span>
        </div>

        {/* User Info */}
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-800">
            {rideDetails.userInfo?.userName}
          </p>
          <p className="text-gray-600">{rideDetails.userInfo?.userEmail}</p>
          <p className="text-gray-600">
            {rideDetails.userInfo?.userPhoneNumber}
          </p>
          <p className="text-yellow-500 mt-1">⭐ Rating: 5/5 (3 ratings)</p>
        </div>
      </div>

      {/* Booking Message & Contact Button */}
      <div className="mt-6 text-center">
        <p className="text-gray-700 italic">
          ⚠️ Your booking won't be confirmed until the driver approves your
          request.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
          📞 Contact {rideDetails.userInfo?.userName}
        </button>
      </div>

      {/* Confirm Ride Section */}
      <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
        {/* Passenger Selection */}
        <div className="flex flex-col items-center">
          <label className="font-semibold text-lg text-gray-800 mb-2">
            🎟️ Select Passengers:
          </label>
          <select
            onChange={handleTotalPassangers}
            value={totalPassangers}
            className="border border-gray-300 rounded-md p-2 text-gray-700"
          >
            <option value="">Select Total Passengers:</option>
            {[...Array(rideDetails.rideInfo?.rideAvailableSeats || 0)].map(
              (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i + 1 > 1 ? "Seats" : "Seat"}
                </option>
              )
            )}
          </select>

          {/* Total Booking Price */}
          <p className="mt-4 text-lg font-semibold text-gray-800">
            💵 Total Booking Price: ₹
            {totalPassangers * (rideDetails.rideInfo?.ridePricePerSeat || 0)}
          </p>
        </div>

        {/* Ride Status & Confirm Button */}
        <div className="text-center mt-4">
          <p className="text-green-600 font-bold text-lg">
            🚀 Ride Status: Live
          </p>
          {reduceSeats > 0 ? (
            <button
              className="mt-4 px-6 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition"
              onClick={handleConfirmRide}
            >
              ✅ Confirm Ride
            </button>
          ) : (
            <button
              className="mt-4 px-6 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-green-700 transition hover:scale-90 cursor-not-allowed"
              onClick={() => alert("Sorry no seats are available")}
            >
              ❌ No seats available
            </button>
          )}
        </div>

        {/* Cancellation Policy */}
        <p className="text-sm text-gray-600 text-center mt-4 italic">
          ❗ Note: You can cancel your booking **up to 2 hours** before the ride
          starts.
        </p>
      </div>
    </div>
  );
}
