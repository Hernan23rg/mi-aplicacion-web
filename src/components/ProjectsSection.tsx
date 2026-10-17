import React, { useState, useMemo } from 'react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/cvData';
import { ProjectModal } from './ProjectModal';
import { Search, MapPin, Building2, FileText, ArrowRight, Filter, Briefcase } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProjectForContact: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProjectForContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos', count: FEATURED_PROJECTS.length },
    { id: 'salud', label: 'Sector Salud / PRONIS', count: FEATURED_PROJECTS.filter(p => p.category === 'salud').length },
    { id: 'regional', label: 'Gobiernos Regionales & PESCS', count: FEATURED_PROJECTS.filter(p => p.category === 'regional').length },
    { id: 'mineria_saneamiento', label: 'Saneamiento & Minería', count: FEATURED_PROJECTS.filter(p => p.category === 'mineria_saneamiento').length },
  ];

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'salud':
        return {
          badge: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold',
          tag: 'text-emerald-800 bg-emerald-50 border-emerald-200',
          border: 'hover:border-emerald-500 hover:shadow-emerald-500/15',
          button: 'hover:bg-emerald-700 hover:border-emerald-700'
        };
      case 'regional':
        return {
          badge: 'bg-teal-100 text-teal-900 border-teal-300 font-bold',
          tag: 'text-teal-800 bg-teal-50 border-teal-200',
          border: 'hover:border-teal-500 hover:shadow-teal-500/15',
          button: 'hover:bg-teal-700 hover:border-teal-700'
        };
      case 'mineria_saneamiento':
        return {
          badge: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
          tag: 'text-amber-800 bg-amber-50 border-amber-200',
          border: 'hover:border-amber-500 hover:shadow-amber-500/15',
          button: 'hover:bg-amber-700 hover:border-amber-700'
        };
      default:
        return {
          badge: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold',
          tag: 'text-emerald-800 bg-emerald-50 border-emerald-200',
          border: 'hover:border-emerald-500 hover:shadow-emerald-500/15',
          button: 'hover:bg-emerald-700 hover:border-emerald-700'
        };
    }
  };

  const filteredProjects = useMemo(() => {
    return FEATURED_PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.entity.toLowerCase().includes(q) ||
        project.instrument.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="proyectos" className="py-20 lg:py-24 bg-white border-b border-emerald-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
            <span>Portafolio de Intervenciones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Proyectos Destacados en Preinversión y Gestión Ambiental
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            Estudios de preinversión hospitalaria elaborados para el PRONIS (MINSA), así como expedientes técnicos formulados para Gobiernos Regionales y proyectos especiales.
          </p>
        </div>

        {/* Filter Controls Bar (Segmented Buttons + Live Search) with Rich Colors */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-md shadow-emerald-900/20'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? 'bg-emerald-900/80 text-emerald-100' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative min-w-[280px] lg:w-80">
            <Search className="w-4 h-4 text-emerald-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar hospital, región o estudio..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-emerald-50/40 border border-emerald-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-6 text-xs text-emerald-900 font-bold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 w-fit">
            Mostrando <strong>{filteredProjects.length}</strong> de {FEATURED_PROJECTS.length} proyectos para "{searchQuery}"
          </div>
        )}

        {/* Projects Cards Grid (No Images, Rich Typography and Color) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-slate-50 border border-slate-200">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-bold text-slate-700">
              No se encontraron proyectos con los criterios de búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-emerald-700 hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => {
              const theme = getCategoryTheme(project.category);

              return (
                <div
                  key={project.id}
                  className={`group rounded-3xl bg-white border border-slate-200/90 ${theme.border} transition-all duration-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-0.5`}
                >
                  <div>
                    {/* Top Bar: Entity & Period with Color Tags */}
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                      <span className={`text-[11px] px-2.5 py-1 rounded-md border ${theme.badge} line-clamp-1`}>
                        {project.entity}
                      </span>
                      <span className="text-[11px] font-mono text-slate-600 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                        {project.period}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug mb-3">
                      {project.title}
                    </h3>

                    {/* Instrument Tag with Colorful Accent */}
                    <div className="mb-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-teal-50/70 border border-emerald-200 flex items-start gap-2 text-xs">
                      <FileText className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="font-bold text-emerald-950 line-clamp-2">
                        {project.instrument}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-3 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Card Action Footer with Rich Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full py-2.5 text-xs font-bold text-slate-700 hover:text-white bg-slate-100 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-teal-700 border border-slate-200 hover:border-transparent rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span>Ver Ficha Técnica Completa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Deep Inspection Modal (No Images) */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={(title) => {
          setActiveModalProject(null);
          onSelectProjectForContact(title);
        }}
      />
    </section>
  );
};
