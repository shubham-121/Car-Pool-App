// sends booking req. creates a new booking in booking schema

const Booking = require("../../Models/BookingSchema/bookingRide.js");
const Ride = require("../../Models/RidesSchema/postRide.js");

async function postBooking(req, res) {
  const body = req.body;

  const {
    rideID: bookingRideID,
    passengerID: bookingPassengerID,
    seatsBooked: bookingTotalSeats,
    totalPrice: bookingTotalPrice,
    rideStatus: bookingRideStatus,
    paymentStatus: bookingPaymentStatus,
  } = body;

  //prettier-ignore
  //cancel booki if any field is missing
  if ( !bookingRideID || !bookingPassengerID || !bookingTotalSeats || !bookingTotalPrice || !bookingRideStatus || !bookingPaymentStatus){
    return res
      .status(400)
      .json({ message: "Failed to book the ride, missing fields" });
  }

  try {
    const createBooking = await Booking.create({
      rideID: bookingRideID,
      passengerID: bookingPassengerID,
      seatsBooked: bookingTotalSeats,
      totalPrice: bookingTotalPrice,
      rideStatus: bookingRideStatus,
      paymentStatus: bookingPaymentStatus,
    });

    if (!createBooking) {
      return res
        .status(400)
        .json({ message: "Erro in creating the booking in the DB" });
    }

    console.log("Booking created successfully :", body);

    //2- now fetch the ride with the rideID and reduce the seats
    const ride = await Ride.findById(bookingRideID);

    if (!ride) {
      return res
        .status(400)
        .json({ message: "Error in decreasing the seats in the Ride schema" });
    }

    //3- now reduce the seats avialable in the rideSchema  using the rideID      rideAvailableSeats
    const newAvailableSeats = ride.rideAvailableSeats - bookingTotalSeats;

    if (newAvailableSeats <= 0) {
      //return if required seats not available
      return res.status(400).json({ message: "Not enough seats available!" });
    }

    const filter = { _id: bookingRideID };
    const update = {
      rideAvailableSeats: newAvailableSeats,
    };

    const reduceSeats = await Ride.findOneAndUpdate(filter, update, {
      new: true,
    });

    console.log("The ride seats has been reduced", reduceSeats);

    return res.status(200).json({
      message: "Booking saved in the DB successfully",
      bookingDetails: createBooking,
      reduceSeats: reduceSeats,
    });
  } catch (err) {
    console.error("Error in saving the booking to the DB", err.message);
    return res
      .status(400)
      .json({ message: "Erro in creating the booking in the DB" });
  }
}

module.exports = postBooking;
