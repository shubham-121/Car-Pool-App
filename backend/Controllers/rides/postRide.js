const Ride = require("../../Models/RidesSchema/postRide.js");
const UserSignup = require("../../Models/UserSchema/userSignup.js");

async function postRide(req, res) {
  const body = req.body;

  //extract form fields from postRide form
  const {
    source,
    destination,
    date,
    time,
    availableSeats,
    seatPrice,
    vehicleType,
    note,
    paymentMethod,
  } = req.body;

  console.log("Post ride body:", body);

  //prettier-ignore
  if (!source || !destination || !date ||!time ||!availableSeats||!seatPrice||!vehicleType||!note ||!paymentMethod) {
    return res.status(400).json({message:"Missing fields, enter all field data"})
  }

  //1- extract the logged user who posted this ride using jwt verify
  const { email } = req.user;

  //2- use this email to query the signup collection (Db), find the _id associated with this user email
  const loggedUser = await UserSignup.findOne({ userEmail: email });
  const { _id: loggedUserId } = loggedUser;

  if (!loggedUser) {
    return res.status(401).json({
      message: "Cannot find the current user in the DB, try again",
      ride: saveRide,
    });
  }

  console.log("Logged user details: ", req.user);
  console.log("The logged user found in the Db", loggedUser);
  console.log("The logged user _id", loggedUserId);

  //3- then use the _id and create  the new Ride

  try {
    const saveRide = await Ride.create({
      driver: loggedUserId,
      rideSource: source,
      rideDestination: destination,
      rideDate: date,
      rideTime: time,
      rideAvailableSeats: availableSeats,
      ridePricePerSeat: seatPrice,
      rideVehicleType: vehicleType,
      rideNote: note,
      ridePaymentMethod: paymentMethod,
    });

    if (!saveRide) {
      return res
        .status(400)
        .json({ message: "Problem in creating the ride", ride: saveRide });
    }

    console.log("New user created successfully in the DB:", saveRide);

    return res.status(200).json({
      message: "Successfully posted the ride",
      ride: saveRide,
    });
  } catch (err) {
    console.error("Error in posting ride:", err.message);
    return res.status(200).json({
      message: "Error in posting ride",
    });
  }
}

module.exports = postRide;

//next task- create a getRide component in Frontend, for showing all the rides
