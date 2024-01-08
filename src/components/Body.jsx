import React from "react";
import Header from "./Header";
import SideBarMenu from "./SideBarMenu";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-slate-100 flex justify-between">
      <div className="w-[10%]">
        <SideBarMenu className="" />
      </div>
      <div className="w-[90%]">
        <Header className="" />
        <Outlet className="" />
      </div>
    </div>
  );
};

export default Body;
