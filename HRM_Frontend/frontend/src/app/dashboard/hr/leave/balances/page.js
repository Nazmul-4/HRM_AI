// File: src/app/dashboard/hr/leave/balances/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function LeaveBalancesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('9');
  const [showFilters, setShowFilters] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  // Common high-fidelity core master registry data models
  const employeeRegistry = [
    { id: 1, name: "Employee", code: "EMP6816", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" },
    { id: 2, name: "Amie Jerde", code: "EMP2277", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
    { id: 3, name: "Caitlyn Harvey", code: "EMP8651", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" },
    { id: 4, name: "Burdette Rath", code: "EMP1465", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
    { id: 5, name: "Dr. Ashlee Schamberger", code: "EMP5082", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    { id: 6, name: "Dr. Justus Boyer Jr.", code: "EMP5501", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" },
    { id: 7, name: "Warren Jones", code: "EMP2362", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" },
    { id: 8, name: "Prof. Tommie Howell", code: "EMP8020", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" },
    { id: 9, name: "Rosemary Okuneva", code: "EMP8434", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" }
  ];

  const leaveMetrics = [
    { type: "Annual Leave", total: 23, used: 7, available: 16, availColor: "text-emerald-600" },
    { type: "Sick Leave", total: 10, used: 0, available: 10, availColor: "text-emerald-600" },
    { type: "Emergency Leave", total: 5, used: 3, available: 2, availColor: "text-emerald-600" },
    { type: "Compensatory Leave", total: 12, used: 0, available: 12, availColor: "text-emerald-600" },
    { type: "Personal Leave", total: 5, used: 2, available: 3, availColor: "text-emerald-600" },
    { type: "Marriage Leave", total: 7, used: 0, available: 7, availColor: "text-emerald-600" }
  ];

  const filteredEmployees = employeeRegistry.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans bg-[#f8fafc]">
      
      {/* Breadcrumb Navigation Trail */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Leave Management</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Leave Balances</span>
      </div>

      {/* Action Title Block */}
      <div className="text-left">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Leave Balances</h2>
      </div>

      {/* Sync Disclaimer Warning Ribbon */}
      {showAlert && (
        <div className="bg-amber-50/60 border border-amber-200/40 rounded-xl p-3.5 text-xs text-amber-700 font-medium text-left flex items-start justify-between shadow-[0_2px_4px_rgba(245,158,11,0.02)]">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-sm">💡</span>
            <p>
              <strong>Note:</strong> If you add a new Employee, Leave Type, or Leave Policy, you must click the <span className="underline font-bold hover:text-amber-900 cursor-pointer">Sync Balances</span> or <span className="underline font-bold hover:text-amber-900 cursor-pointer">Re-sync</span> button to apply the changes for the current year.
            </p>
          </div>
          <button onClick={() => setShowAlert(false)} className="text-amber-400 hover:text-amber-600 font-bold px-1 transition-colors cursor-pointer">✕</button>
        </div>
      )}

      {/* Filter Toolbar Section Component */}
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
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center justify-center gap-2 bg-slate-50 border border-gray-200/60 text-gray-500 px-3.5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors active:scale-95 cursor-pointer">
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex items-center justify-end gap-2 shrink-0 text-xs font-bold text-gray-500 max-md:w-full">
          <span>Per Page:</span>
          <select 
            value={perPage} 
            onChange={(e) => setPerPage(e.target.value)}
            className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer"
          >
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="27">27</option>
          </select>
        </div>
      </div>

      {/* Grid Dashboard Tracking Matrix Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((emp) => (
          <div key={emp.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col justify-between space-y-4 hover:border-gray-200/80 transition-all">
            
            {/* Personnel Profile Header Inside Card */}
            <div className="flex items-center gap-3 border-b border-gray-50 pb-3 text-left">
              <img 
                src={emp.avatar} 
                alt={emp.name} 
                className="w-9 h-9 rounded-full border border-gray-200 object-cover shadow-sm"
              />
              <div className="space-y-0.5">
                <h4 className="text-xs font-black text-gray-800 leading-tight hover:text-[#0da777] transition-colors cursor-pointer">{emp.name}</h4>
                <span className="block text-[10px] text-gray-400 font-bold tracking-wide uppercase">{emp.code}</span>
              </div>
            </div>

            {/* Matrix Data Ledger Metrics Table Block */}
            <div className="w-full text-left text-[11px] font-bold">
              <div className="grid grid-cols-4 text-gray-400 pb-2 border-b border-gray-100/60 text-[10px] uppercase tracking-wider font-extrabold">
                <div className="col-span-2">Leave Type</div>
                <div className="text-center">Total</div>
                <div className="text-center">Used</div>
                <div className="text-center">Available</div>
              </div>
              
              <div className="divide-y divide-gray-50 font-semibold text-gray-700 mt-1">
                {leaveMetrics.map((leave, idx) => {
                  // Replicating slight individual variance dynamically to ensure exact data-match emulation
                  const variableUsed = emp.id % 2 === 0 && idx === 0 ? leave.used - 1 : leave.used;
                  const variableAvail = emp.id % 2 === 0 && idx === 0 ? leave.available + 1 : leave.available;

                  return (
                    <div key={idx} className="grid grid-cols-4 items-center py-2.5 hover:bg-slate-50/40 rounded-lg transition-colors group">
                      <div className="col-span-2 text-gray-600 font-medium truncate flex items-center gap-1">
                        <span className="truncate">{leave.type}</span>
                        <Info size={11} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer inline shrink-0" />
                      </div>
                      <div className="text-center text-gray-500 font-bold">{leave.total}</div>
                      <div className={`text-center font-bold ${variableUsed > 0 ? 'text-red-500' : 'text-gray-400'}`}>{variableUsed}</div>
                      <div className={`text-center font-black ${leave.availColor}`}>{variableAvail}</div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Operational Footer Pagination Panel Component */}
      <div className="bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          Showing 1 to {filteredEmployees.length} of 10 employees
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 transition-all cursor-pointer">
            <ChevronLeft size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 text-xs font-bold hover:bg-gray-50 shadow-sm cursor-pointer">
            2
          </button>
          <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 transition-all cursor-pointer">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}