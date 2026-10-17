import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ResultsSection } from './components/ResultsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { PrintCVModal } from './components/PrintCVModal';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/cvData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
  };

  const handleSelectProjectForContact = (projectTitle: string) => {
    setSelectedServiceForContact(`Consulta sobre proyecto: ${projectTitle}`);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-700 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenPrint={() => setIsPrintModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenPrint={() => setIsPrintModalOpen(true)} />

        {/* 1. Servicios Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 2. Resultados Destacados Section */}
        <ResultsSection />

        {/* 3. Proyectos Destacados Section (No images) */}
        <ProjectsSection onSelectProjectForContact={handleSelectProjectForContact} />

        {/* 4. Experiencia Profesional Section */}
        <ExperienceSection />

        {/* 5. Formación y Certificaciones Section */}
        <EducationSection />

        {/* 6. Contacto Section */}
        <ContactSection
          initialService={selectedServiceForContact}
          onOpenPrint={() => setIsPrintModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenPrint={() => setIsPrintModalOpen(true)} />

      {/* Executive Printable CV Modal */}
      <PrintCVModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/51${PERSONAL_INFO.phone}?text=Hola%20Ing.%20Hern%C3%A1n%20Ramos,%20le%20escribo%20desde%20su%20portafolio%20web.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
          WhatsApp 943055949
        </span>
      </a>
    </div>
  );
}
