/* Portada (index.html): textos marcados con data-i18n, obras de «Nuestros proyectos» y botón «Más detalles».
   El menú, el pie y el idioma elegido los maneja js/sitio.js. */

/* ===== Textos de la interfaz ===== */
const I18N = {
  es: {
    skip: "Ir al contenido",
    orgName: "Sociedad Italiana de Socorros Mutuos",
    heroDesc: "Más que una institución, somos un espacio de encuentro donde las generaciones comparten sus historias, las tradiciones cobran vida y la cultura se convierte en un vínculo que nos une.",
    exploreLabel: "Más detalles",
    tSug: "Sugerencias", tHist: "Historia", tCons: "Consulado y voto electoral", tNoti: "Noticias",
    tSobre: "Sobre nosotros", tColab: "Colaborá", tConv: "Convertite en socio", tCult: "Cultura italiana",
    worksEyebrow: "Nuestros proyectos",
    worksTitle: "¿En qué estamos trabajando?",
    worksSub: "Para lograr la habilitación de la galería y el microcine, la nueva gestión lleva adelante obras de infraestructura fundamental:",
    workNum: "N.º",
    socialEyebrow: "Comunidad", socialTitle: "Nuestras redes", socialSub: "Seguí las novedades de la Sociedad y del Teatro Marconi en nuestras redes.",
    fbText: "La página del teatro: novedades, actividades y eventos.", fbFollow: "Seguinos en Facebook",
    igText: "Fotos y novedades de la Sociedad Italiana de Gálvez.", igFollow: "Seguinos en Instagram", newTab: "(se abre en una pestaña nueva)",
    mapEyebrow: "Encontranos", mapTitle: "Dónde estamos", mapRoute: "Cómo llegar",
    supportEyebrow: "Sumate a la red", supportTitle: "Apoyanos",
    supportDonateTitle: "Aportá", supportDonateText: "No importa el monto: tu donación hace una diferencia real para nosotros.", supportDonateBtn: "Donar",
    supportJoinTitle: "Asociate", supportJoinText: "Tu membresía nos permite sostener nuestros proyectos y crecer mes a mes.", supportJoinBtn: "Hacerme socio",
    supportShareTitle: "Colaborá", supportShareText: "Sumá tu empresa como sponsor o colaborá con insumos para potenciar nuestro trabajo.", supportShareBtn: "Contactanos"
  },
  en: {
    skip: "Skip to content",
    orgName: "Italian Mutual Aid Society",
    heroDesc: "More than an institution, we are a meeting place where generations share their stories, traditions come alive, and culture becomes a bond that unites us.",
    exploreLabel: "Learn more",
    tSug: "Suggestions", tHist: "History", tCons: "Consulate and electoral vote", tNoti: "News",
    tSobre: "About us", tColab: "Get involved", tConv: "Become a member", tCult: "Italian culture",
    worksEyebrow: "Our projects",
    worksTitle: "What are we working on?",
    worksSub: "To open the gallery and the microcinema, the new leadership is carrying out essential infrastructure works:",
    workNum: "No.",
    socialEyebrow: "Community", socialTitle: "Our social media", socialSub: "Follow the latest from the Society and the Teatro Marconi on our social media.",
    fbText: "The theatre's page: news, activities and events.", fbFollow: "Follow us on Facebook",
    igText: "Photos and news from the Italian Society of Gálvez.", igFollow: "Follow us on Instagram", newTab: "(opens in a new tab)",
    mapEyebrow: "Find us", mapTitle: "Where we are", mapRoute: "Get directions",
    supportEyebrow: "Join the network", supportTitle: "Support us",
    supportDonateTitle: "Donate", supportDonateText: "No matter the amount, your donation makes a real difference for us.", supportDonateBtn: "Donate",
    supportJoinTitle: "Become a member", supportJoinText: "Your membership helps us sustain our projects and grow month after month.", supportJoinBtn: "Become a member",
    supportShareTitle: "Collaborate", supportShareText: "Join as a sponsor company or contribute supplies to boost our work.", supportShareBtn: "Contact us"
  },
  it: {
    skip: "Vai al contenuto",
    orgName: "Società Italiana di Mutuo Soccorso",
    heroDesc: "Più di un'istituzione, siamo uno spazio d'incontro dove le generazioni condividono le loro storie, le tradizioni prendono vita e la cultura diventa un legame che ci unisce.",
    exploreLabel: "Scopri di più",
    tSug: "Suggerimenti", tHist: "Storia", tCons: "Consolato e voto elettorale", tNoti: "Notizie",
    tSobre: "Chi siamo", tColab: "Collabora", tConv: "Diventa socio", tCult: "Cultura italiana",
    worksEyebrow: "I nostri progetti",
    worksTitle: "A cosa stiamo lavorando?",
    worksSub: "Per l'apertura della galleria e del microcinema, la nuova gestione sta portando avanti lavori di infrastruttura fondamentali:",
    workNum: "N.",
    socialEyebrow: "Comunità", socialTitle: "I nostri social", socialSub: "Segui le novità della Società e del Teatro Marconi sui nostri social.",
    fbText: "La pagina del teatro: novità, attività ed eventi.", fbFollow: "Seguici su Facebook",
    igText: "Foto e novità della Società Italiana di Gálvez.", igFollow: "Seguici su Instagram", newTab: "(si apre in una nuova scheda)",
    mapEyebrow: "Dove siamo", mapTitle: "Dove ci troviamo", mapRoute: "Come arrivare",
    supportEyebrow: "Entra nella rete", supportTitle: "Sostienici",
    supportDonateTitle: "Dona", supportDonateText: "Qualsiasi sia la cifra, la tua donazione fa davvero la differenza per noi.", supportDonateBtn: "Dona",
    supportJoinTitle: "Diventa socio", supportJoinText: "La tua iscrizione ci permette di sostenere i nostri progetti e di crescere mese dopo mese.", supportJoinBtn: "Diventa socio",
    supportShareTitle: "Collabora", supportShareText: "Partecipa come azienda sponsor o collabora con materiali per potenziare il nostro lavoro.", supportShareBtn: "Contattaci"
  }
};

