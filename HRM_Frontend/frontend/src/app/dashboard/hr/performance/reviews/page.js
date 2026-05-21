// File: src/app/dashboard/hr/performance/reviews/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, RefreshCw, Trash2, FileText } from 'lucide-react';

export default function EmployeeReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');

  const [reviews] = useState([
    { id: 1, empName: "Employee", empEmail: "employee@example.com", empAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Monthly Performance Review", date: "2025-03-01", rating: 3.5, status: "Completed" },
    { id: 2, empName: "Employee", empEmail: "employee@example.com", empAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Quarterly Business Review", date: "2025-03-01", rating: 4.0, status: "Completed" },
    { id: 3, empName: "Amie Jerde", empEmail: "dimitri21@example.com", empAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Monthly Performance Review", date: "2025-03-01", rating: 4.2, status: "Completed" },
    { id: 4, empName: "Amie Jerde", empEmail: "dimitri21@example.com", empAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Quarterly Business Review", date: "2025-03-01", rating: 3.8, status: "Completed" },
    { id: 5, empName: "Caitlyn Harvey", empEmail: "ugleichner@example.com", empAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Monthly Performance Review", date: "2025-03-01", rating: null, status: "In Progress" },
    { id: 6, empName: "Caitlyn Harvey", empEmail: "ugleichner@example.com", empAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Quarterly Business Review", date: "2025-03-01", rating: null, status: "In Progress" },
    { id: 7, empName: "Burdette Rath", empEmail: "lakin.rahsaan@example.net", empAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Monthly Performance Review", date: "2025-03-01", rating: null, status: "Scheduled" },
    { id: 8, empName: "Burdette Rath", empEmail: "lakin.rahsaan@example.net", empAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", revName: "Manager", revEmail: "manager@example.com", revAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", cycle: "Quarterly Business Review", date: "2025-03-01", rating: null, status: "Scheduled" },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-50 text-emerald-600 border-emerald-100/30';
      case 'In Progress': return 'bg-amber-50 text-amber-600 border-amber-100/30';
      case 'Scheduled': return 'bg-blue-50 text-blue-600 border-blue-100/30';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Employee Reviews</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Schedule Review</span>
        </button>
      </div>

      {/* Query Bar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 w-full">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search reviews..." 
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

      {/* Reviews Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Employee</th>
                <th className="py-4 px-6">Reviewer</th>
                <th className="py-4 px-6">Review Cycle</th>
                <th className="py-4 px-6">Review Date</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-center w-40">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {reviews.map((r, index) => (
                <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img src={r.empAvatar} alt={r.empName} className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                      <div>
                        <span className="block font-bold text-gray-800">{r.empName}</span>
                        <span className="block text-[10px] text-gray-400 font-medium">{r.empEmail}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img src={r.revAvatar} alt={r.revName} className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                      <div>
                        <span className="block font-bold text-gray-800">{r.revName}</span>
                        <span className="block text-[10px] text-gray-400 font-medium">{r.revEmail}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{r.cycle}</td>
                  <td className="py-4 px-6 text-gray-500 font-medium">{r.date}</td>
                  <td className="py-4 px-6 font-bold text-gray-800">{r.rating || '-'}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider border ${getStatusStyle(r.status)}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg"><Eye size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg"><FileText size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg"><RefreshCw size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex items-center justify-between select-none">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Showing 1 to {reviews.length} of 8 reviews</span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400"><ChevronLeft size={14} /></button>
            <button className="w-7 h-7 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black">1</button>
            <button className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}