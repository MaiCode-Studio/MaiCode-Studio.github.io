/**
 * MAICODE STUDIO - CORE SCRIPTS
 * Manejo interactivo de planes, portafolio de proyectos,
 * modal de especificaciones y generador de mensajes a WhatsApp.
 */

// ==========================================
// 1. CONFIGURACIÓN EDITABLE (Cambia tus datos aquí)
// ==========================================
const CONFIG = {
  // Ingresa aquí tu número de WhatsApp sin signos (+) ni espacios. Ejemplo: '584121234567'
  whatsappNumber: '584128672906', 
  agencyName: 'MaiCode Studio',
  defaultExchangeRate: 36.50 // Tasa referencial Bs/USD
};

// ==========================================
// 2. DETALLES EXTENDIDOS DE CADA PLAN (Imágenes 3, 4 y 5)
// ==========================================
const PLAN_DETAILS = {
  presencia: {
    name: 'Plan Presencia Digital',
    price: '$80',
    frequency: 'Pago Único',
    intro: 'Este plan está diseñado para profesionales, consultores, médicos, restaurantes, barberías, talleres o cualquier negocio local que no requiera un catálogo extenso, sino una página web moderna, rápida y confiable que transmita seguridad, posicione su marca y convierta visitantes en clientes directos por WhatsApp.',
    sections: [
      {
        title: '1. Estructura Web fluida (Formato One-Page)',
        items: [
          '<strong>Diseño en una sola vista continua (scroll fluido):</strong> Toda la información de tu negocio organizada estratégicamente en una sola pantalla para que tus clientes naveguen fácil y rápido desde su teléfono, sin esperar a que carguen otras pestañas.',
          '<strong>Sección Principal (Hero):</strong> Logotipo, título impactante con tu propuesta de valor y un botón principal de llamada a la acción (ej: "Agendar Cita", "Consultar Servicios" o "Hablar con un Asesor").'
        ]
      },
      {
        title: '2. Muestra de Servicios o Productos Destacados',
        items: [
          '<strong>Galería visual de 4 a 6 servicios o productos estrella:</strong> Incluye fotografías optimizadas de alta calidad, títulos, descripciones breves y sus respectivos precios o tarifas base.'
        ]
      },
      {
        title: '3. Sección Especializada Adaptada a tu Negocio',
        items: [
          '<strong>Bloque flexible personalizado:</strong> Adaptamos una sección clave según tu rubro comercial:',
          '• <em>Para clínicas o consultorios:</em> Preguntas frecuentes o requisitos de consulta.',
          '• <em>Para centros de estética o barberías:</em> Galería de fotos / Resultados.',
          '• <em>Para restaurantes:</em> Menú promocional del mes.',
          '• <em>Para profesionales independientes:</em> Proceso de trabajo o certificaciones.'
        ]
      },
      {
        title: '4. Identidad e Información Comercial Completa',
        items: [
          '<strong>Sección "Sobre Nosotros":</strong> Historia de la empresa, trayectoria, misión o presentación del equipo de trabajo.',
          '<strong>Ubicación y Horarios:</strong> Dirección física exacta con mapa interactivo de Google Maps integrado para que tus clientes sepan cómo llegar fácilmente a tu local.'
        ]
      },
      {
        title: '5. Conectividad Directa y Redes Sociales',
        items: [
          '<strong>Botón flotante permanente de WhatsApp:</strong> Siempre visible en la esquina de la pantalla para que te contacten con un solo clic.',
          '<strong>Conectividad Directa:</strong> Botón flotante permanente de WhatsApp + enlaces a hasta 3 perfiles de redes sociales (Instagram, TikTok, Telegram).'
        ]
      }
    ]
  },

  catalogo: {
    name: 'Plan Catálogo Pro',
    price: '$120',
    frequency: 'Pago Único',
    intro: 'Ideal para tiendas de ropa, calzado, repuestos, cosméticos, tecnología o negocios con una variedad constante de productos que necesitan organizar su inventario y simplificar el proceso de compra de sus clientes.',
    sections: [
      {
        title: '1. Estructura Web Multipágina (Navegación por Pestañas)',
        items: [
          '<strong>Menú Superior Independiente:</strong> A diferencia de una vista continua, el sitio se divide en pestañas claras (Inicio, Catálogo, Empresa, Contacto). Esto permite que el usuario navegue de forma limpia y ordenada sin saturar la pantalla de su teléfono.',
          '<strong>Portada Comercial (Hero Banner):</strong> Espacio destacado para anunciar promociones del mes, colecciones de temporada o la propuesta principal de tu tienda.'
        ]
      },
      {
        title: '2. Catálogo Interactivo Completo (Hasta 50 Productos)',
        items: [
          '<strong>Exhibición de Productos:</strong> Fichas individuales de hasta 50 artículos con fotos de alta calidad, títulos, especificaciones técnicas y precios.'
        ]
      },
      {
        title: '3. Simulador de Presupuesto + Calculadora de Doble Tasa',
        items: [
          '<strong>Simulador en Tiempo Real:</strong> El usuario puede seleccionar artículos, ajustar cantidades o agregar opciones y ver la sumatoria total de su pedido al instante.',
          '<strong>Conversión Multimoneda:</strong> Muestra el total convertido automáticamente a la moneda de preferencia del cliente según la tasa del día fijada por el negocio.'
        ]
      },
      {
        title: '4. Generador de Pedidos Formateados a WhatsApp',
        items: [
          '<strong>Carrito de Compra Inteligente:</strong> Al presionar "Hacer Pedido", la página procesa la selección del cliente y genera un mensaje de texto formateado, limpio y desglosado con el detalle exacto de la compra, opciones elegidas y monto final directo a tu chat comercial de WhatsApp.'
        ]
      },
      {
        title: '5. Identidad Comercial & Conectividad',
        items: [
          '<strong>Sección "Sobre Nosotros":</strong> Presentación de tu negocio, valores, trayectoria y horarios de atención.',
          '<strong>Ubicación Física:</strong> Mapa interactivo de Google Maps integrado para facilitar la llegada de clientes a tu tienda física o punto de entrega.',
          '<strong>Conectividad Directa:</strong> Botón flotante permanente de WhatsApp + enlaces a hasta 3 perfiles de redes sociales (Instagram, TikTok, Telegram).'
        ]
      }
    ]
  },

  tienda: {
    name: 'Plan Tienda Autogestionable',
    price: '$210',
    frequency: 'Pago Único',
    intro: 'Este plan está diseñado para marcas consolidadas, comercios con alto flujo de ventas o negocios que necesitan autonomía absoluta para actualizar precios, la tasa del día, productos y disponibilidad al instante, además de medir el tráfico real de su página para tomar decisiones inteligentes de negocio.',
    sections: [
      {
        title: '1. Todo lo del Plan Catálogo Pro en Formato Multipágina',
        items: [
          '<strong>Estructura Comercial Completa:</strong> Navegación organizada por pestañas independientes (Inicio, Catálogo, Empresa, Contacto) con menú superior fluido y adaptado a dispositivos móviles.',
          '<strong>Catálogo Interactivo (Hasta 50 Productos):</strong> Exhibición de productos con fotografías de alta calidad, precios, especificaciones y sistema de filtros por categoría.',
          '<strong>Simulador Multimoneda + Pedidos a WhatsApp:</strong> Calculadora en tiempo real con conversión de tasa y envío de pedidos desglosados directo al chat del negocio.'
        ]
      },
      {
        title: '2. Panel Privado de Administración (Autogestión Total)',
        items: [
          '<strong>Acceso Exclusivo Seguro:</strong> Inicio de sesión con usuario y contraseña privada para administrar tu página web cómodamente desde tu teléfono celular o computadora.',
          '<strong>Control de Precios y Tasa del Día:</strong> Modifica los precios individuales de tus productos o cambia la tasa de cambio en un solo lugar y actualiza toda la web al instante.',
          '<strong>Gestión de Detalle de Productos:</strong> Cambia descripciones, edita variantes de colores, tallas o modelos sin depender de un programador.',
          '<strong>Indicador de Disponibilidad (Stock):</strong> Activa o desactiva la disponibilidad de tus artículos con un solo clic (Disponible / Agotado) para evitar que te pidan mercancía fuera de inventario.'
        ]
      },
      {
        title: '3. Integración con Google Analytics 4 (Métricas de Negocio)',
        items: [
          '<strong>Panel de Analítica Web Integrado:</strong> Acceso a estadísticas reales sobre el comportamiento de tus clientes para evaluar el rendimiento de tu tienda:',
          '• Número de visitantes diarios, semanales y mensuales.',
          '• Productos y secciones más consultados por los usuarios.',
          '• Cantidad exacta de clics hacia el botón de WhatsApp (conversiones de venta).'
        ]
      },
      {
        title: '4. Dominio Web Personalizado Incluido',
        items: [
          '<strong>Identidad Exclusiva de Marca:</strong> Registro y vinculación de tu propia dirección web oficial (.com o .com.ve) incluido sin costo adicional durante el primer año, lo que aporta la máxima imagen profesional a tu empresa.'
        ]
      },
      {
        title: '5. Identidad Comercial & Conectividad',
        items: [
          '<strong>Sección "Sobre Nosotros":</strong> Historia de la marca, horarios de atención y propuesta de valor.',
          '<strong>Ubicación Física:</strong> Mapa interactivo de Google Maps integrado para la fácil localización de tu tienda o punto de retiro.',
          '<strong>Conectividad Directa:</strong> Botón flotante permanente de WhatsApp + enlaces a hasta 3 perfiles de redes sociales (Instagram, TikTok, Telegram).'
        ]
      }
    ]
  }
};

