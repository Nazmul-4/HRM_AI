// File: src/app/dashboard/hr/attendance/regularizations/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Check, X, Eye, Edit, Trash2 } from 'lucide-react';

export default function AttendanceRegularizationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('9');
  const [showFilters, setShowFilters] = useState(false);

  // High-fidelity mock dataset tracking exactly 9 records as showcased in the layout
  const [requests] = useState([
    { id: 1, name: "Dr. Ashlee Schamberger", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop", date: "2026-06-03", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "09:00", reqOut: "18:45", reason: "Had to leave early for medical appointment, worked from home later", requestedOn: "2026-04-21" },
    { id: 2, name: "Dr. Ashlee Schamberger", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop", date: "2026-06-02", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "08:50", reqOut: "18:10", reason: "Internet connectivity issue prevented online attendance marking", requestedOn: "2026-04-21" },
    { id: 3, name: "Dr. Ashlee Schamberger", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop", date: "2026-06-01", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "08:50", reqOut: "18:10", reason: "Internet connectivity issue prevented online attendance marking", requestedOn: "2026-04-21" },
    { id: 4, name: "Burdette Rath", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop", date: "2026-06-03", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "08:50", reqOut: "18:20", reason: "System error during clock in/out, actual time was different", requestedOn: "2026-04-21" },
    { id: 5, name: "Burdette Rath", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop", date: "2026-06-02", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "09:00", reqOut: "18:00", reason: "Traffic jam caused delay, requesting time correction", requestedOn: "2026-04-21" },
    { id: 6, name: "Burdette Rath", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop", date: "2026-06-01", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "09:00", reqOut: "18:45", reason: "Had to leave early for medical appointment, worked from home later", requestedOn: "2026-04-21" },
    { id: 7, name: "Caitlyn Harvey", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop", date: "2026-06-03", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "08:30", reqOut: "18:00", reason: "Traffic jam caused delay, requesting time correction", requestedOn: "2026-04-21" },
    { id: 8, name: "Caitlyn Harvey", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop", date: "2026-06-02", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "09:00", reqOut: "18:45", reason: "Had to leave early for medical appointment, worked from home later", requestedOn: "2026-04-21" },
    { id: 9, name: "Caitlyn Harvey", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop", date: "2026-06-01", status: "Pending", originalIn: "09:00", originalOut: "18:00", reqIn: "09:00", reqOut: "18:45", reason: "Had to leave early for medical appointment, worked from home later", requestedOn: "2026-04-21" }
  ]);

  const filteredRequests = requests.filter(req =>
    req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    req.reason.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Breadcrumb Navigator Navigation Trail */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Attendance</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Attendance Regularizations</span>
      </div>

      {/* Main Core View Action Header Component Block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Attendance Regularizations</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Request</span>
        </button>
      </div>

      {/* Functional Query Search Layout Component Cluster */}
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

      {/* Statistics 4-Grid Ribbon Row Block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Requests</span>
            <h3 className="text-2xl font-black text-gray-800">90</h3>
            <span className="block text-[10px] font-medium text-gray-400">All time</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-gray-500 border border-gray-100 flex items-center justify-center font-bold">📋</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Pending</span>
            <h3 className="text-2xl font-black text-gray-800">90</h3>
            <span className="block text-[10px] font-bold text-amber-500">Needs Review</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 border border-amber-100/40 flex items-center justify-center font-bold">⏳</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Approved</span>
            <h3 className="text-2xl font-black text-gray-800">0</h3>
            <span className="block text-[10px] font-bold text-emerald-500">0.0% rate</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 border border-emerald-100/40 flex items-center justify-center font-bold">✓</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Rejected</span>
            <h3 className="text-2xl font-black text-gray-800">0</h3>
            <span className="block text-[10px] font-medium text-gray-400">Declined</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 border border-red-100/40 flex items-center justify-center font-bold">✕</div>
        </div>
      </div>

      {/* Main 3-Column Profile Card Matrix Generation Grid Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRequests.map((req) => (
          <div key={req.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.005)] hover:border-gray-200 transition-all flex flex-col justify-between space-y-4">
            
            {/* Profile Section Header Row Inside Card */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={req.avatar} 
                  alt={req.name} 
                  className="w-9 h-9 rounded-full border border-gray-200 object-cover shadow-sm select-none"
                />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-gray-800 hover:text-[#0da777] transition-colors cursor-pointer">{req.name}</h4>
                  <span className="block text-[10px] font-bold text-gray-400">{req.date}</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-600 text-[9px] font-extrabold border border-amber-100/30 uppercase tracking-wide">
                {req.status}
              </span>
            </div>

            {/* Time Comparison Flow Module Matrix Component */}
            <div className="grid grid-cols-3 items-center text-center py-2 px-3 bg-slate-50/50 border border-gray-100/60 rounded-xl text-[11px]">
              <div className="space-y-0.5 text-left">
                <span className="block font-bold text-gray-400 uppercase text-[9px] tracking-wide">Original</span>
                <span className="block font-semibold text-red-500/80">⏱ {req.originalIn}</span>
                <span className="block font-semibold text-red-500/80">⏱ {req.originalOut}</span>
              </div>
              <div className="flex items-center justify-center text-gray-300 text-base font-medium">➔</div>
              <div className="space-y-0.5 text-right">
                <span className="block font-bold text-gray-400 uppercase text-[9px] tracking-wide">Requested</span>
                <span className="block font-bold text-emerald-600">⏱ {req.reqIn}</span>
                <span className="block font-bold text-emerald-600">⏱ {req.reqOut}</span>
              </div>
            </div>

            {/* Workflow Reason Description Snippet Panel */}
            <div className="space-y-1 text-left">
              <span className="block text-[10px] font-black text-gray-400 uppercase tracking-wider">Reason</span>
              <p className="text-xs font-medium text-gray-600 leading-relaxed line-clamp-2 bg-slate-50/20 p-2 border border-dashed border-gray-200/60 rounded-lg">
                💬 "{req.reason}"
              </p>
            </div>

            {/* Core Action Control Cluster Row Foot Elements */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-50 text-[10px] font-bold text-gray-400">
              <span>📅 Requested: {req.requestedOn}</span>
              
              <div className="flex items-center gap-1 shrink-0">
                <button title="Approve Request" className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-100/20 rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Check size={13} />
                </button>
                <button title="Reject Request" className="p-1.5 bg-red-50 text-red-500 hover:bg-red-100 border border-red-100/20 rounded-lg transition-all active:scale-90 cursor-pointer">
                  <X size={13} />
                </button>
                <button title="View Detail Log" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Eye size={13} />
                </button>
                <button title="Edit Submission" className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Edit size={13} />
                </button>
                <button title="Trash Request" className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Structured Modern Pagination Toolbar Assembly */}
      <div className="bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          Showing 1 to {filteredRequests.length} of 90 regularization requests
        </span>
        <div className="flex items-center gap-1">
          <button className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-pointer">
            <ChevronLeft size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 text-xs font-bold hover:bg-gray-50 shadow-sm cursor-pointer">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 text-xs font-bold hover:bg-gray-50 shadow-sm cursor-pointer">
            3
          </button>
          <span className="px-1 text-gray-300 font-bold text-xs">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 text-xs font-bold hover:bg-gray-50 shadow-sm cursor-pointer">
            10
          </button>
          <button className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-pointer">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}