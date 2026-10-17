import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SERVICES } from '../data/cvData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  FileDown, 
  Printer, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  onOpenPrint: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, onOpenPrint }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: initialService || 'Formulación de Instrumentos de Gestión Ambiental (EVAP / DIA / EIA)',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Ing. Hernán Ramos,%0A%0ASoy *${formData.name || 'un consultor interesado'}* ${formData.organization ? `de *${formData.organization}*` : ''}.%0A%0A*Servicio de interés:* ${formData.service}%0A*Contacto:* ${formData.phone || 'No especificado'} | ${formData.email || 'No especificado'}%0A%0A*Detalles:*%0A${formData.message || 'Quisiera coordinar una propuesta o consulta técnica.'}`;
    window.open(`https://wa.me/51${PERSONAL_INFO.phone}?text=${text}`, '_blank');
    setFormSubmitted(true);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta Profesional: ${formData.service} - ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Estimado Ing. Hernán Ramos García,\n\nMi nombre es ${formData.name} de la entidad ${formData.organization || 'Particular'}.\n\nNos ponemos en contacto respecto a: ${formData.service}\n\nDetalles del requerimiento:\n${formData.message}\n\nDatos de contacto:\nTeléfono: ${formData.phone}\nCorreo: ${formData.email}\n\nSaludos cordiales.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  // Generate and download vCard file
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Ramos García;Manasés Hernán;;Ing.;
FN:Ing. Manasés Hernán Ramos García
ORG:Ingeniería Ambiental & Preinversión Pública;
TITLE:Ingeniero Ambiental Colegiado CIP N° 161511
TEL;TYPE=CELL,VOICE:+51943055949
EMAIL;TYPE=INTERNET,PREF:hernan23rg@gmail.com
ADR;TYPE=WORK:;;Lima / Pasco;Lima;;;Peru
NOTE:Especialista en Preinversión y Gestión Ambiental
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ing_Hernan_Ramos_Garcia_CIP_161511.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contacto" className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-teal-50/40 border-b border-emerald-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Disponibilidad Inmediata & Canales de Contacto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Contacto Directo con el Especialista
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            Comuníquese para consultorías especializadas, formulación de estudios ambientales de preinversión, términos de referencia o convocatorias técnicas a nivel nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info, vCard & Print triggers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card with Rich Emerald-Teal Border */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-emerald-200 shadow-md space-y-6">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Ing. Manasés Hernán Ramos García
                </h3>
                <p className="text-xs font-black text-emerald-800 mt-1 font-mono">
                  Colegiado CIP N° 161511 · Ingeniero Ambiental
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {PERSONAL_INFO.availability}
                </p>
              </div>

              {/* Direct channels with colorful icon containers */}
              <div className="space-y-4 pt-3 border-t border-slate-100">
                {/* Phone & WhatsApp */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-emerald-900 block font-bold uppercase">
                        Teléfono / WhatsApp
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-sm font-black text-slate-900 hover:text-emerald-800 font-mono transition-colors"
                      >
                        {PERSONAL_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition-colors"
                    title="Copiar teléfono"
                  >
                    {copiedField === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 font-bold" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-2xl bg-teal-50/70 border border-teal-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-teal-600 text-white shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-teal-900 block font-bold uppercase">
                        Correo Electrónico
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-black text-slate-900 hover:text-teal-800 font-mono transition-colors break-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition-colors"
                    title="Copiar correo"
                  >
                    {copiedField === 'email' ? (
                      <CheckCircle2 className="w-4 h-4 text-teal-700 font-bold" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-xl bg-slate-700 text-white shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-600 block font-bold uppercase">
                      Ubicación & Cobertura
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Lima / Pasco · Disponibilidad para comisiones a nivel nacional
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Direct CTA with Vibrant Green Gradient */}
              <a
                href={`https://wa.me/51${PERSONAL_INFO.phone}?text=Hola%20Ing.%20Hern%C3%A1n%20Ramos,%20le%20escribo%20desde%20su%20portafolio%20para%20coordinar%20una%20consulta.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-black text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Abrir Chat Directo en WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Extra Utilities: vCard & Print PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={downloadVCard}
                className="p-4 rounded-2xl bg-white border border-emerald-200 hover:border-emerald-500 text-left transition-all flex items-center gap-3 shadow-xs hover:shadow-md group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 group-hover:scale-110 transition-transform">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">
                    Guardar Contacto
                  </span>
                  <span className="text-[11px] text-emerald-800 font-semibold">
                    Descargar vCard (.vcf)
                  </span>
                </div>
              </button>

              <button
                onClick={onOpenPrint}
                className="p-4 rounded-2xl bg-white border border-teal-200 hover:border-teal-500 text-left transition-all flex items-center gap-3 shadow-xs hover:shadow-md group"
              >
                <div className="p-2.5 rounded-xl bg-teal-100 text-teal-800 group-hover:scale-110 transition-transform">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">
                    Exportar / Imprimir
                  </span>
                  <span className="text-[11px] text-teal-800 font-semibold">
                    CV Ejecutivo en PDF
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form with Rich Emerald Accents */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-200 shadow-md">
            <h3 className="text-xl font-black text-slate-900 mb-2">
              Formulario de Requerimiento Técnico
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Complete los datos de su proyecto para enviar un mensaje estructurado directamente al correo o WhatsApp del Ing. Hernán Ramos.
            </p>

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-xs text-emerald-950 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-black text-sm">¡Mensaje preparado con éxito!</strong>
                  Se ha generado la comunicación directa. También puede escribir o llamar al <span className="font-mono font-black text-emerald-900 text-sm">943055949</span>.
                </div>
              </div>
            )}

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5">
                    Nombre o Contacto *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ej. Ing. Carlos Mendoza"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5">
                    Entidad, Municipio o Empresa
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Ej. PRONIS / GORE / Consorcio"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ej. 987 654 321"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ej. contacto@entidad.gob.pe"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1.5">
                  Servicio o Instrumento Requerido
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors font-medium"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.code}. {s.title}
                    </option>
                  ))}
                  <option value="Estudio de Preinversión Hospitalaria PRONIS">
                    Estudio de Preinversión Hospitalaria PRONIS
                  </option>
                  <option value="Evaluación Técnica de Expedientes">
                    Evaluación Técnica de Expedientes
                  </option>
                  <option value="Otro Requerimiento / Consultoría">
                    Otro Requerimiento / Consultoría
                  </option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1.5">
                  Descripción del Proyecto o Consulta
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detalle alcance, ubicación, plazos o características del proyecto..."
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Submission Buttons with Rich Gradients */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3.5 px-4 text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-emerald-700/25 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="flex-1 py-3.5 px-4 text-xs font-black text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] border border-slate-300 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <span>Enviar por Correo</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
