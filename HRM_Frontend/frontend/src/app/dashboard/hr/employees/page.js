"use client";

import React, { useState } from 'react';
import { 
  Plus, Search, SlidersHorizontal, Eye, Edit, Key, Lock,
  ChevronLeft, ChevronRight, Grid, List, UserPlus
} from 'lucide-react';

export default function EmployeesManagementPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');
  const [viewMode, setViewMode] = useState('list');

  const [employees] = useState([
    { id: 1, name: "Rosemary Okuneva", email: "jesse33@example.net", empId: "#EMP8434", department: "Information Technology", designation: "Recruiter", status: "Active", joined: "2024-04-16", loginStatus: "Active" },
    { id: 2, name: "Ashlee Bernhard", email: "lynch.leonel@example.com", empId: "#EMP6897", department: "Finance & Accounting", designation: "IT Manager", status: "Active", joined: "2023-12-28", loginStatus: "Active" },
    { id: 3, name: "Prof. Tommie Howell", email: "gmarquardt@example.net", empId: "#EMP8020", department: "Human Resources", designation: "HR Executive", status: "Active", joined: "2025-05-07", loginStatus: "Active" },
    { id: 4, name: "Dr. Justus Boyer Jr.", email: "tod.pagac@example.com", empId: "#EMP5501", department: "Information Technology", designation: "IT Manager", status: "Active", joined: "2025-04-02", loginStatus: "Active" },
    { id: 5, name: "Warren Jones", email: "merle75@example.net", empId: "#EMP2362", department: "Information Technology", designation: "HR Manager", status: "Active", joined: "2024-06-13", loginStatus: "Active" },
    { id: 6, name: "Burdette Rath", email: "lakin.rahsaan@example.net", empId: "#EMP1465", department: "Information Technology", designation: "HR Executive", status: "Active", joined: "2024-12-05", loginStatus: "Active" },
    { id: 7, name: "Dr. Ashlee Schamberger", email: "gheathcote@example.net", empId: "#EMP5082", department: "Human Resources", designation: "HR Executive", status: "Active", joined: "2023-10-21", loginStatus: "Active" },
    { id: 8, name: "Amie Jerde", email: "dimitri21@example.com", empId: "#EMP2277", department: "Human Resources", designation: "IT Manager", status: "Active", joined: "2025-04-02", loginStatus: "Active" },
    { id: 9, name: "Caitlyn Harvey", email: "ugleichner@example.com", empId: "#EMP8651", department: "Human Resources", designation: "HR Manager", status: "Active", joined: "2024-09-21", loginStatus: "Active" },
    { id: 10, name: "Employee", email: "employee@example.com", empId: "#EMP6816", department: "Information Technology", designation: "HR Manager", status: "Active", joined: "2023-12-15", loginStatus: "Active" }
  ]);

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'EM';
  };

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 select-none font-sans bg-[#f8fafc]">
      
      {/* Top Breadcrumb Nav Bar Element */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span className="cursor-pointer hover:text-gray-600">Dashboard</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Employees</span>
      </div>

      {/* Primary Row Header Module Component */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Employees</h2>
        <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
          <Plus size={16} />
          <span>Add Employee</span>
        </button>
      </div>

      {/* Filter and Functional Control Container Shell */}
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
          <button className="flex items-center justify-center p-2.5 bg-slate-50 border border-gray-200/60 text-gray-500 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer active:scale-95">
            <SlidersHorizontal size={14} />
          </button>
        </div>

        <div className="flex items-center justify-end gap-4 shrink-0 max-md:w-full">
          <div className="flex items-center border border-gray-100 rounded-xl p-0.5 bg-slate-50/60">
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-[#0da777] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
              <List size={14} />
            </button>
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-[#0da777] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
              <Grid size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
            <span className="whitespace-nowrap">Per Page:</span>
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
      </div>

      {/* Main Core Responsive Data Table Canvas Component */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto min-w-0">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Employee ID</th>
                <th className="py-4 px-6">Department</th>
                <th className="py-4 px-6">Designation</th>
                <th className="py-4 px-6">Employee Status</th>
                <th className="py-4 px-6">Joined</th>
                <th className="py-4 px-6">Login Status</th>
                <th className="py-4 px-6 text-center w-36">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {filteredEmployees.map((emp, index) => (
                <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-3.5 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 border border-gray-200/60 flex items-center justify-center shrink-0 overflow-hidden text-[11px] font-black text-gray-600 shadow-inner select-none">
                        {getInitials(emp.name)}
                      </div>
                      <div className="space-y-0.5 truncate max-w-[200px]">
                        <span className="block font-bold text-gray-800 hover:text-[#0da777] transition-colors cursor-pointer truncate">{emp.name}</span>
                        <span className="block text-[11px] font-semibold text-gray-400 truncate">{emp.email}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-6">
                    <span className="inline-flex px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-100/40 font-bold text-[10px] tracking-wide uppercase">
                      {emp.empId}
                    </span>
                  </td>

                  <td className="py-3.5 px-6 text-gray-500 font-bold">{emp.department}</td>
                  <td className="py-3.5 px-6 text-gray-500 font-bold">{emp.designation}</td>

                  <td className="py-3.5 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black border border-emerald-100/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {emp.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-6 text-gray-400 font-bold whitespace-nowrap">{emp.joined}</td>

                  <td className="py-3.5 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black border border-emerald-100/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {emp.loginStatus}
                    </span>
                  </td>

                  <td className="py-3.5 px-6 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button title="View Detail" className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Eye size={14} />
                      </button>
                      <button title="Edit Profile" className="p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Edit size={14} />
                      </button>
                      <button title="Change Password" className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Key size={14} />
                      </button>
                      <button title="Manage Security" className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Lock size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Global Standard Modular Pagination Element Row */}
        <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Showing 1 to {filteredEmployees.length} of {filteredEmployees.length} employees
          </span>
          <div className="flex items-center gap-1">
            <button disabled className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm">
              <ChevronLeft size={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
              1
            </button>
            <button disabled className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}