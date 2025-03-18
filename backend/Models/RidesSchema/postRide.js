const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    driver: {
      //logged user id refernce
      type: mongoose.Schema.Types.ObjectId,
      ref: "signups",
      required: true,
    },
    rideSource: {
      type: String,
      required: true,
    },
    rideDestination: {
      type: String,
      required: true,
    },
    rideDate: {
      type: Date,
      required: true,
    },
    rideTime: {
      type: String,
      required: true,
    },
    rideAvailableSeats: {
      type: Number,
      required: true,
      min: 1,
    },
    ridePricePerSeat: {
      type: Number,
      required: true,
      min: 0,
    },
    rideVehicleType: {
      type: String,
      required: true,
      //   enum: ["Scooter", "HatchBack", "SUV", "Sedan", "Auto"],
    },
    rideNote: {
      type: String,
      trim: true,
    },
    ridePaymentMethod: {
      type: String,
      required: true,
      //   enum: ["Cash", "Net Banking", "Debit Card"],
    },
  },
  { timestamps: true }
);

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
