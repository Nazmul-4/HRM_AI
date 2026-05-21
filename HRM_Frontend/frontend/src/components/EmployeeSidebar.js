// File: src/components/EmployeeSidebar.js
"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Clock, CalendarDays, CreditCard, 
  Award, RefreshCw, Network, UserPlus, GraduationCap, 
  FileText, Video, HardDrive, Calendar, Image, ChevronRight, Menu
} from 'lucide-react';

export default function EmployeeSidebar({ isCollapsed = false, setIsCollapsed }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubMenu = (menuName) => {
    if (isCollapsed && typeof setIsCollapsed === 'function') {
      setIsCollapsed(false);
    }
    setExpandedMenus(prev => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const handleToggleSidebar = () => {
    if (typeof setIsCollapsed === 'function') {
      setIsCollapsed(!isCollapsed);
    }
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, hasSub: false },
    { name: 'Employees', icon: <Users size={18} />, hasSub: false },
    { name: 'Attendance', icon: <Clock size={18} />, hasSub: true },
    { name: 'Leave Management', icon: <CalendarDays size={18} />, hasSub: true },
    { name: 'Payroll Management', icon: <CreditCard size={18} />, hasSub: true },
    { name: 'Performance Management', icon: <Award size={18} />, hasSub: true },
    { name: 'Employee Lifecycle', icon: <RefreshCw size={18} />, hasSub: true },
    { name: 'Organization Structure', icon: <Network size={18} />, hasSub: true },
    { name: 'Recruitment', icon: <UserPlus size={18} />, hasSub: true },
    { name: 'Training & Development', icon: <GraduationCap size={18} />, hasSub: true },
    { name: 'Documents & Contracts', icon: <FileText size={18} />, hasSub: true },
    { name: 'Meetings', icon: <Video size={18} />, hasSub: false },
    { name: 'Asset Management', icon: <HardDrive size={18} />, hasSub: true },
    { name: 'Calendar', icon: <Calendar size={18} />, hasSub: false },
    { name: 'Media Library', icon: <Image size={18} />, hasSub: false },
  ];

  return (
    <aside 
      className={`bg-white h-screen flex flex-col fixed left-0 top-0 border-r border-gray-100/80 z-50 select-none font-sans overflow-x-hidden transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-[75px]' : 'w-[290px] max-md:shadow-[5px_0_25px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className={`h-20 flex items-center border-b border-gray-50 shrink-0 px-4 transition-all duration-300 ${
        isCollapsed ? 'justify-center' : 'justify-between'
      }`}>
        {!isCollapsed && (
          <div className="flex items-center gap-2.5 min-w-[120px] animate-fadeIn">
            <div className="flex items-center h-6 shrink-0">
              <div className="w-[6px] h-6 bg-[#0da777] rounded-full"></div>
              <div className="w-2.5 h-[4px] bg-[#0da777] -mx-[1px]"></div>
              <div className="w-[6px] h-6 bg-[#1e293b] rounded-full"></div>
            </div>
            <span className="text-2xl font-black text-[#1e293b] tracking-tight ml-0.5">
              I-<span className="text-[#0da777]">HRM</span>
            </span>
          </div>
        )}
        <button 
          onClick={handleToggleSidebar}
          className={`p-2 hover:bg-slate-50 border border-gray-100 rounded-xl transition-all text-gray-500 cursor-pointer active:scale-95 ${
            isCollapsed ? 'bg-slate-50 border-gray-200 text-[#0da777]' : ''
          }`}
        >
          <Menu size={16} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto scrollbar-none">
        {navItems.map((item, idx) => {
          const isSelected = activeTab === item.name;
          const isExpanded = !!expandedMenus[item.name];

          return (
            <div key={idx} className="w-full relative group">
              <button
                onClick={() => {
                  setActiveTab(item.name);
                  if (item.hasSub) {
                    toggleSubMenu(item.name);
                  }
                  if (!item.hasSub && window.innerWidth < 768) {
                    setIsCollapsed(true);
                  }
                }}
                className={`w-full flex items-center px-3 py-3 text-[13px] font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                  isCollapsed ? 'justify-center' : 'justify-between'
                } ${
                  isSelected 
                    ? 'bg-[#0da777]/5 text-[#0da777]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`shrink-0 ${isSelected ? 'text-[#0da777]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {item.icon}
                  </div>
                  <span className={`transition-opacity duration-200 whitespace-nowrap truncate ${
                    isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100 w-auto block'
                  }`}>
                    {item.name}
                  </span>
                </div>
                
                {!isCollapsed && item.hasSub && (
                  <ChevronRight 
                    size={13} 
                    className={`text-gray-400 transition-transform duration-200 ml-2 shrink-0 ${isExpanded ? 'rotate-90 text-[#0da777]' : ''}`} 
                  />
                )}
              </button>

              {!isCollapsed && item.hasSub && isExpanded && (
                <div className="mt-1 ml-8 pl-3 border-l border-gray-100 space-y-1 bg-slate-50/40 rounded-r-xl py-1.5">
                  <button onClick={() => window.innerWidth < 768 && setIsCollapsed(true)} className="w-full text-left py-1.5 px-2.5 text-[11px] font-bold text-gray-400 hover:text-[#0da777] cursor-pointer block">Overview Log</button>
                  <button onClick={() => window.innerWidth < 768 && setIsCollapsed(true)} className="w-full text-left py-1.5 px-2.5 text-[11px] font-bold text-gray-400 hover:text-[#0da777] cursor-pointer block">Setup Parameters</button>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}