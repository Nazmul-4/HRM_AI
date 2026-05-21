// File: src/app/dashboard/hr/attendance/shifts/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, Edit, Trash2 } from 'lucide-react';

export default function ShiftsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('9');
  const [showFilters, setShowFilters] = useState(false);

  // High-fidelity mock state dataset mapping exactly to the 3-column system overview layout
  const [shifts] = useState([
    {
      id: 1,
      name: "Morning Shift",
      type: "Day Shift",
      status: "Active",
      hours: "09:00 - 18:00",
      breakDuration: "60 minutes",
      workingTime: "8.0 hours",
      gracePeriod: "15 minutes",
      description: "Standard morning shift for regular office hours",
      color: "text-amber-500 bg-amber-50 border-amber-100/40",
      icon: "☀️"
    },
    {
      id: 2,
      name: "Evening Shift",
      type: "Day Shift",
      status: "Active",
      hours: "14:00 - 23:00",
      breakDuration: "60 minutes",
      workingTime: "8.0 hours",
      gracePeriod: "15 minutes",
      description: "Evening shift for extended business hours",
      color: "text-sky-500 bg-sky-50 border-sky-100/40",
      icon: "🌤️"
    },
    {
      id: 3,
      name: "Night Shift",
      type: "Night Shift",
      status: "Active",
      hours: "22:00 - 07:00",
      breakDuration: "60 minutes",
      workingTime: "8.0 hours",
      gracePeriod: "15 minutes",
      description: "Night shift for 24/7 operations and support",
      color: "text-indigo-500 bg-indigo-50 border-indigo-100/40",
      icon: "🌙"
    }
  ]);

  const filteredShifts = shifts.filter(shift =>
    shift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shift.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Breadcrumb Navigator Navigation Trail */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Attendance</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Shifts</span>
      </div>

      {/* Main Block View Title Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Shifts</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Shift</span>
        </button>
      </div>

      {/* Query Filter and PerPage Controls Shell Layout */}
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
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center justify-center p-2.5 bg-slate-50 border border-gray-200/60 text-gray-500 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer active:scale-95">
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

      {/* Statistics Analytics 4-Grid Ribbon Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Shifts</span>
            <h3 className="text-2xl font-black text-gray-800">3</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-gray-400 border border-gray-100 flex items-center justify-center font-bold">👥</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Active Shifts</span>
            <h3 className="text-2xl font-black text-gray-800">3</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 border border-emerald-100/40 flex items-center justify-center font-bold">☀️</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Night Shifts</span>
            <h3 className="text-2xl font-black text-gray-800">1</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 border border-purple-100/40 flex items-center justify-center font-bold">🌙</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Day Shifts</span>
            <h3 className="text-2xl font-black text-gray-800">2</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 border border-blue-100/40 flex items-center justify-center font-bold">🌤️</div>
        </div>
      </div>

      {/* Main Card View Grid Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShifts.map((shift) => (
          <div key={shift.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.005)] hover:border-gray-200 transition-all flex flex-col justify-between space-y-5">
            
            {/* Upper Registry Grid Information */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-lg shadow-inner">
                  {shift.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-gray-800 leading-tight">{shift.name}</h4>
                  <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-gray-500 font-bold text-[9px] uppercase tracking-wide border border-gray-200/20">{shift.type}</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold text-[9px] uppercase tracking-wide border border-emerald-100/20">{shift.status}</span>
                  </div>
                </div>
              </div>

              {/* Action Cluster Trigger Segments Row */}
              <div className="flex items-center gap-0.5">
                <button title="View log options" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Eye size={13} />
                </button>
                <button title="Edit shift rules" className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Edit size={13} />
                </button>
                <button title="Delete shift matrix" className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            {/* Core Parameter Matrix Content Grid block */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-3 border-t border-b border-gray-50 text-xs font-semibold text-gray-700">
              <div className="space-y-0.5 text-left">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Shift Hours</span>
                <span className="block font-black text-gray-800">⏱ {shift.hours}</span>
              </div>
              <div className="space-y-0.5 text-right">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Break Duration</span>
                <span className="block font-black text-gray-500">☕ {shift.breakDuration}</span>
              </div>
              <div className="space-y-0.5 text-left">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Working Time</span>
                <span className="block font-black text-gray-800">💼 {shift.workingTime}</span>
              </div>
              <div className="space-y-0.5 text-right">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Grace Period</span>
                <span className="block font-black text-amber-600">⏱ {shift.gracePeriod}</span>
              </div>
            </div>

            {/* Bottom Workflow Summary Description */}
            <p className="text-xs font-medium text-gray-400 text-left leading-relaxed">
              {shift.description}
            </p>

          </div>
        ))}
      </div>

      {/* Unified Pagination Elements Box */}
      <div className="bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          Showing 1 to {filteredShifts.length} of 3 shifts
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