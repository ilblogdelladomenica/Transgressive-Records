import React, { useState, useMemo } from 'react';
import { RECORDS_DATA } from './constants';
import RecordCard from './components/RecordCard';
import Header from './components/Header';
import { Search, Filter, Music2 } from 'lucide-react';
import { ReleaseType } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ReleaseType | 'All'>('All');

  const filteredRecords = useMemo(() => {
    return RECORDS_DATA.filter(record => {
      const matchesSearch = 
        record.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'All' || record.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  const upcomingRecords = filteredRecords.filter(r => r.isUpcoming);
  const recentRecords = filteredRecords.filter(r => !r.isUpcoming);

  const hasUpcoming = upcomingRecords.length > 0;
  const hasRecent = recentRecords.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6">
        
        <Header />

        {/* Filters Bar */}
        <div className="sticky top-4 z-20 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 p-4 mb-10 transition-all">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                
                {/* Search Input */}
                <div className="relative w-full md:w-1/2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition-shadow"
                        placeholder="Cerca artista o album..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    <Filter className="w-4 h-4 text-gray-400 shrink-0" />
                    <button 
                        onClick={() => setSelectedType('All')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${selectedType === 'All' ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        Tutti
                    </button>
                    {(Object.values(ReleaseType) as ReleaseType[]).map((type) => (
                         <button 
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${selectedType === type ? 'bg-indigo-600 text-white shadow-md' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="space-y-16">
            
            {!hasUpcoming && !hasRecent && (
                <div className="text-center py-20">
                    <Music2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-600">Nessun disco trovato</h3>
                    <p className="text-gray-400">Prova a modificare i filtri di ricerca.</p>
                </div>
            )}

            {/* Upcoming Section */}
            {hasUpcoming && (
                <section className="animate-fade-in">
                     <div className="flex items-center gap-4 mb-8 border-b-2 border-indigo-100 pb-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                            <span className="text-xl">🚀</span>
                        </span>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Prossime Uscite e 2026
                        </h2>
                     </div>
                     <div className="grid grid-cols-1 gap-6">
                         {upcomingRecords.map(record => (
                             <RecordCard key={record.id} record={record} />
                         ))}
                     </div>
                </section>
            )}

            {/* Recent Section */}
            {hasRecent && (
                <section className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-8 border-b-2 border-gray-200 pb-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600">
                            <span className="text-xl">🗂️</span>
                        </span>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Dal 2023 al 2025
                        </h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {recentRecords.map(record => (
                             <RecordCard key={record.id} record={record} />
                         ))}
                     </div>
                </section>
            )}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm py-8 border-t border-gray-200">
            <p>&copy; 2025 Transgressive Records Fan Showcase. Made with React & Tailwind.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;