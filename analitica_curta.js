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
