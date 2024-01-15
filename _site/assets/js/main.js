(function() {
  "use strict";
  /* Easy selector helper function */
  // const select = (el, all = false) => {
  //   el = el.trim()
  //   if (all) {
  //     return [...document.querySelectorAll(el)]
  //   } else {
  //     return document.querySelector(el)
  //   }
  // }

  /* Easy event listener function */
  // const on = (type, el, listener, all = false) => {
  //   let selectEl = select(el, all)
  //   if (selectEl) {
  //     if (all) {
  //       selectEl.forEach(e => e.addEventListener(type, listener))
  //     } else {
  //       selectEl.addEventListener(type, listener)
  //     }
  //   }
  // }

  /* Easy on scroll event listener */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /* Ativa item do Navbar quando clicado em item com scroll */
  // let navbarlinks = select('#navbar .scrollto', true)
  // const navbarlinksActive = () => {
  //   let position = window.scrollY + 200
  //   navbarlinks.forEach(navbarlink => {
  //     if (!navbarlink.hash) return
  //     let section = select(navbarlink.hash)
  //     if (!section) return
  //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
  //       navbarlink.classList.add('active')
  //     } else {
  //       navbarlink.classList.remove('active')
  //     }
  //   })
  // }
  // window.addEventListener('load', navbarlinksActive)
  // onscroll(document, navbarlinksActive)

  /* Scrolls to an element with header offset */
  // const scrollto = (el) => {
  //   let header = select('#header')
  //   let offset = header.offsetHeight

  //   if (!header.classList.contains('header-scrolled')) {
  //     offset -= 20
  //   }

  //   let elementPos = select(el).offsetTop
  //   window.scrollTo({
  //     top: elementPos - offset,
  //     behavior: 'smooth'
  //   })
  // }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  // let selectHeader = select('#header')
  // if (selectHeader) {
  //   const headerScrolled = () => {
  //     if (window.scrollY > 100) {
  //       selectHeader.classList.add('header-scrolled')
  //     } else {
  //       selectHeader.classList.remove('header-scrolled')
  //     }
  //   }
  //   window.addEventListener('load', headerScrolled)
  //   onscroll(document, headerScrolled)
  // }

  /* Botão de voltar ao topo */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('#navbar').classList.toggle('navbar-mobile')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })

  /**
   * Mobile nav dropdowns activate
   */
  // on('click', '.navbar .dropdown > a', function(e) {
  //   if (select('#navbar').classList.contains('navbar-mobile')) {
  //     e.preventDefault()
  //     this.nextElementSibling.classList.toggle('dropdown-active')
  //   }
  // }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()

  //     let navbar = select('#navbar')
  //     if (navbar.classList.contains('navbar-mobile')) {
  //       navbar.classList.remove('navbar-mobile')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('bi-list')
  //       navbarToggle.classList.toggle('bi-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  // window.addEventListener('load', () => {
  //   if (window.location.hash) {
  //     if (select(window.location.hash)) {
  //       scrollto(window.location.hash)
  //     }
  //   }
  // });

  /**
   * Preloader
   */
  // let preloader = select('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove()
  //   });
  // }

  /* Equipe */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Slide sobre - valores
   */
  new Swiper('.values-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /* Slider */
  new Swiper(".partners", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 8,
      },
    },
  });

  /* ------ Formulários Hubspot ------ */
  window.addEventListener('load', () => {
    // Telerradiologia
    if(document.getElementById('telerradiologia')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "e376ceaf-f166-44ea-ae5e-1b3496892a43",
        target: '#telerradiologia'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = "71dc0388-92d1-4fff-96a8-299545e061a2"
      }
      else if(language.value == 'en'){
        formOptions.formId = "7304222d-f161-4b9a-a5eb-bd09c878309d"
      }
      else {
        formOptions.formId = "e376ceaf-f166-44ea-ae5e-1b3496892a43"
      }

      hbspt.forms.create(formOptions);
    }

    // Consultório
    if(document.getElementById('consultorios')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "44bd69ae-b894-4476-bb23-c7125e388247",
        target: '#consultorios'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = "6654ab5b-cf37-4d4f-a106-be4e2d015356"
      }
      else if(language.value == 'en'){
        formOptions.formId = "17e87934-5cff-4a92-9afb-1845d4b555b5"
      }
      else {
        formOptions.formId = "44bd69ae-b894-4476-bb23-c7125e388247"
      }

      hbspt.forms.create(formOptions);
    }

    // Clinica
    if(document.getElementById('clinicas')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "e0fcad69-c758-4bc7-b694-fe44cefb1af6",
        target: '#clinicas'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = "8ab0e137-c5f5-4142-a724-6433d984c018"
      }
      else if(language.value == 'en'){
        formOptions.formId = "5524c00f-30fa-4e9f-ba9b-f744a583b032"
      }
      else {
        formOptions.formId = "e0fcad69-c758-4bc7-b694-fe44cefb1af6"
      }

      hbspt.forms.create(formOptions);
    }

    // Centros de Radiologia
    if(document.getElementById('centros_radiologia')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "59d0ff11-a63b-4368-9ad7-725c4630dd9f",
        target: '#centros_radiologia'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = "144a3f19-8c64-4d08-9f58-263364713c72"
      }
      else if(language.value == 'en'){
        formOptions.formId = "4baf0807-b2f9-4bb6-aad0-f6a9defcfdac"
      }
      else {
        formOptions.formId = "59d0ff11-a63b-4368-9ad7-725c4630dd9f"
      }

      hbspt.forms.create(formOptions);
    }

    // Centrais de Laudo
    if(document.getElementById('centrais_laudo')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "86fe8d85-ad8c-4ea9-ae7e-0d202564ba12",
        target: '#centrais_laudo'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = "cac19070-6f81-448d-a8b4-2bb381f6764e"
      }
      else if(language.value == 'en'){
        formOptions.formId = "88fbde29-8c19-4068-b5e0-fb7a323211ef"
      }
      else {
        formOptions.formId = "86fe8d85-ad8c-4ea9-ae7e-0d202564ba12"
      }

      hbspt.forms.create(formOptions);
    }

    // Hospitais
    if(document.getElementById('hospitais')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "61452a6c-845e-4bf4-9fba-caa40a989e02",
        target: '#hospitais'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = "5c5b47be-394c-4476-a44e-33702123e046"
      }
      else if(language.value == 'en'){
        formOptions.formId = "0ebd0468-934c-4c70-9432-e392a96b5be8"
      }
      else {
        formOptions.formId = "61452a6c-845e-4bf4-9fba-caa40a989e02"
      }

      hbspt.forms.create(formOptions);
    }
  });
  
  /* Hubspot - Newsletter */
  window.addEventListener('load', () => {
    if(document.getElementById('newsletter')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "8e7177fa-cb2f-4a31-934b-81e3a4c91ef8",
        target: '#newsletter'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = "b5f6f6fe-dfe8-442c-ac00-82619ceff512"
      }
      else if(language.value == 'en'){
        formOptions.formId = "424ea7dc-406f-4818-a201-239b235335a8"
      }
      else {
        formOptions.formId = "8e7177fa-cb2f-4a31-934b-81e3a4c91ef8"
      }

      hbspt.forms.create(formOptions);
    }
  });

    /* Ano atual */
  window.addEventListener('load', ()=> {
    let current_year = document.getElementById('current_year')

    if(!current_year){return}

    const date = new Date();
    current_year.innerHTML = date.getFullYear();
  });

  /**
   * Institutional video
   */
  // window.addEventListener('load', () => {
  //   let video = document.getElementById("video");
  //   let image = document.getElementById("image");
    
  //   if(!video && !image){return}
    
  //   let language = document.getElementById('language');
    
  //   if (language.value == 'es' || language.value == 'en'){
  //     video.classList.add("disappear");
  //     image.classList.remove("disappear");
  //   } else {
  //     video.classList.remove("disappear");
  //     image.classList.add("disappear");
  //   }
  // });

  /**
   * Google Analytics
   */
  // window.addEventListener('load', () => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'G-9G5F134FT9');
  // });

  /**
   * Google ads
   */
  // window.addEventListener('load', () => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'AW-754517111');
  // });

  /**
   * Hotjar
   */
  // (function(h,o,t,j,a,r){
  //   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //   h._hjSettings={hjid:2448222,hjsv:6};
  //   a=o.getElementsByTagName('head')[0];
  //   r=o.createElement('script');r.async=1;
  //   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //   a.appendChild(r);
  // })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

  /**
   * Pixell Facebook
   */
  // !function(f,b,e,v,n,t,s){
  //   if(f.fbq)return;n=f.fbq=function(){
  //     n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
  //   };
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //     n.queue=[];t=b.createElement(e);t.async=!0;
  //     t.src=v;s=b.getElementsByTagName(e)[0];
  //     s.parentNode.insertBefore(t,s)}(window, document,'script',
  //     'https://connect.facebook.net/en_US/fbevents.js');
  //     fbq('init', '981313072668923');
  //     fbq('track', 'PageView');

  /**
   * Elastic
   */
  //  ;(function(d, s, c) {
  //    var j = d.createElement(s),
  //      t = d.getElementsByTagName(s)[0]
  //    j.src = 'assets/js/elastic-apm-rum.umd.min.js'
  //    j.onload = function() {elasticApm.init(c)}
  //    t.parentNode.insertBefore(j, t)
  //  })(document, 'script', {serviceName: 'cfaz-site-frontend', serverUrl: 'https://f96389a6cd1d452aa9360d67fb2ac784.apm.us-east1.gcp.elastic-cloud.com:443'})
  
  /* Tradução pelo browser */
  var hostname = window.location.hostname;
  var referrer = document.referrer;
  var landingPage = !referrer || referrer.indexOf(hostname) == -1;

  var lang = navigator.language || navigator.userLanguage;
    
  if (lang.indexOf('es') == 0 && landingPage){
    window.location = '/es/';
  }else if(lang.indexOf('en') == 0 && landingPage){
    window.location = '/en/';
  }
})()