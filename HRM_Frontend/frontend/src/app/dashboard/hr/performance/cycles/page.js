// File: src/app/dashboard/hr/performance/cycles/page.js
"use client";

import React, { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2 } from 'lucide-react';

export default function ReviewCyclesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Review Cycles registry mock data
  const [cycles] = useState([
    { id: 1, name: "Monthly Performance Review", desc: "Monthly review", frequency: "Monthly", status: "Active" },
    { id: 2, name: "Quarterly Business Review", desc: "Comprehensive quarterly assessment of employee performance...", frequency: "Quarterly", status: "Active" },
    { id: 3, name: "Mid-Year Performance Review", desc: "Mid-year review", frequency: "Semi-Annual", status: "Active" },
    { id: 4, name: "Annual Performance Appraisal", desc: "Annual appraisal", frequency: "Annual", status: "Active" },
    { id: 5, name: "Probationary Review", desc: "Performance evaluation for employees during probationary...", frequency: "Quarterly", status: "Active" },
    { id: 6, name: "Project Completion Review", desc: "Project outcome review", frequency: "Monthly", status: "Active" },
    { id: 7, name: "Leadership Assessment Cycle", desc: "Leadership effectiveness review", frequency: "Semi-Annual", status: "Active" }
  ]);

  const filteredCycles = cycles.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Review Cycles</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Review Cycle</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Creation Panel */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4 lg:sticky lg:top-24">
          <div>
            <h3 className="text-sm font-black text-gray-800 tracking-tight">Add New Review Cycle</h3>
            <p className="text-[11px] text-gray-400 font-medium">Fill in the details to create a new review cycle</p>
          </div>
          <form onSubmit={e => e.preventDefault()} className="space-y-4 text-xs font-bold text-gray-700">
            <div className="space-y-1.5">
              <label>Review Cycle Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="e.g., Annual Review 2026" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]" />
            </div>
            <div className="space-y-1.5">
              <label>Frequency <span className="text-red-500">*</span></label>
              <select className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]">
                <option>Select frequency</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Semi-Annual</option>
                <option>Annual</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label>Description</label>
              <textarea rows="3" placeholder="Brief description of the review cycle" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777] resize-none font-medium text-gray-600" />
            </div>
            <div className="space-y-1.5">
              <label>Status <span className="text-red-500">*</span></label>
              <select className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button className="w-full bg-[#0da777] hover:bg-[#0b9368] text-white py-2.5 rounded-xl shadow-sm cursor-pointer transition-all">Add Review Cycle</button>
          </form>
        </div>

        {/* Cycles Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search review cycles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 pl-9 pr-4 py-2 rounded-xl border border-gray-200/40 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white" 
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <select className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none flex-1">
                <option>All Frequencies</option>
              </select>
              <select className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none flex-1">
                <option>All Statuses</option>
              </select>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50/40 border-b border-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Frequency</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-center w-28">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
                {filteredCycles.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-500 border border-blue-100 flex items-center justify-center text-sm shadow-inner">🔄</div>
                        <div>
                          <span className="block font-black text-gray-800 leading-tight">{c.name}</span>
                          <span className="block text-[10px] text-gray-400 font-medium truncate max-w-[200px]">{c.desc}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-gray-600 text-[10px] font-black uppercase tracking-wider border border-gray-200">
                        {c.frequency}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100/40">
                        {c.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg"><Edit size={13} /></button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}