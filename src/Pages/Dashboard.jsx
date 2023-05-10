import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

import ReportDay from "../Components/Dashboard/ReportDay";
import ReportWeek from "../Components/Dashboard/ReportWeek";
import ReportMonth from "../Components/Dashboard/ReportMonth";
import QuantityAdmin from "../Components/Dashboard/QuantityAdmin";
import QuantityCashier from "../Components/Dashboard/QuantityCashier";
import QuantityProduct from "../Components/Dashboard/QuantityProduct";
import QuickAccess from "../Components/Dashboard/QuickAccess";
import Chart from '../Components/Dashboard/Charts'

export default function Dashboard() {
  return (
    <>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto font-serif bg-slate-300">
            <div className="font-extrabold text-3xl">Dashboard</div>
            <div className="border-b-2 border-black my-2"></div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 pt-5">
              <ReportDay />
              <ReportWeek />
              <ReportMonth />
              <QuantityAdmin />
              <QuantityCashier />
              <QuantityProduct />
            </div>
            <div className="mx-auto shadow-xl rounded-lg mt-8">
             <QuickAccess/>
            </div>
            <div className="mx-auto shadow-xl rounded-lg mt-8">
             <Chart/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
