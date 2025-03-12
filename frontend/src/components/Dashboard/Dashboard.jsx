// src/pages/Dashboard/Dashboard.js
import React from "react";

const Dashboard = () => {
  // Dummy data for testing
  const stats = {
    totalRides: 15,
    earnings: "$250",
    upcomingRides: 3,
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🚗 Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Total Rides</h2>
          <p className="text-xl">{stats.totalRides}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Earnings</h2>
          <p className="text-xl">{stats.earnings}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Upcoming Rides</h2>
          <p className="text-xl">{stats.upcomingRides}</p>
        </div>
      </div>

      {/* Recent Rides */}
      <h2 className="text-xl font-semibold mb-2">Recent Rides</h2>
      <ul className="bg-white shadow p-4 rounded">
        <li className="py-2 border-b">🚗 Ride to City Center - Completed</li>
        <li className="py-2 border-b">🚗 Ride to Airport - Upcoming</li>
        <li className="py-2">🚗 Ride to Downtown - Completed</li>
      </ul>
    </div>
  );
};

export default Dashboard;
