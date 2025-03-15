import auto from "../../../../images/rides/auto.jpg";
import hatchback from "../../../../images/rides/hatchback.webp";
import scooter from "../../../../images/rides/scooter.jpg";
import sedan from "../../../../images/rides/sedan.png";
import suv from "../../../../images/rides/suv.png";
import carpool2 from "../../../../images/rides/carpool2.jpg";

export default function RidePostForm() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-start gap-2 p-6 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${carpool2})` }}
    >
      {/* Ride Posting Form */}
      <div className="p-6 bg-gray-100 rounded-md shadow-md w-full max-w-md max-h-[700px] overflow-y-auto">
        {/* Pickup & Destination */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold">📍 From</label>
          <input
            className="border p-2 rounded-md"
            type="text"
            placeholder="Select Pickup"
          />

          <label className="font-semibold">📍 Where To?</label>
          <input
            className="border p-2 rounded-md"
            type="text"
            placeholder="Select Destination"
          />
        </div>

        {/* Date & Time in a single row */}
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex-1">
            <label className="font-semibold">📅 Date</label>
            <input className="border p-2 rounded-md w-full" type="date" />
          </div>
          <div className="flex-1">
            <label className="font-semibold">⏰ Time</label>
            <input className="border p-2 rounded-md w-full" type="time" />
          </div>
        </div>

        {/* Available Seats & Price Per Seat in a single row */}
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex-1">
            <label className="font-semibold">🪑 Available Seats</label>
            <input
              className="border p-2 rounded-md w-full"
              type="number"
              placeholder="Enter number of seats"
            />
          </div>
          <div className="flex-1">
            <label className="font-semibold">💰 Price Per Seat</label>
            <input
              className="border p-2 rounded-md w-full"
              type="text"
              placeholder="Enter price per seat"
            />
          </div>
        </div>

        {/* Vehicle Selection */}
        <div className="mt-4">
          <label className="font-semibold">🚗 Select Vehicle Type:</label>
          <div className="flex gap-2 mt-2 flex-wrap">
            {[
              { name: "Scooter", img: scooter },
              { name: "HatchBack", img: hatchback },
              { name: "SUV", img: suv },
              { name: "Sedan", img: sedan },
              { name: "Auto", img: auto },
            ].map((vehicle) => (
              <button
                key={vehicle.name}
                className="border rounded-md p-2 flex flex-col items-center hover:bg-gray-200 transition"
              >
                <img
                  src={vehicle.img}
                  className="w-12 h-12 object-cover"
                  alt={vehicle.name}
                />
                <span className="mt-1 text-sm font-semibold">
                  {vehicle.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div className="mt-4">
          <label className="font-semibold">📝 Additional Notes</label>
          <textarea
            className="border p-2 rounded-md w-full mt-2"
            rows="3"
            placeholder="Any extra details..."
          ></textarea>
        </div>

        {/* Payment Method */}
        <div className="mt-4">
          <label className="font-semibold block">💳 Payment Method</label>
          <div className="flex gap-2 mt-2">
            {["Cash", "Net Banking", "Debit Card"].map((method) => (
              <button
                key={method}
                className="border bg-gray-300 px-4 py-2 rounded-md font-bold hover:bg-gray-400 transition"
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
            Submit Ride
          </button>
        </div>
      </div>

      {/* Map Section (Larger & Closer to Form) */}
      <div className="w-full lg:w-[550px] h-[700px] bg-gray-200 rounded-md shadow-md flex items-center justify-center text-gray-500 text-lg">
        🗺️ Map will be displayed here
      </div>
    </div>
  );
}
