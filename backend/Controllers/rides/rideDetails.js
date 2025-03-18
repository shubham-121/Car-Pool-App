//route for showing ride detials
const UserSignup = require("../../Models/UserSchema/userSignup.js");
const Ride = require("../../Models/RidesSchema/postRide.js");
async function rideDetails(req, res) {
  const { id: rideID } = req.params;
  console.log("Ride id:", rideID);

  try {
    //fetch ride info
    const rideInfo = await Ride.findOne({ _id: rideID });
    const userInfo = await UserSignup.findOne({ _id: rideInfo.driver });

    //fetch the user info also here

    if (rideInfo && userInfo) {
      console.log("Ride info from backend", rideInfo, userInfo);

      return res.status(200).json({
        message: "Ride details are",
        rideID: rideID,
        rideInfo: rideInfo,
        userInfo: userInfo,
      });
    } else {
      console.error("Error in fetching the clicked ride details");
      return res.status(400).json({
        message: "Not able to find the ride",
        rideID: rideID,
        rideInfo: rideInfo,
        userInfo: userInfo,
      });
    }
  } catch (err) {
    console.error("Error in fetching the clicked ride details", err.message);
    return res.status(400).json({
      message: "Not able to find the ride",
      rideID: rideID,
    });
  }

  //   return res.status(200).json({ message: "Ride details are", rideID: rideID });
}

module.exports = rideDetails;
