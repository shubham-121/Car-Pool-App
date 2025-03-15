import { useState } from "react";

import faq_car from "../../../../images/faq/faq_car.png";

import faq_clipboard from "../../../../images/faq/faq_clipboard.png";
import faq_setting from "../../../../images/faq/faq_setting.png";
import faq_wrench from "../../../../images/faq/faq_wrench.png";

export default function SectionTwo() {
  const [dropdown, setDropdown] = useState(null);

  const faqs = [
    {
      id: 1,
      title: "Vehicle Selection",
      question: "How do I choose the right vehicle for my needs?",
      answer:
        "Consider factors like passenger capacity, luggage space, fuel efficiency, and intended use. Our vehicle categories are clearly labeled with these specifications, and our team can provide personalized recommendations.",
      image: faq_car,
    },
    {
      id: 2,
      title: "Test Drive",
      question: "Can I test before renting?",
      answer:
        "Yes! We offer test drives for selected vehicles. Contact our support team to schedule a test drive before making your rental decision.",
      image: faq_clipboard,
    },
    {
      id: 3,
      title: "Insurance & Safety",
      question: "Is insurance included in the rental?",
      answer:
        "All our rental packages include basic insurance coverage. Additional coverage options are available upon request for extra safety and peace of mind.",
      image: faq_setting,
    },
    {
      id: 4,
      title: "Pricing & Payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, online payments, and cash at select locations. Flexible payment options are available for your convenience.",
      image: faq_wrench,
    },
  ];

  return (
    <div className="border-custom bg-orange-50">
      <div className="flex flex-col items-center justify-center space-y-5">
        <p className="text-gray-700 font-extrabold text-[25px]  border-3 border-solid bg-amber-100 mt-12 px-2 py-1 rounded-full">
          FAQ
        </p>
        <p className="font-semibold  text-brown text-[25px]">
          Frequently Asked Questions
        </p>
        <p className="text-gray-500  text-[20px]">
          Find answers to common questions about our vehicle rental services{" "}
        </p>
      </div>

      {/* Show 4 cards here */}

      <div className="flex flex-wrap justify-center gap-6 bg-orange-50">
        {faqs.map((faq, indx) => (
          <div key={indx} className="w-full md:w-[48%]">
            {" "}
            {/* Ensures 2 per row */}
            <RenderFAQCards
              id={faq.id}
              title={faq.title}
              question={faq.question}
              answer={faq.answer}
              image={faq.image}
              dropdown={dropdown}
              setDropdown={setDropdown}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
function RenderFAQCards({
  id,
  title,
  question,
  answer,
  image,
  dropdown,
  setDropdown,
}) {
  function handleDropdown(id) {
    setDropdown((prev) => (prev === id ? null : id));
  }

  return (
    <div className=" bg-amber-100 flex flex-col border border-gray-300 rounded-lg p-5 shadow-md  mb-6">
      {/* Title & Icon */}
      <div
        className="flex justify-between items-center cursor-pointer"
        // onClick={() => setDropdown(!dropdown)}
        onClick={() => handleDropdown(id)}
      >
        <div className="flex items-center space-x-3">
          {/* Placeholder Image */}
          <img
            src={image}
            alt="icon"
            className="w-15 h-15 bg-cover rounded-full bg-center"
          />

          <p className="font-semibold text-lg">{title}</p>
        </div>
        <span className="text-gray-600 text-xl">{dropdown ? "▲" : "▼"}</span>
      </div>

      {/* Question & Answer */}
      <div className="mt-3 border-t border-gray-200 pt-3 transition-all duration-300">
        <p
          className="font-medium text-gray-700 cursor-pointer"
          //   onClick={() => setDropdown(!dropdown)}
          onClick={() => handleDropdown(id)}
        >
          {question}
        </p>
        {dropdown === id && (
          <p className="mt-2 mb-3  text-gray-600">{answer}</p>
        )}
      </div>
    </div>
  );
}
