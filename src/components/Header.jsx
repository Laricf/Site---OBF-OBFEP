import React from "react";

export default function Header ({ activeOlimpiada, setActiveOlimpiada, searchTerm, setSearchTerm }) {
    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm"> 
            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
               
                {/* Identificação de Entrada */}
                <div className="flex items-center gap-3">
                    <div
                        className={`w-3 h-8 rounded-full transition-colors duration-300 ${
                            activeOlimpiada === 'obf' ? 'bg-blue-900' : 'bg-emerald-800'
                        }`}
                    />
                    <div>
                        <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                            Portal de Processos
                        </h1>
                        <p className="text-xs text-slate-500 font-medium">
                            OBF & OBFEP • Salvador / UFBA
                        </p>
                    </div>
                </div>

                 {/* Seletor de Tema (Tabs OBF vs OBFEP) */}

                 <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                    <button onClick={() => setActiveOlimpiada ('obf')}
                        className={`px-5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                            activeOlimpiada === 'obf'
                            ? 'bg-blue-900 text-white shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}>
                        OBF
                    </button>
                    <button onClick={() => setActiveOlimpiada ('obfep')}
                        className={`px-5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                            activeOlimpiada === 'obfep'
                            ? 'bg-emerald-800 text-white shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}>
                        OBFEP
                    </button>
                </div>   

                {/* Campo de Busca (Visual) */}

                <div className="hidden md:flex items-center gap-2">
                    <div className="relative">
                        <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Buscar processo, .docx"
                        className="w-52 lg:w-64 pl-8 pr-3 py-1.5 bg-slate-50 text-slate-800 border border-slate-200 rounded-lg 
                        text-xs focus:outline-none focus:right-2 focus:ring-slate-300 transition-all" 
                        />
                        <span className="absolute left-2.5 top-2 text-slate-400 text-xs">
                            🔍
                        </span>

                        {/* Botão para limpar a busca */}
                        {searchTerm && (
                            <button 
                            onClick={() => setSearchTerm ('')}
                            className="absolue right-2 top1.5 text-slate-400 hover:text-slate-600 text-ts font-bold px-1"
                            title="Limpar Busca">
                                X
                            </button>
                        )}
                    </div>
                </div>    
            </div>
        </header>
    );
}