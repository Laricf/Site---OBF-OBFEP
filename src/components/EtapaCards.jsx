import React, { useState, useEffect } from 'react';

export default function EtapaCard({ etapa, tema }) {

  const storageKey = `checklist_${etapa.id}`

 
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : {};
    } catch (erro) {
        console.error("Erro ao carregar do localStorage:", error);
        return {};
    }
  });

  useEffect (() => {
    try {
        localStorage.setItem(storageKey, JSON.stringify(checkedItems));
    } catch (error){
        console.error("Erro ao carregar do localStorage:", error);
    }
  }, [checkedItems, storageKey])

  const toggleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  
  const getFormatBadge = (formato) => {
    switch (formato) {
      case 'docx': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'xlsx': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'pptx': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'mp3':  return 'bg-purple-100 text-purple-800 border-purple-200';
      default:     return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  }; 

  return (
    <div 
    id={`etapa-${etapa.id}`}
    className={`p-6 bg-white rounded-2xl border shadow-sm transition-all ${tema.corBorda}`}>
      
      {/* Cabeçalho da Etapa */}
      <div className="mb-4">
        <h3 className={`text-xl font-bold ${tema.corTexto}`}>
          {etapa.titulo}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {etapa.descricao}
        </p>
      </div>

      {/* Alerta de Processo (Se houver) */}
      {etapa.alerta && (
        <div className="mb-5 p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
          <span className="text-base">⚠️</span>
          <p className="text-xs text-amber-900 font-medium leading-relaxed">
            {etapa.alerta}
          </p>
        </div>
      )}

      {/* Manual Explicativo em PDF (Destaque) */}
        {etapa.manual && (
        <div className="mb-6 p-4 bg-red-50/60 border border-red-200 rounded-xl flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0">
                PDF
            </div>
            <div>
                <h5 className="text-xs font-bold text-red-950 uppercase tracking-wide">
                Guia Operacional Detalhado
                </h5>
                <p className="text-xs text-red-800/80 font-medium mt-0.5">
                {etapa.manual.nome}
                </p>
            </div>
            </div>

            <a
            href={etapa.manual.arquivo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-all shadow-sm flex items-center gap-2"
            >
            <span>📖 Abrir Manual PDF</span>
            </a>
        </div>
        )}

      {/* Checklist Interativo */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Checklist de Tarefas
        </h4>
        <div className="space-y-2">
          {etapa.checklists.map((item, index) => {
            const isChecked = !!checkedItems[index];
            return (
              <label
                key={index}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                  isChecked
                    ? 'bg-slate-50 border-slate-200 text-slate-400 line-through'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleCheck(index)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                />
                <span className="text-sm font-medium leading-snug">
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Arquivos para Download */}
      {etapa.downloads && etapa.downloads.length > 0 && (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Modelos e Documentos Base
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {etapa.downloads.map((doc, idx) => (
              <a
                key={idx}
                href={doc.arquivo}
                download
                className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="text-base">📄</span>
                  <span className="text-xs font-semibold text-slate-800 truncate group-hover:text-slate-900">
                    {doc.nome}
                  </span>
                </div>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${getFormatBadge(doc.formato)}`}>
                  .{doc.formato}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

    </div>
  );
} 