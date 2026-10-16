/* origen.js — atribución de PRIMER toque para los enlaces de WhatsApp (16-oct-2026, Operación N.º 1).
   El «(ref: XXX)» de cada enlace dice desde qué página se pulsó el botón; esto añade la página por la que la
   persona ENTRÓ al sitio en esa sesión y el canal (g Google · b otro buscador · ia asistente de IA · rs redes ·
   d directo · o otro · i interno sin dato). Resultado en el chat: «(ref: SUC-S/e:HON-E/g)».
   Solo sessionStorage de la pestaña: sin cookies, sin datos personales, nada sale del navegador salvo el texto
   que la propia persona decide enviar por WhatsApp. */
(function () {
  var S; try { S = window.sessionStorage; S.setItem("_t", "1"); S.removeItem("_t"); } catch (e) { return; }
  function codPagina() {
    var a = document.querySelector('a[href*="wa.me/"][href*="ref:"]'); if (!a) return null;
    var m = decodeURIComponent(a.getAttribute("href")).match(/\(ref:\s*([A-Za-z0-9-]{2,24})\)/);
    return m ? m[1] : null;
  }
  function canal() {
    var r = document.referrer, h; if (!r) return "d";
    try { h = new URL(r).hostname; } catch (e) { return "o"; }
    if (h === location.hostname) return "i";
    if (/(^|\.)google\./.test(h)) return "g";
    if (/bing\.|duckduckgo\.|yahoo\.|yandex\.|ecosia\.|brave\./.test(h)) return "b";
    if (/chatgpt\.com|openai\.com|perplexity\.ai|gemini\.google|copilot\.microsoft|claude\.ai/.test(h)) return "ia";
    if (/facebook\.|instagram\.|tiktok\.|linkedin\.|youtube\.|whatsapp\.|telegram\.|^t\.co$|twitter\.|^x\.com$/.test(h)) return "rs";
    return "o";
  }
  if (!S.getItem("e_ref")) {
    var k = canal();
    S.setItem("e_ref", k === "i" ? "X" : (codPagina() || "X"));
    S.setItem("e_can", k);
  }
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href*="wa.me/"]'); if (!a) return;
    var h = a.getAttribute("href"); if (/\/e:/.test(h)) return;
    var e = S.getItem("e_ref"), k = S.getItem("e_can"); if (!e) return;
    var n = h.replace(/\(ref:(%20|\s)*([A-Za-z0-9-]{2,24})\)/, function (m, sp, c) {
      return "(ref:%20" + c + "/e:" + e + "/" + k + ")";
    });
    if (n !== h) a.setAttribute("href", n);
  }, true);
})();
