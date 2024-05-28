import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function a(t){c.error({icon:"",backgroundColor:"#ef4040",position:"topRight",message:"&#11198; Sorry, there are no images matching your search query. Please, try again!",messageColor:"white"})}function f(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44041025-2e091a4b621ea033778029d2c",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${o}?${s}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{if(e.hits.length===0)a();else return e.hits}).catch(e=>console.log(e))}let l;function d(t){const o=document.querySelector(".gallery");o.innerHTML=t.map(s=>h(s)).join(""),l?l.refresh():l=new u(".gallery a",{captionDelay:250,captionsData:"alt"})}function h(t){return`
    <div class="photo-card">
      <a class="link" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
        <div class="info">
        <li><h3 class="info-title">Likes</h3><p class="info-text">${t.likes}</p></li>
        <li><h3 class="info-title">Views</h3><p class="info-text">${t.views}</p></li>
        <li><h3 class="info-title">Comments</h3><p class="info-text">${t.comments}</p></li>
        <li><h3 class="info-title">Downloads</h3><p class="info-text">${t.downloads}</p></li>
      </div>
      </a>
    </div>
  `}function m(){const t=document.querySelector(".loader");t.style.display="block"}function p(){const t=document.querySelector(".loader");t.style.display="none"}function y(){const t=document.querySelector(".gallery");t.innerHTML=""}const g=document.querySelector(".form"),L=document.querySelector(".input");g.addEventListener("submit",t=>{t.preventDefault(),y();const o=L.value.trim();if(!o){a();return}m(),f(o).then(s=>{d(s)}).catch(s=>{a(message)}).finally(()=>{p()})});
//# sourceMappingURL=commonHelpers.js.map
