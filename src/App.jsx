import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EtapaCard from './components/EtapaCards';
import { olimpiadasData } from './data/processos';

export default function App() {
  const [activeOlimpiada, setActiveOlimpiada] = useState('obf');
  const [searchTerm, setSearchTerm] = useState('');

  const currentData = olimpiadasData[activeOlimpiada];

  // Troca de olimpíada limpa o campo de busca
  const handleSelectOlimpiada = (id) => {
    setActiveOlimpiada(id);
    setSearchTerm('');
  };

  // Lógica de Filtro Global da Busca
  const filteredEtapas = currentData.etapas.filter((etapa) => {
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();

    const matchTitulo = etapa.titulo.toLowerCase().includes(term);
    const matchDesc = etapa.descricao.toLowerCase().includes(term);
    const matchAlerta = etapa.alerta ? etapa.alerta.toLowerCase().includes(term) : false;
    const matchChecklist = etapa.checklists.some(item => item.toLowerCase().includes(term));
    const matchDownloads = etapa.downloads ? etapa.downloads.some(doc => doc.nome.toLowerCase().includes(term)) : false;

    return matchTitulo || matchDesc || matchAlerta || matchChecklist || matchDownloads;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${currentData.tema.corFundo}`}>
      {/* Cabeçalho */}
      <Header 
        activeOlimpiada={activeOlimpiada} 
        setActiveOlimpiada={handleSelectOlimpiada} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Assinatura de Legado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 -mb-4 flex justify-end">
        <div 
          className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-slate-600 transition-colors duration-300 cursor-default select-none group"
          title="Que a sorte esteja sempre a seu favor! 🕊️✨"
        >
          <svg 
            className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.9)] transition-all duration-300 transform -rotate-45" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="19" y1="5" x2="10" y2="14" />
            <line x1="9" y1="15" x2="5" y2="19" strokeWidth="3" />
            <line x1="8" y1="13" x2="11" y2="16" strokeWidth="1.5" />
          </svg>
          <span className="italic font-light tracking-wide">
            Que a sorte esteja sempre ao seu favor
          </span>
          <svg 
            className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 group-hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.9)] transition-all duration-300" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M16 16c2-1 4-3 5-6-3 1-5 1-7 0 2-3 1-6-1-8-1 2-3 3-5 3.5C6 5.5 3 8 2 12c3 0 5.5 1.5 7 3.5 0-2 1.5-3.5 3.5-3.5 1.5 0 2.5 1 3.5 4z" />
          </svg>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Banner Superior do Ambiente */}
        <div className={`p-6 rounded-2xl border bg-white shadow-sm mb-8 transition-all ${currentData.tema.corBorda}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${currentData.tema.badge}`}>
              Ambiente Ativo: {currentData.sigla}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            {currentData.nome}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {currentData.subtitulo}
          </p>
        </div>

        {/* Layout Flexível: Sidebar + Lista de Etapas */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <Sidebar 
            etapas={filteredEtapas} 
            tema={currentData.tema} 
          />

          {/* Área dos Cards */}
          <div className="flex-1 space-y-6">
            {filteredEtapas.length > 0 ? (
              filteredEtapas.map((etapa) => (
                <EtapaCard 
                  key={etapa.id} 
                  etapa={etapa} 
                  tema={currentData.tema} 
                />
              ))
            ) : (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
                <span className="text-3xl mb-3 block">🔍</span>
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  Nenhum processo encontrado
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Não encontramos nada correspondente a "{searchTerm}" em {currentData.sigla}.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all"
                >
                  Limpar busca
                </button>
              </div>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}