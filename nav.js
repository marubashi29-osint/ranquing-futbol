/* ============================================================
   NAV.JS · barra de navegacio compartida pels tres ranquings
   ============================================================
   S'INSTAL.LA SOLA: cada pagina nomes ha d'incloure


   i la barra apareix sota el selector d'idioma, amb el ranquing
   actual marcat. No cal tocar res mes de la pagina.

   Tambe es re-dibuixa sola quan l'usuari canvia d'idioma, perque
   escolta els clics als botons .lang que ja tenen totes les
   pagines. Aixi els textos de la barra segueixen l'idioma sense
   que cada pagina hagi de cridar res.
   ============================================================ */

const NAV = {
  ca: {clubs:"Clubs", m:"Seleccions masculines", f:"Seleccions femenines"},
  es: {clubs:"Clubes", m:"Selecciones masculinas", f:"Selecciones femeninas"},
  en: {clubs:"Clubs", m:"Men's national teams", f:"Women's national teams"},
  fr: {clubs:"Clubs", m:"Sélections masculines", f:"Sélections féminines"},
  de: {clubs:"Klubs", m:"Männer-Nationalteams", f:"Frauen-Nationalteams"},
  it: {clubs:"Club", m:"Nazionali maschili", f:"Nazionali femminili"},
  pt: {clubs:"Clubes", m:"Seleções masculinas", f:"Seleções femininas"},
};

