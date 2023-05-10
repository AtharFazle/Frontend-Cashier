import React, { useState } from "react";
import { AiOutlineDash } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DASHBOARD_QUICK_ACCESS_LINKS } from "../../lib/consts/navigation";
import {
  CartesianAxis,
  Legend,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  RadialBarChart,
  RadialBar
} from "recharts";

export default function QuickAccess() {
  const [data, setData] = useState(10);
  return (
    <div className="flex flex-col">
      <div className="bg-blue-500 text-white flex flex-row rounded-t-xl py-2 px-2 relative">
        <h1 className="text-2xl px-4 justify-end">Quick Report</h1>
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </div>
    </div>
  );
}
