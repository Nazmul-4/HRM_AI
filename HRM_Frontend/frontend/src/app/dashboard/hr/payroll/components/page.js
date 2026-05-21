// File: src/app/dashboard/hr/payroll/components/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, Edit, Trash2 } from 'lucide-react';

export default function SalaryComponentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState('10');

  // Salary component registry dataset
  const [components] = useState([
    { id: 1, name: "PAYE", description: "KRA", type: "Earning", amount: "$15.00", calc: "Fixed amount", status: "Active" },
    { id: 2, name: "SHA", description: "Health", type: "Earning", amount: "3.00%", calc: "Of basic salary", status: "Active" },
    { id: 3, name: "Loan Deduction", description: "Employee loan repayment deduction", type: "Deduction", amount: "$1,000.00", calc: "Fixed amount", status: "Active" },
    { id: 4, name: "Income Tax (TDS)", description: "Tax deducted at source on salary income", type: "Deduction", amount: "10.00%", calc: "Of basic salary", status: "Active" },
    { id: 5, name: "Professional Tax", description: "Professional tax deduction as per state regulations", type: "Deduction", amount: "$200.00", calc: "Fixed amount", status: "Active" },
    { id: 6, name: "Employee State Insurance (ESI)", description: "Employee state insurance contribution", type: "Deduction", amount: "0.75%", calc: "Of basic salary", status: "Active" },
    { id: 7, name: "Provident Fund (PF)", description: "Employee provident fund contribution", type: "Deduction", amount: "12.00%", calc: "Of basic salary", status: "Active" },
    { id: 8, name: "Special Allowance", description: "Special allowance for additional responsibilities", type: "Earning", amount: "$3,000.00", calc: "Fixed amount", status: "Active" },
    { id: 9, name: "Dearness Allowance (DA)", description: "Dearness allowance to offset inflation impact", type: "Earning", amount: "15.00%", calc: "Of basic salary", status: "Active" },
    { id: 10, name: "Medical Allowance", description: "Medical allowance for healthcare expenses", type: "Earning", amount: "$1,500.00", calc: "Fixed amount", status: "Active" }
  ]);

  const filteredComponents = components.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc]">
      
      {/* Breadcrumb Navigation Trail */}
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span>
        <span className="text-gray-300">/</span>
        <span>Payroll Management</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">Salary Components</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Creation Left Side Form Panel */}
        <div className="lg:w-[400px] bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4 shrink-0 h-fit">
          <div>
            <h3 className="text-sm font-black text-gray-800 tracking-tight">Add New Component</h3>
            <p className="text-[11px] text-gray-400 font-medium">Fill in the details to create a new salary component</p>
          </div>
          <form onSubmit={e => e.preventDefault()} className="space-y-4 text-xs font-bold text-gray-700">
            <div className="space-y-1.5">
              <label>Component Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="e.g., Basic Salary, HRA, Tax" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]" />
            </div>
            <div className="space-y-1.5">
              <label>Description</label>
              <textarea rows="3" placeholder="Brief description of the component" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777] resize-none font-medium text-gray-600" />
            </div>
            <div className="space-y-1.5">
              <label>Type <span className="text-red-500">*</span></label>
              <select className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]">
                <option>Earning</option>
                <option>Deduction</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label>Calculation Type <span className="text-red-500">*</span></label>
              <select className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]">
                <option>Fixed Amount</option>
                <option>Of basic salary</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label>Fixed Amount <span className="text-red-500">*</span></label>
              <input type="number" defaultValue="0.00" className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]" />
            </div>
            <div className="space-y-1.5">
              <label>Status <span className="text-red-500">*</span></label>
              <select className="w-full bg-slate-50 border border-gray-200/60 p-2.5 rounded-xl outline-none focus:border-[#0da777]">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button className="w-full bg-[#0da777] hover:bg-[#0b9368] text-white py-2.5 rounded-xl shadow-sm cursor-pointer transition-all">Add Component</button>
          </form>
        </div>

        {/* Right Content Stream List Panel */}
        <div className="flex-1 space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search components..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-xl border border-gray-200/50 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#0da777] focus:bg-white transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <select className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer">
                <option>All Types</option>
              </select>
              <select className="bg-slate-50 border border-gray-200/60 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 outline-none focus:border-[#0da777] cursor-pointer">
                <option>All Calculations</option>
              </select>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.005)] overflow-hidden">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-50 bg-slate-50/40 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                  <th className="py-4 px-6">Component</th>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Amount</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-center w-28">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
                {filteredComponents.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-gray-100 text-sm">📈</div>
                        <div>
                          <span className="block font-bold text-gray-800">{c.name}</span>
                          <span className="block text-[10px] text-gray-400">{c.description}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${c.type === 'Earning' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-500 border-red-100'}`}>
                        {c.type}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="block font-bold text-gray-800">{c.amount}</span>
                      <span className="block text-[10px] text-gray-400">{c.calc}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100/40">
                        {c.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all"><Edit size={14} /></button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Footer Pagination Toolbar */}
            <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/20 flex items-center justify-between select-none">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Showing 1 to {filteredComponents.length} of {filteredComponents.length} components
              </span>
              <div className="flex items-center gap-1">
                <button disabled className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 cursor-not-allowed">
                  <ChevronLeft size={14} />
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-xl bg-[#0da777] text-white text-xs font-black shadow-sm">
                  1
                </button>
                <button disabled className="p-1.5 border border-gray-200/60 rounded-xl bg-white text-gray-400 hover:bg-gray-50 cursor-not-allowed">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}