// ==========================================
// 3. UTILIDAD PARA ENVIAR MENSAJES A WHATSAPP
// ==========================================
function openWhatsApp(customText) {
  const cleanPhone = CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(customText);
  const url = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Handlers para botones de planes
function selectPlan(planType) {
  let message = '';
  switch (planType) {
    case 'presencia':
      message = `¡Hola ${CONFIG.agencyName}! 👋 Estoy interesado en contratar el *Plan Presencia Digital ($80)* para mi negocio. Me gustaría coordinar los detalles para comenzar.`;
      break;
    case 'catalogo':
      message = `¡Hola ${CONFIG.agencyName}! 👋 Quiero contratar el *Plan Catálogo Pro ($150)* con catálogo interactivo y pedidos a WhatsApp. ¿Podemos iniciar mi proyecto?`;
      break;
    case 'tienda':
      message = `¡Hola ${CONFIG.agencyName}! 👋 Deseo adquirir el *Plan Tienda Autogestionable ($210)* con panel privado de administración y dominio incluido. ¿Cómo procedemos?`;
      break;
    case 'maint-presencia':
      message = `¡Hola ${CONFIG.agencyName}! Me interesa el servicio de *Mantenimiento: Plan Presencia Digital ($12)* para mantener mi sitio al día.`;
      break;
    case 'maint-catalogo':
      message = `¡Hola ${CONFIG.agencyName}! Deseo contratar el *Mantenimiento: Plan Catálogo Pro ($20)* para actualización de productos y promociones.`;
      break;
    case 'maint-tienda':
      message = `¡Hola ${CONFIG.agencyName}! Me interesa el servicio de *Mantenimiento: Tienda Autogestionable ($35)* para soporte integral de mi panel y analítica.`;
      break;
    case 'custom':
    default:
      message = `¡Hola ${CONFIG.agencyName}! Vi su página web y me gustaría recibir asesoría o una cotización para el desarrollo de mi sitio web.`;
      break;
  }
  openWhatsApp(message);
}

// ==========================================
// 4. MODAL DE DESGLOSE COMPLETO
// ==========================================
const modalOverlay = document.getElementById('detailsModal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBody = document.getElementById('modalBody');
const modalCta = document.getElementById('modalCta');

function openPlanModal(planKey) {
  const data = PLAN_DETAILS[planKey];
  if (!data) return;

  modalTitle.textContent = data.name;
  modalSubtitle.textContent = `${data.price} • ${data.frequency}`;

  let html = `<p class="modal-intro" style="color: #e2d9f3; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6;">${data.intro}</p>`;
  
  data.sections.forEach(sec => {
    html += `<h4 style="color: var(--purple-light); font-size: 1.15rem; margin-top: 1.5rem; margin-bottom: 0.6rem;">${sec.title}</h4>`;
    html += `<ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 0.6rem;">`;
    sec.items.forEach(item => {
      html += `<li style="display: flex; gap: 0.6rem; align-items: flex-start; color: #cbd5e1;">
        <span style="color: var(--purple-light); font-size: 1rem;">▹</span>
        <div>${item}</div>
      </li>`;
    });
    html += `</ul>`;
  });

  modalBody.innerHTML = html;
  
  modalCta.onclick = () => {
    selectPlan(planKey);
  };

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePlanModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 5. FILTRADO INTERACTIVO DEL PORTAFOLIO
// ==========================================
function filterPortfolio(category) {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'grid';
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 20);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 200);
    }
  });
}

