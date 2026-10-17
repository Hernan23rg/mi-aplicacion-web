import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/cvData';
import { CheckCircle2, MapPin, Building2, ShieldCheck, TrendingUp, Layers, Award } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const [activeRegionIndex, setActiveRegionIndex] = useState<number>(0);

  const REGIONAL_COVERAGE = [
    {
      region: 'Lima & Callao / Lima Provincias',
      projects: 'Hospital Nacional Cayetano Heredia, Hospital General de Huacho, Hospital Dos de Mayo, Huaral, Chosica',
      type: 'Salud / PRONIS - Nivel III',
      color: 'border-l-4 border-l-emerald-600 bg-emerald-50/40 text-emerald-950',
      tag: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      status: 'Aprobados y Viabilizados'
    },
    {
      region: 'Lambayeque',
      projects: 'Hospital Regional Docente Las Mercedes de Chiclayo',
      type: 'Salud / PRONIS - Nivel III',
      color: 'border-l-4 border-l-teal-600 bg-teal-50/40 text-teal-950',
      tag: 'bg-teal-100 text-teal-900 border-teal-300',
      status: 'Conformidad Técnica'
    },
    {
      region: 'La Libertad',
      projects: 'Hospital Belén de Trujillo',
      type: 'Salud / PRONIS - Nivel III',
      color: 'border-l-4 border-l-cyan-600 bg-cyan-50/40 text-cyan-950',
      tag: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      status: 'Conformidad Técnica'
    },
    {
      region: 'Huancavelica',
      projects: 'Más de 25 proyectos de preinversión en salud, educación, vialidad y riego (GORE Huancavelica & DREH)',
      type: 'Gestión Pública Regional (2015-2019)',
      color: 'border-l-4 border-l-blue-600 bg-blue-50/40 text-blue-950',
      tag: 'bg-blue-100 text-blue-900 border-blue-300',
      status: 'Viabilidad INVIERTE.PE'
    },
    {
      region: 'Pasco',
      projects: 'E.S. Paucartambo, Residencia Socio Ambiental DRVCS Pasco, Empresa Minera Huarón',
      type: 'Salud, Saneamiento y Minería',
      color: 'border-l-4 border-l-amber-600 bg-amber-50/40 text-amber-950',
      tag: 'bg-amber-100 text-amber-900 border-amber-300',
      status: 'Concluidos Satisfactoriamente'
    },
    {
      region: 'Ayacucho',
      projects: 'Dirección de Infraestructura y Riego / Desarrollo Agroeconómico (PESCS)',
      type: 'Infraestructura de Riego & SSOMA',
      color: 'border-l-4 border-l-emerald-600 bg-emerald-50/40 text-emerald-950',
      tag: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      status: 'Expedientes Evaluados'
    },
    {
      region: 'Apurímac & Puno',
      projects: 'Hospital de Emergencias Chalhuanca (Apurímac) y Hospital Carlos Monge Medrano de Puno (PRONIS)',
      type: 'Preinversión Hospitalaria',
      color: 'border-l-4 border-l-purple-600 bg-purple-50/40 text-purple-950',
      tag: 'bg-purple-100 text-purple-900 border-purple-300',
      status: 'Evaluaciones Concluidas'
    }
  ];

  return (
    <section id="resultados" className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-50 border-b border-emerald-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 border border-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-teal-700" />
            <span>Impacto Comprobado & Rigor Técnico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Resultados Destacados en Gestión Ambiental Pública
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            Indicadores cuantitativos y trayectoria de cumplimiento en proyectos de alta complejidad técnica y social ante entidades fiscalizadoras y ministerios rectores.
          </p>
        </div>

        {/* 3 Main Highlights Showcase Cards with Vibrant Colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-white to-emerald-50 border-2 border-emerald-300 hover:border-emerald-500 transition-all shadow-sm hover:shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white mb-4 shadow-md shadow-emerald-700/20">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-emerald-950 font-mono tabular-nums">
              12+ Hospitales
            </div>
            <h3 className="text-sm font-extrabold text-emerald-900 mt-1 mb-2">
              Infraestructura Hospitalaria de Nivel II y III
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Formulación y evaluación técnica de Evaluaciones Ambientales Preliminares (EVAP) y estudios de preinversión para el PRONIS en las redes hospitalarias más importantes del país.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-500/10 via-white to-teal-50 border-2 border-teal-300 hover:border-teal-500 transition-all shadow-sm hover:shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-md shadow-teal-700/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-teal-950 font-mono tabular-nums">
              100% Eficacia
            </div>
            <h3 className="text-sm font-extrabold text-teal-900 mt-1 mb-2">
              Viabilidad y Levantamiento de Observaciones
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Rigurosidad técnica en la absolución de pliegos de observaciones de la Dirección General de Calidad Ambiental (MINAM), SENACE, MINSA y unidades de inversión pública.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-white to-cyan-50 border-2 border-cyan-300 hover:border-cyan-500 transition-all shadow-sm hover:shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white mb-4 shadow-md shadow-cyan-700/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-cyan-950 font-mono tabular-nums">
              +1,200 Horas
            </div>
            <h3 className="text-sm font-extrabold text-cyan-900 mt-1 mb-2">
              Especialización Continua Certificada
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Formación avanzada y actualizada en OEFA, Contraloría, SENACE, Residuos Hospitalarios, Supervisión SSOMA y SIG (ArcGIS) para decisiones basadas en ciencia y ley.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Regional Scope vs Technical Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Regional Footprint Interactive Selector */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-emerald-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Cobertura Territorial y Experiencia Geográfica</span>
              </h3>
              <span className="text-xs font-mono font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 px-2.5 py-0.5 rounded-full shadow-xs">
                {REGIONAL_COVERAGE.length} Regiones
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Seleccione una región para examinar las intervenciones técnicas, tipos de instituciones y proyectos formulados:
            </p>

            <div className="space-y-2.5">
              {REGIONAL_COVERAGE.map((item, idx) => {
                const isSelected = activeRegionIndex === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveRegionIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                      isSelected
                        ? 'bg-emerald-100/70 border-emerald-500 text-slate-900 shadow-sm scale-[1.01]'
                        : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-emerald-50/40 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-emerald-900 font-extrabold">{item.region}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${item.tag}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 mt-1 line-clamp-2">
                      {item.projects}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Technical Competency Breakdown */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-emerald-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-700" />
                <span>Competencias Técnicas Clave</span>
              </h3>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Dominio Profesional
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Nivel de especialización evaluado en base a proyectos formulados, horas de capacitación y dictámenes técnicos aprobados:
            </p>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">
                      {skill.name}
                    </span>
                    <span className="font-mono text-emerald-800 font-black tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 rounded-full transition-all duration-500 shadow-xs"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Validado con CIP N° 161511</span>
              </div>
              <a
                href="#experiencia"
                className="text-emerald-700 hover:text-emerald-800 transition-colors font-bold"
              >
                Ver línea de tiempo &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
