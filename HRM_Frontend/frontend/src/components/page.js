"use client";

import React from 'react';
import Link from 'next/link';
import LandingNav from '../../components/LandingNav';

export default function LandingPage() {
  const metrics = [
    { value: '10K+', label: 'Active Users' },
    { value: '50+', label: 'Countries' },
    { value: '99%', label: 'Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Structural Header Layout Injector */}
      <LandingNav />

      {/* Core Hero Content Container */}
      <main className="pt-32 pb-20 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto space-y-16 lg:space-y-24">
        
        {/* Split Typography Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl lg:max-w-none">
            
            {/* Dynamic Announcement Pill */}
            <div className="inline-flex items-center gap-2 bg-[#0da777]/5 border border-[#0da777]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#0da777]">
              <span>📢</span>
              <span>New: Smart Leave & Attendance Tracking Launched!</span>
            </div>

            {/* Scale Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.1] font-black text-[#1e293b] tracking-tight">
              Simplify HR <br />
              <span className="text-[#0da777]">Management</span> <br />
              Effortlessly
            </h1>

            {/* Description Subtext */}
            <p className="text-base sm:text-lg font-medium text-gray-500 leading-relaxed">
              Manage employees, payroll, attendance, and more in one powerful, unified system built for modern workspaces.
            </p>

            {/* Primary Action Trigger */}
            <div className="pt-2">
              <Link 
                href="/login" 
                className="inline-flex items-center gap-2 border-2 border-[#0da777] px-6 py-3 rounded-xl text-sm font-bold text-[#0da777] hover:bg-[#0da777] hover:text-white transition-all shadow-md shadow-[#0da777]/5 hover:shadow-[#0da777]/10 active:scale-[0.99]"
              >
                <span>▷</span> Login
              </Link>
            </div>
          </div>

          {/* Right Hero High-Fidelity Mockup Container */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl bg-slate-50 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden">
              {/* Internal structural placeholder grid line accent mimics screenshot dashboard */}
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

        {/* Triple Aggregate Metrics Grid Section */}
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

      </main>
    </div>
  );
}