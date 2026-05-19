"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingNav() {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ];

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 flex items-center justify-between select-none">
      {/* Brand Identity System */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center h-6">
          <div className="w-[6px] h-6 bg-[#0da777] rounded-full"></div>
          <div className="w-2.5 h-[4px] bg-[#0da777] -mx-[1px]"></div>
          <div className="w-[6px] h-6 bg-[#1e293b] rounded-full"></div>
        </div>
        <span className="text-xl font-bold text-[#1e293b] tracking-tight ml-0.5">RM</span>
      </div>

      {/* Center Link Matrix (Desktop Hidden on Mobile) */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`text-[13px] font-semibold transition-colors ${
              index === 0 ? 'text-[#0da777]' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Secondary CTAs */}
      <div>
        <Link 
          href="/login" 
          className="text-[13px] font-bold text-gray-700 hover:text-[#0da777] transition-colors bg-gray-50 hover:bg-gray-100/70 px-4 py-2.5 rounded-xl border border-gray-200/40"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}