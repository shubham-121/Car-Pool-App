//route for showing ride detials
const UserSignup = require("../../Models/UserSchema/userSignup.js");
const Ride = require("../../Models/RidesSchema/postRide.js");
async function rideDetails(req, res) {
  const { id: rideID } = req.params;

  const body = req.user;
  const { email } = body;
  console.log("Ride id:", rideID);

  // use email to get the user._id, then query the booking model with the user._id

  try {
    //1- get the logged user first , return both user_id and ride_id so that they can be referred in the booking table
    const currUser = await UserSignup.findOne({ userEmail: email }); //logged user
    if (!currUser) {
      return res.status(400).json({ message: "Error in finding the user" });
    }
    const { _id: currUserID } = currUser;

    ////2- get the ride info
    const rideInfo = await Ride.findOne({ _id: rideID });
    // const currUser = await UserSignup.findOne({ _id: rideInfo.driver }); // this return the host user

    //3- get the host  driver info also
    const hostInfo = await UserSignup.findOne({ _id: rideInfo.driver });

    if (rideInfo && currUser && hostInfo) {
      console.log("Ride info from backend", rideInfo, currUser, hostInfo);

      return res.status(200).json({
        message: "Ride details are",
        rideID: rideID,
        rideInfo: rideInfo,
        currUser: currUser,
        hostInfo: hostInfo,
      });
    } else {
      console.error("Error in fetching the clicked ride details");
      return res.status(400).json({
        message: "Not able to find the ride",
        rideID: rideID,
        rideInfo: rideInfo,
        currUser: currUser,
        hostInfo: hostInfo,
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