/* ===== En qué estamos trabajando (entradas de cine) ===== */
const WORK_ICONS = {
  techos: '<path d="M3 11 12 4l9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h3v-5h6v5h3a1 1 0 0 0 1-1v-9"/>',
  banos: '<rect x="7" y="3" width="10" height="18" rx="1.5"/><circle cx="13.3" cy="12" r=".9" fill="currentColor" stroke="none"/>',
  cloacas: '<path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"/>',
  electrica: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
  pisos: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
  aporte: '<path d="M12 21s-7.5-4.35-10-8.8C.3 8.4 2.8 5 6.3 5c2 0 3.7 1.1 5.7 3.2C14 6.1 15.7 5 17.7 5c3.5 0 6 3.4 4.3 7.2C19.5 16.65 12 21 12 21Z"/>'
};

const WORKS = [
  { icon:"techos", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Renovación de Techos", en:"Roof Renovation", it:"Rinnovo dei Tetti" },
    text:{ es:"Reparación e impermeabilización para frenar filtraciones y proteger el edificio.",
           en:"Repair and waterproofing to stop leaks and protect the building.",
           it:"Riparazione e impermeabilizzazione per fermare le infiltrazioni e proteggere l'edificio." } },
  { icon:"banos", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Baños Nuevos", en:"New Restrooms", it:"Nuovi Bagni" },
    text:{ es:"Construcción e instalación completa de sanitarios modernos e higiénicos.",
           en:"Full construction and installation of modern, hygienic restrooms.",
           it:"Costruzione e installazione completa di servizi igienici moderni." } },
  { icon:"cloacas", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Red de Cloacas", en:"Sewage Network", it:"Rete Fognaria" },
    text:{ es:"Reinstalación completa del sistema de desagües sanitarios y cloacales.",
           en:"Complete reinstallation of the sanitary and sewage drainage system.",
           it:"Reinstallazione completa del sistema di scarico sanitario e fognario." } },
  { icon:"electrica", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Instalación Eléctrica", en:"Electrical Wiring", it:"Impianto Elettrico" },
    text:{ es:"Nuevo cableado, tableros e iluminación segura adaptada a eventos.",
           en:"New wiring, panels and safe lighting adapted for events.",
           it:"Nuovo cablaggio, quadri e illuminazione sicura adatta agli eventi." } },
  { icon:"pisos", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Restauración de Pisos", en:"Floor Restoration", it:"Restauro dei Pavimenti" },
    text:{ es:"Nivelación y colocación de nuevos revestimientos para circulación continua.",
           en:"Leveling and new flooring for smooth, continuous circulation.",
           it:"Livellamento e nuova pavimentazione per una circolazione continua." } },
  { icon:"aporte", label:{ es:"Bonus", en:"Bonus", it:"Bonus" },
    title:{ es:"Tu Aporte Suma", en:"Your Contribution Counts", it:"Il Tuo Contributo Conta" },
    text:{ es:"Cada cuota social o donación se destina directamente a la compra de materiales.",
           en:"Every membership fee or donation goes directly to buying materials.",
           it:"Ogni quota sociale o donazione viene destinata direttamente all'acquisto di materiali." } }
];

/* ===== Estado y utilidades ===== */
let lang = "es";

const $ = sel => document.querySelector(sel);
const t = key => (I18N[lang] && I18N[lang][key]) ?? I18N.es[key];
const L = obj => obj[lang] ?? obj.es;

/* ===== Render ===== */
function applyStatic(){
  document.documentElement.lang = lang;
  document.title = t("orgName");
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
}

function renderWorks(){
  const worksGrid = $("#works-grid");
  if (!worksGrid) return;
  // Cada obra es una entrada de teatro: talón con ícono y número, línea de corte y cuerpo.
  worksGrid.innerHTML = WORKS.map((w, i) => `
    <article class="ticket ticket--${w.icon}">
      <div class="t-papel">
        <div class="t-stub" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${WORK_ICONS[w.icon]}</svg>
          <span class="t-num">${t("workNum")} ${String(i + 1).padStart(2, "0")}</span>
        </div>
        <div class="t-body">
          <p class="t-label">${L(w.label)}</p>
          <h3>${L(w.title)}</h3>
          <p>${L(w.text)}</p>
        </div>
      </div>
    </article>`).join("");
}

function render(){
  applyStatic();
  renderWorks();
}

/* ===== Eventos ===== */

// El selector de idioma está en el menú común (js/sitio.js), que avisa cada cambio.
document.addEventListener("sitio:idioma", e => {
  lang = e.detail.idioma;
  render();
});

const exploreBtn = $("#explore");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    window.scrollTo({ top: document.getElementById("accesos").offsetTop - 20, behavior: "smooth" });
  });
}

/* ===== Inicio: recordar el último idioma elegido ===== */
try {
  const saved = localStorage.getItem("lang");
  if(saved && I18N[saved]) lang = saved;
} catch(_) {}

render();