// File: src/app/dashboard/hr/leave/types/page.js
"use client";

import React, { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2, ChevronDown } from 'lucide-react';

export default function LeaveTypesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data representing Leave Types configuration
  const [typesData] = useState([
    { id: 1, title: "Annual Leave", desc: "Yearly vacation leave for rest and recreation", days: "21 Days", type: "Paid", color: "bg-emerald-500", status: "Active" },
    { id: 2, title: "Sick Leave", desc: "Medical leave for illness or health-related issues. Ensures employees can recover properly without structural penalties.", days: "10 Days", type: "Paid", color: "bg-red-500", status: "Active" },
    { id: 3, title: "Emergency Leave", desc: "Urgent leave for unexpected personal or family emergencies", days: "5 Days", type: "Paid", color: "bg-amber-500", status: "Active" },
    { id: 4, title: "Compensatory Leave", desc: "Time off provided in exchange for overtime or extra working hours.", days: "12 Days", type: "Paid", color: "bg-sky-500", status: "Active" },
    { id: 5, title: "Personal Leave", desc: "Personal time off for individual matters and commitments", days: "5 Days", type: "Unpaid", color: "bg-lime-500", status: "Active" },
    { id: 6, title: "Marriage Leave", desc: "Special leave granted for wedding ceremonies and related functions.", days: "7 Days", type: "Paid", color: "bg-orange-500", status: "Active" }
  ]);

  const filteredTypes = typesData.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start animate-fadeIn">
      
      {/* Creation Left Side Form Panel */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-left space-y-4">
        <div>
          <h3 className="text-sm font-black text-gray-800 tracking-tight">Add New Leave Type</h3>
          <p className="text-[11px] text-gray-400 font-medium">Fill in the details to create a new leave type configuration</p>
        </div>
        <form onSubmit={e => e.preventDefault()} className="space-y-4 text-xs font-bold text-gray-700">
          <div className="space-y-1.5">
            <label>Leave Type Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="e.g., Casual Leave, Sick Leave" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]" />
          </div>
          <div className="space-y-1.5">
            <label>Description</label>
            <textarea rows="3" placeholder="Brief description of the leave policies" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777] resize-none font-medium text-gray-600" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label>Max Days / Year <span className="text-red-500">*</span></label>
              <input type="number" defaultValue="0" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]" />
            </div>
            <div className="space-y-1.5">
              <label>Color <span className="text-red-500">*</span></label>
              <div className="flex items-center gap-2 border border-gray-200/60 bg-slate-50 px-2.5 py-1 rounded-xl">
                <span className="w-5 h-5 rounded bg-blue-600 block shrink-0 shadow-inner"></span>
                <input type="text" defaultValue="#3B82F6" className="w-full bg-transparent outline-none uppercase text-[11px] tracking-wider" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50/50 border border-gray-100 rounded-xl select-none">
            <div>
              <span className="block font-bold text-gray-800">Paid Leave</span>
              <span className="block text-[10px] text-gray-400 font-medium">Employees will receive salary for these days</span>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0da777] border-gray-300 rounded focus:ring-[#0da777]" />
          </div>
          <div className="space-y-1.5">
            <label>Status <span className="text-red-500">*</span></label>
            <select className="w-full bg-slate-50 border border-gray-200/60 px-3 py-2.5 rounded-xl outline-none focus:border-[#0da777]">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <button className="w-full bg-[#0da777] hover:bg-[#0b9368] text-white py-2.5 rounded-xl shadow-sm cursor-pointer transition-all">Add Leave Type</button>
        </form>
      </div>

      {/* Right Content Stream List Panel */}
      <div className="lg:col-span-2 space-y-4 text-left">
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search leave types..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-9 pr-4 py-2 rounded-xl border border-gray-200/40 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white" 
            />
          </div>
          <select className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] max-sm:w-full">
            <option>All Statuses</option>
          </select>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-black text-gray-800 tracking-tight">Leave Types Registry</h3>
            <p className="text-[11px] text-gray-400 font-medium">Manage leave policies and maximum allocated day allocation limits</p>
          </div>
          
          <div className="divide-y divide-gray-100 font-sans text-xs">
            {filteredTypes.map((type) => (
              <div key={type.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 justify-between flex-wrap sm:flex-nowrap">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-xl ${type.color} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>📋</div>
                  <div className="space-y-1">
                    <h4 className="font-black text-gray-800 leading-tight hover:text-[#0da777] cursor-pointer transition-colors">{type.title}</h4>
                    <p className="text-gray-400 font-medium leading-relaxed max-w-md text-[11px]">{type.desc}</p>
                    <button className="text-[10px] font-bold text-[#0da777] hover:underline flex items-center gap-0.5"><span>Show details</span> <ChevronDown size={10} /></button>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 shrink-0 max-sm:w-full max-sm:justify-between max-sm:pt-2 select-none">
                  <div className="text-right max-sm:text-left">
                    <span className="block font-black text-gray-800 text-sm tracking-tight">{type.days}</span>
                    <span className="block text-[10px] text-gray-400 font-medium">Allowed Per Year</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${type.type === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>{type.type}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase">Active</span>
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
  );
}