import Taxi from "../../images/taxi_logo.jpg";
import "../../App.css";

export default function SectionTwo() {
  return (
    <div className="border-custom  flex items-center justify-evenly flex-row cream-color2 ">
      <ColumnOne></ColumnOne>
      <ColumnTwo></ColumnTwo>
    </div>
  );
}

function ColumnOne() {
  return (
    <div className="border-custom mt-4 ">
      <p className="font-bold text-3xl mt-1 mb-1 font-mono">How It Works?</p>
      {/* <br className="underline "></br> */}
      <div className="bg-yellow-400 border-2 mb-6 w-[35%] border-dash  "></div>
      <p className="inline-block max-w-[600px] text-xl font-semibold text-gray-600 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        excepturi minima sit fuga laboriosam? Consequuntur, cum id cumque porro
        molestiae tempore commodi eveniet unde enim, illum numquam officiis.
        Repudiandae soluta dolor, molestias rem tenetur iste eligendi est
        deleniti, ipsum amet vero, tempore hic? Similique rem laboriosam facere
        enim, ratione necessitatibus!
      </p>

      <br></br>
      <button className="border-custom mt-8 text-white px-2 py-2 text-xl font-semibold mb-2 rounded-full bg-gray-400">
        Read More...
      </button>
    </div>
  );
}

function ColumnTwo() {
  return (
    <div className="border-custom ">
      <div className="flex flex-row">
        <button>
          <img
            className="h-20 w-20 rounded-full  mb-8 px-0 py-0 object-fill"
            src={Taxi}
          ></img>
          {/* <div className="flex items-center border-r-2 h-full mx-2 border-gray-800"></div> */}
          {/* <div className="border-2 bg-gray-700"></div> */}
        </button>

        <div className="flex flex-col mt-4 ml-4">
          <p className="font-semibold text-[20px]">Book in just 2 Tabs</p>
          <p className="text-[18px] text-gray-600 text-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            voluptatem!
          </p>
        </div>
      </div>

      <div className="flex flex-row">
        <button>
          <img
            className="h-20 w-20 rounded-full mb-8 px-0 py-0 object-fill"
            src={Taxi}
          ></img>
          {/* <div className="border-2 bg-gray-700"></div> */}
          {/* <div className="border-r-2 h-full mx-2 border-gray-700"></div> */}
        </button>
        <div className="flex flex-col mt-4 ml-4">
          <p className="font-semibold text-[20px]">Get a Driver</p>
          <p className="text-[18px] text-gray-600 text-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            voluptatem!
          </p>
        </div>
      </div>

      <div className="flex flex-row">
        <button>
          <img
            className="h-20 w-20 rounded-full mb-8 px-0 py-0 object-fill"
            src={Taxi}
          ></img>
          {/* <div className="border-2 bg-gray-700"></div> */}
          {/* <div className="border-r-2 flex justify-center items-center h-full mx-2 border-gray-700"></div> */}
        </button>
        <div className="flex flex-col mt-4 ml-4">
          <p className="font-semibold text-[20px]">Track your Driver</p>
          <p className="text-[18px] text-gray-600 text-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            voluptatem!
          </p>
        </div>
      </div>

      <div className="flex flex-row">
        <button>
          <img
            className="h-20 w-20 rounded-full mb-8 px-0 py-0 object-fill"
            src={Taxi}
          ></img>
          {/* <div className="border-2 bg-gray-700"></div> */}
          {/* <div className="border-r-2 h-full mx-2 border-gray-700"></div> */}
        </button>
        <div className="flex flex-col mt-4 ml-4">
          <p className="font-semibold text-[20px]">Arrive Safely</p>
          <p className="text-[18px] text-gray-600 text-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            voluptatem!
          </p>
        </div>
      </div>
    </div>
  );
}
