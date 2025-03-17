const Ride = require("../../Models/RidesSchema/postRide.js");
const UserSignup = require("../../Models/UserSchema/userSignup.js");

async function getRide(req, res) {
  const { source, destination, date } = req.params;

  //search DB using these params

  try {
    const searchedRide = await Ride.find({
      rideSource: source,
      rideDestination: destination,
    });

    if (!searchedRide) {
      return res
        .status(404)
        .json({ message: "Error in finding the Rides from the Db" });
    }

    console.log("The query params:", source, destination, date);
    console.log("sucessfully found the ride", searchedRide);

    return res
      .status(200)
      .json({ message: "Found the rides", searchedRide: searchedRide });
  } catch (err) {}
}

module.exports = getRide;
