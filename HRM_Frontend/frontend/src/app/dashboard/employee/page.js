// File: src/app/dashboard/employee/page.js
"use client";

import React from 'react';
import { 
  RefreshCw, CheckCircle2, AlertTriangle, AlertCircle, 
  Clock, LogIn, LogOut, Bell
} from 'lucide-react';

export default function EmployeeDashboardView() {
  const metricCards = [
    { title: "Total Awards", value: "2", color: "text-emerald-500", bgColor: "bg-emerald-50", icon: <CheckCircle2 size={18} /> },
    { title: "Total Warnings", value: "3", color: "text-amber-500", bgColor: "bg-amber-50", icon: <AlertTriangle size={18} /> },
    { title: "Total Complaints", value: "0", color: "text-red-500", bgColor: "bg-red-50", icon: <AlertCircle size={18} /> }
  ];

  const announcements = [
    { title: "Welcome to New Financial Year 2025", type: "Company News", date: "Sep 19, 2025", badge: "High Priority" },
    { title: "Updated Employee Handbook and Policies", type: "Policy Updates", date: "Sep 19, 2025", badge: "High Priority" },
    { title: "Annual Performance Review Process", type: "HR Updates", date: "Sep 19, 2025", badge: "High Priority" },
    { title: "New Employee Benefits Program Launch", type: "Benefits", date: "Sep 19, 2025", badge: null }
  ];

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 select-none font-sans bg-[#f8fafc]">
      
      {/* View Title Control Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Dashboard</h2>
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 active:scale-[0.99] transition-all cursor-pointer">
          <RefreshCw size={13} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Top Main Announcement Greetings Banner */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.005)] text-center space-y-2">
        <h1 className="text-2xl font-black text-gray-800 tracking-tight">Welcome, Employee!</h1>
        <p className="text-sm font-semibold text-gray-400">Stay updated with company announcements and meetings</p>
      </div>

      {/* 3-Grid Statistics Ribbon Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricCards.map((card, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex items-center justify-between">
            <div className="space-y-1.5">
              <span className="block text-xs font-bold text-gray-400 tracking-wide">{card.title}</span>
              <h3 className="text-3xl font-black text-gray-800 tracking-tight">{card.value}</h3>
            </div>
            <div className={`w-10 h-10 rounded-full ${card.bgColor} ${card.color} flex items-center justify-center shadow-sm shrink-0`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Integrated Core Attendance Clocking Engine Workspace Box */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.005)] text-center space-y-6">
        <h3 className="text-base font-black text-gray-800 tracking-tight">Attendance</h3>
        
        {/* Light Blue Tracking Bar Container */}
        <div className="bg-blue-50/60 border border-blue-100/40 rounded-xl py-3.5 px-4 max-w-4xl mx-auto text-sm font-bold text-blue-600 flex items-center justify-center gap-2">
          <Clock size={16} />
          <span>Morning Shift 09:00 to 18:00</span>
        </div>

        {/* Parallel Dual Interaction Buttons Block */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-xl mx-auto">
          <button className="flex-1 min-w-[180px] bg-[#0da777] text-white py-3 px-6 rounded-xl text-sm font-bold hover:bg-[#0b9368] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] cursor-pointer">
            <LogIn size={16} />
            <span>Clock In</span>
          </button>
          <button disabled className="flex-1 min-w-[180px] bg-slate-100 border border-slate-200/60 text-slate-400 py-3 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-inner select-none cursor-not-allowed">
            <LogOut size={16} />
            <span>Clock Out</span>
          </button>
        </div>

        {/* Dynamic Static Matrix Logger Status Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
          <div className="bg-emerald-50/40 border border-emerald-100/50 rounded-2xl p-4 text-center space-y-1">
            <span className="block text-xs font-bold text-emerald-600/80 uppercase tracking-wider">Clock In Time</span>
            <span className="block text-xl font-black text-emerald-700 tracking-tight">09:25</span>
            <span className="block text-[11px] font-bold text-emerald-500/70">Today</span>
          </div>
          <div className="bg-red-50/40 border border-red-100/50 rounded-2xl p-4 text-center space-y-1">
            <span className="block text-xs font-bold text-red-500/80 uppercase tracking-wider">Clock Out Time</span>
            <span className="block text-xl font-black text-red-700 tracking-tight">18:00</span>
            <span className="block text-[11px] font-bold text-red-500/70">Today</span>
          </div>
        </div>
      </div>

      {/* Announcements and Grid Content Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col min-h-[380px]">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2"><Bell size={16} className="text-gray-400" /> Recent Announcements</h3>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-gray-500 font-bold text-[10px] flex items-center justify-center">5</span>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1 scrollbar-none">
            {announcements.map((ann, idx) => (
              <div key={idx} className="p-4 border border-gray-50 rounded-xl bg-slate-50/30 flex justify-between items-start hover:border-gray-100 transition-colors">
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-bold text-gray-800 leading-tight">{ann.title}</h4>
                    {ann.badge && <span className="px-2 py-0.5 rounded bg-red-50 text-red-500 border border-red-100/50 text-[9px] font-extrabold uppercase tracking-wider">{ann.badge}</span>}
                  </div>
                  <p className="text-xs font-semibold text-gray-400">{ann.type} • <span className="text-gray-300 font-medium">{ann.date}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col min-h-[380px] justify-center items-center text-center">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-gray-400">Recent Meetings</h4>
            <p className="text-xs font-semibold text-gray-300">No recent meetings scheduled</p>
          </div>
        </div>
      </div>

    </div>
  );
}