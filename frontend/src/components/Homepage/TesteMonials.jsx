import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import passport from "../../images/passport.webp";
import chris from "../../images/users/chris.jpg";
import david from "../../images/users/david.jpg";
import emily from "../../images/users/emily.jpg";
import john from "../../images/users/john.jpg";
import michael from "../../images/users/michael.jpg";
import olivia from "../../images/users/olivia.jpg";
import jennifer from "../../images/users/jennife.webp";
import sarah from "../../images/users/sarah.webp";

export default function TesteMonials() {
  return (
    <div>
      <p className="text-3xl hover:text-gray-500 font-bold text-center text-gray-800 mt-2  uppercase tracking-wide">
        Our Testimonials
      </p>
      <div className="card-background border-custom mt-4  flex flex-col items-center ">
        <RenderCards />
      </div>
    </div>
  );
}

function RenderCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 mb-10">
      <Slider {...settings} className="gap-x-6">
        {" "}
        {/* Added gap-x-6 for horizontal spacing */}
        {userReview.map((user, idx) => (
          <Cards key={idx} {...user} />
        ))}
      </Slider>
    </div>
  );
}

function Cards({ review, image, role, name }) {
  return (
    <div className="flex justify-center opacity-85">
      <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-lg max-w-[350px] min-h-[350px] mx-2">
        {" "}
        {/* Added mx-2 for margin between cards */}
        <p className="text-center italic text-gray-700 font-semibold mb-4">
          {review}
        </p>
        <div className="flex flex-col items-center">
          <img
            src={image}
            className="h-16 w-16 opacity-100 rounded-full object-cover mb-3"
          />
          <div className="text-center">
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "red",
        border: "2px solid black",
        height: "37px",
        width: "30px",
        position: "absolute",
        borderRadius: "30px",
        backgroundColor: "gray",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "red",
        border: "2px solid black",
        height: "37px",
        width: "30px",
        position: "absolute",
        borderRadius: "30px",
        backgroundColor: "gray",
      }}
      onClick={onClick}
    ></div>
  );
}

const userReview = [
  {
    review:
      "Using this carpool platform has been a game-changer for me! It's not only environmentally friendly but also a great way to meet new people while saving money. I love how easy it is to find rides that match my schedule.",
    name: "John Smith",
    role: "Commuter",
    image: john, // Optional
  },
  {
    review:
      "Been using this carpool website for a few weeks now, and I’m so impressed by the seamless experience. The app is easy to navigate, and the drivers are always friendly. I feel safer and more connected with the community.",
    name: "Sarah Johnson",
    role: "Frequent Rider",
    image: sarah, // Optional
  },
  {
    review:
      "As someone who commutes long distances daily, this carpool service has saved me so much time and money. I can’t imagine going back to driving alone! Plus, the savings on fuel are a huge bonus.",
    name: "Michael Brown",
    role: "Daily Commuter",
    image: michael, // Optional
  },
  {
    review:
      "The best part about this carpool platform is the flexibility. I can choose rides based on my preferences and make new friends while reducing my carbon footprint. It’s a win-win!",
    name: "Emily Davis",
    role: "Eco-Conscious Rider",
    image: emily, // Optional
  },
  {
    review:
      "This is the most convenient and eco-friendly way to commute! I can easily find a carpool that matches my work hours and share the ride with great people. Highly recommend it!",
    name: "David Clark",
    role: "Part-Time Commuter",
    image: david, // Optional
  },
  {
    review:
      "I’m so glad I discovered this platform. It’s not only helping me reduce my carbon footprint, but I’ve also met some amazing people along the way. This service is a game-changer for daily commuters!",
    name: "Olivia Wilson",
    role: "Weekend Traveler",
    image: olivia, // Optional
  },
  {
    review:
      "As a regular carpooler, I’ve had nothing but positive experiences with this platform. It’s incredibly user-friendly, and I feel confident knowing my driver is vetted. It’s made my daily commute stress-free!",
    name: "Chris Adams",
    role: "Regular Rider",
    image: chris, // Optional
  },
  {
    review:
      "I have been using this platform for over a year now, and I couldn’t be happier! It’s easy to use, and the people I’ve met through the carpool system have been amazing. It's made commuting so much more enjoyable.",
    name: "Jennifer Lee",
    role: "Occasional Traveler",
    image: jennifer, // Optional
  },
];
