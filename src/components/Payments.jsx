import React from "react";
import TransactionItems from "./TransactionItems";
import { transactionalitems } from "../utils/utils";

const Payments = () => {
  return (
    <div className="mt-8 ml-8 mr-8">
      <section className="flex justify-between">
        <h1 className="text-2xl font-bold">Overview</h1>
        <section className="bg-white w-42 p-2">
          <label htmlFor="" className="text-xl hover:cursor-pointer">
            {" "}
            Last Month{" "}
          </label>
          <select name="LastMonth" id=""></select>
        </section>
      </section>
      <section className="flex justify-between mt-4">
        <section className="border border-gray shadow-md rounded-md bg-white w-[100%] mr-2 p-4">
          <section>
            <h1 className="text-xl">Online orders</h1>
            <h1 className="text-4xl mt-2 font-bold">231</h1>
          </section>
        </section>

        <section className="border border-gray shadow-md bg-white w-[100%] ml-2 p-4">
          <h1 className="text-xl">Amount received</h1>
          <h1 className="text-4xl mt-2 font-bold">Rs 23,92,312.19</h1>
        </section>
      </section>

      <section className="mt-4 ">
        <h1 className="text-2xl font-bold">Transactions | This Month</h1>
        {/* new section */}
        <section className="border border-gray-300 shadow-md rounded-md mt-8">
          <section className="flex justify-between bg-white  p-4">
            <input
              type="text"
              placeholder="🔎 Search by order Id"
              className=" p-2 border border-gray-400 rounded-sm w-[15%] hover:cursor-pointer"
            />
            <section>
              <button className="border border-gray-300 text-xl mr-2 p-2 hover:cursor-pointer">
                Sort ⬆️⬇️
              </button>
              <button className="border border-gray-300 text-xl p-2 hover:cursor-pointer">
                ⤵️
              </button>
            </section>
          </section>

          <section className="flex justify-between mt-4">
            <section className="flex justify-between w-[100%]">
              <h1>Order ID</h1>
              <section className="mr-96">
                <label htmlFor="">Order Date</label>
                <select
                  className="hover:cursor-pointer"
                  name="Orderdate"
                  id=""
                ></select>
              </section>
            </section>
            <section className="flex justify-between w-[100%]">
              <h1 className="ml-96">Order amount</h1>
              <h1 className="mr-4">Transaction fees ⚠️</h1>
            </section>
          </section>
          <section className="bg-white mt-2">
            {transactionalitems.map((items, index) => (
              <TransactionItems key={index} item={items} />
            ))}
          </section>

          <section className="flex justify-center bg-white p-4">
            <button className="mr-4 border border-gray-300 p-2">
              ◀️ Previous
            </button>
            <section>
              <p className="p-2">
                1 ...{" "}
                <button className="bg-blue-600 text-white px-1">10</button> 11
                12 13 14 15 16 17 18
              </p>
            </section>
            <button className="ml-4 border border-gray-300 p-2 ">
              Next ➡️
            </button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Payments;
