import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { Phone, Mail, MapPin, Award, CheckCircle2, Copy, FileText, ArrowDown, ExternalLink, Camera, RefreshCw, Upload, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onOpenPrint: () => void;
}

const DEFAULT_AVATAR = '/src/assets/images/hernan_ramos_exact_photo_1792272871653.jpg';

export const Hero: React.FC<HeroProps> = ({ onOpenPrint }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [avatarSrc, setAvatarSrc] = useState<string>(DEFAULT_AVATAR);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('hernan_profile_photo');
    if (saved) {
      setAvatarSrc(saved);
      setHasCustomPhoto(true);
    }
  }, []);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setAvatarSrc(result);
        setHasCustomPhoto(true);
        try {
          localStorage.setItem('hernan_profile_photo', result);
        } catch {
          // Quota exceeded ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file);
    }
  };

  const resetAvatar = () => {
    setAvatarSrc(DEFAULT_AVATAR);
    setHasCustomPhoto(false);
    localStorage.removeItem('hernan_profile_photo');
  };

  const whatsappUrl = `https://wa.me/51${PERSONAL_INFO.phone}?text=Hola%20Ing.%20Hern%C3%A1n%20Ramos,%20he%20revisado%20su%20CV%20y%20deseo%20consultar%20sobre%20un%20servicio%20profesional.`;

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-22 overflow-hidden border-b border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-slate-50">
      {/* Background colorful ambient glow elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-emerald-300/35 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-teal-300/30 rounded-full blur-[110px]" />
        <div className="absolute -bottom-20 left-1/3 w-[380px] h-[380px] bg-cyan-200/30 rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Colorful Status Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 bg-emerald-100/90 border border-emerald-300/90 px-3 py-1.5 rounded-full mb-4 w-fit shadow-xs">
              <Award className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Colegio de Ingenieros del Perú</span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span className="font-mono text-emerald-950">{PERSONAL_INFO.cip}</span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span className="text-emerald-800 font-extrabold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 inline" /> Habilitado
              </span>
            </div>

            {/* Display Headline: Name with Rich Emerald-Teal Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4 text-balance">
              Ing. Manasés Hernán <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800">
                Ramos García
              </span>
            </h1>

            {/* Sub-headline (Text requested by user) */}
            <div className="p-4 rounded-xl bg-white/90 border border-emerald-200/90 shadow-xs mb-4">
              <h2 className="text-base sm:text-lg font-extrabold text-emerald-950 leading-snug">
                Ingeniero Ambiental Colegiado, Especialista en Gestión Ambiental y Evaluación de Riesgo de Desastres Originados por Fenómenos Naturales para Proyectos de Inversión Pública.
              </h2>
            </div>

            {/* Lead Narrative (Text requested by user) */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 max-w-2xl font-normal">
              Ingeniero Ambiental con experiencia profesional en gestión ambiental, evaluación de impactos ambientales, análisis de riesgos originados por fenómenos naturales para la formulación y evaluación de proyectos de inversión pública. Ha trabajado con gobierno regional, instituciones sectoriales de salud, agricultura y otros.
            </p>

            {/* Colorful Metadata Details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-700 mb-8 pb-5 border-b border-emerald-200/70">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-900 bg-emerald-100/60 px-2.5 py-1 rounded-md border border-emerald-200">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Lima / Pasco / Cobertura Nacional</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono bg-white px-2.5 py-1 rounded-md border border-slate-200">
                <span className="text-slate-500">DNI:</span>
                <span className="font-bold text-slate-900">{PERSONAL_INFO.dni}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                <span className="text-slate-500">Formación:</span>
                <span className="font-semibold text-slate-900">Univ. Nac. Daniel Alcides Carrión</span>
              </div>
            </div>

            {/* Interactive Primary CTAs with Rich Colors */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-emerald-700/25 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Contactar por WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#proyectos"
                className="px-5 py-3 text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-950 bg-white hover:bg-emerald-50 active:scale-[0.98] border border-emerald-300 rounded-xl transition-all shadow-xs flex items-center gap-2 whitespace-nowrap"
              >
                <span>Ver Proyectos Destacados</span>
                <ArrowDown className="w-4 h-4 text-emerald-700" />
              </a>

              <button
                onClick={onOpenPrint}
                className="px-4 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shadow-2xs"
                title="Generar CV imprimible en formato ejecutivo"
              >
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>Imprimir / PDF</span>
              </button>
            </div>

            {/* Fast copy affordances for recruiter contact */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-700">
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="hover:text-emerald-800 transition-colors flex items-center gap-1.5 py-1 font-semibold"
                title="Copiar número de teléfono"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-mono text-slate-900">{PERSONAL_INFO.phoneFormatted}</span>
                {copiedType === 'phone' ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1 bg-emerald-100 px-1.5 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> Copiado
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>

              <span aria-hidden="true" className="text-slate-300">·</span>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="hover:text-emerald-800 transition-colors flex items-center gap-1.5 py-1 font-semibold"
                title="Copiar correo electrónico"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-mono text-slate-900">{PERSONAL_INFO.email}</span>
                {copiedType === 'email' ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1 bg-emerald-100 px-1.5 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> Copiado
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: User Avatar Portrait with Faithful Facial Structure & Direct Original Photo Loader */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none rounded-3xl p-2 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 shadow-2xl shadow-emerald-950/20 group">
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative rounded-2xl overflow-hidden bg-white border-2 transition-all ${
                  isDragging ? 'border-emerald-500 ring-4 ring-emerald-300 scale-[0.99]' : 'border-white'
                }`}
              >
                {/* Real Photo Image */}
                <img
                  src={avatarSrc}
                  alt="Ing. Manasés Hernán Ramos García - Ingeniero Ambiental Colegiado CIP N° 161511"
                  className="w-full h-auto aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

                {/* Drag overlay notice if user drags file */}
                {isDragging && (
                  <div className="absolute inset-0 z-30 bg-emerald-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4 text-center">
                    <Upload className="w-10 h-10 mb-2 animate-bounce text-emerald-300" />
                    <p className="text-sm font-bold">Suelte aquí su fotografía original</p>
                    <p className="text-xs text-emerald-200 mt-1">Se cargará directamente en su portafolio</p>
                  </div>
                )}

                {/* Top Interactive Photo Action Bar */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-xl bg-slate-950/85 hover:bg-emerald-700 text-white backdrop-blur-md border border-white/30 text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all active:scale-95"
                    title="Cargar su archivo de foto original (Hernán Ramos G.png / Retrato.png)"
                  >
                    <Camera className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{hasCustomPhoto ? 'Cambiar foto original' : 'Colocar mi foto original'}</span>
                  </button>
                  {hasCustomPhoto && (
                    <button
                      onClick={resetAvatar}
                      className="p-1.5 rounded-xl bg-slate-950/85 hover:bg-slate-900 text-white backdrop-blur-md border border-white/30 text-xs transition-all"
                      title="Restablecer a fotografía por defecto"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-slate-300" />
                    </button>
                  )}
                </div>

                {/* Inset Credential Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black text-slate-900">
                        Manasés Hernán Ramos García
                      </p>
                      <p className="text-[11px] text-emerald-800 font-mono font-bold">
                        Colegiatura CIP N° 161511
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                        CIP Habilitado
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                    <span className="text-emerald-900 font-semibold">Ingeniero Ambiental</span>
                    <span>Perú</span>
                  </div>
                </div>
              </div>

              {/* Direct callout to guide the user on placing their original camera file */}
              <div className="mt-3 p-2.5 rounded-2xl bg-white/95 border border-emerald-300 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <ImageIcon className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-slate-800 font-bold">
                    ¿Desea usar el archivo exacto de su dispositivo?
                  </span>
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1 text-xs font-black text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  Subir archivo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
