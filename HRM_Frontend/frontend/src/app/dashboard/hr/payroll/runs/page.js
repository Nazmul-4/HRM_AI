// File: src/app/dashboard/hr/payroll/runs/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, FileText } from 'lucide-react';

export default function PayrollRunsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');

  // Payroll run registry mock data
  const [payrollRuns] = useState([
    { id: 1, title: "June 2026 Payroll", frequency: "Monthly", period: "2026-06-01 to 2026-06-30", payDate: "2026-07-05", employees: 10, gross: "$603,486.36", net: "$523,361.36", status: "Completed" },
    { id: 2, title: "May 2026 Payroll", frequency: "Monthly", period: "2026-05-01 to 2026-05-31", payDate: "2026-06-05", employees: 10, gross: "$605,083.34", net: "$524,958.34", status: "Completed" },
    { id: 3, title: "April 2026 Payroll", frequency: "Monthly", period: "2026-04-01 to 2026-04-30", payDate: "2026-05-05", employees: 10, gross: "$609,395.44", net: "$529,270.44", status: "Completed" },
    { id: 4, title: "March 2026 Payroll", frequency: "Monthly", period: "2026-03-01 to 2026-03-31", payDate: "2026-04-05", employees: 10, gross: "$607,772.73", net: "$527,647.73", status: "Completed" },
    { id: 5, title: "February 2026 Payroll", frequency: "Monthly", period: "2026-02-01 to 2026-02-28", payDate: "2026-03-05", employees: 10, gross: "$604,450.00", net: "$524,325.00", status: "Completed" },
    { id: 6, title: "January 2026 Payroll", frequency: "Monthly", period: "2026-01-01 to 2026-01-31", payDate: "2026-02-05", employees: 10, gross: "$610,645.45", net: "$530,520.45", status: "Completed" }
  ]);

  const filteredRuns = payrollRuns.filter(run => 
    run.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Breadcrumb Navigation Trail */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Payroll Management</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Payroll Runs</span>
      </div>

      {/* Main Module Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Payroll Runs</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Payroll Run</span>
        </button>
      </div>

      {/* Filter and Query Control Bar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 w-full">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search payroll runs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all"
            />
          </div>
          <button className="p-2.5 bg-slate-50 border border-gray-200/60 text-gray-500 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer active:scale-95">
            <SlidersHorizontal size={14} />
          </button>
        </div>

        <div className="flex items-center justify-end gap-2 shrink-0 text-xs font-bold text-gray-500">
          <span>Per Page:</span>
          <select 
            value={perPage} 
            onChange={(e) => setPerPage(e.target.value)}
            className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer"
          >
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>

      {/* Payroll Runs Master Ledger Matrix */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Frequency</th>
                <th className="py-4 px-6">Pay Period</th>
                <th className="py-4 px-6">Pay Date</th>
                <th className="py-4 px-6 text-center">Employees</th>
                <th className="py-4 px-6">Gross Pay</th>
                <th className="py-4 px-6">Net Pay</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-center w-28">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {filteredRuns.map((run, index) => (
                <tr key={run.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  <td className="py-4 px-6 font-bold text-gray-800">{run.title}</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wide border border-blue-100/50">
                      {run.frequency}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-500 font-medium">{run.period}</td>
                  <td className="py-4 px-6 text-gray-500 font-medium">{run.payDate}</td>
                  <td className="py-4 px-6 text-center font-bold text-gray-800">{run.employees}</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">{run.gross}</td>
                  <td className="py-4 px-6 text-blue-600 font-bold">{run.net}</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100/40">
                      {run.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button title="View Details" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all active:scale-90">
                        <Eye size={14} />
                      </button>
                      <button title="Export Report" className="p-1.5 text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all active:scale-90">
                        <FileText size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Toolbar */}
        <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex items-center justify-between select-none">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Showing 1 to {filteredRuns.length} of {filteredRuns.length} payroll runs
          </span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 shadow-sm cursor-pointer">
              <ChevronLeft size={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
              1
            </button>
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 shadow-sm cursor-pointer">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}