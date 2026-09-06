/* ============================================================
   HALO SALON — script.js
   ------------------------------------------------------------
   TODO LO QUE HAY QUE EDITAR PARA PERSONALIZAR EL SITIO
   ESTÁ ACÁ ARRIBA, EN EL OBJETO "CONFIG".
   No hace falta tocar el HTML ni el CSS para:
     - cambiar el nombre del salón
     - cambiar el número de WhatsApp
     - agregar/quitar/editar servicios
     - agregar/quitar/editar productos
     - agregar/quitar fotos de trabajos
   ============================================================ */

const CONFIG = {
  // Nombre del salón (aparece en el header, footer y mensajes de WhatsApp)
  salonName: "Halo Salon",

  // ⚠️ IMPORTANTE: reemplazar por el número real de WhatsApp de la peluquera.
  // Formato: código de país + código de área + número, SIN espacios, SIN "+", SIN 0 ni 15.
  // Ejemplo Argentina (Córdoba, cel): 549351XXXXXXX
  whatsappNumber: "5491158946455",

  // Datos de contacto (footer)
  address: "Coronel Charlone 1155, San Miguel, Buenos Aires, Argentina",
  phoneDisplay: "+54 9 11 5894-6455",
  email: "hola@halosalon.com",

  // Redes sociales (dejar "" en href para ocultar el ícono)
  social: [
    { name: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { name: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { name: "TikTok", href: "https://tiktok.com/", icon: "tiktok" },
  ],

  // Horarios de atención (texto que se muestra en el footer)
  hours: [
    { day: "Lunes a Viernes", time: "9:00 - 19:00" },
    { day: "Sábados", time: "9:00 - 14:00" },
    { day: "Domingos", time: "Cerrado" },
  ],

  // Días cerrados, para avisar (sin bloquear) si reservan un día que el salón no atiende.
  // 0 = domingo, 1 = lunes, 2 = martes, 3 = miércoles, 4 = jueves, 5 = viernes, 6 = sábado
  closedWeekdays: [0],

  // Categorías para filtrar la galería de trabajos
  galleryCategories: ["Todos", "Corte", "Color", "Peinado", "Alisado", "Manicura"],

  // Trabajos realizados (portfolio). "category" debe coincidir con galleryCategories.
  gallery: [
    { image: "images/trabajo-1.svg", title: "Corte moderno", category: "Corte" },
    { image: "images/trabajo-2.svg", title: "Color fantasía", category: "Color" },
    { image: "images/trabajo-3.svg", title: "Balayage natural", category: "Color" },
    { image: "images/trabajo-4.svg", title: "Peinado de fiesta", category: "Peinado" },
    { image: "images/trabajo-5.svg", title: "Alisado brasilero", category: "Alisado" },
    { image: "images/trabajo-6.svg", title: "Coloración global", category: "Color" },
    { image: "images/trabajo-7.svg", title: "Trenzas y recogido", category: "Peinado" },
    { image: "images/trabajo-8.svg", title: "Brushing", category: "Peinado" },
    { image: "images/trabajo-9.svg", title: "Manicura tradicional", category: "Manicura" },
    { image: "images/trabajo-10.svg", title: "Semipermanente", category: "Manicura" },
    { image: "images/trabajo-11.svg", title: "Uñas esculpidas", category: "Manicura" },
  ],

  // Servicios ofrecidos. El precio es solo texto (podés poner "Desde $X" o un rango).
  // "category" agrupa los servicios en el sitio (ej: "Peluquería", "Manicura").
  services: [
    { category: "Peluquería", name: "Corte", description: "Corte personalizado según tu estilo y tipo de cabello.", price: "$8.000", duration: "40 min" },
    { category: "Peluquería", name: "Color raíz", description: "Retoque de color en raíz con productos premium.", price: "$12.000", duration: "1 h" },
    { category: "Peluquería", name: "Color completo", description: "Coloración global de punta a punta.", price: "$18.000", duration: "1 h 30 min" },
    { category: "Peluquería", name: "Balayage / Mechas", description: "Técnica de iluminación con efecto natural.", price: "Desde $25.000", duration: "2 h" },
    { category: "Peluquería", name: "Brushing", description: "Secado y peinado profesional para el día a día.", price: "$6.000", duration: "30 min" },
    { category: "Peluquería", name: "Peinado para eventos", description: "Peinados de fiesta, civil o graduación.", price: "Desde $15.000", duration: "1 h" },
    { category: "Peluquería", name: "Alisado / Keratina", description: "Tratamiento alisador con keratina.", price: "Desde $30.000", duration: "2 h 30 min" },
    { category: "Peluquería", name: "Tratamiento capilar", description: "Hidratación y reparación profunda.", price: "$10.000", duration: "45 min" },
    // ⚠️ Precios de manicura a confirmar — reemplazar cuando estén los valores reales.
    { category: "Manicura", name: "Manicura tradicional", description: "Limado, cutículas e esmaltado clásico.", price: "A confirmar", duration: "40 min" },
    { category: "Manicura", name: "Semipermanente", description: "Esmaltado de larga duración, alto brillo.", price: "A confirmar", duration: "50 min" },
    { category: "Manicura", name: "Uñas esculpidas", description: "Extensión de uñas con gel o acrílico.", price: "A confirmar", duration: "1 h 30 min" },
    { category: "Manicura", name: "Pedicura", description: "Tratamiento completo de pies con esmaltado.", price: "A confirmar", duration: "45 min" },
  ],

  // Productos a la venta. La "compra" se hace por consulta directa a WhatsApp.
  products: [
    { name: "Shampoo reparador", description: "Para cabello dañado o con color.", price: "$6.500", image: "images/producto-1.svg" },
    { name: "Acondicionador nutritivo", description: "Hidratación profunda diaria.", price: "$6.500", image: "images/producto-2.svg" },
    { name: "Sérum anti-frizz", description: "Control de frizz y brillo.", price: "$9.000", image: "images/producto-3.svg" },
    { name: "Mascarilla capilar", description: "Tratamiento intensivo semanal.", price: "$8.500", image: "images/producto-4.svg" },
    { name: "Aceite capilar", description: "Puntas resecas y brillo extra.", price: "$7.200", image: "images/producto-5.svg" },
    { name: "Spray fijador", description: "Fijación media para peinados.", price: "$5.800", image: "images/producto-6.svg" },
  ],
};

/* ============================================================
   A partir de acá es la lógica del sitio. No hace falta
   tocar nada de lo de abajo para personalizar el contenido.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  applyBranding();
  renderGalleryFilters();
  renderGallery();
  renderServices();
  renderProducts();
  renderFooterExtras();
  setupHeaderScroll();
  setupMobileNav();
  setupLightbox();
  setupBookingForm();
  setupBookingDateMin();
  setupWhatsappFloat();
  setupBackToTop();
  setupScrollReveal();
  injectStructuredData();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function waLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* Abre WhatsApp en una pestaña nueva y devuelve la URL usada, para poder
   ofrecer un link manual si el navegador bloqueó la ventana emergente. */
function openWhatsApp(message) {
  const url = waLink(message);
  const win = window.open(url, "_blank", "noopener");
  return { url, blocked: !win };
}

/* Snackbar: confirma el envío o, si el popup fue bloqueado, deja un link para tocar. */
function showSnackbar(html, autoHideMs = 7000) {
  const el = document.getElementById("snackbar");
  if (!el) return;
  el.innerHTML = html;
  el.classList.add("is-visible");
  clearTimeout(showSnackbar._timer);
  showSnackbar._timer = setTimeout(() => el.classList.remove("is-visible"), autoHideMs);
}

function applyBranding() {
  document.title = `${CONFIG.salonName} | Peluquería`;
  document.getElementById("brand-name").textContent = CONFIG.salonName;
  document.getElementById("brand-name-footer").textContent = CONFIG.salonName;
  document.getElementById("hero-title").textContent = CONFIG.salonName;
  document.getElementById("turnos-phone-display").textContent = CONFIG.phoneDisplay;
  document.getElementById("footer-address").textContent = CONFIG.address;
  document.getElementById("footer-phone").textContent = CONFIG.phoneDisplay;
  document.getElementById("footer-email").textContent = CONFIG.email;
}

/* ---------- Galería / Trabajos ---------- */
function renderGalleryFilters() {
  const wrap = document.getElementById("galleryFilters");
  wrap.innerHTML = CONFIG.galleryCategories
    .map((cat, i) => `<button class="filter-btn${i === 0 ? " is-active" : ""}" data-filter="${cat}">${cat}</button>`)
    .join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    wrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    filterGallery(btn.dataset.filter);
  });
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = CONFIG.gallery
    .map(
      (item) => `
      <div class="gallery__item" tabindex="0" role="button" aria-label="Ver foto ampliada: ${item.title}" data-category="${item.category}" data-image="${item.image}" data-title="${item.title}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery__overlay"><span>${item.title}</span></div>
      </div>`
    )
    .join("");
}

