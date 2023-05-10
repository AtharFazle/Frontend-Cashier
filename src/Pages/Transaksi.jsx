import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import TableTransaksi from "../Components/Transaksi/TableTransaksi";
import { HiSearch } from "react-icons/hi";

export default function Transaksi() {
  const [total, setTotal] = useState(0);
  const [diskon, setDiskon] = useState(0);
  const [bayar, setBayar] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [kembali, setKembali] = useState(0);

  const today = new Date();
  return (
    <>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto bg-slate-300 font-mono">
            <div className="flex flex-col h-screen bg-slate-100 rounded-md mx-2 py-1">
              {/* Bagian Atas */}
              <div className="grid grid-cols-4 gap-4 pt-2 px-4">
                <div className="font-extrabold text-lg ml-3 flex items-center">
                  Kode Produk
                </div>
                <div className="col-span-2 flex flex-row">
                  <input
                    type="text"
                    placeholder="Kode Produk"
                    className="items-center w-full rounded-md px-3 py-2"
                  ></input>
                  <button className="bg-sky-500 px-5 py-2 hover:bg-sky-700 rounded-sm flex flex-row">
                    <span className="text-xl text-white">
                      <HiSearch />
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-1 mr-4">
                  <h2 className="flex items-center text-lg font-bold">
                    Date :
                  </h2>
                  <div
                    type="date"
                    className="border-2 items-center py-2 px-2 rounded-md text-sm"
                  >
                    {today.toLocaleDateString()}
                  </div>
                </div>
              </div>
              {/* Table */}
              <div className=" w-full py-10 px-4">
                <TableTransaksi></TableTransaksi>
              </div>
              <div className="w-full grid grid-cols-2  divide-x-4">
                {/* Bayar Biru */}
                <div className=" mx-5">
                  <div className="text-lg font-bold text-white py-5 bg-blue-600 rounded-lg flex flex-row gap-2 justify-center">
                  <h1 className="text-center">Bayar : </h1>
                  <input type="text" className="border-none bg-blue-600 text-center" value={bayar} />
                  </div>
                  <div className="shadow-lg rounded-lg text-center">Input Pembayaran Diatas sini</div>
                </div>
                {/* Input Sebelah Kanan */}
              <div className="flex flex-col gap-4 ">
                {/* Total */}
                <div className="flex justify-end mr-5 border-b py-4">
                  <h1 className="">Total</h1>
                  <h1 className="mr-2">:</h1>
                  <input
                    type="text"
                    className="py-2 px-1 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={total}
                  />
                </div>
                {/* Diskon */}
                <div className="flex justify-end mr-5 border-b py-4">
                  <h1 className="">Diskon</h1>
                  <h1 className="mr-2">:</h1>
                  <input
                    type="text"
                    className="py-2 px-1 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Bayar */}
                <div className="flex justify-end mr-5 border-b py-4">
                  <h1 className="">Bayar</h1>
                  <h1 className="mr-2">:</h1>
                  <input
                    type="text"
                    value={bayar}
                    className="py-2 px-1 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Kembali */}
                <div className="flex justify-end mr-5 border-b py-4">
                  <h1 className="">Kembali</h1>
                  <h1 className="mr-2">:</h1>
                  <input
                    type="text"
                    value={kembali}
                    className="py-2 px-1 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
