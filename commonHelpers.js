import{S as u,i as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function d(e){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44041025-2e091a4b621ea033778029d2c",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${o}?${s}`;return fetch(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits)}let l;function h(e){const o=document.querySelector(".gallery");o.innerHTML=e.map(s=>m(s)).join(""),l?l.refresh():l=new u(".gallery a",{captionDelay:250,captionsData:"alt"})}function m(e){return`
    <div class="photo-card">
      <a class="link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
        <div class="info">
        <li><h3 class="info-title">Likes</h3><p class="info-text">${e.likes}</p></li>
        <li><h3 class="info-title">Views</h3><p class="info-text">${e.views}</p></li>
        <li><h3 class="info-title">Comments</h3><p class="info-text">${e.comments}</p></li>
        <li><h3 class="info-title">Downloads</h3><p class="info-text">${e.downloads}</p></li>
      </div>
      </a>
    </div>
  `}function p(){const e=document.querySelector(".loader");e.style.display="block"}function y(){const e=document.querySelector(".loader");e.style.display="none"}function a(e){f.error({icon:"",backgroundColor:"#ef4040",position:"topRight",message:"&#11198; Sorry, there are no images matching your search query. Please, try again!",messageColor:"white"})}function g(){const e=document.querySelector(".gallery");e.innerHTML=""}const L=document.querySelector(".form"),c=document.querySelector(".input");L.addEventListener("submit",e=>{e.preventDefault();const o=c.value.trim();if(!o){a();return}p(),d(o).then(s=>{c.value===""?(g(),a()):h(s)}).catch(s=>{a(message)}).finally(()=>{y()})});
//# sourceMappingURL=commonHelpers.js.map
