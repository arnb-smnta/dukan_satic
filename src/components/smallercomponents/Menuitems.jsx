import React from "react";
import { Link } from "react-router-dom";

const Menuitems = ({ item }) => {
  return (
    <Link to={`/${item.name}`}>
      <div className="hover:cursor-pointer flex w-[80%] mt-4 ml-6 ">
        {/*<img
        className="h-[10%] w-[10%]"
        src={item.pic}
        alt={`${item.name} pic`}
  />*/}
        <h1>{`${item.pic}`}</h1>
        <p className="text-white ml-4">{item.name}</p>
      </div>
    </Link>
  );
};

export default Menuitems;
