import React from "react";

const Navbar = () => {
  return (
    <div className=" flex  items-center flex-row w-[80%] bg-gray-100 rounded-full p-1 h-[80px] absolute top-10 opacity-60">
      <div className="navbar-left flex flex-row gap-4 p-10">
        <div>
          <p className="font-bold text-l via-lime-800 btn">All pages</p>
        </div>
        <p className="font-bold text-l">Works</p>
        <p className="font-bold text-l">Contact</p>
      </div>
      <div className="mx-auto">
        {" "}
        <p className="font-bold text-2xl">Gunjan's</p>{" "}
      </div>
    </div>
  );
};

export default Navbar;
