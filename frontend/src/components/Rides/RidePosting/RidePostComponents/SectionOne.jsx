import pattern from "../../../../images/rides/pattern.jpg";

export default function SectionOne() {
  return (
    <div
      className="mt-2 border-custom flex flex-col items-center text-center px-4 space-y-8 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <p className="font-semibold text-gray-400">🏠 Home / Book A Ride</p>
      <h2 className="font-serif font-semibold text-3xl text-[2.5rem] text-black">
        Book A Ride
      </h2>
      <p className="text-gray-400 text-lg max-w-md opacity-95">
        Explore our range of vehicles and services tailored to meet your
        logistics needs.
      </p>
      <button className="mt-3 mb-4 bg-yellow-400 px-4 py-2 rounded-md text-black font-medium hover:scale-110 hover:bg-stone-400">
        Get Started →
      </button>
    </div>
  );
}
