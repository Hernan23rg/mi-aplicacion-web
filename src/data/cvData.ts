export interface ProjectItem {
  id: string;
  title: string;
  category: 'salud' | 'regional' | 'mineria_saneamiento';
  categoryLabel: string;
  entity: string;
  period: string;
  location: string;
  image: string;
  summary: string;
  instrument: string;
  achievements: string[];
  responsibilities: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  entity: string;
  entityShort: string;
  period: string;
  periodNormalized: string;
  type: 'salud' | 'regional' | 'saneamiento_mineria';
  location: string;
  description: string;
  scope: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  hours?: number;
  period: string;
  category: 'diplomado' | 'especializacion' | 'normativa' | 'software';
  categoryLabel: string;
  credentialId?: string;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  normativa: string;
}

export const PERSONAL_INFO = {
  fullName: 'Manasés Hernán Ramos García',
  shortName: 'Ing. Hernán Ramos García',
  title: 'Ingeniero Ambiental Colegiado',
  cip: 'CIP N° 161511',
  university: 'Universidad Nacional Daniel Alcides Carrión (Cerro de Pasco)',
  phone: '943055949',
  phoneFormatted: '+51 943 055 949',
  email: 'hernan23rg@gmail.com',
  location: 'Lima / Pasco / Cobertura Nacional, Perú',
  dni: '40705898',
  nationality: 'Peruano',
  yearsOfExperience: '15+',
  availability: 'Disponible para consultorías, formulación y evaluación de proyectos de inversión pública y privada',
  heroHeadline: 'Especialista en Gestión Ambiental y Evaluación de Riesgo de Desastres',
  bio: 'Ingeniero Ambiental con experiencia profesional en gestión ambiental, evaluación de impactos ambientales, análisis de riesgos originados por fenómenos naturales para la formulación y evaluación de proyectos de inversión pública. Ha trabajado con gobierno regional, instituciones sectoriales de salud, agricultura y otros.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    code: '01',
    title: 'Formulación de Instrumentos de Gestión Ambiental (EVAP / DIA / EIA)',
    shortDesc: 'Diseño integral de estudios ambientales para proyectos de infraestructura pública y privada conforme a los estándares de SENACE y sectores competentes.',
    fullDesc: 'Elaboración exhaustiva de Evaluaciones Ambientales Preliminares (EVAP) y Estudios de Impacto Ambiental para proyectos de inversión pública y privada en salud, saneamiento y edificaciones. Incluye caracterización de línea base, matrices de identificación de impactos ambientales y diseño del Plan de Manejo Ambiental (PMA).',
    iconName: 'FileCheck2',
    deliverables: [
      'Documento EVAP / DIA conforme a términos de referencia',
      'Matriz de identificación y valoración de impactos ambientales',
      'Plan de Manejo Ambiental (PMA) y Plan de Contingencias',
      'Acompañamiento técnico hasta la certificación ambiental'
    ],
    normativa: 'Ley del SEIA N° 27446 y normativas sectoriales (MINSA, VIVIENDA, MINEM)'
  },
  {
    id: 's2',
    code: '02',
    title: 'Gestión y Manejo de Residuos Sólidos Hospitalarios y Municipales',
    shortDesc: 'Planes operativos de minimización, acondicionamiento, almacenamiento, transporte y disposición final de residuos biocontaminados y especiales.',
    fullDesc: 'Desarrollo de planes técnicos para el manejo integral de residuos en establecimientos de salud (hospitales nivel II y III, centros de salud) y municipalidades. Optimización de rutas internas de segregación, cálculo de capacidades de almacenamiento central y especificaciones para disposición final autorizada.',
    iconName: 'Trash2',
    deliverables: [
      'Plan de Gestión Integral de Residuos Hospitalarios',
      'Dimensionamiento de centros de acopio y almacenamiento intermedio',
      'Protocolos de bioseguridad y gestión de biocontaminados',
      'Auditoría y diagnóstico de generación de residuos'
    ],
    normativa: 'D.L. N° 1278 (Ley de Gestión Integral de Residuos Sólidos) y NTS N° 144-MINSA'
  },
  {
    id: 's3',
    code: '03',
    title: 'Evaluación de Riesgo de Desastres (EVAR) y Adaptación al Cambio Climático',
    shortDesc: 'Análisis de vulnerabilidad física y resiliencia climática en el marco de INVIERTE.PE para la viabilidad de inversiones del Estado.',
    fullDesc: 'Evaluación técnica de peligros de origen natural (sismos, inundaciones, deslizamientos, huaycos) e inducidos por la acción humana. Modelamiento de vulnerabilidad y formulación de medidas estructurales y no estructurales para salvaguardar la infraestructura y población beneficiaria.',
    iconName: 'ShieldAlert',
    deliverables: [
      'Informe técnico de Análisis de Riesgos de Desastres (EVAR)',
      'Identificación de peligros geológicos e hidrometeorológicos',
      'Matriz de vulnerabilidad física y medidas de mitigación',
      'Capítulo de gestión del riesgo exigido por INVIERTE.PE'
    ],
    normativa: 'Lineamientos CENEPRED y Directiva General del Sistema Nacional INVIERTE.PE'
  },
  {
    id: 's4',
    code: '04',
    title: 'Supervisión y Fiscalización Ambiental / SSOMA en Obra',
    shortDesc: 'Control técnico en campo del cumplimiento de compromisos ambientales, seguridad ocupacional y control gubernamental en ejecución de obras.',
    fullDesc: 'Supervisión rigurosa de contratistas para el cumplimiento de las obligaciones ambientales asumidas en la certificación ambiental y normativa SSOMA. Monitoreo in situ de calidad de aire, ruido ambiental, manejo de efluentes y gestión de residuos de construcción.',
    iconName: 'HardHat',
    deliverables: [
      'Informes mensuales de desempeño ambiental y SSOMA',
      'Auditorías de cumplimiento para requerimientos OEFA / Contraloría',
      'Planes de vigilancia ambiental y monitoreo de emisiones',
      'Supervisión de obras socioambientales'
    ],
    normativa: 'Reglamentos de Seguridad y Salud en el Trabajo D.S. 005-2012-TR y fiscalización OEFA'
  },
  {
    id: 's5',
    code: '05',
    title: 'Selección Óptima de Áreas y Modelamiento GIS con ArcGIS',
    shortDesc: 'Zonificación territorial y evaluación multicriterio para la localización estratégica de rellenos sanitarios y plantas de tratamiento.',
    fullDesc: 'Aplicación avanzada de Sistemas de Información Geográfica (ArcGIS) para el análisis espacial multicriterio: exclusión de zonas de restricción legal, proximidad a centros urbanos, hidrogeología, pendientes y accesibilidad vial para la localización de infraestructura ambiental sanitaria.',
    iconName: 'MapPin',
    deliverables: [
      'Cartografía temática y mapas georreferenciados de aptitud territorial',
      'Modelamiento espacial multicriterio para selección de sitios',
      'Delimitación de áreas de influencia directa e indirecta',
      'Expediente cartográfico digital en formato shapefile/geodatabase'
    ],
    normativa: 'Criterios técnicos de DIGESA y D.L. 1278 para rellenos sanitarios'
  },
  {
    id: 's6',
    code: '06',
    title: 'Evaluación de Expedientes Técnicos y Términos de Referencia (TDR)',
    shortDesc: 'Control de calidad técnico-normativo de estudios de preinversión y expedientes definitivos para entidades del gobierno nacional y regional.',
    fullDesc: 'Revisión exhaustiva y emisión de pronunciamientos técnicos sobre la viabilidad ambiental de estudios de preinversión (fichas técnicas, perfiles) y expedientes técnicos de obra en sectores salud, riego, saneamiento y educación.',
    iconName: 'ClipboardCheck',
    deliverables: [
      'Informes técnicos de evaluación y observaciones de expediente',
      'Elaboración de Términos de Referencia (TDR) de contratación especializada',
      'Planes de trabajo detallados para consultorías ambientales',
      'Absolución de consultas y levantamiento de observaciones'
    ],
    normativa: 'Ley de Contrataciones del Estado y guías metodológicas sectoriales'
  }
];

