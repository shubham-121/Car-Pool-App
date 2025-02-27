import Traffic from "../../images/traffic.mp4";

export default function MidSection() {
  return (
    <div>
      <MiddleContent></MiddleContent>
    </div>
  );
}

// function MiddleContent() {
//   return (
//     <div className=" bg-gray-400 border-custom h-full   flex flex-row justify-evenly items-center">
//       {/* Left section with background video  */}
//       <div className="relative  ">
//         <video autoPlay loop muted className="object-cover filter blur-[4px]">
//           <source src={Traffic} type="video/mp4"></source>
//         </video>
//       </div>

//   {/* content overlay */}
//   <div className="w-[30%]  ">
//     <p className=" h-10 text-3xl text-center border-custom bg-black  text-white">
//       Earn. Connect.{" "}
//     </p>
//     <br></br>
//     <p className="h-10 text-3xl text-center border-custom bg-black  text-white">
//       Contribute To Saving
//     </p>
//     <p className="h-10 text-3xl text-center border-custom bg-black  text-white mt-2">
//       The Environment
//     </p>

//     <p className="border-custom   text-white mt-2">
//       Partner with us to drive your own livelihood and more.Partner with us
//       to drive your own livelihood and more.
//     </p>

//     <div className="flex justify-center items-center flex-row mt-2 ">
//       <button className="border-custom  gap-4">Post A Ride</button>
//       <button className="border-custom  gap-4">Look For Ride</button>
//     </div>
//   </div>
//   <div>
//     <SignUpForm></SignUpForm>
//   </div>
//     </div>
//   );
// }

function MiddleContent() {
  return (
    <div className=" mt-2  border-custom relative">
      <video
        src={Traffic}
        autoPlay
        muted
        loop
        className="w-full object-cover h-[480px] blur-[4px] filter "
      ></video>
      <div className="absolute w-full h-full top-0 border-custom mt-1 mb-1 mr-1 ml-1">
        <div className="flex items-center justify-center  border-custom flex-row gap-3">
          {/* content overlay */}
          <div className="w-[30%] border-custom mt-3 mb-3 mr-3 ml-3  ">
            <p className=" h-10 text-3xl text-center border-custom bg-black  text-white">
              Earn. Connect.{" "}
            </p>
            <br></br>
            <p className="h-10 text-3xl text-center border-custom bg-black  text-white">
              Contribute To Saving
            </p>
            <p className="h-10 text-3xl text-center border-custom bg-black  text-white mt-2">
              The Environment
            </p>

            <p className="border-custom   text-white mt-2">
              Partner with us to drive your own livelihood and more.Partner with
              us to drive your own livelihood and more.
            </p>

            <div className="flex justify-center items-center flex-row mt-2 ">
              <button className="border-custom  gap-4">Post A Ride</button>
              <button className="border-custom  gap-4">Look For Ride</button>
            </div>
          </div>
          <div className="mt-1 mb-1 mr-1 ml-1 border-custom">
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="flex border-custom flex-col bg-white rounded-[10px]">
      <p className="font-semibold text-2xl text-center text-yellow-500 mb-2">
        Take A Ride
      </p>
      <p className="font-medium text-lg text-center text-gray-700 mb-4">
        Save Environment Today. Save Money.
      </p>
      <p className="text-center text-gray-600 ">
        By sharing rides, you can lower transportation expenses, decrease your
      </p>
      <p className="text-center text-gray-600 ">
        carbon footprint, and meet new people.
      </p>

      {/* Form belwo */}
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="flex flex-row justify-evenly w-full">
          <input
            className="border border-gray-300 px-4 py-2 rounded-md w-full    ml-4  mr-2"
            type="text"
            placeholder="First Name"
          ></input>
          <input
            className="border border-gray-300 px-4 py-2 rounded-md w-full    ml-4 mr-2"
            type="text"
            placeholder="Last  Name"
          ></input>
        </div>
        <input
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
          type="tel"
          placeholder="Phone Number"
        />
        <input
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
          type="text"
          placeholder="City"
        />
        <div className="flex flex-row justify-center items-center">
          <input
            className="border-custom px-2 py-2  rounded-[10px]"
            type="checkbox"
          ></input>
          <span className="text-[20px] text-yellow-700">
            I agree to the Terms and Conditions and Privacy Policy
          </span>
        </div>
        <div className="flex justify-center items-center ">
          <button className="border-custom rounded-full bg-yellow-300 px-2 py-2 mb-4">
            Sign Up To Use
          </button>
        </div>
      </div>
    </div>
  );
}
