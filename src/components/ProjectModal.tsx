import React, { useEffect } from 'react';
import { ProjectItem, PERSONAL_INFO } from '../data/cvData';
import { X, Building2, Calendar, MapPin, FileText, CheckCircle2, Award, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola Ing. Hernán Ramos, tengo interés en su experiencia en el proyecto "${project.title}" y deseo coordinar una consulta técnica.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border-2 border-emerald-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50/50 to-white">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
            <Award className="w-4 h-4 text-emerald-700" />
            <span className="bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">Ficha Técnica de Proyecto</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-emerald-950 font-bold">{project.categoryLabel}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 rounded-lg transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content (No Image as requested) */}
        <div className="overflow-y-auto px-6 py-6 space-y-6">
          {/* Project Header Info */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
                {project.entity}
              </span>
              <span className="font-mono text-slate-700 font-semibold bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
                {project.period}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h3>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 py-3 border-y border-slate-100">
              <div className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>{project.entity}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>{project.location}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <FileText className="w-3.5 h-3.5 text-emerald-700" />
                <span>{project.instrument}</span>
              </div>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Resumen del Proyecto
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.summary}
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Logros & Hitos Técnicos
            </h4>
            <ul className="space-y-2">
              {project.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Responsabilidades Específicas
              </h4>
              <ul className="space-y-2">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            Especialista: <strong className="text-slate-900">{PERSONAL_INFO.shortName}</strong> ({PERSONAL_INFO.cip})
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-200/80 hover:bg-slate-300 rounded-lg transition-colors"
            >
              Cerrar
            </button>
            <a
              href={`https://wa.me/51${PERSONAL_INFO.phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Consultar por WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
