import{a as v,S as f,i}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const h=a=>a.map(e=>`
          <li class="gallery-card">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img
                class="gallery-img"
                src="${e.webformatURL}"
                alt="${e.tags}"
                loading="lazy"
              />
              <div class="info">
  <div class="info-list">
    <span class="info-item">Likes</span>
    <span class="info-item-value">${e.likes}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Views</span>
    <span class="info-item-value">${e.views}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Comments</span>
    <span class="info-item-value">${e.comments}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Downloads</span>
    <span class="info-item-value">${e.downloads}</span>
  </div>
</div>
            </a>
          </li>`).join(""),L="48308649-6275080a65400e008e92230b2",g=(a,e)=>{const c={params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return v.get("https://pixabay.com/api/",c)},b=document.querySelector(".search-form"),w=document.querySelector(".search-input");document.querySelector(".search-button");const p=document.querySelector(".gallery"),d=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250}),r=1,n="";o.classList.add("is-hidden");const S=async a=>{try{if(a.preventDefault(),n=w.value.trim(),!n){i.warning({message:"Please enter a search term.",position:"topRight"});return}r=1,o.classList.add("is-hidden"),p.innerHTML="",d.classList.add("active");const e=await g(n,r);if(d.classList.remove("active"),e.data.total===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p.insertAdjacentHTML("beforeend",h(e.data.hits)),o.classList.remove("is-hidden"),y.refresh(),r*15>=e.data.totalHits?(o.classList.add("is-hidden"),o.removeEventListener("click",u),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(o.classList.remove("is-hidden"),o.addEventListener("click",u))}catch(e){d.classList.remove("active"),i.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",e)}},u=async()=>{try{r++;const a=await g(n,r);p.insertAdjacentHTML("beforeend",h(a.data.hits));const e=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),y=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(a){console.log(a)}};b.addEventListener("submit",S);o.addEventListener("click",u);
//# sourceMappingURL=index.js.map
