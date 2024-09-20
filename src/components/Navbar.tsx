import React from "react";

const Navbar = () => {
  return (
    <div className=" flex  items-center justify-between  w-[80%] bg-gray-100 rounded-full p-1 h-[80px] fixed top-10 opacity-60 z-[1000] shadow-lg">
      <div className="navbar-left flex flex-1  gap-4 p-10">
        <p className="font-bold text-l text-teal-950 hover:text-teal-700">
          All pages
        </p>
        <p className="font-bold text-l text-teal-950 hover:text-teal-700">
          Works
        </p>
        <p className="font-bold text-l text-teal-950 hover:text-teal-700">
          Contact
        </p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-bold text-3xl text-teal-900">{"Gunjan's"}</p>
      </div>
      <div className="flex-1">{""}</div>
    </div>
  );
};

export default Navbar;
