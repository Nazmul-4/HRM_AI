// File: src/app/dashboard/hr/performance/goals/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, Edit, Trash2, BarChart2 } from 'lucide-react';

export default function EmployeeGoalsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');

  // Employee Goals registry mock data
  const [goals] = useState([
    { id: 1, title: "Implement Process Improvement", employee: "Amie Jerde", type: "Project Goals", start: "2025-01-01", end: "2025-12-31", progress: 55, status: "In Progress" },
    { id: 2, title: "Achieve Quality Certification", employee: "Caitlyn Harvey", type: "Quality Improvement Goals", start: "2025-01-01", end: "2025-12-31", progress: 25, status: "In Progress" },
    { id: 3, title: "Increase Customer Retention", employee: "Caitlyn Harvey", type: "Sales and Revenue Goals", start: "2025-01-01", end: "2025-12-31", progress: 88, status: "In Progress" },
    { id: 4, title: "Launch New Product Feature", employee: "Caitlyn Harvey", type: "Project Goals", start: "2025-01-01", end: "2025-12-31", progress: 35, status: "In Progress" },
    { id: 5, title: "Learn New Software Tools", employee: "Caitlyn Harvey", type: "Learning and Training Goals", start: "2025-01-01", end: "2025-12-31", progress: 45, status: "In Progress" },
    { id: 6, title: "Expand Technical Expertise", employee: "Caitlyn Harvey", type: "Career Development Goals", start: "2025-01-01", end: "2025-12-31", progress: 50, status: "In Progress" },
    { id: 7, title: "Meet Quality Standards", employee: "Caitlyn Harvey", type: "Performance Goals", start: "2025-01-01", end: "2025-12-31", progress: 90, status: "In Progress" },
    { id: 8, title: "Enhance Review Process", employee: "Amie Jerde", type: "Quality Improvement Goals", start: "2025-01-01", end: "2025-12-31", progress: 100, status: "Completed" },
    { id: 9, title: "Acquire New Clients", employee: "Amie Jerde", type: "Sales and Revenue Goals", start: "2025-01-01", end: "2025-12-31", progress: 70, status: "In Progress" },
    { id: 10, title: "Increase Task Completion Rate", employee: "Employee", type: "Performance Goals", start: "2025-01-01", end: "2025-12-31", progress: 75, status: "In Progress" }
  ]);

  const filteredGoals = goals.filter(g => g.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const getStatusStyle = (status) => status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100/30' : 'bg-blue-50 text-blue-600 border-blue-100/30';

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Employee Goals</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Goal</span>
        </button>
      </div>

      {/* Query Bar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 w-full">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search goals..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all"
            />
          </div>
          <button className="p-2.5 bg-slate-50 border border-gray-200/60 text-gray-500 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer active:scale-95">
            <SlidersHorizontal size={14} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
          <span>Per Page:</span>
          <select value={perPage} onChange={(e) => setPerPage(e.target.value)} className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer">
            <option>10</option><option>25</option>
          </select>
        </div>
      </div>

      {/* Goals Data Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Employee</th>
                <th className="py-4 px-6">Goal Type</th>
                <th className="py-4 px-6">Start Date</th>
                <th className="py-4 px-6">End Date</th>
                <th className="py-4 px-6">Progress</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-center w-36">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {filteredGoals.map((g, index) => (
                <tr key={g.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  <td className="py-4 px-6 font-bold text-gray-800">{g.title}</td>
                  <td className="py-4 px-6 text-gray-600">{g.employee}</td>
                  <td className="py-4 px-6 text-gray-500 font-medium">{g.type}</td>
                  <td className="py-4 px-6 text-gray-500">{g.start}</td>
                  <td className="py-4 px-6 text-gray-500">{g.end}</td>
                  <td className="py-4 px-6 w-40">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${g.progress}%` }}></div>
                      </div>
                      <span className="text-[10px] font-black text-gray-600 w-8">{g.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider border ${getStatusStyle(g.status)}`}>
                      {g.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"><Eye size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all"><Edit size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition-all"><BarChart2 size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={14} /></button>
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
            Showing 1 to {filteredGoals.length} of 18 employee goals
          </span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 shadow-sm cursor-pointer"><ChevronLeft size={14} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 text-xs font-bold hover:bg-gray-50 shadow-sm cursor-pointer">2</button>
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 shadow-sm cursor-pointer"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}