// File: src/app/dashboard/hr/attendance/records/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function AttendanceRecordsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedEmployee, setSelectedEmployee] = useState('All Employees');
  const [showFilters, setShowFilters] = useState(true);

  // Dynamic Date Generation for Dropdowns
  const monthsList = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear(); // 2026
  const yearsList = Array.from({ length: 6 }, (_, i) => String(currentYear - i)); // [2026, 2025, 2024, 2023, 2022, 2021]

  // Modal State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    employee: 'Employee',
    date: '2026-05-08',
    clockIn: '09:00',
    clockOut: '18:00',
    isHoliday: false,
    notes: 'Regular attendance'
  });

  const staffRecords = [
    { id: 1, name: "Rosemary Okuneva", role: "Recruiter", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", days: ["1/2", "off", "off", "present", "present", "present", "present", "present", "off", "off", "1/2", "1/2", "absent", "present", "leave", "off", "off", "present", "present", "present", "1/2", "1/2", "off", "off", "present", "present", "present", "present", "off", "off"], total: "17.5/21" },
    { id: 2, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", days: ["1/2", "off", "off", "present", "present", "present", "present", "present", "off", "off", "1/2", "absent", "present", "present", "present", "off", "off", "leave", "leave", "1/2", "1/2", "absent", "off", "off", "present", "present", "present", "present", "off", "off"], total: "17/21" },
    { id: 3, name: "Prof. Tommie Howell", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop", days: ["absent", "off", "off", "present", "present", "present", "present", "present", "off", "off", "absent", "present", "present", "present", "present", "off", "off", "present", "1/2", "1/2", "leave", "present", "off", "off", "present", "present", "present", "1/2", "off", "off"], total: "17.5/21" },
    { id: 4, name: "Dr. Justus Boyer Jr.", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop", days: ["present", "off", "off", "present", "present", "present", "present", "1/2", "off", "off", "present", "present", "present", "present", "present", "off", "off", "1/2", "1/2", "absent", "present", "present", "off", "off", "present", "leave", "leave", "present", "off", "off"], total: "17.5/21" },
    { id: 5, name: "Warren Jones", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop", days: ["present", "off", "off", "present", "present", "present", "1/2", "1/2", "off", "off", "present", "present", "present", "present", "present", "off", "off", "1/2", "absent", "present", "present", "present", "off", "off", "present", "present", "present", "leave", "off", "off"], total: "17/21" },
    { id: 6, name: "Burdette Rath", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop", days: ["present", "off", "off", "present", "present", "1/2", "1/2", "absent", "off", "off", "present", "present", "present", "present", "present", "off", "off", "absent", "present", "present", "present", "present", "off", "off", "present", "1/2", "1/2", "present", "off", "off"], total: "17/21" },
    { id: 7, name: "Dr. Ashlee Schamberger", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop", days: ["present", "off", "off", "present", "1/2", "1/2", "1/2", "absent", "off", "off", "present", "present", "present", "present", "1/2", "off", "off", "present", "present", "present", "present", "present", "off", "off", "1/2", "1/2", "absent", "present", "off", "off"], total: "15.5/21" },
    { id: 8, name: "Amie Jerde", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop", days: ["present", "off", "off", "1/2", "1/2", "absent", "present", "present", "off", "off", "present", "present", "1/2", "1/2", "1/2", "off", "off", "present", "present", "present", "1/2", "absent", "off", "off", "present", "present", "leave", "leave", "off", "off"], total: "16.5/21" },
    { id: 9, name: "Caitlyn Harvey", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop", days: ["present", "off", "off", "1/2", "absent", "present", "present", "present", "off", "off", "1/2", "1/2", "present", "present", "absent", "off", "off", "present", "present", "present", "present", "present", "off", "off", "absent", "present", "leave", "leave", "off", "off"], total: "16.5/21" },
    { id: 10, name: "Employee", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", days: ["present", "off", "off", "absent", "present", "present", "present", "present", "off", "off", "present", "1/2", "1/2", "absent", "present", "off", "off", "present", "present", "present", "present", "1/2", "off", "off", "present", "present", "present", "present", "off", "off"], total: "17.5/21" }
  ];

  const getDayStatusStyle = (status) => {
    switch (status) {
      case 'present': return 'text-emerald-600 bg-white font-bold cursor-pointer hover:bg-emerald-50/40';
      case 'absent': return 'text-red-500 bg-white font-bold cursor-pointer hover:bg-red-50/40';
      case '1/2': return 'text-amber-500 bg-white font-bold cursor-pointer hover:bg-amber-50/40';
      case 'leave': return 'text-pink-500 bg-white font-bold cursor-pointer hover:bg-pink-50/40';
      case 'off': return 'text-gray-300 bg-slate-50/50 font-medium cursor-pointer hover:bg-slate-100/50';
      default: return 'text-gray-400';
    }
  };

  const getDaySymbol = (status) => {
    if (status === 'present') return '✓';
    if (status === 'absent') return '✕';
    if (status === '1/2') return '½';
    if (status === 'leave') return '⚑';
    return '⊘';
  };

  const handleCellClick = (employeeName, dayIndex) => {
    const dayString = String(dayIndex + 1).padStart(2, '0');
    setModalData({
      employee: employeeName,
      date: `${selectedYear}-${String(monthsList.indexOf(selectedMonth) + 1).padStart(2, '0')}-${dayString}`,
      clockIn: '09:00',
      clockOut: '18:00',
      isHoliday: false,
      notes: 'Regular attendance'
    });
    setIsModalOpen(true);
  };

  const filteredRecords = staffRecords.filter(rec => 
    rec.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedEmployee === 'All Employees' || rec.role === selectedEmployee)
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc] relative">
      
      {/* Breadcrumb Navigator */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Attendance</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Attendance Records</span>
      </div>

      {/* Main Title Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Attendance Records</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Record</span>
        </button>
      </div>

      {/* Filters Workplace Component */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.003)] space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[240px] max-w-xs">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search employee name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white"
            />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-50 border border-gray-200/60 text-gray-600 rounded-xl hover:bg-slate-100 text-xs font-bold cursor-pointer">
            <SlidersHorizontal size={14} />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2 border-t border-gray-50 animate-fadeIn">
            <div className="space-y-1.5">
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-wider">Department/Role</label>
              <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)} className="w-full bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer">
                <option value="All Employees">All Employees</option>
                <option value="HR Manager">HR Manager</option>
                <option value="IT Manager">IT Manager</option>
                <option value="HR Executive">HR Executive</option>
                <option value="Recruiter">Recruiter</option>
              </select>
            </div>
            
            {/* Expanded 12 Months Options Filter */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-wider">Month</label>
              <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer">
                {monthsList.map((m, idx) => (
                  <option key={idx} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Expanded Previous 5 Years Filter Option Stack */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-wider">Year</label>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer">
                {yearsList.map((y, idx) => (
                  <option key={idx} value={y}>{y}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end gap-2">
              <button className="w-full bg-[#0da777] text-white py-2.5 px-4 rounded-xl text-xs font-bold hover:bg-[#0b9368] cursor-pointer shadow-sm">Filter Registry</button>
            </div>
          </div>
        )}
      </div>

      {/* Legend Container Strip */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.003)] flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11px] font-bold text-gray-400">
        <div className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> <span>Present</span></div>
        <div className="flex items-center gap-1.5"><span className="text-red-500">✕</span> <span>Absent</span></div>
        <div className="flex items-center gap-1.5"><span className="text-amber-500">½</span> <span>Half Day</span></div>
        <div className="flex items-center gap-1.5"><span className="text-pink-500">⚑</span> <span>On Leave</span></div>
        <div className="flex items-center gap-1.5"><span className="text-gray-300">⊘</span> <span>Day Off</span></div>
      </div>

      {/* Main Matrix Spreadsheet Component */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto min-w-0">
          <table className="w-full text-left border-collapse min-w-[1300px]">
            <thead>
              <tr className="bg-slate-50/50 text-center border-b border-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <th colSpan="2" className="py-3 px-4 border-r border-gray-100 w-64 text-left">Employee Registry</th>
                {Array.from({ length: 30 }, (_, i) => (
                  <th key={i} className="py-3 px-1 border-r border-gray-50/60 w-10">
                    <span className="block text-gray-400">{i + 1}</span>
                    <span className="block text-[8px] mt-0.5 font-bold text-gray-300">
                      {['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'][i % 7]}
                    </span>
                  </th>
                ))}
                <th className="py-3 px-4 w-20">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
              {filteredRecords.map((rec) => (
                <tr key={rec.id} className="hover:bg-slate-50/40 transition-all text-center">
                  <td colSpan="2" className="py-3.5 px-5 text-left border-r border-gray-100 sticky left-0 bg-white z-10 shadow-[3px_0_10px_rgba(0,0,0,0.002)]">
                    <div className="flex items-center gap-3">
                      <img src={rec.avatar} alt={rec.name} className="w-8 h-8 rounded-full border border-gray-100 shrink-0 object-cover shadow-sm" />
                      <div className="space-y-0.5 truncate max-w-[160px]">
                        <span className="block font-bold text-gray-800 hover:text-[#0da777] truncate">{rec.name}</span>
                        <span className="block text-[10px] font-semibold text-gray-400 tracking-wide truncate uppercase">{rec.role}</span>
                      </div>
                    </div>
                  </td>
                  {rec.days.map((dayStatus, idx) => (
                    <td 
                      key={idx} 
                      onClick={() => handleCellClick(rec.name, idx)}
                      className={`py-3.5 px-0.5 border-r border-gray-50/60 ${getDayStatusStyle(dayStatus)}`}
                    >
                      <span className="text-[11px] block">{getDaySymbol(dayStatus)}</span>
                    </td>
                  ))}
                  <td className="py-3.5 px-3 font-black text-gray-800 text-center bg-slate-50/30">{rec.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 bg-slate-50/20 flex items-center justify-between gap-4">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Showing 1 to {filteredRecords.length} of {filteredRecords.length} employees matrix</span>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 cursor-not-allowed"><ChevronLeft size={14} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black">1</button>
            <button className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 cursor-not-allowed"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>

      {/* POPUP MODAL DIALOG CLONE INTERFACE */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn backdrop-blur-[1px] p-4">
          <div className="bg-white rounded-2xl w-full max-w-[520px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden transform transition-all">
            
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between select-none">
              <h3 className="text-base font-bold text-gray-900 tracking-tight">Edit Attendance Record</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }} className="p-6 space-y-4 text-left">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Employee <span className="text-red-500">*</span>
                </label>
                <select 
                  value={modalData.employee}
                  onChange={(e) => setModalData({...modalData, employee: e.target.value})}
                  className="w-full bg-white border border-gray-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-800 focus:border-[#0da777] outline-none"
                >
                  <option value="Employee">Employee</option>
                  {staffRecords.map(r => (
                    <option key={r.id} value={r.name}>{r.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Date <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  value={modalData.date}
                  onChange={(e) => setModalData({...modalData, date: e.target.value})}
                  className="w-full bg-white border border-gray-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-800 focus:border-[#0da777] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Clock In Time <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="time" 
                    value={modalData.clockIn}
                    onChange={(e) => setModalData({...modalData, clockIn: e.target.value})}
                    className="w-full bg-white border border-gray-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-800 focus:border-[#0da777] outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Clock Out Time <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="time" 
                    value={modalData.clockOut}
                    onChange={(e) => setModalData({...modalData, clockOut: e.target.value})}
                    className="w-full bg-white border border-gray-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-800 focus:border-[#0da777] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2.5 py-1 select-none">
                <input 
                  type="checkbox" 
                  id="modalHoliday"
                  checked={modalData.isHoliday}
                  onChange={(e) => setModalData({...modalData, isHoliday: e.target.checked})}
                  className="w-4 h-4 rounded border-gray-300 text-[#0da777] focus:ring-[#0da777] cursor-pointer"
                />
                <label htmlFor="modalHoliday" className="text-xs font-bold text-gray-700 cursor-pointer">
                  Holiday
                </label>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Notes</label>
                <textarea 
                  rows="3"
                  value={modalData.notes}
                  onChange={(e) => setModalData({...modalData, notes: e.target.value})}
                  placeholder="Enter notes..."
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl text-xs font-semibold text-gray-800 focus:border-[#0da777] outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-50 select-none">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-gray-200/60 rounded-xl text-xs font-bold text-gray-600 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#0da777] hover:bg-[#0b9368] rounded-xl text-xs font-bold text-white shadow-sm transition-colors cursor-pointer"
                >
                  Save
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}