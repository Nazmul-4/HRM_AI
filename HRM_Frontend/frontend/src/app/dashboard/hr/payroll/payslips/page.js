// File: src/app/dashboard/hr/payroll/payslips/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function PayslipsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMonth, setActiveMonth] = useState('Apr');
  const [perPage, setPerPage] = useState('10');

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const payslips = [
    { id: 1, name: "Employee", code: "EMP6816", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100", payDate: "2026-05-05", netPay: "$34,281.81", status: "Downloaded" },
    { id: 2, name: "Amie Jerde", code: "EMP2277", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", payDate: "2026-05-05", netPay: "$37,778.41", status: "Generated" },
    { id: 3, name: "Caitlyn Harvey", code: "EMP8651", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", payDate: "2026-05-05", netPay: "$58,645.45", status: "Generated" },
    { id: 4, name: "Burdette Rath", code: "EMP1465", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", payDate: "2026-05-05", netPay: "$45,235.23", status: "Generated" },
    { id: 5, name: "Dr. Ashlee Schamberger", code: "EMP5082", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100", payDate: "2026-05-05", netPay: "$21,395.45", status: "Generated" },
    { id: 6, name: "Dr. Justus Boyer Jr.", code: "EMP5501", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", payDate: "2026-05-05", netPay: "$70,587.50", status: "Generated" },
    { id: 7, name: "Warren Jones", code: "EMP2362", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100", payDate: "2026-05-05", netPay: "$66,927.27", status: "Generated" },
    { id: 8, name: "Prof. Tommie Howell", code: "EMP8020", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100", payDate: "2026-05-05", netPay: "$23,559.09", status: "Generated" },
    { id: 9, name: "Rosemary Okuneva", code: "EMP8434", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100", payDate: "2026-05-05", netPay: "$95,863.64", status: "Generated" },
    { id: 10, name: "Ashlee Bernhard", code: "EMP6897", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100", payDate: "2026-05-05", netPay: "$74,996.59", status: "Generated" }
  ];

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Header Panel */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Payslips</h2>
        
        {/* Month Selection Toggle Ribbon */}
        <div className="flex bg-white border border-gray-100 p-1 rounded-2xl shadow-sm w-fit overflow-hidden">
          {months.map((m) => (
            <button 
              key={m}
              onClick={() => setActiveMonth(m)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeMonth === m ? 'bg-[#0da777] text-white shadow-sm' : 'text-gray-500 hover:bg-slate-50'}`}
            >
              {m}
              {m === 'Apr' && <span className="block text-[8px] opacity-70">2026</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Query Bar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 w-full">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0da777] text-white rounded-xl text-xs font-bold hover:bg-[#0b9368] transition-colors cursor-pointer">
            <Search size={14} /> Search
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-gray-200 text-gray-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer">
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
          <span>Per Page:</span>
          <select value={perPage} onChange={(e) => setPerPage(e.target.value)} className="bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-700 outline-none focus:border-[#0da777]">
            <option>10</option><option>25</option>
          </select>
        </div>
      </div>

      {/* Payslips Data Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="py-4 px-6 w-12 text-center">#</th>
              <th className="py-4 px-6">Employee</th>
              <th className="py-4 px-6">Pay Date</th>
              <th className="py-4 px-6">Net Pay</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Generated On</th>
              <th className="py-4 px-6 text-center w-24">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
            {payslips.map((slip, index) => (
              <tr key={slip.id} className="hover:bg-slate-50/50">
                <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={slip.avatar} alt={slip.name} className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                    <div>
                      <span className="block font-bold text-gray-800">{slip.name}</span>
                      <span className="block text-[10px] text-gray-400 uppercase">{slip.code}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-500">{slip.payDate}</td>
                <td className="py-4 px-6 font-black text-gray-800 tracking-tight">{slip.netPay}</td>
                <td className="py-4 px-6">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider border ${slip.status === 'Downloaded' ? 'bg-purple-50 text-purple-600 border-purple-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                    {slip.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-400 font-medium">2026-04-21</td>
                <td className="py-4 px-6 text-center">
                  <button className="p-1.5 text-gray-400 hover:text-[#0da777] hover:bg-emerald-50 rounded-lg transition-colors"><Eye size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination Toolbar */}
        <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider select-none">
          <span>Showing 1 to 10 of 10 payslips</span>
          <div className="flex items-center gap-1">
            <button className="p-2 border rounded-xl hover:bg-gray-50"><ChevronLeft size={14} /></button>
            <button className="w-8 h-8 rounded-xl bg-[#0da777] text-white">1</button>
            <button className="p-2 border rounded-xl hover:bg-gray-50"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}