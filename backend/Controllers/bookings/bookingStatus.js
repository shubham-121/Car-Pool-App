//controller for Host  aprroveal/cancelation the rides requested by the user
const Booking = require("../../Models/BookingSchema/bookingRide.js");
const Ride = require("../../Models/RidesSchema/postRide.js");
const UserSignup = require("../../Models/UserSchema/userSignup.js");

async function bookingStatus(req, res) {
  //   const body = req.user;
  const body = req.body;
  const { rideStatus } = body;
  const { bookingID } = req.params;

  console.log("Booking status body", rideStatus, bookingID);

  //get the booking ID, and update the ride confirmation in the booking DB
  try {
    const filter = { _id: bookingID };
    const update = { rideStatus: rideStatus };
    const updateStatus = await Booking.findByIdAndUpdate(filter, update, {
      new: true,
    });

    if (!updateStatus) {
      return res.status(400).json({
        message: "Server Error in approving/cancelling the ride request",
        rideStatus: "Server Error",
      });
    }

    console.log("Booking found and updated", updateStatus);

    return res.status(200).json({
      message: "Ride approval/cancellation route",
      updateStatus: updateStatus,
      rideStatus: updateStatus.rideStatus,
    });
  } catch (err) {
    console.error(
      "Error  in updating the requested booking status",
      err.message
    );
    return res.status(400).json({
      message: "Server Error in approving/cancelling the ride request",
      rideStatus: "Server Error",
    });
  }
}

module.exports = bookingStatus;
