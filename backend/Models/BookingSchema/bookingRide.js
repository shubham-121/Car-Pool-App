const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    rideID: {
      //which ride is being booked
      type: mongoose.Schema.Types.ObjectId,
      ref: "rides",
      required: true,
      index: true,
    },

    passengerID: {
      //who booked the ride
      type: mongoose.Schema.Types.ObjectId,
      ref: "signups",
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
