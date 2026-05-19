"use client";

import React from 'react';
import Link from 'next/link';
import LandingNav from '../../components/LandingNav';
import { Users, DollarSign, Clock, UserPlus, Award, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const metrics = [
    { value: '10K+', label: 'Active Users' },
    { value: '50+', label: 'Countries' },
    { value: '99%', label: 'Satisfaction' },
  ];

  const features = [
    {
      title: "Employee Management",
      description: "Centralized profiles with personal, job, and document details.",
      icon: <Users size={22} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Payroll Automation",
      description: "Generate accurate payslips with tax, allowances, and deductions.",
      icon: <DollarSign size={22} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Leave & Attendance",
      description: "Smart tracking of leaves, shifts, and attendance logs.",
      icon: <Clock size={22} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Recruitment & Onboarding",
      description: "Streamline hiring with applicant tracking and digital onboarding.",
      icon: <UserPlus size={22} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Performance Management",
      description: "Set goals, run evaluations, and track employee growth.",
      icon: <Award size={22} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Reports & Analytics",
      description: "Get actionable insights on workforce productivity and HR metrics.",
      icon: <BarChart3 size={22} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Global Navigation Bar */}
      <LandingNav />

      {/* Main Structural Layout Wrapper */}
      <main className="pt-32 pb-24 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto space-y-24 sm:space-y-32">
        
        {/* ================= HERO & METRICS SECTION ================= */}
        <section className="space-y-16 lg:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Typography Box */}
            <div className="lg:col-span-6 space-y-6 text-left max-w-xl lg:max-w-none">
              <div className="inline-flex items-center gap-2 bg-[#0da777]/5 border border-[#0da777]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#0da777]">
                <span>📢</span>
                <span>New: Smart Leave & Attendance Tracking Launched!</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.1] font-black text-[#1e293b] tracking-tight">
                Simplify HR <br />
                <span className="text-[#0da777]">Management</span> <br />
                Effortlessly
              </h1>

              <p className="text-base sm:text-lg font-medium text-gray-500 leading-relaxed">
                Manage employees, payroll, attendance, and more in one powerful, unified system built for modern workspaces.
              </p>

              <div className="pt-2">
                <Link 
                  href="/login" 
                  className="inline-flex items-center gap-2 border-2 border-[#0da777] px-6 py-3 rounded-xl text-sm font-bold text-[#0da777] hover:bg-[#0da777] hover:text-white transition-all shadow-md shadow-[#0da777]/5 hover:shadow-[#0da777]/10 active:scale-[0.99]"
                >
                  <span>▷</span> Login
                </Link>
              </div>
            </div>

            {/* Right Interactive Presentation Mockup UI */}
            <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl bg-slate-50 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="h-6 w-1/3 bg-gray-200/60 rounded-md"></div>
                  <div className="grid grid-cols-3 gap-3 my-auto">
                    <div className="h-16 bg-white border border-gray-100 rounded-xl shadow-sm"></div>
                    <div className="h-16 bg-white border border-gray-100 rounded-xl shadow-sm"></div>
                    <div className="h-16 bg-white border border-gray-100 rounded-xl shadow-sm"></div>
                  </div>
                  <div className="h-24 w-full bg-white border border-gray-100 rounded-xl shadow-sm"></div>
                </div>
                <span className="text-xs font-bold text-gray-400 z-10 uppercase tracking-widest bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200/40">
                  HRM System Interface Viewport
                </span>
              </div>
            </div>
          </div>

          {/* Metric Block Layout */}
          <div className="border-t border-gray-100 pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1e293b] tracking-tight">
                    {metric.value}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CORE FEATURES MATRIX SECTION ================= */}
        <section className="space-y-16 text-center">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto space-y-3.5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">
              Empowering Businesses with Smart HR Solutions
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-400 max-w-xl mx-auto leading-relaxed">
              All-in-one platform to manage employees, payroll, attendance, and performance with ease.
            </p>
          </div>

          {/* 6-Card Responsive Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-gray-200/80 transition-all duration-300 text-left space-y-4 group cursor-pointer"
              >
                {/* Icon Circle Wrapper */}
                <div className={`w-12 h-12 rounded-xl ${feat.bgColor} ${feat.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  {feat.icon}
                </div>

                {/* Content Block */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#1e293b] tracking-tight group-hover:text-[#0da777] transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}