(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const n=()=>{const s=document.querySelector(".header__bars"),t=document.querySelector(".mobile-nav"),l=document.querySelectorAll(".mobile-nav__link");let r=!1;s.addEventListener("click",()=>{r=!r,r?(t.style.display="flex",document.body.style.overflowY="hidden"):(t.style.display="none",document.body.style.overflowY="auto")}),l.forEach(e=>{e.addEventListener("click",()=>{r=!1,t.style.display="none",document.body.style.overflowY="auto"})})},i=()=>{const s=document.querySelectorAll("#theme-toggle"),t=document.querySelectorAll("#invert-color"),l=localStorage.getItem("theme");l&&t.forEach(e=>e.classList.toggle("invert-colors")),l&&document.body.classList.add(l);const r=()=>{document.body.classList.toggle("light-mode"),document.body.classList.contains("light-mode")?(t.forEach(e=>e.classList.toggle("invert-colors")),localStorage.setItem("theme","light-mode")):(localStorage.removeItem("theme"),t.forEach(e=>e.classList.toggle("invert-colors")),document.body.removeAttribute("class"))};s.forEach(e=>e.addEventListener("click",r))};n();i();
