import React from 'react';
import { Disc } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-white overflow-hidden mb-10 rounded-3xl shadow-xl border border-indigo-50">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 px-6 py-12 md:py-16 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6 shadow-sm">
            <Disc className="w-8 h-8 text-indigo-600 animate-spin-slow" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
            Transgressive Records
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vetrina discografica: le 20 uscite più calde e recenti (2023–2026)
        </p>
      </div>
    </header>
  );
};

export default Header;