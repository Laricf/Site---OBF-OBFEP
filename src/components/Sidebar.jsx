import React from "react";

export default function Sidebar ({etapas, tema}) {
    const scrollToEtapa = (id) => {
        const element = document.getElementById(`etapa-${id}`);
        if (element){
            element.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    };

    return (
        <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-20 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
                    Navegação Rápida
                </h3>

                <nav className="space-y-1">
                    {etapas.map((etapa)=>(
                        <button
                        key={etapa.id}
                        onClick={() => scrollToEtapa(etapa.id)}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700
                        hover:bg-slate-100 transition-all flex items-center gap-2.5 group"
                        >
                        {/* Indicador com a cor secundária da olimpíada */}
                        <span className={`w-2 h-2 rounded-full ${tema.corSecundária} opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0`}/>
                        <span className="truncate group-hover:text-slate-900">
                            {etapa.titulo}
                        </span>
                        </button>
                    ))}
                </nav>

            {/* Card Informativo de Suporte */}
                <div className="mt-6 pt-4 border-t border-slate-100 px-2">
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                        📌 <b>Dica:</b> As alterações marcadas nos checklists ficam salvas automaticamente neste computador.
                    </p>
                </div>
            </div>
        </aside>
    );

}

