// File: src/app/dashboard/hr/payroll/page.js
"use client";

import React, { useState } from 'react';
import { 
  Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, 
  DollarSign, Check, X, Eye, Edit, Trash2, Calendar, FileText
} from 'lucide-react';

export default function PayrollManagementPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Premium placeholder assets mapping directly to enterprise personnel nodes
  const [payrollRecords] = useState([
    { id: 1, name: "Rosemary Okuneva", role: "Recruiter", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", baseSalary: "$4,500.00", allowances: "$350.00", deductions: "$120.00", netPay: "$4,730.00", status: "Paid", payDate: "2026-05-15" },
    { id: 2, name: "Ashlee Bernhard", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop", baseSalary: "$7,200.00", allowances: "$500.00", deductions: "$210.00", netPay: "$7,490.00", status: "Paid", payDate: "2026-05-15" },
    { id: 3, name: "Prof. Tommie Howell", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop", baseSalary: "$5,000.00", allowances: "$400.00", deductions: "$150.00", netPay: "$5,250.00", status: "Pending", payDate: "—" },
    { id: 4, name: "Dr. Justus Boyer Jr.", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop", baseSalary: "$7,500.00", allowances: "$600.00", deductions: "$250.00", netPay: "$7,850.00", status: "Paid", payDate: "2026-05-15" },
    { id: 5, name: "Warren Jones", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop", baseSalary: "$6,800.00", allowances: "$450.00", deductions: "$180.00", netPay: "$7,070.00", status: "Pending", payDate: "—" },
    { id: 6, name: "Burdette Rath", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop", baseSalary: "$4,800.00", allowances: "$300.00", deductions: "$110.00", netPay: "$4,990.00", status: "Paid", payDate: "2026-05-15" },
    { id: 7, name: "Dr. Ashlee Schamberger", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop", baseSalary: "$5,200.00", allowances: "$400.00", deductions: "$160.00", netPay: "$5,440.00", status: "Paid", payDate: "2026-05-15" },
    { id: 8, name: "Amie Jerde", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop", baseSalary: "$7,000.00", allowances: "$500.00", deductions: "$200.00", netPay: "$7,300.00", status: "Paid", payDate: "2026-05-15" },
    { id: 9, name: "Caitlyn Harvey", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop", baseSalary: "$6,500.00", allowances: "$450.00", deductions: "$170.00", netPay: "$6,780.00", status: "Paid", payDate: "2026-05-15" },
    { id: 10, name: "Employee", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", baseSalary: "$6,000.00", allowances: "$400.00", deductions: "$150.00", netPay: "$6,250.00", status: "Pending", payDate: "—" }
  ]);

  const filteredPayroll = payrollRecords.filter(rec => {
    const matchesSearch = rec.name.toLowerCase().includes(searchQuery.toLowerCase()) || rec.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || rec.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Navigation Trail Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Payroll Management</span>
      </div>

      {/* Header Panel Elements */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Payroll Management</h2>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-50 shadow-sm transition-all active:scale-[0.98] cursor-pointer">
            <FileText size={15} />
            <span>Export History</span>
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
            <Plus size={16} />
            <span>Run New Payroll</span>
          </button>
        </div>
      </div>

      {/* Analytics Summary Panels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Net Outflow</span>
            <h3 className="text-2xl font-black text-gray-800">$63,200.00</h3>
            <span className="block text-[10px] font-medium text-gray-400">Current active run cycle</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/40 flex items-center justify-center text-sm font-extrabold">
            <DollarSign size={16} />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Paid Accounts</span>
            <h3 className="text-2xl font-black text-gray-800">7 / 10</h3>
            <span className="block text-[10px] font-bold text-emerald-500">70% Disbursed</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 border border-blue-100/40 flex items-center justify-center text-sm font-extrabold">
            <Check size={16} />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Awaiting Execution</span>
            <h3 className="text-2xl font-black text-gray-800">3 Accounts</h3>
            <span className="block text-[10px] font-bold text-amber-500">Pending Authorization</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 border border-amber-100/40 flex items-center justify-center text-sm font-extrabold">
            <Calendar size={16} />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.002)]">
          <div className="space-y-1 text-left">
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Deductions</span>
            <h3 className="text-2xl font-black text-gray-800">$1,790.00</h3>
            <span className="block text-[10px] font-medium text-gray-400">Tax & benefits calculation</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 border border-red-100/40 flex items-center justify-center text-sm font-extrabold">
            <X size={16} />
          </div>
        </div>
      </div>

      {/* Query Filters Control Workspace Card Wrapper */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 w-full">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by employee name or role..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all"
            />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center justify-center p-2.5 bg-slate-50 border border-gray-200/60 text-gray-500 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer active:scale-95">
            <SlidersHorizontal size={14} />
          </button>
          
          <div className="flex items-center gap-1.5 bg-slate-50 border border-gray-200/40 p-1 rounded-xl">
            {['All', 'Paid', 'Pending'].map((status) => (
              <button 
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${selectedStatus === status ? 'bg-white text-[#0da777] shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
              >
                {status}
              </button>
            ))}
          </div>
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

      {/* Main Responsive Data Grid Board Wrapper */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
        <div className="w-full overflow-x-auto min-w-0">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <th className="py-4 px-6 w-12 text-center">#</th>
                <th className="py-4 px-6">Employee</th>
                <th className="py-4 px-6">Base Salary</th>
                <th className="py-4 px-6">Allowances</th>
                <th className="py-4 px-6">Deductions</th>
                <th className="py-4 px-6">Net Pay</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Payment Date</th>
                <th className="py-4 px-6 text-center w-36">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
              {filteredPayroll.map((pay, index) => (
                <tr key={pay.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-3.5 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                  
                  {/* Account Profile Block Grid Column */}
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={pay.avatar} 
                        alt={pay.name} 
                        className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm select-none"
                      />
                      <div className="space-y-0.5">
                        <span className="block font-bold text-gray-800 hover:text-[#0da777] transition-colors cursor-pointer">{pay.name}</span>
                        <span className="block text-[10px] text-gray-400 font-medium tracking-wide uppercase">{pay.role}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-6 text-gray-700 font-medium">{pay.baseSalary}</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-medium">{pay.allowances}</td>
                  <td className="py-3.5 px-6 text-red-500 font-medium">{pay.deductions}</td>
                  <td className="py-3.5 px-6 text-gray-900 font-black tracking-tight">{pay.netPay}</td>
                  
                  {/* Disbursement Status Badges */}
                  <td className="py-3.5 px-6">
                    <span className={`inline-flex px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wide border ${
                      pay.status === 'Paid' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100/40' 
                        : 'bg-amber-50 text-amber-600 border-amber-100/40'
                    }`}>
                      {pay.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-6 text-gray-400 font-medium">{pay.payDate}</td>

                  {/* Actions Operations Trigger Blocks Row */}
                  <td className="py-3.5 px-6 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button title="View Payslip Summary" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Eye size={14} />
                      </button>
                      <button title="Modify Salary Model" className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Edit size={14} />
                      </button>
                      <button title="Trash Payroll Record" className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent rounded-lg transition-all active:scale-90 cursor-pointer">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredPayroll.length === 0 && (
                <tr>
                  <td colSpan="9" className="py-12 text-center text-xs font-bold text-gray-400 bg-slate-50/20 tracking-wide">
                    No matching ledger accounts found inside the registry query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Dynamic Pagination Footer Control Toolbar Row Assembly */}
        <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Showing 1 to {filteredPayroll.length} of {filteredPayroll.length} registered employees
          </span>
          <div className="flex items-center gap-1">
            <button disabled className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-not-allowed">
              <ChevronLeft size={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
              1
            </button>
            <button disabled className="p-2 border border-gray-200/50 bg-white rounded-xl text-gray-400 hover:bg-gray-50 transition-all shadow-sm cursor-not-allowed">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}