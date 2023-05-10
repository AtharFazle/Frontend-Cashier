import React from "react";
import { AiOutlineDash } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DASHBOARD_QUICK_ACCESS_LINKS } from "../../lib/consts/navigation";

export default function QuickAccess() {
  return (
    <div className="flex flex-col">
      <div className="bg-blue-500 text-white flex flex-row rounded-t-xl py-2 px-2 relative">
        <h1 className="text-2xl px-4 justify-end">Quick Access</h1>
        <span className="text-xl font-bold flex justify-end pt-2">
          <AiOutlineDash fontSize={24} />
        </span>
      </div>
      <div className="bg-slate-100 grid grid-cols-10  rounded-b-md i py-10 px-48">
        {DASHBOARD_QUICK_ACCESS_LINKS.map((item) => (
          <Link key={item.key} to={item.path} className="flex flex-col gap-1 bg-slate-500 shadow-lg px-2 py-4 rounded-xl w-24 h-auto text-white hover:border border-blue-500 hover:bg-slate-600">
            <span className="flex justify-center text-2xl">
              {item.icon}
            </span>
            <div className="text-center">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
