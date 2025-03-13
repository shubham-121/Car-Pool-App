import logo from "../../images/car_pool_logo.webp";
import search from "../../images/search_logo.jpg";
import taxi from "../../images/taxi_logo.jpg";
import driver from "../../images/driver_logo.png";
import user from "../../images/user_logo.png";
import { useNavigate } from "react-router";

// first header
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
      <div className="flex flex-row items-center gap-4">
        <img className="h-8 w-8 rounded-full " src={user}></img>
        <p
          className="text-[16px] font-semibold"
          onClick={() => navigate("/login")}
        >
          Login
        </p>

        <p
          className="text-[16px] font-semibold text-center"
          onClick={() => navigate("/profile")}
        >
          Profile
        </p>

        <p
          className="text-[16px] font-semibold text-center"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
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

// export default function Header() {
//   return (
//     <div className="flex flex-wrap place-items-center h-screen">
//       <section className="relative mx-auto">
//         {/* Navbar */}
//         <nav className="flex justify-between bg-gray-900 text-white w-screen">
//           <div className="px-5 xl:px-12 py-6 flex w-full items-center">
//             <a className="text-3xl font-bold font-heading" href="#">
//               {/* <img className="h-9" src="logo.png" alt="logo" /> */}
//               Logo Here.
//             </a>
//             {/* Nav Links */}
//             <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
//               <li>
//                 <a className="hover:text-gray-200" href="#">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-200" href="#">
//                   Category
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-200" href="#">
//                   Collections
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-200" href="#">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//             {/* Header Icons */}
//             <div className="hidden xl:flex items-center space-x-5">
//               <a className="hover:text-gray-200" href="#">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//               </a>
//               <a className="flex items-center hover:text-gray-200" href="#">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//                 <span className="flex absolute -mt-5 ml-4">
//                   <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
//                 </span>
//               </a>
//               {/* Sign In / Register */}
//               <a className="flex items-center hover:text-gray-200" href="#">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           {/* Responsive navbar */}
//           <a className="xl:hidden flex mr-6 items-center" href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 hover:text-gray-200"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//             <span className="flex absolute -mt-5 ml-4">
//               <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
//             </span>
//           </a>
//           <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 hover:text-gray-200"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </a>
//         </nav>
//       </section>
//       {/* Twitter Follow Button */}
//       <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
//         <div>
//           <a
//             title="Follow me on Twitter"
//             href="https://www.twitter.com/asad_codes"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
//           >
//             <img
//               className="object-cover object-center w-full h-full rounded-full"
//               src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
//               alt="Twitter Logo"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
