import logo from "../../images/car_pool_logo.webp";
import search from "../../images/search_logo.jpg";
import taxi from "../../images/taxi_logo.jpg";
import driver from "../../images/driver_logo.png";
import user from "../../images/user_logo.png";
import { useNavigate } from "react-router";

//first header
export default function Header() {
  return (
    <div className="flex items-center justify-around bg-white ">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <Options></Options>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <img
        src={logo}
        className="min-h-20 min-w-20 h-25 border-black border-3 object-fill w-25 rounded-4xl"
      ></img>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex  ">
      <input
        type="text"
        placeholder="Enter your location"
        className="flex-grow  rounded-4xl border-solid border-2 border-black px-10  "
      ></input>
      <button className="border-solid border-2 border-black rounded-full">
        <img
          className="max-h-10 max-w-10 object-cover rounded-full "
          src={search}
        ></img>
      </button>
    </div>
  );
}

function Options() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap content-center items-center justify-center gap-x-5  ">
      <div className="flex flex-row items-center">
        <img className="h-8 w-8 rounded-full " src={user}></img>
        <p
          className="text-[16px] font-semibold"
          onClick={() => navigate("/login")}
        >
          Dashboard / Login -
        </p>

        <p
          className="text-[16px] font-semibold text-center"
          onClick={() => navigate("/profile")}
        >
          Profile
        </p>
      </div>
      <div className="flex flex-row items-center">
        <img className="h-8 w-8 rounded-full" src={taxi}></img>{" "}
        <p className="text-[16px] font-semibold">Look a ride?</p>
      </div>
      <div className="flex flex-row items-center">
        <img className="h-8 w-8 rounded-full" src={driver}></img>
        <p className="text-[16px] font-semibold">Post a ride?</p>
      </div>
    </div>
  );
}
