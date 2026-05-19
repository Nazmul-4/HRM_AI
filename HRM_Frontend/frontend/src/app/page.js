"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LandingNav from '../components/LandingNav'; // Calibrated Path
import { 
  Users, DollarSign, Clock, UserPlus, Award, BarChart3, 
  CheckCircle2, Target, Heart, ShieldCheck, Eye, Mail, Star, 
  ChevronUp, ChevronDown, Send, Phone, MapPin 
} from 'lucide-react';

export default function LandingPage() {
  // Navigation & Form states
  const [openFaq, setOpenFaq] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  
  // Contact Form states
  const [fullName, setFullName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      alert(`Subscription verified for: ${emailInput}`);
      setEmailInput('');
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert(`Message sent successfully!\nName: ${fullName}\nSubject: ${subject}`);
    setFullName('');
    setContactEmail('');
    setSubject('');
    setMessage('');
  };

  const metrics = [
    { value: '10K+', label: 'Active Users' },
    { value: '50+', label: 'Countries' },
    { value: '99%', label: 'Satisfaction' },
  ];

  const features = [
    { title: "Employee Management", description: "Centralized profiles with personal, job, and document details.", icon: <Users size={22} />, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Payroll Automation", description: "Generate accurate payslips with tax, allowances, and deductions.", icon: <DollarSign size={22} />, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Leave & Attendance", description: "Smart tracking of leaves, shifts, and attendance logs.", icon: <Clock size={22} />, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Recruitment & Onboarding", description: "Streamline hiring with applicant tracking and digital onboarding.", icon: <UserPlus size={22} />, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Performance Management", description: "Set goals, run evaluations, and track employee growth.", icon: <Award size={22} />, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Reports & Analytics", description: "Get actionable insights on workforce productivity and HR metrics.", icon: <BarChart3 size={22} />, color: "text-emerald-600", bgColor: "bg-emerald-50" }
  ];

  const previewModules = [
    { name: "Dashboard Overview", desc: "Get a complete overview of employee data, payroll, attendance, and HR activities in one unified dashboard." },
    { name: "Employee Management", desc: "Centralized employee profiles with personal details, documents, and job history." },
    { name: "Payroll & Payslips", desc: "Automated payroll processing with tax calculations, allowances, and downloadable payslips." },
    { name: "Leave Management", desc: "Easily apply, approve, and track employee leave requests with proper workflows and policies." },
    { name: "Attendance Tracking", desc: "Monitor employee check-ins, check-outs, and shifts with automated attendance logs." },
    { name: "Recruitment & Onboarding", desc: "Streamline hiring with applicant tracking and digital onboarding." }
  ];

  const valueProps = [
    { title: "All-in-One HR Solution", desc: "Manage employees, payroll, attendance, recruitment, and performance from a single platform." },
    { title: "Time-Saving Automation", desc: "Automate repetitive HR tasks to focus on strategic decision-making." },
    { title: "Data-Driven Insights", desc: "Make informed decisions with advanced analytics and reports." },
    { title: "Secure & Reliable", desc: "Keep sensitive HR data safe with enterprise-grade security." }
  ];

  const companyValues = [
    { title: "Our Mission", desc: "To empower businesses with smart HR solutions that simplify employee management, payroll, attendance, and performance tracking.", icon: <Target size={20} /> },
    { title: "Our Values", desc: "We prioritize innovation, efficiency, and creating a workplace ecosystem that nurtures growth and collaboration.", icon: <Heart size={20} /> },
    { title: "Our Commitment", desc: "Providing reliable, intuitive HR tools backed by exceptional support to help organizations optimize their workforce.", icon: <ShieldCheck size={20} /> },
    { title: "Our Vision", desc: "A future where HR management is fully automated, transparent, and enables organizations to focus on people, not paperwork.", icon: <Eye size={20} /> }
  ];

  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", initial: "JD", bio: "Experienced HR tech entrepreneur passionate about building intuitive HR solutions." },
    { name: "Jane Smith", role: "CTO", initial: "JS", bio: "Leads the tech team to create scalable and secure HR platforms." },
    { name: "Michael Lee", role: "Head of Product", initial: "ML", bio: "Designs user-centric features to simplify HR processes." },
    { name: "Emily Davis", role: "HR Manager", initial: "ED", bio: "Oversees employee engagement, recruitment, and HR operations." }
  ];

  const testimonials = [
    { quote: "HRM has made managing employee records and attendance effortless. Our HR team saves hours every week!", user: "Alice Johnson", role: "HR Manager", meta: "GlobalTech Ltd.", initial: "AJ" },
    { quote: "The payroll automation is incredibly accurate and easy to use. No more manual calculations or errors!", user: "Robert Smith", role: "Operations Head", meta: "Innovate Solutions", initial: "RS" },
    { quote: "From recruitment to performance management, HRM covers everything we need in one platform.", user: "Maria Davis", role: "CEO", meta: "BrightFuture Corp.", initial: "MD" },
    { quote: "Recruitment and onboarding have never been smoother. The platform is intuitive and highly efficient.", user: "David Lee", role: "Talent Acquisition", meta: "NextGen Enterprises", initial: "DL" },
    { quote: "Payroll processing is now quick and error-free thanks to HRM. It has transformed our monthly workflow.", user: "Samantha Green", role: "Payroll Specialist", meta: "BrightSolutions Inc.", initial: "SG" },
    { quote: "The performance management module helps us track employee goals and progress effortlessly.", user: "Michael Brown", role: "HR Coordinator", meta: "TechWave Ltd.", initial: "MB" }
  ];

  const faqs = [
    { q: "How does HRM work?", a: "HRM is a cloud-based SaaS application. Once created, company admins can manage employee cycles, attendance logging parameters, and run automatic mathematical payroll calculations entirely within the system portal dashboard logs." },
    { q: "Can I automate payroll and leave tracking?", a: "Yes, our automated processing platform syncs real-time attendance entries against pending leaves to dynamically calculate net salaries and formulate compliant, downloadable PDF payslips automatically." },
    { q: "Is my employee data secure?", a: "Data integrity is protected using enterprise-grade end-to-end database encryption algorithms alongside robust JSON Web Token (JWT) route protection barriers." },
    { q: "Can I manage recruitment and onboarding?", a: "Yes, HR tiers possess access to complete candidate tracking timelines, visual pipelines, and job posting modules linked to shareable entry forms." },
    { q: "Does HRM support performance evaluations?", a: "Yes, managers can configure corporate indicators, set objectives, record performance metrics, and log system warnings cleanly." },
    { q: "Can HRM generate HR reports?", a: "Absolutely. The system outputs telemetry logs, summary cards, and chart tracking reports covering staff deployment profiles and operational metrics." },
    { q: "How can I get started?", a: "Simply click the Login action trigger button to initialize pre-loaded role environments instantly." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#0da777]/20">
      <LandingNav />

      {/* Main Container Layout */}
      <main className="pt-32 pb-0 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto space-y-28 sm:space-y-36">
        
        {/* ================= HERO SECTION ================= */}
        <section className="space-y-16 lg:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left max-w-xl lg:max-w-none">
              <div className="inline-flex items-center gap-2 bg-[#0da777]/5 border border-[#0da777]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#0da777]">
                <span>📢</span><span>New: Smart Leave & Attendance Tracking Launched!</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.1] font-black text-[#1e293b] tracking-tight">Simplify HR <br /><span className="text-[#0da777]">Management</span> <br />Effortlessly</h1>
              <p className="text-base sm:text-lg font-medium text-gray-500 leading-relaxed">Manage employees, payroll, attendance, and more in one powerful, unified system built for modern workspaces.</p>
              <div className="pt-2">
                {/* Pointing correctly to the new /login subroute folder */}
                <Link href="/login" className="inline-flex items-center gap-2 border-2 border-[#0da777] px-6 py-3 rounded-xl text-sm font-bold text-[#0da777] hover:bg-[#0da777] hover:text-white transition-all shadow-md shadow-[#0da777]/5 hover:shadow-[#0da777]/10 active:scale-[0.99]">
                  <span>▷</span> Login
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl bg-slate-50 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="h-6 w-1/3 bg-gray-200/60 rounded-md"></div>
                  <div className="grid grid-cols-3 gap-3 my-auto"><div className="h-16 bg-white border border-gray-100 rounded-xl"></div><div className="h-16 bg-white border border-gray-100 rounded-xl"></div><div className="h-16 bg-white border border-gray-100 rounded-xl"></div></div>
                  <div className="h-24 w-full bg-white border border-gray-100 rounded-xl"></div>
                </div>
                <span className="text-xs font-bold text-gray-400 z-10 uppercase tracking-widest bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200/40">HRM System Interface Viewport</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
              {metrics.map((metric, idx) => (<div key={idx} className="space-y-1"><h3 className="text-3xl sm:text-4xl font-black text-[#1e293b] tracking-tight">{metric.value}</h3><p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider">{metric.label}</p></div>))}
            </div>
          </div>
        </section>

        {/* ================= CORE FEATURES MATRIX SECTION ================= */}
        <section className="space-y-16 text-center">
          <div className="max-w-2xl mx-auto space-y-3.5"><h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">Empowering Businesses with Smart HR Solutions</h2><p className="text-sm sm:text-base font-medium text-gray-400 max-w-xl mx-auto">All-in-one platform to manage employees, payroll, attendance, and performance with ease.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.005)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:border-gray-200/60 transition-all duration-300 text-left space-y-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl ${feat.bgColor} ${feat.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>{feat.icon}</div>
                <div className="space-y-2"><h3 className="text-lg font-bold text-[#1e293b] tracking-tight group-hover:text-[#0da777] transition-colors">{feat.title}</h3><p className="text-sm font-medium text-gray-500 leading-relaxed">{feat.description}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FEATURE PREVIEWS SECTION ================= */}
        <section className="space-y-16 text-center">
          <div className="max-w-2xl mx-auto space-y-3.5"><h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">See HRM in Action</h2><p className="text-sm sm:text-base font-medium text-gray-400 max-w-xl mx-auto">Discover how our modern HRM platform helps you manage employees, payroll, attendance, and performance — all in one place.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewModules.map((mod, idx) => (
              <div key={idx} className="space-y-5 text-left group">
                <div className="w-full aspect-[16/10] bg-slate-50 border border-gray-150 rounded-2xl shadow-sm overflow-hidden p-3.5 relative flex flex-col gap-2 group-hover:border-gray-300 transition-colors duration-300">
                  <div className="flex gap-1.5 pb-2 border-b border-gray-200/50"><div className="w-2 h-2 rounded-full bg-gray-200"></div><div className="w-2 h-2 rounded-full bg-gray-200"></div><div className="w-2 h-2 rounded-full bg-gray-200"></div></div>
                  <div className="flex-1 bg-white rounded-xl border border-gray-150/80 p-3 flex flex-col justify-between"><div className="h-4 bg-slate-100 rounded w-1/2"></div><div className="space-y-2"><div className="h-2 bg-slate-50 rounded w-full"></div><div className="h-2 bg-slate-50 rounded w-5/6"></div></div><div className="h-8 bg-[#0da777]/5 border border-[#0da777]/10 rounded-lg"></div></div>
                </div>
                <div className="space-y-1.5 px-1"><h3 className="text-base font-bold text-[#1e293b] tracking-tight">{mod.name}</h3><p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">{mod.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="pt-4 flex justify-center"><button className="inline-flex items-center gap-2 bg-white border border-[#0da777]/30 px-5 py-2.5 rounded-full text-xs font-bold text-[#0da777] shadow-sm"><span>✨</span> And many more features to discover</button></div>
        </section>

        {/* ================= WHY CHOOSE HRM TRUST BLOCK ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-white pt-4">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3"><h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">Why Choose HRM?</h2><p className="text-sm sm:text-base font-medium text-gray-400">Smart, simple, and powerful HR solutions for every business.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="text-[#0da777] mt-0.5 shrink-0"><CheckCircle2 size={18} className="text-white fill-[#0da777]" /></div>
                  <div className="space-y-0.5"><h4 className="text-sm sm:text-base font-bold text-[#1e293b] tracking-tight">{prop.title}</h4><p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">{prop.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] bg-slate-50 border border-gray-150 p-6 sm:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.01)] space-y-6">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider text-center">Trusted by Industry Leaders</h3>
              <p className="text-xs font-semibold text-gray-400 text-center -mt-4">Join the growing community of professionals</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-150 p-4 rounded-xl text-center shadow-sm"><h4 className="text-2xl font-black text-[#1e293b] tracking-tight">500+</h4><p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Companies Using HRM</p></div>
                <div className="bg-white border border-gray-150 p-4 rounded-xl text-center shadow-sm"><h4 className="text-2xl font-black text-[#1e293b] tracking-tight">20K+</h4><p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Employees Managed</p></div>
              </div>
              <div className="bg-white border border-gray-150 p-5 rounded-xl text-center shadow-sm space-y-0.5"><h4 className="text-2xl font-black text-[#1e293b] tracking-tight">98%</h4><p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Customer Satisfaction</p></div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pt-4">
          <div className="lg:col-span-5 space-y-5 text-left max-w-xl lg:max-w-none">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">About HRM</h2><p className="text-sm sm:text-base font-medium text-gray-400 leading-relaxed">We are passionate about simplifying HR management for businesses of all sizes.</p>
            <div className="space-y-4 text-sm font-medium text-gray-500 leading-relaxed">
              <p>Founded by HR and tech enthusiasts, HRM was created to replace cumbersome spreadsheets and manual processes with a modern, all-in-one HR platform.</p>
              <div className="bg-slate-50 border border-gray-150 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 mt-2"><div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-sm border border-gray-100">🚀</div><h4 className="text-sm font-bold text-[#1e293b]">Innovation Driven</h4><p className="text-xs text-gray-400 max-w-xs">Building the future of corporate employee management networks.</p></div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {companyValues.map((val, idx) => (<div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.003)] space-y-3"><div className="w-9 h-9 rounded-xl bg-[#0da777]/5 text-[#0da777] flex items-center justify-center">{val.icon}</div><h4 className="text-base font-bold text-[#1e293b] tracking-tight">{val.title}</h4><p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">{val.desc}</p></div>))}
          </div>
        </section>

        {/* ================= MEET OUR TEAM SECTION ================= */}
        <section className="space-y-16 text-center pt-4">
          <div className="max-w-2xl mx-auto space-y-3.5"><h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">Meet Our Team</h2><p className="text-sm sm:text-base font-medium text-gray-400 max-w-xl mx-auto">We're a dedicated team of HR and technology experts committed to creating software that empowers people.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.005)] flex flex-col justify-between items-center text-center space-y-5 group hover:border-gray-200/80 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-[#0da777] text-white font-black text-lg flex items-center justify-center shadow-sm">{member.initial}</div>
                <div className="space-y-1 flex-1"><h4 className="text-base font-bold text-[#1e293b] tracking-tight">{member.name}</h4><p className="text-xs font-bold text-[#0da777] uppercase tracking-wide">{member.role}</p><p className="text-xs font-medium text-gray-400 mt-2 leading-relaxed px-1">{member.bio}</p></div>
                <div className="flex gap-3 justify-center text-gray-400 pt-2 border-t border-gray-50 w-full group-hover:text-gray-600 transition-colors">
                  <button className="hover:text-[#0da777] transition-colors p-1 cursor-pointer">
                    <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="hover:text-[#0da777] p-1"><Mail size={15} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CLIENT REVIEWS GRID SECTION ================= */}
        <section className="space-y-16 text-center pt-4">
          <div className="max-w-2xl mx-auto space-y-3.5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">What Our Clients Say</h2>
            <p className="text-sm sm:text-base font-medium text-gray-400">Hear from HR leaders who trust our platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.003)] text-left flex flex-col justify-between space-y-6 relative group hover:border-gray-200/80 transition-all duration-300">
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed flex-1">"{test.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-[#0da777]/10 text-[#0da777] font-extrabold text-xs flex items-center justify-center uppercase">{test.initial}</div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#1e293b] tracking-tight">{test.user}</h5>
                    <p className="text-[11px] font-bold text-gray-400 mt-0.5">{test.role} · <span className="text-[#0da777]">{test.meta}</span></p>
                  </div>
                </div>
                <span className="absolute top-4 right-6 text-5xl font-serif text-slate-100 group-hover:text-[#0da777]/10 transition-colors pointer-events-none select-none">“</span>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl p-5 max-w-xl mx-auto flex items-center justify-between gap-6 shadow-sm">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Worldwide Average Rating</span>
            <div className="h-6 w-[1px] bg-gray-200"></div>
            <div className="flex items-center gap-1.5 text-sm font-black text-[#1e293b]">
              <span>⭐ 4.9 / 5</span>
              <span className="text-xs font-medium text-gray-400">(500+ Companies Served)</span>
            </div>
          </div>
        </section>

        {/* ================= FREQUENTLY ASKED QUESTIONS SECTION ================= */}
        <section className="space-y-12 max-w-3xl mx-auto pt-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base font-medium text-gray-400">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-3 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-gray-150 rounded-xl overflow-hidden transition-all duration-200">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 flex justify-between items-center text-sm sm:text-base font-bold text-[#1e293b] text-left hover:bg-slate-50/50 cursor-pointer transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 shrink-0 ml-4">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-medium text-gray-500 leading-relaxed border-t border-gray-50 bg-slate-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-8 space-y-4 flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-500 tracking-tight">Still have questions?</p>
            <button className="bg-[#0da777] hover:bg-[#0b9368] active:scale-[0.99] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-[#0da777]/10 cursor-pointer">Contact Support</button>
          </div>
        </section>

        {/* ================= STAY UPDATED WITH HRM PANEL ================= */}
        <section className="max-w-3xl mx-auto bg-slate-50 border border-gray-150 p-8 sm:p-10 rounded-2xl shadow-sm text-center space-y-6">
          <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#0da777] mx-auto">
            <Send size={18} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#1e293b] tracking-tight">Stay Updated with HRM</h3>
            <p className="text-xs sm:text-sm font-medium text-gray-400 max-w-md mx-auto">Get the latest updates, HR tips, and feature announcements directly in your inbox.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input 
              type="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:border-[#0da777]"
            />
            <button type="submit" className="bg-[#0da777] hover:bg-[#0b9368] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shadow-[#0da777]/5 cursor-pointer">Subscribe</button>
          </form>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">No spam. Unsubscribe at any time.</p>
        </section>

        {/* ================= GET IN TOUCH CONTACT FORM MODULE ================= */}
        <section className="space-y-12 max-w-[1140px] mx-auto pt-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">Get in Touch</h2>
            <p className="text-sm sm:text-base font-medium text-gray-400">Have questions about HRM? We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
            <div className="lg:col-span-7 bg-white border border-gray-150 p-6 sm:p-8 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
              <form onSubmit={handleSendMessage} className="space-y-5">
                <h3 className="text-lg font-bold text-[#1e293b] tracking-tight mb-2">Send us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:border-[#0da777]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:border-[#0da777]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Subject <span className="text-red-500">*</span></label>
                  <input type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="What's this about?" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:border-[#0da777]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Message <span className="text-red-500">*</span></label>
                  <textarea rows="4" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us more about your inquiry..." className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:border-[#0da777] resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0da777] hover:bg-[#0b9368] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"><Send size={14} /> Send Message</button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:pl-6">
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[#1e293b] tracking-tight">Contact Information</h3>
                <p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">We're here to help and answer any questions you might have about managing your HR processes efficiently.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50/60 border border-gray-100 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0da777]/5 text-[#0da777] flex items-center justify-center shrink-0"><Mail size={18} /></div>
                  <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Us</h4><p className="text-sm font-bold text-gray-800 mt-0.5">support@hrm.com</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50/60 border border-gray-100 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0da777]/5 text-[#0da777] flex items-center justify-center shrink-0"><Phone size={18} /></div>
                  <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Us</h4><p className="text-sm font-bold text-gray-800 mt-0.5">+1 (555) 123-4567</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50/60 border border-gray-100 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0da777]/5 text-[#0da777] flex items-center justify-center shrink-0"><MapPin size={18} /></div>
                  <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Visit Us</h4><p className="text-sm font-bold text-gray-800 mt-0.5">San Francisco, CA</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ================= UNIFIED ENTERPRISE STATIC FOOTER ================= */}
      <footer className="bg-[#0f172a] text-slate-400 text-xs font-medium mt-32 border-t border-slate-800 select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5 text-white"><div className="w-[6px] h-6 bg-[#0da777] rounded-full"></div><div className="w-2.5 h-[4px] bg-[#0da777] -mx-[1px]"></div><div className="w-[6px] h-6 bg-white rounded-full"></div><span className="text-xl font-bold tracking-tight ml-0.5">RM</span></div>
            <p className="text-slate-400 leading-relaxed max-w-xs pr-4">Simplifying HR management with an all-in-one modern platform built for scale, compliance, and user-centric operations.</p>
            <div className="space-y-2 pt-2 text-slate-500 font-semibold">
              <div className="flex items-center gap-2.5"><Mail size={14} className="text-slate-600" /><span>support@hrm.com</span></div>
              <div className="flex items-center gap-2.5"><Phone size={14} className="text-slate-600" /><span>+1 (555) 123-4567</span></div>
              <div className="flex items-center gap-2.5"><MapPin size={14} className="text-slate-600" /><span>San Francisco, CA</span></div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase text-[11px]">Product</h4>
            <ul className="space-y-2.5 font-bold text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase text-[11px]">Company</h4>
            <ul className="space-y-2.5 font-bold text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase text-[11px]">Support</h4>
            <ul className="space-y-2.5 font-bold text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase text-[11px]">Legal</h4>
            <ul className="space-y-2.5 font-bold text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 bg-[#0b111e] py-6 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 font-bold text-[11px]">
            <span>© 2026 HRM. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}