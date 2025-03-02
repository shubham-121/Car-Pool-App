import Traffic from "../../images/traffic.mp4";

export default function SectionOne() {
  return (
    <div className="mt-2 border-custom relative mb-6">
      <video
        src={Traffic}
        muted
        // autoPlay
        // loop
        className="w-full object-cover h-[1050px] md:h-[600px] lg:h-[700px] xl:h-[800px] blur-[4px] filter"
      ></video>
      <div className="absolute w-full h-full top-0 border-custom mt-1 mb-1 mr-1 ml-1">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 px-4">
          {/* content overlay */}
          <div className="w-full lg:w-[30%] bg-black p-4 rounded-lg">
            <p className="h-10 text-[32px] lg:text-[45px] inline text-white">
              Earn. Connect.{" "}
            </p>
            <br />
            <p className="h-10 text-[32px] lg:text-[45px] text-yellow-300 inline text-white">
              Contribute To Saving
            </p>
            <br />
            <p className="h-10 text-[32px] lg:text-[45px] inline text-white mt-2">
              The Environment
            </p>
            <p className="font-bold italic text-[16px] lg:text-[20px] text-white mt-2">
              Partner with us to drive your own livelihood and more. Partner
              with us to drive your own livelihood and more.
            </p>
            <div className="flex justify-evenly items-center flex-wrap gap-4 mt-4">
              <button className="text-white bg-gray-900 px-6 py-3 rounded-2xl text-xl hover:scale-105">
                Post A Ride
              </button>
              <button className="text-white bg-gray-900 px-6 py-3 rounded-2xl text-xl hover:scale-105">
                Look For Ride
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[30%] bg-white p-4 rounded-lg mt-4 lg:mt-0">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="flex flex-col bg-white rounded-[10px] p-4 shadow-lg">
      <p className="font-semibold text-2xl text-center text-yellow-500 mb-2">
        Take A Ride
      </p>
      <p className="font-medium text-lg text-center text-gray-700 mb-4">
        Save Environment Today. Save Money.
      </p>
      <p className="text-center text-gray-600 mb-2">
        By sharing rides, you can lower transportation expenses, decrease your
        carbon footprint, and meet new people.
      </p>

      {/* Form below */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <input
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            type="text"
            placeholder="Last Name"
          />
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
        <div className="flex flex-row justify-center items-center gap-2 mt-4">
          <input
            className="border-custom px-2 py-2 rounded-[10px]"
            type="checkbox"
          />
          <span className="text-[16px] lg:text-[20px] text-yellow-700">
            I agree to the Terms and Conditions and Privacy Policy
          </span>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button className="border-custom rounded-full bg-yellow-300 px-6 py-3 mb-4 text-lg">
            Sign Up To Use
          </button>
        </div>
      </div>
    </div>
  );
}
