/* Banner de instalación PWA — Abg. Adelaida Mata */
(function(){var BRAND="Abg. Adelaida Mata";var ICON="icon-192.png";
try{if(matchMedia("(display-mode: standalone)").matches||navigator.standalone)return;if(localStorage.getItem("pwaHide"))return;}catch(e){}
function banner(inner){var b=document.createElement("div");b.id="pwaB";
b.style.cssText="position:fixed;left:12px;right:12px;bottom:12px;z-index:99999;background:linear-gradient(135deg,#0e2440,#081627);color:#fff;border:1px solid rgba(201,162,75,.55);border-radius:16px;padding:12px 14px;display:flex;align-items:center;gap:11px;box-shadow:0 16px 44px -12px rgba(0,0,0,.75);font-family:system-ui,-apple-system,sans-serif;max-width:460px;margin:0 auto";
b.innerHTML=inner;document.body.appendChild(b);return b;}
function close(){var e=document.getElementById("pwaB");if(e)e.remove();try{localStorage.setItem("pwaHide","1");}catch(x){}}
var iOS=/iphone|ipad|ipod/i.test(navigator.userAgent);var deferred=null;
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();deferred=e;
banner('<img src="'+ICON+'" width="42" height="42" style="border-radius:10px;flex:none"><div style="flex:1;text-align:left;font-size:14px;line-height:1.3"><b style="color:#c9a24b">Instala la app</b><br>'+BRAND+' en tu teléfono</div><button id="pwaGo" style="flex:none;background:linear-gradient(135deg,#c9a24b,#a5822f);color:#0e2440;border:0;font-weight:800;padding:11px 16px;border-radius:11px;font-size:14px;cursor:pointer">Instalar</button><span id="pwaX" style="flex:none;color:#9fb0c4;font-size:22px;line-height:1;padding:0 4px;cursor:pointer">&times;</span>');
document.getElementById("pwaGo").onclick=function(){deferred.prompt();deferred.userChoice.finally(close);};document.getElementById("pwaX").onclick=close;});
if(iOS){window.addEventListener("load",function(){setTimeout(function(){banner('<div style="flex:1;text-align:left;font-size:13.5px;line-height:1.35">Instala la app: toca <b>Compartir</b> ↑ y luego <b>“Agregar a inicio”</b></div><span id="pwaX" style="flex:none;color:#9fb0c4;font-size:22px;cursor:pointer">&times;</span>');var x=document.getElementById("pwaX");if(x)x.onclick=close;},3500);});}
})();
