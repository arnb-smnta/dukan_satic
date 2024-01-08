import React from "react";

const TransactionItems = ({ item }) => {
  return (
    <div className="border-b border-gray-300 mx-2 p-2 flex justify-between ">
      <section className="flex justify-between w-[100%]">
        <h1 className="text-blue-600 text-xl ">#{item.OrderId}</h1>
        <h1 className="mr-[400px]">{item.OrderDate}</h1>
      </section>
      <section className="flex justify-between w-[100%]">
        <h1 className="ml-[410px]">₹ {item.OrderAmount}</h1>
        <h1 className="mr-4">₹ {item.TransactionFees}</h1>
      </section>
    </div>
  );
};

export default TransactionItems;
