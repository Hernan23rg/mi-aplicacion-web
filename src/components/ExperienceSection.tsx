import React, { useState, useMemo } from 'react';
import { EXPERIENCES } from '../data/cvData';
import { Building2, Calendar, MapPin, Search, ChevronDown, ChevronUp, CheckCircle2, History } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['exp-1', 'exp-2', 'exp-3']));

  const categories = [
    { id: 'all', label: 'Toda la Trayectoria', count: EXPERIENCES.length },
    { id: 'salud', label: 'Sector Salud – PRONIS', count: EXPERIENCES.filter(e => e.type === 'salud').length },
    { id: 'regional', label: 'Gobiernos Regionales & PESCS', count: EXPERIENCES.filter(e => e.type === 'regional').length },
    { id: 'saneamiento_mineria', label: 'Saneamiento & Minería', count: EXPERIENCES.filter(e => e.type === 'saneamiento_mineria').length },
  ];

  const filteredExperiences = useMemo(() => {
    return EXPERIENCES.filter((item) => {
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.role.toLowerCase().includes(q) ||
        item.entity.toLowerCase().includes(q) ||
        item.period.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchesType && matchesSearch;
    });
  }, [selectedType, searchTerm]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(filteredExperiences.map(e => e.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  return (
    <section id="experiencia" className="py-20 lg:py-24 bg-gradient-to-b from-white via-teal-50/20 to-slate-50 border-b border-emerald-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <History className="w-3.5 h-3.5 text-emerald-700" />
            <span>Trayectoria Profesional Comprobada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Experiencia Laboral & Servicios Especializados
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            Cronología de servicios técnicos, consultorías y cargos de responsabilidad en formulación, evaluación y supervisión ambiental desde 2008 hasta la actualidad.
          </p>
        </div>

        {/* Filter Controls Bar with Rich Colors */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedType === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedType(cat.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-md shadow-emerald-900/20'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${isActive ? 'bg-emerald-900/80 text-emerald-100' : 'bg-white text-slate-700 border border-slate-200'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filtrar por entidad o puesto..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-emerald-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 shadow-2xs"
              />
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-600 shrink-0 font-bold">
              <button
                onClick={expandAll}
                className="px-2.5 py-1.5 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-colors"
                title="Expandir todas las tarjetas"
              >
                Expandir
              </button>
              <span>·</span>
              <button
                onClick={collapseAll}
                className="px-2.5 py-1.5 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-colors"
                title="Colapsar todas las tarjetas"
              >
                Colapsar
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Container with Vibrant Gradient Track */}
        <div className="relative pl-5 sm:pl-9 border-l-2 border-gradient-to-b from-emerald-500 via-teal-400 to-emerald-300 space-y-6">
          {filteredExperiences.map((item) => {
            const isExpanded = expandedIds.has(item.id);

            return (
              <div
                key={item.id}
                className="relative group transition-all"
              >
                {/* Timeline node marker with Vibrant Emerald Glow */}
                <div className="absolute -left-[27px] sm:-left-[43px] top-4 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100 group-hover:ring-emerald-300 group-hover:scale-125 transition-all shadow-sm" />

                {/* Card Container with Rich Hover Styling */}
                <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/70 p-6 transition-all shadow-xs hover:shadow-lg hover:-translate-y-0.5">
                  {/* Top Bar: Entity & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                        {item.entity}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded-md border border-emerald-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Main Role Title */}
                  <div className="pt-3">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                      {item.role}
                    </h3>

                    {/* Unboxed Location and Scope */}
                    <div className="flex items-center gap-2 text-xs text-slate-600 mt-1.5 mb-3 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{item.location}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-emerald-900 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{item.scope}</span>
                    </div>

                    {/* Description preview */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Expandable Highlights */}
                    {isExpanded && item.highlights && item.highlights.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                        <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider block">
                          Actividades & Logros Principales:
                        </span>
                        <ul className="space-y-1.5">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Toggle button */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-emerald-800 hover:text-emerald-950 transition-colors flex items-center gap-1 font-bold"
                    >
                      <span>{isExpanded ? 'Ver menos información' : 'Ver detalle y logros'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <span className="text-[11px] font-mono text-slate-600 font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {item.periodNormalized}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
