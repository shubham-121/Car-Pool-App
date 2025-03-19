import React, { useEffect, useState } from "react";
import ParentHeader from "../Utils/ParentHeader";
import RenderPostedRides from "./RenderPostedRides";
import fetchRequest from "../Utils/fetchRequest";
import { useSelector } from "react-redux";

export default function Dashboard() {
  //   const route = "/api/bookings/driver/:driverID";
  const { accessToken } = useSelector((store) => store.authentication);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    //fetch the rides requested(user)  or rides posted(host) frrom the DB using all 3 tables
    //fetch  the booking data from booking model in DB
    async function getBookingData() {
      try {
        const bookingData = await fetchRequest("/api/bookings/driver", "GET", {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        });

        if (!bookingData) {
          console.error("Error in getting the booking ddetails");
        }
        console.log("Booking data fetched", bookingData);
        setDashboardData(bookingData);
      } catch (err) {
        console.error("Error in getting the booking ddetails", err.message);
        alert("Error in getting the booking ddetails");
      }
    }
    getBookingData();
  }, []);

  console.log("Dashboard data", dashboardData);
  return (
    <div>
      <ParentHeader></ParentHeader>
      <div className="p-6 bg-gradient-to-b bg-amber-50 min-h-screen">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          User Dashboard
        </h1>

        {/* User Info */}
        <div className="bg-amber-50 p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
          <p className="text-xl font-bold text-gray-700 mb-2">User Info</p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">UserName: </span>
            {dashboardData.currLoggedUser?.userName}
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Email:</span>{" "}
            {dashboardData.currLoggedUser?.userEmail}
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Phone:</span>{" "}
            {dashboardData.currLoggedUser?.userPhoneNumber}
          </p>
        </div>

        {/* Rides Posted */}
        <div className="space-y-6">
          <p className="text-2xl font-bold text-center font-mono">
            Requested Rides
          </p>
          {dashboardData?.allRequestedRides?.length > 0 &&
            dashboardData?.allRequestedRides.map((ride, indx) => (
              <RenderPostedRides
                key={indx}
                ride={ride}
                dashboardData={dashboardData}
                setDashboardData={setDashboardData}
                currUserID={dashboardData.currLoggedUser._id}
              ></RenderPostedRides>
            ))}
        </div>
      </div>
    </div>
  );
}

//dashboardData?.allRequestedRides
