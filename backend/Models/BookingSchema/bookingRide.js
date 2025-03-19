const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    rideID: {
      //which ride is being booked(ride details)
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
      required: true,
      index: true,
    },

    passengerID: {
      //who booked the ride(user details)
      type: mongoose.Schema.Types.ObjectId,
      ref: "signup",
      required: true,
      index: true,
    },
    seatsBooked: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    rideStatus: {
      type: String,
      enum: ["Confirmed", "Pending", "Cancelled"],
      required: true,
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending", "Refunded"],
      required: true,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