function filterGallery(category) {
  document.querySelectorAll(".gallery__item").forEach((el) => {
    const show = category === "Todos" || el.dataset.category === category;
    el.classList.toggle("is-hidden", !show);
  });
}

/* ---------- Servicios ---------- */
function renderServices() {
  const wrap = document.getElementById("servicesList");
  const categories = [...new Set(CONFIG.services.map((s) => s.category))];

  wrap.innerHTML = categories
    .map((cat) => {
      const cards = CONFIG.services
        .map((s, i) => ({ ...s, index: i }))
        .filter((s) => s.category === cat)
        .map(
          (s) => `
          <div class="service-card">
            <div class="service-card__info">
              <h3>${s.name}</h3>
              <p>${s.description}</p>
              <span class="service-card__meta">${s.duration}</span>
            </div>
            <div class="service-card__action">
              <span class="service-card__price">${s.price}</span>
              <a href="#turnos" class="service-card__book" data-service-index="${s.index}">Reservar →</a>
            </div>
          </div>`
        )
        .join("");
      return `<h3 class="services__group-title">${cat}</h3><div class="services__group">${cards}</div>`;
    })
    .join("");

  // Al elegir "Reservar" en un servicio, precargar el select del formulario
  wrap.addEventListener("click", (e) => {
    const link = e.target.closest("[data-service-index]");
    if (!link) return;
    const select = document.getElementById("fService");
    select.value = CONFIG.services[link.dataset.serviceIndex].name;
  });

  // Popular el <select> del formulario de turnos
  const select = document.getElementById("fService");
  select.innerHTML =
    `<option value="" disabled selected>Elegí un servicio</option>` +
    CONFIG.services.map((s) => `<option value="${s.name}">${s.name} — ${s.price}</option>`).join("");
}

