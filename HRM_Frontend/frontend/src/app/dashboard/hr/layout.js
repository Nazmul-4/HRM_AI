// File: src/app/dashboard/hr/layout.js
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, Clock, CalendarDays, CreditCard, 
  Award, RefreshCw, Network, UserPlus, GraduationCap, 
  FileText, Video, HardDrive, Calendar, Image, ChevronRight, Menu,
  Search, LogOut, User
} from 'lucide-react';
import { logout } from '../../services/auth';

export default function HRDashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('hr@example.com');
  const [isLoading, setIsLoading] = useState(true);
  
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  const [expandedMenus, setExpandedMenus] = useState({ 
    Attendance: false,
    "Leave Management": false,
    "Payroll Management": false,
    "Performance Management": false,
    "Employee Lifecycle": false,
    "Organization Structure": false,
    Recruitment: false,
    "Training & Development": false,
    "Documents & Contracts": false,
    Meetings: false,
    "Asset Management": false
  });

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
          console.error("Session profile authentication catch:", error);
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
    } else if (pathname === '/dashboard/hr/calendar') {
      setActiveTab('Calendar');
    } else if (pathname === '/dashboard/hr/media-library') {
      setActiveTab('Media Library');
    } else if (pathname.startsWith('/dashboard/hr/attendance/')) {
      setExpandedMenus(prev => ({ ...prev, Attendance: true }));
      const segment = pathname.split('/').pop();
      if (segment === 'records') setActiveTab('Attendance Records');
      if (segment === 'timesheet') setActiveTab('Timesheet');
      if (segment === 'regularizations') setActiveTab('Attendance Regularizations');
      if (segment === 'shifts') setActiveTab('Shifts');
      if (segment === 'policies') setActiveTab('Attendance Policies');
    } else if (pathname.startsWith('/dashboard/hr/leave/')) {
      setExpandedMenus(prev => ({ ...prev, "Leave Management": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'applications') setActiveTab('Leave Applications');
      if (segment === 'balances') setActiveTab('Leave Balances');
      if (segment === 'types') setActiveTab('Leave Types');
      if (segment === 'policies') setActiveTab('Leave Policies');
    } else if (pathname.startsWith('/dashboard/hr/payroll/')) {
      setExpandedMenus(prev => ({ ...prev, "Payroll Management": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'payslips') setActiveTab('Payslips');
      if (segment === 'runs') setActiveTab('Payroll Runs');
      if (segment === 'salaries') setActiveTab('Employee Salaries');
      if (segment === 'components') setActiveTab('Salary Components');
    } else if (pathname.startsWith('/dashboard/hr/performance/')) {
      setExpandedMenus(prev => ({ ...prev, "Performance Management": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'reviews') setActiveTab('Employee Reviews');
      if (segment === 'goals') setActiveTab('Employee Goals');
      if (segment === 'cycles') setActiveTab('Review Cycles');
      if (segment === 'indicators') setActiveTab('Indicators');
      if (segment === 'goal-types') setActiveTab('Goal Types');
      if (segment === 'categories') setActiveTab('Indicator Categories');
    } else if (pathname.startsWith('/dashboard/hr/lifecycle/')) {
      setExpandedMenus(prev => ({ ...prev, "Employee Lifecycle": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'awards') setActiveTab('Awards');
      if (segment === 'promotions') setActiveTab('Promotions');
      if (segment === 'transfers') setActiveTab('Transfers');
      if (segment === 'warnings') setActiveTab('Warnings');
      if (segment === 'resignations') setActiveTab('Resignations');
      if (segment === 'terminations') setActiveTab('Terminations');
      if (segment === 'trips') setActiveTab('Trips');
      if (segment === 'complaints') setActiveTab('Complaints');
    } else if (pathname.startsWith('/dashboard/hr/organization/')) {
      setExpandedMenus(prev => ({ ...prev, "Organization Structure": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'branches') setActiveTab('Branches');
      if (segment === 'departments') setActiveTab('Departments');
      if (segment === 'designations') setActiveTab('Designations');
      if (segment === 'award-types') setActiveTab('Award Types');
      if (segment === 'document-types') setActiveTab('Document Types');
      if (segment === 'holidays') setActiveTab('Holidays');
      if (segment === 'announcements') setActiveTab('Announcements');
    } else if (pathname.startsWith('/dashboard/hr/recruitment/')) {
      setExpandedMenus(prev => ({ ...prev, Recruitment: true }));
      const segment = pathname.split('/').pop();
      if (segment === 'categories') setActiveTab('Job Categories');
      if (segment === 'types') setActiveTab('Job Types');
      if (segment === 'locations') setActiveTab('Job Locations');
      if (segment === 'postings') setActiveTab('Job Postings');
      if (segment === 'sources') setActiveTab('Candidate Sources');
      if (segment === 'candidates') setActiveTab('Candidates');
      if (segment === 'interview-types') setActiveTab('Interview Types');
      if (segment === 'interview-rounds') setActiveTab('Interview Rounds');
      if (segment === 'interviews') setActiveTab('Interviews');
      if (segment === 'feedback') setActiveTab('Interview Feedback');
      if (segment === 'assessments') setActiveTab('Candidate Assessments');
      if (segment === 'offer-templates') setActiveTab('Offer Templates');
      if (segment === 'offers') setActiveTab('Offers');
      if (segment === 'onboarding-checklists') setActiveTab('Onboarding Checklists');
      if (segment === 'checklist-items') setActiveTab('Checklist Items');
      if (segment === 'candidate-onboarding') setActiveTab('Candidate Onboarding');
      if (segment === 'career') setActiveTab('Career');
    } else if (pathname.startsWith('/dashboard/hr/training/')) {
      setExpandedMenus(prev => ({ ...prev, "Training & Development": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'programs') setActiveTab('Training Programs');
      if (segment === 'trainings') setActiveTab('Employee Trainings');
      if (segment === 'sessions') setActiveTab('Training Sessions');
      if (segment === 'types') setActiveTab('Training Types');
    } else if (pathname.startsWith('/dashboard/hr/documents/')) {
      setExpandedMenus(prev => ({ ...prev, "Documents & Contracts": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'hr-documents') setActiveTab('HR Documents');
      if (segment === 'employee-contracts') setActiveTab('Employee Contracts');
      if (segment === 'acknowledgments') setActiveTab('Acknowledgments');
      if (segment === 'contract-types') setActiveTab('Contract Types');
      if (segment === 'document-categories') setActiveTab('Document Categories');
      if (segment === 'contract-templates') setActiveTab('Contract Templates');
      if (segment === 'document-templates') setActiveTab('Document Templates');
    } else if (pathname.startsWith('/dashboard/hr/meetings/')) {
      setExpandedMenus(prev => ({ ...prev, Meetings: true }));
      const segment = pathname.split('/').pop();
      if (segment === 'types') setActiveTab('Meeting Types');
      if (segment === 'rooms') setActiveTab('Meeting Rooms');
      if (segment === 'list') setActiveTab('Meetings');
      if (segment === 'attendees') setActiveTab('Meeting Attendees');
      if (segment === 'minutes') setActiveTab('Meeting Minutes');
      if (segment === 'action-items') setActiveTab('Action Items');
    } else if (pathname.startsWith('/dashboard/hr/assets/')) {
      setExpandedMenus(prev => ({ ...prev, "Asset Management": true }));
      const segment = pathname.split('/').pop();
      if (segment === 'list') setActiveTab('Assets');
      if (segment === 'dashboard') setActiveTab('Dashboard');
      if (segment === 'types') setActiveTab('Asset Types');
      if (segment === 'depreciation') setActiveTab('Depreciation');
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
    if (targetRoute === '#') return;
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
    { 
      name: 'Leave Management', 
      icon: <CalendarDays size={18} />, 
      route: '#', 
      hasSub: true,
      subOptions: [
        { name: 'Leave Applications', route: '/dashboard/hr/leave/applications' },
        { name: 'Leave Balances', route: '/dashboard/hr/leave/balances' },
        { name: 'Leave Types', route: '/dashboard/hr/leave/types' },
        { name: 'Leave Policies', route: '/dashboard/hr/leave/policies' }
      ]
    },
    {
      name: 'Payroll Management',
      icon: <CreditCard size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'Payslips', route: '/dashboard/hr/payroll/payslips' },
        { name: 'Payroll Runs', route: '/dashboard/hr/payroll/runs' },
        { name: 'Employee Salaries', route: '/dashboard/hr/payroll/salaries' },
        { name: 'Salary Components', route: '/dashboard/hr/payroll/components' }
      ]
    },
    {
      name: 'Performance Management',
      icon: <Award size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'Employee Reviews', route: '/dashboard/hr/performance/reviews' },
        { name: 'Employee Goals', route: '/dashboard/hr/performance/goals' },
        { name: 'Review Cycles', route: '/dashboard/hr/performance/cycles' },
        { name: 'Indicators', route: '/dashboard/hr/performance/indicators' },
        { name: 'Goal Types', route: '/dashboard/hr/performance/goal-types' },
        { name: 'Indicator Categories', route: '/dashboard/hr/performance/categories' }
      ]
    },
    {
      name: 'Employee Lifecycle',
      icon: <RefreshCw size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'Awards', route: '/dashboard/hr/lifecycle/awards' },
        { name: 'Promotions', route: '/dashboard/hr/lifecycle/promotions' },
        { name: 'Transfers', route: '/dashboard/hr/lifecycle/transfers' },
        { name: 'Warnings', route: '/dashboard/hr/lifecycle/warnings' },
        { name: 'Resignations', route: '/dashboard/hr/lifecycle/resignations' },
        { name: 'Terminations', route: '/dashboard/hr/lifecycle/terminations' },
        { name: 'Trips', route: '/dashboard/hr/lifecycle/trips' },
        { name: 'Complaints', route: '/dashboard/hr/lifecycle/complaints' }
      ]
    },
    { 
      name: 'Organization Structure', 
      icon: <Network size={18} />, 
      route: '#', 
      hasSub: true,
      subOptions: [
        { name: 'Branches', route: '/dashboard/hr/organization/branches' },
        { name: 'Departments', route: '/dashboard/hr/organization/departments' },
        { name: 'Designations', route: '/dashboard/hr/organization/designations' },
        { name: 'Award Types', route: '/dashboard/hr/organization/award-types' },
        { name: 'Document Types', route: '/dashboard/hr/organization/document-types' },
        { name: 'Holidays', route: '/dashboard/hr/organization/holidays' },
        { name: 'Announcements', route: '/dashboard/hr/organization/announcements' }
      ]
    },
    {
      name: 'Recruitment',
      icon: <UserPlus size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'Job Categories', route: '/dashboard/hr/recruitment/categories' },
        { name: 'Job Types', route: '/dashboard/hr/recruitment/types' },
        { name: 'Job Locations', route: '/dashboard/hr/recruitment/locations' },
        { name: 'Job Postings', route: '/dashboard/hr/recruitment/postings' },
        { name: 'Candidate Sources', route: '/dashboard/hr/recruitment/sources' },
        { name: 'Candidates', route: '/dashboard/hr/recruitment/candidates' },
        { name: 'Interview Types', route: '/dashboard/hr/recruitment/interview-types' },
        { name: 'Interview Rounds', route: '/dashboard/hr/recruitment/interview-rounds' },
        { name: 'Interviews', route: '/dashboard/hr/recruitment/interviews' },
        { name: 'Interview Feedback', route: '/dashboard/hr/recruitment/feedback' },
        { name: 'Candidate Assessments', route: '/dashboard/hr/recruitment/assessments' },
        { name: 'Offer Templates', route: '/dashboard/hr/recruitment/offer-templates' },
        { name: 'Offers', route: '/dashboard/hr/recruitment/offers' },
        { name: 'Onboarding Checklists', route: '/dashboard/hr/recruitment/onboarding-checklists' },
        { name: 'Checklist Items', route: '/dashboard/hr/recruitment/checklist-items' },
        { name: 'Candidate Onboarding', route: '/dashboard/hr/recruitment/candidate-onboarding' },
        { name: 'Career', route: '/dashboard/hr/recruitment/career' }
      ]
    },
    {
      name: 'Training & Development',
      icon: <GraduationCap size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'Training Programs', route: '/dashboard/hr/training/programs' },
        { name: 'Employee Trainings', route: '/dashboard/hr/training/trainings' },
        { name: 'Training Sessions', route: '/dashboard/hr/training/sessions' },
        { name: 'Training Types', route: '/dashboard/hr/training/types' }
      ]
    },
    {
      name: 'Documents & Contracts',
      icon: <FileText size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'HR Documents', route: '/dashboard/hr/documents/hr-documents' },
        { name: 'Employee Contracts', route: '/dashboard/hr/documents/employee-contracts' },
        { name: 'Acknowledgments', route: '/dashboard/hr/documents/acknowledgments' },
        { name: 'Contract Types', route: '/dashboard/hr/documents/contract-types' },
        { name: 'Document Categories', route: '/dashboard/hr/documents/document-categories' },
        { name: 'Contract Templates', route: '/dashboard/hr/documents/contract-templates' },
        { name: 'Document Templates', route: '/dashboard/hr/documents/document-templates' }
      ]
    },
    {
      name: 'Meetings',
      icon: <Video size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'Meeting Types', route: '/dashboard/hr/meetings/types' },
        { name: 'Meeting Rooms', route: '/dashboard/hr/meetings/rooms' },
        { name: 'Meetings', route: '/dashboard/hr/meetings/list' },
        { name: 'Meeting Attendees', route: '/dashboard/hr/meetings/attendees' },
        { name: 'Meeting Minutes', route: '/dashboard/hr/meetings/minutes' },
        { name: 'Action Items', route: '/dashboard/hr/meetings/action-items' }
      ]
    },
    {
      name: 'Asset Management',
      icon: <HardDrive size={18} />,
      route: '#',
      hasSub: true,
      subOptions: [
        { name: 'Assets', route: '/dashboard/hr/assets/list' },
        { name: 'Dashboard', route: '/dashboard/hr/assets/dashboard' },
        { name: 'Asset Types', route: '/dashboard/hr/assets/types' },
        { name: 'Depreciation', route: '/dashboard/hr/assets/depreciation' }
      ]
    },
    { name: 'Calendar', icon: <Calendar size={18} />, route: '/dashboard/hr/calendar', hasSub: false },
    { name: 'Media Library', icon: <Image size={18} />, route: '/dashboard/hr/media-library', hasSub: false },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] antialiased relative">
      {!isCollapsed && (
        <div onClick={() => setIsCollapsed(true)} className="fixed inset-0 bg-black/40 z-40 md:hidden" />
      )}

      {/* REMOVED: Outer absolute sidebar control button to match clean interface spacing layout */}
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
                  {!isCollapsed && item.hasSub && (
                    <ChevronRight size={14} className={`text-gray-400 transition-transform duration-200 ml-2 shrink-0 ${isExpanded ? 'rotate-90 text-[#0da777]' : ''}`} />
                  )}
                </button>

                {!isCollapsed && item.hasSub && isExpanded && item.subOptions && (
                  <div className="mt-1 relative pl-6 space-y-0.5 animate-fadeIn">
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