import{a as f,i as m,S as b,b as L}from"./assets/vendor-03446ef7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function p(e,r){try{const a={key:"43190537-4b40a622c8cb8590492e33b18",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15},t=await f.get("https://pixabay.com/api/",{params:a});return t.data.hits.length===0&&m.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}),t.data.hits}catch(o){throw console.error("Error fetching images:",o),o}}let i=null,d=null;function w(){i=new L().spin(),document.getElementById("loader").appendChild(i.el)}function v(){i&&(i.stop(),document.getElementById("loader").innerHTML="")}function h(e){w();const r=document.getElementById("gallery");e.forEach(o=>{const a=M(o);r.insertAdjacentHTML("beforeend",a)}),g(),v(),E(r)}function E(e){const r=I(e.firstElementChild);window.scrollBy({top:r*2,behavior:"smooth"})}function I(e){return e.getBoundingClientRect().height}d?d.refresh():g();function M(e){return`<div class="card">
  <div class="image-container">
   <a href="${e.largeImageURL}" data-lightbox="image">
        <img src="${e.webformatURL}" alt="${e.tags}" class="image" />
      </a>
  </div>
  <table class="table">
        <tr> 
          <th class="options-name">Likes</th>
          <th class="options-name">Views</th>
          <th class="options-name">Comments</th>
          <th class="options-name">Downloads</th>
        </tr>
        <tr> 
          <td class="value-description">${e.likes}</td>
          <td class="value-description">${e.views}</td>
          <td class="value-description">${e.comments}</td>
          <td class="value-description">${e.downloads}</td>
        </tr>
    </table>
  </div>`}function g(){d=new b("#gallery a",{captionDelay:250,captionsData:"alt"})}let u=1;const S=15,R=Math.ceil(100/S),B=document.querySelector("form"),y=document.querySelector("#search-input"),c=document.getElementById("gallery"),n=document.createElement("button");n.textContent="Load more";n.classList.add("load-more-btn");n.style.display="none";c.insertAdjacentElement("afterend",n);n.addEventListener("click",C);async function C(){try{const e=y.value.trim(),r=await p(e);h(r),u+=1,u>R&&(c.innerHTML="",n.style.display="none",m.error({title:"End of Search Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.error("Error loading more images:",e)}}B.addEventListener("submit",async e=>{e.preventDefault();const r=y.value.trim();if(r==="")return displayErrorMessage("Please enter a search keyword"),m.error({message:"Please enter a search keyword",position:"topRight"});try{c.innerHTML="";const o=await p(r,u);o.length>0&&(h(o),n.style.display="block")}catch(o){console.error("Error searching images:",o),c.innerHTML="",n.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