// ==========================================
// 6. GESTIÓN DE LA TABLA DE MANTENIMIENTO Y PROMOCIONES ANUALES
// ==========================================
let currentMaintPeriod = 'monthly';

function setMaintPeriod(period) {
  currentMaintPeriod = period;
  const btnMonthly = document.getElementById('maintBtnMonthly');
  const btnAnnual = document.getElementById('maintBtnAnnual');

  if (period === 'annual') {
    if (btnAnnual) btnAnnual.classList.add('active');
    if (btnMonthly) btnMonthly.classList.remove('active');
    if (btnAnnual) btnAnnual.setAttribute('aria-pressed', 'true');
    if (btnMonthly) btnMonthly.setAttribute('aria-pressed', 'false');
    document.querySelectorAll('.maint-price-monthly').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.maint-price-annual').forEach(el => el.style.display = 'block');
  } else {
    if (btnMonthly) btnMonthly.classList.add('active');
    if (btnAnnual) btnAnnual.classList.remove('active');
    if (btnMonthly) btnMonthly.setAttribute('aria-pressed', 'true');
    if (btnAnnual) btnAnnual.setAttribute('aria-pressed', 'false');
    document.querySelectorAll('.maint-price-monthly').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.maint-price-annual').forEach(el => el.style.display = 'none');
  }
}

