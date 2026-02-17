/**
 * Datos de las ofertas de empleo (debe coincidir con Empleos.html)
 */
const JOBS_DATA = {
  1: {
    title: 'Ingeniero de Software Senior',
    company: 'Tech Solutions Inc.',
    location: 'Remoto',
    description: 'En Tech Solutions Inc. buscamos un Ingeniero de Software Senior para unirse a nuestro equipo de desarrollo. Formarás parte de un entorno dinámico donde podrás contribuir al diseño e implementación de soluciones escalables que impactan a miles de usuarios. Trabajarás con tecnologías modernas y tendrás la oportunidad de mentorizar a desarrolladores junior.',
    responsibilities: [
      'Diseñar, desarrollar y mantener aplicaciones web utilizando tecnologías modernas.',
      'Codificar con equipos de producto y diseño para planificar y entregar nuevas características.',
      'Escribir código limpio, eficiente y bien documentado.',
      'Realizar revisiones de código y proporcionar retroalimentación constructiva a los miembros del equipo.'
    ],
    requirements: [
      'Licenciatura en informática o campo relacionado.',
      'Mínimo de 5 años de experiencia en desarrollo de software.',
      'Experiencia con frameworks JS populares (por ejemplo, React, Angular, Vue.js).',
      'Familiaridad con metodologías ágiles y herramientas de control de versiones (por ejemplo, Git).'
    ],
    about: 'Tech Solutions Inc. es una empresa líder en desarrollo de software con más de 10 años de experiencia. Nuestra misión es crear soluciones tecnológicas que simplifiquen la vida de las personas. Ofrecemos un entorno de trabajo colaborativo, horarios flexibles y oportunidades de crecimiento profesional.'
  },
  2: {
    title: 'Analista de Datos',
    company: 'Data Driven Co.',
    location: 'Remoto',
    description: 'Data Driven Co. busca un Analista de Datos para transformar datos en insights accionables. Formarás parte del equipo de analytics, trabajando con grandes volúmenes de información para apoyar la toma de decisiones estratégicas. El rol combina análisis estadístico, visualización y comunicación con stakeholders.',
    responsibilities: [
      'Analizar grandes conjuntos de datos para identificar tendencias y patrones.',
      'Crear dashboards y reportes de visualización para distintos equipos.',
      'Desarrollar y mantener pipelines de datos con SQL y Python.',
      'Comunicar hallazgos de forma clara a equipos técnicos y no técnicos.'
    ],
    requirements: [
      'Licenciatura en estadística, matemáticas, informática o campo relacionado.',
      'Experiencia demostrable en análisis de datos (mínimo 3 años).',
      'Dominio de SQL, Python y/o R.',
      'Conocimiento de herramientas de visualización (Power BI, Tableau, etc.).'
    ],
    about: 'Data Driven Co. es una consultora especializada en analytics y business intelligence. Ayudamos a empresas a aprovechar sus datos para crecer. Nuestra cultura valora la curiosidad, el pensamiento crítico y el trabajo en equipo.'
  },
  3: {
    title: 'Desarrollador de Aplicaciones Móviles',
    company: 'Mobile Apps Ltd.',
    location: 'Guadalajara',
    description: 'Mobile Apps Ltd. busca un Desarrollador de Aplicaciones Móviles para crear experiencias nativas e híbridas de alto impacto. Trabajarás en aplicaciones que llegan a millones de usuarios en iOS y Android. El candidato ideal combina pasión por el diseño UX con sólidas habilidades técnicas.',
    responsibilities: [
      'Desarrollar aplicaciones móviles nativas para iOS (Swift) y/o Android (Kotlin).',
      'Colaborar con diseño para implementar interfaces atractivas y usables.',
      'Optimizar rendimiento y consumo de recursos en dispositivos móviles.',
      'Participar en revisiones de código y en la mejora continua de los procesos.'
    ],
    requirements: [
      'Experiencia en desarrollo móvil (iOS, Android o ambos).',
      'Conocimiento de Swift, Kotlin y/o React Native.',
      'Comprensión de las guías de diseño de Apple y Material Design.',
      'Experiencia con APIs REST y manejo de estado en aplicaciones móviles.'
    ],
    about: 'Mobile Apps Ltd. es un estudio de desarrollo móvil con sede en Guadalajara. Creamos apps que las personas usan todos los días. Ofrecemos ambiente creativo, proyectos diversos y la posibilidad de trabajar con las últimas tecnologías.'
  },
  4: {
    title: 'Ingeniero de DevOps',
    company: 'Cloud Services Corp.',
    location: 'Remoto',
    description: 'Cloud Services Corp. busca un Ingeniero de DevOps para gestionar y optimizar nuestra infraestructura en la nube. Serás responsable de los pipelines de CI/CD, la monitorización de sistemas y la automatización de procesos. El rol es clave para garantizar la escalabilidad y confiabilidad de nuestros servicios.',
    responsibilities: [
      'Gestionar infraestructura en la nube (AWS, Azure o GCP).',
      'Configurar y mantener pipelines de integración y despliegue continuo.',
      'Implementar prácticas de observabilidad (monitoreo, logs, alertas).',
      'Automatizar tareas operativas con scripts y herramientas como Terraform o Ansible.'
    ],
    requirements: [
      'Experiencia en administración de sistemas y/o ingeniería DevOps (mínimo 3 años).',
      'Conocimiento profundo de al menos un proveedor cloud (AWS, Azure, GCP).',
      'Experiencia con Docker, Kubernetes y herramientas de CI/CD.',
      'Conocimiento de scripting (Bash, Python) e infraestructura como código.'
    ],
    about: 'Cloud Services Corp. proporciona soluciones de infraestructura y servicios gestionados en la nube. Trabajamos con empresas de todos los tamaños para que su tecnología sea escalable, segura y eficiente. Nuestro equipo es remoto y distribuido.'
  }
};

/**
 * Obtiene el ID del empleo desde la URL (?id=1)
 */
function getJobIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  return id ? parseInt(id, 10) : 1;
}

/**
 * Renderiza los detalles del empleo en la página
 */
function renderJobDetail(job) {
  document.getElementById('breadcrumb-title').textContent = job.title;
  document.getElementById('job-title').textContent = job.title;
  document.getElementById('job-company').textContent = `${job.company}, ${job.location}`;
  document.getElementById('job-description').textContent = job.description;
  document.getElementById('job-about').textContent = job.about;
  document.title = `${job.title} - TalentDev`;

  const responsibilitiesEl = document.getElementById('job-responsibilities');
  responsibilitiesEl.innerHTML = job.responsibilities
    .map(r => `<li><svg class="descriempleo-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>${r}</li>`)
    .join('');

  const requirementsEl = document.getElementById('job-requirements');
  requirementsEl.innerHTML = job.requirements
    .map(r => `<li><svg class="descriempleo-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>${r}</li>`)
    .join('');
}

/**
 * Inicializa el botón de aplicar (comportamiento visual)
 */
function initApplyButtons() {
  const buttons = document.querySelectorAll('#apply-btn-header, #apply-btn-footer');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Aplicado';
      btn.classList.add('descriempleo-apply-btn-applied');
      btn.disabled = true;
      buttons.forEach(b => {
        b.textContent = 'Aplicado';
        b.classList.add('descriempleo-apply-btn-applied');
        b.disabled = true;
      });
    });
  });
}

// Inicio
const jobId = getJobIdFromUrl();
const job = JOBS_DATA[jobId];

if (job) {
  renderJobDetail(job);
  initApplyButtons();
} else {
  // Si no existe el empleo, redirigir a empleos
  window.location.href = 'Empleos.html';
}
