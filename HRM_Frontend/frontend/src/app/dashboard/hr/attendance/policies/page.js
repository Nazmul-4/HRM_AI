// File: src/app/dashboard/hr/attendance/policies/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, Edit, Lock, Trash2 } from 'lucide-react';

export default function AttendancePoliciesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('9');
  const [showFilters, setShowFilters] = useState(false);

  // High-fidelity mock dataset cloned directly from the interface specifications
  const [policies] = useState([
    {
      id: 1,
      name: "Standard Attendance Policy",
      status: "Active",
      lateArrivalGrace: "15 minutes",
      earlyDepartureGrace: "15 minutes",
      overtimeRate: "$150.00/hr",
      description: "Default attendance policy with standard grace periods and overtime rates"
    },
    {
      id: 2,
      name: "Flexible Attendance Policy",
      status: "Active",
      lateArrivalGrace: "30 minutes",
      earlyDepartureGrace: "30 minutes",
      overtimeRate: "$175.00/hr",
      description: "Flexible attendance policy with extended grace periods for remote and flexible workers"
    },
    {
      id: 3,
      name: "Strict Attendance Policy",
      status: "Active",
      lateArrivalGrace: "5 minutes",
      earlyDepartureGrace: "5 minutes",
      overtimeRate: "$200.00/hr",
      description: "Strict attendance policy with minimal grace periods for critical operations"
    }
  ]);

  const filteredPolicies = policies.filter(policy =>
    policy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    policy.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Breadcrumb Navigator Navigation Trail */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Attendance</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Attendance Policies</span>
      </div>

      {/* Block Title and Global Add Operation Trigger Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Attendance Policies</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Attendance Policy</span>
        </button>
      </div>

      {/* Query Filters & PerPage Select Panel Box Layout */}
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
          <button 
            onClick={() => setShowFilters(!showFilters)} 
            className="flex items-center justify-center p-2.5 bg-slate-50 border border-gray-200/60 text-gray-500 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer active:scale-95"
          >
            <SlidersHorizontal size={14} />
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
            <option value="36">36</option>
          </select>
        </div>
      </div>

      {/* Analytics 4-Grid Ribbon Information Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Policies</span>
            <h3 className="text-2xl font-black text-gray-800">3</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-gray-400 border border-gray-100 flex items-center justify-center font-bold">🛡️</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Active Policies</span>
            <h3 className="text-2xl font-black text-gray-800">3</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 border border-emerald-100/40 flex items-center justify-center font-bold">✓</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Avg Late Grace</span>
            <h3 className="text-2xl font-black text-gray-800">17 min</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 border border-amber-100/40 flex items-center justify-center font-bold">⏱</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Avg Overtime Rate</span>
            <h3 className="text-2xl font-black text-gray-800">$175.00</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/40 flex items-center justify-center text-sm font-extrabold">$</div>
        </div>
      </div>

      {/* Main Grid View Cards Dynamic Render Cluster */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPolicies.map((policy) => (
          <div key={policy.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.005)] hover:border-gray-200 transition-all flex flex-col justify-between space-y-5">
            
            {/* Header Identity Container Section */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-500 border border-blue-100/30 flex items-center justify-center shadow-inner">
                  🛡️
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-gray-800 leading-tight">{policy.name}</h4>
                  <span className="inline-flex px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[9px] font-extrabold uppercase border border-emerald-100/20">
                    {policy.status}
                  </span>
                </div>
              </div>

              {/* Actions Interaction Trigger Row Miniature Cluster */}
              <div className="flex items-center gap-0.5">
                <button title="View Detail Log" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Eye size={13} />
                </button>
                <button title="Edit Guidelines" className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Edit size={13} />
                </button>
                <button title="Manage Authentication Gates" className="p-1.5 text-gray-400 hover:text-purple-500 hover:bg-purple-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Lock size={13} />
                </button>
                <button title="Trash Policy Registry" className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            {/* Matrix Rule Parameters Specifications Mapping Configuration Box */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-3 border-t border-b border-gray-50 text-xs font-semibold text-gray-700">
              <div className="space-y-0.5 text-left">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Late Arrival Grace</span>
                <span className="block font-black text-gray-800">⏱ {policy.lateArrivalGrace}</span>
              </div>
              <div className="space-y-0.5 text-right">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Overtime Rate</span>
                <span className="block font-black text-emerald-600">💵 {policy.overtimeRate}</span>
              </div>
              <div className="space-y-0.5 text-left" colSpan="2">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Early Departure Grace</span>
                <span className="block font-black text-gray-800">⏱ {policy.earlyDepartureGrace}</span>
              </div>
            </div>

            {/* Workflow Base Information Block */}
            <p className="text-xs font-medium text-gray-400 leading-relaxed text-left">
              {policy.description}
            </p>

          </div>
        ))}
      </div>

      {/* Global Bottom Footer Pagination Toolbar Grid Panel */}
      <div className="bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          Showing 1 to {filteredPolicies.length} of {filteredPolicies.length} attendance policies
        </span>
        <div className="flex items-center gap-1">
          <button disabled className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-not-allowed">
            <ChevronLeft size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
            1
          </button>
          <button disabled className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-not-allowed">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}