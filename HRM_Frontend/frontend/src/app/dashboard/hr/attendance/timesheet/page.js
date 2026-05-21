// File: src/app/dashboard/hr/attendance/timesheet/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, Edit, Check, X, Trash2 } from 'lucide-react';

export default function TimesheetPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');
  const [showFilters, setShowFilters] = useState(false);

  // High-fidelity mock state array cloning the user interface records dataset
  const [timesheets] = useState([
    { id: 1, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", date: "2025-08-22", hours: "7.50h", project: "Testing", status: "Pending", submittedOn: "2025-09-19" },
    { id: 2, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", date: "2025-08-19", hours: "7.00h", project: "Documentation", status: "Pending", submittedOn: "2025-09-19" },
    { id: 3, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", date: "2025-08-13", hours: "8.50h", project: "Bug Fixes", status: "Pending", submittedOn: "2025-09-19" },
    { id: 4, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", date: "2025-08-07", hours: "7.50h", project: "Database Optimization", status: "Pending", submittedOn: "2025-09-19" },
    { id: 5, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", date: "2025-08-04", hours: "7.00h", project: "Mobile App", status: "Pending", submittedOn: "2025-09-19" },
    { id: 6, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", date: "2025-08-01", hours: "6.50h", project: "Website Development", status: "Pending", submittedOn: "2025-09-19" },
    { id: 7, name: "Rosemary Okuneva", role: "Recruiter", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", date: "2025-08-27", hours: "8.00h", project: "Website Development", status: "Pending", submittedOn: "2025-09-19" },
    { id: 8, name: "Rosemary Okuneva", role: "Recruiter", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", date: "2025-08-21", hours: "7.00h", project: "Documentation", status: "Pending", submittedOn: "2025-09-19" },
    { id: 9, name: "Rosemary Okuneva", role: "Recruiter", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", date: "2025-08-18", hours: "6.50h", project: "Code Review", status: "Pending", submittedOn: "2025-09-19" },
    { id: 10, name: "Rosemary Okuneva", role: "Recruiter", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", date: "2025-08-15", hours: "8.50h", project: "Bug Fixes", status: "Pending", submittedOn: "2025-09-19" }
  ]);

  const getProjectBadgeColor = (project) => {
    switch (project) {
      case 'Testing': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'Documentation': return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'Bug Fixes': return 'bg-pink-50 text-pink-600 border-pink-100';
      case 'Database Optimization': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Mobile App': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    }
  };

  const filteredTimesheets = timesheets.filter(ts => 
    ts.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ts.project.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Top Breadcrumb Nav Element */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Attendance</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Timesheet</span>
      </div>

      {/* Main Core Section Title Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Timesheet</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Timesheet</span>
        </button>
      </div>

      {/* Functional Query Search Control Shell Container */}
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
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>

      {/* Primary Data Responsive Spread Matrix Board */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto min-w-0">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Employee</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Hours</th>
                <th className="py-4 px-6">Project</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Submitted On</th>
                <th className="py-4 px-6 text-center w-40">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {filteredTimesheets.map((ts, index) => (
                <tr key={ts.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-3.5 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  
                  {/* Account Identity Compound Profile Frame */}
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={ts.avatar} 
                        alt={ts.name} 
                        className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm select-none"
                      />
                      <span className="font-bold text-gray-800 hover:text-[#0da777] transition-colors cursor-pointer">{ts.name}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-6 text-gray-500 font-medium">{ts.date}</td>
                  <td className="py-3.5 px-6 text-blue-600 font-bold">{ts.hours}</td>
                  
                  {/* Styled Project Categorization Badge */}
                  <td className="py-3.5 px-6">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getProjectBadgeColor(ts.project)}`}>
                      {ts.project}
                    </span>
                  </td>

                  {/* High-Fidelity Soft Amber Status Chip Badge */}
                  <td className="py-3.5 px-6">
                    <span className="inline-flex px-2.5 py-0.5 rounded bg-amber-50 text-amber-600 text-[10px] font-black tracking-wide uppercase border border-amber-100/50">
                      {ts.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-6 text-gray-400 font-medium">{ts.submittedOn}</td>

                  {/* Actions Operations Control Segment Trigger Cluster Rows */}
                  <td className="py-3.5 px-6 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button title="View Details" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Eye size={14} />
                      </button>
                      <button title="Edit Record" className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Edit size={14} />
                      </button>
                      <button title="Approve Submission" className="p-1.5 text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Check size={14} />
                      </button>
                      <button title="Reject Submission" className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <X size={14} />
                      </button>
                      <button title="Delete Record" className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Global Standard Table Grid Foot-Pagination Assembly */}
        <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Showing 1 to {filteredTimesheets.length} of 254 time entries
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
              26
            </button>
            <button className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-pointer">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}