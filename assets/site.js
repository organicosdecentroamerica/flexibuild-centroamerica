(()=>{const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));nav.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open&&d.classList.contains('nav-dropdown'))nav.querySelectorAll('.nav-dropdown').forEach(other=>{if(other!==d)other.open=false})}));}const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());const form=document.querySelector('#contact-form');if(form){const projectSelect=form.querySelector('[name="project"]');const projectFromUrl=new URLSearchParams(window.location.search).get('proyecto');const projectOptions={'food-truck':'Food truck, trailer o camper','comercio-rodante':'Local comercial u oficina','unidad-movil':'Clínica, laboratorio o unidad móvil'};if(projectSelect&&projectOptions[projectFromUrl])projectSelect.value=projectOptions[projectFromUrl];const phoneInput=form.querySelector('#phone');let phonePicker=null;if(phoneInput&&window.intlTelInput){phonePicker=window.intlTelInput(phoneInput,{initialCountry:'ni',separateDialCode:false,nationalMode:false,allowDropdown:true,autoPlaceholder:'polite',formatOnDisplay:true,loadUtils:()=>import('https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.2/build/js/utils.js')});phoneInput.addEventListener('blur',()=>{const raw=phoneInput.value.trim();if(raw.startsWith('00'))phoneInput.value='+'+raw.slice(2);});}form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);let phone=(data.get('phone')||'').toString().trim();if(phone.startsWith('00'))phone='+'+phone.slice(2);if(phonePicker){const selected=phonePicker.getNumber();if(selected)phone=selected;}const message=['Consulta desde el sitio web FlexiBuild Centroamérica','Nombre: '+data.get('name'),'Correo: '+data.get('email'),'Teléfono / WhatsApp del interesado: '+(phone||'No indicado'),'Tipo de proyecto: '+data.get('project'),'Detalles: '+data.get('message')].join('\n');window.open('https://wa.me/50581560033?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');});}
const socialItems=[
{label:'Facebook',url:'https://www.facebook.com/people/FlexiBuild-Centroam%C3%A9rica/61583447635132/',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.09 4.39 23.08 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.28h3.32l-.53 3.49h-2.79V24C19.61 23.08 24 18.09 24 12.07Z"/></svg>'},
{label:'Instagram',url:'https://www.instagram.com/flexibuild_centroamerica/',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="instagram-brand" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FFDC80"/><stop offset=".35" stop-color="#F56040"/><stop offset=".65" stop-color="#C13584"/><stop offset="1" stop-color="#405DE6"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#instagram-brand)" stroke-width="2.4"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#C13584" stroke-width="2.2"/><circle cx="17.6" cy="6.6" r="1.4" fill="#F56040"/></svg>'},
{label:'TikTok',url:'https://www.tiktok.com/@flexibuildcentroamerica',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#25F4EE" d="M15 3h3c.2 2.2 1.3 3.7 3 4.4v3.2a9 9 0 0 1-6-2.1v6.3a6 6 0 1 1-6-6h1v3.3h-1a2.7 2.7 0 1 0 2.7 2.7V3H15z"/><path fill="#FE2C55" d="M13 5h2v9.8a6 6 0 0 1-6 6c-1.6 0-3-.6-4.1-1.7a6 6 0 0 0 8.1-5.3z"/><path fill="#000" d="M15 3h3c.2 2.2 1.3 3.7 3 4.4v3.2a9 9 0 0 1-6-2.1v6.3a6 6 0 0 1-11.8 1.3 6 6 0 0 0 9.5-4.8V3z"/></svg>'},
{label:'LinkedIn',url:'https://www.linkedin.com/company/flexibuild-centroamerica',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0A66C2" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM8 18H5V9h3v9ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32V18h-3V9h2.88v1.23h.04A3.16 3.16 0 0 1 15.62 8c3.04 0 3.38 2 3.38 4.6V18Z"/></svg>'},
{label:'YouTube',url:'https://www.youtube.com/@flexibuildcentroamerica',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>'},
{label:'Google Business',url:'https://share.google/YOmFEcV2D2ZxyWR6A',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.7 4.7 0 0 1-2 3.1v2.5h3.2c1.9-1.8 3-4.4 3-7.4Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-4V7.4H3.1a10 10 0 0 0 0 9.2Z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.7 9.7 0 0 0 12 2a10 10 0 0 0-8.9 5.4L6.4 10C7.2 7.7 9.4 5.9 12 5.9Z"/></svg>'}
];
const buildSocialFooter=()=>{
 const section=document.createElement('div');section.className='footer-social';section.id='redes-sociales';
 section.innerHTML='<div class="footer-social-heading"><h2>Visita nuestras redes sociales</h2><div class="social-links"></div></div><a class="oneecard-link" href="https://oneecard.com/flexibuildcentroamerica" target="_blank" rel="noopener noreferrer"><span class="oneecard-mark" aria-hidden="true">F</span><span><strong>Nuestra tarjeta electrónica</strong><small>OneeCard · FlexiBuild Centroamérica</small></span><span aria-hidden="true">↗</span></a>';
 const links=section.querySelector('.social-links');
 socialItems.forEach(item=>{const a=document.createElement('a');a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',item.label+' de FlexiBuild Centroamérica');a.title=item.label;a.innerHTML=item.svg;links.appendChild(a);});
 return section;
};
const footer=document.querySelector('footer.footer,footer');
if(footer&&!footer.querySelector('#redes-sociales')){
 const existing=[...footer.querySelectorAll('.social-links')].find(el=>[...el.querySelectorAll('a')].some(a=>/facebook\.com|instagram\.com|tiktok\.com|linkedin\.com|youtube\.com|share\.google/i.test(a.href)));
 const section=buildSocialFooter();
 if(existing)existing.replaceWith(section);
 else{const legal=footer.querySelector('.footer-legal,p');if(legal)footer.insertBefore(section,legal);else footer.appendChild(section);}
}
})();
/* Carruseles accesibles para las galerías de imágenes del sitio. */
(()=>{
  if(window.location.pathname.endsWith('/galerias.html'))return;
  const galleries=[...document.querySelectorAll('.gallery-grid')].filter(g=>g.querySelectorAll(':scope > .gallery-card').length>1);
  if(!galleries.length)return;

  const dialog=document.createElement('dialog');
  dialog.className='gallery-lightbox';
  dialog.setAttribute('aria-labelledby','gallery-lightbox-title');
  dialog.innerHTML='<div class="gallery-lightbox-shell"><button class="gallery-lightbox-close" type="button" aria-label="Cerrar imagen ampliada">×</button><div class="gallery-lightbox-stage"><button class="gallery-lightbox-prev" type="button" aria-label="Imagen anterior">‹</button><figure><img alt=""><figcaption><h2 id="gallery-lightbox-title"></h2><p></p><span class="gallery-lightbox-counter" aria-live="polite"></span></figcaption></figure><button class="gallery-lightbox-next" type="button" aria-label="Imagen siguiente">›</button></div></div>';
  document.body.appendChild(dialog);

  let currentGallery=null,currentIndex=0,returnFocus=null;
  const lightboxImage=dialog.querySelector('img');
  const lightboxTitle=dialog.querySelector('h2');
  const lightboxCaption=dialog.querySelector('figcaption p');
  const lightboxCounter=dialog.querySelector('.gallery-lightbox-counter');

  function cardsFor(gallery){return [...gallery.querySelectorAll(':scope > .gallery-card')];}
  function updateLightbox(){
    if(!currentGallery)return;
    const cards=cardsFor(currentGallery),card=cards[currentIndex];
    const image=card.querySelector('img');
    lightboxImage.src=image.currentSrc||image.src;
    lightboxImage.alt=image.alt||'';
    lightboxTitle.textContent=card.querySelector('h3')?.textContent?.trim()||image.alt||'Imagen de galería';
    lightboxCaption.textContent=card.querySelector('div p')?.textContent?.trim()||'';
    lightboxCounter.textContent=(currentIndex+1)+' / '+cards.length;
  }
  function setSlide(gallery,index){
    if(typeof gallery.__setGallerySlide==='function'){gallery.__setGallerySlide(index);return;}
    const cards=cardsFor(gallery);
    currentIndex=(index+cards.length)%cards.length;
    cards.forEach((card,i)=>{card.hidden=i!==currentIndex;card.classList.toggle('is-active',i===currentIndex);});
    if(dialog.open&&currentGallery===gallery)updateLightbox();
  }
  function openLightbox(gallery,index,focusTarget){
    currentGallery=gallery;
    returnFocus=focusTarget;
    setSlide(gallery,index);
    updateLightbox();
    dialog.showModal();
    dialog.querySelector('.gallery-lightbox-close').focus();
  }
  function moveLightbox(delta){
    if(!currentGallery)return;
    setSlide(currentGallery,currentIndex+delta);
  }

  dialog.querySelector('.gallery-lightbox-close').addEventListener('click',()=>dialog.close());
  dialog.querySelector('.gallery-lightbox-prev').addEventListener('click',()=>moveLightbox(-1));
  dialog.querySelector('.gallery-lightbox-next').addEventListener('click',()=>moveLightbox(1));
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();moveLightbox(-1);}
    if(event.key==='ArrowRight'){event.preventDefault();moveLightbox(1);}
  });
  dialog.addEventListener('close',()=>{
    if(returnFocus?.isConnected)returnFocus.focus();
    currentGallery=null;
    returnFocus=null;
  });

  galleries.forEach(gallery=>{
    const cards=cardsFor(gallery);
    gallery.classList.add('gallery-carousel');
    gallery.setAttribute('role','group');
    gallery.setAttribute('aria-roledescription','carrusel');
    gallery.setAttribute('aria-label','Galería de imágenes');
    const wrapper=document.createElement('div');
    wrapper.className='gallery-carousel-wrapper';
    gallery.before(wrapper);
    wrapper.append(gallery);
    const controls=document.createElement('div');
    controls.className='gallery-carousel-controls';
    controls.setAttribute('aria-label','Controles de la galería');
    controls.innerHTML='<button class="gallery-carousel-prev" type="button" aria-label="Ver imagen anterior">‹</button><span class="gallery-carousel-count" aria-live="polite"></span><button class="gallery-carousel-next" type="button" aria-label="Ver imagen siguiente">›</button><button class="gallery-carousel-toggle" type="button"></button>';
    wrapper.prepend(controls);

    let index=0,manuallyPaused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pointerPaused=false,focusPaused=false;
    const counter=controls.querySelector('.gallery-carousel-count');
    const toggle=controls.querySelector('.gallery-carousel-toggle');
    const paintToggle=()=>{
      toggle.textContent=manuallyPaused?'▶ Reanudar':'Ⅱ Pausar';
      toggle.setAttribute('aria-label',manuallyPaused?'Reanudar el carrusel':'Pausar el carrusel');
      toggle.setAttribute('aria-pressed',String(manuallyPaused));
    };
    const setActive=(nextIndex)=>{
      index=(nextIndex+cards.length)%cards.length;
      if(currentGallery===gallery)currentIndex=index;
      cards.forEach((card,i)=>{
        const active=i===index;
        card.hidden=!active;
        card.classList.toggle('is-active',active);
        card.setAttribute('aria-label','Imagen '+(i+1)+' de '+cards.length);
      });
      counter.textContent=(index+1)+' / '+cards.length;
    };
    gallery.__setGallerySlide=nextIndex=>{
      setActive(nextIndex);
      if(dialog.open&&currentGallery===gallery){currentIndex=index;updateLightbox();}
    };
    const manualMove=delta=>{manuallyPaused=true;paintToggle();setActive(index+delta);};
    controls.querySelector('.gallery-carousel-prev').addEventListener('click',()=>manualMove(-1));
    controls.querySelector('.gallery-carousel-next').addEventListener('click',()=>manualMove(1));
    toggle.addEventListener('click',()=>{manuallyPaused=!manuallyPaused;paintToggle();});
    wrapper.addEventListener('pointerenter',()=>{pointerPaused=true;});
    wrapper.addEventListener('pointerleave',()=>{pointerPaused=false;});
    wrapper.addEventListener('focusin',()=>{focusPaused=true;});
    wrapper.addEventListener('focusout',event=>{if(!wrapper.contains(event.relatedTarget))focusPaused=false;});
    cards.forEach((card,i)=>{
      const image=card.querySelector('img');
      const link=image?.closest('a');
      if(link)link.addEventListener('click',event=>{event.preventDefault();openLightbox(gallery,i,link);});
    });
    paintToggle();
    setActive(0);
    window.setInterval(()=>{
      const rect=gallery.getBoundingClientRect();
      const visible=rect.bottom>0&&rect.top<window.innerHeight;
      if(!manuallyPaused&&!pointerPaused&&!focusPaused&&!dialog.open&&document.visibilityState==='visible'&&visible)setActive(index+1);
    },6000);
  });
})();

/* Carruseles manuales para galerías de videos: no cambian de video mientras se reproduce. */
(()=>{
  const groups=[...document.querySelectorAll('.video-embed-grid,.video-grid')];
  groups.forEach(group=>{
    const slides=[...group.children].filter(item=>item.matches('.video-embed,.video-tile'));
    if(slides.length<2)return;
    group.classList.add('video-carousel');
    group.setAttribute('role','group');
    group.setAttribute('aria-roledescription','carrusel de videos');
    group.setAttribute('aria-label','Galería de videos');

    const wrapper=document.createElement('div');
    wrapper.className='video-carousel-wrapper';
    group.before(wrapper);
    wrapper.append(group);

    const controls=document.createElement('div');
    controls.className='video-carousel-controls';
    controls.setAttribute('aria-label','Controles de la galería de videos');
    controls.innerHTML='<button class="video-carousel-prev" type="button" aria-label="Ver video anterior">‹</button><span class="video-carousel-count" aria-live="polite"></span><button class="video-carousel-next" type="button" aria-label="Ver video siguiente">›</button>';
    wrapper.prepend(controls);

    let activeIndex=0;
    const counter=controls.querySelector('.video-carousel-count');
    const setActive=nextIndex=>{
      activeIndex=(nextIndex+slides.length)%slides.length;
      slides.forEach((slide,index)=>{
        const active=index===activeIndex;
        slide.hidden=!active;
        slide.classList.toggle('is-active',active);
        slide.setAttribute('aria-label','Video '+(index+1)+' de '+slides.length);
        const iframe=slide.querySelector('iframe');
        if(iframe){
          if(!iframe.dataset.videoCarouselSrc)iframe.dataset.videoCarouselSrc=iframe.getAttribute('src')||'';
          const desired=active?iframe.dataset.videoCarouselSrc:'about:blank';
          if(iframe.getAttribute('src')!==desired)iframe.setAttribute('src',desired);
        }
      });
      counter.textContent=(activeIndex+1)+' / '+slides.length;
    };
    controls.querySelector('.video-carousel-prev').addEventListener('click',()=>setActive(activeIndex-1));
    controls.querySelector('.video-carousel-next').addEventListener('click',()=>setActive(activeIndex+1));
    setActive(0);
  });
})();
