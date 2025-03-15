import { useNavigate } from "react-router";
import q_mark from "../../../../images/faq/qmark.png";

export default function SectionThree() {
  const navigate = useNavigate();
  return (
    <div className="bg-orange-50 min-h-[400px] mt-4 mb-4 flex justify-center ">
      <div className="border mt-2 mb-2 border-gray-300 shadow-2xl bg-amber-50 hover:scale-95 flex flex-col items-center text-center p-6 space-y-5 max-w-lg rounded-lg ">
        {/* Question Mark Image */}
        <img
          className="w-24 h-24 bg-amber-100 rounded-full p-4"
          src={q_mark}
          alt="Question Mark"
        />

        {/* Title */}
        <p className="font-bold font-mono text-black text-2xl">
          Still Have Questions?
        </p>

        {/* Subtitle */}
        <p className="font-medium text-gray-600 text-lg max-w-md">
          Can't find the answer you're looking for? Please chat with our
          friendly team.
        </p>

        {/* Contact Button */}
        <button
          onClick={() => navigate("/contactus")}
          className="text-lg font-semibold text-black bg-yellow-400 px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition-all duration-300"
        >
          🗨️ Contact Support
        </button>
      </div>
    </div>
  );
}
