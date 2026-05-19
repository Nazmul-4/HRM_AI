"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../services/auth';

export default function LoginPage() {
  const router = useRouter();
  
  // Core functional state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Quick access credential handler
  const handleQuickAccess = (role) => {
    setError('');
    if (role === 'company') {
      setEmail('company@example.com');
      setPassword('12345678');
    } else if (role === 'hr') {
      setEmail('hr@example.com');
      setPassword('12345678');
    } else if (role === 'employee') {
      setEmail('employee@example.com');
      setPassword('12345678');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      console.log('Session authorized:', user);
      router.push('/dashboard'); 
    } catch (err) {
      setError(err?.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative bg-[#fcfdfe] overflow-x-hidden select-none font-sans">
      
      {/* Background Matrix Grid of Dots */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(#0da777 1.5px, transparent 1.5px)',
          backgroundSize: '46px 46px',
        }}
      />

      {/* Global Top-Right Language Action Bar */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-10 z-10">
        <button type="button" className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-lg border border-gray-300/80 text-sm font-normal text-gray-800 shadow-sm hover:bg-gray-50 transition-all cursor-pointer">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
          </svg>
          <span className="text-[13px] font-medium text-slate-800">English</span>
          <span className="ml-0.5 text-xs">🇬🇧</span>
        </button>
      </div>

      {/* Main Structural Interface Wrapper */}
      <div className="relative w-full max-w-[500px] z-10 px-4">
        
        {/* Exact Decorative Accent Corners */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#0da777] rounded-tl-[3px] hidden sm:block"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#0da777] rounded-br-[3px] hidden sm:block"></div>

        {/* Core Presentation Card */}
        <div className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-200/70 p-6 sm:p-10 w-full">
          
          {/* Brand Identity Logo System */}
          <div className="flex justify-center items-center mb-6">
            <span className="text-3xl font-bold tracking-tight text-slate-800">
              <span className="text-[#0da777]">H</span>RM
            </span>
          </div>

          {/* Typography Header Section */}
          <div className="text-center mb-7">
            <h2 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight">
              Log in to <span className="border-b-2 border-slate-900 pb-0.5">your account</span>
            </h2>
            <p className="mt-3 text-[13px] font-normal text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form Validation Alert Box */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5 text-xs font-medium border border-red-100 shadow-sm">
              {error}
            </div>
          )}

          {/* Interactive Credential Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            
            {/* Email Form Field */}
            <div>
              <label className="block text-[13px] font-medium text-slate-800 mb-1.5">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 font-normal transition-all focus:outline-none focus:border-[#0da777] placeholder-gray-400"
                placeholder="company@example.com"
              />
            </div>

            {/* Password Form Field */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[13px] font-medium text-slate-800">
                  Password <span className="text-red-500">*</span>
                </label>
                <a href="#" className="text-[13px] font-medium text-[#0da777] hover:underline transition-all">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 font-normal transition-all focus:outline-none focus:border-[#0da777] placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>

            {/* Remember State Option */}
            <div className="flex items-center pt-0.5">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 border-gray-300 rounded text-[#0da777] focus:ring-0 cursor-pointer accent-[#0da777]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-[13px] font-normal text-gray-500 cursor-pointer select-none">
                Remember me
              </label>
            </div>

            {/* Authorization Action Control */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-lg text-sm font-medium text-white bg-[#0da777] hover:bg-[#0b9368] transition-all disabled:opacity-50 cursor-pointer text-center"
              >
                {isLoading ? 'Verifying Context...' : 'Login'}
              </button>
            </div>
          </form>

          {/* Geometric Custom Separation Rule */}
          <div className="relative my-7 flex items-center justify-center">
            <div className="w-full border-t border-gray-200"></div>
            <div className="absolute bg-white px-2.5">
              <div className="w-2 h-2 rotate-45 bg-[#0da777]"></div>
            </div>
          </div>

          {/* Quick Access Matrix Block */}
          <div>
            <p className="text-center text-[13px] font-medium text-slate-800 mb-3.5">
              Quick Access
            </p>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button
                type="button"
                onClick={() => handleQuickAccess('company')}
                className="py-2.5 px-4 text-xs font-medium rounded-lg text-white bg-[#0da777] hover:bg-[#0b9368] transition-all cursor-pointer text-center"
              >
                Login As Company
              </button>
              <button
                type="button"
                onClick={() => handleQuickAccess('hr')}
                className="py-2.5 px-4 text-xs font-medium rounded-lg text-white bg-[#0da777] hover:bg-[#0b9368] transition-all cursor-pointer text-center"
              >
                Login As HR
              </button>
            </div>
            <button
              type="button"
              onClick={() => handleQuickAccess('employee')}
              className="w-full py-2.5 px-4 text-xs font-medium rounded-lg text-white bg-[#0da777] hover:bg-[#0b9368] transition-all cursor-pointer text-center"
            >
              Login As Employee
            </button>
          </div>

        </div>
      </div>

      {/* System Legal Attribution Footer */}
      <div className="mt-6 bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-[11px] text-gray-500 font-medium shadow-sm">
        © 2026 TEST UPDATE
      </div>
    </div>
  );
}