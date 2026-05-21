// File: src/app/dashboard/hr/leave/policies/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, Edit, Trash2 } from 'lucide-react';

export default function LeavePoliciesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');

  // Master policy registry dataset
  const [policies] = useState([
    { id: 1, name: "Annual Leave Policy", type: "Annual Leave", forward: "5 days", approval: "Required", status: "Active", created: "2025-09-19" },
    { id: 2, name: "Sick Leave Policy", type: "Sick Leave", forward: "2 days", approval: "Not Required", status: "Active", created: "2025-09-19" },
    { id: 3, name: "Emergency Leave Policy", type: "Emergency Leave", forward: "0 days", approval: "Not Required", status: "Active", created: "2025-09-19" },
    { id: 4, name: "Compensatory Leave Policy", type: "Compensatory Leave", forward: "3 days", approval: "Required", status: "Active", created: "2025-09-19" },
    { id: 5, name: "Personal Leave Policy", type: "Personal Leave", forward: "0 days", approval: "Required", status: "Active", created: "2025-09-19" },
    { id: 6, name: "Marriage Leave Policy", type: "Marriage Leave", forward: "0 days", approval: "Required", status: "Active", created: "2025-09-19" }
  ]);

  const filteredPolicies = policies.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden animate-fadeIn">
      {/* Search and Utility Toolbar */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-50 flex-wrap justify-between">
        <div className="relative w-64 max-sm:w-full">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search policy names..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 pl-9 pr-4 py-2 rounded-xl border border-gray-200/40 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white" 
          />
        </div>
        <div className="flex items-center gap-2 max-sm:w-full justify-between select-none">
          <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200/60 rounded-xl text-xs font-bold text-gray-600 hover:bg-slate-50 transition-all cursor-pointer">
            <SlidersHorizontal size={13} /> <span>Filters</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold">
            <span>Per Page:</span>
            <select 
              value={perPage} 
              onChange={(e) => setPerPage(e.target.value)}
              className="bg-slate-50 border border-gray-200/60 rounded-xl px-2 py-1.5 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer"
            >
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Data Registry Table View */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[950px]">
          <thead>
            <tr className="bg-slate-50/40 border-b border-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
              <th className="py-3 px-4 text-center w-12">#</th>
              <th className="py-3 px-6">Policy Name</th>
              <th className="py-3 px-6">Leave Type</th>
              <th className="py-3 px-6">Carry Forward</th>
              <th className="py-3 px-6">Approval</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Created At</th>
              <th className="py-3 px-4 text-center w-36">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
            {filteredPolicies.map((policy, index) => (
              <tr key={policy.id} className="hover:bg-slate-50/40 transition-colors">
                <td className="py-3.5 px-4 text-center text-gray-400 font-bold">{index + 1}</td>
                <td className="py-3.5 px-6 font-bold text-gray-800 hover:text-[#0da777] cursor-pointer transition-colors">{policy.name}</td>
                <td className="py-3.5 px-6">
                  <span className="inline-flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${policy.type.startsWith('M') ? 'bg-orange-400' : policy.type.startsWith('S') ? 'bg-red-500' : policy.type.startsWith('E') ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                    <span className="text-gray-600 font-medium">{policy.type}</span>
                  </span>
                </td>
                <td className="py-3.5 px-6 text-gray-500 font-medium">{policy.forward}</td>
                <td className="py-3.5 px-6">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${policy.approval === 'Required' ? 'bg-amber-50 text-amber-600 border-amber-100/30' : 'bg-emerald-50 text-emerald-600 border-emerald-100/20'}`}>
                    {policy.approval}
                  </span>
                </td>
                <td className="py-3.5 px-6">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100/20">
                    {policy.status}
                  </span>
                </td>
                <td className="py-3.5 px-6 text-gray-400 font-medium">{policy.created}</td>
                <td className="py-3.5 px-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <button className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg cursor-pointer"><Eye size={13} /></button>
                    <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg cursor-pointer"><Edit size={13} /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"><Trash2 size={13} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer Panel */}
      <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex items-center justify-between select-none">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          Showing 1 to {filteredPolicies.length} of {filteredPolicies.length} leave policies
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 cursor-not-allowed">
            <ChevronLeft size={14} />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
            1
          </button>
          <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 cursor-not-allowed">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}