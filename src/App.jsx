import { React } from "react";

import { Routes, Route } from "react-router-dom";

import Transaksi from "./Pages/Transaksi.jsx";
import Barang from "./Pages/Barang.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Support from "./Pages/Support.jsx";
import Settings from "./Pages/Settings.jsx";
import Laporan from "./Pages/Laporan.jsx";

function App() {
  return (
    <div className="app">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Transaksi" element={<Transaksi />} />
            <Route path="/Barang" element={<Barang />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Laporan" element={<Laporan />} />
         </Routes>
    </div>
  );
}

export default App;
