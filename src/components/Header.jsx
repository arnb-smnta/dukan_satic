import React from "react";

const Header = () => {
  return (
    <div className="border border-gray-200 shadow-md col-span-9 h-[5%] p-2 bg-white flex justify-between">
      <div className="flex">
        {" "}
        <h1 className="ml-4 my-2  font-bold hover:cursor-pointer">Payments</h1>
        <h3 className="ml-2 my-2 hover:cursor-pointer">❔ How it works</h3>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Features tutorials"
        className="border border-black rounded-3xl w-[30%] p-4 hover:cursor-pointer"
      />
      <div className="flex ">
        <img
          className="h-[70%] mr-4 my-2 hover:cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3843/3843455.png"
          alt="chat icon"
        />
        <img
          className="h-[70%] mr-6 my-2 hover:cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
          alt="drop down icon"
        />
      </div>
    </div>
  );
};

export default Header;
