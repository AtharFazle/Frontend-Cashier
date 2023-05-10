import React from 'react'
import {TfiTruck} from 'react-icons/tfi'

export default function QuantityProduct() {
  return (
    <div>
        <div className="rounded-3xl shadow-2xl grid grid-cols-3 gap-5 px-5 py-10 bg-slate-100 border hover:border-red-500">
        <div className="flex justify-center items-center">
          <span className="bg-red-200 text-xl rounded-full px-8 py-8">
            <TfiTruck fontSize={54} className="text-red-500 " />
          </span>
        </div>
        <div className="col-span-2 h-full">
          <div className="text-neutral-600 text-xl">Total Produk</div>
          <div className="flex flex-row gap-4 mt-5">
          <div className="text-md rounded-3xl text-center bg-blue-500 w-36 h-auto text-white px-3 py-2 mt-1 mb-4 font-semibold">13 Macam</div>
            <div className="text-md rounded-3xl text-center bg-red-500 w-36 h-auto text-white px-3 py-2 mt-1 mb-4 font-semibold">240 Barang</div>
          </div>
        </div>
      </div>
    </div>
  )
}
