// File: src/app/dashboard/hr/performance/indicator-categories/page.js
"use client";

import React, { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function IndicatorCategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');

  // Indicator categories registry mock data
  const [categories] = useState([
    { id: 1, name: "Job Performance", status: "Active", created: "2025-09-19" },
    { id: 2, name: "Quality of Work", status: "Active", created: "2025-09-19" },
    { id: 3, name: "Communication Skills", status: "Active", created: "2025-09-19" },
    { id: 4, name: "Teamwork and Collaboration", status: "Active", created: "2025-09-19" },
    { id: 5, name: "Leadership and Initiative", status: "Active", created: "2025-09-19" },
    { id: 6, name: "Problem Solving", status: "Active", created: "2025-09-19" },
    { id: 7, name: "Adaptability and Flexibility", status: "Active", created: "2025-09-19" },
    { id: 8, name: "Time Management", status: "Active", created: "2025-09-19" },
    { id: 9, name: "Customer Service", status: "Active", created: "2025-09-19" },
    { id: 10, name: "Technical Competency", status: "Active", created: "2025-09-19" }
  ]);

  const filteredCategories = categories.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Indicator Categories</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Category</span>
        </button>
      </div>

      {/* Query Bar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search categories..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
          <span>Per Page:</span>
          <select value={perPage} onChange={(e) => setPerPage(e.target.value)} className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer">
            <option>10</option><option>25</option>
          </select>
        </div>
      </div>

      {/* Categories Table View */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Created At</th>
                <th className="py-4 px-6 text-center w-36">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {filteredCategories.map((c, index) => (
                <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  <td className="py-4 px-6 font-bold text-gray-800">{c.name}</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100/40">
                      {c.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-400 font-medium">{c.created}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"><Eye size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all"><Edit size={14} /></button>
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
            Showing 1 to {filteredCategories.length} of 12 indicator categories
          </span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-pointer"><ChevronLeft size={14} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 text-xs font-bold hover:bg-gray-50 shadow-sm cursor-pointer">2</button>
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-pointer"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}