// File: src/components/HRDashboardLayout.js or src/components/HRISidebar.js
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, Clock, CalendarDays, CreditCard, 
  Award, RefreshCw, Network, UserPlus, GraduationCap, 
  FileText, Video, HardDrive, Calendar, Image, ChevronRight, Menu,
  Search, LogOut, User
} from 'lucide-react';
import { logout } from '../app/services/auth';

export default function HRDashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('hr@example.com');
  const [isLoading, setIsLoading] = useState(true);
  
  const [activeTab, setActiveTab] = useState('Attendance Policies');
  const [expandedMenus, setExpandedMenus] = useState({ Attendance: true });

  useEffect(() => {
    function verifySession() {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (!token || !storedUser) {
          window.location.href = '/login';
          return;
        }

        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && parsedUser.role && parsedUser.role.toLowerCase() === 'hr') {
            setIsAuthorized(true);
            if (parsedUser.email) {
              setUserEmail(parsedUser.email);
            }
          } else {
            localStorage.clear();
            window.location.href = '/login';
          }
        } catch (error) {
          console.error("Session sync diagnostic exception:", error);
          window.location.href = '/login';
        } finally {
          setIsLoading(false);
        }
      }
    }
    verifySession();
  }, []);

  useEffect(() => {
    if (pathname === '/dashboard/hr/employees') {
      setActiveTab('Employees');
    } else if (pathname === '/dashboard/hr') {
      setActiveTab('Dashboard');
    } else if (pathname === '/dashboard/hr/attendance/policies') {
      setActiveTab('Attendance Policies');
    }
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (itemName, targetRoute) => {
    setActiveTab(itemName);
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
    router.push(targetRoute);
  };

  const toggleSubMenu = (menuName) => {
    if (isCollapsed) setIsCollapsed(false);
    setExpandedMenus(prev => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, route: '/dashboard/hr', hasSub: false },
    { name: 'Employees', icon: <Users size={18} />, route: '/dashboard/hr/employees', hasSub: false },
    { 
      name: 'Attendance', 
      icon: <Clock size={18} />, 
      route: '#', 
      hasSub: true,
      subOptions: [
        { name: 'Attendance Records', route: '/dashboard/hr/attendance/records' },
        { name: 'Timesheet', route: '/dashboard/hr/attendance/timesheet' },
        { name: 'Attendance Regularizations', route: '/dashboard/hr/attendance/regularizations' },
        { name: 'Shifts', route: '/dashboard/hr/attendance/shifts' },
        { name: 'Attendance Policies', route: '/dashboard/hr/attendance/policies' }
      ]
    },
    { name: 'Leave Management', icon: <CalendarDays size={18} />, route: '#', hasSub: true },
    { name: 'Payroll Management', icon: <CreditCard size={18} />, route: '#', hasSub: true },
    { name: 'Performance Management', icon: <Award size={18} />, route: '#', hasSub: true },
    { name: 'Employee Lifecycle', icon: <RefreshCw size={18} />, route: '#', hasSub: true },
    { name: 'Organization Structure', icon: <Network size={18} />, route: '#', hasSub: true },
    { name: 'Recruitment', icon: <UserPlus size={18} />, route: '#', hasSub: true },
    { name: 'Training & Development', icon: <GraduationCap size={18} />, route: '#', hasSub: true },
    { name: 'Documents & Contracts', icon: <FileText size={18} />, route: '#', hasSub: true },
    { name: 'Meetings', icon: <Video size={18} />, route: '#', hasSub: false },
    { name: 'Asset Management', icon: <HardDrive size={18} />, route: '#', hasSub: true },
    { name: 'Calendar', icon: <Calendar size={18} />, route: '#', hasSub: false },
    { name: 'Media Library', icon: <Image size={18} />, route: '#', hasSub: false },
  ];

  if (isLoading || !isAuthorized) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-sans text-xs font-bold text-gray-400">
        Authenticating secure HR workspace components...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] antialiased relative">
      {!isCollapsed && (
        <div onClick={() => setIsCollapsed(true)} className="fixed inset-0 bg-black/40 z-40 md:hidden" />
      )}

      {/* Structured Modern Navigation Sidebar Layout */}
      <aside className={`bg-white h-screen flex flex-col fixed left-0 top-0 border-r border-gray-100/80 z-50 select-none font-sans overflow-x-hidden transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[75px]' : 'w-[290px] max-md:shadow-[5px_0_25px_rgba(0,0,0,0.08)]'}`}>
        <div className={`h-20 flex items-center border-b border-gray-50 shrink-0 px-4 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <div className="flex items-center gap-2.5 min-w-[120px] animate-fadeIn">
              <div className="flex items-center h-6 shrink-0">
                <div className="w-[6px] h-6 bg-[#0da777] rounded-full"></div>
                <div className="w-2.5 h-[4px] bg-[#0da777] -mx-[1px]"></div>
                <div className="w-[6px] h-6 bg-[#1e293b] rounded-full"></div>
              </div>
              <span className="text-2xl font-black text-[#1e293b] tracking-tight ml-0.5">I-<span className="text-[#0da777]">HRM</span></span>
            </div>
          )}
          <button onClick={() => setIsCollapsed(!isCollapsed)} className={`p-2 hover:bg-slate-50 border border-gray-100 rounded-xl transition-all text-gray-500 cursor-pointer active:scale-95 ${isCollapsed ? 'bg-slate-50 border-gray-200 text-[#0da777]' : ''}`}><Menu size={16} /></button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto scrollbar-none">
          {navItems.map((item, idx) => {
            const isMenuSelected = activeTab === item.name || (item.subOptions && item.subOptions.some(sub => sub.name === activeTab));
            const isExpanded = !!expandedMenus[item.name];

            return (
              <div key={idx} className="w-full relative">
                <button
                  onClick={() => item.hasSub ? toggleSubMenu(item.name) : handleNavigation(item.name, item.route)}
                  className={`w-full flex items-center px-3 py-3 text-[13px] font-bold rounded-xl transition-all duration-200 cursor-pointer ${isCollapsed ? 'justify-center' : 'justify-between'} ${isMenuSelected ? 'text-[#0da777] bg-[#0da777]/5' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`shrink-0 ${isMenuSelected ? 'text-[#0da777]' : 'text-gray-400'}`}>{item.icon}</div>
                    <span className={`transition-opacity duration-200 whitespace-nowrap truncate ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100 w-auto block'}`}>{item.name}</span>
                  </div>
                  {!isCollapsed && (
                    item.hasSub ? (
                      <ChevronRight size={14} className={`text-gray-400 transition-transform duration-200 ml-2 shrink-0 ${isExpanded ? 'rotate-90 text-[#0da777]' : ''}`} />
                    ) : item.name !== 'Dashboard' && item.name !== 'Employees' && item.name !== 'Meetings' && item.name !== 'Calendar' && item.name !== 'Media Library' ? (
                      <ChevronRight size={13} className="text-gray-400 ml-2 shrink-0" />
                    ) : null
                  )}
                </button>

                {/* Sub-menu Navigation Links Generation Stream */}
                {!isCollapsed && item.hasSub && isExpanded && item.subOptions && (
                  <div className="mt-1 relative pl-6 space-y-0.5 animate-fadeIn">
                    {/* Left Connector Align Border */}
                    <div className="absolute left-[22px] top-0 bottom-4 w-[1px] bg-gray-100" />
                    
                    {item.subOptions.map((sub, subIdx) => {
                      const isSubActive = activeTab === sub.name;
                      return (
                        <button
                          key={subIdx}
                          onClick={() => handleNavigation(sub.name, sub.route)}
                          className={`w-full text-left py-2.5 px-4 text-[13px] font-medium transition-all relative cursor-pointer rounded-xl ${
                            isSubActive 
                              ? 'text-[#0da777] font-bold bg-[#0da777]/5' 
                              : 'text-gray-600 hover:bg-gray-50/80 hover:text-gray-900'
                          }`}
                        >
                          {/* Active Indicator Bar Element */}
                          {isSubActive && (
                            <div className="absolute left-0 top-2.5 bottom-2.5 w-[3px] bg-[#0da777] rounded-full" />
                          )}
                          <span className="truncate block">{sub.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      <div className={`transition-all duration-300 ease-in-out pl-[75px] ${isCollapsed ? 'md:pl-[75px]' : 'md:pl-[290px]'}`}>
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-20 shadow-[0_1px_4px_rgba(0,0,0,0.003)]">
          <div className="flex items-center gap-4 select-none">
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 hover:bg-slate-50 border border-gray-100 rounded-xl transition-all text-gray-500 cursor-pointer active:scale-95 md:hidden"><Menu size={16} /></button>
            <span className="text-sm font-black text-gray-800 tracking-tight">Dashboard Overview</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative w-64 hidden sm:block">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Search..." className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all" />
            </div>

            <button className="flex items-center gap-2 bg-slate-50 border border-gray-200/40 px-3.5 py-2 rounded-xl text-xs font-bold text-gray-700 select-none">
              <span>English</span> <span>🇬🇧</span>
            </button>

            <div className="h-5 w-[1px] bg-gray-200"></div>

            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-3 cursor-pointer focus:outline-none group select-none">
                <div className="w-9 h-9 rounded-full bg-[#0da777]/10 border border-[#0da777]/20 flex items-center justify-center overflow-hidden transition-transform active:scale-95">
                  <span className="text-xs font-black text-[#0da777] uppercase">HR</span>
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.05)] py-2 z-50 animate-fadeIn overflow-hidden">
                  <div className="px-5 py-3 border-b border-gray-50">
                    <h4 className="text-sm font-black text-gray-800 leading-none">HR Manager</h4>
                    <p className="text-xs font-medium text-gray-400 mt-1.5 truncate">{userEmail}</p>
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    <button onClick={() => setIsProfileOpen(false)} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-600 hover:bg-slate-50 hover:text-gray-900 rounded-xl transition-colors text-left cursor-pointer">
                      <User size={16} className="text-gray-400" />
                      <span>Profile Options</span>
                    </button>
                    <button onClick={() => { logout(); window.location.href = '/login'; }} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50/60 rounded-xl transition-colors text-left cursor-pointer">
                      <LogOut size={16} className="text-red-400" />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="w-full min-w-0 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}