/* ───────────────────────────────────────────────────────────
   Visor de imágenes compartido (galería de Cultura y «Así está hoy» de la portada).

   Cada galería lleva data-visor; cada imagen ampliable es un <a href="foto-grande.jpg">
   con su <img> adentro, dentro de un <figure>. El epígrafe del visor sale del
   <figcaption> de esa figura o, si no tiene, del alt de la imagen.
   El <dialog> lo arma este script; sus etiquetas siguen el idioma elegido (js/sitio.js).
   Se carga al final del <body>.
   ─────────────────────────────────────────────────────────── */
(() => {
  "use strict";
  const grupos = [...document.querySelectorAll("[data-visor]")];
  if (!grupos.length || typeof HTMLDialogElement === "undefined") return;

  const TEXTOS = {
    es: { visor: "Visor de imágenes", cerrar: "Cerrar", anterior: "Imagen anterior", siguiente: "Imagen siguiente" },
    it: { visor: "Visualizzatore di immagini", cerrar: "Chiudi", anterior: "Immagine precedente", siguiente: "Immagine successiva" },
    en: { visor: "Image viewer", cerrar: "Close", anterior: "Previous image", siguiente: "Next image" }
  };

  const dlg = document.createElement("dialog");
  dlg.className = "lightbox";
  dlg.innerHTML =
    '<button type="button" class="lightbox-cerrar">×</button>' +
    '<button type="button" class="lightbox-prev">‹</button>' +
    '<button type="button" class="lightbox-next">›</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>';
  document.body.append(dlg);
  const img = dlg.querySelector("img");
  const cap = dlg.querySelector("figcaption");
  const [cerrar, anterior, siguiente] = ["cerrar", "prev", "next"].map(c => dlg.querySelector(".lightbox-" + c));

  function etiquetar(){
    const tx = TEXTOS[window.Sitio && Sitio.idioma] || TEXTOS.es;
    dlg.setAttribute("aria-label", tx.visor);
    cerrar.setAttribute("aria-label", tx.cerrar);
    anterior.setAttribute("aria-label", tx.anterior);
    siguiente.setAttribute("aria-label", tx.siguiente);
  }
  etiquetar();
  document.addEventListener("sitio:idioma", etiquetar);

  let items = [], idx = 0;
  function mostrar(i){
    idx = (i + items.length) % items.length;
    const a = items[idx];
    const texto = (a.closest("figure")?.querySelector("figcaption")?.textContent || a.querySelector("img")?.alt || "").trim();
    img.src = a.href;
    img.alt = texto;
    cap.textContent = texto;
    cap.hidden = !texto;
  }

  grupos.forEach(grupo => {
    const enlaces = [...grupo.querySelectorAll("a[href]")].filter(a => a.querySelector("img"));
    enlaces.forEach((a, i) => a.addEventListener("click", e => {
      e.preventDefault();
      items = enlaces;
      anterior.hidden = siguiente.hidden = items.length < 2;
      mostrar(i);
      dlg.showModal();
    }));
  });

  cerrar.addEventListener("click", () => dlg.close());
  anterior.addEventListener("click", () => mostrar(idx - 1));
  siguiente.addEventListener("click", () => mostrar(idx + 1));
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });     // clic en el fondo
  dlg.addEventListener("keydown", e => {
    if (items.length < 2) return;
    if (e.key === "ArrowLeft") mostrar(idx - 1);
    if (e.key === "ArrowRight") mostrar(idx + 1);
  });
})();
