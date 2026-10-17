import React, { useState, useMemo } from 'react';
import { DIPLOMAS, CERTIFICATIONS } from '../data/cvData';
import { GraduationCap, Award, BookCheck, Clock, CheckCircle2, Search, Sparkles } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'diplomados' | 'especializaciones' | 'software'>('all');
  const [certSearch, setCertSearch] = useState<string>('');

  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS.filter((c) => {
      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'diplomados' && c.category === 'diplomado') ||
        (activeTab === 'especializaciones' && (c.category === 'especializacion' || c.category === 'normativa')) ||
        (activeTab === 'software' && c.category === 'software');

      const q = certSearch.toLowerCase().trim();
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.institution.toLowerCase().includes(q) ||
        c.period.toLowerCase().includes(q) ||
        c.categoryLabel.toLowerCase().includes(q);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, certSearch]);

  return (
    <section id="formacion" className="py-20 lg:py-24 bg-white border-b border-emerald-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Acreditación Académica & Calificaciones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Formación Académica y Certificaciones
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            Grado profesional universitario, habilitación del Colegio de Ingenieros del Perú, diplomados de postgrado y más de 1,200 horas de capacitación técnica continua.
          </p>
        </div>

        {/* 1. Academic Title & CIP Card (Prominent Colorful Card with Vibrant Gradient) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white shadow-xl shadow-emerald-950/20 border border-emerald-600/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-300 shrink-0 shadow-inner">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-300 font-extrabold uppercase tracking-wider">
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-md border border-white/20">Educación Universitaria Superior</span>
                  <span aria-hidden="true" className="text-emerald-400">·</span>
                  <span className="font-mono text-white">Reg. CIP N° 161511</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Título Profesional en Ingeniería Ambiental
                </h3>
                <p className="text-sm font-bold text-emerald-100">
                  Universidad Nacional "Daniel Alcides Carrión" – Cerro de Pasco
                </p>
                <p className="text-xs text-emerald-200/90 leading-relaxed max-w-2xl">
                  Escuela de Formación Profesional de Ingeniería Ambiental · Colegiado y Habilitado en el Consejo Departamental de Pasco / Nacional
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="px-5 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-left shadow-xs">
                <span className="text-[10px] text-emerald-200 uppercase tracking-wider block font-bold">
                  Estado Colegiatura
                </span>
                <span className="text-xs font-black text-white flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Colegiado Ordinario Activo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Post-graduate Diplomas Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-700" />
              <span>Programas de Especialización y Diplomados</span>
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
              4 Diplomados Completos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIPLOMAS.map((dip, idx) => (
              <div
                key={dip.id}
                className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 border border-emerald-200/90 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-emerald-900 font-extrabold bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
                      {dip.period}
                    </span>
                    <span className="text-[11px] font-bold text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-300">
                      Postgrado
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-2 leading-snug">
                    {dip.title}
                  </h4>
                  <p className="text-xs font-bold text-emerald-950 mb-2">
                    {dip.institution}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dip.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Specialized Courses & Certifications with Search and Tabs */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <BookCheck className="w-5 h-5 text-emerald-700" />
              <span>Cursos Especializados & Certificaciones Técnicas</span>
            </h3>

            {/* Filter Tabs with Rich Colors */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-bold ${
                  activeTab === 'all' ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Todos ({CERTIFICATIONS.length})
              </button>
              <button
                onClick={() => setActiveTab('especializaciones')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-bold ${
                  activeTab === 'especializaciones' ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                OEFA, Residuos & SSOMA
              </button>
              <button
                onClick={() => setActiveTab('software')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-bold ${
                  activeTab === 'software' ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                ArcGIS, MS Project & S10
              </button>
            </div>
          </div>

          {/* Quick search inside certifications */}
          <div className="relative mb-6 max-w-md">
            <Search className="w-4 h-4 text-emerald-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={certSearch}
              onChange={(e) => setCertSearch(e.target.value)}
              placeholder="Buscar curso, institución (NECTRAN, OEFA, ArcGIS...)"
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-emerald-50/30 border border-emerald-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
            />
          </div>

          {/* Certifications Grid with Color Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/80 transition-all flex flex-col justify-between shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2 text-slate-500">
                    <span className="text-emerald-900 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {cert.categoryLabel}
                    </span>
                    {cert.hours && (
                      <span className="font-mono flex items-center gap-1 bg-teal-100/90 text-teal-950 px-2 py-0.5 rounded border border-teal-200 font-bold">
                        <Clock className="w-3 h-3 text-teal-700" />
                        {cert.hours} hrs acad.
                      </span>
                    )}
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug mb-1.5">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium">
                    {cert.institution}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-500">{cert.period}</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Acreditado
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