/* ---------- Productos ---------- */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = CONFIG.products
    .map(
      (p, i) => `
      <div class="product-card">
        <div class="product-card__img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="product-card__body">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="product-card__footer">
            <span class="product-card__price">${p.price}</span>
            <button class="product-card__buy" data-product-index="${i}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C11.6 9.2 11 7.8 10.8 7.2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.9 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.2-8.4 8.2z"/></svg>
              Comprar
            </button>
          </div>
        </div>
      </div>`
    )
    .join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-product-index]");
    if (!btn) return;
    const product = CONFIG.products[btn.dataset.productIndex];
    const message = `Hola ${CONFIG.salonName}! Quiero comprar/consultar por este producto:\n\n🛍️ ${product.name} — ${product.price}\n\n¿Está disponible?`;
    const { url } = openWhatsApp(message);
    showSnackbar(`Abriendo WhatsApp para consultar por <strong>${product.name}</strong>… Si no se abrió, <a href="${url}" target="_blank" rel="noopener">tocá acá</a>.`);
  });
}

/* ---------- Footer: horarios y redes ---------- */
function renderFooterExtras() {
  const hoursList = document.getElementById("footerHours");
  hoursList.innerHTML = CONFIG.hours.map((h) => `<li><span>${h.day}</span><span>${h.time}</span></li>`).join("");

  const icons = {
    instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 5 5 .06 1.3.07 1.6.07 4.8s0 3.6-.07 4.8c-.15 3.3-1.7 4.85-5 5-1.3.07-1.6.08-4.9.08s-3.6 0-4.9-.08c-3.3-.15-4.85-1.7-5-5-.07-1.3-.08-1.6-.08-4.8s0-3.6.08-4.8c.15-3.3 1.7-4.85 5-5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.75.07-2.6.12-3.5 1.02-3.62 3.62-.06 1.25-.07 1.6-.07 4.7s0 3.45.07 4.7c.12 2.6 1.02 3.5 3.62 3.62 1.25.06 1.6.07 4.75.07s3.5 0 4.75-.07c2.6-.12 3.5-1.02 3.62-3.62.06-1.25.07-1.6.07-4.7s0-3.45-.07-4.7c-.12-2.6-1.02-3.5-3.62-3.62C15.5 4 15.14 4 12 4zm0 3.3a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm5-2a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/></svg>`,
    facebook: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.06c0-.89.25-1.5 1.53-1.5h1.63V3.8C15.94 3.75 15 3.66 13.9 3.66c-2.3 0-3.87 1.4-3.87 3.98v2.38H7.37v3.08H10v7.9h3.5z"/></svg>`,
    tiktok: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.7c-1.4.1-2.6-.3-4-1.1v6.2c0 3.1-2.3 5.4-5.4 5.4S5.7 17.7 5.7 14.6c0-3 2.3-5.3 5.4-5.3.3 0 .6 0 .9.08v2.8c-.3-.1-.6-.15-.9-.15-1.5 0-2.6 1.15-2.6 2.6s1.1 2.6 2.6 2.6 2.7-1.1 2.7-2.6V3h2.8z"/></svg>`,
  };

  const socialWrap = document.getElementById("footerSocial");
  socialWrap.innerHTML = CONFIG.social
    .filter((s) => s.href)
    .map((s) => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.name}">${icons[s.icon] || ""}</a>`)
    .join("");
}

