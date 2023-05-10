import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Report() {
  return (
    <div>
      <div className="rounded-3xl shadow-2xl grid grid-cols-3 gap-5 px-5 py-10 border bg-slate-100 hover:border-orange-500">
        <div className="flex justify-center items-center">
          <span className="bg-orange-200 text-xl rounded-full px-8 py-8">
            <AiOutlineShoppingCart fontSize={54} className="text-orange-500 " />
          </span>
        </div>
        <div className="col-span-2">
          <div className="text-neutral-600 text-xl ">Sales Hari Ini</div>
          <div className="text-md rounded-full bg-orange-500 w-24 text-white px-4 py-2 mt-1 mb-4 font-semibold">
            2 Sales
          </div>
          <div className="text-2xl font-semibold">Rp.840600</div>
        </div>
      </div>
    </div>
  );
}
