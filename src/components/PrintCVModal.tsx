import React, { useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCES, DIPLOMAS, CERTIFICATIONS, EDUCATION } from '../data/cvData';
import { Printer, X, Download, Award, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

interface PrintCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintCVModal: React.FC<PrintCVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Sticky Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800 no-print">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Vista Previa de Impresión / Guardar PDF</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar como PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Paper */}
        <div className="overflow-y-auto p-4 sm:p-10 bg-slate-900 flex justify-center">
          <div className="w-full max-w-[800px] bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-sm print-page">
            {/* Header Document */}
            <div className="border-b-2 border-emerald-700 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                    {PERSONAL_INFO.fullName}
                  </h1>
                  <p className="text-sm sm:text-base font-bold text-emerald-800 mt-1 uppercase tracking-wide">
                    {PERSONAL_INFO.title} · {PERSONAL_INFO.cip}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {PERSONAL_INFO.university}
                  </p>
                </div>

                <div className="text-xs text-slate-600 space-y-1 sm:text-right font-mono">
                  <p><strong>Celular:</strong> {PERSONAL_INFO.phoneFormatted}</p>
                  <p><strong>E-mail:</strong> {PERSONAL_INFO.email}</p>
                  <p><strong>DNI:</strong> {PERSONAL_INFO.dni}</p>
                  <p><strong>Nacionalidad:</strong> {PERSONAL_INFO.nationality}</p>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 border-b border-slate-300 pb-1 mb-2">
                Perfil Profesional
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Formación Académica */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 border-b border-slate-300 pb-1 mb-2">
                Formación Académica
              </h2>
              <div className="text-xs text-slate-800 space-y-1">
                <p>
                  <strong className="text-slate-900">Superior:</strong> TÍTULO PROFESIONAL EN INGENIERÍA AMBIENTAL
                </p>
                <p className="text-slate-600">
                  Universidad Nacional "Daniel Alcides Carrión" Cerro de Pasco – Escuela de Formación Profesional de Ingeniería Ambiental.
                </p>
                <p className="text-emerald-800 font-semibold font-mono">
                  COLEGIADO EN EL COLEGIO DE INGENIEROS DEL PERÚ - CIP N° 161511
                </p>
              </div>
            </div>

            {/* Programas de Especialización y Diplomados */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 border-b border-slate-300 pb-1 mb-2">
                Programas de Especialización y Diplomados
              </h2>
              <ul className="text-xs text-slate-800 space-y-2">
                {DIPLOMAS.map((dip, idx) => (
                  <li key={idx} className="border-l-2 border-emerald-600 pl-2">
                    <div className="flex justify-between font-semibold">
                      <span className="text-slate-900">{dip.title}</span>
                      <span className="text-slate-500 font-mono text-[11px]">{dip.period}</span>
                    </div>
                    <div className="text-slate-600">{dip.institution}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cursos y Capacitaciones Destacadas */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 border-b border-slate-300 pb-1 mb-2">
                Cursos de Especialización y Certificaciones
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                {CERTIFICATIONS.slice(0, 10).map((c, idx) => (
                  <div key={idx} className="p-1.5 border border-slate-200 rounded">
                    <div className="font-semibold text-slate-900 line-clamp-1">{c.title}</div>
                    <div className="text-[11px] text-slate-600 flex justify-between mt-0.5">
                      <span className="truncate">{c.institution}</span>
                      {c.hours && <span className="font-mono text-emerald-800 shrink-0 font-bold ml-1">{c.hours} hrs</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiencia Profesional */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 border-b border-slate-300 pb-1 mb-2">
                Experiencia Profesional (Selección Principal)
              </h2>
              <div className="space-y-3 text-xs text-slate-800">
                {EXPERIENCES.slice(0, 8).map((exp, idx) => (
                  <div key={idx} className="pb-2 border-b border-slate-100 last:border-none">
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-slate-900">
                      <span>{exp.entity}</span>
                      <span className="text-emerald-800 font-mono text-[11px]">{exp.period}</span>
                    </div>
                    <div className="text-slate-700 font-medium italic mt-0.5">{exp.role}</div>
                    <div className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">{exp.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer stamp */}
            <div className="pt-4 border-t border-slate-300 text-center text-[10px] text-slate-500 font-mono">
              Curriculum Vitae Documentado · Ing. Manasés Hernán Ramos García · CIP N° 161511 · Tel: 943055949
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
