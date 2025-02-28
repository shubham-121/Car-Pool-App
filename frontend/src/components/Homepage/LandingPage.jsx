import logo from "../../images/car_pool_logo.webp";
import search from "../../images/search_logo.jpg";
import taxi from "../../images/taxi_logo.jpg";
import driver from "../../images/driver_logo.png";
import user from "../../images/user_logo.png";
import package_nav from "../../images/package.jpg";
import setting_nav from "../../images/setting.webp";
import taxi_nav from "../../images/taxi.webp";
import location from "../../images/location.webp";

import info from "../../images/info.png";

import home from "../../images/home.jpg";
import MidSection from "./MidSection";

import Header from "./Header";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <NavigationHeader></NavigationHeader>
      <MidSection></MidSection>
      <Footer></Footer>
    </div>
  );
}

// //first header
// function Header() {
//   return (
//     <div className="flex items-center justify-around bg-white ">
//       <Logo></Logo>
//       <SearchBar></SearchBar>
//       <Options></Options>
//     </div>
//   );
// }

// function Logo() {
//   return (
//     <div>
//       <img
//         src={logo}
//         className="min-h-20 min-w-20 h-25 border-black border-3 object-fill w-25 rounded-4xl"
//       ></img>
//     </div>
//   );
// }

// function SearchBar() {
//   return (
//     <div className="flex  ">
//       <input
//         type="text"
//         placeholder="Enter your location"
//         className="flex-grow  rounded-4xl border-solid border-2 border-black px-10  "
//       ></input>
//       <button className="border-solid border-2 border-black rounded-full">
//         <img
//           className="max-h-10 max-w-10 object-cover rounded-full "
//           src={search}
//         ></img>
//       </button>
//     </div>
//   );
// }

// function Options() {
//   return (
//     <div className="flex flex-wrap content-center items-center justify-center gap-x-5  ">
//       <div className="flex flex-row items-center">
//         <img className="h-8 w-8 rounded-full " src={user}></img>
//         <p className="text-[16px] font-semibold">Dashboard</p>
//       </div>
//       <div className="flex flex-row items-center">
//         <img className="h-8 w-8 rounded-full" src={taxi}></img>{" "}
//         <p className="text-[16px] font-semibold">Look a ride?</p>
//       </div>
//       <div className="flex flex-row items-center">
//         <img className="h-8 w-8 rounded-full" src={driver}></img>
//         <p className="text-[16px] font-semibold">Post a ride?</p>
//       </div>
//     </div>
//   );
// }

// //second header ->for navigation
// function NavigationHeader() {
//   return (
//     <div className="flex flex-wrap justify-between items-center bg-stone-700 px-16 py-3 ">
//       {/* Left Side - Navigation Links */}
//       <div className="flex space-x-8">
//         {[
//           { label: "Home", icon: home },
//           { label: "About", icon: info },
//           { label: "Our Services", icon: setting_nav },
//           { label: "Our Vehicles", icon: taxi_nav },
//           { label: "Packages", icon: package_nav },
//           { label: "Blog", icon: "" }, // No icon provided
//           { label: "Contact", icon: location },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center space-x-2 cursor-pointer"
//           >
//             <p className="text-white">{item.label}</p>
//             {item.icon && (
//               <img
//                 className="h-6 w-5 rounded-full object-contain"
//                 src={item.icon}
//                 alt={item.label}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Right Side - Get Started */}
//       <div className="border-2 bg-yellow-300 py-3 px-4 rounded-full cursor-pointer">
//         <p className="text-black font-semibold">Get Started</p>
//       </div>
//     </div>
//   );
// }
