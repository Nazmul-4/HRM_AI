// File: src/app/dashboard/hr/leave/applications/page.js
"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight, Eye, Edit, Check, X, Trash2, ChevronDown } from 'lucide-react';

export default function LeaveManagementWorkspace() {
  const [activeSubTab, setActiveSubTab] = useState('Applications'); 
  const [leaveSearch, setLeaveSearch] = useState('');
  const [currentLeaveTab, setCurrentLeaveTab] = useState('Pending'); 
  const [perPage, setPerPage] = useState('10');
  
  // Modal popups operational visibility states
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedApplicationDetails, setSelectedApplicationDetails] = useState(null);

  const employeeRegistry = [
    { id: 1, name: "Employee", email: "emp6816@example.com", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" },
    { id: 2, name: "Amie Jerde", email: "emp2277@example.com", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
    { id: 3, name: "Caitlyn Harvey", email: "emp8651@example.com", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" },
    { id: 4, name: "Burdette Rath", email: "lakin.ruthuan@example.net", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
    { id: 5, name: "Dr. Ashlee Schamberger", email: "ghettinger@example.net", role: "HR Executive", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    { id: 6, name: "Dr. Justus Boyer Jr.", email: "rod.pagac@example.com", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" },
    { id: 7, name: "Warren Jones", email: "merle75@example.net", role: "HR Manager", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" }
  ];

  // Leave master record data modeling array
  const [applicationsData] = useState([
    { id: 1, emp: employeeRegistry[1], type: "Compensatory Leave", start: "2026-05-18", end: "2026-05-19", days: 2, status: "Approved", applied: "2026-05-15", reason: "Compensatory off for overtime" },
    { id: 2, emp: employeeRegistry[2], type: "Annual Leave", start: "2026-05-21", end: "2026-05-22", days: 2, status: "Approved", applied: "2026-05-19", reason: "Annual vacation time rest cycle" },
    { id: 3, emp: employeeRegistry[0], type: "Marriage Leave", start: "2026-05-24", end: "2026-05-26", days: 3, status: "Pending", applied: "2026-05-19", reason: "Attending marriage rituals" },
    { id: 4, emp: employeeRegistry[3], type: "Personal Leave", start: "2026-05-10", end: "2026-05-12", days: 3, status: "Pending", applied: "2026-05-19", reason: "Urgent residential shift move" }
  ]);

  const handleLeaveBlockClick = (appRecord) => {
    setSelectedApplicationDetails(appRecord);
    setIsDetailsModalOpen(true);
  };

  const renderApplicationsTab = () => {
    const schedulerDays = [
      { date: "18", label: "Mon" }, { date: "19", label: "Tue" }, { date: "20", label: "Wed" },
      { date: "21", label: "Thu", current: true }, { date: "22", label: "Fri" }, { date: "23", label: "Sat" }, { date: "24", label: "Sun" }
    ];

    return (
      <div className="space-y-6">
        {/* Scheduler Dashboard Matrix Component Panel */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm overflow-x-auto">
          <div className="flex items-center justify-between pb-4 border-b border-gray-50 mb-4 min-w-[900px]">
            <div className="flex items-center gap-2">
              <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-slate-50"><ChevronLeft size={14} /></button>
              <span className="text-xs font-bold text-gray-700 min-w-[80px] text-center">May 2026</span>
              <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-slate-50"><ChevronRight size={14} /></button>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 select-none">
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300"></span> <span>Today</span></div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> <span>Annual Leave</span></div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> <span>Sick Leave</span></div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span> <span>Emergency Leave</span></div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-400"></span> <span>Compensatory Leave</span></div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-lime-500"></span> <span>Personal Leave</span></div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span> <span>Marriage Leave</span></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
              <span>Employee</span>
              <select className="bg-slate-50 border border-gray-200 rounded-xl px-3 py-1.5 outline-none text-gray-700">
                <option>All Employees</option>
              </select>
            </div>
          </div>

          <div className="w-full min-w-[900px]">
            <div className="grid grid-cols-8 border-b border-gray-100 pb-2 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
              <div className="text-left pl-2">Employee</div>
              {schedulerDays.map((day, i) => (
                <div key={i} className={`py-1 rounded-xl ${day.current ? 'bg-emerald-50/60 text-[#0da777] font-black' : ''}`}>
                  <span>{day.date}</span> <span className="text-[9px] block font-semibold text-gray-400 mt-0.5">{day.label}</span>
                </div>
              ))}
            </div>

            <div className="divide-y divide-gray-50 select-none">
              {employeeRegistry.map((emp) => (
                <div key={emp.id} className="grid grid-cols-8 items-center py-3 text-center text-xs font-semibold">
                  <div className="flex items-center gap-2.5 text-left pl-1">
                    <img src={emp.avatar} alt="" className="w-7 h-7 rounded-full border border-gray-100 object-cover" />
                    <div>
                      <span className="block font-bold text-gray-800 leading-none">{emp.name}</span>
                      <span className="block text-[9px] text-gray-400 font-medium mt-0.5 uppercase tracking-wide">{emp.role}</span>
                    </div>
                  </div>
                  
                  {emp.name === "Amie Jerde" ? (
                    <div 
                      onClick={() => handleLeaveBlockClick(applicationsData[0])}
                      className="col-span-2 bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd] rounded-xl p-2 text-[10px] font-bold text-left shadow-sm truncate relative mx-0.5 cursor-pointer hover:bg-[#bae6fd]/70 transition-all"
                    >
                      Compensatory Leave <span className="block text-[8px] text-[#0284c7] font-medium mt-0.5">Paid Leave</span>
                    </div>
                  ) : emp.name === "Employee" ? (
                    <>
                      <div className="border-r border-gray-100/30 h-8"></div>
                      <div className="border-r border-gray-100/30 h-8"></div>
                    </>
                  ) : null}

                  {emp.name === "Caitlyn Harvey" ? (
                    <>
                      <div className="border-r border-gray-100/30 h-8"></div><div className="border-r border-gray-100/30 h-8"></div><div className="border-r border-gray-100/30 h-8"></div>
                      <div 
                        onClick={() => handleLeaveBlockClick(applicationsData[1])}
                        className="col-span-1 bg-[#dcfce7] text-[#15803d] border border-[#bbf7d0] rounded-xl p-2 text-[10px] font-bold text-left shadow-sm truncate relative mx-0.5 cursor-pointer hover:bg-[#bbf7d0]/70 transition-all"
                      >
                        Annual Leave <span className="block text-[8px] text-[#16a34a] font-medium mt-0.5">Paid Leave</span>
                      </div>
                      <div className="border-r border-gray-100/30 h-8"></div><div className="border-r border-gray-100/30 h-8"></div><div className="border-r border-gray-100/30 h-8"></div>
                    </>
                  ) : (
                    Array.from({ length: emp.name === "Amie Jerde" ? 5 : emp.name === "Employee" ? 5 : emp.name === "Caitlyn Harvey" ? 0 : 7 }).map((_, i) => (
                      <div key={i} className="border-r border-gray-100/30 last:border-0 h-8"></div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Base List Processing Table Panel */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden text-left">
          <div className="flex items-center gap-3 p-4 border-b border-gray-50 flex-wrap justify-between">
            <div className="flex items-center gap-1.5 bg-slate-50 border border-gray-200/40 p-1 rounded-xl">
              <button onClick={() => setCurrentLeaveTab('Pending')} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${currentLeaveTab === 'Pending' ? 'bg-white text-[#0da777] shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>Pending Leaves</button>
              <button onClick={() => setCurrentLeaveTab('Rejected')} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${currentLeaveTab === 'Rejected' ? 'bg-white text-red-500 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>Rejected Leaves</button>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
              <input type="text" placeholder="Search leaves..." className="w-full bg-slate-50 pl-9 pr-4 py-2 rounded-xl border border-gray-200/40 text-xs font-semibold text-gray-700 focus:outline-none" />
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1100px]">
              <thead>
                <tr className="bg-slate-50/40 border-b border-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                  <th className="py-3 px-4 text-center w-12">#</th>
                  <th className="py-3 px-6">Employee</th>
                  <th className="py-3 px-6">Leave Type</th>
                  <th className="py-3 px-6">Start Date</th>
                  <th className="py-3 px-6">End Date</th>
                  <th className="py-3 px-6 text-center">Days</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Applied On</th>
                  <th className="py-3 px-4 text-center w-36">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
                {applicationsData.map((app, index) => (
                  <tr key={app.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-3.5 px-4 text-center text-gray-400 font-bold">{index + 1}</td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-2.5">
                        <img src={app.emp.avatar} alt="" className="w-7 h-7 rounded-full border object-cover" />
                        <div>
                          <span className="block font-bold text-gray-800 leading-none">{app.emp.name}</span>
                          <span className="block text-[10px] text-gray-400 font-medium tracking-wide mt-0.5">{app.emp.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="inline-flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${app.type.startsWith('M') ? 'bg-orange-400' : app.type.startsWith('C') ? 'bg-sky-400' : app.type.startsWith('P') ? 'bg-lime-500' : 'bg-emerald-400'}`}></span>
                        <span className="font-bold text-gray-700">{app.type}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-gray-500">{app.start}</td>
                    <td className="py-3.5 px-6 text-gray-500">{app.end}</td>
                    <td className="py-3.5 px-6 text-center text-gray-800 font-bold">{app.days}</td>
                    <td className="py-3.5 px-6">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${app.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100/20' : 'bg-amber-50 text-amber-600 border-amber-100/30'}`}>{app.status}</span>
                    </td>
                    <td className="py-3.5 px-6 text-gray-400">{app.applied}</td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button onClick={() => handleLeaveBlockClick(app)} className="p-1 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-md cursor-pointer"><Eye size={14} /></button>
                        <button className="p-1 text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-md"><Check size={14} /></button>
                        <button className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md"><X size={14} /></button>
                        <button className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderBalancesTab = () => <div className="text-sm font-medium text-gray-400 p-8">Leave Balances registry context loader.</div>;
  const renderTypesTab = () => <div className="text-sm font-medium text-gray-400 p-8">Leave Types customization panel engine.</div>;
  const renderPoliciesTab = () => <div className="text-sm font-medium text-gray-400 p-8">Leave Policies systemic guidelines engine.</div>;

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 font-sans select-none bg-[#f8fafc] relative">
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
        <span>Dashboard</span><span className="text-gray-300">/</span><span>Leave Management</span><span className="text-gray-300">/</span><span className="text-gray-700">Leave {activeSubTab}</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Leave {activeSubTab}</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-xl p-1 shadow-sm font-bold text-xs">
            {['Applications', 'Balances', 'Types', 'Policies'].map((tab) => (
              <button key={tab} onClick={() => setActiveSubTab(tab)} className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${activeSubTab === tab ? 'bg-[#0da777] text-white' : 'text-gray-500 hover:bg-slate-50'}`}>{tab}</button>
            ))}
          </div>
          <button className="inline-flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm transition-all active:scale-[0.98] cursor-pointer">
            <Plus size={16} />
            <span>Add Leave Application</span>
          </button>
        </div>
      </div>

      {activeSubTab === 'Applications' && renderApplicationsTab()}
      {activeSubTab === 'Balances' && renderBalancesTab()}
      {activeSubTab === 'Types' && renderTypesTab()}
      {activeSubTab === 'Policies' && renderPoliciesTab()}

      {/* CLONE IMPLEMENTATION: LEAVE APPLICATION DETAILS POPUP DIALOG WINDOW */}
      {isDetailsModalOpen && selectedApplicationDetails && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center z-[999] p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-[580px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-gray-100 transform transition-all overflow-hidden text-left">
            
            {/* Modal Header Panel Section */}
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5 text-[#0da777]">
                <div className="w-5 h-5 rounded-lg bg-[#0da777]/10 flex items-center justify-center text-xs">📅</div>
                <h3 className="text-sm font-black text-gray-900 tracking-tight">Leave Application Details</h3>
              </div>
              <button 
                onClick={() => setIsDetailsModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Layout Metric Fields Content Stack */}
            <div className="p-6 space-y-5 text-xs font-bold text-gray-500">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">👤 Employee</span>
                  <p className="text-xs font-black text-gray-800">{selectedApplicationDetails.emp?.name}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">🏷️ Leave Type</span>
                  <p className="text-xs font-black text-gray-800">{selectedApplicationDetails.type}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">📅 Start Date</span>
                  <p className="text-xs font-black text-gray-800 mt-0.5">{selectedApplicationDetails.start}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">📅 End Date</span>
                  <p className="text-xs font-black text-gray-800 mt-0.5">{selectedApplicationDetails.end}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block"># Total Days</span>
                  <p className="text-xs font-black text-gray-800">{selectedApplicationDetails.days}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">📄 Status</span>
                  <div className="pt-0.5">
                    <span className="px-2 py-0.5 rounded bg-[#dcfce7] text-[#15803d] text-[10px] font-black border border-[#bbf7d0]/30 uppercase tracking-wider">
                      {selectedApplicationDetails.status}
                    </span>
                  </div>
                </div>

              </div>

              {/* Workflow Context Reason Box */}
              <div className="space-y-1.5 pt-3 border-t border-gray-50">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">📝 Reason</span>
                <p className="text-xs font-semibold text-gray-700 bg-slate-50/50 p-2.5 border border-gray-100 rounded-xl leading-relaxed">
                  {selectedApplicationDetails.reason}
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}