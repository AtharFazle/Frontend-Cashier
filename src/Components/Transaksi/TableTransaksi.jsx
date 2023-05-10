import React from "react";
import { HiTrash } from "react-icons/hi";
import { DummyProduk } from "../../lib/consts/Produk";

export default function TableTransaksi() {
  return (
    <div className="relative flex flex-col shadow-lg">
      <table className="w-auto">
        <thead>
          <tr className="">
            <th className="text-md px-6 py-3">No.</th>
            <th className="text-md px-6 py-3">Kode Produk</th>
            <th className="text-md px-6 py-3">Nama Produk</th>
            <th className="text-md px-6 py-3">Harga</th>
            <th className="text-md px-6 py-3">Diskon</th>
            <th className="text-md px-6 py-3">Sub Total</th>
            <th className="text-md px-6 py-3">Jumlah</th>
            <th className="text-md px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {DummyProduk.map((item, index) => (
            <tr key={item.id}>
              <th className="text-md px-6 py-3"> {index} </th>
              <th className="text-md px-6 py-3">{item.kode}</th>
              <th className="text-md px-6 py-3">{item.nama}</th>
              <th className="text-md px-6 py-3">{item.harga}</th>
              <th className="text-md px-6 py-3">{item.Diskon}</th>
              <th className="text-md px-6 py-3">{}</th>
              <th className="text-md px-6 py-3">
                <input
                  type="number"
                  value={item.jumlah}
                  className="rounded-md border-2 text-center py-2 px-0.5 text-md "
                />
              </th>
              <th className="px-2 py-3 ">
                <div className="flex justify-center bg-red-600 w-auto h-auto py-2 rounded-md">
                  <span className="text-white text-lg">
                    <HiTrash />
                  </span>
                  <h1 className="text-white">Buang</h1>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