function selectMaintPlan(planType) {
  const plans = {
    presencia: {
      name: 'Mantenimiento Presencia Digital',
      monthly: '$12/mes',
      annual: '$120/año (Promoción 2 Meses Gratis)'
    },
    catalogo: {
      name: 'Mantenimiento Catálogo Pro',
      monthly: '$20/mes',
      annual: '$190/año (Promoción Anual con Ahorro de $50)'
    },
    tienda: {
      name: 'Mantenimiento Tienda Autogestionable',
      monthly: '$35/mes',
      annual: '$330/año (Promoción Anual VIP con Ahorro de $90)'
    }
  };

  const selected = plans[planType] || plans.presencia;
  const periodText = currentMaintPeriod === 'annual'
    ? `Modalidad Anual con Descuento (${selected.annual})`
    : `Modalidad Mensual (${selected.monthly})`;

  const message = `¡Hola ${CONFIG.agencyName}! 👋 Deseo contratar el servicio de *${selected.name}* bajo la *${periodText}*. ¿Cuáles son los pasos a seguir?`;
  openWhatsApp(message);
}

function togglePackageView(viewType) {
  const maintWrap = document.getElementById('maintPackagesTableWrap');

  if (viewType === 'maint') {
    // Muestra el contenedor oculto con la tabla
    if (maintWrap) maintWrap.style.display = 'block';

    const el = document.getElementById('mantenimiento') || maintWrap;
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Si cambian a otra vista, vuelve a ocultar la tabla
    if (maintWrap) maintWrap.style.display = 'none';

    const el = document.getElementById('planes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================
// 7. INICIALIZACIONES AL CARGAR EL DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Cerrar al hacer clic en enlaces
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // Escuchar tecla escape para cerrar modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closePlanModal();
    }
  });

  // Cerrar modal al dar click fuera
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closePlanModal();
    }
  });

});

