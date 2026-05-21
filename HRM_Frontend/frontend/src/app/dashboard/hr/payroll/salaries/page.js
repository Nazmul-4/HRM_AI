// File: src/app/dashboard/hr/payroll/salaries/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Eye, Edit, Lock, BarChart2, Trash2 } from 'lucide-react';

export default function EmployeeSalariesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');

  // Employee Salary registry mock data
  const [salaries] = useState([
    { id: 1, name: "Ashlee Bernhard", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100", baseSalary: "$75,000.00", components: ["HRA", "Transport", "PF", "ESI", "Prof. Tax", "TDS"], status: "Active", created: "2025-09-19" },
    { id: 2, name: "Rosemary Okuneva", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100", baseSalary: "$70,000.00", components: ["HRA", "Transport", "Medical", "DA", "Special", "PF", "Prof. Tax"], status: "Active", created: "2025-09-19" },
    { id: 3, name: "Prof. Tommie Howell", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100", baseSalary: "$20,000.00", components: ["HRA", "Transport", "Medical", "PF", "ESI", "Prof. Tax", "TDS"], status: "Active", created: "2025-09-19" },
    { id: 4, name: "Warren Jones", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100", baseSalary: "$60,000.00", components: ["HRA", "Transport", "PF", "Prof. Tax"], status: "Active", created: "2025-09-19" },
    { id: 5, name: "Dr. Justus Boyer Jr.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", baseSalary: "$55,000.00", components: ["HRA", "Transport", "Medical", "DA", "Special", "PF", "ESI", "Prof. Tax", "TDS"], status: "Active", created: "2025-09-19" },
    { id: 6, name: "Dr. Ashlee Schamberger", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100", baseSalary: "$15,000.00", components: ["HRA", "Transport", "Medical", "PF", "Prof. Tax"], status: "Active", created: "2025-09-19" },
    { id: 7, name: "Burdette Rath", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", baseSalary: "$45,000.00", components: ["HRA", "Transport", "PF", "ESI", "Prof. Tax", "TDS"], status: "Active", created: "2025-09-19" },
    { id: 8, name: "Caitlyn Harvey", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", baseSalary: "$40,000.00", components: ["HRA", "Transport", "Medical", "DA", "Special", "PF", "Prof. Tax"], status: "Active", created: "2025-09-19" },
    { id: 9, name: "Amie Jerde", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", baseSalary: "$35,000.00", components: ["HRA", "Transport", "Medical", "PF", "ESI", "Prof. Tax", "TDS"], status: "Active", created: "2025-09-19" },
    { id: 10, name: "Employee", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100", baseSalary: "$30,000.00", components: ["HRA", "Transport", "PF", "Prof. Tax"], status: "Active", created: "2025-09-19" }
  ]);

  const filteredSalaries = salaries.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Breadcrumb Navigation Trail */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Payroll Management</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Employee Salaries</span>
      </div>

      <div className="text-left">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Employee Salaries</h2>
      </div>

      {/* Filter and Query Control Bar */}
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

      {/* Employee Salaries Ledger Board */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Employee</th>
                <th className="py-4 px-6">Basic Salary</th>
                <th className="py-4 px-6">Components</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Created At</th>
                <th className="py-4 px-6 text-center w-40">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {filteredSalaries.map((s, index) => (
                <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img src={s.avatar} alt={s.name} className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                      <span className="font-bold text-gray-800 hover:text-[#0da777] cursor-pointer transition-colors">{s.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">{s.baseSalary}</td>
                  <td className="py-4 px-6 max-w-sm">
                    <div className="flex flex-wrap gap-1.5">
                      {s.components.map((comp, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold text-[10px] border border-emerald-100/50 truncate max-w-[100px]">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100/40">
                      {s.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-400 font-medium">{s.created}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button title="View Details" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all active:scale-90">
                        <Eye size={14} />
                      </button>
                      <button title="Edit Salary" className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all active:scale-90">
                        <Edit size={14} />
                      </button>
                      <button title="Lock Salary Model" className="p-1.5 text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-all active:scale-90">
                        <Lock size={14} />
                      </button>
                      <button title="Salary Analytics" className="p-1.5 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition-all active:scale-90">
                        <BarChart2 size={14} />
                      </button>
                      <button title="Delete Record" className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all active:scale-90">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination Toolbar */}
        <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex items-center justify-between select-none">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Showing 1 to {filteredSalaries.length} of {filteredSalaries.length} employees
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