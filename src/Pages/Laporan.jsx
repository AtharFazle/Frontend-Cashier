import React from "react";
import Sidebar from "../Components/Sidebar";

export default function Laporan() {
  return (
    <>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          Header
          <div className="flex-1 p-4 min-h-0 overflow-auto">Laporan</div>
        </div>
      </div>
    </>
  );
}
