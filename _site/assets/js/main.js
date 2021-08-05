(function() {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
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
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
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

  /**
   * Partners slider
   */
  new Swiper(".partners", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Form Hubspot
   */
  window.addEventListener('load', () => {
    let form_id_ptbr = '3b9c7778-9d4f-4c82-8439-8af6fb5dcb7b';
    let form_id_es = 'db70410f-7c47-4fcc-b892-97b4a8314c27';
    let form_id_en = '2f423333-00c6-4177-b590-38cc0aec00d3';
    
    if(document.getElementById('form_contact')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: form_id_ptbr,
        target: '#form_contact'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = form_id_es
      }
      else if(language.value == 'en'){
        formOptions.formId = form_id_en
      }
      else {
        formOptions.formId = form_id_ptbr
      }
      
      hbspt.forms.create(formOptions);
    }

    if(document.getElementById('form_contact_modal')){
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: form_id_ptbr,
        target: '#form_contact_modal'
      }

      let language = document.getElementById('language');

      if(language.value == 'es'){
        formOptions.formId = form_id_es
      }
      else if(language.value == 'en'){
        formOptions.formId = form_id_en
      }
      else {
        formOptions.formId = form_id_ptbr
      }
      
      hbspt.forms.create(formOptions);
    }
  });

  /**
   * Newsletter
   */
  window.addEventListener('load', () => {
    if(document.getElementById('newsletter')){
      hbspt.forms.create({
        region: "na1",
        portalId: "6654092",
        formId: "d9d0ff9f-80df-4d31-9ece-8615c93638f5",
        target: '#newsletter'
      });
    }
  });

  /**
   * Years Old
   */
   window.addEventListener('load', ()=> {
    let cfazAge = document.getElementById('cfaz-age')

    if(!cfazAge){return}

    let ageDiffMilliseconds = Date.now() - new Date('2011');
    let ageDate = new Date(ageDiffMilliseconds);
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);

    cfazAge.innerHTML = age
  });

  /**
   * Google Analytics
   */
  window.addEventListener('load', () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9G5F134FT9');
  });

  /**
   * Hotjar
   */
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2487918,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

  /**
   * Pixell Facebook
   */
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){
      n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
    };
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '981313072668923');
      fbq('track', 'PageView');

  /**
   * Elastic
   */
   ;(function(d, s, c) {
     var j = d.createElement(s),
       t = d.getElementsByTagName(s)[0]
 
     j.src = 'assets/js/elastic-apm-rum.umd.min.js'
     j.onload = function() {elasticApm.init(c)}
     t.parentNode.insertBefore(j, t)
   })(document, 'script', {serviceName: 'cfaz-site-frontend', serverUrl: 'https://f96389a6cd1d452aa9360d67fb2ac784.apm.us-east1.gcp.elastic-cloud.com:443'})
  
  /**
   * translation by browser
   */
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