/* ---------- Header con scroll ---------- */
function setupHeaderScroll() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll);
  onScroll();
}

/* ---------- Menú mobile ---------- */
function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
    })
  );
}

/* ---------- Lightbox para la galería ---------- */
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  const grid = document.getElementById("galleryGrid");
  let lastFocused = null;

  const open = (item) => {
    lastFocused = document.activeElement;
    img.src = item.dataset.image;
    img.alt = item.dataset.title;
    caption.textContent = item.dataset.title;
    lightbox.classList.add("is-open");
    closeBtn.focus();
  };

  grid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (!item) return;
    open(item);
  });

  // Permite abrir cada foto con teclado (Enter / Espacio), no solo con el mouse
  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const item = e.target.closest(".gallery__item");
    if (!item) return;
    e.preventDefault();
    open(item);
  });

  const close = () => {
    lightbox.classList.remove("is-open");
    if (lastFocused) lastFocused.focus();
  };
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) close();
  });
}

/* ---------- Formulario de reserva de turnos → WhatsApp ---------- */
function setupBookingForm() {
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    const fecha = formatDate(data.date);
    const avisoCerrado = isClosedDate(data.date)
      ? "\n\n⚠️ Elegiste un día en el que el salón suele estar cerrado — igual te escribimos para confirmar disponibilidad."
      : "";

    const message =
      `Hola ${CONFIG.salonName}! 👋 Quiero reservar un turno.\n\n` +
      `🙋 Nombre: ${data.name}\n` +
      `💇 Servicio: ${data.service}\n` +
      `📅 Fecha: ${fecha}\n` +
      `🕒 Hora: ${data.time}\n` +
      `📞 Teléfono: ${data.phone}` +
      (data.comment ? `\n📝 Comentario: ${data.comment}` : "") +
      avisoCerrado;

    const { url } = openWhatsApp(message);
    showSnackbar(`¡Listo! Te estamos llevando a WhatsApp para confirmar tu turno. Si no se abrió, <a href="${url}" target="_blank" rel="noopener">tocá acá</a>.`);
  });
}

function formatDate(isoDate) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}

// Compara la fecha elegida (string "YYYY-MM-DD") contra CONFIG.closedWeekdays
function isClosedDate(isoDate) {
  if (!isoDate) return false;
  const [y, m, d] = isoDate.split("-").map(Number);
  const day = new Date(y, m - 1, d).getDay();
  return CONFIG.closedWeekdays.includes(day);
}

// Evita que se puedan elegir fechas pasadas en el formulario de turnos
function setupBookingDateMin() {
  const dateInput = document.getElementById("fDate");
  if (!dateInput) return;
  const today = new Date();
  const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  dateInput.min = iso;
}

/* ---------- Botón flotante de WhatsApp + barra fija mobile ---------- */
function setupWhatsappFloat() {
  const message = `Hola ${CONFIG.salonName}! Quiero hacerte una consulta.`;
  const url = waLink(message);
  const floatBtn = document.getElementById("whatsappFloat");
  if (floatBtn) floatBtn.href = url;
  const mobileBtn = document.getElementById("mobileCtaWhatsapp");
  if (mobileBtn) mobileBtn.href = url;
}

/* ---------- Botón "volver arriba" ---------- */
function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 500);
  window.addEventListener("scroll", onScroll);
  onScroll();
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Animación sutil de aparición al hacer scroll ---------- */
function setupScrollReveal() {
  const els = document.querySelectorAll(
    ".about__image, .about__text, .section__title, .section__subtitle, .gallery__item, .service-card, .product-card, .turnos__info, .turnos__form"
  );
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("reveal", "is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    observer.observe(el);
  });
}

/* ---------- Datos estructurados (SEO: aparecer mejor en Google) ---------- */
function injectStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: CONFIG.salonName,
    telephone: CONFIG.phoneDisplay,
    email: CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONFIG.address,
    },
    sameAs: CONFIG.social.filter((s) => s.href).map((s) => s.href),
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
