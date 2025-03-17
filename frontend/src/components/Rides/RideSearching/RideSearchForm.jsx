// import carpool2 from "../../../../images/rides/carpool2.jpg";

import { useState } from "react";

import { useSelector } from "react-redux";
import fetchRequest from "../../Utils/fetchRequest";
import { useNavigate } from "react-router";

export default function RideSearchForm() {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    // time: "",
    // availableSeats: "",
    // seatPrice: "",
    // vehicleType: "",
    // note: "",
    // paymentMethod: "",
  });

  const navigate = useNavigate();

  const { isAuthenticated, accessToken, authUserData } = useSelector(
    (store) => store.authentication
  );

  function handleFormChange(e) {
    const { name, value } = e.target;
    console.log(`target: ${name}  value: ${value}`);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(`target: ${name}  value: ${value}`);
  }

  async function handleGetRides(e) {
    // const reqPath = `/api/rides/get?source=${formData.source}&destination=${formData.destination}`; //send post ride req to this path
    let reqPath = `/api/rides/get/${formData.source}/${formData.destination}/${formData.date}`; //send post ride req to this path

    if (formData.date) {
      reqPath += `/${formData.date}`;
    }

    e.preventDefault();
    //  async function fetchRequest(reqPath, reqMethod, reqHeaders = null,requestData)
    const reqResponse = await fetchRequest(
      reqPath,
      "GET",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
      //   JSON.stringify(formData)
    );
    console.log("Get Rides Request triggered", reqResponse);

    //navigate to the (/api/rides/get/${formData.source}/${formData.destination}/${formData.date}) in new page
    navigate(`/getrides/${formData.source}/${formData.destination}`);
  }

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-start gap-2 p-6 bg-cover bg-center bg-no-repeat "
      //   style={{ backgroundImage: `url(${carpool2})` }}
    >
      {/* Ride Posting Form */}
      <div className="p-6 bg-gray-100 rounded-md shadow-md w-full max-w-md max-h-[700px] overflow-y-auto">
        {/* Pickup & Destination */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold">📍 From</label>
          <input
            onChange={handleFormChange}
            value={formData.source}
            name="source"
            className="border p-2 rounded-md"
            type="text"
            placeholder="Select Pickup"
          />

          <label className="font-semibold">📍 Where To?</label>
          <input
            onChange={handleFormChange}
            name="destination"
            value={formData.destination}
            className="border p-2 rounded-md"
            type="text"
            placeholder="Select Destination"
          />
        </div>

        {/* Date & Time in a single row */}
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex-1">
            <label className="font-semibold">📅 Date</label>
            <input
              onChange={handleFormChange}
              name="date"
              className="border p-2 rounded-md w-full"
              type="date"
              value={formData.date}
            />
          </div>
          {/* <div className="flex-1">
            <label className="font-semibold">⏰ Time</label>
            <input
              onChange={handleFormChange}
              name="time"
              className="border p-2 rounded-md w-full"
              type="time"
              value={formData.time}
            />
          </div> */}
        </div>

        {/* Available Seats & Price Per Seat in a single row
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex-1">
            <label className="font-semibold">🪑 Available Seats</label>
            <input
              onChange={handleFormChange}
              name="availableSeats"
              value={formData.availableSeats}
              className="border p-2 rounded-md w-full"
              type="number"
              placeholder="Enter number of seats"
            />
          </div>
          <div className="flex-1">
            <label className="font-semibold">💰 Price Per Seat</label>
            <input
              onChange={handleFormChange}
              name="seatPrice"
              value={formData.seatPrice}
              className="border p-2 rounded-md w-full"
              type="text"
              placeholder="Enter price per seat"
            />
          </div>
        </div> */}

        {/* Vehicle Selection */}
        {/* <div className="mt-4">
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
                onClick={handleBtnData}
                name={vehicle.name}
                value={formData.vehicleType}
                data-value={vehicle.name}
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
        </div> */}

        {/* Additional Notes */}
        {/* <div className="mt-4">
          <label className="font-semibold">📝 Additional Notes</label>
          <textarea
            onChange={handleFormChange}
            value={formData.note}
            name="note"
            className="border p-2 rounded-md w-full mt-2"
            rows="3"
            placeholder="Any extra details..."
          ></textarea>
        </div> */}

        {/* Payment Method */}
        {/* <div className="mt-4">
          <label className="font-semibold block">💳 Payment Method</label>
          <div className="flex gap-2 mt-2">
            {["Cash", "Net Banking", "Debit Card"].map((method) => (
              <button
                data-value={method}
                onClick={handleBtnData}
                name="paymentMethod"
                value={formData.paymentMethod}
                key={method}
                className="border bg-gray-300 px-4 py-2 rounded-md font-bold hover:bg-gray-400 transition"
              >
                {method}
              </button>
            ))}
          </div>
        </div> */}

        {/* Submit Button */}
        <div className="mt-4 flex justify-center">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            onClick={handleGetRides}
          >
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
