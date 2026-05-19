"use client";

import React from 'react';
import { 
  RefreshCw, Briefcase, Link2, ExternalLink, Users, 
  Building2, Clock, CalendarDays, UserCheck, UserPlus, 
  TrendingUp, Bell, Calendar, ClipboardList, Video 
} from 'lucide-react';
import { 
  ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area 
} from 'recharts';

export default function CompanyDashboardView() {
  const summaryCounters = [
    { title: "Total Employees", value: "10", subText: "", trend: "+10 this month", color: "text-blue-600", bgColor: "bg-blue-50/70", icon: <Users size={18} /> },
    { title: "Branches", value: "9", subText: "24 departments", color: "text-emerald-600", bgColor: "bg-emerald-50/70", icon: <Building2 size={18} /> },
    { title: "Attendance Rate", value: "85.5%", subText: "45 present today", color: "text-purple-600", bgColor: "bg-purple-50/70", icon: <Clock size={18} /> },
    { title: "Pending Leaves", value: "0", subText: "2 on leave today", color: "text-amber-600", bgColor: "bg-amber-50/70", icon: <CalendarDays size={18} /> },
    { title: "Active Jobs", value: "11", trend: "+15 this month", color: "text-orange-600", bgColor: "bg-orange-50/70", icon: <Briefcase size={18} /> },
    { title: "Total Candidates", value: "31", trend: "+31 this month", color: "text-indigo-600", bgColor: "bg-indigo-50/70", icon: <UserPlus size={18} /> }
  ];

  const leaveApplications = [
    { name: "Employee", status: "Approved", type: "Annual Leave", span: "2026-01-07 - 2026-01-08", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    { name: "Amie Jerde", status: "Approved", type: "Annual Leave", span: "2026-01-12 - 2026-01-12", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    { name: "Caitlyn Harvey", status: "Approved", type: "Annual Leave", span: "2026-01-13 - 2026-01-14", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    { name: "Burdette Rath", status: "Approved", type: "Sick Leave", span: "2026-01-16 - 2026-01-16", color: "bg-emerald-50 text-emerald-700 border-emerald-100" }
  ];

  const recentCandidates = [
    { name: "Geeta Devi", stage: "Offer", role: "Senior Software Engineer", date: "2025-12-23", color: "bg-orange-50 text-orange-600 border-orange-100" },
    { name: "Nisha Agarwal", stage: "Interview", role: "Content Writer", date: "2025-12-27", color: "bg-purple-50 text-purple-600 border-purple-100" },
    { name: "Ramesh Babu", stage: "Screening", role: "Network Administrator", date: "2025-12-26", color: "bg-amber-50 text-amber-600 border-amber-100" },
    { name: "Tarun Malhotra", stage: "Offer", role: "Customer Support Representative", date: "2025-12-24", color: "bg-orange-50 text-orange-600 border-orange-100" }
  ];

  const announcements = [
    { title: "Welcome to New Financial Year 2025", type: "Company News", date: "2025-09-19", badge: "High Priority" },
    { title: "Updated Employee Handbook and Policies", type: "Policy Updates", date: "2025-09-19", badge: "High Priority" },
    { title: "Annual Performance Review Process", type: "HR Updates", date: "2025-09-19", badge: "High Priority" },
    { title: "New Employee Benefits Program Launch", type: "Benefits", date: "2025-09-19", badge: null }
  ];

  const dynamicMeetings = [
    { title: "Daily Scrum Meeting", status: "Scheduled", date: "2025-10-09", duration: "10:00:00 - 10:30:00" },
    { title: "Daily Scrum Meeting", status: "Scheduled", date: "2025-10-06", duration: "10:00:00 - 10:30:00" },
    { title: "Daily Scrum Meeting", status: "Scheduled", date: "2025-10-07", duration: "10:00:00 - 10:30:00" },
    { title: "Daily Scrum Meeting", status: "Scheduled", date: "2025-10-08", duration: "10:00:00 - 10:30:00" }
  ];

  const deptData = [
    { name: 'Information Technology', value: 4 },
    { name: 'Human Resources', value: 2 },
    { name: 'Marketing', value: 2 },
    { name: 'Operations', value: 2 },
  ];

  const candidateData = [
    { name: 'Interview', value: 8 },
    { name: 'New', value: 12 },
    { name: 'Offer', value: 5 },
    { name: 'Screening', value: 6 },
  ];

  const leaveData = [
    { name: 'Annual Leave', value: 5 },
    { name: 'Compensatory Leave', value: 2 },
    { name: 'Emergency Leave', value: 1 },
    { name: 'Marriage Leave', value: 1 },
    { name: 'Personal Leave', value: 3 },
    { name: 'Sick Leave', value: 2 },
  ];

  const hiringTrendData = [
    { month: 'Dec 2025', volume: 8 },
    { month: 'Jan 2026', volume: 12 },
    { month: 'Feb 2026', volume: 15 },
    { month: 'Mar 2026', volume: 10 },
    { month: 'Apr 2026', volume: 18 },
    { month: 'May 2026', volume: 14 },
  ];

  const growthTrendData = [
    { name: 'January', headCount: 15 },
    { name: 'February', headCount: 5 },
    { name: 'March', headCount: 22 },
    { name: 'April', headCount: 10 },
    { name: 'May', headCount: 28 },
    { name: 'June', headCount: 32 },
    { name: 'July', headCount: 35 },
    { name: 'August', headCount: 50 },
    { name: 'September', headCount: 42 },
    { name: 'October', headCount: 45 },
    { name: 'November', headCount: 48 },
    { name: 'December', headCount: 52 },
  ];

  const DEPT_COLORS = ['#0da777', '#3b82f6', '#8b5cf6', '#06b6d4'];
  const CANDIDATE_COLORS = ['#8b5cf6', '#0ea5e9', '#0da777', '#f59e0b'];
  const LEAVE_COLORS = ['#0da777', '#0ea5e9', '#f59e0b', '#f97316', '#84cc16', '#ef4444'];

  return (
    <div className="p-8 max-w-[1680px] mx-auto space-y-6 select-none font-sans bg-[#f8fafc]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h2>
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 active:scale-[0.99] transition-all cursor-pointer">
          <RefreshCw size={13} />
          <span>Refresh</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {summaryCounters.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.01)] relative flex flex-col justify-between min-h-[120px]">
            <div className="space-y-1">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">{stat.title}</span>
              <h3 className="text-2xl font-black text-gray-800 tracking-tight">{stat.value}</h3>
            </div>
            <div className="text-[11px] font-bold mt-2">
              {stat.subText && <span className="text-gray-400 font-semibold">{stat.subText}</span>}
              {stat.trend && <span className="text-emerald-500 font-extrabold">{stat.trend}</span>}
            </div>
            <div className={`absolute right-4 top-4 w-9 h-9 rounded-xl ${stat.bgColor} ${stat.color} flex items-center justify-center shadow-sm`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0da777] border border-emerald-100/30 flex items-center justify-center shadow-sm">
            <Briefcase size={22} />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-base font-bold text-gray-800 tracking-tight">Join Our Team</h4>
            <p className="text-xs font-semibold text-gray-400">
              Discover amazing career opportunities <span className="text-gray-200 px-1">|</span> <span className="text-[#0da777] font-extrabold">● 11 open positions</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer"><Link2 size={13} /><span>Copy Link</span></button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#0da777] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0b9368] shadow-sm active:scale-[0.98] transition-all cursor-pointer"><ExternalLink size={13} /><span>View Careers</span></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-[340px]">
          <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2"><Building2 size={16} className="text-gray-400" /> Department Distribution</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={deptData} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={3} dataKey="value">
                  {deptData.map((entry, idx) => <Cell key={idx} fill={DEPT_COLORS[idx % DEPT_COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: 'bold' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-[340px]">
          <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2"><TrendingUp size={16} className="text-gray-400" /> Hiring Trend (6 Months)</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hiringTrendData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="volume" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-[340px]">
          <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2"><UserCheck size={16} className="text-gray-400" /> Candidate Status</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={candidateData} cx="50%" cy="50%" outerRadius={85} dataKey="value">
                  {candidateData.map((entry, idx) => <Cell key={idx} fill={CANDIDATE_COLORS[idx % CANDIDATE_COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: 'bold' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-[340px]">
          <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2"><ClipboardList size={16} className="text-gray-400" /> Leave Types</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leaveData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={2} dataKey="value">
                  {leaveData.map((entry, idx) => <Cell key={idx} fill={LEAVE_COLORS[idx % LEAVE_COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col min-h-[420px]">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2"><Calendar size={16} className="text-gray-400" /> Recent Leave Applications</h3>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-gray-500 font-bold text-[10px] flex items-center justify-center">55</span>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1">
            {leaveApplications.map((item, idx) => (
              <div key={idx} className="p-4 border border-gray-50 rounded-xl bg-slate-50/30 flex justify-between items-start hover:border-gray-100 transition-colors">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                  <p className="text-xs font-semibold text-gray-400">{item.type} • <span className="text-gray-300 font-medium">{item.span}</span></p>
                </div>
                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col min-h-[420px]">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2"><UserCheck size={16} className="text-gray-400" /> Recent Candidates</h3>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-gray-500 font-bold text-[10px] flex items-center justify-center">5</span>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1">
            {recentCandidates.map((candidate, idx) => (
              <div key={idx} className="p-4 border border-gray-50 rounded-xl bg-slate-50/30 flex justify-between items-start hover:border-gray-100 transition-colors">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-800">{candidate.name}</h4>
                  <p className="text-xs font-semibold text-gray-400">{candidate.role} • <span className="text-gray-300 font-medium">{candidate.date}</span></p>
                </div>
                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${candidate.color}`}>{candidate.stage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col min-h-[420px]">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2"><Bell size={16} className="text-gray-400" /> Recent Announcements</h3>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-gray-500 font-bold text-[10px] flex items-center justify-center">5</span>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1">
            {announcements.map((ann, idx) => (
              <div key={idx} className="p-4 border border-gray-50 rounded-xl bg-slate-50/30 flex justify-between items-start hover:border-gray-100 transition-colors">
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-bold text-gray-800 leading-tight">{ann.title}</h4>
                    {ann.badge && <span className="px-2 py-0.5 rounded bg-red-50 text-red-500 border border-red-100/50 text-[9px] font-extrabold uppercase tracking-wider">{ann.badge}</span>}
                  </div>
                  <p className="text-xs font-semibold text-gray-400">{ann.type} • <span className="text-gray-300 font-medium">{ann.date}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col min-h-[420px]">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2"><Video size={16} className="text-gray-400" /> Recent Meetings</h3>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-gray-500 font-bold text-[10px] flex items-center justify-center">5</span>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1">
            {dynamicMeetings.map((meet, idx) => (
              <div key={idx} className="p-4 border border-gray-50 rounded-xl bg-slate-50/30 flex justify-between items-start hover:border-gray-100 transition-colors">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-800">{meet.title}</h4>
                  <p className="text-xs font-semibold text-gray-400">{meet.duration} • <span className="text-gray-300 font-medium">{meet.date}</span></p>
                </div>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold border bg-blue-50 text-blue-600 border-blue-100">{meet.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-[400px]">
        <h3 className="text-sm font-bold text-gray-800 mb-6 flex items-center gap-2">
          <TrendingUp size={16} className="text-gray-400" /> Employee Growth (2026)
        </h3>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthTrendData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.00}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="headCount" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#growthGrad)" dot={{ stroke: '#3b82f6', strokeWidth: 2, r: 4, fill: '#fff' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}