(function(){
  /* ---- BANDERES ----------------------------------------------------
     Windows no porta glifs de bandera i Chrome/Edge no en posen de
     propis: on hauria d'anar 🇪🇸 hi surten les dues lletres de que esta
     feta (ES). Aquesta font nomes aporta els glifs de bandera, i el
     unicode-range fa que el navegador NOMES la faci servir per a
     aquests caracters: tota la resta del text segueix amb la font de
     cada pagina.

     El rang inclou tambe les banderes de subdivisio (U+1F3F4 + tags),
     aixi que Anglaterra, Escocia i Gal.les tambe deixen de sortir com
     una bandera negra.

     Prova primer el fitxer local i, si no hi es, el CDN. Abans de
     publicar de veritat convé baixar-lo i servir-lo des del repositori,
     per no dependre d'un tercer.
  -------------------------------------------------------------------- */
  const FONT = `
  @font-face{
    font-family:"Twemoji Country Flags";
    unicode-range:U+1F1E6-1F1FF, U+1F3F4, U+E0062-E007F;
    font-display:swap;
    src:url("TwemojiCountryFlags.woff2") format("woff2"),
        url("https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2") format("woff2");
  }
  body{font-family:"Twemoji Country Flags","Georgia","Times New Roman",serif}
  .flag,.flagbig,.crest{font-family:"Twemoji Country Flags","Georgia","Times New Roman",serif}
  `;

  const CSS = `
  .navbar{background:#0a1622;border-top:1px solid #1b2b3d;
    border-bottom:2px solid var(--gold,#c8a24a)}
  .navbar .wrap{max-width:1080px;margin:0 auto;padding:0 20px;
    display:flex;gap:0;flex-wrap:wrap}
  .navbar a{font-family:"Helvetica Neue",Arial,sans-serif;font-size:12.5px;
    font-weight:700;text-transform:uppercase;letter-spacing:.09em;
    color:#8fa598;text-decoration:none;padding:13px 18px;cursor:pointer;
    border-bottom:3px solid transparent;transition:.15s;white-space:nowrap}
  .navbar a:hover{color:#fff;background:rgba(255,255,255,.04)}
  .navbar a.actual{color:#fff;border-bottom-color:var(--gold,#c8a24a)}
  @media(max-width:640px){.navbar a{padding:11px 12px;font-size:11px}}
  `;

  function quin(){
    const p = location.pathname.toLowerCase();
    if(p.includes("seleccions")){
      const g = new URLSearchParams(location.search).get("g");
      return (g && g.toUpperCase()==="F") ? "f" : "m";
    }
    return "clubs";   // index, pais, club, ranquing_paisos: tot es de clubs
  }

  function idioma(){
    const u = new URLSearchParams(location.search).get("lang");
    if(u && NAV[u]) return u;
    const d = document.documentElement.lang;
    return NAV[d] ? d : "ca";
  }

  function pinta(lang){
    const t = NAV[lang] || NAV.ca;
    const on = quin();
    const barra = document.getElementById("navbar-futbol");
    if(!barra) return;
    barra.innerHTML = `<div class="wrap">
      <a href="index.html?lang=${lang}" class="${on==='clubs'?'actual':''}">${t.clubs}</a>
      <a href="seleccions.html?g=M&lang=${lang}" class="${on==='m'?'actual':''}">${t.m}</a>
      <a href="seleccions.html?g=F&lang=${lang}" class="${on==='f'?'actual':''}">${t.f}</a>
    </div>`;
  }

  function instal_la(){
    if(document.getElementById("navbar-futbol")) return;
    const est = document.createElement("style");
    est.textContent = FONT + CSS;
    document.head.appendChild(est);

    const barra = document.createElement("nav");
    barra.className = "navbar";
    barra.id = "navbar-futbol";

    // just sota el selector d'idioma si n'hi ha; si no, a dalt de tot
    const langbar = document.querySelector(".langbar");
    if(langbar && langbar.parentNode){
      langbar.parentNode.insertBefore(barra, langbar.nextSibling);
    }else{
      document.body.insertBefore(barra, document.body.firstChild);
    }
    pinta(idioma());

    // seguir l'idioma quan l'usuari el canvia (totes les pagines fan
    // servir botons .lang amb data-lang)
    document.addEventListener("click", function(e){
      const b = e.target.closest(".lang");
      if(b && b.dataset.lang) pinta(b.dataset.lang);
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", instal_la);
  }else{
    instal_la();
  }
})();

/* ---- Analitica (GoatCounter, sense cookies) ---------------------- */
/* Enganxa aixo al final del nav.js. Ja porta el teu codi posat.      */
(function () {
  if (['localhost', '127.0.0.1', ''].includes(location.hostname)) return;

  // Traiem ?lang del cami: si no, cada pagina es multiplicaria per set.
  // Deixem ?id perque vulguis saber quins clubs mira la gent.
  window.goatcounter = {
    path: function () {
      var id = new URLSearchParams(location.search).get('id');
      return id ? location.pathname + '?id=' + id : location.pathname;
    }
  };

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter',
                 'https://ranquing-futbol.goatcounter.com/count');
  document.head.appendChild(s);
})();

/* ---- Atribucio de les equipacions -------------------------------- */
/* Enganxa aixo al final del nav.js, DESPRES del bloc d'analitica.     */
/*                                                                     */
/* Els fitxers d'equipacio de Wikimedia Commons que son CC BY-SA o     */
/* GFDL demanen atribucio. Com que el nav.js el carreguen totes les    */
/* pagines, posant-ho aqui la linia surt a totes alhora -i a les que   */
/* facis d'ara endavant tambe, sense haver-te'n de recordar.           */
/*                                                                     */
/* No fa res si la pagina ja porta la linia: aixi el club.html no      */
/* l'ensenya dues vegades mentre no li treguis la que te escrita.      */

(function () {
  'use strict';

  var TXT = {
    ca: 'Equipacions', es: 'Equipaciones', en: 'Kits',
    fr: 'Maillots', de: 'Trikots', it: 'Maglie', pt: 'Equipamentos'
  };
  var VEURE = {
    ca: 'atribució i llicències', es: 'atribución y licencias',
    en: 'attribution and licences', fr: 'attribution et licences',
    de: 'Namensnennung und Lizenzen', it: 'attribuzione e licenze',
    pt: 'atribuição e licenças'
  };

  function idioma() {
    var q = new URLSearchParams(location.search).get('lang');
    var l = q || (navigator.language || 'ca').slice(0, 2);
    return TXT[l] ? l : 'ca';
  }

  function posa() {
    var peu = document.querySelector('footer .wrap') ||
              document.querySelector('footer');
    if (!peu || peu.querySelector('.atrib')) return;   // ja hi es

    var l = idioma();
    var sufix = new URLSearchParams(location.search).get('lang')
                ? '?lang=' + l : '';

    var d = document.createElement('div');
    d.className = 'atrib';
    d.style.cssText = 'margin-top:7px;font-size:11px;color:#8fa598';
    d.innerHTML = TXT[l] + ': <a href="https://commons.wikimedia.org/"' +
      ' rel="noopener" target="_blank" style="color:#8fa598">' +
      'Wikimedia Commons</a> · <a href="equipacions.html' + sufix +
      '" style="color:#8fa598">' + VEURE[l] + '</a>';
    peu.appendChild(d);
  }

  function arrenca() {
    posa();
    // A l'index.html el peu es <div class="wrap" data-t="footer"></div>
    // i el nav.js hi escriu el text tradu\u00eft amb innerHTML, cosa que
    // s'endu la nostra linia. En lloc de barallar-nos per l'ordre
    // d'execucio, vigilem el peu i la tornem a posar cada cop que el
    // seu contingut canvi\u00ef: aixi funciona tant si el text s'escriu
    // abans com despres, i tambe en canviar d'idioma.
    var peu = document.querySelector('footer');
    if (!peu || typeof MutationObserver === 'undefined') return;
    var ocupat = false;
    new MutationObserver(function () {
      if (ocupat) return;              // no reaccionem al nostre propi canvi
      ocupat = true;
      posa();
      ocupat = false;
    }).observe(peu, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrenca);
  } else {
    arrenca();
  }
})();
