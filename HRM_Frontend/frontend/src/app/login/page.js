// File: src/app/login/page.js
"use client"; 

import { useState } from 'react';
import { login } from '../services/auth'; 

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      console.log('Session authorized successfully:', user);
      
      if (user && user.role) {
        const normalizedRole = String(user.role).trim().toLowerCase();

        // Standardize the local storage format payload before checking guards
        const storagePayload = {
          ...user,
          role: normalizedRole
        };
        localStorage.setItem('user', JSON.stringify(storagePayload));

        // ROLE MANAGEMENT REDIRECTION ENGINE
        if (normalizedRole === 'company') {
          window.location.href = '/dashboard/company';
        } else if (normalizedRole === 'hr') {
          window.location.href = '/dashboard/hr';
        } else if (normalizedRole === 'employee') {
          window.location.href = '/dashboard/employee';
        } else {
          setError('Your account role is not allowed to access a dashboard yet.');
        }
      } else {
        setError('Invalid user data signature received from system API.');
      }
    } catch (err) {
      setError(typeof err === 'string' ? err : 'Authentication failure. Check server status logs.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative bg-[#f8fafc] overflow-x-hidden select-none font-sans">
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.12]"
        style={{ backgroundImage: 'radial-gradient(#0da777 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative w-full max-w-[460px] z-10">
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 p-8 sm:p-10 w-full">
          
          <div className="flex justify-center items-center gap-1.5 mb-8">
            <div className="flex items-center h-8">
              <div className="w-[7px] h-7 bg-[#0da777] rounded-full"></div>
              <div className="w-3 h-[5px] bg-[#0da777] -mx-[1px]"></div>
              <div className="w-[7px] h-7 bg-[#1e293b] rounded-full"></div>
            </div>
            <span className="text-3xl font-bold text-[#1e293b] tracking-tight">I-HRM</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1e293b] tracking-tight">Log in to your account</h2>
            <p className="mt-2 text-sm text-gray-400 font-medium">Enter your credentials to access your portal</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3.5 rounded-xl mb-6 text-sm font-semibold border border-red-100/80 shadow-sm">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wider mb-2">Email address</label>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm transition-all focus:border-[#0da777] outline-none font-semibold"
                placeholder="employee@example.com"
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wider mb-2">Password</label>
              <input
                type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm transition-all focus:border-[#0da777] outline-none font-semibold"
                placeholder="••••••••"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit" disabled={isLoading}
                className="w-full py-3.5 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-[#0da777] hover:bg-[#0b9368] transition-all cursor-pointer"
              >
                {isLoading ? 'Verifying...' : 'Login'}
              </button>
            </div>
          </form>

          <div className="relative my-8 flex items-center justify-center">
            <div className="w-full border-t border-gray-100"></div>
            <div className="absolute bg-white px-3"><div className="w-2 h-2 rotate-45 bg-[#0da777]"></div></div>
          </div>

          <div>
            <p className="text-center text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Access</p>
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <button type="button" onClick={() => handleQuickAccess('company')} className="py-3 px-4 text-xs font-bold rounded-xl text-white bg-[#0da777] hover:bg-[#0b9368] transition-all cursor-pointer">Login As Company</button>
              <button type="button" onClick={() => handleQuickAccess('hr')} className="py-3 px-4 text-xs font-bold rounded-xl text-white bg-[#0da777] hover:bg-[#0b9368] transition-all cursor-pointer">Login As HR</button>
            </div>
            <button type="button" onClick={() => handleQuickAccess('employee')} className="w-full py-3 px-4 text-xs font-bold rounded-xl text-white bg-[#0da777] hover:bg-[#0b9368] transition-all cursor-pointer">Login As Employee</button>
          </div>

        </div>
      </div>
    </div>
  );
}