import React, { useState } from 'react';
import { SERVICES } from '../data/cvData';
import { 
  FileCheck2, 
  Trash2, 
  ShieldAlert, 
  HardHat, 
  MapPin, 
  ClipboardCheck, 
  ArrowRight, 
  Check, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getServiceColorConfig = (code: string) => {
    switch (code) {
      case '01':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-700',
          badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          accent: 'hover:border-emerald-500 hover:shadow-emerald-500/10',
          icon: <FileCheck2 className="w-5 h-5 text-emerald-700" />
        };
      case '02':
        return {
          bg: 'bg-teal-500/10',
          border: 'border-teal-500/30',
          text: 'text-teal-700',
          badge: 'bg-teal-100 text-teal-900 border-teal-300',
          accent: 'hover:border-teal-500 hover:shadow-teal-500/10',
          icon: <Trash2 className="w-5 h-5 text-teal-700" />
        };
      case '03':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-800',
          badge: 'bg-amber-100 text-amber-900 border-amber-300',
          accent: 'hover:border-amber-500 hover:shadow-amber-500/10',
          icon: <ShieldAlert className="w-5 h-5 text-amber-700" />
        };
      case '04':
        return {
          bg: 'bg-cyan-500/10',
          border: 'border-cyan-500/30',
          text: 'text-cyan-800',
          badge: 'bg-cyan-100 text-cyan-900 border-cyan-300',
          accent: 'hover:border-cyan-500 hover:shadow-cyan-500/10',
          icon: <HardHat className="w-5 h-5 text-cyan-700" />
        };
      case '05':
        return {
          bg: 'bg-indigo-500/10',
          border: 'border-indigo-500/30',
          text: 'text-indigo-800',
          badge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
          accent: 'hover:border-indigo-500 hover:shadow-indigo-500/10',
          icon: <MapPin className="w-5 h-5 text-indigo-700" />
        };
      case '06':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-800',
          badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          accent: 'hover:border-emerald-500 hover:shadow-emerald-500/10',
          icon: <ClipboardCheck className="w-5 h-5 text-emerald-700" />
        };
      default:
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-700',
          badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          accent: 'hover:border-emerald-500 hover:shadow-emerald-500/10',
          icon: <FileCheck2 className="w-5 h-5 text-emerald-700" />
        };
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="servicios" className="py-20 lg:py-24 bg-gradient-to-b from-white via-emerald-50/25 to-white border-b border-emerald-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Áreas de Especialidad & Consultoría</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Servicios en Ingeniería Ambiental y Gestión de Proyectos Públicos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            Soluciones técnicas rigurosas para entidades públicas, unidades formuladoras, consultoras de ingeniería y consorcios ejecutores a nivel nacional.
          </p>
        </div>

        {/* Services Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            const colorConfig = getServiceColorConfig(service.code);

            return (
              <div
                key={service.id}
                className={`rounded-2xl bg-white border border-slate-200/90 ${colorConfig.accent} transition-all duration-200 flex flex-col justify-between p-6 shadow-xs hover:shadow-xl hover:-translate-y-0.5`}
              >
                <div>
                  {/* Top Header: Code & Icon with Colorful Styling */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <span className={`text-xs font-mono font-black px-2 py-0.5 rounded border ${colorConfig.badge}`}>
                      SERVICIO {service.code}
                    </span>
                    <div className={`p-2.5 rounded-xl ${colorConfig.bg} border ${colorConfig.border}`}>
                      {colorConfig.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Technical Details */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-3 text-xs">
                      <p className="text-slate-700 leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div>
                        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wide block mb-1.5">
                          Entregables Típicos:
                        </span>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-slate-700">
                              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-[11px] text-emerald-950">
                        <strong className="text-emerald-900 block mb-0.5 font-bold">Normativa Aplicable:</strong>
                        <span>{service.normativa}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls: Toggle Detail & CTA */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-bold text-slate-600 hover:text-emerald-800 transition-colors flex items-center gap-1 py-1"
                  >
                    <span>{isExpanded ? 'Menos detalles' : 'Ver entregables'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href="#contacto"
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shadow-xs"
                  >
                    <span>Solicitar</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special banner with vibrant gradient colors */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white shadow-xl shadow-emerald-950/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-200 uppercase tracking-wide bg-emerald-800/80 w-fit px-2.5 py-1 rounded-md border border-emerald-600">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Experiencia Directa en Proyectos de Inversión Pública</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-white">
              ¿Requiere viabilidad ambiental y análisis de riesgos para su proyecto?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Formulación y evaluación técnica de instrumentos de gestión ambiental (EVAP, DIA, EIA) y gestión del riesgo de desastres para proyectos del sector salud, agricultura y gobiernos regionales.
            </p>
          </div>
          <a
            href="#contacto"
            onClick={() => onSelectService('Estudio de Gestión Ambiental y Riesgos de Inversión Pública')}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-950 bg-white hover:bg-emerald-50 rounded-xl transition-all shadow-lg whitespace-nowrap shrink-0"
          >
            Coordinar Reunión Técnica
          </a>
        </div>
      </div>
    </section>
  );
};
