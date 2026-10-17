import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { Menu, X, PhoneCall, Printer, Award } from 'lucide-react';

interface NavbarProps {
  onOpenPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrint }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-200/80 py-3 shadow-md'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/80'
      }`}
    >
      {/* Top Colorful Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-emerald-900/20">
              HR
            </div>
            <span className="font-bold text-slate-900">
              Ing. Hernán Ramos
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              CIP 161511
            </span>
          </a>

          {/* Zone 2: Navigation Links (single line, no wrapping) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Print */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPrint}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-2xs"
              title="Ver versión imprimible / Descargar PDF del CV"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-700" />
              <span>Imprimir / PDF</span>
            </button>
            <a
              href="#contacto"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors shadow-sm shadow-emerald-900/20 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPrint}
              className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-lg"
              aria-label="Imprimir CV"
            >
              <Printer className="w-4 h-4 text-emerald-700" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-xs text-slate-600">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ing. Ambiental Colegiado CIP N° 161511</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/51${PERSONAL_INFO.phone}?text=Hola%20Ing.%20Hern%C3%A1n%20Ramos,%20me%20comunico%20desde%20su%20portafolio%20web.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>WhatsApp Directo (943055949)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
