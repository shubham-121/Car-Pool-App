import { useNavigate, useParams } from "react-router";
import fetchRequest from "../../Utils/fetchRequest";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ParentHeader from "../../Utils/ParentHeader";
import SectionOne from "../RidePosting/RidePostComponents/SectionOne";
import Footer from "../../Homepage/Footer";

//show all rides from the DB to the user
export default function ShowRides() {
  const params = useParams();
  const { source, destination } = params;
  const { isAuthenticated, accessToken, authUserData } = useSelector(
    (store) => store.authentication
  );

  const [rides, setRides] = useState([]);

  useEffect(() => {
    async function getRides() {
      try {
        const reqPath = `/api/rides/get/${source}/${destination}/:date?`;

        const allRides = await fetchRequest(reqPath, "GET", {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        });

        if (allRides) {
          console.log(
            "The rides for the source and destination are:",
            allRides
          );
          setRides(allRides.searchedRide);
        } else {
          console.error(
            "Error in getting rides for this source and destination"
          );
        }
      } catch (err) {
        console.error("Error in fetching the data from the DB", err.message);
      }
    }
    getRides();
  }, [accessToken, source, destination]);

  return (
    <div className="border-custom p-6">
      <ParentHeader />
      <SectionOne />

      <p className="text-center font-semibold text-xl mb-4">
        {rides.length} Rides found from: {source} to {destination}
      </p>

      {/* 🌟 FLEXBOX CONTAINER (ROW) */}
      <div className="flex flex-wrap justify-center gap-6">
        {rides.length > 0 ? (
          rides.map((ride, indx) => <RenderCards key={indx} ride={ride} />)
        ) : (
          <p className="text-gray-500">No rides available 😞</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
function RenderCards({ ride }) {
  console.log(ride);
  const { rideSource, rideDestination, rideDate, _id: rideID } = ride;
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/ride/${rideID}`); // Navigate to ride details page
    // navigate(
    //   `/getrides/${rideSource}&${rideDestination}&${rideDate}/${rideID}`
    // );
  }

  function formatDate(isostring) {
    const date = new Date(isostring);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="card bg-base-100 w-[280px] shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-all">
      <figure className="px-4 pt-4">
        <img
          src="https://source.unsplash.com/300x200/?car,road"
          alt="Ride"
          className="rounded-lg w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-bold">
          {rideSource} ➝ {rideDestination}
        </h2>
        <p className="text-gray-500">📅 {formatDate(rideDate)}</p>

        <div className="card-actions flex flex-col w-full">
          <button
            className="btn border-custom bg-blue-500 text-white w-full rounded-md mt-2 py-2 hover:scale-95 hover:bg-blue-600 transition-all"
            onClick={handleCardClick}
          >
            Show Details &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
