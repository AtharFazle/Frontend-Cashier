import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function QuantityAdmin() {
  return (
    <div>
      <div className="rounded-3xl shadow-2xl grid grid-cols-3 gap-5 px-5 py-10 border bg-slate-100 hover:border-green-500">
        <div className="flex justify-center items-center">
          <span className="bg-green-200 text-xl rounded-full px-8 py-8">
            <AiOutlineUser fontSize={54} className="text-green-500 " />
          </span>
        </div>
        <div className="col-span-2 h-full">
          <div className="text-neutral-600 text-xl">Admin</div>
          <div className="flex flex-row gap-4 mt-5">
            <h1 className="text-3xl">1</h1>
            <div className="text-md rounded-3xl text-center bg-green-500 w-24 h-auto text-white px-3 py-2 mt-1 mb-4 font-semibold">User</div>
          </div>
        </div>
      </div>
    </div>
  );
}
