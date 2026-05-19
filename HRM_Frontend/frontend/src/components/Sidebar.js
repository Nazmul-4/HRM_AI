"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Clock, FileText, Settings, LogOut, Award } from 'lucide-react';
import { logout } from '../services/auth'; // Points to your src/services/auth.js

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Employee Setup', icon: <Users size={18} /> },
    { name: 'Attendance', icon: <Clock size={18} /> },
    { name: 'Payroll & Salary', icon: <FileText size={18} /> },
    { name: 'Performance', icon: <Award size={18} /> },
    { name: 'System Settings', icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 bg-[#1e293b] text-slate-300 h-screen flex flex-col fixed left-0 top-0 border-r border-slate-800 z-20 select-none">
      {/* Brand Identity Logo System */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-[#111827]">
        <div className="flex items-center gap-1.5">
          <div className="w-[6px] h-6 bg-[#0da777] rounded-full"></div>
          <div className="w-2.5 h-[4px] bg-[#0da777] -mx-[1px]"></div>
          <div className="w-[6px] h-6 bg-white rounded-full"></div>
          <span className="text-xl font-bold text-white tracking-tight ml-1">RM</span>
        </div>
      </div>

      {/* Navigation Tree */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              idx === 0 
                ? 'bg-[#0da777] text-white shadow-md shadow-[#0da777]/10' 
                : 'hover:bg-slate-800 hover:text-white text-slate-400'
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Persistent Logout Footer Anchor */}
      <div className="p-4 border-t border-slate-800 bg-[#111827]/40">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all cursor-pointer"
        >
          <LogOut size={18} />
          <span>Exit System</span>
        </button>
      </div>
    </aside>
  );
}