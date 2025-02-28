import package_nav from "../../images/package.jpg";
import setting_nav from "../../images/setting.webp";
import taxi_nav from "../../images/taxi.webp";
import location from "../../images/location.webp";

import info from "../../images/info.png";

import home from "../../images/home.jpg";

//second header ->for navigation
export default function NavigationHeader() {
  return (
    <div className="flex flex-wrap justify-between items-center bg-stone-700 px-16 py-3 ">
      {/* Left Side - Navigation Links */}
      <div className="flex space-x-8">
        {[
          { label: "Home", icon: home },
          { label: "About", icon: info },
          { label: "Our Services", icon: setting_nav },
          { label: "Our Vehicles", icon: taxi_nav },
          { label: "Packages", icon: package_nav },
          { label: "Blog", icon: "" }, // No icon provided
          { label: "Contact", icon: location },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <p className="text-white">{item.label}</p>
            {item.icon && (
              <img
                className="h-6 w-5 rounded-full object-contain"
                src={item.icon}
                alt={item.label}
              />
            )}
          </div>
        ))}
      </div>

      {/* Right Side - Get Started */}
      <div className="border-2 bg-yellow-300 py-3 px-4 rounded-full cursor-pointer">
        <p className="text-black font-semibold">Get Started</p>
      </div>
    </div>
  );
}
