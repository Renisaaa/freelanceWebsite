import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center flex-row w-[400px] bg-gray-100 rounded-full p-5 h-10">
      <div className="navbar-left flex flex-row gap-4">
        <p>All pages</p>
        <p>Works</p>
        <p>Contact</p>
      </div>
      <div className="navbar-center">
        {" "}
        <p>Gunjan's</p>{" "}
      </div>
    </div>
  );
};

export default Navbar;
