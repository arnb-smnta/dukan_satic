import React from "react";
import Menuitems from "./smallercomponents/Menuitems";
import { menuItems } from "../utils/utils";

const SideBarMenu = () => {
  return (
    <div className="border  h-screen col-span-3  bg-slate-700">
      <section className="flex justify-between ml-4 mt-4">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3b46d887950699.5dc7ef8d17625.jpg"
          alt="dokan-logo"
          className="h-10 hover:cursor-pointer"
        />
        <section className="flex justify-between w-[70%]">
          <section>
            <h1 className="text-white hover:cursor-pointer">Dukan</h1>
            <h1 className="text-gray-400 underline hover:cursor-pointer">
              Visit Store
            </h1>
          </section>

          <select
            className="bg-slate-700 text-white mr-3 hover:cursor-pointer"
            name=""
            id=""
          ></select>
        </section>
      </section>
      <section className="mt-[10%]">
        {menuItems.map((item, index) => (
          <Menuitems key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default SideBarMenu;
