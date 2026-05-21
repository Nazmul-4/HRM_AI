"use client";

import React, { useEffect, useState } from 'react';
import { Bell, Search } from 'lucide-react';
import { getStoredSession } from '../services/auth';

export default function Topbar() {
  const [userEmail, setUserEmail] = useState('User Context');
  const [userRole, setUserRole] = useState('Employee');

  useEffect(() => {
    const session = getStoredSession();
    if (session?.user) {
      setUserEmail(session.user.email);
      setUserRole(session.user.role);
    }
  }, []);

  return (
    <header className="h-16 bg-white border-b border-gray-100 fixed top-0 right-0 left-64 flex items-center justify-between px-6 z-10 shadow-[0_1px_5px_rgba(0,0,0,0.005)] select-none">
      {/* Omni-action Search Input Bar */}
      <div className="relative w-64">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search actions or metrics..." 
          className="w-full bg-slate-50 pl-9 pr-4 py-1.5 rounded-lg border border-gray-200/60 text-xs font-medium text-gray-700 focus:outline-none focus:border-[#0da777]"
        />
      </div>

      {/* Action System & Profile Context */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 cursor-pointer">
          <Bell size={19} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#0da777] rounded-full"></span>
        </button>

        <div className="h-6 w-[1px] bg-gray-100"></div>

        {/* User Badge Details */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800">{userEmail}</p>
            <p className="text-[10px] font-bold text-[#0da777] tracking-wider uppercase mt-0.5">{userRole}</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-[#0da777]/10 text-[#0da777] font-bold text-sm flex items-center justify-center uppercase">
            {userEmail.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}
