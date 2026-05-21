"use client";

import React from 'react';
import {
  BadgeCheck,
  Bell,
  Briefcase,
  Building2,
  Calendar,
  CalendarDays,
  ClipboardList,
  Copy,
  ExternalLink,
  Megaphone,
  RefreshCw,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const statCards = [
  { title: 'Total Employees', value: '10', note: '+10 this month', icon: Users, color: '#3b82f6', bg: '#eff6ff' },
  { title: 'Branches', value: '9', note: '24 departments', icon: Building2, color: '#22c55e', bg: '#ecfdf5' },
  { title: 'Attendance Rate', value: '70%', note: '7 present today', icon: BadgeCheck, color: '#a855f7', bg: '#faf5ff' },
  { title: 'Pending Leaves', value: '0', note: '0 on leave today', icon: CalendarDays, color: '#eab308', bg: '#fefce8' },
  { title: 'Active Jobs', value: '11', note: '+15 this month', icon: Briefcase, color: '#f97316', bg: '#fff7ed' },
  { title: 'Total Candidates', value: '31', note: '+31 this month', icon: UserPlus, color: '#6366f1', bg: '#eef2ff' },
];

const departmentData = [
  { name: 'IT', value: 4 },
  { name: 'HR', value: 2 },
  { name: 'Marketing', value: 2 },
  { name: 'Operations', value: 2 },
];

const hiringTrendData = [
  { month: 'Dec 2025', jobs: 2 },
  { month: 'Jan 2026', jobs: 4 },
  { month: 'Feb 2026', jobs: 5 },
  { month: 'Mar 2026', jobs: 7 },
  { month: 'Apr 2026', jobs: 9 },
  { month: 'May 2026', jobs: 11 },
];

const candidateData = [
  { name: 'New', value: 12 },
  { name: 'Interview', value: 8 },
  { name: 'Screening', value: 6 },
  { name: 'Offer', value: 5 },
];

const leaveData = [
  { name: 'Annual Leave', value: 5 },
  { name: 'Personal Leave', value: 3 },
  { name: 'Sick Leave', value: 2 },
  { name: 'Emergency Leave', value: 1 },
  { name: 'Marriage Leave', value: 1 },
  { name: 'Compensatory Leave', value: 2 },
];

const growthData = [
  { month: 'Jan', employees: 15 },
  { month: 'Feb', employees: 18 },
  { month: 'Mar', employees: 24 },
  { month: 'Apr', employees: 28 },
  { month: 'May', employees: 35 },
  { month: 'Jun', employees: 42 },
  { month: 'Jul', employees: 46 },
  { month: 'Aug', employees: 50 },
  { month: 'Sep', employees: 44 },
  { month: 'Oct', employees: 48 },
  { month: 'Nov', employees: 51 },
  { month: 'Dec', employees: 55 },
];

const leaveApplications = [
  { name: 'Employee', type: 'Annual Leave', date: '2026-01-07 - 2026-01-08', status: 'Approved' },
  { name: 'Amie Jerde', type: 'Annual Leave', date: '2026-01-12 - 2026-01-12', status: 'Approved' },
  { name: 'Caitlyn Harvey', type: 'Annual Leave', date: '2026-01-13 - 2026-01-14', status: 'Approved' },
  { name: 'Burdette Rath', type: 'Sick Leave', date: '2026-01-16 - 2026-01-16', status: 'Approved' },
];

const recentCandidates = [
  { name: 'Geeta Devi', role: 'Senior Software Engineer', date: '2025-12-23', stage: 'Offer', color: 'orange' },
  { name: 'Nisha Agarwal', role: 'Content Writer', date: '2025-12-27', stage: 'Interview', color: 'violet' },
  { name: 'Ramesh Babu', role: 'Network Administrator', date: '2025-12-26', stage: 'Screening', color: 'amber' },
  { name: 'Tarun Malhotra', role: 'Customer Support Representative', date: '2025-12-24', stage: 'Offer', color: 'orange' },
];

const announcements = [
  { title: 'Welcome to New Financial Year 2025', category: 'Company News', date: '2025-09-19', priority: true },
  { title: 'Updated Employee Handbook and Policies', category: 'Policy Updates', date: '2025-09-19', priority: true },
  { title: 'Annual Performance Review Process', category: 'HR Updates', date: '2025-09-19', priority: true },
  { title: 'New Employee Benefits Program Launch', category: 'Benefits', date: '2025-09-19', priority: false },
];

const meetings = [
  { title: 'Daily Scrum Meeting', date: '2025-10-09', time: '10:00:00 - 10:30:00', status: 'Scheduled' },
  { title: 'Daily Scrum Meeting', date: '2025-10-06', time: '10:00:00 - 10:30:00', status: 'Scheduled' },
  { title: 'Daily Scrum Meeting', date: '2025-10-07', time: '10:00:00 - 10:30:00', status: 'Scheduled' },
  { title: 'Daily Scrum Meeting', date: '2025-10-08', time: '10:00:00 - 10:30:00', status: 'Scheduled' },
];

const chartColors = ['#00b894', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#14b8a6'];

function ChartCard({ title, icon: Icon, children }) {
  return (
    <section className="bg-white border border-slate-200/70 rounded-lg shadow-[0_12px_30px_rgba(15,23,42,0.035)] p-5 min-h-[315px] flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Icon size={15} className="text-slate-400" />
        <h3 className="text-[13px] font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </section>
  );
}

function FeedCard({ title, icon: Icon, count, children }) {
  return (
    <section className="bg-white border border-slate-200/70 rounded-lg shadow-[0_12px_30px_rgba(15,23,42,0.035)] p-5 min-h-[365px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon size={15} className="text-slate-400" />
          <h3 className="text-[13px] font-semibold text-slate-800">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="min-w-5 h-5 px-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center">
            {count}
          </span>
          <button className="text-[11px] font-semibold text-[#00b894] hover:text-[#029d80] transition-colors">
            View All
          </button>
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-1">{children}</div>
    </section>
  );
}

function StageBadge({ candidate }) {
  const styles = {
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    violet: 'bg-violet-50 text-violet-600 border-violet-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${styles[candidate.color]}`}>
      {candidate.stage}
    </span>
  );
}

export default function HRDashboardView() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] px-4 py-5 sm:px-6 lg:px-7 font-sans text-slate-800">
      <div className="mx-auto max-w-[1660px] space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-400">Home / Dashboard</p>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
          </div>
          <button className="h-9 w-fit inline-flex items-center gap-2 rounded-md bg-white border border-slate-200 px-3 text-[12px] font-semibold text-slate-600 shadow-sm hover:border-[#00b894]/50 hover:text-[#00b894] transition-colors">
            <RefreshCw size={13} />
            Refresh
          </button>
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="bg-white border border-slate-200/70 rounded-lg p-4 min-h-[92px] shadow-[0_12px_30px_rgba(15,23,42,0.035)] flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-slate-500">{card.title}</p>
                  <h2 className="mt-1 text-[22px] leading-tight font-semibold text-slate-900">{card.value}</h2>
                  <p className="mt-1 text-[10px] font-medium text-[#00b894]">{card.note}</p>
                </div>
                <div className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center" style={{ color: card.color, backgroundColor: card.bg }}>
                  <Icon size={16} />
                </div>
              </article>
            );
          })}
        </section>

        <section className="bg-white border border-slate-200/70 rounded-lg p-4 shadow-[0_12px_30px_rgba(15,23,42,0.035)] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-11 w-11 rounded-lg bg-[#00b894] text-white flex items-center justify-center shadow-[0_10px_20px_rgba(0,184,148,0.18)]">
              <Briefcase size={20} />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-slate-900">Join Our Team</h2>
              <p className="text-[12px] font-medium text-slate-500">
                Discover amazing career opportunities <span className="text-slate-300 px-1">|</span>
                <span className="text-[#00b894] font-semibold">11 open positions</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button className="h-8 inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-[11px] font-semibold text-slate-600 hover:border-[#00b894]/50 hover:text-[#00b894] transition-colors">
              <Copy size={12} />
              Copy Link
            </button>
            <button className="h-8 inline-flex items-center justify-center gap-2 rounded-md bg-[#00b894] px-3 text-[11px] font-semibold text-white shadow-sm hover:bg-[#02a784] transition-colors">
              <ExternalLink size={12} />
              View Careers
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <ChartCard title="Department Distribution" icon={Building2}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={departmentData} cx="50%" cy="50%" innerRadius={52} outerRadius={78} paddingAngle={2} dataKey="value">
                  {departmentData.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 11, fontWeight: 600 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Hiring Trend (6 Months)" icon={TrendingUp}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hiringTrendData} margin={{ top: 8, right: 12, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="jobs" fill="#00b894" radius={[5, 5, 0, 0]} maxBarSize={38} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Candidate Status" icon={UserCheck}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={candidateData} cx="50%" cy="50%" outerRadius={78} dataKey="value">
                  {candidateData.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 11, fontWeight: 600 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Leave Types" icon={ClipboardList}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leaveData} cx="50%" cy="50%" innerRadius={50} outerRadius={76} paddingAngle={2} dataKey="value">
                  {leaveData.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 10, fontWeight: 600 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <FeedCard title="Recent Leave Applications" icon={Calendar} count="55">
            {leaveApplications.map((item) => (
              <div key={`${item.name}-${item.date}`} className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h4 className="text-[13px] font-semibold text-slate-800 truncate">{item.name}</h4>
                  <p className="mt-1 text-[11px] font-medium text-slate-500">{item.type} | {item.date}</p>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold border bg-emerald-50 text-emerald-700 border-emerald-100">
                  {item.status}
                </span>
              </div>
            ))}
          </FeedCard>

          <FeedCard title="Recent Candidates" icon={UserCheck} count="5">
            {recentCandidates.map((candidate) => (
              <div key={`${candidate.name}-${candidate.date}`} className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h4 className="text-[13px] font-semibold text-slate-800 truncate">{candidate.name}</h4>
                  <p className="mt-1 text-[11px] font-medium text-slate-500">{candidate.role} | {candidate.date}</p>
                </div>
                <StageBadge candidate={candidate} />
              </div>
            ))}
          </FeedCard>

          <FeedCard title="Recent Announcements" icon={Bell} count="5">
            {announcements.map((announcement) => (
              <div key={`${announcement.title}-${announcement.date}`} className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-[13px] font-semibold text-slate-800">{announcement.title}</h4>
                  {announcement.priority && (
                    <span className="px-2 py-0.5 rounded-sm bg-red-50 border border-red-100 text-[9px] uppercase font-bold tracking-wide text-red-500">
                      High Priority
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[11px] font-medium text-slate-500">{announcement.category} | {announcement.date}</p>
              </div>
            ))}
          </FeedCard>

          <FeedCard title="Recent Meetings" icon={Megaphone} count="5">
            {meetings.map((meeting) => (
              <div key={`${meeting.title}-${meeting.date}`} className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h4 className="text-[13px] font-semibold text-slate-800 truncate">{meeting.title}</h4>
                  <p className="mt-1 text-[11px] font-medium text-slate-500">{meeting.time} | {meeting.date}</p>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold border bg-blue-50 text-blue-600 border-blue-100">
                  {meeting.status}
                </span>
              </div>
            ))}
          </FeedCard>
        </section>

        <ChartCard title="Employee Growth (2026)" icon={TrendingUp}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={growthData} margin={{ top: 8, right: 12, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="employeeGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00b894" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#00b894" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="employees" stroke="#00b894" strokeWidth={3} fill="url(#employeeGrowth)" dot={{ r: 3, fill: '#fff', stroke: '#00b894', strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
