import React from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrint: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrint }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
              <span className="w-6 h-6 rounded bg-emerald-700 flex items-center justify-center text-xs text-white">
                HR
              </span>
              <span>Ing. Manasés Hernán Ramos García</span>
            </div>
            <p className="text-slate-600 text-xs">
              Ingeniero Ambiental Colegiado · {PERSONAL_INFO.cip} · Gestión Ambiental & Evaluación de Riesgos
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a href="#servicios" className="hover:text-emerald-800 transition-colors">
              Servicios
            </a>
            <a href="#resultados" className="hover:text-emerald-800 transition-colors">
              Resultados
            </a>
            <a href="#proyectos" className="hover:text-emerald-800 transition-colors">
              Proyectos
            </a>
            <a href="#experiencia" className="hover:text-emerald-800 transition-colors">
              Experiencia
            </a>
            <a href="#formacion" className="hover:text-emerald-800 transition-colors">
              Formación
            </a>
            <a href="#contacto" className="hover:text-emerald-800 transition-colors">
              Contacto
            </a>
            <button
              onClick={onOpenPrint}
              className="text-emerald-800 hover:text-emerald-900 transition-colors"
            >
              Imprimir CV
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Manasés Hernán Ramos García. Todos los derechos reservados.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-emerald-800 font-medium transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
