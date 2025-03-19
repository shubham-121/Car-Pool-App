const Booking = require("../../Models/BookingSchema/bookingRide.js");
const Ride = require("../../Models/RidesSchema/postRide.js");
const UserSignup = require("../../Models/UserSchema/userSignup.js");

async function getBookingsData(req, res) {
  //get the logged user details first. Then using the email check the booking moedl associated with it
  const body = req.user;
  const { email } = body;
  console.log("User dashboard", body, email);

  try {
    //1- use email to get the current logged user._id, then query the booking model with the user._id
    const currUser = await UserSignup.findOne({ userEmail: email }); //send thiss as a response
    if (!currUser) {
      return res.status(400).json({ message: "Error in finding the user" });
    }
    const { _id: currUserID } = currUser;

    // console.log("Current user", currUser, currUserID);

    //2- now use this currUser.id to query the Booking model and check for all the rides requested by the user
    //also use populate() to get all the details of ride and user using the booking table at only once
    // const requestedRides = await Booking.find({
    //   passengerID: currUserID,
    // });
    //   .populate("UserSignup", "userName userEmail userPhoneNumber");

    const requestedRides = await Booking.find({ passengerID: currUserID })
      .populate(
        "rideID",
        "rideSource rideDestination rideDate rideTime rideAvailableSeats ridePricePerSeat driver"
      )
      .populate("passengerID", "userName userEmail userPhoneNumber");

    if (!requestedRides) {
      return res.status(400).json({
        message:
          "No requested rides found in the database, request a ride today!",
        currLoggedUser: currUser,
      });
    }

    console.log("Requested ride finded", requestedRides);

    // 3- use the requestedRides to extract the ride details(source,destination,date,seats booked, price per seat) using refernce of booking table with the ride table

    return res.status(200).json({
      message: "User bookings retrieved successfully",
      allRequestedRides: requestedRides,
      currLoggedUser: currUser,
    });
  } catch (err) {
    console.error("Error in finding user", err.message);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = getBookingsData;

//tomorrow task: the rides are not being sent for the Host. So use the Booking table and extract the booking from there and send it to the host
