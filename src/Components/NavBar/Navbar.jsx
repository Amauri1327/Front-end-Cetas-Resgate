import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white 
    duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary py-2">
        <div className="container flex justify-center items-center">
          <div>
            <a
              href="#"
              className="font-semibold text-3xl sm:text-3xl flex gap-2"
            >
              <img className="w-10 rounded-lg" src={logo} alt="Logo" />
              Cetas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
