import carpool from "../../images/carpool.jpg";
import checkmark from "../../images/checkmark.svg";
import vertical_line from "../../images/vertical-line.webp";
import "../../App.css";

export default function SectionThird() {
  return (
    <div className="flex flex-col md:flex-row mt-8 px-4 md:px-16 cream-color">
      <ColumnOne />
      <ColumnTwo />
    </div>
  );
}

function ColumnOne() {
  return (
    <div className="flex flex-col justify-start md:w-1/2 mb-8 md:mb-0 cream-color">
      <p className="font-bold text-3xl text-gray-800 mb-2">About Car Pooling</p>
      <div className="border-2 bg-yellow-400 border-dotted w-20 mb-6 "></div>

      <div className="flex flex-col space-y-4">
        <p className="text-gray-700 text-xl">
          Carpooling is the practice of sharing a ride with others who have
          similar destinations or routes. It helps reduce traffic congestion,
          lower transportation costs, and decrease carbon emissions by reducing
          the number of vehicles on the road. Carpooling not only saves money on
          fuel and parking but also promotes a more eco-friendly and sustainable
          lifestyle.
        </p>

        <p className="text-gray-700 text-xl">
          It fosters social connections, making commutes more enjoyable.
          Overall, carpooling is an efficient, cost-effective, and
          environmentally conscious transportation option for individuals and
          communities.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mt-6 space-y-4 md:space-y-0 md:space-x-4">
        <p className="text-gray-700 text-xl flex flex-row">
          <img src={checkmark} className="w- h-10"></img> Carpooling reduces
          traffic, saving time and reducing stress.
        </p>
        <p className="text-gray-700 text-xl flex flex-row">
          <img src={checkmark} className="w- h-10"></img> It decreases
          environmental impact by cutting down carbon emissions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <p className="text-gray-700 text-xl flex flex-row">
          <img src={checkmark} className="w- h-10"></img> Carpooling saves money
          on fuel, parking, and maintenance costs.
        </p>
        <p className="text-gray-700 text-xl flex flex-row">
          <img src={checkmark} className="w- h-10"></img> Fosters social
          connections, turning commutes into enjoyable shared experiences.
        </p>
      </div>

      <div className="mt-6">
        <button className="border-2 bg-gray-500 px-6 py-3 rounded-3xl text-white hover:bg-gray-600 transition duration-300">
          <p className="font-semibold text-xl">Read More ...</p>
        </button>
      </div>
    </div>
  );
}

function ColumnTwo() {
  return (
    <div className=" md:w-1/2">
      <img
        className="w-full h-auto rounded-lg shadow-2xl border-gray-100 border-2"
        src={carpool}
        alt="Carpooling"
      />
    </div>
  );
}
