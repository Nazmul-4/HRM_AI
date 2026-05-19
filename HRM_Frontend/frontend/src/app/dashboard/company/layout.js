"use client";

import React, { useEffect, useState, useRef } from 'react';
import CompanySidebar from '../../../components/CompanySidebar';
import { Search, Menu, User, LogOut } from 'lucide-react';
import { logout } from '../../services/auth';

export default function CompanyDashboardLayout({ children }) {
  const dropdownRef = useRef(null);
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('company@example.com');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function verifySession() {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        // REPAIR CORE: Catch slow storage operations by allowing a 200ms fallback retry window
        if (!token || !storedUser) {
          setTimeout(() => {
            const retryUser = localStorage.getItem('user');
            const retryToken = localStorage.getItem('token');
            if (retryToken && retryUser) {
              processUser(retryUser);
            } else {
              window.location.href = '/login';
            }
          }, 200);
          return;
        }

        processUser(storedUser);
      }
    }

    function processUser(userData) {
      try {
        const parsedUser = JSON.parse(userData);
        
        // Comprehensive case-insensitive verification string check
        if (parsedUser && parsedUser.role && parsedUser.role.toLowerCase() === 'company') {
          setIsAuthorized(true);
          if (parsedUser.email) {
            setUserEmail(parsedUser.email);
          }
        } else {
          console.warn("Unauthorized user role reached company layout:", parsedUser?.role);
          localStorage.clear();
          window.location.href = '/login';
        }
      } catch (error) {
        console.error("Session profile parsing failure:", error);
        window.location.href = '/login';
      } finally {
        setIsLoading(false);
      }
    }

    verifySession();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoutAction = () => {
    logout();
    window.location.href = '/login';
  };

  if (isLoading || !isAuthorized) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-sans text-xs font-bold text-gray-400">
        Securing authorization workspace parameters...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] antialiased relative">
      {!isCollapsed && (
        <div 
          onClick={() => setIsCollapsed(true)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden"
        />
      )}

      <CompanySidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div 
        className={`transition-all duration-300 ease-in-out pl-[75px] ${
          isCollapsed ? 'md:pl-[75px]' : 'md:pl-[290px]'
        }`}
      >
        {/* Unified Custom Top Navigation Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-20 shadow-[0_1px_4px_rgba(0,0,0,0.003)]">
          <div className="flex items-center gap-4 select-none">
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-slate-50 border border-gray-100 rounded-xl transition-all text-gray-500 cursor-pointer active:scale-95 md:hidden"
            >
              <Menu size={16} />
            </button>
            <span className="text-sm font-black text-gray-800 tracking-tight">
              Dashboard
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative w-64 hidden sm:block">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all"
              />
            </div>

            <button className="flex items-center gap-2 bg-slate-50 border border-gray-200/40 px-3.5 py-2 rounded-xl text-xs font-bold text-gray-700 select-none">
              <span>English</span> <span>🇬🇧</span>
            </button>

            <div className="h-5 w-[1px] bg-gray-200"></div>

            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 cursor-pointer focus:outline-none group select-none"
              >
                <div className="w-9 h-9 rounded-full bg-[#0da777]/10 border border-[#0da777]/20 flex items-center justify-center overflow-hidden transition-transform active:scale-95">
                  <span className="text-xs font-black text-[#0da777] uppercase">CO</span>
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.05)] py-2 z-50 animate-fadeIn overflow-hidden">
                  <div className="px-5 py-3 border-b border-gray-50">
                    <h4 className="text-sm font-black text-gray-800 leading-none">Company</h4>
                    <p className="text-xs font-medium text-gray-400 mt-1.5 truncate">{userEmail}</p>
                  </div>

                  <div className="p-1.5 space-y-0.5">
                    <button 
                      onClick={() => setIsProfileOpen(false)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-600 hover:bg-slate-50 hover:text-gray-900 rounded-xl transition-colors text-left cursor-pointer"
                    >
                      <User size={16} className="text-gray-400" />
                      <span>Profile</span>
                    </button>
                    
                    <button 
                      onClick={handleLogoutAction}
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50/60 rounded-xl transition-colors text-left cursor-pointer"
                    >
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