export const KEY_RESULTS = [
  {
    metric: '15+',
    unit: 'Años',
    title: 'Trayectoria Profesional Especializada',
    description: 'En ingeniería ambiental, formulación de estudios de preinversión y gestión de proyectos públicos.'
  },
  {
    metric: '12+',
    unit: 'Hospitales',
    title: 'Proyectos de Alta Complejidad PRONIS',
    description: 'Hospitales nacionales, regionales y establecimientos estratégicos con instrumentos ambientales formulados.'
  },
  {
    metric: '35+',
    unit: 'Estudios',
    title: 'Expedientes Técnicos y Preinversión',
    description: 'Viabilizados en Gobiernos Regionales (Huancavelica, Pasco, Ayacucho) y entidades del Estado.'
  },
  {
    metric: '1,200+',
    unit: 'Horas',
    title: 'Horas Académicas de Especialización',
    description: 'En OEFA, Contraloría, SENACE, Residuos Hospitalarios, SSOMA y Sistemas de Información Geográfica.'
  },
  {
    metric: '100%',
    unit: 'Tasa',
    title: 'Cumplimiento y Aprobación Normativa',
    description: 'En levantamiento de observaciones y conformidad de estudios de impacto ambiental ante entes rectores.'
  },
  {
    metric: '6',
    unit: 'Regiones',
    title: 'Alcance Geográfico Comprobado',
    description: 'Intervenciones en Lima, Chiclayo, Trujillo, Huancavelica, Pasco, Ayacucho y Apurímac.'
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-cayetano-heredia',
    title: 'Mejoramiento y Ampliación del Hospital Nacional Cayetano Heredia',
    category: 'salud',
    categoryLabel: 'Salud / PRONIS',
    entity: 'Programa Nacional de Inversiones en Salud (PRONIS)',
    period: '2024 (Abril - Septiembre)',
    location: 'Distrito de San Martín de Porres, Lima',
    image: '/src/assets/images/hospital_infrastructure_project_1792259233262.jpg',
    summary: 'Formulación especializada de la Evaluación Ambiental Preliminar (EVAP) para uno de los complejos hospitalarios de mayor envergadura y demanda médica del Perú.',
    instrument: 'Evaluación Ambiental Preliminar (EVAP) - Preinversión',
    achievements: [
      'Diagnóstico integral de la infraestructura actual y zonificación ambiental del predio hospitalario.',
      'Diseño del plan de manejo y mitigación acústica, atmosférica y de tránsito para entorno urbano de alta densidad.',
      'Modelamiento del sistema de gestión integral de residuos biocontaminados y especiales hospitalarios.',
      'Aprobación y conformidad técnica por parte de la Unidad de Preinversión del PRONIS.'
    ],
    responsibilities: [
      'Levantamiento de información ambiental in situ y caracterización de línea base física, biológica y social.',
      'Identificación y evaluación de impactos ambientales en fases de demolición, construcción y operación asistencial.',
      'Elaboración del Plan de Manejo Ambiental (PMA), Plan de Contingencias y Plan de Monitoreo.'
    ]
  },
  {
    id: 'proj-las-mercedes-chiclayo',
    title: 'Hospital Regional Docente Las Mercedes de Chiclayo',
    category: 'salud',
    categoryLabel: 'Salud / PRONIS',
    entity: 'Programa Nacional de Inversiones en Salud (PRONIS)',
    period: '2025 (Octubre - Diciembre)',
    location: 'Distrito de Chiclayo, Lambayeque',
    image: '/src/assets/images/hospital_infrastructure_project_1792259233262.jpg',
    summary: 'Servicio de formulación de proyecto en la especialidad de Ingeniería Ambiental para el estudio de preinversión del histórico Hospital Docente Las Mercedes.',
    instrument: 'Estudio de Preinversión - Capítulo Ambiental y Residuos',
    achievements: [
      'Establecimiento de las pautas ambientales para la reubicación y ampliación del recinto de salud.',
      'Incorporación de medidas de eficiencia energética, bioclimatismo y resiliencia ante el Fenómeno de El Niño.',
      'Conformidad técnica expedida por el PRONIS para el avance a fase de inversión.'
    ],
    responsibilities: [
      'Formulación del diagnóstico de vulnerabilidad ambiental y riesgos hidrológicos.',
      'Planificación del manejo de residuos biocontaminados, químicos y radiactivos.',
      'Sustentación técnica ante las comisiones evaluadoras sectoriales.'
    ]
  },
  {
    id: 'proj-belen-trujillo',
    title: 'Hospital Belén de Trujillo',
    category: 'salud',
    categoryLabel: 'Salud / PRONIS',
    entity: 'Programa Nacional de Inversiones en Salud (PRONIS)',
    period: '2025 (Agosto - Octubre)',
    location: 'Distrito de Trujillo, La Libertad',
    image: '/src/assets/images/hospital_infrastructure_project_1792259233262.jpg',
    summary: 'Servicio especializado en ingeniería ambiental para la formulación del estudio de preinversión en el icónico Hospital Belén de Trujillo.',
    instrument: 'Estudio de Preinversión / Diagnóstico Ambiental Estratégico',
    achievements: [
      'Integración armónica entre preservación patrimonial urbana y modernización hospitalaria sostenible.',
      'Estrategia de minimización de generación de residuos patológicos y efluentes médicos.',
      'Validación de requisitos ambientales para financiamiento público multianual.'
    ],
    responsibilities: [
      'Evaluación de factores ambientales biológicos, físicos y socioeconómicos.',
      'Determinación de medidas preventivas y correctivas para mitigación de polvo, ruido y vibraciones.'
    ]
  },
  {
    id: 'proj-huacho',
    title: 'Hospital General de Huacho',
    category: 'salud',
    categoryLabel: 'Salud / PRONIS',
    entity: 'Programa Nacional de Inversiones en Salud (PRONIS)',
    period: '2023 - 2025 (Múltiples Servicios Consecutivos)',
    location: 'Distrito de Huacho, Provincia de Huaura, Lima Provincias',
    image: '/src/assets/images/hospital_infrastructure_project_1792259233262.jpg',
    summary: 'Servicio especializado en ingeniería ambiental para la formulación y consolidación técnica del Estudio de Preinversión del Hospital General de Huacho.',
    instrument: 'Formulación de Instrumento Ambiental de Preinversión',
    achievements: [
      'Continuidad técnica y actualización sistemática de componentes ambientales y de gestión de residuos.',
      'Integración de análisis de riesgo ante tsunamis y sismicidad costera según directivas CENEPRED.',
      'Aprobación exitosa en las revisiones técnicas de la Unidad de Preinversión.'
    ],
    responsibilities: [
      'Elaboración y actualización de la memoria técnica ambiental y fichas de verificación.',
      'Coordinación multidisciplinaria con ingenieros civiles, sanitarios y arquitectos hospitalarios.'
    ]
  },
  {
    id: 'proj-chalhuanca',
    title: 'Hospital de Emergencias Chalhuanca',
    category: 'salud',
    categoryLabel: 'Salud / PRONIS',
    entity: 'Programa Nacional de Inversiones en Salud (PRONIS)',
    period: '2024 (Enero - Abril)',
    location: 'Distrito de Chalhuanca, Provincia de Aymaraes, Apurímac',
    image: '/src/assets/images/environmental_fieldwork_monitoring_1792259233873.jpg',
    summary: 'Formulación de la Evaluación Ambiental Preliminar (EVAP) para el establecimiento hospitalario de emergencias en la sierra sur del Perú.',
    instrument: 'Evaluación Ambiental Preliminar (EVAP)',
    achievements: [
      'Evaluación de topografía agreste y diseño de medidas de mitigación para estabilidad de taludes y escorrentías.',
      'Soluciones descentralizadas para el tratamiento de efluentes y almacenamiento seguro de residuos biológicos.',
      'Conformidad ambiental otorgada dentro de los plazos contractuales previstos.'
    ],
    responsibilities: [
      'Inspección in situ en la región de Apurímac y recolección de muestras y datos de campo.',
      'Redacción de instrumentos ambientales e incorporación de análisis de riesgo de desastres.'
    ]
  },
  {
    id: 'proj-red-hospitales-nacional',
    title: 'Evaluación Ambiental: Dos de Mayo, Carlos Monge Medrano, Huaral y Chosica',
    category: 'salud',
    categoryLabel: 'Salud / PRONIS',
    entity: 'Programa Nacional de Inversiones en Salud (PRONIS)',
    period: '2025 (Enero - Marzo)',
    location: 'Lima (Cercado y Chosica), Puno (Juliaca) y Huaral',
    image: '/src/assets/images/hospital_infrastructure_project_1792259233262.jpg',
    summary: 'Servicio de evaluación técnica especializada en Ingeniería Ambiental de los estudios referidos a cuatro emblemáticos proyectos de inversión hospitalaria.',
    instrument: 'Evaluación Técnica de Estudios Ambientales',
    achievements: [
      'Revisión y emisión de informes de conformidad para hospitales de alta complejidad en Costa y Sierra.',
      'Estandarización de criterios de evaluación ambiental y gestión de residuos biomédicos.',
      'Monitoreo del cumplimiento de los TDR y normativas ambientales vigentes.'
    ],
    responsibilities: [
      'Control de calidad técnico de los entregables ambientales presentados por empresas consultoras.',
      'Emisión de pliegos de observaciones y validación de levantamientos técnicos.'
    ]
  },
  {
    id: 'proj-paucartambo',
    title: 'Establecimiento de Salud Paucartambo',
    category: 'salud',
    categoryLabel: 'Salud / PRONIS',
    entity: 'Programa Nacional de Inversiones en Salud (PRONIS)',
    period: '2024 (Septiembre - Diciembre)',
    location: 'Distrito de Paucartambo, Pasco',
    image: '/src/assets/images/environmental_fieldwork_monitoring_1792259233873.jpg',
    summary: 'Servicio especializado en Ingeniería Ambiental para la Unidad de Preinversión en el mejoramiento de los servicios de salud de Paucartambo.',
    instrument: 'Estudio de Preinversión - Componente Ambiental',
    achievements: [
      'Planificación del manejo de residuos biocontaminados en zona rural altoandina con aislamiento geográfico.',
      'Estudio de resiliencia frente a precipitaciones pluviales intensas y heladas.',
      'Aprobación expedita por la Unidad Formuladora.'
    ],
    responsibilities: [
      'Diagnóstico ambiental territorial y evaluación de riesgos naturales.',
      'Formulación del plan de mitigación y gestión ambiental del establecimiento.'
    ]
  },
  {
    id: 'proj-gore-huancavelica',
    title: 'Cartera de Proyectos de Inversión Pública - GORE Huancavelica',
    category: 'regional',
    categoryLabel: 'Gobierno Regional',
    entity: 'Gobierno Regional de Huancavelica (Sub Gerencia y Oficina de Pre Inversión)',
    period: '2015 - 2019 (Continuo)',
    location: 'Región Huancavelica',
    image: '/src/assets/images/environmental_fieldwork_monitoring_1792259233873.jpg',
    summary: 'Ingeniero Ambiental responsable de la elaboración de Estudios de Impacto Ambiental, Análisis de Riesgos y formulación de TDRs para decenas de proyectos de inversión.',
    instrument: 'EIA, DIA, Análisis de Riesgos (EVAR) y TDRs',
    achievements: [
      'Viabilización ambiental de más de 25 proyectos de preinversión en educación, salud, vialidad y riego.',
      'Implementación del enfoque de gestión de riesgos por cambio climático en el marco de INVIERTE.PE.',
      'Elaboración de especificaciones técnicas para licitaciones públicas de consultoría ambiental.'
    ],
    responsibilities: [
      'Responsable ambiental de la cartera regional de preinversión.',
      'Trabajo de campo en las 7 provincias de Huancavelica, articulación comunitaria y consulta previa.',
      'Sustentación de estudios ante el MEF y sectores ministeriales.'
    ]
  },
  {
    id: 'proj-pescs-ayacucho',
    title: 'Infraestructura de Riego y Desarrollo Agroeconómico - PESCS Ayacucho',
    category: 'regional',
    categoryLabel: 'Proyectos Especiales',
    entity: 'Proyecto Especial Sierra Centro Sur (PESCS)',
    period: '2020 (Febrero - Diciembre)',
    location: 'Ayacucho / Sierra Centro Sur',
    image: '/src/assets/images/sanitary_infrastructure_gis_1792259234873.jpg',
    summary: 'Especialista en Impacto Ambiental, Seguridad Ocupacional (SSOMA) en obra y Evaluador de Estudios Básicos y Expedientes Técnicos de infraestructura de riego.',
    instrument: 'Supervisión SSOMA y Evaluación de Expedientes Técnicos',
    achievements: [
      'Supervisión y control in situ de obras de captación, canales de irrigación y defensas ribereñas.',
      'Evaluación exhaustiva de expedientes técnicos para viabilidad de licitación de obras de infraestructura.',
      'Cero incidentes ambientales no mitigados reportados durante la gestión.'
    ],
    responsibilities: [
      'Supervisión del cumplimiento del PMA y protocolos de seguridad y salud en el trabajo en obra.',
      'Emisión de dictámenes técnicos sobre estudios básicos de suelo, hidrología e impacto ambiental.'
    ]
  },
  {
    id: 'proj-vivienda-pasco',
    title: 'Obra Socio Ambiental - Residencia de Obra',
    category: 'mineria_saneamiento',
    categoryLabel: 'Saneamiento & Minería',
    entity: 'Dirección Regional de Vivienda, Construcción y Saneamiento - Pasco',
    period: '2012 (Marzo - Septiembre)',
    location: 'Pasco',
    image: '/src/assets/images/sanitary_infrastructure_gis_1792259234873.jpg',
    summary: 'Residente en Obra Socio Ambiental, liderando la ejecución de componentes sanitarios, mitigación de impactos y fortalecimiento de capacidades comunitarias.',
    instrument: 'Residencia y Gestión Socio-Ambiental en Obra',
    achievements: [
      'Ejecución del 100% de las metas físicas programadas en saneamiento básico y saneamiento ambiental.',
      'Articulación exitosa con la comunidad campesina local y juntas de agua y saneamiento (JASS).'
    ],
    responsibilities: [
      'Dirección técnica en campo de las actividades ambientales y sanitarias.',
      'Control presupuestal, valorizaciones y liquidación física de obra.'
    ]
  },
  {
    id: 'proj-minera-huaron',
    title: 'Control y Monitoreo Ambiental en Operación Minera',
    category: 'mineria_saneamiento',
    categoryLabel: 'Saneamiento & Minería',
    entity: 'Empresa Minera Huarón',
    period: '2008 (Enero - Abril)',
    location: 'Huayllay, Cerro de Pasco',
    image: '/src/assets/images/environmental_fieldwork_monitoring_1792259233873.jpg',
    summary: 'Monitoreo de aguas superficiales y subterráneas, programas de reforestación altoandina, manejo de residuos peligrosos e inspecciones ambientales en mina subterránea.',
    instrument: 'Monitoreo Ambiental y Programa de Adecuación y Manejo Ambiental (PAMA)',
    achievements: [
      'Toma y cadena de custodia de muestras hidrológicas según protocolos del MINEM.',
      'Supervisión de canchas de relaves y programas de reforestación de especies nativas (queñua, colle).'
    ],
    responsibilities: [
      'Medición de parámetros in situ (pH, conductividad, turbidez, oxígeno disuelto).',
      'Inspecciones ambientales de talleres, almacenes y áreas operativas.'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Servicio Especializado en Evaluación de Proyecto de Inversión Pública (Ingeniería Ambiental)',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '24 de Marzo – 15 de Abril del 2026',
    periodNormalized: 'Marzo – Abril 2026',
    type: 'salud',
    location: 'Lima / Nacional',
    description: 'Servicio de alta especialización técnica para la evaluación de estudios de preinversión en la especialidad de ingeniería ambiental dentro de la Unidad de Preinversión.',
    scope: 'Revisión técnica de instrumentos ambientales hospitalarios a nivel nacional.',
    highlights: [
      'Control de calidad metodológico según normativas de MINSA y SENACE.',
      'Verificación de planes de contingencia y dimensionamiento de centros de residuos.',
      'Emisión de dictámenes técnicos definitivos para viabilidad de inversión.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Servicio de Formulación de Proyecto en la Especialidad de Ingeniería Ambiental',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '24 de Diciembre del 2025 – 22 de Enero del 2026',
    periodNormalized: 'Diciembre 2025 – Enero 2026',
    type: 'salud',
    location: 'Lima / Nacional',
    description: 'Contratación para formulación de componentes ambientales de proyectos estratégicos de inversión en salud.',
    scope: 'Desarrollo de línea base ambiental y diseño de medidas de mitigación en hospitales.',
    highlights: [
      'Elaboración de capítulos ambientales para expedientes de preinversión.',
      'Cálculo de presupuestos del Plan de Manejo Ambiental para financiamiento público.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Especialista Ambiental – Preinversión Hospital Regional Las Mercedes de Chiclayo',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '28 de Octubre – 17 de Diciembre del 2025',
    periodNormalized: 'Octubre – Diciembre 2025',
    type: 'salud',
    location: 'Chiclayo, Lambayeque',
    description: 'Servicio de formulación de proyecto en ingeniería ambiental para el estudio de preinversión: "Mejoramiento y Ampliación de Atención de Servicios de Salud Hospitalarios en Hospital Regional Docente Las Mercedes".',
    scope: 'Complejo hospitalario docente de alta demanda en el norte del país.',
    highlights: [
      'Diagnóstico de vulnerabilidad frente a lluvias torrenciales y Fenómeno El Niño.',
      'Diseño del sistema integral para manejo de residuos biocontaminados y especiales.',
      'Aprobación formal por parte del comité evaluador de la Unidad de Preinversión.'
    ]
  },
  {
    id: 'exp-4',
    role: 'Especialista Ambiental – Preinversión Hospital Belén de Trujillo',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '20 de Agosto – 09 de Octubre del 2025',
    periodNormalized: 'Agosto – Octubre 2025',
    type: 'salud',
    location: 'Trujillo, La Libertad',
    description: 'Servicio especializado en ingeniería ambiental para la formulación del estudio de preinversión: "Mejoramiento y Ampliación de Atención de Servicios de Salud Hospitalarios Belén de Trujillo".',
    scope: 'Hospital histórico y referencial de la región La Libertad.',
    highlights: [
      'Modelamiento de compatibilidad ambiental y acústica con el entorno urbano.',
      'Formulación de medidas preventivas para fases constructivas en cercanías a pacientes.',
      'Aprobación técnica de los entregables ambientales.'
    ]
  },
  {
    id: 'exp-5',
    role: 'Especialista Ambiental – Preinversión Hospital General de Huacho',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '12 de Marzo – 04 de Agosto del 2025',
    periodNormalized: 'Marzo – Agosto 2025',
    type: 'salud',
    location: 'Huacho, Huaura, Lima Provincias',
    description: 'Servicio especializado en formulación del estudio de preinversión para el Mejoramiento y Ampliación del Hospital General de Huacho (desarrollado en dos contratos consecutivos).',
    scope: 'Infraestructura hospitalaria estratégica para la costa norte de Lima.',
    highlights: [
      'Levantamiento detallado de línea base física, biológica y socioeconómica.',
      'Elaboración del Plan de Manejo Ambiental y presupuesto de mitigación.',
      'Coordinación con el equipo técnico de arquitectura y sanitarias del PRONIS.'
    ]
  },
  {
    id: 'exp-6',
    role: 'Evaluador Ambiental de Estudios: Dos de Mayo, Carlos Monge Medrano, Huaral y Chosica',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '15 de Enero – 05 de Marzo del 2025',
    periodNormalized: 'Enero – Marzo 2025',
    type: 'salud',
    location: 'Lima / Puno / Nacional',
    description: 'Servicio de evaluación técnica en la especialidad de ingeniería ambiental de los estudios referidos a los proyectos hospitalarios: Hospital Dos de Mayo, Hospital Carlos Monge Medrano de Puno, Hospital San Juan Bautista de Huaral y Hospital José Agurto Tello de Chosica.',
    scope: 'Evaluación integral de 4 grandes hospitales simultáneamente.',
    highlights: [
      'Revisión minuciosa de instrumentos ambientales conforme a directivas sectoriales.',
      'Emisión de pliegos de observaciones técnicas y verificación de subsanaciones.'
    ]
  },
  {
    id: 'exp-7',
    role: 'Especialista Ambiental – Preinversión E.S. Paucartambo',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '19 de Setiembre – 19 de Diciembre del 2024',
    periodNormalized: 'Septiembre – Diciembre 2024',
    type: 'salud',
    location: 'Paucartambo, Pasco',
    description: 'Servicio especializado en ingeniería ambiental para el estudio de preinversión del Establecimiento de Salud Paucartambo, Provincia y Departamento de Pasco (dos periodos contractuales).',
    scope: 'Establecimiento de salud estratégico en la cuenca de Paucartambo.',
    highlights: [
      'Elaboración del instrumento ambiental para edificación en ladera altoandina.',
      'Propuesta de gestión de residuos y efluentes hospitalarios en zona rural.'
    ]
  },
  {
    id: 'exp-8',
    role: 'Especialista en Evaluación Ambiental Preliminar – Hospital Nacional Cayetano Heredia',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '26 de Abril – 02 de Setiembre del 2024',
    periodNormalized: 'Abril – Septiembre 2024',
    type: 'salud',
    location: 'San Martín de Porres, Lima',
    description: 'Servicio en formulación de la Evaluación Ambiental Preliminar (EVAP) para el estudio de preinversión: "Mejoramiento y ampliación de los servicios de salud del Hospital Nacional Cayetano Heredia" (dos etapas continuas).',
    scope: 'Uno de los centros de salud docente y de investigación más prestigiosos de Latinoamérica.',
    highlights: [
      'Caracterización ambiental y evaluación de impactos en predio de alta complejidad médica.',
      'Diseño del PMA y gestión de residuos para atención de miles de pacientes diarios.',
      'Aprobación y conformidad otorgada por la Unidad de Preinversión.'
    ]
  },
  {
    id: 'exp-9',
    role: 'Especialista en Evaluación Ambiental Preliminar – Hospital de Emergencias Chalhuanca',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '19 de Enero – 19 de Abril del 2024',
    periodNormalized: 'Enero – Abril 2024',
    type: 'salud',
    location: 'Chalhuanca, Apurímac',
    description: 'Formulación de la Evaluación Ambiental Preliminar (EVAP) en preinversión para el nuevo Hospital de Emergencias de Chalhuanca.',
    scope: 'Hospital de referencia de emergencias en el corredor sur.',
    highlights: [
      'Estudio de amenazas geotécnicas y riesgos climáticos en el valle de Chalhuanca.',
      'Conformidad ambiental expedida por la Unidad de Preinversión.'
    ]
  },
  {
    id: 'exp-10',
    role: 'Especialista Ambiental – Preinversión Hospital General de Huacho',
    entity: 'Programa Nacional de Inversiones en Salud – PRONIS',
    entityShort: 'PRONIS',
    period: '13 de Noviembre – 28 de Diciembre del 2023',
    periodNormalized: 'Noviembre – Diciembre 2023',
    type: 'salud',
    location: 'Huacho, Huaura, Lima',
    description: 'Servicio especializado en formulación de la evaluación ambiental para el estudio de preinversión del Hospital General de Huacho.',
    scope: 'Fase inicial de preinversión hospitalaria.',
    highlights: [
      'Entrega oportuna de documentación técnica y aprobación sin observaciones pendientes.'
    ]
  },
  {
    id: 'exp-11',
    role: 'Especialista Ambiental y de Riesgos en Preinversión',
    entity: 'Consultora Javier Choque Contreras',
    entityShort: 'Consultora Choque',
    period: '28 de Junio – 28 de Julio del 2021',
    periodNormalized: 'Junio – Julio 2021',
    type: 'regional',
    location: 'Perú',
    description: 'Elaboración de componentes ambientales y evaluación de riesgos de desastres para proyectos de preinversión pública.',
    scope: 'Consultoría especializada.',
    highlights: ['Diseño de matrices de riesgo CENEPRED y PMA.']
  },
  {
    id: 'exp-12',
    role: 'Especialista en Elaboración de Estudio de Impacto Ambiental',
    entity: 'Consultora Abdias Janampa Quispe',
    entityShort: 'Consultora Janampa',
    period: '10 de Abril – 10 de Junio del 2021',
    periodNormalized: 'Abril – Junio 2021',
    type: 'regional',
    location: 'Perú',
    description: 'Elaboración del Estudio de Impacto Ambiental (EIA) para expediente técnico de inversión.',
    scope: 'Elaboración de estudio definitivo.',
    highlights: ['Línea base física y biológica, plan de abandono y monitoreo.']
  },
  {
    id: 'exp-13',
    role: 'Especialista en Impacto Ambiental, Seguridad Ocupacional (SSOMA) y Evaluador',
    entity: 'Proyecto Especial Sierra Centro Sur (PESCS) – Ayacucho',
    entityShort: 'PESCS',
    period: '12 de Febrero – 31 de Diciembre del 2020',
    periodNormalized: 'Febrero – Diciembre 2020',
    type: 'regional',
    location: 'Ayacucho / Sierra Centro Sur',
    description: 'Desempeño en múltiples direcciones: Dirección de Infraestructura y Riego (Especialista en Impacto Ambiental y Seguridad Ocupacional en Obra, Evaluador de Estudios Básicos y Expedientes Técnicos) y Dirección de Desarrollo Agroeconómico (Evaluador de Expedientes Técnicos).',
    scope: 'Proyectos de irrigación, represas y defensas ribereñas en valles interandinos.',
    highlights: [
      'Supervisión continua de protocolos SSOMA y bioseguridad en obras hidráulicas.',
      'Evaluación técnica de decenas de expedientes para transferencias financieras de inversión pública.'
    ]
  },
  {
    id: 'exp-14',
    role: 'Especialista Ambiental y Análisis de Riesgos – Unidad Formuladora',
    entity: 'Dirección Regional de Educación de Huancavelica (UF – DREH)',
    entityShort: 'DRE Huancavelica',
    period: '01 de Octubre – 31 de Diciembre del 2019',
    periodNormalized: 'Octubre – Diciembre 2019',
    type: 'regional',
    location: 'Huancavelica',
    description: 'Elaboración de Estudios de Impacto Ambiental, Análisis de Riesgos y formulación de TDRs y Planes de Trabajo para proyectos de infraestructura educativa.',
    scope: 'Colegios y centros educativos en comunidades altoandinas.',
    highlights: ['Evaluación de seguridad estructural ante sismos y huaycos, PMA escolar.']
  },
  {
    id: 'exp-15',
    role: 'Ingeniero Ambiental – Sub Gerencia de Pre Inversión',
    entity: 'Gobierno Regional de Huancavelica',
    entityShort: 'GORE Huancavelica',
    period: '31 de Mayo – 30 de Junio del 2019',
    periodNormalized: 'Mayo – Junio 2019',
    type: 'regional',
    location: 'Huancavelica',
    description: 'Servicio Especializado de Ingeniería Ambiental para proyectos de inversión de la cartera regional.',
    scope: 'Cartera de inversiones regionales.',
    highlights: ['Compatibilidad territorial y viabilización ambiental.']
  },
  {
    id: 'exp-16',
    role: 'Especialista en Elaboración de Estudios Ambientales',
    entity: 'Consultora Constructora INSACRUZ S.A.C.',
    entityShort: 'INSACRUZ',
    period: '08 de Enero – 08 de Mayo del 2019',
    periodNormalized: 'Enero – Mayo 2019',
    type: 'regional',
    location: 'Perú',
    description: 'Elaboración de estudios ambientales para expedientes técnicos de obras civiles y viales.',
    scope: 'Expedientes de obra pública.',
    highlights: ['PMA de canteras, botaderos y campamentos de obra.']
  },
  {
    id: 'exp-17',
    role: 'Ingeniero Ambiental – Sub Gerencia y Oficina Regional de Pre Inversión',
    entity: 'Gobierno Regional de Huancavelica',
    entityShort: 'GORE Huancavelica',
    period: '03 de Agosto 2015 – 31 de Diciembre 2018 (Periodos Continuos)',
    periodNormalized: '2015 – 2018 (4 años)',
    type: 'regional',
    location: 'Huancavelica',
    description: 'Ingeniero Ambiental titular a cargo de la formulación y evaluación de Estudios de Impacto Ambiental, Análisis de Riesgos (CENEPRED), Términos de Referencia y Planes de Trabajo para la cartera completa de proyectos de inversión pública del Gobierno Regional.',
    scope: 'Más de 30 proyectos en salud, educación, saneamiento, carreteras y defensas ribereñas.',
    highlights: [
      'Evaluación técnica de campo en las 7 provincias huancavelicanas.',
      'Liderazgo en la transición normativa del SNIP al sistema INVIERTE.PE.',
      'Cero observaciones técnicas insubsanables en la Dirección General de Inversión Pública.'
    ]
  },
  {
    id: 'exp-18',
    role: 'Residente en Obra Socio Ambiental',
    entity: 'Dirección Regional de Vivienda, Construcción y Saneamiento – Pasco',
    entityShort: 'DRVCS Pasco',
    period: '26 de Marzo – 26 de Setiembre del 2012',
    periodNormalized: 'Marzo – Septiembre 2012',
    type: 'saneamiento_mineria',
    location: 'Pasco',
    description: 'Residencia en ejecución de obra socio-ambiental para mejora de condiciones sanitarias y preservación de fuentes de agua.',
    scope: 'Obras de infraestructura sanitaria y protección ambiental comunitaria.',
    highlights: ['Conformidad final y liquidación de obra sin retrasos.']
  },
  {
    id: 'exp-19',
    role: 'Asistente Técnico – Obras de Emergencia',
    entity: 'Municipalidad de Kimbiri – La Convención – Cusco',
    entityShort: 'Muni Kimbiri',
    period: '15 de Febrero – 15 de Mayo del 2010',
    periodNormalized: 'Febrero – Mayo 2010',
    type: 'regional',
    location: 'Kimbiri, Cusco (VRAEM)',
    description: 'Asistencia técnica en obras de emergencia y mitigación de desastres por desbordes de ríos.',
    scope: 'Defensas ribereñas y encauzamiento en zona de selva.',
    highlights: ['Control de trabajos de maquinaria y estabilización de riberas.']
  },
  {
    id: 'exp-20',
    role: 'Prácticas Profesionales en Gestión y Monitoreo Ambiental',
    entity: 'Empresa Minera Huarón',
    entityShort: 'Minera Huarón',
    period: '16 de Enero – 17 de Abril del 2008',
    periodNormalized: 'Enero – Abril 2008',
    type: 'saneamiento_mineria',
    location: 'Pasco',
    description: 'Monitoreo de aguas de mina y efluentes, programas de reforestación de pastizales y queñuales, manejo de residuos sólidos y peligrosos, e inspecciones ambientales.',
    scope: 'Unidad Minera Subterránea Huarón.',
    highlights: ['Protocolos de muestreo conforme a Límites Máximos Permisibles (LMP).']
  }
];

export const EDUCATION = [
  {
    id: 'edu-1',
    degree: 'Título Profesional en Ingeniería Ambiental',
    institution: 'Universidad Nacional Daniel Alcides Carrión (UNDAC) – Cerro de Pasco',
    faculty: 'Escuela de Formación Profesional de Ingeniería Ambiental',
    details: 'Colegiado en el Colegio de Ingenieros del Perú (CIP N° 161511)',
    badge: 'Título y Colegiatura CIP'
  }
];

export const DIPLOMAS = [
  {
    id: 'dip-1',
    title: 'Diplomado: "Supervisión en Medio Ambiente"',
    institution: 'Centro de Especialización Ambiental S.A.C. e Instituto Minero de Capacitación',
    period: 'Marzo – Julio 2021',
    focus: 'Fiscalización y control ambiental en minería, industria y obras públicas.'
  },
  {
    id: 'dip-2',
    title: 'Diplomado: "Ingeniería Sanitaria"',
    institution: 'Centro de Capacitación de Ingeniería y Tecnología en convenio con el Colegio de Ingenieros de Pasco',
    period: 'Marzo – Julio 2021',
    focus: 'Tratamiento de aguas residuales, diseño de rellenos sanitarios y saneamiento básico.'
  },
  {
    id: 'dip-3',
    title: 'Diplomado: "Gestión Ambiental y Evaluación del Impacto Ambiental"',
    institution: 'CESAP ALTOS ESTUDIOS en convenio con la Univ. Nacional José Faustino Sánchez Carrión – Lima',
    period: 'Junio – Diciembre 2014',
    focus: 'Metodologías de EIA, valoración económica de impactos y legislación ambiental.'
  },
  {
    id: 'dip-4',
    title: 'Diplomado: "Sistemas Integrados de Gestión (SIG): Calidad, Ambiental, Seguridad, Salud Ocupacional y Responsabilidad Social"',
    institution: 'CESAP ALTOS ESTUDIOS en convenio con la Universidad Inca Garcilaso de la Vega – Lima',
    period: 'Diciembre 2011 – Junio 2012',
    focus: 'Normas ISO 9001, ISO 14001, OHSAS 18001 / ISO 45001 y SA 8000.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'OEFA Y LA CONTRALORÍA: Fiscalización Ambiental y Control Gubernamental en la Gestión Pública',
    institution: 'EQUILIBRIA CONSULTING',
    hours: 40,
    period: 'Julio – Setiembre 2026',
    category: 'normativa',
    categoryLabel: 'Fiscalización & Control',
    verified: true
  },
  {
    id: 'cert-2',
    title: 'Recuperación de Áreas Degradadas por Residuos Sólidos',
    institution: 'NECTRAN Consultores',
    hours: 120,
    period: '14 de Abril – 14 de Mayo del 2026',
    category: 'especializacion',
    categoryLabel: 'Residuos Sólidos',
    verified: true
  },
  {
    id: 'cert-3',
    title: 'Monitoreo Ambiental Especializado',
    institution: 'NECTRAN Consultores',
    hours: 120,
    period: '06 – 31 de Enero del 2026',
    category: 'especializacion',
    categoryLabel: 'Monitoreo Ambiental',
    verified: true
  },
  {
    id: 'cert-4',
    title: 'Gestión y Manejo de Residuos Sólidos Hospitalarios',
    institution: 'NECTRAN Consultores',
    hours: 120,
    period: '03 – 24 de Noviembre del 2025',
    category: 'especializacion',
    categoryLabel: 'Residuos Hospitalarios',
    verified: true
  },
  {
    id: 'cert-5',
    title: 'Legislación y Fiscalización Ambiental en el Sector Minero Energético',
    institution: 'NECTRAN Consultores',
    hours: 120,
    period: '06 – 31 de Enero del 2024',
    category: 'normativa',
    categoryLabel: 'Minería & Energía',
    verified: true
  },
  {
    id: 'cert-6',
    title: 'Selección Óptima de Área para Infraestructura de Disposición Final de Residuos Sólidos con ARCGIS',
    institution: 'ECOAMBIENTAL Group',
    hours: 100,
    period: '27 de Septiembre – 16 de Octubre del 2023',
    category: 'software',
    categoryLabel: 'ArcGIS & SIG',
    verified: true
  },
  {
    id: 'cert-7',
    title: 'Programación, Control y Seguimiento de Obra con MS Project',
    institution: 'GHAMEC INGENIEROS',
    hours: 120,
    period: '07 de Marzo – 03 de Abril del 2023',
    category: 'software',
    categoryLabel: 'Gestión de Proyectos',
    verified: true
  },
  {
    id: 'cert-8',
    title: 'Supervisor SSOMA: Seguridad, Salud Ocupacional y Medio Ambiente',
    institution: 'Instituto de la Calidad Ambiental – Colegio de Ingenieros de Pasco',
    period: 'Mayo – Setiembre 2022',
    category: 'normativa',
    categoryLabel: 'Seguridad SSOMA',
    verified: true
  },
  {
    id: 'cert-9',
    title: 'Gestión Integral de Residuos Sólidos (D.L. 1278)',
    institution: 'Capacitación Profesional Especializada',
    period: 'Julio – Agosto 2021',
    category: 'especializacion',
    categoryLabel: 'Residuos Sólidos',
    verified: true
  },
  {
    id: 'cert-10',
    title: 'Formación en Evaluación de Riesgo de Desastres Originados por Fenómenos Naturales (EVAR / CENEPRED)',
    institution: 'Escuela de Posgrado de la Universidad Continental – Huancayo',
    period: 'Noviembre 2019 – Mayo 2020',
    category: 'normativa',
    categoryLabel: 'Riesgos CENEPRED',
    verified: true
  },
  {
    id: 'cert-11',
    title: 'ArcGIS Aplicado a Evaluación de Impacto Ambiental',
    institution: 'Curso de Especialización Profesional',
    period: '18 de Julio – 28 de Agosto del 2023',
    category: 'software',
    categoryLabel: 'ArcGIS & SIG',
    verified: true
  },
  {
    id: 'cert-12',
    title: 'Costos y Presupuestos de Obras con S10',
    institution: 'Curso Profesional',
    period: '06 de Setiembre – 02 de Octubre del 2022',
    category: 'software',
    categoryLabel: 'Costos & S10',
    verified: true
  },
  {
    id: 'cert-13',
    title: 'Seguridad en Obras de Construcción (G.050)',
    institution: 'Curso de Especialización',
    period: '04 de Julio – 30 de Julio del 2023',
    category: 'normativa',
    categoryLabel: 'Seguridad en Obra',
    verified: true
  },
  {
    id: 'cert-14',
    title: 'El Rol del SENACE en la Certificación Ambiental y Registro Nacional de Consultoras (RNC)',
    institution: 'SENACE (Servicio Nacional de Certificación Ambiental)',
    period: '21 de Julio del 2021',
    category: 'normativa',
    categoryLabel: 'SENACE & SEIA',
    verified: true
  },
  {
    id: 'cert-15',
    title: 'Sistema Nacional de Programación Multianual y Gestión de Inversiones INVIERTE.PE',
    institution: 'Capacitación Especializada en Gestión Pública',
    period: 'Setiembre 2018',
    category: 'normativa',
    categoryLabel: 'INVIERTE.PE',
    verified: true
  },
  {
    id: 'cert-16',
    title: 'Gestión de Riesgo del Cambio Climático en la Inversión Pública',
    institution: 'Curso Especializado de Gestión Pública',
    period: 'Septiembre – Octubre 2017',
    category: 'normativa',
    categoryLabel: 'Cambio Climático',
    verified: true
  },
  {
    id: 'cert-17',
    title: 'Auditoría Ambiental (ISO 14001:2004)',
    institution: 'Curso Taller Profesional – Lima',
    period: 'Diciembre 2014',
    category: 'especializacion',
    categoryLabel: 'Auditoría Ambiental',
    verified: true
  },
  {
    id: 'cert-18',
    title: 'Metodologías de Identificación, Vulnerabilidad y Plan de Manejo Ambiental',
    institution: 'Curso Taller Especializado – Lima',
    period: 'Octubre 2014',
    category: 'especializacion',
    categoryLabel: 'Impacto Ambiental',
    verified: true
  }
];

export const TECHNICAL_SKILLS = [
  {
    name: 'Evaluación de Impacto Ambiental (EIA / DIA / EVAP)',
    level: 98,
    category: 'Ambiental'
  },
  {
    name: 'Gestión de Residuos Hospitalarios y Biocontaminados',
    level: 95,
    category: 'Ambiental'
  },
  {
    name: 'Sistema INVIERTE.PE y Preinversión Pública',
    level: 96,
    category: 'Gestión Pública'
  },
  {
    name: 'Evaluación de Riesgo de Desastres (EVAR / CENEPRED)',
    level: 90,
    category: 'Riesgos'
  },
  {
    name: 'ArcGIS y Análisis Espacial Multicriterio',
    level: 88,
    category: 'Software'
  },
  {
    name: 'Fiscalización Ambiental (OEFA / Contraloría / SENACE)',
    level: 92,
    category: 'Normativa'
  },
  {
    name: 'Supervisión SSOMA en Obra y Seguridad G.050',
    level: 92,
    category: 'Seguridad'
  },
  {
    name: 'MS Project y Presupuestos con S10',
    level: 86,
    category: 'Software'
  }
];
