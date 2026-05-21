// File: src/app/dashboard/hr/performance/goal-types/page.js
"use client";

import React, { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2, ChevronDown } from 'lucide-react';

export default function GoalTypesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Goal types registry mock data
  const [goalTypes] = useState([
    { id: 1, name: "Leadership Goals", desc: "Leadership and management development", status: "Active" },
    { id: 2, name: "Team Collaboration Goals", desc: "Objectives aimed at improving teamwork, communication, cross-functional collaboration...", status: "Active" },
    { id: 3, name: "Customer Service Goals", desc: "Customer service improvement goals", status: "Active" },
    { id: 4, name: "Quality Improvement Goals", desc: "Goals aimed at enhancing work quality, reducing errors, improving processes, and maintaining high...", status: "Active" },
    { id: 5, name: "Sales and Revenue Goals", desc: "Sales and growth targets", status: "Active" },
    { id: 6, name: "Project Goals", desc: "Project objectives and milestones", status: "Active" },
    { id: 7, name: "Learning and Training Goals", desc: "Goals related to acquiring new knowledge, developing new skills...", status: "Active" }
  ]);

  const filteredTypes = goalTypes.filter(g => 
    g.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Goal Types</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Goal Type</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start animate-fadeIn">
        
        {/* Creation Panel */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4 lg:sticky lg:top-24">
          <div>
            <h3 className="text-sm font-black text-gray-800 tracking-tight">Add New Goal Type</h3>
            <p className="text-[11px] text-gray-400 font-medium">Fill in the details to create a new goal type</p>
          </div>
          <form onSubmit={e => e.preventDefault()} className="space-y-4 text-xs font-bold text-gray-700">
            <div className="space-y-1.5">
              <label>Goal Type Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="e.g., Personal, Professional, Team" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]" />
            </div>
            <div className="space-y-1.5">
              <label>Description</label>
              <textarea rows="3" placeholder="Brief description of the goal type" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777] resize-none font-medium text-gray-600" />
            </div>
            <div className="space-y-1.5">
              <label>Status <span className="text-red-500">*</span></label>
              <select className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button className="w-full bg-[#0da777] hover:bg-[#0b9368] text-white py-2.5 rounded-xl shadow-sm cursor-pointer transition-all">Add Goal Type</button>
          </form>
        </div>

        {/* Goal Types Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search goal types..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 pl-9 pr-4 py-2 rounded-xl border border-gray-200/40 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white" 
              />
            </div>
            <select className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] max-sm:w-full">
              <option>All Statuses</option>
            </select>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="text-sm font-black text-gray-800 tracking-tight">Goal Types</h3>
              <p className="text-[11px] text-gray-400 font-medium">Manage goal types for employee performance tracking</p>
            </div>
            
            <div className="divide-y divide-gray-100 font-sans text-xs">
              {filteredTypes.map((g) => (
                <div key={g.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-500 border border-blue-100 flex items-center justify-center shadow-inner shrink-0">🎯</div>
                    <div className="space-y-1">
                      <h4 className="font-black text-gray-800 leading-tight">{g.name}</h4>
                      <p className="text-gray-400 font-medium leading-relaxed max-w-md text-[11px]">{g.desc}</p>
                      <button className="text-[10px] font-bold text-[#0da777] hover:underline flex items-center gap-0.5"><span>Show details</span> <ChevronDown size={10} /></button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 shrink-0 select-none">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100/40">Active</span>
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg"><Edit size={13} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={13} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}